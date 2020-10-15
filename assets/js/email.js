function sendMail(contactForm) {
	emailjs
		.send("Clinton's Website", "clints-web-id", {
			from_name: contactForm.from_name.value,
			from_email: contactForm.emailaddress.value,
            message: contactForm.message.value,
            reply_to: contactForm.emailaddress.value,
		})
		.then(
			function(responce) {
				if (responce.status == 200) {
					location.href = "index.html";
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}