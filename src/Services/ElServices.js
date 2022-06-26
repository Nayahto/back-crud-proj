const paletas = [
    {
        id: 1,
        sabor: 'capuccino ',
        valor: 7,
        descricao:
            'paleta cremosa sabor capuccino, perfeita para lembrar daquele cafe da manha incrivel',
    },
    {
        id: 2,
        sabor: 'castanha ',
        valor: 7,
        descricao: 'paleta sabor castanha com gostinho do norte e nordeste',
    },
    {
        id: 3,
        sabor: 'coco ',
        valor: 5,
        descricao:
            'paleta sabor coco com sencacao tropical, o tipico sabor brasileiro',
    },
];

const servAll = () => {
    return paletas;
};

const servById = id => {
    return paletas.find(paleta => paleta.id == id);
};

const servNew = paleta => {
    const newId = paletas.length + 1;
    paleta.id = newId;
    paletas.push(paleta);
    return paleta;
};

const servUp = (id, param) => {
    param['id'] = id;
    const paleindex = paletas.findIndex(paleta => paleta.id == id);
    paletas[paleindex] = param;
    return param;
};

const servDel = id => {
    const delId = paletas.findIndex(paleta => paleta.id == id);
    return paletas.splice(delId, 1);
};

module.exports = {
    servAll,
    servById,
    servNew,
    servUp,
    servDel,
};
