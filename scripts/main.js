var myImg = document.querySelector('img');

myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');
    console.log(mySrc);
    if (mySrc == 'images/shiba.jpg')
    {
        myImg.setAttribute('src', 'images/angryboi.png');
    }
    else
    {
        myImg.setAttribute('src', 'images/shiba.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

