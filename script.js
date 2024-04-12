// hamburger menu

let x = document.getElementById("top_nav");

function hamburgerToggle() {
    x.classList.toggle("open");
}



//modal box

let modalBox = document.getElementById("myModalBox");

let btn = document.getElementById("myBtn");

let a = document.getElementsByClassName("closeBox")[0];

btn.onclick = function () {
    modalBox.style.display = "block";
}

a.onclick = function () {
    modalBox.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalBox) {
        modalBox.style.display = "none";
    }
}


// read more/less button


let dots = document.getElementById("dots");
let moreText = document.getElementById("moreTxt");
let btnText = document.getElementById("myBtnr");

function myFunction() {

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



// load more..

let y = document.getElementById("portfolio");

function showMore() {
    y.classList.toggle("more");
}

// modal img

let modal = document.getElementById("myModal");

let images = document.getElementsByClassName('myImages');
let modalImg = document.getElementById("img01");

for (let i = 0; i < images.length; i++) {
    let img = images[i];

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}