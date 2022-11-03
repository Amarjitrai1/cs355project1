/*----------- ADD TO CART -----------*/
if (window.location.pathname.indexOf("/product.html") != -1) {
  document.getElementById('submitATC').onclick = function () {
    //Check to see if the radio button is clicked
    if (document.querySelector("input[type=radio]:checked") == null) {
      //Not clicked? Make the text red to signal an error
      document.getElementsByTagName("form")[0].children[0].style.color = "red";
    } else {
      //Restore the text to black and handle submission
      document.getElementsByTagName("form")[0].children[0].style.color = "black";
      document.getElementById("submitATC").style.opacity = 1.0;
    }
  }
}
/*----------- PRODUCT HANDLING -----------*/
if (window.location.pathname.indexOf("/product.html") != -1) {
  //Extract out painting query
  var url = new URL(document.URL),
    urlsp = url.searchParams;
  paintingTag = encodeURI(urlsp.get("product"));

  if (paintingTag == "null") {
    //No painting query string? Return back to home page
    window.location.replace("home.html")
  } else {
    //Replace the elements on the body with the attributes of the painting
    document.getElementById("productImage").src = `img/${paintingTag}.png`

    switch (paintingTag) {
      case "product2":
        document.getElementsByTagName("h3")[0].innerHTML = "Mountain Mocking Bird"
        break;
      case "product3":
        document.getElementsByTagName("h3")[0].innerHTML = "Vase of Flowers"
        break;
      case "product4":
        document.getElementsByTagName("h3")[0].innerHTML = "Life"
        break;
      case "product5":
        document.getElementsByTagName("h3")[0].innerHTML = "Madness"
        break;
      case "product6":
        document.getElementsByTagName("h3")[0].innerHTML = "The Ride"
        break;
      default:
        document.getElementsByTagName("h3")[0].innerHTML = "Flowers in Glass Vases"
    }
  }
}

/*----------- SHOWING THE MENU -----------*/
document.getElementById('nav-toggle').onclick = function () {
  //Append the classlist
  document.getElementById('nav-menu').classList.add("show-menu");
}

document.getElementById('nav-close').onclick = function () {
  //Append the classlist
  document.getElementById('nav-menu').classList.remove("show-menu");
}

/*----------- CHANGE HEADER ON SCROLL -----------*/
function headerAdjustScroll() {
  if (window.scrollY > 40) {
    document.getElementById('header').classList.add('scroll-header');
  } else
    document.getElementById('header').classList.remove('scroll-header')
}
window.addEventListener('scroll', headerAdjustScroll)

/*----------- USING SCROLL REVEAL TO ANIMATE IN ELEMENTS -----------*/
const srev = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

srev.reveal(`.artbetter`)
srev.reveal(`.home-pic`, { delay: 500 })
srev.reveal(`.social`, { delay: 600 })
srev.reveal(`.contact-box`, { origin: 'left' })
srev.reveal(`.contact-form`, { origin: 'right' })
srev.reveal(`.prod-card, , .footer`, { interval: 100 })

/*----------- BLURRY LOADING -----------*/
if (document.querySelector('.bg') != undefined ) {
  const loadingText = document.querySelector('.loading-text');
  const bg = document.querySelector('.bg');
  const header = document.querySelector('#header');


  var load = 0;
  var int = setInterval(blurring, 30)
  function blurring() {
    load++;
    if (load > 99) {
      clearInterval(int);
    }

    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
    header.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
}