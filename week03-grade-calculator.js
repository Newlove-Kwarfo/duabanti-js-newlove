function average(scores) {
  let total = 0;
  for (const score of scores) {
    total += score;
    if (Number.isNaN(score)) {
      total += 0;
    }
  }
  if (scores.length === 0) {
    return 0;
  }
  return total / scores.length;
}

function getGrade(score) {
  if (score < 0 || score > 100) return "Invalid score";
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 50) return "D";
  else return "F";
}

function isValidScore(score) {
  if (Number.isNaN(score)) {
    return false;
  } else if (score >= 0 && score <= 100) {
    return true;
  } else {
    return false;
  }
}

function hasPassed(score) {
  if (score >= 50) {
    return "Passed";
  }
  return "Failed";
}

function countPassed(scores) {
  let passed = 0;
  let failed = 0;
  for (const score of scores) {
    if (score >= 50) {
      passed++;
    } else {
      failed++;
    }
  }
  return [passed, failed];
}

function printResults(scores) {
  console.log("SCORES REPORT");
  for (const score of scores) {
    if (isValidScore(score)) {
      console.log(`
Score: ${score}
Grade: ${getGrade(score)}
Status: ${hasPassed(score)}`);
    } else {
      console.log(`
Score: ${score}
Grade: ${getGrade(score)}`);
    }
  }
  const [passed, failed] = countPassed(scores);
  console.log(`
Overall Average Score: ${average(scores).toFixed(2)}
Total Passed: ${passed}
Total Failed: ${failed}`);
}

let input = process.argv.slice(2).map(Number);
if (input === undefined || input.length === 0) {
  input = [72, 45, 91];
}

printResults(input);
