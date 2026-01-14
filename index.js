const app = require("./app");
const { PORT } = require("./configs");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
