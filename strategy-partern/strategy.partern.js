function getPriceBlackFriday(originalPrice) {
    // dieu kien gia
    return originalPrice*0.8
}

function getPricePreOrder(originalPrice) {
    return originalPrice*0.6
}

function getPrice1111(originalPrice) {
    return originalPrice
}

function getPricePromotion(originalPrice) {
    return originalPrice*0.7
}

function defaultPrice(originalPrice) {
    return originalPrice
}

const getPriceStrategies = {
    preOrder: getPricePreOrder,
    promotion: getPricePromotion,
    blackFriday: getPriceBlackFriday,
    sale1111: getPrice1111,
    default: defaultPrice
}

function getPrice(originalPrice, typePromotion = 'default') {
    return getPriceStrategies[typePromotion](originalPrice)
}
