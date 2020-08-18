let act = $("#act");
act.click(() => {
	let $uname = uname.value;
	console.log(uname)
	let $upwd = upwd.value;
	let $user_name = user_name.value;
	let $phone = phone.value;
	let $email = email.value;
	let $gender
	if (man.checked) {
		$gender = man.value;
	} else {
		$gender = women.value;
	}
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var r = xhr.responseText;
			if (r == 1) {
				$("#log_window").css("display", "block")
				let text = parseInt($("#log_window>p").text().slice(12, -6));
				console.log(text);
				setInterval(() => {
					if (text > 0) {
						text--;
						$("#log_window>p").text(`注册成功即将跳转登录界面${text}s>>>>>`)
					} else {
						location.href = "http://127.0.0.1:9000/login.html";
					}
				}, 1000);
			} else {
				alert("注册失败")
			}
		}
	}
	xhr.open("GET",
		`/reg/v1/register?uname=${$uname}&upwd=${$upwd}&user_name=${$user_name}&phone=${$phone}&email=${$email}&gender=${$gender}`,
		true);
	xhr.send();
})
