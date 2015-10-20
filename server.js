var util = require('util'),
    fs = require('fs'),
    http = require('http');



var ids = [];

http.createServer(function (req, res) {
    console.log(req.body);
    console.log(req.url);
    if (req.url.indexOf('store=') != -1)
    {
        var id= req.url.substring(req.url.indexOf('store=')+6, req.url.length);
        if (ids.indexOf(id) == -1)
            ids.push(id);
        console.log(ids);
        res.writeHead(404);
        res.end();
        return;
    }
    try
    {
        var id = req.url.indexOf('id=');
        id = req.url.substring(id+3, req.url.length);
        console.log(id);
        if (ids.indexOf(id) == -1)
        {
            fs.readFile('trackingim.gif', function(err,data){
                res.writeHead(200, { 'Content-Type': 'image/gif' });
                res.write(data);
                res.end();
            });
        }
        else
        {
            res.writeHead(404);
            res.end();
        }

    }
    catch(e)
    {
        console.log(e);
        res.writeHead(404);
        res.end();
    }

}).listen(9111);
