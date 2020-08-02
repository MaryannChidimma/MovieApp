const myMovies = [
  {
    title: "half of a yellow sun",
    author: "Chimamanda", genre: "Comedy", isRented: false
  },
  { title: "water forest", author: "maryann", genre: "Drama", isRented: false },
  { title: "growing fist", author: "JOHN DOE", genre: "Comedy", isRented: false },
  { title: "BABBIES", author: "Chidimma", genre: "Comedy drama", isRented: false }
];
var searchBar = document.getElementById("search_input");
searchBar.addEventListener('input', function (event) {
  // console.log("input", event.target.value );
  if(!event.target.value){
    return showTable(myMovies);
  }
  search(myMovies, event.target.value)

})

function showTable(movieArray) {
  var tbody = document.getElementById("tBody");
  tbody.innerHTML = null;
  for (let i = 0; i < movieArray.length; i++) {
    if (movieArray[i].isRented) {
      continue;
    }
    let tr = document.createElement("tr");
    tr.innerHTML = `<td> ${movieArray[i].title}</td>
  <td>${movieArray[i].author}</td> <td>${movieArray[i].genre}</td><td><button onclick = "rent(${i})">rent</button></td>`;
    tbody.appendChild(tr);
  }
}
showTable(myMovies);

function rent(index) {

  myMovies[index].isRented = true;
  showTable(myMovies);
}

function returnAllRented() {
  for (let i = 0; i < myMovies.length; i++) {
    if (myMovies[i].isRented) {
      myMovies[i].isRented = false;
    }
  }
  showTable(myMovies);
}

function search(movieArray, searchItem) {
  let matchedArray = movieArray.filter(function(movie, index){
    return movie.title.toLowerCase().includes(searchItem.toLowerCase())
    ||movie.author.toLowerCase().includes(searchItem.toLowerCase())
    ||movie.genre.toLowerCase().includes(searchItem.toLowerCase())
  })
  showTable(matchedArray)
}

  //  for(let i=0; i <myMovies.length; i++){
  //  if( input.valueOf('') === myMovies[i].includes ) {
  //   array.push(i);
  //  }
  // }







  //     }

  //    getmyMovies(){
  //     return this.myMovies;
  //      }
  // }
  //    var movies = new Movies();
  //    var moviestore = movies.getmymovie();
  //     createTables();

  // function createTables(){
  // const Tbody = document.querySelector('#tBody');

  //   Tbody.insertAdjacentHTML('beforeend',`
  //   <tr>

  //   <td>${moviestore.tittle}</td>
  //   <td>${moviestore.author}</td>
  //   <td>${moviestore.genre}</td>
  //   <td><button>Rent</button></td>

  //   </tr>
  //   `
  //    )
  // }
















