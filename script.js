const btnDog = document.getElementById("dog")
btnDog.onclick = async (e)=>{
    const apiurl = "https://dog.ceo/api/breeds/image/random"
    let dogurl = await axios.get(apiurl)
    dogurl = dogurl.data.message
    window.open(dogurl, "_blank")
}