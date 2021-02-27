const Task = require("../models/task.model");

class TaskController {
  async addTask(req, res) {
    const { text } = req.body;
    const task = await Task.create({ text });
    return res.json(task);
  }

  async removeTask(req, res) {
    const { id } = req.body;
    await Task.destroy({
      where: {
        id: `${id}`,
      },
    });
    res.send(`okay task destroy ${id}`);
  }

  async changeStatus(req, res) {
    const { id } = req.body;
    await Task.update(
      { status: true },
      {
        where: {
          id: `${id}`,
          status: false,
        },
      }
    );
    res.send("okay");
  }

  async getAll(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
  }
}

module.exports = new TaskController();
