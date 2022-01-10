const express=require('express');
const router=express.Router();
const pdfcreater=require('../pdfGenerator/pdfcreater');




router.get('/', function(req,res,next){
    const stream=res.writeHead(200,{
        'Content-Type': 'application/pdf',
        'Content-Disposition':'attachement;filename=example.pdf'
    });

    pdfcreater.createpdf(
        (chunk) => stream.write(chunk),
        () => stream.end()
    );

});

module.exports=router;