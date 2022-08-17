

//challenge one: Your age in Days
//to get your age in days what do we need:
//one -> your age in years
//from there me multiply the number of years by 365 days

function ageInYears(){
  const year = prompt("Which year were you born?");
  const days = ((2022 - year) * 365);
  return days;
}
console.log("Your age in days is " + ageInYears());
// ageInYears();
