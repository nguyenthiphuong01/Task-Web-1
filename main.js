function validate()
{
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    if(username.value.length >= 5 && username.value.length <= 15
    && password.value.length >= 8 && password.value.length <= 20
    && password.value.match(numbers) 
    && password.value.match(upperCaseLetters)
    && password.value.match(lowerCaseLetters)
    && password.value.charAt(0).match(upperCaseLetters)) {
      alert("Submit successfully");
    } else {
      alert("Submit failed!");
    }
}
