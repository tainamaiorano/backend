import mongoose, { mongo } from "mongoose";

const connectToDB = async () => {
    await mongoose.connect("mongodb+srv://userlib:userlibpass@library.d69ny.mongodb.net/livraria?retryWrites=true&w=majority&appName=library").then((res) => {
        console.log("mongo conectado");
    });
};

export default connectToDB;