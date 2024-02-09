const movieBox = document.querySelector(".grid");

console.log(movies[2]);

// const genre = movies[4].map((genreItem) => {
//   return genreItem;
// });

let movieFiltered = movies;

const neuerName = movies.map((list) => {
  movieBox.innerHTML += `<div> <h3>${list[0]}</h3>
    <p>${list[1]}</p>
    <h4>${list[2]}</h4>
    <p>${list[3]}</p>
    <p class">${list[4].join("<br>")}</p>
    <p>${list[5]}</p>`;
  //   movieBox.innerHTML += newList;
});

const allMovies = (array) => {
  movieBox.innerHTML = "";
  array.map((list) => {
    let newList = `<div> <h3>${list[0]}</h3>
    <p>${list[1]}</p>
    <h4>${list[2]}</h4>
    <p>${list[3]}</p>
    <p class">${list[4].join("<br>")}</p>
    <p>${list[5]}</p>`;
    movieBox.innerHTML += newList;
  });
};



function movieSearch() {
  const searchInput = document.querySelector("#search").value.toLowerCase();
  console.log(searchInput);

  movieFiltered = movies.filter((singleMovie) => {
    return (
      singleMovie[0].toLowerCase().includes(searchInput.toLowerCase()) ||
      singleMovie[1] === searchInput ||
      singleMovie[2].toLowerCase().includes(searchInput.toLowerCase()) ||
      singleMovie[3].toLowerCase().includes(searchInput.toLowerCase()) ||
      singleMovie[4].join().toLowerCase().includes(searchInput.toLowerCase()) ||
      singleMovie[5] === searchInput
      
    );
  });
  console.log(movieFiltered);
  allMovies(movieFiltered);
}

function yearUp() {
  movieFiltered.sort(function (a, b) {
    return a[1] - b[1];
  });
  allMovies(movieFiltered);
  document.querySelector(".bar_selector").style.transform = "translateX(-324%)";
  document.querySelector(".first_filter").style.color = "white";
  document.querySelector(".second_filter").style.color = "#c0c0c0";
  document.querySelector(".third_filter").style.color = "#c0c0c0";
}

function yearDown() {
  movieFiltered.sort(function (a, b) {
    return b[1] - a[1];
  });
  allMovies(movieFiltered);
  document.querySelector(".bar_selector").style.backgroundColor =
    "--main-color";
  document.querySelector(".bar_selector").style.transform = "translateX(-162%)";
  document.querySelector(".first_filter").style.color = "#c0c0c0";
  document.querySelector(".second_filter").style.color = "white";
  document.querySelector(".third_filter").style.color = "#c0c0c0";
}

function bestRating() {
  movieFiltered.sort(function (a, b) {
    return b[5] - a[5];
  });
  allMovies(movieFiltered);
  document.querySelector(".bar_selector").style.transform = "translateX(0%)";
  document.querySelector(".first_filter").style.color = "#c0c0c0";
  document.querySelector(".second_filter").style.color = "#c0c0c0";
  document.querySelector(".third_filter").style.color = "white";
}
