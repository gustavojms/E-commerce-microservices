import express from "express";
import { userRouter } from "./src/routes/routes";

const app = express();
const port = 8080;

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
