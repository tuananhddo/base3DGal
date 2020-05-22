#!/usr/bin/env node

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const glob = require('glob');
const syncService = require('./../service/syncService');
let files = syncService.getWorkingFiles();


router.post('/save', (req, res) => {
    const changes = req.body;
        // Accepted.
        syncService.sync(changes);
        res.sendStatus(200);
});
router.post('/create', (req, res) => {
    const changes = req.body;
        // Accepted.
        syncService.syncCreate(changes);
        res.sendStatus(200);
});

module.exports = router;
