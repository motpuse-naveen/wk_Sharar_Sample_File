var $window, $body;
var mobileDevice,
	platformOS,
	scrollTimeout,
	pagenums,
	istudy_links,
	skipanimation = false;

$(document).ready(function() {
	$window = $(window);
	$body = $(document.body);

	if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
		mobileDevice = true;
		platformOS = 'apple';
		if (typeof event.acceleration === 'undefined') skipanimation = true; // iPad 1
	} else if (/(Android)/i.test(navigator.userAgent)) {
		mobileDevice = true;
		platformOS = 'android';
	} else {
		platformOS = 'windows';
	}

	if (mobileDevice) {
		$body.addClass('mobileDevice');
		try {
			checkOrientation();
		} catch (e) {
			alert("Orientation failed" + "\n" + e.name + "\n" + e.number + "\n" + e.description + "\n" + e.message);
		}
		window.onorientationchange = function() {
			return checkOrientation();
		};
	}

	if (mobileDevice && typeof FastClick !== 'undefined') window.fastclickref = new FastClick(document.body);

	pagenums = $('.pagenum');

	if (mobileDevice && platformOS === 'apple') $window.bind('touchstart', function() { // make sure page boundaries show on scroll
		// TweenMax.set(pagenums, { borderTopColor: "#AAAAAA", overwrite: 'all' });
		$body.addClass("scrolling");
		scrollTimeout = setTimeout(function() {
			// TweenMax.to(pagenums, 2, { borderTopColor: "#FFFFFF", overwrite: 'all' }); // fade out
			$body.removeClass("scrolling");
		}, 1000);
	});
	$window.bind('scroll', onscroll);
	pagescrolled(); // trigger the auto fade out even when the page loads at scroll 0

	activateAbbreviations();

	// ustore.init();
	// if (ustore.sessionSupported()) {
	// 	// saving of last position for return from iStudy
	// 	ustore.deleteSessionValue(productname + '_etextlasthref');
	// 	$body.on('click', 'a', function() {
	// 		var rowaction = $(this);
	// 		var parent = rowaction.closest('.feature');
	// 		var id = (parent.length === 1 ? parent.attr('id') : false) || rowaction.data('name');
	// 		ustore.setSessionValue(productname + '_etextlasthref', window.location.pathname + window.location.search + "#" + id);
	// 	});
	// 	$window.on("beforeunload", function() {
	// 		if (!ustore.getSessionValue(productname + '_etextlasthref')) ustore.setSessionValue(productname + '_etextlasthref', window.location.pathname + window.location.search);
	// 	});
	//
	// 	// showing iStudy progression in the links
	// 	istudy_links = $('.istudy_link');
	// 	if (istudy_links.length > 0) {
	// 		$.ajax({
	// 			url: '../istudy/_require/structure.js',
	// 			dataType: "script",
	// 			cache: true,
	// 			success: activateiStudyLinks
	// 		});
	// 	}
	// }


	$window.load(function() {
		activateImages();
	});
});

function checkOrientation() {
	if (document.querySelector) {
		var viewport = document.querySelector("meta[name=viewport]");
		if (viewport && viewport.setAttribute) {
			if (window.orientation === 90 || window.orientation === -90) {
				if (platformOS === 'android') {
					viewport.setAttribute("content", "width=1024");
				} else {
					viewport.setAttribute("content", "width=1024, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes");
				}
				//return viewport.setAttribute("content", "initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=yes");
			} else {
				if (platformOS === 'android') {
					viewport.setAttribute("content", "width=720");
				} else {
					viewport.setAttribute("content", "width=703, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes");
				}
				//return viewport.setAttribute("content", "initial-scale=0.8; maximum-scale=1.4; minimum-scale=0.8; user-scalable=yes");
			}
		}
	}
	return true;
};

