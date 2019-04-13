const baseUrl = "http://www.omdbapi.com/?apikey=77b287be";

class OmdbApi {
  search(keyword, type = "", year = "", page = 1) {
    return fetch(
      `${baseUrl}&s=${keyword}&type=${type}&y=${year}&page=${page}`
    ).then(response => response.json());
  }
}

export default OmdbApi;
