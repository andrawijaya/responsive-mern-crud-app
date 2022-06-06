const express = require("express");
const {
  deleteUser,
  getUserById,
  getUsers,
  saveUser,
  updateUser,
} = require("../controllers/UserController");

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
