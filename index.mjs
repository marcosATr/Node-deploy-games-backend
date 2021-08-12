import express from "express";
import routes from "./src/routes/crmRoutes.mjs";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());
dotenv.config();
process.env.USERDB;
process.env.PASSWORDDB;
process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose connection
// const dbuser = "gmc_ATr";
// const password = "audrNxsz81ch5ylG";
const uri = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@cluster0.vdtwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyparser coonnection

routes(app);

app.get("/", (req, res) => {
  res.send("running");
});

app.listen(process.env.PORT || 3000);
