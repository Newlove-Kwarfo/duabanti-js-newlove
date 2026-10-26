//changed function name from average to calculateAverage
// and parameter name from scores to numbers
function calculateAverage(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (const number of numbers) {
    total += number;
    if (Number.isNaN(number)) {
      total += 0;
    }
  }
  return total / numbers.length;
}

function getGrade(score) {
  if (score < 0 || score > 100) return "Invalid score";
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 50) return "D";
  else return "F";
}

function formatCedis(amount) {
  //added formatCedis function
  return `GH₵${amount.toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
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

function checkPassStatus(score) {
  // renamed function from hasPassed
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
Status: ${checkPassStatus(score)}`);
    } else {
      console.log(`
Score: ${score}
Grade: ${getGrade(score)}`);
    }
  }
  const [passed, failed] = countPassed(scores);
  console.log(`
Overall Average Score: ${calculateAverage(scores).toFixed(2)}
Total Passed: ${passed}
Total Failed: ${failed}

Random amount that doesn't really belong here: ${formatCedis(scores[0])}`);
}

let input = process.argv.slice(2).map(Number);
if (input === undefined || input.length === 0) {
  input = [72, 45, 91];
}

printResults(input);
