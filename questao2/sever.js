const { error } = require('console');
const express =require('express');
const sever = express();
const PORT = 8081;

sever.use(express.json());

sever.post('/usuarios', (req, res)=> {
    try {
        const{numeros:{numUm, numDois, numTres}} =req.body;
        if (!isNaN(numUm,numDois,numTres)){
        console.log(numUm,numDois,numTres);
        let resultado = numUm+numDois+numTres
        res.status(201).json({message: `O resultado é ${resultado}`});
        console.erro(`Erro`, error);
        res.status(500).json({errorMessage: TextEncoderStream});
        }
    } catch (error) {
        console.log("algum numero nao é um numero")
    }
})
sever.listen(PORT, ()=>{
    console.log(`Servidor aberto na porta ${PORT}`);

})