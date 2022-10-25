let random = '';
//PHOTO
let myPhoto = document.querySelector("#photo");
//ICONS
let myPerson = document.querySelector(".person");
let myEmail = document.querySelector(".email");
let myLocation = document.querySelector(".location");
let myPhone = document.querySelector(".phone");
let myBirthday = document.querySelector(".birthday");
let myPassword = document.querySelector(".password");
//BUTTON
let btn = document.querySelector("#btn");
//RESULT
let result = document.querySelector("#result");

let fetchApp = async (url) => {
    let response = await fetch(url);
    response = await response.json();
    random = response;
    console.log(random)
    myPhoto.src = random.results[0].picture.large;
    result.innerHTML = "Hi, My name is" + "<br>" +
    random.results[0].name.first + "" +
    random.results[0].name.last; 

};
fetchApp("https://randomuser.me/api/");
console.log("after async", random)

myPerson.onmouseover = function() {
    console.log("myPerson", random.results)
    result.innerHTML = "Hi, My name is" + "<br>" +
    random.results[0].name.first + "" +
    random.results[0].name.last; 
    
};
myEmail.onmouseover = function() {
    result.innerHTML = "";
    result.innerHTML +=  "My email address is" + "<br>" + 
    random.results[0].email;
}
myBirthday.onmouseover = function () {
    result.innerHTML = "";
    result.innerHTML += "My birthday is" + "<br>" + 
      random.results[0].dob.date.substring(0,10);
};
myLocation.onmouseover = function () {
    result.innerHTML = "";
    result.innerHTML +=
      "My address is" +
      "<br>" +
      random.results[0].location.postcode +
      " " +
      random.results[0].location.city +
      " " +
      random.results[0].location.country;
};
myPhone.onmouseover = function () {
    result.innerHTML = "";
    result.innerHTML += "My phone number is" + "<br>" + 
    random.results[0].phone;
};
myPassword.onmouseover = function () {
    result.innerHTML = "";
    result.innerHTML +=
      "My password is" + "<br>" + random.results[0].login.password;
};

function changePerson() {
    fetchApp("https://randomuser.me/api/");
}
