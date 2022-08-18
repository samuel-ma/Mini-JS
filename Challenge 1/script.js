

//challenge one: Your age in Days
//to get your age in days what do we need:
//one -> your age in years
//from there me multiply the number of years by 365 days

function ageInYears(){
  const year = prompt("Which year were you born?");
  const days = ((2022 - year) * 365);
  let h1 = document.createElement("h1")
  let answer = document.createTextNode("Your are " + days + " days old")
  h1.setAttribute("id", "ageInYears")
  h1.appendChild(answer)
  document.getElementById('result').appendChild(h1)
}

