/*global jQuery: false*/
(function ($) {
	"use strict";
	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var editLink = document.getElementById('edit-page');
		if (editLink !== null) {
			editLink.setAttribute('href', editLink.getAttribute('href').replace('http://prose.io/#ogpl/', 'https://github.com/ogpl/'));
		}
	}
}(jQuery));
