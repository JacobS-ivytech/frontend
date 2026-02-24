addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

//add song to the database.. it has to be async function becaue we calling data outside our server

async function addSong() {
    //create a song object bsed on the form that the user fills out. this will make life easier when we send later
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []
    }

    const response = await fetch("http://localhost:3000/api/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })

    if (response.ok) {
        const results = await response.json()
        alert("ADded song with ID of" + results._id)

        //reset form after song is successfully qdded
        document.querySelector("form").reset()
    } else {
        document.querySelector("#error").innerHTML = "Cannot add song"
    }

}