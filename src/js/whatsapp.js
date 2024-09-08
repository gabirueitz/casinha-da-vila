function sendToWhatsapp() {
	const number = "+5516997295931";
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const tel = document.getElementById("tel").value;
	const message = document.getElementById("message").value;

	const link =
		"https://wa.me/" +
		number +
		"?text=Olá, meu nome é " +
		name +
		", meu e-mail é " +
		email +
		"e meu telefopne é " +
		tel +
		". %0a%0a" +
		message;

	window.open(link, "_blank").focus();

	console.log(link);
}
