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
    } catch (error) {
        console.log(error, "please try again later")
    }
}
