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
/*create/criar*/
const create = (req, res) => {
    const palebody = req.body;
    const newPale = Elserv.servNew(palebody);
    res.send(newPale);
};

/*atualizar/update*/
const update = (req, res) => {
    const id2 = req.params.id;
    const param = req.body;
    const updatePale = Elserv.servUp(id2, param);
    res.send(updatePale);
};
/*apagar/delete*/
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
