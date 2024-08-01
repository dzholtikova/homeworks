var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  миттяГолови: "100 грн",

  calculateTotalPrice: function () {
    var totalPrice = 0;
    for (var key in this) {
      if (typeof this[key] === "string" && this[key].endsWith(" грн")) {
        var price = parseInt(this[key]);
        totalPrice += price;
      }
    }
    return totalPrice + " грн";
  },
};

var totalPrice = services.calculateTotalPrice();
console.log(totalPrice);
