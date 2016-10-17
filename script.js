// Cookie setzen
//document.cookie = "ich=swag; expires=Thu, 2037-01-19, 03:14:08 UTC";



cookies = {};
$.each(document.cookie.split('; '),function( i, cookie ) {
	cookie = cookie.split('=');
	cookies[cookie[0]] = cookie[1];
});

console.log(cookies);

if (cookies.password == password) {
	// Gutschein anzeigen
	$('body')
		.css('background-image','url(gutscheine/gutschein'+ cookies.number +'.jpg)')
		.click(function() {
			if ((cookies.number*1) == messagecount) return;
			if (confirm("Gutschein für immer löschen?")) {
				document.cookie = "number="+ ((cookies.number*1)+1) +"; expires=Thu, 2037-01-19, 03:14:08 UTC";
				location.reload(); 
			}
		});
} else {
	// Login anzeigen
	var passwordprompt = prompt("Passwort eingeben", "Kutschein");
	document.cookie = "password="+ passwordprompt +"; expires=Thu, 2037-01-19, 03:14:08 UTC";
	document.cookie = "number=1; expires=Thu, 2037-01-19, 03:14:08 UTC";
	location.reload(); 
}

// Cookie löschen
// document.cookie = "ich="+ cookies["ich"] +"; expires=Thu, 01 Jan 1970 00:00:01 GMT";
