const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
    dbName: "crud",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () =>
    console.log(`Database terhubung dengan server: ${db.host}`)
  );
};

module.exports = connectDatabase;
