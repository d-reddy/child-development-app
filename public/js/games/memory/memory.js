(function () {
	"use strict";
	$(function () {

		$(document).on('document.update.learned', function(){
			
			$(".flip").each(function () {
				var self = $(this);
				
				if (self.data("flip-setup")) {
					return;
				}
				
				self.data("flip-setup", true);
				
				/* card flip */
				self.click(function(){
				  $(this).find(".card").toggleClass("flipped");
				  return false;
				});
			});
		});
	});
})();