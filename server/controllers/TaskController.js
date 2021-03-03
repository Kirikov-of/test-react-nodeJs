const Task = require("../models/task.model");

class TaskController {
  async addTask(req, res) {
    const { text } = req.body;
    const userId = req.params.id;
    const task = await Task.create({ text, userId: userId }).catch(
      (e) => new Error(e)
    );
    return res.json(task);
  }

  async removeTask(req, res) {
    const { id } = req.body;
    await Task.destroy({
      where: {
        id: `${id}`,
      },
    }).catch((e) => new Error(e));
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
    ).catch((e) => alert(e));
    res.send("okay");
  }

  async getAll(req, res) {
    const id = req.params.id;
    const tasks = await Task.findAll({ where: { userId: id } }).catch((e) =>
      console.log(e)
    );

    return res.json(tasks);
  }
}

module.exports = new TaskController();
