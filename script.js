const movies = [
    {
        title: "Inception",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        details: {
            director: "Christopher Nolan",
            releaseDate: "2010",
            genre: "Sci-Fi, Thriller",
            runtime: "148 min",
            plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
        }
    },
    {
        title: "Interstellar",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        details: {
            director: "Christopher Nolan",
            releaseDate: "2014",
            genre: "Sci-Fi, Drama",
            runtime: "169 min",
            plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        }
    },
    {
        title: "The Dark Knight",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        details: {
            director: "Christopher Nolan",
            releaseDate: "2008",
            genre: "Action, Crime, Drama",
            runtime: "152 min",
            plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
        }
    },
    {
        title: "The Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        details: {
            director: "Lana Wachowski, Lilly Wachowski",
            releaseDate: "1999",
            genre: "Action, Sci-Fi",
            runtime: "136 min",
            plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        }
    },
    {
        title: "Avatar",
        poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        details: {
            director: "James Cameron",
            releaseDate: "2009",
            genre: "Action, Adventure, Fantasy",
            runtime: "162 min",
            plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
        }
    }
  ];
  

const movieList = document.getElementById('movie-list');
const searchInput = document.getElementById('search');
const modal = document.getElementById('movie-modal');
const modalContent = document.getElementById('modal-details');
const closeModal = document.getElementsByClassName('close')[0];

function displayMovies(movieArray) {
  movieList.innerHTML = '';
  movieArray.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
      `;
      movieCard.addEventListener('click', () => {
          openModal(movie);
      });
      movieList.appendChild(movieCard);
  });
}

function openModal(movie) {
  modal.style.display = 'flex';
  modalContent.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="${movie.poster}" alt="${movie.title}">
      <p><strong>Director:</strong> ${movie.details.director}</p>
      <p><strong>Release Date:</strong> ${movie.details.releaseDate}</p>
      <p><strong>Genre:</strong> ${movie.details.genre}</p>
      <p><strong>Runtime:</strong> ${movie.details.runtime}</p>
      <p><strong>Plot:</strong> ${movie.details.plot}</p>
  `;
}

closeModal.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}

searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchValue));
  displayMovies(filteredMovies);
});

displayMovies(movies);
