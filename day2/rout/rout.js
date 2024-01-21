const router = require("express").Router();

router.post("/create",createBlogs);
router.get("/get",getBlogs);
router.get("/get:id",getBlogsById);
router.delete("delete:id",deleteBlogsId);
router.update("/update:id",UpdateBlogs);
module.exports
