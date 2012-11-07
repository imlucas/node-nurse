"use strict";

var util = require('util'),
    os = require('os'),
    memwatch = require('memwatch'),
    leaks  = [],
    memStats = [];

memwatch.on('leak', function(info){
    leaks.push(info);
});
memwatch.on('stats', function(stats){
    memStats.push(stats);
});

function drain(list){
    if(list.length === 0){
        return [];
    }

    var result = [],
        i = null;

    while(i = list.shift()){
        result.push(i);
    }

    return result;
}

module.exports = function(opts){
    opts = opts || {};
    var mem = process.memoryUsage(),
        ok = (opts.ok) ?
            ((typeof opts.ok === 'function') ? opts.ok() : opts.ok)
            : undefined,
        stat = {
            'hostname': os.hostname(),
            'pid': process.pid,
            'time': new Date(),
            'uptime': process.uptime(),
            'memory': {
                'free': os.freemem(),
                'total': os.totalmem(),
                'rss': mem.rss,
                'heap': mem.heapTotal,
                'heap_used': mem.heapUsed,
                'leaks': drain(leaks),
                'memwatch': drain(memStats)
            },
            'node_env': process.env.NODE_ENV,
            'service_name': process.env.SERVICE_NAME,
            'ok': ok
        };

    if(opts.server){
        stat.server = {
            'connections': opts.server.connections
        };
    }

    return stat;
};