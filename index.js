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

document.querySelector(".order__img2").addEventListener("click",function(){
    
    document.querySelector(".header__badge").classList.add("header__badge--hidden");
    document.querySelector(".flexbox2__span").textContent = 0;
    document.querySelector(".cart__status").classList.remove("cart__status--hidden");
    document.querySelector(".order__block1").classList.add("order__block1--hidden");
});



