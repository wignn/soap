const soap = require('soap');
const url = 'http://localhost:3000/wsdl?wsdl';  
const args = { name: 'World' };  

soap.createClient(url, function (err, client) {
    if (err) {
        console.error(err);
        return;
    }

    client.MyService.MyPort.MyFunction(args, function (err, response) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(response);  
    });
});
