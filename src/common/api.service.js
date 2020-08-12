import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  query(resource, params) {
    console.log(resource, params)
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },
  delete(resource, slug, params) {
    return Vue.axios.delete(`${resource}/${slug}`, params);
  },
};



export const UserService = {
  query() {
    return ApiService.query("users");
  },
  delete(id) {
    return ApiService.delete("users", id);
  },
  post(params) {
    return ApiService.post("users", params);
  },
  get(id) {
    return ApiService.get("users", id);
  }
};

export const AlbumService = {
  query(params) {
    return ApiService.query("albums", { params: params });
  }
}


export const PostService = {
  query(params) {
    return ApiService.query("posts", {'params': params});
  }
};



export default ApiService;