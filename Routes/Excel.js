const express = require('express');
const router = express.Router();
const ExcelController = require('../Controller/Excel');
const excelController = new ExcelController();

router.get('/download-excel', excelController.downloadExcel);

module.exports = router;