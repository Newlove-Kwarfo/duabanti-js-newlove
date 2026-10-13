//function definitions
function cedisToDollars(cedis) {
  const dollarRate = 0.085;
  return `GHc${cedis.toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximmumFractionDigits: 2,
  })} = $${(cedis * dollarRate).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximmumFractionDigits: 2,
  })}`;
}

function kmToMiles(km) {
  const milesConversion = 0.621371;
  return `${km.toFixed(2)} km = ${km * milesConversion.toFixed(2)} miles`;
}

function celsiusToFahrenheit(celsius) {
  const farenheit = (celsius * 9) / 5 + 32;
  return `${celsius.toFixed(2)}°C = ${farenheit.toFixed(2)}°F`;
}

//testing
console.log(cedisToDollars(2000000));
console.log(kmToMiles(5));
console.log(celsiusToFahrenheit(37));
