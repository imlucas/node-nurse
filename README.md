# node-nurse

Standardized health checker for all our services

## Usage

    var nurse = require('nurse'),
        app = require('express')(),
        server = app.listen(3000);


    app.get('/health-check', function(req, res){
        res.send(nurse({'ok': true, 'server': server}));
    });


## Install

     npm install node-nurse

## Testing

    git clone
    npm install
    mocha
