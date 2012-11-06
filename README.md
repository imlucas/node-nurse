# node-nurse

Standardized health checker for all our services

## Usage

    var nurse = require('nurse'),
        app = require('express')(),
        server = app.listen(3000);


    app.get('/health-check', function(req, res){
        res.send(nurse({'ok': true, 'server': server}));
    });

This will send back some JSON that look like this:

    {
        hostname: "someservice.ex.fm",
        pid: 34437,
        time: "2012-11-06T23:44:13.660Z",
        uptime: 6,
        memory: {
            free: 14770176,
            total: 2147483648,
            rss: 29224960,
            heap: 19622144,
            heap_used: 11072256
        },
        load: {
            1m: 3.16552734375,
            5m: 2.8232421875,
            15m: 2.6494140625
        },
        node_env: "development",
        service_name: "user",
        ok: true,
        server: {
            connections: 2
        }
    }


## Install

     npm install node-nurse

## Testing

    git clone
    npm install
    mocha
