const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = 4000;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './subidas');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname.replace('[]','') + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/subidas', express.static('subidas'));
app.use(cors());

app.get('/', (req, res)=>{
  res.send("<h1>Envía un request POST a /subir 🏖</h1>");
});
app.post('/subir', upload.array('fotografias[]', 25), (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    res.end(
      "Archivo subido satisfactoriamente:\r\n"+
      req.files.map(f=>"http://"+req.headers.host+"/"+f.path).join('\r\n')
    );
  } catch (error) { 
    console.error(error); 
  }
});

app.listen(PORT, () => console.log(`Corriendo en http://localhost:${PORT}`));