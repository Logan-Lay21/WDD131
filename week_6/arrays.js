//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = (step) => {

  return `<li>${step}<li>`;
}
const stepsHtml = steps.map(listTemplate).join("");// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml// set the innerHTML


const grades = ["A", "B", "A"];
const gradeConverter = (grade) => {
    let points = 0
    if (grade == "A"){
        points = 4;
    }
    else if (grade == "B"){
        points = 3;
    }
    else if (grade == "C"){
        points = 2;
    }
    else if (grade == "D"){
        points = 1;
    }
    else if (grade == "F"){
        points = 0;
    }
    // push(points)
    return points
};

let gradesHtml = grades.map(gradeConverter);

let grade = gradesHtml.reduce((sum,value) => {
    return sum + value
}, 0)

grade = grade/gradesHtml.length

document.querySelector("#gradeList").innerHTML = grade

const words = ["watermelon","peach","apple","tomato","grape"]
const result = words.filter((word) => word.length > 6)

document.querySelector("#fruitList").innerHTML = result

const numbers = [12, 34, 21, 54]
const luckyNumber = 21

console.log(numbers.indexOf(luckyNumber))






// const initialValue = 0;
// const sumWithInitial = grades.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// Expected output: 10
