const controller = {};
const tambah = require("../service/anggota/tambahAnggota");
const semuaAnggota = require("../service/anggota/semuaAnggota");
const satuAnggota = require("../service/anggota/satuAnggota");
const editAnggota = require("../service/anggota/editAnggota");
const hapusAnggota = require("../service/anggota/hapusAnggota");

//tambahAnggota
controller.tambahAnggota = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err)
    } else {
      let data = req.body;
      tambah(conn, data, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
      })
    }
  })
};

//semuaAnggota
controller.semuaAnggota = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err);
    } else {
      semuaAnggota(conn, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    }
  });
};

//satuAnggota
controller.satuAnggota = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err);
    } else {
      let id = req.params.kode;
      satuAnggota(conn, id, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    }
  });
};

//editAnggota
controller.editAnggota = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err);
    } else {
      let id = req.params.kode;
      let data = req.body;
      editAnggota(conn, data, id, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    }
  });
};

//hapusAnggota
controller.hapusAnggota = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.send(err);
    } else {
      let id = req.params.kode;
      hapusAnggota(conn, id, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    }
  });
};

module.exports = controller;