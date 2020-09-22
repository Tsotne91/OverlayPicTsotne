// "use strict";

class PictureOverlay {
	constructor(wrapper, overlayDiv, line){
		this.$wrapper = $(wrapper);
		this.$overlayDiv = $(overlayDiv);
		this.$line = $(line);
	}

	isInWrapper(x, y) {
		const offset = this.$wrapper.offset();
		const rightEdge = offset.left + this.$wrapper.width();
		const leftEdge = offset.left;
		const topEdge = offset.top;
		const bottomEdge = offset.top + this.$wrapper.height();

		return x >= leftEdge && x <= rightEdge
			&& y >= topEdge && y <= bottomEdge;
	}

	overlay(event){
		if(this.isInWrapper(event.clientX, event.clientY))
			this.changeCirclePosition(event.clientX)
	}


	changeCirclePosition(x) {
		const circlePosition = x - this.$wrapper.offset().left;
		this.$line.css('left', circlePosition +"px");
		this.$overlayDiv.css('width', circlePosition -this.$line.width()/2+"px");
	}
}

const circle = $("#circle");
let pictureOverlay = new PictureOverlay("#pictures-wrapper", "#overlay", "#line");

circle.on("drag", function (event) {
	pictureOverlay.overlay(event);
});
