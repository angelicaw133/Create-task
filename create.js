function start() {
  const DOMSelectors = {
    form: document.querySelector("#form"),
    guess: document.querySelector(".guess_author"),
    button: document.querySelector(".button"),
  };
  const URL = "https://api.quotable.io/random";
  getData(DOMSelectors, URL);
}

start();

async function getData(DOMSelectors, URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    document.querySelector("h2").textContent = data.content;
    let author = data.author;
    let quote = data.content;
    let btn = document.querySelector(".button");

    btn.addEventListener("click", function (event) {
      event.preventDefault();
      let guess = DOMSelectors.guess.value;
      console.log(guess);
      check(author, quote, guess, arr);
      clear(DOMSelectors);
    });
  } catch (error) {
    console.log(error, "please try again later");
  }
}
let arr = [];
function insert_wrong(quote, author, guess, arr) {
  arr.push(0);
  create_btn();
  document.querySelector(".arr_container").insertAdjacentHTML(
    "afterbegin",
    ` <div class="wrong_ans">
    <h2>Quote: ${quote}</h2>
    <h3>Your Guess: ${guess}</h3>
    <h3>you are wrong!</h3>
    <h3>Right Answer: ${author}</h3>
</div>`
  );
  calculate_arr(arr);
}

function insert_right(quote, guess, arr) {
  create_btn();
  arr.push(1);
  document.querySelector(".arr_container").insertAdjacentHTML(
    "afterbegin",
    `   <div class="right_ans">
    <h2>Quote: ${quote}</h2>
    <h3>Your Guess: ${guess}</h3>
    <h3>you are Right!</h3>
</div>`
  );
  calculate_arr(arr);
}

function check(author, quote, guess, arr) {
  if (guess == author) {
    return insert_right(quote, guess, arr);
  } else {
    return insert_wrong(quote, author, guess, arr);
  }
}
function clear(DOMSelectors) {
  DOMSelectors.guess.value = "";
}
function create_btn() {
  document
    .querySelector(".container")
    .insertAdjacentHTML("afterbegin", `<button>"Generate New Quote"</button>`);
}

function calculate_arr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let percentage = (total / array.length) * 100;
  console.log(percentage + "%");
}


