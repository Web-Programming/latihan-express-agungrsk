var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('home/beranda', { title: 'Beranda' });
  res.render('index', { title: 'Beranda' });
  // res.render('layouts/main', { title: 'Beranda' });
});

router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'Wisata Pulau Kemaro', 'harga' :50000},
    {'nama' : 'Wisata Punti Kayu', 'harga' :25000},
    {'nama' : 'Wisata Jakabaring', 'harga' :10000},
  ];
  res.render('pemesanan/paketwisata', { title: 'Paket Wisata', paket : listpaketwisata});
});

router.get('/orderpaket', function(req, res, next) {
  res.render('pemesanan/orderpaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
  res.render('pemesanan/orderdetail', { title: 'Detail Pemesanan Paket' });
});

module.exports = router;
