const queryString = window.location.search;
console.log(queryString);
// ?user_name=

const urlParams = new URLSearchParams(queryString);

const user_name = urlParams.get('user_name');
console.log(user_name);

function loadName() {
    document.getElementById("user_name").innerHTML = user_name;
}