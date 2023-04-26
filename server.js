import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Routes from "./routes/Routes.js";
import Connection from "./database/db.js";
import fs from "fs";
import Data from "./schema/schema.js";
// import { importData } from "./utils/importData.js";
const port = 8000;
const app = Express();

dotenv.config();

app.use(Express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const data = JSON.parse(fs.readFileSync("./sample_data.json", "utf-8"));

// console.log(data);

const importData = async () => {
  try {
    await Data.insertMany(data, { ordered: false });
    console.log("data successfully imported");
    // to exit the process
    process.exit();
  } catch (error) {
    console.log("error");
  }
};

Connection(process.env.MONGOURL).then((res) => {
  console.log(res);
  if (res === "success") {
    app.listen(port || process.env.PORT, () =>
      console.log(`Server is running on PORT ${port}`)
    );
  }
});
importData();
// app.listen(port || process.env.PORT, () =>
//   console.log(`Server is running on PORT ${port}`)
// );
