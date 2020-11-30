let users = [];
const form_info = document.querySelector(".signup-form");

const error = (somthing) => {
    return document.querySelector('.' + somthing);
}

console.log(form_info);
form_info.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
        name: form_info.name.value,
        email: form_info.email.value,
        password: form_info.password.value
    }
    fixing_form(user);
});