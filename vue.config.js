module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://localhost:8888",
        "ws": true,
        "changeOrigin": true
      }
    }
  }
}