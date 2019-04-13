const baseUrl = "http://www.omdbapi.com/?apikey=77b287be";

class OmdbApi {
  moviesByYear(year) {
    return fetch(`${baseUrl}&y=${year}`).then(response => response.json());
  }

  search(keyword) {
    return fetch(`${baseUrl}&s=${keyword}&plot=short`).then(response =>
      response.json()
    );
  }
}

export default OmdbApi;
