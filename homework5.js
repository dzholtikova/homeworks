let obj = {
  species: "rabbit",
  name: "Lolo",
  age: 3,
  color: "brown",

  getInfo: function () {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        console.log(key + ": " + this[key]);
      }
    }
  },
};

obj.getInfo();

obj.favouriteFood = "carrot";

obj.getInfo();
