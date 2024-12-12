import express from "express";
import connectToDB  from "./database/db.js";
import { Livro } from "./models/livro.model.js";
import { Usuario } from "./models/usuario.model.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
connectToDB();

app.get("/", async (req, res) => {
    res.send({
        success: true,
        data: "rodando"
    });
});

// Usuario 

app.get("/usuario", async (req, res) => {
    try{
        const result = await Usuario.find();
        res.send({
            success: true,
            data: result
        }
        );
    }catch (error){
        res.send({
            success: false
        });
    }
});

app.get("/usuario/:usuarioId", async (req, res) => {
    const usuarioId = req.params.usuarioId;
    try{
        const result = await Usuario.findById(usuarioId);
        res.send({
            success: true,
            data: result
        });
    }catch(error){
        res.send({
            success: false
        });
    }
});

app.post("/usuario", async (req, res) => {
    const usuarioDetails = req.body;

    try{
        const result = await Usuario.create(usuarioDetails);
        res.send({
            success: true,
            data: result
        });
    }catch(error){
        res.send({
            success: false
        });
    }
});

app.put("/usuario/:usuarioId", async (req, res) => {
    
    const usuarioId = req.params.usuarioId;
    const usuarioUpdate = req.body;

    try {
        const result = await Usuario.findByIdAndUpdate(usuarioId, usuarioUpdate, {new:true});
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        }); 
    }
});

app.delete("/usuario/:usuarioId", async (req, res) => {
    
    const usuarioId = req.params.usuarioId;

    try {
        const result = await Usuario.findByIdAndDelete(usuarioId);
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        }); 
    }
});


// Livro 

app.get("/livro", async (req, res) => {
    try{
        const result = await Livro.find();
        res.send({
            success: true,
            data: result
        }
        );
    }catch (error){
        res.send({
            success: false
        });
    }
});

app.get("/livro/categoria/:categoria", async (req, res) => {
    const categoriaFind = req.params.categoria;

    if (!categoriaFind) {
        return res.status(400).send({
            success: false,
            error: "Categoria inválida."
        });
    }

    try {
        const result = await Livro.find({ categoria: categoriaFind });

        if (result.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Nenhum livro encontrado para esta categoria."
            });
        }

        res.status(200).send({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
});

app.get("/livro/:livroId", async (req, res) => {
    const livroId = req.params.livroId;
    try{
        const result = await Livro.findById(livroId);
        res.send({
            success: true,
            data: result
        });
    }catch(error){
        res.send({
            success: false
        });
    }
});

app.post("/livro", async (req, res) => {
    const livroDetails = req.body;

    try{
        const result = Livro.create(livroDetails);
        res.send({
            success: true,
            data: result
        });
    }catch(error){
        res.send({
            success: false
        });
    }
});

app.put("/livro/:livroId", async (req, res) => {
    
    const livroId = req.params.livroId;
    const livroUpdate = req.body;

    try {
        const result = await Livro.findByIdAndUpdate(livroId, livroUpdate, {new:true});
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        }); 
    }
});

app.delete("/livro/:livroId", async (req, res) => {
    
    const livroId = req.params.livroId;

    try {
        const result = await Livro.findByIdAndDelete(livroId);
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        }); 
    }
});

app.listen(4000, () => {
    console.log("serve rodando");
});