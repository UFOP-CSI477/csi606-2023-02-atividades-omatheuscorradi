import mongoose from "mongoose";

function createConnection() {
  mongoose.connect("mongodb://127.0.0.1:27017/Trabalho");
}

export default createConnection;
