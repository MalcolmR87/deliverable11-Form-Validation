function vali() {
    // Validate lowercase letters
    let passw = /^[A-Za-z]\w{1,8}$/;
    if (document.getElementById("pw").value.match(passw)) {
        document.getElementById("pw-err").innerHTML = "Success";
    } else {
        document.getElementById("pw-err").innerHTML = "Error";
    }
}