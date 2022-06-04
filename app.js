const form = document.getElementById("form");
const validation = document.getElementById("validation");
const number = document.getElementById("tcId");

const message = function (message, color) {
  validation.innerHTML = `${number.value} ${message}`;
  document.querySelector("body").classList.add(color);
  document.querySelector(".title").classList.add("text-white");
  document.querySelector(".message").classList.add("text-white");
};

const checkID = function (number) {
  if (number) {
    const arr = number.split("");
    const oddDigitSum =
      arr
        .filter((_, i) => i % 2 !== 1 && i < 10)
        .reduce((acc, digit) => acc + +digit, 0) * 7;
    const evenDigitSum = arr
      .filter((_, i) => i % 2 == 1 && i < 8)
      .reduce((acc, digit) => acc + +digit, 0);
    const digit10 = (oddDigitSum - evenDigitSum) % 10;
    const digit11 =
      (arr.slice(0, 9).reduce((acc, digit) => acc + +digit, 0) + digit10) % 10;
    arr[0] !== "0" &&
    arr[9] == digit10 &&
    arr[10] == digit11 &&
    arr.length == 11
      ? message("is a valid TC ID", "bg-success")
      : message("is not a valid TC ID", "bg-danger");
  } else validation.innerHTML = "Enter an ID to control!";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkID(number.value);
});
number.addEventListener("click", (e) => {
  document.querySelector("body").classList.remove("bg-success");
  document.querySelector(".title").classList.remove("text-white");
  document.querySelector(".message").classList.remove("text-white");
  document.querySelector("body").classList.remove("bg-danger");
  validation.innerHTML = "We will never share your ID";
  number.value = "";
});
