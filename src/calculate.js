export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => total + (item.count * item.price), 0);

  if (applyDiscount) {
    return sum * 0.75;
  }
  return sum;
  // let result = 0;
  // for (let index = 0; index < purchases.length; index++) {
  //     result += purchases[index].count * purchases[index].price;
  // }
  // return result;
}

// module.exports = {
//     calculateTotal}
