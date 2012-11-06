"use strict";

var util = require('util'),
    os = require('os');

module.exports = function(opts){
    opts = opts || {};
    var load = os.loadavg(),
        mem = process.memoryUsage(),
        ok = (opts.ok) ?
            ((typeof opts.ok === 'function') ? opts.ok() : opts.ok)
            : undefined,
        stats = {
            'hostname': os.hostname(),
            'pid': process.pid,
            'time': new Date(),
            'uptime': process.uptime(),
            'memory': {
                'free': os.freemem(),
                'total': os.totalmem(),
                'rss': mem.rss,
                'heap': mem.heapTotal,
                'heap_used': mem.heapUsed
            },
            'load': {
                '1m': load[0],
                '5m': load[1],
                '15m': load[2]
            },
            'node_env': process.env.NODE_ENV,
            'service_name': process.env.SERVICE_NAME,
            'ok': ok
        };

    if(opts.server){
        stats.server = {
            'connections': opts.server.connections
        };
    }

    return stats;
};