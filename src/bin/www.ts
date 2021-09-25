import app from "../app";

let NODE_ENV = process.env.NODE_ENV;
let PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running in ${NODE_ENV} environment at port ${PORT}`);
});
