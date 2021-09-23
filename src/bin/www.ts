import app from "../app";

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running in ${NODE_ENV} environment at port ${PORT}`);
});
