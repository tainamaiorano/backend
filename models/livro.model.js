import mongoose, { model, Schema } from "mongoose";

const livroSchema = new Schema({
    nome: {type: String, required: true},
    imagem: {type: String, required: true},
    descricao: {type: String, required: true},
    categoria: {type: String, required: true},
    status: {type: String, required: true},
    alugadoPor: {type: String, required: false}
});

export const Livro = mongoose.models.Livro || new model("Livro", livroSchema)

