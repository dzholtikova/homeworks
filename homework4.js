function checkProbabilityTheory(count) {

    let evenNumber = 0;
    let oddNumber = 0;

    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (number % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }

    let total = evenNumber + oddNumber;
    let evenPercentage = (evenNumber / total) * 100;
    let oddPercentage = (oddNumber / total) * 100;
    let percentageOfEvenToOdd = evenNumber / oddNumber;

    console.log(`Кількість згенерованих чисел: ` + total);
    console.log(`Парних чисел: ` + evenNumber);
    console.log(`Непарних чисел: ` + oddNumber);
    console.log(`Відсоток парних до непарних: ` + percentageOfEvenToOdd);
}

checkProbabilityTheory(1000);