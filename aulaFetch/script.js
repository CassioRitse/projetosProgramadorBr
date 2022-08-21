let url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c499ec65b3fcfd753827d4db405fb63a"

fetch(url)
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        console.log(data)
    })