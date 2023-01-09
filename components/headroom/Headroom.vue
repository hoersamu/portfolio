<template>
	<div :style="{ height: data.height + 'px' }">
		<div :class="cls" :style="style">
			<slot ref="slotRef"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import raf from "raf";
import checkActions, { HeadroomData } from "./checkActions";
import { defaultClasses } from "./defaultClasses";
import support3d from "./support3d";

const props = defineProps({
	scroller: {
		type: Function,
		default: () => window,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	upTolerance: {
		type: Number,
		default: 5,
	},
	downTolerance: {
		type: Number,
		default: 0,
	},
	speed: {
		type: Number,
		default: 250,
	},
	easing: {
		type: String,
		default: "ease-in-out",
	},
	zIndex: {
		type: Number,
		default: 9999,
	},
	offset: {
		type: Number,
		default: 0,
	},
	classes: {
		type: Object,
		default: () => defaultClasses,
	},
	footroom: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits([
	"top",
	"not-top",
	"bottom",
	"not-bottom",
	"fix",
	"unfix",
	"pin",
	"unpin",
]);

const data = reactive<HeadroomData>({
	isTop: false,
	isNotTop: false,
	isBottom: false,
	isNotBottom: false,
	isPinned: false,
	isUnpinned: false,
	currentScrollY: 0,
	lastScrollY: 0,
	state: "unfixed",
	translate: 0,
	height: "",
	animation: true,
	isSupport3d: false,
});
const slotRef = ref<HTMLElement | null>(null);

const style = computed(() => {
	let styles: Record<string, string | number> = {
		position: props.disabled || data.state === "unfixed" ? "relative" : "fixed",
		top: "0",
		left: "0",
		right: "0",
		"z-index": props.zIndex,
	};

	if (props.footroom) {
		styles = { ...styles, top: "unset", bottom: "0" };
	}

	// SSR cannot detect scroll position. To prevent flash when component mounted,
	// just add transition styles in browser.
	if (!process.server) {
		styles.transform = data.isSupport3d
			? `translate3d(0, ${data.translate}, 0)`
			: `translateY(${data.translate})`;

		if (data.animation) {
			styles.transition = `all ${props.speed}ms ${props.easing}`;
		}
	}

	return styles;
});

const clsOpts = computed(() => {
	return {
		...defaultClasses,
		...props.classes,
	};
});

const cls = computed(() => {
	let cls = clsOpts.value;
	return props.disabled
		? {}
		: {
				[cls.top]: data.isTop,
				[cls.notTop]: data.isNotTop,
				[cls.bottom]: data.isBottom,
				[cls.notBottom]: data.isNotBottom,
				[cls.pinned]: data.isPinned,
				[cls.unpinned]: data.isUnpinned,
				[cls.initial]: true,
		  };
});

const getViewportHeight = () => {
	return (
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight
	);
};

const getElementPhysicalHeight = (elm: HTMLElement) =>
	Math.max(elm.offsetHeight, elm.clientHeight);

const getDocumentHeight = () => {
	const body = document.body;
	const documentElement = document.documentElement;

	return Math.max(
		body.scrollHeight,
		documentElement.scrollHeight,
		body.offsetHeight,
		documentElement.offsetHeight,
		body.clientHeight,
		documentElement.clientHeight
	);
};

const getElementHeight = (elm: HTMLElement) =>
	Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);

const getScrollerPhysicalHeight = () => {
	const parent = props.scroller();

	return parent === window || parent === document.body
		? getViewportHeight()
		: getElementPhysicalHeight(parent);
};

const getScrollerHeight = () => {
	const parent = props.scroller();

	return parent === window || parent === document.body
		? getDocumentHeight()
		: getElementHeight(parent);
};

const isOutOfBound = (currentScrollY: number) => {
	const pastTop = currentScrollY < 0;

	const scrollerPhysicalHeight = getScrollerPhysicalHeight();
	const scrollerHeight = getScrollerHeight();

	const pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;

	return pastTop || pastBottom;
};

const handleScroll = () => {
	raf(update);
};

const setHeightOffset = () => {
	data.height = slotRef.value
		? slotRef.value.children[0] &&
		  (slotRef.value.firstElementChild as HTMLElement)?.offsetHeight
		: "";
};

const getScrollY = () => {
	let top;
	if (props.scroller().pageYOffset !== undefined) {
		top = props.scroller().pageYOffset;
	} else if (props.scroller().scrollTop !== undefined) {
		top = props.scroller().scrollTop;
	} else {
		top = (
			document.documentElement ||
			document.body.parentNode ||
			document.body
		).scrollTop;
	}
	return top;
};

const update = () => {
	data.currentScrollY = getScrollY();

	if (isOutOfBound(data.currentScrollY)) {
		return;
	}

	if (data.currentScrollY <= props.offset) {
		top();
	} else {
		notTop();
	}

	if (data.currentScrollY + getViewportHeight() >= getScrollerHeight()) {
		bottom();
	} else {
		notBottom();
	}

	const action = checkActions(data, props);

	if (action === "pin") {
		pin();
	} else if (action === "unpin-snap") {
		unpinSnap();
	} else if (action === "unpin") {
		unpin();
	} else if (action === "unfix") {
		unfix();
	}

	data.lastScrollY = data.currentScrollY;
};

const top = () => {
	data.isTop = true;
	data.isNotTop = false;
	emit("top");
};

const notTop = () => {
	data.isTop = false;
	data.isNotTop = true;
	emit("not-top");
};

const bottom = () => {
	data.isBottom = true;
	data.isNotBottom = false;
	emit("bottom");
};

const notBottom = () => {
	data.isNotBottom = true;
	data.isBottom = false;
	emit("not-bottom");
};

const pin = () => {
	data.isPinned = true;
	data.isUnpinned = false;
	data.animation = true;
	emit("pin");
	data.translate = 0;
	nextTick(() => {
		data.state = "pinned";
	});
};

const unpin = () => {
	data.isUnpinned = true;
	data.isPinned = false;
	data.animation = true;
	emit("unpin");
	data.translate = props.footroom ? "100%" : "-100%";
	nextTick(() => {
		data.state = "unpinned";
	});
};

const unpinSnap = () => {
	data.isUnpinned = true;
	data.isPinned = false;
	data.animation = false;
	emit("unpin");
	data.translate = props.footroom ? "100%" : "-100%";
	nextTick(() => {
		data.state = "unpinned";
	});
};

const unfix = () => {
	data.translate = 0;
	data.animation = false;
	emit("unfix");
	nextTick(() => {
		data.state = "unfixed";
	});
};

watch(
	() => props.disabled,
	(newVal) => {
		if (newVal) {
			props.scroller().removeEventListener("scroll", handleScroll);
		} else {
			props.scroller().addEventListener("scroll", handleScroll);
		}
	}
);

onMounted(() => {
	data.isSupport3d = support3d();
	setHeightOffset();

	if (!props.disabled) {
		props.scroller().addEventListener("scroll", handleScroll);
	}

	// When headroom is mounted, call handleScroll to set initial state.
	handleScroll();
});

onUpdated(() => {
	nextTick(setHeightOffset);
});

onBeforeUnmount(() => {
	props.scroller().removeEventListener("scroll", handleScroll);
});
</script>
