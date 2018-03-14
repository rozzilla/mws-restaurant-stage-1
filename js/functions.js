/**
 * Common functions for both index.html and restaurant.html files.
 */

/* SW Registration */
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/js/sw.js').then(function() {
		console.log("Service Worker Registered on /js/sw.js");
	});
}