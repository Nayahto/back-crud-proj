const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/Routes/ElRoutes');

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () =>
    console.log(`servidor rodando em http://localhost:${port}`),
);
