function sumOfPurchases(purchaseAmounts) {
    let totalSum = 0;
    purchaseAmounts.forEach(amount => {
        totalSum += amount;
    });
    return totalSum;
  }
  
  let topPurchases = [10000, 20000, 30000];
  console.log(sumOfPurchases(topPurchases));