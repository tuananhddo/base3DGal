var express = require('express');
var router = express.Router();
var multer = require('multer');
const UPLOAD_PATH = 'public/models';
var upload = multer({dest: UPLOAD_PATH});
var fs = require('fs');
let files;

router.get('/', function (req, res, next) {
    let listFile;
    fs.readdir(UPLOAD_PATH, (err, files) => {
        if (err) {
            res.send(JSON.stringify([]));
        }
        // res.send(JSON.stringify(files));
        let js = JSON.stringify(files);
        files.forEach(file => {
            console.log(file);
        });
        listFile = files.map((item) => {
            return {
                name: item,
                link: item
            }
        })
        res.send(listFile);

    });
});
const BASE_URL = 'http://localhost:3000';
const BASE_MODEL_URL = BASE_URL + '/models';
router.post('/', upload.single('model'), function (req, res, next) {
    // res.send('respond with a resource');
    console.log(req.file, req.body)

    const processedFile = req.file || {}; // MULTER xử lý và gắn đối tượng FILE vào req
    let orgName = processedFile.originalname || ''; // Tên gốc trong máy tính của người upload
    orgName = orgName.trim().replace(/ /g, "-")
    const fullPathInServ = processedFile.path; // Đường dẫn đầy đủ của file vừa đc upload lên server
    // Đổi tên của file vừa upload lên, vì multer đang đặt default ko có đuôi file
    // const fullPathInServ = ;;
    const newFullPath = `${UPLOAD_PATH}/${orgName}`;
    fs.renameSync(fullPathInServ, newFullPath);
    const data = {name: orgName, link: orgName};
    res.send(JSON.stringify(data))
});

module.exports = router;
