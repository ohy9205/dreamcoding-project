import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get(`/videos/search_${params.q}.json`);
  }
  async videos() {
    return axios.get(`/videos/popular.json`);
  }
  async channels() {
    return axios.get("/videos/channels.json");
  }
}
