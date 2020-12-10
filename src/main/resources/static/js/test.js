window.addEventListener("load", function() {
	getAjaxMessage("test", function(msg) {
		document.body.append(msg);
	})
	const waitingDiv = document.getElementById("waiting-div");
	let n = 0;
	var waitingInterval = setInterval(function() {
			waitingDiv.innerText = waitingDotsEffect(n++, 10);
			if (n > 100) {
				clearInterval(waitingInterval);
			}
	}, 150);
	
	document.getElementById("open-dialog-button").addEventListener("click", function() {
		jsUtilsAlert("dialog-title", "dialog-text");
	});
});