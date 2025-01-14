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

// ADD TO CART

// select cart quantity in header
const headerQuantity = document.querySelector(".cart > .cart-nb");
// select button add to cart 
const addToCartButton = document.querySelector(".js-add-cta");
console.log(addToCartButton);
// select quantity in input field
const addQuantity = document.querySelector(".js-add-qty");

// click on button add to cart put quantity in input field in header
// addToCartButton.disabled = false;
addToCartButton.addEventListener("click", cartBtnChange)

function cartBtnChange() {
    let quantity = addQuantity.value;
    if (quantity > 99) {
        quantity = "99+";
    }
    headerQuantity.textContent = quantity;
    addToCartButton.innerText = "Déjà au panier";
    this.disabled = true;
    this.removeEventListener("click", cartBtnChange);
}


// ------------------------------------------------------------

// ACCORDIONS


// localStorage

// get in localStorage last viewing
let getLastViewing = localStorage.getItem("lastview");
// replace ".page-txt" section with section in localStorage
document.querySelector(".page-txt").innerHTML = JSON.parse(getLastViewing);


const titles = document.querySelectorAll(".js-product-subttl");
console.log(titles);

titles.forEach(function(title){
    title.addEventListener("click", function() {
        // console.log(this);
        title.classList.toggle("closed");

        let data = title.id;
        // console.log("id: " + data);
        const toggleText = document.querySelector(`[data-toggle = ${data}]`);
        // console.log(toggleText);
        toggleText.classList.toggle('closed');
        // console.log(toggleText);

        // get 'page-txt' section
        const lastViewing = document.querySelector(".page-txt").innerHTML.trim();
        // console.log(lastViewing);

        // put section in localStorage
        const lastViewingJSON = JSON.stringify(lastViewing);
        // console.log(lastViewingJSON);
        localStorage.setItem("lastview", lastViewingJSON)
    })
})


// ----------------------------------------------------------------
// SIMILAR PRODUCTS

// Mobile

const productsImgs = document.querySelectorAll('.js-similar-img');
const productsItems = document.querySelectorAll(".js-similar-itm");
const productsList = document.querySelectorAll(".js-similar-lst");
const carousselSection = document.querySelector('.caroussel-container');
console.log(productsImgs);
console.log(productsItems);
console.log(productsList);
console.log(carousselSection);


//create buttons caintainer 
const buttonsContainer = document.createElement("div");
buttonsContainer.setAttribute("class", "buttons-container");
carousselSection.appendChild(buttonsContainer)


// create left button
const buttonLeft = document.createElement("button");
buttonLeft.setAttribute("type", "button");
buttonLeft.innerText = "<";
buttonLeft.classList.add('similar-btn');
buttonsContainer.appendChild(buttonLeft);

// create right button
const buttonRight = document.createElement("button");
buttonRight.setAttribute("type", "button");
buttonRight.innerText = ">";
buttonRight.classList.add('similar-btn');
buttonsContainer.appendChild(buttonRight);





productsItems.forEach(function(item) {
    // item.style.visibility = 'hidden';
    // item.style.width = '100vw';
    // item.dataset.slide = item;
    // productsItems[0].style.visibility = "inherit";
    // productsItems[0].style.width = "100vw";
});
productsItems[2].style.zIndex = "100";
productsItems[2].style.backgroundColor = "black";