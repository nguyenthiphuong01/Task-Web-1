function validate()
{
//Cach 2
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var user = /^.{5,15}$/;
    var pass = /^(?=[A-Z])(?=.+[a-z])(?=.+[0-9]).{8,20}$/;
    if(username.value.match(user)&&password.value.match(pass))
    {
        alert("Submit successfully!")
        return true;
    } else{
        alert("Submit failed!")
        return false;
    }
//Cach 1
    /*
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
    */

}
