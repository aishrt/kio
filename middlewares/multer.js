const multer = require('multer');

const path = require('path');
const fs = require('fs');
const { dirname } = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __dirname = dirname(__filename);
    const dir = path.join(__dirname, '../uploads');
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    } catch (err) {
      console.log(err);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const extensions = file.originalname.toString().split('.');
    const extension = extensions[extensions.length - 1];
    const fileName = `${Date.now()}.${extension}`;
    cb(null, fileName);
  },
});

module.exports = multer({ storage });
