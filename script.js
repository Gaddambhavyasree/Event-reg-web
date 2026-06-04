function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let college = document.getElementById("college").value;

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !phone || !college) {
    alert("All fields required");
    return false;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email format");
    return false;
  }

  return true;
}