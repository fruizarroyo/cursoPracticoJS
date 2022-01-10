
const coupons = ["First purchase", "Suscription to newsletter", "Black Friday discount"]

function displayResults(result, id, text) {
    const element = document.getElementById(id);
    const resultsDisplayed = element.innerHTML
    if (resultsDisplayed) {    
        element.innerText= "";
        element.innerText = text +": $" + result; 
    } else {
        element.innerText = text +": $" + result; 
    }
}

function getDiscountPrice (originalPrice, discount) {
    const discountPrice = (originalPrice * (100 - discount))/100;
    return discountPrice;
}

function calculatePriceDiscount () {
    // Obtener entrada de texto del usuario
    const inputPrice = Number(document.getElementById("input-price").value);
    const inputDiscount = Number(document.getElementById("input-discount").value);
    const inputCoupon = document.getElementById("input-coupon").value.trim();
 
    // Calcular descuentos
    const discountPrice = getDiscountPrice(inputPrice, inputDiscount);

    let couponPrice;
    let finalPrice;
  
    if (inputCoupon) {
        let couponDiscount;
        switch (inputCoupon) {
            case coupons[0]: 
                couponDiscount = 15;
                break
            case coupons[1]:
                couponDiscount = 20;
                break
            case coupons[2]:
                couponDiscount = 35;
                break
            default:
                couponDiscount = 0;
                break
        }

        const couponPrice = getDiscountPrice(inputPrice, couponDiscount);
        finalPrice = discountPrice - (inputPrice-couponPrice);
    } else {
        finalPrice = discountPrice
    }
 

    displayResults(discountPrice, "result-price","El precio con descuento es " );
    displayResults(finalPrice, "result-price-coupon","El precio con descuento y cupón es" );
   
}
