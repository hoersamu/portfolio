export interface HeadroomData {
	isTop: boolean;
	isNotTop: boolean;
	isBottom: boolean;
	isNotBottom: boolean;
	isPinned: boolean;
	isUnpinned: boolean;
	currentScrollY: number;
	lastScrollY: number;
	state: "unfixed" | "fixed" | "pinned" | "unpinned";
	translate: string | number;
	height: string | number;
	animation: boolean;
	isSupport3d: boolean;
}

function checkActions(data: HeadroomData, props: any) {
	const direction = data.currentScrollY >= data.lastScrollY ? "down" : "up";
	const distanceScrolled = Math.abs(data.currentScrollY - data.lastScrollY);
	const isInit = data.lastScrollY === undefined;

	let action;

	if (
		data.currentScrollY > data.height + props.offset &&
		data.state === "unfixed" &&
		isInit
	) {
		action = "pin";

		// At the top and not fixed yet.
	} else if (data.currentScrollY <= props.offset && data.state !== "unfixed") {
		action = "unfix";

		// Unfixed and headed down. Carry on.
	} else if (
		data.currentScrollY <= data.height &&
		direction === "down" &&
		data.state === "unfixed"
	) {
		action = "none";
	} else if (
		data.currentScrollY > data.height + props.offset &&
		direction === "down" &&
		data.state === "unfixed" &&
		!isInit
	) {
		action = "unpin-snap";

		// Scrolling down and past the offset.
		// Unpinned the header.
	} else if (
		direction === "down" &&
		["pinned", "unfixed"].indexOf(data.state) >= 0 &&
		data.currentScrollY > data.height + props.offset &&
		distanceScrolled > props.downTolerance
	) {
		action = "unpin";

		// Now, it's time to up.
		// Pin the header.
	} else if (
		direction === "up" &&
		distanceScrolled > props.upTolerance &&
		["pinned", "unfixed"].indexOf(data.state) < 0
	) {
		action = "pin";

		// Still scrolling up, and inside the header.
		// Pin the header regardless of upTolerance
	} else if (
		direction === "up" &&
		data.currentScrollY <= data.height &&
		["pinned", "unfixed"].indexOf(data.state) < 0
	) {
		action = "pin";
	} else {
		action = "none";
	}

	return action;
}

export default checkActions;
