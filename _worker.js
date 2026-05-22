export default {
  async fetch(request, env) {
    // Let the Pages runtime handle static files
    return env.ASSETS.fetch(request);
  }
};
