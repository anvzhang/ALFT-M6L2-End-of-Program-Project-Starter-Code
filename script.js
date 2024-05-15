class Movie {
  name;
  reviews;
  img;
  borderColor;

  constructor(name, reviews, img, borderColor) {
    this.name = name;
    this.reviews = reviews;
    this.img = img;
    this.borderColor = borderColor;
  }
}

let movies = [
  new Movie("Black Panther", ["review a", "review b"], "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UY1200_CR90,0,630,1200_AL_.jpg", "blue"),
  new Movie("A Wrinkle in Time", ["review c"], "https://cdn.collider.com/wp-content/uploads/2017/11/a-wrinkle-in-time-poster.jpg", "red"),
  new Movie("Avengers", ["review d", "review e"], "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg", "red"),
];
let moviesDiv = document.querySelector(".movies");
let reviewsDiv = document.querySelector(".movieReviews");
let movieElements = [];
let calcButton = document.querySelector(".calculateTotal");
let numberChild = document.querySelector(".numberChild");
let numberAdult = document.querySelector(".numberAdult");
let totalCostElement = document.querySelector(".totalCost");
let buyElement = document.querySelector(".buy");
let ticketSelection = document.querySelector(".ticketSelection");
let checkout = document.querySelector(".checkout");
let buyButton = document.querySelector(".buy");

movies.forEach(movie => {
  let movieElement = document.createElement("img");
  movieElement.classList.add("movie");
  movieElement.src = movie.img;
  
  movieElement.addEventListener("click", () => {
    displayMovieReviews(movie)
    movieElements.forEach(otherMovie => otherMovie.style.removeProperty("border"));
    movieElement.style.border = `3px ${movie.borderColor} solid`;
    ticketSelection.style.display = "block";
    checkout.style.display = "block";
  });

  moviesDiv.appendChild(movieElement);
  movieElements.push(movieElement);
})

function displayMovieReviews(movie) {
  reviewsDiv.innerHTML = "";
  movie.reviews.forEach(review => {
    let pElement = document.createElement("p");
    let pText = document.createTextNode(review);
    pElement.appendChild(pText);
    reviewsDiv.appendChild(pElement);
  });
}

calcButton.addEventListener("click", function() {
  let child = numberChild.value * 8;
  let adult = numberAdult.value * 12;
  let total = child + adult;
  let pElement = document.createElement("p");

  if (child < 0 || adult < 0) {
    pElement.appendChild(document.createTextNode("You cannot select a negative number"));
    buyElement.style.display = "none";
  } else if (child === 0 && adult === 0) {
    pElement.appendChild(document.createTextNode("You did not select any tickets"));
    buyElement.style.display = "none";
  } else {
    pElement.appendChild(document.createTextNode(`Your total is $${total}`));
    buyElement.style.display = "inline-block";
  }
  totalCostElement.innerHTML = ""
  totalCostElement.appendChild(pElement);
})

buyButton.addEventListener("click", () => location.reload());