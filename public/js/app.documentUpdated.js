(function ($, document) {
	"use strict";
	$(function () {
		$(document).on("DOMNodeInserted", function () {
			$(document).trigger("document.update.learned");
		}).trigger("DOMNodeInserted");
	});
})(window.jQuery, document);