const apiKey = "D1BQRs4yer11JQeoGDBvP7vxPvB9jWur9ncBVwoqRYWlgkZYrbJXikyB"

const searchBtn = document.querySelector(".buttonSearch")
const searchInput = document.querySelector(".inputSearch")



const getPhotos = async () => {
    try{
        const rawData = await fetch (`https://api.pexels.com/v1/search?query=${searchInput.value}`,{
            headers: {
                "Authorization": apiKey
            }
        })

        const data = await rawData.json()

        return data
            
    } catch(error){
        console.log(error)
    }
}

const generateCard = (photo) =>{
    const colCol4 = document.createElement("div")
    colCol4.classList.add("col")
    colCol4.classList.add("col-12")
    colCol4.classList.add("col-sm-6")
    colCol4.classList.add("col-md-4")

    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")
    //cardContainer.classList.add("card")

    const img = document.createElement("img")
    img.src=photo.src.original
    img.classList.add("card-img-top")

    const artist = document.createElement("h3")
    artist.innerText= photo.photographer

    const cards = document.querySelector(".cards")
    cardContainer.append(img,artist)
    cards.appendChild(colCol4)
    colCol4.appendChild(cardContainer)
}

searchBtn.addEventListener("click", async () => {
    const cards = document.querySelector(".cards")
    cards.innerHTML=""
    const data = await getPhotos()
    console.log(data)
    data.photos.forEach(photo => {
        generateCard(photo)
    });
})
