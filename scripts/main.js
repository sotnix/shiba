const myImg = document.querySelector('img');

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

let myButton = document.querySelector('button');
myButton.setAttribute("boom")
myButton.onclick = listInts()
const myHeading = document.querySelector('h1');

function listInts()
{
    for (i = 0 ; i <10; i++)
    {
        console.log(i)
    }
}
