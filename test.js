"use strict";

var nurse = require('./'),
    assert = require('assert');

describe('nurse', function(){
    var res;

    it('should work with no options', function(){
        res = nurse();
        assert(res);
    });

    it('should return ok undefined by default', function(){
        assert.equal(res.ok, undefined);
    });

    it('should return ok string if thats the opt', function(){
        res = nurse({ok: 'yep'});
        assert.equal(res.ok, 'yep');
    });

    it('should call ok if its a function', function(){
        res = nurse({ok: function(){return 'indeed';}});
        assert.equal(res.ok, 'indeed');
    });
});