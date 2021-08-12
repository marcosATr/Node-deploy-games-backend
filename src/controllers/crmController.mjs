import mongoose from "mongoose";
import { GameSchema } from "../models/crmModel.mjs";

const Game = mongoose.model("Game", GameSchema);

const addNew = async (req, res) => {
  const record = req.body;
  console.log(record);
  const response = await Game.create(record);
};

const listAll = async (req, res) => {
  await Game.find({}, (err, game) => {
    if (err) {
      res.send(err);
    } else {
      res.json(game);
    }
  });
};

const listSingle = async (req, res) => {
  await Game.findById(req.params.gameID, (err, game) => {
    if (err) {
      res.send(err);
    } else {
      res.json(game);
    }
  });
};

const updateSingle = async (req, res) => {
  await Game.findByIdAndUpdate(
    { _id: req.params.gameID },
    req.body,
    { new: true },
    (err, game) => {
      if (err) {
        res.send(err);
      } else {
        res.json(game);
      }
    }
  );
};

const deleteSingle = async (req, res) => {
  await Game.findByIdAndRemove(
    { _id: req.params.gameID },
    (err, game) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "deleted game" });
      }
    }
  );
};

export { addNew, listAll, listSingle, updateSingle, deleteSingle };
