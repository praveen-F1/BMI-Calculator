// HEIGHT RANGE
let hslider = document.getElementById("hrange");
let houtput = document.getElementById("hRangeValue");
houtput.innerHTML = hslider.value;
let hop;
hslider.oninput = function() {
  houtput.innerHTML = this.value;
  hop = this.innerHTML;
}

// WEIGHT RANGE
let wslider = document.getElementById("wrange");
let woutput = document.getElementById("wRangeValue");
woutput.innerHTML = wslider.value;
wslider.oninput = function() {
  woutput.innerHTML = this.value;
}

let beginbtn = document.getElementById("beginbtn");
let page2 = document.getElementById("pg2");
beginbtn.addEventListener("click", (e) => {
  if (e.target.click) {
    page2.style.display = "grid";
  } else {
    page2.style.display = "none";
  }
});

endbtn.addEventListener("click", (e) => {
  if (e.target.click) {
    page2.style.display = "none";
  } else {
    page2.style.display = "grid";
  }
});

//calculation

beginbtn.addEventListener("click", result);

function result() {
  let obesityvalue = document.getElementById("obesity-value");
  let bmivalue = document.getElementById("bmi-value");
  let cal = (woutput.innerHTML / (houtput.innerHTML) ** 2) * 10000;
  let result = cal.toFixed(1);
  bmivalue.innerHTML = result;
  
  if (result < 16) {
    obesityvalue.innerHTML = "Severely Underweight";
    obesityvalue.style.color = "#0042ff";
  } else if (result>=16 && result<=18.4) {
    obesityvalue.innerHTML = "Underweight";
    obesityvalue.style.color = "#0096ff";
  } else if (result > 18.5 && result <= 24.9) {
    obesityvalue.innerHTML = "Normal";
    obesityvalue.style.color = "#00c0ff";
  } else if (result > 25 && result <= 29.9) {
    obesityvalue.innerHTML = "Overweight";
    obesityvalue.style.color = "#f8ff00";
  } else if (result > 30 && result <= 34.9) {
    obesityvalue.innerHTML = "Obesity Class |";
    obesityvalue.style.color = "#ff4900";
  } else if (result > 35 && result <= 39.9) {
    obesityvalue.innerHTML = "Obesity Class ||";
    obesityvalue.style.color = "#ff0049";
  } else if (result > 40) {
    obesityvalue.innerHTML = "Obesity Class |||";
    obesityvalue.style.color = "#ff1f00";
  }


}
