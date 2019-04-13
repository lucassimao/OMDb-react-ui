const baseUrl = "http://www.omdbapi.com/?apikey=77b287be";

class OmdbApi {
  search(keyword, type = "", year = "") {
    return fetch(`${baseUrl}&s=${keyword}&type=${type}&y=${year}`).then(
      response => response.json()
    );
  }
}

export default OmdbApi;
