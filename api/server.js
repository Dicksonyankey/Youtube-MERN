import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to MongoDB Successfully");
	})
	.catch((err) => {
		console.log(err);
	});
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
