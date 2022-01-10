const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc=new PDFDocument();
function createpdf(dataCallback, endCallback){
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc.end();
    }

module.exports={createpdf};

