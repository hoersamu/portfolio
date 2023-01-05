import Headroom from "headroom.js";

export const useHeadroom = (
	querySelector: string = "header",
	options?: HeadroomOptions
) => {
	// if you're using a bundler, first import:
	// grab an element
	const headroomElement = document.querySelector(querySelector);
	// construct an instance of Headroom, passing the element
	const headroom = new Headroom(headroomElement);
	// initialise
	headroom.init(options);
};
