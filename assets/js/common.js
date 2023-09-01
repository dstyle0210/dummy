let device = "wd"; // "wd"|"mo"

function desktopGnb(){
	$("header").removeClass("mobile");
	$("header").removeClass("opened");

	$("header:not(.mobile) .g1").mouseenter(function(){
		$("header .bg-snb").show();
		$("header:not(.mobile) .gnb li .snb").css({"display": "flex"});
	});

	$("header:not(.mobile) .gnb, header:not(.mobile) .bg-snb").mouseleave(function(){
		$("header .gnb li .snb").hide();
		$("header .bg-snb").hide();
	});
	device = "wd";
}

function mobileGnb(){
	$("header").addClass("mobile");
	device = "mo";
}

$(function(){
	// open&close gnb
	$(".btn-menu").click(function(){
		$("header").toggleClass("opened");
	});

	// gnb
	if ($(window).width() < 1024) {
		mobileGnb();
		$(window).resize(function(){
			if($(window).width() >= 1024) {
				desktopGnb();
			} else {
				mobileGnb();
			}
		});
	} else {
		desktopGnb();
		$(window).resize(function(){
			if($(window).width() < 1024) {
				mobileGnb();
			} else {
				desktopGnb();
			}
		});
	}
 });