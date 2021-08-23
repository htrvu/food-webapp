import { DiscountData } from "../data/Product/DiscountData"
import lowerBound from './LowerBound'

const quantityMap = {}
const quantityArray = []
for (let i = 0; i < DiscountData.length; i++) {
  quantityMap[DiscountData[i].quantity] = DiscountData[i].discount
  quantityArray.push(DiscountData[i].quantity)
}

export const round2 = (number) => {
  return Math.round(number * 100) / 100
}

export const calculatePrice = (quantity, price) => {
  let discount = 0
  let quantityPivot = lowerBound(quantityArray, quantity)
  if (quantityPivot !== -1) {
    discount = quantityMap[quantityPivot]
  }
  else {
    quantityPivot = 0
  }

  let total = Math.round(quantity * price * (1 - discount) * 100) / 100

  return {total, discount, quantityPivot}
}