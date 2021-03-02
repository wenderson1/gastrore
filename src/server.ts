import express from 'express';

const app = express();





app.get("/", (request, response) => {
    return response.send("Olá mundo");
});

app.post("/", (request, response) => {
    return response.json({name: "Salvado!"});
});

app.listen(3333, () => console.log("Server is running"));

/***
 * Gastrore é uma api feita em Node onde os usuários poderão cadastrar suas receitas e consultar e interagir com as receitas de outros por Likes/Dislikes ou comentários
 */