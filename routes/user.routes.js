const router = require("express").Router();
const controller = require("../controllers/user.controller");
const validate = require("../middlewares/validateUser");

router.get("/", controller.getUsers);
router.post("/", validate, controller.createUser);
router.put("/:id", validate, controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
