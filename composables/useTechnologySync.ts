const activeTechnology = ref<string | null>(null);

export const useTechnologySync = () => {
	const setActiveTechnology = (technology: string) => {
		activeTechnology.value = technology;
	};

	return {
		activeTechnology,
		setActiveTechnology,
	};
};
