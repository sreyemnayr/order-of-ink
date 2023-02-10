export const getTotalPrice = (firstSecondQuantity, thirdQuantity) => {
    const totalPrice = firstSecondQuantity*0.08 + thirdQuantity*0.4
    return totalPrice.toFixed(2)
}