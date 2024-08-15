var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru",
  },
];

function findValidEmails(arr) {
  var emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
  var validEmails = [];

  for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (emailPattern.test(email)) {
      validEmails.push(email);
    }
  }

  return validEmails;
}

var validEmails = findValidEmails(arr);
console.log(validEmails);
