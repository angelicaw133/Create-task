function start(){
    const URL = 'https://api.quotable.io/random'
    getData(URL)
    const btn = document.querySelector(".button")
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        insert()

    })
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
    } catch (error) {
        console.log(error, "please try again later")
    }
}

function insert_wrong(arr) {
    document.querySelector(".arr_container").insertAdjacentHTML("afterbegin",
    ``)
}

function insert_right(arr){
    document.querySelector(".arr_container").insertAdjacentHTML("afterbegin",
    ``)
}