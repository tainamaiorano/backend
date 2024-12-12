import mongoose, { model, Schema } from "mongoose";

const usuarioSchema = new Schema({
    nome: {type: String, required: true},
    login: {type: String, required: true},
    senha: {type: String, required: true},
    ativo: {type: Boolean, default: true}
});

export const Usuario = mongoose.models.Usuario || new model("Usuario", usuarioSchema)

