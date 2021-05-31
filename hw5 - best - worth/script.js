const grades = [
  { name: 'Bilbo', grades: [6, 9, 9, 9, 10, 7] },
  { name: 'Saruman', grades: [7, 9, 8, 9, 8] },
  { name: 'Frodo', grades: [10, 11, 11, 12] },
  { name: 'Pipin', grades: [6, 8, 8, 7, 11] },
  { name: 'Gendalf', grades: [9, 10, 9, 10, 11, 8] },
  { name: 'Legolas', grades: [8, 7, 8, 9, 8, 9, 9] },
  { name: 'Aragorn', grades: [9, 9, 10, 12, 10, 8, 9] },
];


console.log(calculateAverageGrades(grades))
console.log(findBestAndWorth(calculateAverageGrades(grades)))



function calculateAverageGrades(arr) {
  let output = [];
  for (let stud in arr) {
    output[stud] = { name: arr[stud].name, averageGrade: findMean(arr[stud].grades) }
  }
  return output
}

function findMean(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

function findBestAndWorth(arr) {
  arr.sort((a, b) => a.averageGrade - b.averageGrade)
  return `lowest grade - ${arr[0].name} - ${arr[0].averageGrade}\nhighest grade - ${arr[arr.length-1].name} - ${arr[arr.length-1].averageGrade}`
}
