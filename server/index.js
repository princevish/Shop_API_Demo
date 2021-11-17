import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

const getAPIData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    } catch (e) {
        return e
    }
};

const getAPIProduct = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        return await response.json();
    } catch (e) {
        return e
    }
};

app.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    let startIndex = (id - 1) * 6;
    let endIndex = id * 6;
    const apidata = await getAPIData();
    if (apidata) {
        const data = apidata.slice(startIndex, endIndex);
        res.status(200).json({
            data,
            datalength: apidata.length
        });
    } else {
        res.status(404).json({
            message: "data not found"
        });
    }

});

app.get('/product/:id', async (req, res) => {
    const data = await getAPIProduct(req.params.id);
    if (data) {
        res.status(200).json({
            data
        });
    } else {
        res.status(404).json({
            message: "data not found"
        });
    }
});

app.get('*', (req, res) => {
    res.status(404).json({
        message: "url not found"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});