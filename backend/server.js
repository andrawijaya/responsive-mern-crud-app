const app = require("./app");
const env = require("dotenv");
const connectDatabase = require("./config/database");

//config env
env.config({ path: "config/config.env" });

// connect database
connectDatabase();

// connect server
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});
