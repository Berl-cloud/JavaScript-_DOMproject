
document.addEventListener('DOMContentLoaded', ()=>{
    init();
    
})

function init(){
const addMovie = document.getElementById('add-modal');
const addMovieBtn = document.querySelector("header button");
const add = document.querySelector('#add-modal .btn--success');
const cancelBtn = document.querySelector(" #add-modal .btn--passive");
const backdrop = document.getElementById('backdrop');
const title = document.getElementById('title').value;
const url = document.getElementById('image-url').value;
const rating = document.getElementById('rating').value;
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

add.addEventListener("click", () => {
    if (title === '' || url === '' || rating < 1 || rating > 5){
        alert('Enter valid values');
    } else {
        let movie = {
           movieTitle: title,
            imageURL: url,
            yourRating: rating
        }
        movieList.push(movie);
        clear();
        console.log(movie)
    } 
     
})  


function clear() {
    document.getElementById('title').value === '';
    document.getElementById('image-url').value === '';
    document.getElementById('rating').value === '';
}
}
