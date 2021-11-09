export default function priceTracker(currentPrice = 0, action) {
  switch (action.type) {
    case "priceTracker/init":
      return { currentPrice: action.price };
    case "priceTracker/add":
      return { currentPrice: currentPrice + action.price };
    case "priceTracker/substract":
      return { currentPrice: currentPrice - action.price };
    default:
      return currentPrice;
  }
}
