let imageNum = 0;
const carouselImages = document.getElementsByClassName("carousel__image");


// Carousel functioning
function carousel(){
    
    for(let i=0;i<carouselImages.length;i++){
        
        carouselImages[i].classList.add("carousel__image--hidden");
        if(imageNum === i){
            carouselImages[i].classList.remove("carousel__image--hidden")
        }
    }
}

carousel();
document.querySelector(".prev").addEventListener("click",function(){
    imageNum = (imageNum-1 < 0 ? 3 : imageNum-1);
    carousel();
});

document.querySelector(".next").addEventListener("click",function(){
    imageNum = (imageNum+1 > 3 ? 0 : imageNum+1);
    carousel();
});

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
    
});
