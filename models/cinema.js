const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map( (film) => {
    return film.title
  });
  return result;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const result = this.films.find((film) => {
    return title === film.title;
  });
  return result
};

Cinema.prototype.filterFilmsByGenre = function (genre) {
  const result = this.films.filter( (film) => {
    return genre === film.genre;
  });
  return result
};

Cinema.prototype.checkIfFilmsFrom = function (year) {
  const result = this.films.some( (film) => {
      return year === film.year;
  });
  return result
};

Cinema.prototype.checkAllFilmsOver = function (length) {
  const result = this.films.some( (film) => {
    return film.length > length;
  });
  return result
};

Cinema.prototype.calculateTotalRunTime = function () {
  const lengths = this.films.map( (film) => {
    return film.length
  });
  const result = lengths.reduce( (runningTotal, length) => {
    return runningTotal + length;
  });
  return result;
};


module.exports = Cinema;
