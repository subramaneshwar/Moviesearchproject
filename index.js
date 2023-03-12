console.log("hi")
const input = document.getElementById('selectinput')
let value = input.value
const movies = document.getElementById('movies')
const series = document.getElementById('series ')
const cards = document.getElementById('cards')
function dropdown() {
    let value = input.value
    if (movies.checked == true && value == 'day') {
        movies.addEventListener('change', movieSearch(value, "movie"))
    }
    else if (movies.checked == true && value == 'week') {
        movies.addEventListener('change', movieSearch(value, "movie"))
    }
    else if (series.checked == true && value == 'day') {
        movies.addEventListener('change', series(value, "tv"))
    }
    else if (series.checked == true && value == 'week') {
        movies.addEventListener('change', series(value, "tv"))
    }
}
// dropdown()


var typ = ""
async function movieSearch(value, type) {
    typ=type
    console.log(type,"type")
    console.log(value, type, "ksssssss")
    const response = await fetch(`https://api.themoviedb.org/3/trending/${type}/${value}?api_key=d88c1ee36d555b37748bc16257e7d400`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    cards.innerHTML = ""
    data.results.map((ele) => {
        cards.innerHTML += `
        <a onclick="moviedeatils(${ele.id})" href="./card.html">
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />
        <div class="imgcontent">
        <h3>${ele.title ? ele.title : ele.original_name}</h3>
        <small id="moviegenre">Drama | Entertainment</small>
        ${ele.release_date ? `<p>${ele.release_date.slice(0, 4)}</p>` : ` <p>${ele.first_air_date.slice(0, 4)}</p>`}
        </div>
        <div class="votes">
        ${(ele.vote_average * 10).toFixed(1)}%
        </div>
    </div>
    </a>`
    })

}

radiomovie()
function radiomovie() {
    movieSearch(value, "movie")
    // console.log("movies")


}
function radioseries() {
    movieSearch(value, "tv")
    // console.log("tv")
}

function moviedeatils(id) {
    localStorage.setItem(typ, id)
}
