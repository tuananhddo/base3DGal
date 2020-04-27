var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');
let files;

router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  const data = [{name : 'model1'}, {name : 'models2'}];
  res.send(JSON.stringify(data))
});
const BASE_URL = 'http://localhost:3000';
const BASE_MODEL_URL = BASE_URL + '/models';
router.post('/',upload.single('avatar'), function(req, res, next) {
  // res.send('respond with a resource');
  const processedFile = req.file || {}; // MULTER xử lý và gắn đối tượng FILE vào req
  let orgName = processedFile.originalname || ''; // Tên gốc trong máy tính của người upload
  orgName = orgName.trim().replace(/ /g, "-")
  const fullPathInServ = processedFile.path; // Đường dẫn đầy đủ của file vừa đc upload lên server
  // Đổi tên của file vừa upload lên, vì multer đang đặt default ko có đuôi file
  const newFullPath = `${fullPathInServ}-${orgName}`;
  fs.renameSync(fullPathInServ, newFullPath);
  const data = [{name : BASE_MODEL_URL + 'floor.glb'}, {name : 'models2'}];
  res.send(JSON.stringify(data))
});

module.exports = router;
