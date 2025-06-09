import express from 'express';

const fatorial = (num) => {
    let res = 1;
    for (let i = 1; i <= num; i++){
        res *= i;
    };
    return res;
};

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/buscar-resultado', (req, res) => {
    const { numero } = req.body;

    const resu = fatorial(numero);
    res.json({resultado : resu});
});

app.listen(7777, () => {
    console.log('logado a porta 7777...');
});

