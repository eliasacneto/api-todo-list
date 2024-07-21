let tasks = [];

const getTasks = (req, res) => {
    res.status(200).send(tasks);
};

const getOneTask = (req, res) => {
    const id = req.params.id;
    const task = tasks.find((item) => item.id === Number(id));

    if (task) {
        res.status(200).send(task);
    } else {
        res.status(404).send('Tarefa não encontrada!');
    }
};

const createOneTask = (req, res) => {
    const task = req.body;
    if (Object.keys(task).length > 0) {
        task.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        tasks.push(task);
        res.status(201).send(task);
    } else {
        res.status(406).send('Ops, não foi possível adicionar essa tarefa!');
    }
};

const updateOneTask = (req, res) => {
    const id = req.params.id;
    const index = findTaskIndex(id);

    if (index === -1) {
        return res.status(404).send('Tarefa não encontrada!');
    }

    tasks[index] = {
        ...tasks[index],
        ...req.body
    };
    res.status(200).send('Tarefa atualizada com sucesso!');
};

const deleteOneTask = (req, res) => {
    const id = req.params.id;
    const index = findTaskIndex(id);

    if (index === -1) {
        return res.status(404).send('Não foi possível excluir: ID não encontrado');
    }
    tasks.splice(index, 1);
    res.status(200).send('Tarefa removida com sucesso!');
};

const findTaskIndex = (id) => {
    return tasks.findIndex((item) => item.id === Number(id));
};

module.exports = { getTasks, getOneTask, createOneTask, updateOneTask, deleteOneTask };
