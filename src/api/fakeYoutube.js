import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search_${keyword}.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