function onscroll(e) {
	if (!$body.is('.scrolling')) {
		// TweenMax.to(pagenums, 0.1, { delay: 0.05, borderTopColor: "#AAAAAA", overwrite: 'all' }); // fade in
		$body.addClass("scrolling");
	}
	clearTimeout(scrollTimeout);
	scrollTimeout = setTimeout(pagescrolled, (mobileDevice ? 200 : 50));
}
function pagescrolled() {
	scrollTimeout = setTimeout(function() {
		// TweenMax.to(pagenums, 2, { borderTopColor: "#FFFFFF", overwrite: 'all' }); // fade out
		$body.removeClass("scrolling");
	}, 1000);
}


function activateImages() {
	var imgs = $body.children('.image-full').each(function() {
		var img = $(this);
		var popup = img.find('.imagepopup');
		if (popup.length > 0) {
			var maxwidth = popup.addClass('naturalsize').width();
			popup.removeClass('naturalsize');

			if (maxwidth > 650) {
				popup.on('click', function() {
					$(this).parent().toggleClass('lockedwidth');
				})
				img.css({
					maxWidth: maxwidth
				});
				img.addClass('expandable lockedwidth');
			}
		}
	});

}

function activateAbbreviations() {
	$('.key-term').qtip({
		content: {
			title: function() {
				return $(this).html();
			},
			attr: 'title',
			button: true
		},
		position: {
			my: 'bottom center',
			at: 'top center',
			adjust: {
				method: 'shift flipinvert',
				y: -4.5
			},
			viewport: $window
		},
		show: {
			event: 'click mouseenter',
			solo: true
		},
		hide: {
			event: 'unfocus mouseleave',
			delay: 300,
			fixed: true
		},
		events: {
			show: function(event, api) {
				api.elements.tooltip.removeClass('qtip-clicked');
				if (api.elements.button) api.elements.button.hide();
			},
			hide: function(event, api) {
				if (api.elements.tooltip.hasClass('qtip-clicked')) {
					if(event.originalEvent.type === "mouseleave" || event.originalEvent.type === "mouseout") {
						event.preventDefault();
					} else {
						api.elements.tooltip.removeClass('qtip-clicked');
						if (api.elements.button) api.elements.button.hide();
					}
				}
			}
		},
		style: {
			classes: 'qtip-etext',
			tip: {
				width: 18,
				height: 4
			}
		}
	})

	$body.on('click', '.key-term', function(e) {
		var api = $(this).qtip("api");
		api.elements.tooltip.addClass('qtip-clicked');
		if (api.elements.button) api.elements.button.show();
	});
}

function activateiStudyLinks() {
	var istudydata = ustore.getValue(productname.replace('etext', 'istudy'));
	if (istudydata/* && structure*/) {
		istudy_links.children('div').each(function() {
			var link = $(this);
			var id = link.data('id');
			if (id) {
				var pages = link.data('pages');

				//console.log(link)

				var struct = structure['c'];
				var splitid = id.split('-');
				for (var i = 0, len = splitid.length; i < len; i++) {
					struct = struct[splitid[i]-1];
					if (struct['c']) {
						struct = struct['c'];
					} else if (struct['p']) {
						struct = struct['p'];
					}
				}

				var linkinfo = processPages(id, struct, istudydata);
				// [progressvalue, progressmeter, classes, rowstarcount];

				link.addClass(linkinfo[2]).find('h5').append(linkinfo[1]); // progress classes / progress meter
				link.find('h5').prepend(linkinfo[0]); // % complete
				link.find('.rowaction').text(linkinfo[3]) // star count
			}
		});
	}
}

