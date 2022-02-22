let imageNum = 0;
let lightboxImageNum = 0;
const carouselImages = document.getElementsByClassName("carousel__image");
const carouselFlexboxContainer = document.querySelectorAll(".flexbox__container");
const carouselThumbnailImages = document.querySelectorAll(".carousel__thumbnailImage");
const lightboxImages = document.querySelectorAll(".lightbox__image");
const lightboxFlexboxContainer = document.querySelectorAll(".lightboxFlexbox__container");
const lightboxThumbnailImages = document.querySelectorAll(".lightbox__thumbnailImage");

// Carousel functioning
function carouselThumbnail(){

    for(let i=0;i<carouselThumbnailImages.length;i++)
    {
        carouselThumbnailImages[i].classList.remove("thumbnailImage__clicked");
        carouselFlexboxContainer[i].classList.remove("thumbnailContainer__clicked");
        if(i === imageNum){
            carouselThumbnailImages[i].classList.add("thumbnailImage__clicked");
            carouselFlexboxContainer[i].classList.add("thumbnailContainer__clicked");
        }
    }  
}
function carousel(){
    
    for(let i=0;i<carouselImages.length;i++){
        
        carouselImages[i].classList.add("carousel__image--hidden");
        if(imageNum === i){
            carouselImages[i].classList.remove("carousel__image--hidden")
        }
    }
}

carousel();
carouselThumbnail();
document.querySelector(".prev").addEventListener("click",function(){
    imageNum = (imageNum-1 < 0 ? 3 : imageNum-1);
    carousel();
});

document.querySelector(".next").addEventListener("click",function(){
    imageNum = (imageNum+1 > 3 ? 0 : imageNum+1);
    carousel();
});

// Carousel Thumbnail
for(let i=0;i<carouselThumbnailImages.length;i++)
{
    carouselThumbnailImages[i].addEventListener("click",function(){
        imageNum = i;
        carousel();
        carouselThumbnail();
        document.querySelector(".lightbox__parent").classList.remove("lightbox__parent--hidden");
        document.querySelector(".lightbox").classList.remove("lightbox--hidden");
    });
}

// Menu Modal Functionality
document.querySelector(".header__menu").addEventListener("click",function(){
    document.querySelector(".nav").classList.remove("nav--hidden");
});
document.querySelector(".nav__close").addEventListener("click",function(){
    document.querySelector(".nav").classList.add("nav--hidden");
});


// Order Quantity
const operators = document.querySelectorAll(".flexbox2__img");
const orderQuantity = document.querySelector(".flexbox2__span");
for(let i=0;i<operators.length;i++){

    operators[i].addEventListener("click",function(){
        const altValue = operators[i].getAttribute("alt");
        if(altValue === "minus-icon"){
            const num = Number(orderQuantity.textContent);
            orderQuantity.textContent = (num -1 < 0 ? 0 : num-1);
        }
        else{
            const num = Number(orderQuantity.textContent);
            orderQuantity.textContent = num+1;
        }
    });
}

//Cart Functionality
document.querySelector(".header__cart").addEventListener("click",function(){
    document.querySelector(".cartModal").classList.toggle("cartModal--hidden");
});

//Button cart Relation

document.querySelector(".button").addEventListener("click",function(){
    
    const orderQuantity = Number(document.querySelector(".flexbox2__span").textContent);
    
    if(orderQuantity > 0){

        document.querySelector(".header__badge").classList.remove("header__badge--hidden");
        document.querySelector(".badge__number").textContent = orderQuantity;
        document.querySelector(".cart__status").classList.add("cart__status--hidden");
        document.querySelector(".order__block1").classList.remove("order__block1--hidden");
        document.querySelector(".order__span1").textContent = "$125.00 x " + orderQuantity.toString();
        document.querySelector(".order__span2").textContent = "$" + 125*orderQuantity + ".00";
    }
});

//Delete Functionality
document.querySelector(".order__img2").addEventListener("click",function(){
    
    document.querySelector(".header__badge").classList.add("header__badge--hidden");
    document.querySelector(".flexbox2__span").textContent = 0;
    document.querySelector(".cart__status").classList.remove("cart__status--hidden");
    document.querySelector(".order__block1").classList.add("order__block1--hidden");
    document.querySelector(".cartModal").classList.add("cartModal--hidden");
});

//Lightbox carousel
function lightboxThumbnail(){

    for(let i=0;i<lightboxThumbnailImages.length;i++)
    {
        lightboxThumbnailImages[i].classList.remove("thumbnailImage__clicked");
        lightboxFlexboxContainer[i].classList.remove("thumbnailContainer__clicked");
        if(i === lightboxImageNum){
            lightboxThumbnailImages[i].classList.add("thumbnailImage__clicked");
            lightboxFlexboxContainer[i].classList.add("thumbnailContainer__clicked");
        }
    }  
}
function lightboxCarousel(){
    
    for(let i=0;i<lightboxImages.length;i++){
        
        lightboxImages[i].classList.add("lightbox__image--hidden");
        if(lightboxImageNum === i){
            lightboxImages[i].classList.remove("lightbox__image--hidden")
        }
    }
    lightboxThumbnail(lightboxImageNum);
}

lightboxCarousel();

document.querySelector(".lightbox__prev").addEventListener("click",function(){
    lightboxImageNum = (lightboxImageNum-1 < 0 ? 3 : lightboxImageNum-1);
    lightboxCarousel();
});

document.querySelector(".lightbox__next").addEventListener("click",function(){
    lightboxImageNum = (lightboxImageNum+1 > 3 ? 0 : lightboxImageNum+1);
    lightboxCarousel();
});

// Thumbnail Functionality

for(let i=0;i<lightboxThumbnailImages.length;i++)
{
    lightboxThumbnailImages[i].addEventListener("click",function(){
        lightboxImageNum = i;
        lightboxCarousel();
    });
}

//Lightbox Close Button
document.querySelector(".lightbox__close").addEventListener("click",function(){
    document.querySelector(".lightbox__parent").classList.add("lightbox__parent--hidden");
    document.querySelector(".lightbox").classList.add("lightbox--hidden");
    imageNum = lightboxImageNum;
    carousel();
    carouselThumbnail();
});



//Media Queries

const media = window.matchMedia("(max-width: 999px)");
media.addEventListener("change",function(){
    if(media.matches){
        document.querySelector(".lightbox__parent").classList.add("lightbox__parent--hidden");
        document.querySelector(".lightbox").classList.add("lightbox--hidden");
        imageNum = lightboxImageNum;
        carousel();
        carouselThumbnail();
    }
    else{
        carousel();
        carouselThumbnail();
    }
});





