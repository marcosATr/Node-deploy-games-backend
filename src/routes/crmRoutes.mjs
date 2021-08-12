//import mongoose from "mongoose";

import {
  addNew,
  listAll,
  listSingle,
  updateSingle,
  deleteSingle,
} from "../controllers/crmController.mjs";

const routes = (app) => {
  app.route("/").get((req, res) => {
    console.log(`Request from ${req.originalUrl}`);
    console.log(`Request Method ${req.method}`);
  }, listAll);

  app.route("/cadastrar").post(addNew);

  app
    .route("/:gameID")
    .get(listSingle)
    

  app
  .route("/:gameID/edit")
  .put(updateSingle)
  .delete(deleteSingle);
};

export default routes;
