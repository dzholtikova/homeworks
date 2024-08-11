function findValueByKey(companyName, currentCompany) {
  if (currentCompany.name === companyName) {
    return currentCompany;
  }

  if (currentCompany.clients && currentCompany.clients.length > 0) {
    for (let i = 0; i < currentCompany.clients.length; i++) {
      const result = findValueByKey(companyName, currentCompany.clients[i]);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

console.log(findValueByKey("Клієнт 1.2", company));
console.log(findValueByKey("Клієнт 1.2.3", company));
console.log(findValueByKey("Клієнт 2", company));
console.log(findValueByKey("Невідома компанія", company));
