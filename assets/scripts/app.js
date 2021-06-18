
document.addEventListener('DOMContentLoaded', ()=>{
    init();
    
})

function init(){
const addMovie = document.getElementById('add-modal');
const addMovieBtn = document.querySelector("header button");
const add = document.querySelector('#add-modal .btn--success');
const cancelBtn = document.querySelector(" #add-modal .btn--passive");
const backdrop = document.getElementById('backdrop');
const entryText = document.getElementById('entry-text');
const movieUL = document.getElementById('movie-list');

const movieList = [];

addMovieBtn.addEventListener("click", () =>  {
    addMovie.classList.add('visible');
    backdrop.classList.toggle('visible');
});

cancelBtn.addEventListener("click", cancel); 
backdrop.addEventListener("click", backdropClick);
  
function cancel(){
    addMovie.classList.remove('visible');
    backdrop.classList.remove('visible'); 
    clear(); 
}

 function  backdropClick() {
    addMovie.classList.remove('visible');
    backdrop.classList.remove('visible'); 
}

function clear() {
    document.getElementById('title').value = '';
    document.getElementById('image-url').value = '';
    document.getElementById('rating').value ='';
}

function removeSection(){
    if (movieList.length === 0){
        entryText.style.display ='block'
    } else {
        entryText.style.display ='none'
    }
}

const displayMovieList = (movieObj) => {
    const movieLi = document.createElement("li");
    movieLi.className = 'movie-element';
    movieLi.innerHTML = `
    <div class = 'movie-element__image'> 
         <img src="${movieObj.imageURL}" alt=""> 
    </div>
    <div class = 'movie-element__info'>
         <h2>${movieObj.movieTitle}</h2> 
        <p>${movieObj.yourRating}</p>
    </div>
    `;
    movieUL.append(movieLi);
}

add.addEventListener("click", () => {
    const title = document.getElementById('title').value;
    const url = document.getElementById('image-url').value;
    const rating = document.getElementById('rating').valueAsNumber;

    if (title.trim() === '' || url.trim() === '' || isNaN(rating) || rating < 1 || rating > 5){
        alert('Enter valid values');
        return;
    } 
        let movie = {
           movieTitle: title,
            imageURL: url,
            yourRating: rating
        }
        movieList.push(movie);
        cancel();
        removeSection();
        displayMovieList(movie);
})  

}
