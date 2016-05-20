Function.prototype.minify = function() {
	return this.toString().replace(/\/\/.*/g, " ").replace(/\s+/g, " ");
}

Function.prototype.bookmarkLet = function() {
	return ("javascript:(" + this.minify() + ")();void(0);");
}