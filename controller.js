const fixing_form = (user) => {
    let count = 0;
    if (user.name.length < 4) {
        error("name").style.display = "block";
        error("name").innerText = "this name is missing !!!";
        form_info.name.value = "";
        count++;
    }
    else {
        error("name").style.display = "none";
    }

    if (user.email.indexOf('com') === -1) {
        error("email").style.display = "block";
        error("email").innerText = "this email is missing com !!!!";
        form_info.email.value = "";
        count++;
    }
    else {
        error("email").style.display = "none";
    }

    if (user.password.length < 6) {
        error('password').style.display = "block";
        error("password").innerText = "this password is too weak, please input password more than 6 character !!!!";
        form_info.password.value = "";
        count++;
    }
    else {
        error('password').style.display = "none";
    }

    if (form_info.re_password.value !== form_info.password.value) {
        error('confirm-password').style.display = "block";
        error("confirm-password").innerText = "this confirm password isn't correct. please type again !!!";
        form_info.re_password.value = "";
        count++;
    }
    else {
        error('confirm-password').style.display = "none";
    }


    // code push vao mang users
    if (count === 0) {
        users.push(user);
        form_info.name.value = "";
        form_info.email.value = "";
        form_info.password.value = "";
        form_info.re_password.value = "";
        console.log("mang users da duoc them vao la: ", users);
    }
}