// "use strict";
$(document).ready(function(){
	alert(“hello”);
});
class PictureOverlay {
	constructor(wrapper, overlayDiv, line){
		this.wrapper = document.getElementById(wrapper);
		this.overlayDiv = document.getElementById(overlayDiv);
		this.line = document.getElementById(line);
	}

	isInWrapper(x, y) {
		const rightEdge = this.wrapper.offsetLeft + this.wrapper.clientWidth;
		const leftEdge = this.wrapper.offsetLeft;
		const topEdge = this.wrapper.offsetTop;
		const bottomEdge = this.wrapper.offsetTop + this.wrapper.clientHeight;

		return x >= leftEdge && x <= rightEdge
			&& y >= topEdge && y <= bottomEdge;
	}

	overlay(event){
		if(this.isInWrapper(event.clientX, event.clientY))
			this.changeCirclePosition(event.clientX)
		}
	

	changeCirclePosition(x) {
		const circlePosition = x - this.wrapper.offsetLeft;
		this.line.style.left = circlePosition +"px";
		this.overlayDiv.style.width = (circlePosition -this.line.clientWidth/2+"px");
	}
}

const circle = document.getElementById("circle");
let pictureOverlay = new PictureOverlay("pictures-wrapper", "overlay", "line");
// $("circle").mousedown( function (event) {pictureOverlay.overlay(event)})
circle.addEventListener("drag", function (event) {pictureOverlay.overlay(event)});