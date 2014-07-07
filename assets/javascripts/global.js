/**
 * @title WET-BOEW Prose-GitHub adapter
 * @overview Provides a more elegant fallback for browsers that don't support CORS.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
(function() {
"use strict";

// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
if ( !( "withCredentials" in new XMLHttpRequest() ) ) {
	var editLink = document.getElementById( "edit-page" );
	if ( editLink !== null ) {
		editLink.href = editLink.href.replace( /^http:\/\/prose\.io\/#/, "https://github.com/" ).replace( /\/edit\//, "/blob/" );
	}
}

})();
