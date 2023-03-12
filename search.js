const input = document.getElementById("inputsearch")
const cards = document.getElementById("cards")
const searchselect = document.getElementById("searchselect")
let selectvalue = searchselect.value
const moviedropdown = document.getElementById("movie")
const seriesdropdown = document.getElementById("tv")
function change(){
    selectvalue=searchselect.value
    find(selectvalue)
}
function movies() {
    console.log("click", selectvalue)
    find(selectvalue)
    
}
var type =""
async function find(selectvalue){
    type = selectvalue
    cards.innerHTML = ""
    let inputvalue = input.value
    const res = await fetch(`https://api.themoviedb.org/3/search/${selectvalue}?api_key=d88c1ee36d555b37748bc16257e7d400&query=${inputvalue}`)
    console.log(res)
    const data = await res.json()
    console.log(data.results);
    data.results.map((ele) => {
        cards.innerHTML += ` 
        <a onclick="moviedeatils(${ele.id},${selectvalue})" href="./card.html">
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />
        <div class="imgcontent">
        <h3>${ele.title?ele.title:ele.original_name}</h3>
        <small>drama</small>
        <p>${ele.release_date?ele.release_date.slice(0, 4):ele.first_air_date.slice(0, 4)}</p>
        </div>
        <div class="votes">
        ${(ele.vote_average * 10).toFixed(1)}%
        </div>
        
    </div>
    </a>`
    })
}

function moviedeatils(id) {
    localStorage.setItem(type, id)
}