function toClipboard(text) {
	const textArea = document.createElement("textarea");

	textArea.value = text;
	textArea.style = "position: fixed; top: 0; left: 0";


	document.body.appendChild(textArea);

	try {
		textArea.select();
		document.execCommand("copy");
	}
	finally {
		textArea.remove();
	}
}


const $ip = document.querySelector("#ip span");

$ip.title = "Copy to clipboard";
$ip.addEventListener("click", e => toClipboard(e.target.innerHTML));
