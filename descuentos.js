
function getDiscountPrice (originalPrice, discount) {
    const discountPrice = (originalPrice * (100 - discount))/100;
    return discountPrice;
}

function calculatePriceDiscount () {
    const inputPrice = Number(document.getElementById("input-price").value);
    const inputDiscount = Number(document.getElementById("input-discount").value);
    const discountPrice = getDiscountPrice(inputPrice, inputDiscount);
    const resultPrice = document.getElementById("result-price");
    resultPrice.innerText = `El precio con descuento es $${discountPrice}`;
}
