//make an event listener.. it will treigger witht he DOM is loaded(aka upon visitng webpage)
addEventListener("DOMContentLoaded", async function () {
    const response = await this.fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        const songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> </li>`
    }

    this.document.querySelector("#list_of_songs").innerHTML = html
})