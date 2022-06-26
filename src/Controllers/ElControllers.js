const Elserv = require('../Services/ElServices');

const padrao = (req, res) => {
    res.send('hello world');
};
/*pegartodos/getall*/
const getAll = (req, res) => {
    const rotaPadrao = Elserv.servAll();
    res.send(rotaPadrao);
};

/* pegarPorId/getById*/
const getById = (req, res) => {
    const id1 = req.params.id;
    const idServ = Elserv.servById(id1);
    res.send(idServ);
};
const create = (req, res) => {
    const palebody = req.body;
    const newPale = Elserv.servNew(palebody);
    res.send(newPale);
};
const update = (req, res) => {
    const id2 = req.params.id;
    const param = req.body;
    const updatePale = Elserv.servUp(id2, param);
    res.send(updatePale);
};
const apagar = (req, res) => {
    const id3 = req.params.id;
    Elserv.servDel(id3);
    res.send({ message: 'paleta deletada com sucesso' });
};
module.exports = {
    getById,
    getAll,
    padrao,
    create,
    update,
    apagar,
};
