const Router = require("express");
const router = new Router();
const TaskController = require("../controllers/TaskController");

router.get("/fetchtask/:id", TaskController.getAll);

router.post("/add/:id", TaskController.addTask);

router.post("/remove/", TaskController.removeTask);

router.post("/complete/", TaskController.changeStatus);

module.exports = router;
