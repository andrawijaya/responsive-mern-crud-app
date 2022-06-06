const app = require("./app");

const connectDatabase = require("./config/database");

//config env
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

// connect database
connectDatabase();

// connect server
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});
