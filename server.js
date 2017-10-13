/**
 * Created by kmukai on 9/15/2016.
 */
(function(){
    var express = require('express');
    var app = express();

    app.use(express.static(__dirname + '/public'));
    app.use('/bower_components', express.static(__dirname + '/bower_components'));
    app.use('/node_modules', express.static(__dirname + '/node_modules'));
    app.use('/static', express.static(__dirname + '/static'));

    app.listen(3000, function(){
        console.log('server running on port: 3000');
    });
})();