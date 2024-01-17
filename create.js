function start(){
   const URL = 'https://api.quotable.io/random'
    getData(URL)
}
start()

async function getData(URL){
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data)
        document.querySelector("h2").textContent = data.content;
        let author = data.author;
        let quote = data.content;
        check(author, quote);
    } catch (error) {
        console.log(error, "please try again later")
    }
}

function insert_wrong(quote, author) {
    document.querySelector(".arr_container").insertAdjacentHTML("afterbegin",
    ` <div class="wrong_ans">
    <h2>${quote}</h2>
    <h3>${author}</h3>
    <h3>you are wrong!</h3>
    <h3>right answer</h3>
</div>`)
}

function insert_right(quote, author){
    document.querySelector(".arr_container").insertAdjacentHTML("afterbegin",
    `   <div class="right_ans">
    <h2>${quote}</h2>
    <h3>${author}</h3>
    <h3>you are rihgt!</h3>
</div>`)
}



function check(author, quote) { 
    let btn = document.querySelector(".button")
    
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        let guess = document.querySelector(".guess_author").value
        console.log(guess)
        console.log(data.author)
        // check(guess, author)
    })
    if (guess == author) {
        return insert_right(quote, author)
    } else {
        return insert_wrong(quote, author)
    }
}