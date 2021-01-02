const myHeading = document.querySelector('h3');
let myButton = document.querySelector('button')

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/gorilla.jpg' ){
        myImage.setAttribute('src', 'images/chimpanzee.jpg')
    } else {
        myImage.setAttribute('src', 'images/gorilla.jpg')
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName)
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}