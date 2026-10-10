import { onRequestPost, onRequest } from "../functions/api/contact.js";

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact") {
      return request.method === "POST" ? onRequestPost({ request, env }) : onRequest();
    }
    return env.ASSETS.fetch(request);
  },
};
