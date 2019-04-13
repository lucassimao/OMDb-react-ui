const baseUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=77b287be";

class OmdbApi {
  moviesByYear(year) {
    return fetch(`${baseUrl}&y=${year}`).then(response => response.json());
  }
}

export default OmdbApi;
