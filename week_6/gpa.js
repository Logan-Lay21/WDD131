function GetGrades() {
    const gradesInput = document.querySelector("#grades");

    const gradesText = gradesInput.value;
    const gradesArray = gradesText.split(",").map(grade => grade.trim().toUpperCase());
    
    return gradesArray;
}

function gradeConverter(grade) {
    if (grade === "A"){
        return 4.0;
    }
    else if (grade === "B"){
        return 3.0;
    }
    else if (grade === "C"){
        return 2.0;
    }
    else if (grade === "D"){
        return 1.0;
    }
    else if (grade === "F"){
        return 0.0;
    }
}

function calcGPA() {
    const grades = GetGrades();
    let result = 0

    for(let i = 0; i < grades.length; i++) {
        result += gradeConverter(grades[i]);
    }
    const gpa = result/grades.length;

    return gpa.toFixed(2);
}


// function ClickHandler() {
//     const grades = calcGPA();
//     console.log(grades);
// }

function clickHandler() {
    const gpa = calcGPA();
    document.querySelector("#output").textContent = `GPA: ${gpa}`;
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);

// document.querySelector("#submitButton").addEventListener("click", ClickHandler);