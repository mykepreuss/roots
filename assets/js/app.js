require([
	'jquery',
	'underscore'
], function($, _){
	'use strict';
	
	// use app here
	console.log('Running jQuery %s', $().jquery);
// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

	var appName = {
		// All pages
		common: {
			init: function() {
				// JS here
			},
			finalize: function() { }
		},
		// Home page
		home: {
			init: function() {
				// JS here
			}
		},
		// About page
		about: {
			init: function() {
				// JS here
			}
		}
	};

	var UTIL = {
		fire: function(func, funcname, args) {
			var namespace = appName;
			funcname = (funcname === undefined) ? 'init' : funcname;
			if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
				namespace[func][funcname](args);
			}
		},
		loadEvents: function() {

			UTIL.fire('common');

			$.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
				UTIL.fire(classnm);
			});

			UTIL.fire('common', 'finalize');
		}
	};

	$(document).ready(UTIL.loadEvents);
});



// // For any third party dependencies, like jQuery, place them in the lib folder.

// // Get absolute directory
// var appUrl = require.toUrl('app');
// var arr = appUrl.split('/');
// arr.pop();
// var dir = arr.join('/');

// // Configure loading modules from the lib directory,
// // except for 'app' ones, which are in a sibling
// // directory.
// requirejs.config({
// 	baseUrl: dir,
// 	paths: {
// 		app: dir+'/app',
// 		jquery: dir+'/lib/jquery'
// 	}
// });

// // Start loading the main app file. Put all of
// // your application logic in there.
// requirejs(['app/main']);
