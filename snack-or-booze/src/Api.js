import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {
  /** Perform a request against the json-server API. */
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_API_URL}/${endpoint}`;
    const config = {
      url,
      method,
      data: method === "get" ? undefined : data,
      params: method === "get" ? data : undefined,
    };

    const result = await axios(config);
    return result.data;
  }

  static async getSnacks() {
    return await this.request("snacks");
  }

  static async getDrinks() {
    return await this.request("drinks");
  }

  static async createItem(type, payload) {
    if (!["snacks", "drinks"].includes(type)) {
      throw new Error(`Unsupported item type: ${type}`);
    }
    return await this.request(type, payload, "post");
  }
}

export default SnackOrBoozeApi;
