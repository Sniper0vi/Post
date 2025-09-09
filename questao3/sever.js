const { error } = require('console');
const express =require('express');
const sever = express();
const PORT = 8081;

sever.use(express.json());

sever.post('/usuarios', (req, res)=> {
    try {
        const{usuarios:{nome, senha, email}} =req.body;
        console.log(nome,senha,email);
        res.status(201).json({message: `Usuario criado com sucesso`});
        console.erro(`Erro`, error);
        res.status(500).json({errorMessage: TextEncoderStream});
    } catch (error) {
        
    }
})
sever.listen(PORT, ()=>{
    console.log(`Servidor aberto na porta ${PORT}`);

})