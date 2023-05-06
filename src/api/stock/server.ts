import express from "express";
import { orderRouter } from "./src/routes/routes";

const app = express();
const port = 8082;

app.use(express.json());
app.use("/orders", orderRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
