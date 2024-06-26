
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const portfolio = require('../controllers/portfolio_controller');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// get list of data
router.get('/project/list', async (req, res, next) => {
    const data = await portfolio.getDataProject();
    res.send(data);
    next();
});
// add a project
router.post('/project/add', async (req, res, next) => {

    const data = await portfolio.addProject(req.body);
    if (data) {
        res.send(data).status(200);
    } else {
        res.send("no data in body").status(405);
    }

    next();
});
router.put('/project/update/:id', async (req, res, next) => {
    if (req.body) {
        const data = await portfolio.updateProject(req.params.id, req.body);
        res.send(data).status(200);
    } else {
        res.send("no data in body").status(405);
    }
    next();
});

router.delete('/project/delete/:id', async (req, res, next) => {
    const data = await portfolio.deleteProject(req.params.id);
    res.send(data).status(200);
})

//show all api avai
router.get('/list', (req, res, next) => {
    let listApi = [];
    for (let i = 0; i < router.stack.length; i++) {

        listApi.push(router.stack[i].route);
    }
    console.log(JSON.stringify(listApi));
    const listPath = []
    for (let j = 0; j < listApi.length; j++) {
        listPath.push()
    }
    res.json(listApi);
    next();
});
module.exports = router;

