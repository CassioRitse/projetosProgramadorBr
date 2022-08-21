//Pausado por enquanto
let url = "******"

fetch(url)
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        console.log(data)
    })
