/*global jQuery: false*/
(function ($) {
	"use strict";
	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var $editLink = $('edit-page'),
			request = false;
		if (editLink.length !== 0) {
			editLink.attr('href', editLink.attr('href').replace('http://prose.io/#ogpl/', 'https://github.com/ogpl/'));
			// Check to make sure user can edit in GitHub. If not, just send to blob. 
			editLink.on('click', function() {
				var href = this.getAttribute('href');
				if (window.XMLHttpRequest) {
					request = new XMLHttpRequest;
				} else if (window.ActiveXObject) {
					request = new ActiveXObject('Microsoft.XMLHttp');
				}

				if (request) {
					request.open('GET', url);
					if (request.status === 200) {
						window.location.href = href;
					} else {
						window.location.href = href.replace('/edit/', '/');
					}
				}
			}
		}
	}
}(jQuery));
