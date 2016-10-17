if (localStorage.getItem("password") == password) {
	// Gutschein anzeigen
	$('body')
		.css('background-image','url(gutscheine/gutschein'+ localStorage.getItem("number") +'.jpg)')
		.click(function() {
			if ((localStorage.getItem("number")*1) == messagecount) return;
			if (confirm("Nachricht für immer löschen?")) {
				localStorage.setItem("number", ((localStorage.getItem("number")*1)+1));
				location.reload(); 
			}
		});
} else {
	// Login anzeigen
	var passwordprompt = prompt("Passwort eingeben", "Kutschein");
	localStorage.setItem("password", passwordprompt);
	localStorage.setItem("number", 1);
	location.reload(); 
}
