(function($) {
	$(document)
			.ready(
					function() {
						TransitionDivs();
						$(".MenuContainer-menu > a").click(function() {
							$(".mi-js-submenu").css('visibility', 'hidden');
							var nextDiv = $(this).next("div");
							nextDiv.css('opacity', '1');
							nextDiv.css('visibility', 'visible');
							nextDiv.css('overflow', 'visible');
						});
						$(".MOJ-CloseOnMouseOut").mouseleave(function() {
							$(this).css('opacity', '0');
							$(this).css('visibility', 'hidden');
							$(this).css('overflow', 'hidden');
						});
						$(".aw-toggle-button").mouseenter(function(a) {
							$(".glyph-icon", this).addClass("fa-rotate-180");
						}).mouseleave(
								function() {
									$(".glyph-icon", this).removeClass(
											"fa-rotate-180");
								});
						$(".aw-toggle-button::after").mouseenter(function(a) {
							$(".glyph-icon", this).addClass("fa-rotate-180");
						}).mouseleave(
								function() {
									$(".glyph-icon", this).removeClass(
											"fa-rotate-180");
								});
						$("#AW_CircleLink01")
								.click(
										function() {
											if ($(this).attr("state") == undefined
													|| $(this).attr("state") == "closed") {
												$(this).attr("state", "open");
												$(".divHoverShow01").css(
														'opacity', '1');
												$(".divHoverShow01")
														.css('visibility',
																'visible');
												$(".divHoverShow01").css(
														'overflow', 'visible');
												$("#AW_Circle01").css(
														'z-index', '999999');
												$("#AW_CircleLink01").css(
														'opacity', '1');
												$(".OuterBanner").css(
														'opacity', '0.2');
												$(".SecondBanner").css(
														'opacity', '0.2');
												$(".ThirdBanner").css(
														'opacity', '0.2');
												$(".fourthBanner").css(
														'opacity', '0.2');
												$(".fifthBanner").css(
														'opacity', '0.2');
												$("#AW_Circle02").css(
														'opacity', '0.1');
												$("#AW_Circle03").css(
														'opacity', '0.1');
												$("#AW_Circle04").css(
														'opacity', '0.1');
												$("#AW_Circle05").css(
														'opacity', '0.1');
												$("#AW_CircleTitle02").css(
														'opacity', '0.1');
												$("#AW_CircleTitle03").css(
														'opacity', '0.1');
												$("#AW_CircleTitle04").css(
														'opacity', '0.1');
												$("#AW_CircleTitle05").css(
														'opacity', '0.1');
												$("#AW_CircleLink02").css(
														'opacity', '0.1');
												$("#AW_CircleLink03").css(
														'opacity', '0.1');
												$("#AW_CircleLink04").css(
														'opacity', '0.1');
												$("#AW_CircleLink05").css(
														'opacity', '0.1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
											} else {
												$(this).attr("state", "closed");
												$(".divHoverShow01").css(
														'opacity', '0');
												$(".divHoverShow01").css(
														'visibility', 'hidden');
												$(".divHoverShow01").css(
														'overflow', 'hidden');
												$("#AW_Circle01").css(
														'z-index', '0');
												$(".OuterBanner").css(
														'opacity', '1');
												$(".SecondBanner").css(
														'opacity', '1');
												$(".ThirdBanner").css(
														'opacity', '1');
												$(".fourthBanner").css(
														'opacity', '1');
												$(".fifthBanner").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'opacity', '1');
												$("#AW_CircleLink03").css(
														'opacity', '1');
												$("#AW_CircleLink04").css(
														'opacity', '1');
												$("#AW_CircleLink05").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '1');
												$("#AW_Circle03").css(
														'opacity', '1');
												$("#AW_Circle04").css(
														'opacity', '1');
												$("#AW_Circle05").css(
														'opacity', '1');
												$("#AW_CircleTitle02").css(
														'opacity', '1');
												$("#AW_CircleTitle03").css(
														'opacity', '1');
												$("#AW_CircleTitle04").css(
														'opacity', '1');
												$("#AW_CircleTitle05").css(
														'opacity', '1');
											}
										}).mouseleave(
										function() {
											$(this).attr("state", "closed");
											$(".divHoverShow01").css('opacity',
													'0');
											$(".divHoverShow01").css(
													'visibility', 'hidden');
											$(".divHoverShow01").css(
													'overflow', 'hidden');
											$("#AW_Circle01").css('z-index',
													'0');
											$(".OuterBanner").css('opacity',
													'1');
											$(".SecondBanner").css('opacity',
													'1');
											$(".ThirdBanner").css('opacity',
													'1');
											$(".fourthBanner").css('opacity',
													'1');
											$(".fifthBanner").css('opacity',
													'1');
											$("#AW_CircleLink02").css(
													'opacity', '1');
											$("#AW_CircleLink03").css(
													'opacity', '1');
											$("#AW_CircleLink04").css(
													'opacity', '1');
											$("#AW_CircleLink05").css(
													'opacity', '1');
											$("#AW_CircleLink02").css(
													'z-index', '0');
											$("#AW_CircleLink03").css(
													'z-index', '0');
											$("#AW_CircleLink04").css(
													'z-index', '0');
											$("#AW_CircleLink05").css(
													'z-index', '0');
											$("#AW_Circle02").css('opacity',
													'1');
											$("#AW_Circle03").css('opacity',
													'1');
											$("#AW_Circle04").css('opacity',
													'1');
											$("#AW_Circle05").css('opacity',
													'1');
											$("#AW_CircleTitle02").css(
													'opacity', '1');
											$("#AW_CircleTitle03").css(
													'opacity', '1');
											$("#AW_CircleTitle04").css(
													'opacity', '1');
											$("#AW_CircleTitle05").css(
													'opacity', '1');
										});
						$("#AW_CircleLink02")
								.click(
										function() {
											if ($(this).attr("state") == undefined
													|| $(this).attr("state") == "closed") {
												$(this).attr("state", "open");
												$(".divHoverShow02").css(
														'opacity', '1');
												$(".divHoverShow02")
														.css('visibility',
																'visible');
												$(".divHoverShow02").css(
														'overflow', 'visible');
												$("#AW_Circle02").css(
														'z-index', '999999');
												$("#AW_CircleLink02").css(
														'opacity', '1');
												$(".OuterBanner").css(
														'opacity', '0.2');
												$(".SecondBanner").css(
														'opacity', '0.2');
												$(".ThirdBanner").css(
														'opacity', '0.2');
												$(".fourthBanner").css(
														'opacity', '0.2');
												$(".fifthBanner").css(
														'opacity', '0.2');
												$("#AW_CircleLink01").css(
														'opacity', '0.1');
												$("#AW_CircleLink03").css(
														'opacity', '0.1');
												$("#AW_CircleLink04").css(
														'opacity', '0.1');
												$("#AW_CircleLink05").css(
														'opacity', '0.1');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle01").css(
														'opacity', '0.1');
												$("#AW_Circle03").css(
														'opacity', '0.1');
												$("#AW_Circle04").css(
														'opacity', '0.1');
												$("#AW_Circle05").css(
														'opacity', '0.1');
												$("#AW_CircleTitle01").css(
														'opacity', '0.1');
												$("#AW_CircleTitle03").css(
														'opacity', '0.1');
												$("#AW_CircleTitle04").css(
														'opacity', '0.1');
												$("#AW_CircleTitle05").css(
														'opacity', '0.1');
											} else {
												$(this).attr("state", "closed");
												$(".divHoverShow02").css(
														'opacity', '0');
												$(".divHoverShow02").css(
														'visibility', 'hidden');
												$(".divHoverShow02").css(
														'overflow', 'hidden');
												$("#AW_Circle02").css(
														'z-index', '0');
												$(".OuterBanner").css(
														'opacity', '1');
												$(".SecondBanner").css(
														'opacity', '1');
												$(".ThirdBanner").css(
														'opacity', '1');
												$(".fourthBanner").css(
														'opacity', '1');
												$(".fifthBanner").css(
														'opacity', '1');
												$("#AW_CircleLink01").css(
														'opacity', '1');
												$("#AW_CircleLink03").css(
														'opacity', '1');
												$("#AW_CircleLink04").css(
														'opacity', '1');
												$("#AW_CircleLink05").css(
														'opacity', '1');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle01").css(
														'opacity', '1');
												$("#AW_Circle03").css(
														'opacity', '1');
												$("#AW_Circle04").css(
														'opacity', '1');
												$("#AW_Circle05").css(
														'opacity', '1');
												$("#AW_CircleTitle01").css(
														'opacity', '1');
												$("#AW_CircleTitle03").css(
														'opacity', '1');
												$("#AW_CircleTitle04").css(
														'opacity', '1');
												$("#AW_CircleTitle05").css(
														'opacity', '1');
											}
										}).mouseleave(
										function() {
											$(this).attr("state", "closed");
											$(".divHoverShow02").css('opacity',
													'0');
											$(".divHoverShow02").css(
													'visibility', 'hidden');
											$(".divHoverShow02").css(
													'overflow', 'hidden');
											$("#AW_Circle02").css('z-index',
													'0');
											$(".OuterBanner").css('opacity',
													'1');
											$(".SecondBanner").css('opacity',
													'1');
											$(".ThirdBanner").css('opacity',
													'1');
											$(".fourthBanner").css('opacity',
													'1');
											$(".fifthBanner").css('opacity',
													'1');
											$("#AW_CircleLink01").css(
													'opacity', '1');
											$("#AW_CircleLink03").css(
													'opacity', '1');
											$("#AW_CircleLink04").css(
													'opacity', '1');
											$("#AW_CircleLink05").css(
													'opacity', '1');
											$("#AW_CircleLink01").css(
													'z-index', '0');
											$("#AW_CircleLink03").css(
													'z-index', '0');
											$("#AW_CircleLink04").css(
													'z-index', '0');
											$("#AW_CircleLink05").css(
													'z-index', '0');
											$("#AW_Circle01").css('opacity',
													'1');
											$("#AW_Circle03").css('opacity',
													'1');
											$("#AW_Circle04").css('opacity',
													'1');
											$("#AW_Circle05").css('opacity',
													'1');
											$("#AW_CircleTitle01").css(
													'opacity', '1');
											$("#AW_CircleTitle03").css(
													'opacity', '1');
											$("#AW_CircleTitle04").css(
													'opacity', '1');
											$("#AW_CircleTitle05").css(
													'opacity', '1');
										});
						$("#AW_CircleLink03")
								.click(
										function() {
											if ($(this).attr("state") == undefined
													|| $(this).attr("state") == "closed") {
												$(this).attr("state", "open");
												$(".divHoverShow03").css(
														'opacity', '1');
												$(".divHoverShow03")
														.css('visibility',
																'visible');
												$(".divHoverShow03").css(
														'overflow', 'visible');
												$("#AW_Circle03").css(
														'z-index', '999999');
												$("#AW_CircleLink03").css(
														'opacity', '1');
												$(".OuterBanner").css(
														'opacity', '0.2');
												$(".SecondBanner").css(
														'opacity', '0.2');
												$(".ThirdBanner").css(
														'opacity', '0.2');
												$(".fourthBanner").css(
														'opacity', '0.2');
												$(".fifthBanner").css(
														'opacity', '0.2');
												$("#AW_CircleLink02").css(
														'opacity', '0.1');
												$("#AW_CircleLink01").css(
														'opacity', '0.1');
												$("#AW_CircleLink04").css(
														'opacity', '0.1');
												$("#AW_CircleLink05").css(
														'opacity', '0.1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '0.1');
												$("#AW_Circle01").css(
														'opacity', '0.1');
												$("#AW_Circle04").css(
														'opacity', '0.1');
												$("#AW_Circle05").css(
														'opacity', '0.1');
												$("#AW_CircleTitle02").css(
														'opacity', '0.1');
												$("#AW_CircleTitle01").css(
														'opacity', '0.1');
												$("#AW_CircleTitle04").css(
														'opacity', '0.1');
												$("#AW_CircleTitle05").css(
														'opacity', '0.1');
											} else {
												$(this).attr("state", "closed");
												$(".divHoverShow03").css(
														'opacity', '0');
												$(".divHoverShow03").css(
														'visibility', 'hidden');
												$(".divHoverShow03").css(
														'overflow', 'hidden');
												$("#AW_Circle03").css(
														'z-index', '0');
												$(".OuterBanner").css(
														'opacity', '1');
												$(".SecondBanner").css(
														'opacity', '1');
												$(".ThirdBanner").css(
														'opacity', '1');
												$(".fourthBanner").css(
														'opacity', '1');
												$(".fifthBanner").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'opacity', '1');
												$("#AW_CircleLink01").css(
														'opacity', '1');
												$("#AW_CircleLink04").css(
														'opacity', '1');
												$("#AW_CircleLink05").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '1');
												$("#AW_Circle01").css(
														'opacity', '1');
												$("#AW_Circle04").css(
														'opacity', '1');
												$("#AW_Circle05").css(
														'opacity', '1');
												$("#AW_CircleTitle02").css(
														'opacity', '1');
												$("#AW_CircleTitle01").css(
														'opacity', '1');
												$("#AW_CircleTitle04").css(
														'opacity', '1');
												$("#AW_CircleTitle05").css(
														'opacity', '1');
											}
										}).mouseleave(
										function() {
											$(this).attr("state", "closed");
											$(".divHoverShow03").css('opacity',
													'0');
											$(".divHoverShow03").css(
													'visibility', 'hidden');
											$(".divHoverShow03").css(
													'overflow', 'hidden');
											$("#AW_Circle03").css('z-index',
													'0');
											$(".OuterBanner").css('opacity',
													'1');
											$(".SecondBanner").css('opacity',
													'1');
											$(".ThirdBanner").css('opacity',
													'1');
											$(".fourthBanner").css('opacity',
													'1');
											$(".fifthBanner").css('opacity',
													'1');
											$("#AW_CircleLink02").css(
													'opacity', '1');
											$("#AW_CircleLink01").css(
													'opacity', '1');
											$("#AW_CircleLink04").css(
													'opacity', '1');
											$("#AW_CircleLink05").css(
													'opacity', '1');
											$("#AW_CircleLink02").css(
													'z-index', '0');
											$("#AW_CircleLink01").css(
													'z-index', '0');
											$("#AW_CircleLink04").css(
													'z-index', '0');
											$("#AW_CircleLink05").css(
													'z-index', '0');
											$("#AW_Circle02").css('opacity',
													'1');
											$("#AW_Circle01").css('opacity',
													'1');
											$("#AW_Circle04").css('opacity',
													'1');
											$("#AW_Circle05").css('opacity',
													'1');
											$("#AW_CircleTitle02").css(
													'opacity', '1');
											$("#AW_CircleTitle01").css(
													'opacity', '1');
											$("#AW_CircleTitle04").css(
													'opacity', '1');
											$("#AW_CircleTitle05").css(
													'opacity', '1');
										});
						$("#AW_CircleLink04")
								.click(
										function() {
											if ($(this).attr("state") == undefined
													|| $(this).attr("state") == "closed") {
												$(this).attr("state", "open");
												$(".divHoverShow04").css(
														'opacity', '1');
												$(".divHoverShow04")
														.css('visibility',
																'visible');
												$(".divHoverShow04").css(
														'overflow', 'visible');
												$("#AW_Circle04").css(
														'z-index', '999999');
												$("#AW_CircleLink04").css(
														'opacity', '1');
												$(".OuterBanner").css(
														'opacity', '0.2');
												$(".SecondBanner").css(
														'opacity', '0.2');
												$(".ThirdBanner").css(
														'opacity', '0.2');
												$(".fourthBanner").css(
														'opacity', '0.2');
												$(".fifthBanner").css(
														'opacity', '0.2');
												$("#AW_CircleLink02").css(
														'opacity', '0.1');
												$("#AW_CircleLink03").css(
														'opacity', '0.1');
												$("#AW_CircleLink01").css(
														'opacity', '0.1');
												$("#AW_CircleLink05").css(
														'opacity', '0.1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '0.1');
												$("#AW_Circle03").css(
														'opacity', '0.1');
												$("#AW_Circle01").css(
														'opacity', '0.1');
												$("#AW_Circle05").css(
														'opacity', '0.1');
												$("#AW_CircleTitle02").css(
														'opacity', '0.1');
												$("#AW_CircleTitle03").css(
														'opacity', '0.1');
												$("#AW_CircleTitle01").css(
														'opacity', '0.1');
												$("#AW_CircleTitle05").css(
														'opacity', '0.1');
											} else {
												$(this).attr("state", "closed");
												$(".divHoverShow04").css(
														'opacity', '0');
												$(".divHoverShow04").css(
														'visibility', 'hidden');
												$(".divHoverShow04").css(
														'overflow', 'hidden');
												$("#AW_Circle04").css(
														'z-index', '0');
												$(".OuterBanner").css(
														'opacity', '1');
												$(".SecondBanner").css(
														'opacity', '1');
												$(".ThirdBanner").css(
														'opacity', '1');
												$(".fourthBanner").css(
														'opacity', '1');
												$(".fifthBanner").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'opacity', '1');
												$("#AW_CircleLink03").css(
														'opacity', '1');
												$("#AW_CircleLink01").css(
														'opacity', '1');
												$("#AW_CircleLink05").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_CircleLink05").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '1');
												$("#AW_Circle03").css(
														'opacity', '1');
												$("#AW_Circle01").css(
														'opacity', '1');
												$("#AW_Circle05").css(
														'opacity', '1');
												$("#AW_CircleTitle02").css(
														'opacity', '1');
												$("#AW_CircleTitle03").css(
														'opacity', '1');
												$("#AW_CircleTitle01").css(
														'opacity', '1');
												$("#AW_CircleTitle05").css(
														'opacity', '1');
											}
										}).mouseleave(
										function() {
											$(this).attr("state", "closed");
											$(".divHoverShow04").css('opacity',
													'0');
											$(".divHoverShow04").css(
													'visibility', 'hidden');
											$(".divHoverShow04").css(
													'overflow', 'hidden');
											$("#AW_Circle04").css('z-index',
													'0');
											$(".OuterBanner").css('opacity',
													'1');
											$(".SecondBanner").css('opacity',
													'1');
											$(".ThirdBanner").css('opacity',
													'1');
											$(".fourthBanner").css('opacity',
													'1');
											$(".fifthBanner").css('opacity',
													'1');
											$("#AW_CircleLink02").css(
													'opacity', '1');
											$("#AW_CircleLink03").css(
													'opacity', '1');
											$("#AW_CircleLink01").css(
													'opacity', '1');
											$("#AW_CircleLink05").css(
													'opacity', '1');
											$("#AW_CircleLink02").css(
													'z-index', '0');
											$("#AW_CircleLink03").css(
													'z-index', '0');
											$("#AW_CircleLink01").css(
													'z-index', '0');
											$("#AW_CircleLink05").css(
													'z-index', '0');
											$("#AW_Circle02").css('opacity',
													'1');
											$("#AW_Circle03").css('opacity',
													'1');
											$("#AW_Circle01").css('opacity',
													'1');
											$("#AW_Circle05").css('opacity',
													'1');
											$("#AW_CircleTitle02").css(
													'opacity', '1');
											$("#AW_CircleTitle03").css(
													'opacity', '1');
											$("#AW_CircleTitle01").css(
													'opacity', '1');
											$("#AW_CircleTitle05").css(
													'opacity', '1');
										});
						$("#AW_CircleLink05")
								.click(
										function() {
											if ($(this).attr("state") == undefined
													|| $(this).attr("state") == "closed") {
												$(this).attr("state", "open");
												$(".divHoverShow05").css(
														'opacity', '1');
												$(".divHoverShow05")
														.css('visibility',
																'visible');
												$(".divHoverShow05").css(
														'overflow', 'visible');
												$("#AW_Circle05").css(
														'z-index', '999999');
												$("#AW_CircleLink05").css(
														'opacity', '1');
												$(".OuterBanner").css(
														'opacity', '0.2');
												$(".SecondBanner").css(
														'opacity', '0.2');
												$(".ThirdBanner").css(
														'opacity', '0.2');
												$(".fourthBanner").css(
														'opacity', '0.2');
												$(".fifthBanner").css(
														'opacity', '0.2');
												$("#AW_CircleLink02").css(
														'opacity', '0.1');
												$("#AW_CircleLink03").css(
														'opacity', '0.1');
												$("#AW_CircleLink04").css(
														'opacity', '0.1');
												$("#AW_CircleLink01").css(
														'opacity', '0.1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '0.1');
												$("#AW_Circle03").css(
														'opacity', '0.1');
												$("#AW_Circle04").css(
														'opacity', '0.1');
												$("#AW_Circle01").css(
														'opacity', '0.1');
												$("#AW_CircleTitle02").css(
														'opacity', '0.1');
												$("#AW_CircleTitle03").css(
														'opacity', '0.1');
												$("#AW_CircleTitle04").css(
														'opacity', '0.1');
												$("#AW_CircleTitle01").css(
														'opacity', '0.1');
											} else {
												$(this).attr("state", "closed");
												$(".divHoverShow05").css(
														'opacity', '0');
												$(".divHoverShow05").css(
														'visibility', 'hidden');
												$(".divHoverShow05").css(
														'overflow', 'hidden');
												$("#AW_Circle05").css(
														'z-index', '0');
												$(".OuterBanner").css(
														'opacity', '1');
												$(".SecondBanner").css(
														'opacity', '1');
												$(".ThirdBanner").css(
														'opacity', '1');
												$(".fourthBanner").css(
														'opacity', '1');
												$(".fifthBanner").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'opacity', '1');
												$("#AW_CircleLink03").css(
														'opacity', '1');
												$("#AW_CircleLink04").css(
														'opacity', '1');
												$("#AW_CircleLink01").css(
														'opacity', '1');
												$("#AW_CircleLink02").css(
														'z-index', '0');
												$("#AW_CircleLink03").css(
														'z-index', '0');
												$("#AW_CircleLink04").css(
														'z-index', '0');
												$("#AW_CircleLink01").css(
														'z-index', '0');
												$("#AW_Circle02").css(
														'opacity', '1');
												$("#AW_Circle03").css(
														'opacity', '1');
												$("#AW_Circle04").css(
														'opacity', '1');
												$("#AW_Circle01").css(
														'opacity', '1');
												$("#AW_CircleTitle02").css(
														'opacity', '1');
												$("#AW_CircleTitle03").css(
														'opacity', '1');
												$("#AW_CircleTitle04").css(
														'opacity', '1');
												$("#AW_CircleTitle01").css(
														'opacity', '1');
											}
										}).mouseleave(
										function() {
											$(this).attr("state", "closed");
											$(".divHoverShow05").css('opacity',
													'0');
											$(".divHoverShow05").css(
													'visibility', 'hidden');
											$(".divHoverShow05").css(
													'overflow', 'hidden');
											$("#AW_Circle05").css('z-index',
													'0');
											$(".OuterBanner").css('opacity',
													'1');
											$(".SecondBanner").css('opacity',
													'1');
											$(".ThirdBanner").css('opacity',
													'1');
											$(".fourthBanner").css('opacity',
													'1');
											$(".fifthBanner").css('opacity',
													'1');
											$("#AW_CircleLink02").css(
													'opacity', '1');
											$("#AW_CircleLink03").css(
													'opacity', '1');
											$("#AW_CircleLink04").css(
													'opacity', '1');
											$("#AW_CircleLink01").css(
													'opacity', '1');
											$("#AW_CircleLink02").css(
													'z-index', '0');
											$("#AW_CircleLink03").css(
													'z-index', '0');
											$("#AW_CircleLink04").css(
													'z-index', '0');
											$("#AW_CircleLink01").css(
													'z-index', '0');
											$("#AW_Circle02").css('opacity',
													'1');
											$("#AW_Circle03").css('opacity',
													'1');
											$("#AW_Circle04").css('opacity',
													'1');
											$("#AW_Circle01").css('opacity',
													'1');
											$("#AW_CircleTitle02").css(
													'opacity', '1');
											$("#AW_CircleTitle03").css(
													'opacity', '1');
											$("#AW_CircleTitle04").css(
													'opacity', '1');
											$("#AW_CircleTitle01").css(
													'opacity', '1');
										});
						function TransitionDivs() {
							$(".OuterBanner").css('transition',
									'opacity 0.5s linear');
							$(".SecondBanner").css('transition',
									'opacity 0.5s linear');
							$(".ThirdBanner").css('transition',
									'opacity 0.5s linear');
							$(".fourthBanner").css('transition',
									'opacity 0.5s linear');
							$(".fifthBanner").css('transition',
									'opacity 0.5s linear');
							$(".OuterBanner").css('-moz-transition',
									'opacity 0.5s linear');
							$(".SecondBanner").css('-moz-transition',
									'opacity 0.5s linear');
							$(".ThirdBanner").css('-moz-transition',
									'opacity 0.5s linear');
							$(".fourthBanner").css('-moz-transition',
									'opacity 0.5s linear');
							$(".fifthBanner").css('-moz-transition',
									'opacity 0.5s linear');
							$(".OuterBanner").css('-webkit-transition',
									'opacity 0.5s linear');
							$(".SecondBanner").css('-webkit-transition',
									'opacity 0.5s linear');
							$(".ThirdBanner").css('-webkit-transition',
									'opacity 0.5s linear');
							$(".fourthBanner").css('-webkit-transition',
									'opacity 0.5s linear');
							$(".fifthBanner").css('-webkit-transition',
									'opacity 0.5s linear');
						}
						;
						$("#SearchPlusClose").click(function() {
							$("body").removeClass('FlipCSS-active');
							$(".contents").removeClass('contents_Hover');
							$(".FlipCSS").removeClass('FlipCSS_Hover');
							$(".contents").removeAttr("style");
							$(".contents").addClass('contents_NotHover');
							$(".FlipCSS").removeAttr("style");
							$(".FlipCSS").addClass('FlipCSS_NotHover');
							$("#idFlipCSS_DivColor").css('display', 'none');
						});
						$("#SearchPlusMenu").click(function() {
							$(".contents").removeClass('contents_NotHover');
							$(".FlipCSS").removeClass('FlipCSS_NotHover');
							$("body").addClass('FlipCSS-active');
							$(".contents").removeAttr("style");
							$(".contents").addClass('contents_Hover');
							$(".FlipCSS").removeAttr("style");
							$(".FlipCSS").addClass('FlipCSS_Hover');
							$("#idFlipCSS_DivColor").css('display', 'block');
						});
						$("#OpenSideMenu").click(
								function() {
									$(".MOJ-Mobile-MenuDiv")
											.css('opacity', '1');
									$(".MOJ-Mobile-MenuDiv").css('visibility',
											'visible');
									$(".MOJ-Mobile-MenuDiv").css('overflow',
											'visible');
									$(".MOJ-Mobile-MenuDiv").css('z-index',
											'999999');
								});
						$("#CloseSideMenu").click(
								function() {
									$(".MOJ-Mobile-MenuDiv")
											.css('opacity', '0');
									$(".MOJ-Mobile-MenuDiv").css('visibility',
											'hidden');
									$(".MOJ-Mobile-MenuDiv").css('overflow',
											'hidden');
									$(".MOJ-Mobile-MenuDiv")
											.css('z-index', '0');
								});
					});
});