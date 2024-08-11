var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
};

function totalPrice() {
  var total = 0;
  for (var key in services) {
    var price = parseInt(services[key]);
    total += price;
  }
  return total + " грн";
}

function minPrice() {
  var min = null;
  for (var key in services) {
    var price = parseInt(services[key]);
    if (min === null) {
      min = price;
    } else if (price < min) {
      min = price;
    }
  }
  return min + " грн";
}

function maxPrice() {
  var max = null;
  for (var key in services) {
    var price = parseInt(services[key]);
    if (max === null) {
      max = price;
    } else if (price > max) {
      max = price;
    }
  }
  return max + " грн";
}

console.log("Загальна вартість: " + totalPrice());
console.log("Мінімальна вартість: " + minPrice());
console.log("Максимальна вартість: " + maxPrice());
