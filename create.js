function start() {
  const URL = "https://api.quotable.io/random";
  getData(URL);
}
start();

async function getData(URL) {
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
    let guess = document.querySelector(".guess_author").value;
    let btn = document.querySelector(".button");

    btn.addEventListener("click", function (event) {
      event.preventDefault();
      check(author, quote, guess);

      console.log(guess);
      // check(guess, author)
    });
  } catch (error) {
    console.log(error, "please try again later");
  }
}

function insert_wrong(quote, author, guess) {
  document.querySelector(".arr_container").insertAdjacentHTML(
    "afterbegin",
    ` <div class="wrong_ans">
    <h2>Quote: ${quote}</h2>
    <h3>Your Guess: ${guess}</h3>
    <h3>you are wrong!</h3>
    <h3>Right Answer: ${author}</h3>
</div>`
  );
}

function insert_right(quote, guess) {
  document.querySelector(".arr_container").insertAdjacentHTML(
    "afterbegin",
    `   <div class="right_ans">
    <h2>Quote: ${quote}</h2>
    <h3>Your Guess: ${guess}</h3>
    <h3>you are Right!</h3>
</div>`
  );
}

function check(author, quote, guess) {
  if (guess == author) {
    return insert_right(quote, guess);
  } else {
    return insert_wrong(quote, author, guess);
  }
}
