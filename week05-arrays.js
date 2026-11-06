const classList = [
  { name: "Adjoa", score: 95 },
  { name: "Abena", score: 30 },
  { name: "Akua", score: 45 },
  { name: "Yaa", score: 98 },
  { name: "Afia", score: 56 },
  { name: "Ama", score: 72 },
  { name: "Akosua", score: 67 },
  { name: "Anna", score: 43 },
];

function getNames(students) {
  //returns names of the students
  return students.map((student) => student.name);
}

function getPassing(students) {
  //find students who are passing
  if (students.length === 0) return 0;
  return students.filter((student) => student.score >= 50);
}

function getTotal(students) {
  //cumulates student total score
  return students.reduce((sum, student) => sum + student.score, 0);
}

function getTopScorer(students) {
  //finds student with highest score
  if (students.length == 0) return undefined;
  let highest = students[0].score;
  for (const student of students) {
    if (student.score >= highest) highest = student.score;
  }
  return students.find((student) => student.score === highest);
}

function rank(students) {
  //ranks students based on score
  return students.slice().sort((a, b) => b.score - a.score);
}

//Printing out outputs
console.log("COMPREHENSIVE CLASS REPORT");
console.log("\nClass List:");
console.log(getNames(classList));
console.log("\nClass Rankings:");
console.log(rank(classList));
console.log("\nStudents who Passed:");
console.log(getPassing(classList));
console.log("\nTop Scorer:");
console.log(getTopScorer(classList));
console.log(
  "\nClass average: " + getTotal(classList) / classList.length.toFixed(2),
);
