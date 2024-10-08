const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


const service = {
    MyService: {
        MyPort: {
            MyFunction: function (args) {
                return {
                    msg: `Hello, ${args.name}!` 
                };
            }
        }
    }
};


const wsdlPath = path.resolve(__dirname, './service.wsdl');
const wsdl = fs.readFileSync(wsdlPath, 'utf8');


app.listen(PORT, function () {
    soap.listen(app, '/wsdl', service, wsdl);
    console.log(`Server is running at http://localhost:${PORT}`);
});
