const Task = require("../models/Task");
const User = require("../models/User");


//Create a new Todo
async function createTodo(req, res) {
  const { name, description, status } = req.body;
  const username = req.user;// Get the authenticated user username from the token
  try {
    // Create a new Todo
    const user = await User.findOne({ username });
    const task = new Task({ name, description, status, user });
    await task.save()

    res.status(201).json({ message: 'Task created successfully' });
  } catch (err) {
    res.status(500).json({ message: `Error creating task ${err}` });
  }
};

// Get all Todos
async function getTodos(req, res) {
  const username = req.user;
  try {
    const user = await User.findOne({ username });
    const task = await Task.find({ user });
    if (!task) {
      return res.status(401).json({ message: 'Task Not Found' });
    }
    return res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ message: `Error creating task ${err}` });
  }
}

// Get Todo By ID
async function gettodosByID(req, res) {
  const { todoId } = req.params;
  try {
    const tasks = await Task.find({ _id: todoId });
    if (!tasks) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(201).json(tasks);
  } catch (err) {
    res.status(500).json({ message: `Error finding task ${err}` });
  }
}

// update Todo
async function updateTodo(req, res) {
  const { todoId } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: todoId }, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.staus(201).json({ message: 'Task updated successfully' });
  } catch (err) {
    res.status(500).json({ message: `Error updating task: ${err}` });
  }
}

// delete Todo
async function deleteTodo(req, res) {
  const { todoId } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: todoId });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.staus(201).json({ message: 'Task Delete successfully' });
  } catch (err) {
    res.status(500).json({ message: `Error updating task ${err}` });
  }
}

module.exports = { createTodo, getTodos, gettodosByID, updateTodo, deleteTodo };