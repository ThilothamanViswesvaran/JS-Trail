// get student count
// 10
// get accordingly to the number
// 1 student - 5 sub
// name, sub 1-5 mark
// entered student number name
// name, sub1-5 mark

// after 10 students
// total of individual total,final class topper name 
// const students = [];
// let count;
// do {
//     count = parseInt(prompt("Enter the number of students:"));
// } while (isNaN(count) || count <= 0);

// let topperName = "";
// let highestTotal = 0;

// for (let i = 0; i < count; i++) {
//     let studentName = prompt(`Enter name of student ${i + 1}:`);
//     let subjects = [];
//     let marks = [];
//     let total = 0;

//     for (let s = 0; s < 5; s++) {
//         let subjectName = prompt(`Enter subject name ${s + 1}:`);
//         subjects.push(subjectName);
        
//         let mark;
//         do {
//             mark = parseInt(prompt(`Enter mark for ${subjectName}:`));
//             if (isNaN(mark) || mark < 0) {
//                 console.log("Invalid mark, please enter a valid number.");
//             }
//         } while (isNaN(mark) || mark < 0);
        
//         marks.push(mark);
//         total += mark;
//     }
    
//     students.push({ name: studentName, subjects, marks, total });
//     console.log(`${studentName} Total Marks: ${total}`);
    
//     if (total > highestTotal) {
//         highestTotal = total;
//         topperName = studentName;
//     }
// }

// console.log("Student Marks and Total:");
// students.forEach(student => {
//     console.log(`${student.name}: ${student.subjects.join(", ")} -> Marks: ${student.marks.join(", ")} | Total: ${student.total}`);
// });

// console.log(`Class Topper: ${topperName} with Total Marks: ${highestTotal}`);


let count;
do {
    count = parseInt(prompt("Enter the number of students:"));
} while (isNaN(count) || count <= 0);

let topperName = "";
let highestTotal = 0;

for (let i = 0; i < count; i++) {
    let studentName = prompt(`Enter name of student ${i + 1}:`);
    let total = 0;
    let highestMarks = 0;

    let englishMark, mathsMark, tamilMark, socialMark, economicsMark;
    do {
        englishMark = parseInt(prompt(`Enter mark for English:`));
    } while (isNaN(englishMark) || englishMark < 0);

    do {
        mathsMark = parseInt(prompt(`Enter mark for Maths:`));
    } while (isNaN(mathsMark) || mathsMark < 0);

    do {
        tamilMark = parseInt(prompt(`Enter mark for Tamil:`));
    } while (isNaN(tamilMark) || tamilMark < 0);

    do {
        socialMark = parseInt(prompt(`Enter mark for Social:`));
    } while (isNaN(socialMark) || socialMark < 0);

    do {
        economicsMark = parseInt(prompt(`Enter mark for Economics:`));
    } while (isNaN(economicsMark) || economicsMark < 0);

    
    total = englishMark + mathsMark + tamilMark + socialMark + economicsMark;

    
    highestMarks = Math.max(englishMark, mathsMark, tamilMark, socialMark, economicsMark);

    console.log(`${studentName} Total Marks: ${total}`);
    console.log(`${studentName}'s highest marks: ${highestMarks}`);

    if (total > highestTotal) {
        highestTotal = total;
        topperName = studentName;
    }
}

console.log(`Class Topper: ${topperName} with Total Marks: ${highestTotal}`);
