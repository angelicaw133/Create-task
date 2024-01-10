function start(){
    const btn = document.querySelector(".generate");
    btn.addEventListener("click", function(){
    console.log("works")
    
    })
}
start()

    const URL = 'https://api.quotable.io/random'
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
getData(URL)