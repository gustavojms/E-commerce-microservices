import express from "express";
import { productRouter } from "./src/routes/routes";

const app = express();
const port = 8081;

app.use(express.json());
app.use("/product", productRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