function processPages(id, pages, istudydata) {
	var totaluserscore = 0;
	var totalpagescore = 0;
	var totalalerts = 0;
	var totalearnedstars = 0;
	var totalpossiblestars = 0;
	var itemcount
	var totalseen = 0;

	if ($.isArray(pages)) {
		itemcount = pages.length;
		for (var i = 0; i < itemcount; i++) {
			var page = pages[i];
			var pagedata = istudydata[id + '-' + (i+1)];
			//console.log(id + '-' + (i+1), pagedata)
			var pageinfo = processPage(page, pagedata);
			totaluserscore += pageinfo[0];
			totalpagescore += pageinfo[1];
			totalalerts += pageinfo[2];
			totalearnedstars += pageinfo[3];
			totalpossiblestars += pageinfo[4];
			totalseen += pageinfo[5];
		}

	} else {
		itemcount = 1;
		//var page = pages;
		var pagedata = istudydata[id];
			//console.log(pagedata)
		var pageinfo = processPage(pages, pagedata);
		totaluserscore += pageinfo[0];
		totalpagescore += pageinfo[1];
		totalalerts += pageinfo[2];
		totalearnedstars += pageinfo[3];
		totalpossiblestars += pageinfo[4];
		totalseen += pageinfo[5];
	}

	// --------------------------

	var classes = '';
	if (itemcount === totalseen) {
		classes += ' progress_seen';
	}
	var r = totalpagescore > 0 ? (totaluserscore / totalpagescore * 100).toFixed(0) : 0;

	var progressvalue = '';
	var progressmeter = '';

	if (totalalerts > 0) { // module has alerts
		classes += ' progress_poor';
	}
	if (r >= 75) {
		classes += ' progress_good';
	}

	if (totalpossiblestars > 0) {
		classes += ' stars_available';
		if (r == 0 && totalalerts === 0) {
			// no scores recorded yet
		} else {
			classes += ' has_progress';
			if (totalearnedstars > 0) classes += ' has_stars';
			if (totalearnedstars === totalpossiblestars) classes += ' has_all_stars';
			progressvalue += "<span class='progress_value progress_notice'>" + r + "%</span>";
			progressmeter += "<div class='progress_meter' style='width:" + r + "%;'></div>";
		}
	}

	var rowstarcount = totalearnedstars > 1 ? totalearnedstars + ' ' : '';


	return [progressvalue, progressmeter, classes, rowstarcount];

}


function processPage(page, pagedata) {
	var totaluserscore = 0;
	var totalpagescore = 0;
	var totalalerts = 0;
	var totalearnedstars = 0;
	var totalpossiblestars = 0;
	var totalseen = 0;

	var pagescore = 0;
	var weightedscore = 0;
	if (page['d'])		pagescore = page['d'];
	if (page['q'])		pagescore = page['q'];
	if (page['q2'])		pagescore = page['q2'];
	if (typeof pagescore !== 'number') {
		weightedscore = pagescore[1];
		pagescore = pagescore[0];
	}

	if (weightedscore !== 0) {
		totalpagescore += weightedscore;
	} else {
		totalpagescore += pagescore;
	}

	if (pagescore > 0) totalpossiblestars++;

	if (pagedata) {
		if (pagedata === 1) { // info page
			totalseen++;
		} else { // interactive
			if (typeof pagedata['s'] !== "undefined") { // attempted
				var userscore = pagedata['s'];
				var r = (userscore / pagescore * 100).toFixed(0);
				if (weightedscore !== 0) {
					userscore = userscore * (weightedscore / pagescore);
				}
				totaluserscore += userscore;
				if (r < 50) {
					totalalerts++;
				} else if (r < 75) {
					totalseen++;
				} else {
					totalseen++;
					totalearnedstars++;
				}
			} else {
				if (page['s']) {
					totalseen++;
				}
			}
		}
	}

	return [totaluserscore, totalpagescore, totalalerts, totalearnedstars, totalpossiblestars, totalseen];
}

function openLinkInNewTab(url) {
	console.log(url)
	var isError = true;
	try{
		isError = false;
		window.open(url, '_blank').focus();
	}
	catch(err){
		console.log("Open New window: " + err)
		if(isError){
			window.location.href = url;
		}
	}
	return false;
}