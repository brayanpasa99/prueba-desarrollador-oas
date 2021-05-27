const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const fs = require("fs");
var data = fs.readFileSync("./src/data.json");
var cuadrangular = JSON.parse(data);

app.get("/partidos", function (req, res) {
  partidos = cuadrangular.partidos;
  for (let i = 0; i < partidos.length; i++) {
    console.log(partidos[i]);
    console.log(cuadrangular.equipos[partidos[i].ide1 - 1]);
    partidos[i].nombreequipo1 =
      cuadrangular.equipos[partidos[i].ide1 - 1].nombre;
    partidos[i].nombreequipo2 =
      cuadrangular.equipos[partidos[i].ide2 - 1].nombre;
  }
  res.json(partidos);
});

app.post("/partido/:id", function (req, res) {
  let idpartido = req.params.id;
  let gole1 = req.body.gol1;
  let gole2 = req.body.gol2;
  cuadrangular.partidos[idpartido - 1].ge1 = gole1;
  cuadrangular.partidos[idpartido - 1].ge2 = gole2;

  function finished(err) {
    console.log(err);
  }

  function asignapuntos(gole1, gole2) {
    let ideq1 = cuadrangular.partidos[idpartido - 1].ide1;
    let ideq2 = cuadrangular.partidos[idpartido - 1].ide2;
    if (gole1 > gole2) {
      cuadrangular.equipos[ideq1 - 1].puntos =
        cuadrangular.equipos[ideq1 - 1].puntos + 3;
    } else if (gole1 == gole2) {
      cuadrangular.equipos[ideq1 - 1].puntos =
        cuadrangular.equipos[ideq1 - 1].puntos + 1;
      cuadrangular.equipos[ideq2 - 1].puntos =
        cuadrangular.equipos[ideq2 - 1].puntos + 1;
    } else if (gole2 > gole1) {
      cuadrangular.equipos[ideq2 - 1].puntos =
        cuadrangular.equipos[ideq2 - 1].puntos + 3;
    } else {
    }
  }

  asignapuntos(gole1, gole2);

  var data = JSON.stringify(cuadrangular, null, 2);
  fs.writeFile("./src/data.json", data, finished);

  res.json(cuadrangular.partidos[idpartido - 1]);
});

app.get("/equipos", function (req, res) {
  let infotable = cuadrangular.equipos;
  res.json(infotable);
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
