// -----------------------------------------------------
//IMG DISPLAY FOR MOBILE

const imgLst = document.querySelectorAll(".thumbs-img");
const imgLstLength = imgLst.length;
console.log(imgLst);
console.log(imgLstLength);

const mainImg = document.getElementById("main-img");
console.log(mainImg);

const picturesButtons = document.querySelectorAll(".pictures-handler");
console.log(picturesButtons);

// picturesButtons.forEach(function (button) {
//     button.addEventListener('click', function() {
//         console.log(mainImg.src);
//     });
// });


// create an array of the img path



// split the img path in a array
const imgPathArray = mainImg.src.split("-");
// select the value we want to change
let imgDisplayed = imgPathArray[2];


// function displaying new img
function displayNewImg () {
    imgPathArray[2] = imgDisplayed;
    mainImg.src = imgPathArray.join("-");
}


// click event for left button, going backward img list
picturesButtons[0].addEventListener("click", function () {
    if (imgDisplayed <= 1) {
        // add 1 to get the last img of the array
        imgDisplayed = imgLstLength + 1;
    };
    imgDisplayed--;
    displayNewImg();
})

// click event for rigth button, going forward img list
picturesButtons[1].addEventListener("click", function () {
    if (imgDisplayed === imgLstLength) {
        // add 1 to get the last img of the array
        imgDisplayed = 0;
    };
    imgDisplayed++;
    displayNewImg();
});





// IMG THUMBS FOR DESKTOP


const thumbsList = document.getElementById('thumbs');
console.log(thumbsList);

thumbsList.addEventListener("mouseover", function(event) {
    // target the element who fire the event
    const newSource = event.target.src;
    // handle case of element is not li/img
    if (newSource === undefined) return;
    // replace url end with a better quality img for desktop
    mainImg.src = newSource.replace("s.png", "l.png");
});





// -----------------------------------------------------------

// ADD TO CART MOBILE


