const route = require("express").Router();
const uploadImage = require("../middlewares/uploadImage");
const upload = require("../middlewares/upload");
const {auth} = require("../middlewares/auth");
const {uploadController} = require("../controllers/uploadController");

route.post("/api/upload", uploadImage,upload,auth,uploadController.uploadAvar);

module.exports = route;