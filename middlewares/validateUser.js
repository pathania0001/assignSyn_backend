module.exports = (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || name.length < 3)
    return res.status(400).json({ message: "Name must be at least 3 characters" });

  if (!email || !/^\S+@\S+\.\S+$/.test(email))
    return res.status(400).json({ message: "Invalid email format" });

  if (!phone || phone.length < 8)
    return res.status(400).json({ message: "Invalid phone number" });

  next();
};
