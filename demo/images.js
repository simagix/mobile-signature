var request = require('supertest');
var url = 'http://localhost:3000';
var args = process.argv.splice(2);
var lwip = require('lwip')
var total = args[0] || 30;
var Buffer = require('buffer').Buffer;
var WIDTH = 60;
var HEIGHT = 60;
var colors = ['black', 'white', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta'];
var maps = {};
sendImage(total);

function sendImage(num) {
    var color = getColor();
    if(maps[color]) {
        postImage(maps[color]);
    } else {
        lwip.create(WIDTH, 60, color, function(err, image) {
            image.toBuffer('png', {}, function(err, buffer) {
                var doc = {'data': 'data:image/png;base64,' + buffer.toString('base64')};
                maps[color] = doc;
                postImage(doc);
            });
        // });
    });
    }

    if(--num > 0) {
        setTimeout(function() {
            sendImage(num)
        }, 20);
    }
}

function postImage(doc) {
    request(url)
        .post('/image')
        .send(doc)
        .end(function(err, res) {
            if (err) {
                throw err;
            }
        });
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}


function getColor() {
    var i = randomInt(0, colors.length-1);
    return colors[i];
}
