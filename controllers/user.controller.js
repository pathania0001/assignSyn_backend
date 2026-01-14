const axios = require("axios");
const store = require("../data/user.data");
const { JSONPLACEHOLDER_BASE } = require("../configs");

exports.getUsers = async (_, res) => {
  try {
    const { data } = await axios.get(JSONPLACEHOLDER_BASE);
    res.json([...data, ...store]);
  } catch {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

exports.createUser = async (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  store.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
  const index = store.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    store[index] = { ...store[index], ...req.body };
    return res.json(store[index]);
  }
  await axios.put(`${JSONPLACEHOLDER_BASE}/${req.params.id}`, req.body);
  res.json(req.body);
};

exports.deleteUser = async (req, res) => {
  const index = store.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    store.splice(index, 1);
    return res.json({ success: true });
  }
  await axios.delete(`${JSONPLACEHOLDER_BASE}/${req.params.id}`);
  res.json({ success: true });
};
