//----------------------------------------------------------

//Requires poly2tri.js (https://github.com/r3mi/poly2tri.js)

//----------------------------------------------------------

var TriangulatedHelvetica = {};

TriangulatedHelvetica.widths = [{
    letter: ' ',
    width: 10
}, {
    letter: 'A',
    width: 35
}, {
    letter: 'B',
    width: 31
}, {
    letter: 'C',
    width: 34
}, {
    letter: 'D',
    width: 32
}, {
    letter: 'E',
    width: 27
}, {
    letter: 'F',
    width: 25
}, {
    letter: 'G',
    width: 33
}, {
    letter: 'H',
    width: 30
}, {
    letter: 'I',
    width: 8
}, {
    letter: 'J',
    width: 24
}, {
    letter: 'K',
    width: 33
}, {
    letter: 'L',
    width: 25
}, {
    letter: 'M',
    width: 39
}, {
    letter: 'N',
    width: 30
}, {
    letter: 'O',
    width: 35
}, {
    letter: 'P',
    width: 28
}, {
    letter: 'Q',
    width: 35
}, {
    letter: 'R',
    width: 30
}, {
    letter: 'S',
    width: 30
}, {
    letter: 'T',
    width: 30
}, {
    letter: 'U',
    width: 31
}, {
    letter: 'V',
    width: 32
}, {
    letter: 'W',
    width: 45
}, {
    letter: 'X',
    width: 32
}, {
    letter: 'Y',
    width: 33
}, {
    letter: 'Z',
    width: 30
}];

TriangulatedHelvetica.getLetterWidth = function(letter) {
    var letterWidth = 0;

    for (var i = 0; i < TriangulatedHelvetica.widths.length; i++) {
        if (TriangulatedHelvetica.widths[i].letter == letter) {
            letterWidth = TriangulatedHelvetica.widths[i].width;
        }
    }

    return letterWidth;
}

TriangulatedHelvetica.A = function(fontSize, positionX, positionY) {
    if (!fontSize) {
        fontSize = 1;
    }

    if (!positionX) {
        positionX = 0;
    }

    if (!positionY) {
        positionY = 0;
    }

    var contour = [
        new poly2tri.Point(21.5, 0.0),
        new poly2tri.Point(34.9, 35.7),
        new poly2tri.Point(26.8, 35.7),
        new poly2tri.Point(24.0, 27.8),
        new poly2tri.Point(10.7, 27.8),
        new poly2tri.Point(7.9, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(13.5, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole = [
        new poly2tri.Point(22.0, 21.9),
        new poly2tri.Point(17.5, 8.8),
        new poly2tri.Point(17.4, 8.8),
        new poly2tri.Point(12.8, 21.9)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole, fontSize, positionX, positionY);

    swctx.addHole(hole);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.B = function(fontSize, positionX, positionY) {

    if (!fontSize) {
        fontSize = 1;
    }

    if (!positionX) {
        positionX = 0;
    }

    if (!positionY) {
        positionY = 0;
    }

    var contour = [
        new poly2tri.Point(16.8, 0.0),
        new poly2tri.Point(18.5, 0.0),
        new poly2tri.Point(20.0, 0.2),
        new poly2tri.Point(21.4, 0.5),
        new poly2tri.Point(22.8, 0.8),
        new poly2tri.Point(24.0, 1.2),
        new poly2tri.Point(25.0, 1.9),
        new poly2tri.Point(26.0, 2.6),
        new poly2tri.Point(26.8, 3.5),
        new poly2tri.Point(27.4, 4.7),
        new poly2tri.Point(27.9, 5.8),
        new poly2tri.Point(28.2, 7.2),
        new poly2tri.Point(28.2, 8.9),
        new poly2tri.Point(28.2, 10.7),
        new poly2tri.Point(27.8, 12.2),
        new poly2tri.Point(27.0, 13.4),
        new poly2tri.Point(26.2, 14.6),
        new poly2tri.Point(24.9, 15.5),
        new poly2tri.Point(23.3, 16.3),
        new poly2tri.Point(25.5, 16.9),
        new poly2tri.Point(27.2, 18.0),
        new poly2tri.Point(28.3, 19.6),
        new poly2tri.Point(29.4, 21.2),
        new poly2tri.Point(29.9, 23.1),
        new poly2tri.Point(29.9, 25.4),
        new poly2tri.Point(29.9, 27.2),
        new poly2tri.Point(29.5, 28.7),
        new poly2tri.Point(28.8, 30.0),
        new poly2tri.Point(28.1, 31.3),
        new poly2tri.Point(27.2, 32.4),
        new poly2tri.Point(26.0, 33.2),
        new poly2tri.Point(24.8, 34.1),
        new poly2tri.Point(23.5, 34.7),
        new poly2tri.Point(22.0, 35.1),
        new poly2tri.Point(20.5, 35.5),
        new poly2tri.Point(18.9, 35.7),
        new poly2tri.Point(17.3, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole1 = [
        new poly2tri.Point(15.8, 14.5),
        new poly2tri.Point(17.2, 14.5),
        new poly2tri.Point(18.3, 14.1),
        new poly2tri.Point(19.2, 13.5),
        new poly2tri.Point(20.1, 12.8),
        new poly2tri.Point(20.6, 11.7),
        new poly2tri.Point(20.6, 10.2),
        new poly2tri.Point(20.6, 9.4),
        new poly2tri.Point(20.4, 8.7),
        new poly2tri.Point(20.1, 8.2),
        new poly2tri.Point(19.8, 7.6),
        new poly2tri.Point(19.4, 7.2),
        new poly2tri.Point(18.9, 6.9),
        new poly2tri.Point(18.4, 6.6),
        new poly2tri.Point(17.9, 6.4),
        new poly2tri.Point(17.2, 6.3),
        new poly2tri.Point(16.6, 6.2),
        new poly2tri.Point(15.9, 6.1),
        new poly2tri.Point(15.2, 6.1),
        new poly2tri.Point(7.8, 6.1),
        new poly2tri.Point(7.8, 14.5)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole1, fontSize, positionX, positionY);

    swctx.addHole(hole1);

    var hole2 = [
        new poly2tri.Point(16.2, 29.6),
        new poly2tri.Point(17.0, 29.6),
        new poly2tri.Point(17.8, 29.5),
        new poly2tri.Point(18.4, 29.4),
        new poly2tri.Point(19.1, 29.2),
        new poly2tri.Point(19.8, 29.0),
        new poly2tri.Point(20.3, 28.6),
        new poly2tri.Point(20.8, 28.3),
        new poly2tri.Point(21.3, 27.8),
        new poly2tri.Point(21.6, 27.2),
        new poly2tri.Point(21.9, 26.6),
        new poly2tri.Point(22.0, 25.8),
        new poly2tri.Point(22.0, 24.9),
        new poly2tri.Point(22.0, 23.1),
        new poly2tri.Point(21.5, 21.8),
        new poly2tri.Point(20.5, 21.0),
        new poly2tri.Point(19.5, 20.2),
        new poly2tri.Point(18.1, 19.8),
        new poly2tri.Point(7.8, 19.8),
        new poly2tri.Point(7.8, 29.6)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole2, fontSize, positionX, positionY);

    swctx.addHole(hole2);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.C = function(fontSize, positionX, positionY) {
    if (!fontSize) {
        fontSize = 1;
    }

    if (!positionX) {
        positionX = 0;
    }

    if (!positionY) {
        positionY = 0;
    }

    var contour = [
        new poly2tri.Point(24.5, 10.4),
        new poly2tri.Point(24.0, 9.6),
        new poly2tri.Point(23.4, 9.0),
        new poly2tri.Point(22.7, 8.4),
        new poly2tri.Point(22.0, 7.8),
        new poly2tri.Point(21.2, 7.4),
        new poly2tri.Point(20.3, 7.1),
        new poly2tri.Point(19.4, 6.8),
        new poly2tri.Point(18.5, 6.6),
        new poly2tri.Point(17.6, 6.6),
        new poly2tri.Point(15.8, 6.6),
        new poly2tri.Point(14.3, 6.9),
        new poly2tri.Point(13.1, 7.6),
        new poly2tri.Point(11.8, 8.3),
        new poly2tri.Point(10.8, 9.2),
        new poly2tri.Point(10.1, 10.4),
        new poly2tri.Point(9.3, 11.5),
        new poly2tri.Point(8.7, 12.8),
        new poly2tri.Point(8.4, 14.3),
        new poly2tri.Point(8.0, 15.8),
        new poly2tri.Point(7.9, 17.3),
        new poly2tri.Point(7.9, 18.8),
        new poly2tri.Point(7.9, 20.3),
        new poly2tri.Point(8.0, 21.8),
        new poly2tri.Point(8.4, 23.2),
        new poly2tri.Point(8.7, 24.6),
        new poly2tri.Point(9.3, 25.9),
        new poly2tri.Point(10.1, 27.0),
        new poly2tri.Point(10.8, 28.2),
        new poly2tri.Point(11.8, 29.1),
        new poly2tri.Point(13.1, 29.8),
        new poly2tri.Point(14.3, 30.5),
        new poly2tri.Point(15.8, 30.8),
        new poly2tri.Point(17.6, 30.8),
        new poly2tri.Point(20.0, 30.8),
        new poly2tri.Point(21.8, 30.1),
        new poly2tri.Point(23.2, 28.6),
        new poly2tri.Point(24.5, 27.1),
        new poly2tri.Point(25.4, 25.2),
        new poly2tri.Point(25.6, 22.8),
        new poly2tri.Point(33.2, 22.8),
        new poly2tri.Point(33.1, 25.0),
        new poly2tri.Point(32.5, 27.0),
        new poly2tri.Point(31.7, 28.8),
        new poly2tri.Point(30.9, 30.6),
        new poly2tri.Point(29.8, 32.2),
        new poly2tri.Point(28.4, 33.4),
        new poly2tri.Point(27.0, 34.7),
        new poly2tri.Point(25.4, 35.7),
        new poly2tri.Point(23.6, 36.3),
        new poly2tri.Point(21.8, 37.0),
        new poly2tri.Point(19.8, 37.3),
        new poly2tri.Point(17.6, 37.3),
        new poly2tri.Point(14.8, 37.3),
        new poly2tri.Point(12.4, 36.9),
        new poly2tri.Point(10.2, 35.9),
        new poly2tri.Point(8.0, 35.0),
        new poly2tri.Point(6.1, 33.7),
        new poly2tri.Point(4.6, 32.0),
        new poly2tri.Point(3.1, 30.3),
        new poly2tri.Point(2.0, 28.4),
        new poly2tri.Point(1.2, 26.1),
        new poly2tri.Point(0.4, 23.9),
        new poly2tri.Point(0.0, 21.4),
        new poly2tri.Point(0.0, 18.8),
        new poly2tri.Point(0.0, 16.2),
        new poly2tri.Point(0.4, 13.7),
        new poly2tri.Point(1.2, 11.4),
        new poly2tri.Point(2.0, 9.1),
        new poly2tri.Point(3.1, 7.1),
        new poly2tri.Point(4.6, 5.4),
        new poly2tri.Point(6.1, 3.8),
        new poly2tri.Point(8.0, 2.4),
        new poly2tri.Point(10.2, 1.4),
        new poly2tri.Point(12.4, 0.5),
        new poly2tri.Point(14.8, 0.0),
        new poly2tri.Point(17.6, 0.0),
        new poly2tri.Point(19.5, 0.0),
        new poly2tri.Point(21.4, 0.3),
        new poly2tri.Point(23.1, 0.8),
        new poly2tri.Point(24.9, 1.4),
        new poly2tri.Point(26.4, 2.2),
        new poly2tri.Point(27.8, 3.3),
        new poly2tri.Point(29.2, 4.4),
        new poly2tri.Point(30.4, 5.8),
        new poly2tri.Point(31.2, 7.3),
        new poly2tri.Point(32.1, 8.9),
        new poly2tri.Point(32.7, 10.8),
        new poly2tri.Point(33.0, 12.8),
        new poly2tri.Point(25.4, 12.8),
        new poly2tri.Point(25.2, 11.9),
        new poly2tri.Point(24.9, 11.1)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.D = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(15.4, 0.0),
        new poly2tri.Point(17.7, 0.0),
        new poly2tri.Point(19.8, 0.4),
        new poly2tri.Point(21.8, 1.1),
        new poly2tri.Point(23.8, 1.8),
        new poly2tri.Point(25.5, 2.9),
        new poly2tri.Point(27.0, 4.4),
        new poly2tri.Point(28.4, 5.9),
        new poly2tri.Point(29.6, 7.7),
        new poly2tri.Point(30.4, 9.9),
        new poly2tri.Point(31.2, 12.1),
        new poly2tri.Point(31.6, 14.7),
        new poly2tri.Point(31.6, 17.7),
        new poly2tri.Point(31.6, 20.2),
        new poly2tri.Point(31.3, 22.7),
        new poly2tri.Point(30.6, 24.9),
        new poly2tri.Point(29.9, 27.1),
        new poly2tri.Point(28.9, 29.0),
        new poly2tri.Point(27.6, 30.6),
        new poly2tri.Point(26.2, 32.2),
        new poly2tri.Point(24.5, 33.4),
        new poly2tri.Point(22.5, 34.3),
        new poly2tri.Point(20.5, 35.2),
        new poly2tri.Point(18.1, 35.7),
        new poly2tri.Point(15.4, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole = [
        new poly2tri.Point(14.8, 29.1),
        new poly2tri.Point(16.0, 29.1),
        new poly2tri.Point(17.1, 28.9),
        new poly2tri.Point(18.1, 28.6),
        new poly2tri.Point(19.2, 28.2),
        new poly2tri.Point(20.2, 27.6),
        new poly2tri.Point(21.0, 26.7),
        new poly2tri.Point(21.8, 25.9),
        new poly2tri.Point(22.5, 24.8),
        new poly2tri.Point(23.0, 23.4),
        new poly2tri.Point(23.5, 22.0),
        new poly2tri.Point(23.8, 20.4),
        new poly2tri.Point(23.8, 18.4),
        new poly2tri.Point(23.8, 16.6),
        new poly2tri.Point(23.6, 15.0),
        new poly2tri.Point(23.2, 13.5),
        new poly2tri.Point(22.9, 12.1),
        new poly2tri.Point(22.3, 10.8),
        new poly2tri.Point(21.5, 9.8),
        new poly2tri.Point(20.7, 8.8),
        new poly2tri.Point(19.6, 8.0),
        new poly2tri.Point(18.3, 7.4),
        new poly2tri.Point(17.0, 6.9),
        new poly2tri.Point(15.4, 6.6),
        new poly2tri.Point(13.4, 6.6),
        new poly2tri.Point(7.8, 6.6),
        new poly2tri.Point(7.8, 29.1)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole, fontSize, positionX, positionY);

    swctx.addHole(hole);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.E = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(26.7, 0.0),
        new poly2tri.Point(26.7, 6.6),
        new poly2tri.Point(7.8, 6.6),
        new poly2tri.Point(7.8, 14.2),
        new poly2tri.Point(25.1, 14.2),
        new poly2tri.Point(25.1, 20.4),
        new poly2tri.Point(7.8, 20.4),
        new poly2tri.Point(7.8, 29.1),
        new poly2tri.Point(27.1, 29.1),
        new poly2tri.Point(27.1, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.F = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(25.1, 0.0),
        new poly2tri.Point(25.1, 6.6),
        new poly2tri.Point(7.8, 6.6),
        new poly2tri.Point(7.8, 14.9),
        new poly2tri.Point(22.8, 14.9),
        new poly2tri.Point(22.8, 21.0),
        new poly2tri.Point(7.8, 21.0),
        new poly2tri.Point(7.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.G = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(22.7, 36.3),
        new poly2tri.Point(21.0, 37.0),
        new poly2tri.Point(19.3, 37.3),
        new poly2tri.Point(17.6, 37.3),
        new poly2tri.Point(14.8, 37.3),
        new poly2tri.Point(12.4, 36.9),
        new poly2tri.Point(10.2, 35.9),
        new poly2tri.Point(8.0, 35.0),
        new poly2tri.Point(6.1, 33.7),
        new poly2tri.Point(4.6, 32.0),
        new poly2tri.Point(3.1, 30.3),
        new poly2tri.Point(2.0, 28.4),
        new poly2tri.Point(1.2, 26.1),
        new poly2tri.Point(0.4, 23.9),
        new poly2tri.Point(0.0, 21.4),
        new poly2tri.Point(0.0, 18.8),
        new poly2tri.Point(0.0, 16.2),
        new poly2tri.Point(0.4, 13.7),
        new poly2tri.Point(1.2, 11.4),
        new poly2tri.Point(2.0, 9.1),
        new poly2tri.Point(3.1, 7.1),
        new poly2tri.Point(4.6, 5.4),
        new poly2tri.Point(6.1, 3.8),
        new poly2tri.Point(8.0, 2.4),
        new poly2tri.Point(10.2, 1.4),
        new poly2tri.Point(12.4, 0.5),
        new poly2tri.Point(14.8, 0.0),
        new poly2tri.Point(17.6, 0.0),
        new poly2tri.Point(19.4, 0.0),
        new poly2tri.Point(21.2, 0.3),
        new poly2tri.Point(22.9, 0.8),
        new poly2tri.Point(24.6, 1.4),
        new poly2tri.Point(26.1, 2.2),
        new poly2tri.Point(27.5, 3.2),
        new poly2tri.Point(28.9, 4.3),
        new poly2tri.Point(30.1, 5.6),
        new poly2tri.Point(31.0, 7.2),
        new poly2tri.Point(31.9, 8.8),
        new poly2tri.Point(32.4, 10.6),
        new poly2tri.Point(32.6, 12.6),
        new poly2tri.Point(25.1, 12.6),
        new poly2tri.Point(24.6, 10.6),
        new poly2tri.Point(23.7, 9.1),
        new poly2tri.Point(22.4, 8.1),
        new poly2tri.Point(21.1, 7.1),
        new poly2tri.Point(19.5, 6.6),
        new poly2tri.Point(17.6, 6.6),
        new poly2tri.Point(15.8, 6.6),
        new poly2tri.Point(14.3, 6.9),
        new poly2tri.Point(13.1, 7.6),
        new poly2tri.Point(11.8, 8.3),
        new poly2tri.Point(10.8, 9.2),
        new poly2tri.Point(10.1, 10.4),
        new poly2tri.Point(9.3, 11.5),
        new poly2tri.Point(8.7, 12.8),
        new poly2tri.Point(8.4, 14.3),
        new poly2tri.Point(8.0, 15.8),
        new poly2tri.Point(7.9, 17.3),
        new poly2tri.Point(7.9, 18.8),
        new poly2tri.Point(7.9, 20.3),
        new poly2tri.Point(8.0, 21.8),
        new poly2tri.Point(8.4, 23.2),
        new poly2tri.Point(8.7, 24.6),
        new poly2tri.Point(9.3, 25.9),
        new poly2tri.Point(10.1, 27.0),
        new poly2tri.Point(10.8, 28.2),
        new poly2tri.Point(11.8, 29.1),
        new poly2tri.Point(13.1, 29.8),
        new poly2tri.Point(14.3, 30.5),
        new poly2tri.Point(15.8, 30.8),
        new poly2tri.Point(17.6, 30.8),
        new poly2tri.Point(20.1, 30.8),
        new poly2tri.Point(22.2, 30.1),
        new poly2tri.Point(23.6, 28.8),
        new poly2tri.Point(25.0, 27.5),
        new poly2tri.Point(25.8, 25.6),
        new poly2tri.Point(26.1, 23.1),
        new poly2tri.Point(18.1, 23.1),
        new poly2tri.Point(18.1, 17.2),
        new poly2tri.Point(33.1, 17.2),
        new poly2tri.Point(33.1, 36.5),
        new poly2tri.Point(28.1, 36.5),
        new poly2tri.Point(27.4, 32.5),
        new poly2tri.Point(26.0, 34.3),
        new poly2tri.Point(24.4, 35.6)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.H = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(7.8, 0.0),
        new poly2tri.Point(7.8, 13.7),
        new poly2tri.Point(22.3, 13.7),
        new poly2tri.Point(22.3, 0.0),
        new poly2tri.Point(30.1, 0.0),
        new poly2tri.Point(30.1, 35.7),
        new poly2tri.Point(22.3, 35.7),
        new poly2tri.Point(22.3, 20.3),
        new poly2tri.Point(7.8, 20.3),
        new poly2tri.Point(7.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.I = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(7.8, 0.0),
        new poly2tri.Point(7.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.J = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(23.3, 28.3),
        new poly2tri.Point(23.1, 29.7),
        new poly2tri.Point(22.5, 31.0),
        new poly2tri.Point(21.7, 32.2),
        new poly2tri.Point(20.9, 33.4),
        new poly2tri.Point(19.7, 34.5),
        new poly2tri.Point(18.1, 35.3),
        new poly2tri.Point(16.5, 36.1),
        new poly2tri.Point(14.4, 36.5),
        new poly2tri.Point(11.8, 36.5),
        new poly2tri.Point(10.2, 36.5),
        new poly2tri.Point(8.8, 36.3),
        new poly2tri.Point(7.4, 35.9),
        new poly2tri.Point(6.0, 35.5),
        new poly2tri.Point(4.8, 34.8),
        new poly2tri.Point(3.6, 33.9),
        new poly2tri.Point(2.5, 33.0),
        new poly2tri.Point(1.7, 31.9),
        new poly2tri.Point(1.0, 30.5),
        new poly2tri.Point(0.3, 29.1),
        new poly2tri.Point(0.0, 27.5),
        new poly2tri.Point(0.0, 25.5),
        new poly2tri.Point(0.0, 22.4),
        new poly2tri.Point(7.1, 22.4),
        new poly2tri.Point(7.1, 24.0),
        new poly2tri.Point(7.1, 24.9),
        new poly2tri.Point(7.2, 25.7),
        new poly2tri.Point(7.3, 26.4),
        new poly2tri.Point(7.4, 27.1),
        new poly2tri.Point(7.7, 27.8),
        new poly2tri.Point(8.0, 28.3),
        new poly2tri.Point(8.3, 28.8),
        new poly2tri.Point(8.8, 29.2),
        new poly2tri.Point(9.4, 29.5),
        new poly2tri.Point(10.0, 29.8),
        new poly2tri.Point(10.7, 30.0),
        new poly2tri.Point(11.6, 30.0),
        new poly2tri.Point(12.7, 30.0),
        new poly2tri.Point(13.5, 29.8),
        new poly2tri.Point(14.0, 29.4),
        new poly2tri.Point(14.6, 29.0),
        new poly2tri.Point(15.0, 28.6),
        new poly2tri.Point(15.3, 28.0),
        new poly2tri.Point(15.5, 27.4),
        new poly2tri.Point(15.7, 26.8),
        new poly2tri.Point(15.7, 26.1),
        new poly2tri.Point(15.8, 25.4),
        new poly2tri.Point(15.8, 24.7),
        new poly2tri.Point(15.8, 24.1),
        new poly2tri.Point(15.8, 0.0),
        new poly2tri.Point(23.6, 0.0),
        new poly2tri.Point(23.6, 24.5),
        new poly2tri.Point(23.6, 25.6),
        new poly2tri.Point(23.5, 26.9)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.K = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(7.8, 0.0),
        new poly2tri.Point(7.8, 14.8),
        new poly2tri.Point(21.8, 0.0),
        new poly2tri.Point(31.6, 0.0),
        new poly2tri.Point(17.6, 14.1),
        new poly2tri.Point(32.9, 35.7),
        new poly2tri.Point(23.1, 35.7),
        new poly2tri.Point(12.3, 19.7),
        new poly2tri.Point(7.8, 24.2),
        new poly2tri.Point(7.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.L = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(7.8, 0.0),
        new poly2tri.Point(7.8, 29.1),
        new poly2tri.Point(25.2, 29.1),
        new poly2tri.Point(25.2, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.M = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(11.0, 0.0),
        new poly2tri.Point(19.4, 24.6),
        new poly2tri.Point(19.5, 24.6),
        new poly2tri.Point(27.4, 0.0),
        new poly2tri.Point(38.4, 0.0),
        new poly2tri.Point(38.4, 35.7),
        new poly2tri.Point(31.1, 35.7),
        new poly2tri.Point(31.1, 10.4),
        new poly2tri.Point(31.0, 10.4),
        new poly2tri.Point(22.2, 35.7),
        new poly2tri.Point(16.2, 35.7),
        new poly2tri.Point(7.4, 10.7),
        new poly2tri.Point(7.3, 10.7),
        new poly2tri.Point(7.3, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.N = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(7.8, 0.0),
        new poly2tri.Point(22.7, 24.0),
        new poly2tri.Point(22.8, 24.0),
        new poly2tri.Point(22.8, 0.0),
        new poly2tri.Point(30.1, 0.0),
        new poly2tri.Point(30.1, 35.7),
        new poly2tri.Point(22.3, 35.7),
        new poly2tri.Point(7.4, 11.8),
        new poly2tri.Point(7.3, 11.8),
        new poly2tri.Point(7.3, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.O = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(1.2, 11.4),
        new poly2tri.Point(2.0, 9.1),
        new poly2tri.Point(3.1, 7.1),
        new poly2tri.Point(4.6, 5.4),
        new poly2tri.Point(6.1, 3.8),
        new poly2tri.Point(8.0, 2.4),
        new poly2tri.Point(10.2, 1.4),
        new poly2tri.Point(12.4, 0.5),
        new poly2tri.Point(14.8, 0.0),
        new poly2tri.Point(17.6, 0.0),
        new poly2tri.Point(20.3, 0.0),
        new poly2tri.Point(22.8, 0.5),
        new poly2tri.Point(25.0, 1.4),
        new poly2tri.Point(27.1, 2.4),
        new poly2tri.Point(29.0, 3.8),
        new poly2tri.Point(30.5, 5.4),
        new poly2tri.Point(32.0, 7.1),
        new poly2tri.Point(33.1, 9.1),
        new poly2tri.Point(33.9, 11.4),
        new poly2tri.Point(34.7, 13.7),
        new poly2tri.Point(35.1, 16.2),
        new poly2tri.Point(35.1, 18.8),
        new poly2tri.Point(35.1, 21.4),
        new poly2tri.Point(34.7, 23.9),
        new poly2tri.Point(33.9, 26.1),
        new poly2tri.Point(33.1, 28.4),
        new poly2tri.Point(32.0, 30.3),
        new poly2tri.Point(30.5, 32.0),
        new poly2tri.Point(29.0, 33.7),
        new poly2tri.Point(27.1, 35.0),
        new poly2tri.Point(25.0, 35.9),
        new poly2tri.Point(22.8, 36.9),
        new poly2tri.Point(20.3, 37.3),
        new poly2tri.Point(17.6, 37.3),
        new poly2tri.Point(14.8, 37.3),
        new poly2tri.Point(12.4, 36.9),
        new poly2tri.Point(10.2, 35.9),
        new poly2tri.Point(8.0, 35.0),
        new poly2tri.Point(6.1, 33.7),
        new poly2tri.Point(4.6, 32.0),
        new poly2tri.Point(3.1, 30.3),
        new poly2tri.Point(2.0, 28.4),
        new poly2tri.Point(1.2, 26.1),
        new poly2tri.Point(0.4, 23.9),
        new poly2tri.Point(0.0, 21.4),
        new poly2tri.Point(0.0, 18.8),
        new poly2tri.Point(0.0, 16.2),
        new poly2tri.Point(0.4, 13.7)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole = [
        new poly2tri.Point(8.4, 23.2),
        new poly2tri.Point(8.7, 24.6),
        new poly2tri.Point(9.3, 25.9),
        new poly2tri.Point(10.1, 27.0),
        new poly2tri.Point(10.8, 28.2),
        new poly2tri.Point(11.8, 29.1),
        new poly2tri.Point(13.1, 29.8),
        new poly2tri.Point(14.3, 30.5),
        new poly2tri.Point(15.8, 30.8),
        new poly2tri.Point(17.6, 30.8),
        new poly2tri.Point(19.3, 30.8),
        new poly2tri.Point(20.8, 30.5),
        new poly2tri.Point(22.1, 29.8),
        new poly2tri.Point(23.3, 29.1),
        new poly2tri.Point(24.3, 28.2),
        new poly2tri.Point(25.1, 27.0),
        new poly2tri.Point(25.8, 25.9),
        new poly2tri.Point(26.4, 24.6),
        new poly2tri.Point(26.7, 23.2),
        new poly2tri.Point(27.1, 21.8),
        new poly2tri.Point(27.2, 20.3),
        new poly2tri.Point(27.2, 18.8),
        new poly2tri.Point(27.2, 17.3),
        new poly2tri.Point(27.1, 15.8),
        new poly2tri.Point(26.7, 14.3),
        new poly2tri.Point(26.4, 12.8),
        new poly2tri.Point(25.8, 11.5),
        new poly2tri.Point(25.1, 10.4),
        new poly2tri.Point(24.3, 9.2),
        new poly2tri.Point(23.3, 8.3),
        new poly2tri.Point(22.1, 7.6),
        new poly2tri.Point(20.8, 6.9),
        new poly2tri.Point(19.3, 6.6),
        new poly2tri.Point(17.6, 6.6),
        new poly2tri.Point(15.8, 6.6),
        new poly2tri.Point(14.3, 6.9),
        new poly2tri.Point(13.1, 7.6),
        new poly2tri.Point(11.8, 8.3),
        new poly2tri.Point(10.8, 9.2),
        new poly2tri.Point(10.1, 10.4),
        new poly2tri.Point(9.3, 11.5),
        new poly2tri.Point(8.7, 12.8),
        new poly2tri.Point(8.4, 14.3),
        new poly2tri.Point(8.0, 15.8),
        new poly2tri.Point(7.9, 17.3),
        new poly2tri.Point(7.9, 18.8),
        new poly2tri.Point(7.9, 20.3),
        new poly2tri.Point(8.0, 21.8)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole, fontSize, positionX, positionY);

    swctx.addHole(hole);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.P = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(16.1, 0.0),
        new poly2tri.Point(18.3, 0.0),
        new poly2tri.Point(20.2, 0.3),
        new poly2tri.Point(21.8, 1.0),
        new poly2tri.Point(23.4, 1.6),
        new poly2tri.Point(24.6, 2.5),
        new poly2tri.Point(25.6, 3.6),
        new poly2tri.Point(26.6, 4.6),
        new poly2tri.Point(27.3, 5.8),
        new poly2tri.Point(27.8, 7.2),
        new poly2tri.Point(28.2, 8.6),
        new poly2tri.Point(28.4, 10.0),
        new poly2tri.Point(28.4, 11.5),
        new poly2tri.Point(28.4, 12.9),
        new poly2tri.Point(28.2, 14.3),
        new poly2tri.Point(27.8, 15.7),
        new poly2tri.Point(27.3, 17.1),
        new poly2tri.Point(26.6, 18.3),
        new poly2tri.Point(25.6, 19.4),
        new poly2tri.Point(24.6, 20.4),
        new poly2tri.Point(23.4, 21.3),
        new poly2tri.Point(21.8, 21.9),
        new poly2tri.Point(20.2, 22.6),
        new poly2tri.Point(18.3, 22.9),
        new poly2tri.Point(16.1, 22.9),
        new poly2tri.Point(7.8, 22.9),
        new poly2tri.Point(7.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0),
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole = [
        new poly2tri.Point(13.9, 16.8),
        new poly2tri.Point(14.8, 16.8),
        new poly2tri.Point(15.7, 16.7),
        new poly2tri.Point(16.5, 16.6),
        new poly2tri.Point(17.4, 16.5),
        new poly2tri.Point(18.1, 16.2),
        new poly2tri.Point(18.8, 15.8),
        new poly2tri.Point(19.4, 15.4),
        new poly2tri.Point(19.9, 14.9),
        new poly2tri.Point(20.3, 14.2),
        new poly2tri.Point(20.7, 13.5),
        new poly2tri.Point(20.8, 12.6),
        new poly2tri.Point(20.8, 11.5),
        new poly2tri.Point(20.8, 10.3),
        new poly2tri.Point(20.7, 9.4),
        new poly2tri.Point(20.3, 8.7),
        new poly2tri.Point(19.9, 8.0),
        new poly2tri.Point(19.4, 7.5),
        new poly2tri.Point(18.8, 7.1),
        new poly2tri.Point(18.1, 6.7),
        new poly2tri.Point(17.4, 6.4),
        new poly2tri.Point(16.5, 6.3),
        new poly2tri.Point(15.7, 6.2),
        new poly2tri.Point(14.8, 6.1),
        new poly2tri.Point(13.9, 6.1),
        new poly2tri.Point(7.8, 6.1),
        new poly2tri.Point(7.8, 16.8)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole, fontSize, positionX, positionY);

    swctx.addHole(hole);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.Q = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(26.2, 35.3),
        new poly2tri.Point(23.8, 36.7),
        new poly2tri.Point(21.0, 37.3),
        new poly2tri.Point(17.6, 37.3),
        new poly2tri.Point(14.8, 37.3),
        new poly2tri.Point(12.4, 36.9),
        new poly2tri.Point(10.2, 35.9),
        new poly2tri.Point(8.0, 35.0),
        new poly2tri.Point(6.1, 33.7),
        new poly2tri.Point(4.6, 32.0),
        new poly2tri.Point(3.1, 30.3),
        new poly2tri.Point(2.0, 28.4),
        new poly2tri.Point(1.2, 26.1),
        new poly2tri.Point(0.4, 23.9),
        new poly2tri.Point(0.0, 21.4),
        new poly2tri.Point(0.0, 18.8),
        new poly2tri.Point(0.0, 16.2),
        new poly2tri.Point(0.4, 13.7),
        new poly2tri.Point(1.2, 11.4),
        new poly2tri.Point(2.0, 9.1),
        new poly2tri.Point(3.1, 7.1),
        new poly2tri.Point(4.6, 5.4),
        new poly2tri.Point(6.1, 3.8),
        new poly2tri.Point(8.0, 2.4),
        new poly2tri.Point(10.2, 1.4),
        new poly2tri.Point(12.4, 0.5),
        new poly2tri.Point(14.8, 0.0),
        new poly2tri.Point(17.6, 0.0),
        new poly2tri.Point(20.3, 0.0),
        new poly2tri.Point(22.8, 0.5),
        new poly2tri.Point(25.0, 1.4),
        new poly2tri.Point(27.1, 2.4),
        new poly2tri.Point(29.0, 3.8),
        new poly2tri.Point(30.5, 5.4),
        new poly2tri.Point(32.0, 7.1),
        new poly2tri.Point(33.1, 9.1),
        new poly2tri.Point(33.9, 11.4),
        new poly2tri.Point(34.7, 13.7),
        new poly2tri.Point(35.1, 16.2),
        new poly2tri.Point(35.1, 18.8),
        new poly2tri.Point(35.1, 21.4),
        new poly2tri.Point(34.7, 23.9),
        new poly2tri.Point(33.9, 26.1),
        new poly2tri.Point(33.1, 28.3),
        new poly2tri.Point(32.0, 30.3),
        new poly2tri.Point(30.5, 32.0),
        new poly2tri.Point(34.9, 36.0),
        new poly2tri.Point(31.2, 39.8)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole = [
        new poly2tri.Point(25.1, 27.0),
        new poly2tri.Point(25.7, 26.1),
        new poly2tri.Point(26.2, 25.0),
        new poly2tri.Point(26.6, 23.7),
        new poly2tri.Point(27.1, 22.4),
        new poly2tri.Point(27.2, 20.8),
        new poly2tri.Point(27.2, 18.8),
        new poly2tri.Point(27.2, 17.3),
        new poly2tri.Point(27.1, 15.8),
        new poly2tri.Point(26.7, 14.3),
        new poly2tri.Point(26.4, 12.8),
        new poly2tri.Point(25.8, 11.5),
        new poly2tri.Point(25.1, 10.4),
        new poly2tri.Point(24.3, 9.2),
        new poly2tri.Point(23.3, 8.3),
        new poly2tri.Point(22.1, 7.6),
        new poly2tri.Point(20.8, 6.9),
        new poly2tri.Point(19.3, 6.6),
        new poly2tri.Point(17.6, 6.6),
        new poly2tri.Point(15.8, 6.6),
        new poly2tri.Point(14.3, 6.9),
        new poly2tri.Point(13.1, 7.6),
        new poly2tri.Point(11.8, 8.3),
        new poly2tri.Point(10.8, 9.2),
        new poly2tri.Point(10.1, 10.4),
        new poly2tri.Point(9.3, 11.5),
        new poly2tri.Point(8.7, 12.8),
        new poly2tri.Point(8.4, 14.3),
        new poly2tri.Point(8.0, 15.7),
        new poly2tri.Point(7.9, 17.3),
        new poly2tri.Point(7.9, 18.8),
        new poly2tri.Point(7.9, 20.3),
        new poly2tri.Point(8.0, 21.8),
        new poly2tri.Point(8.4, 23.2),
        new poly2tri.Point(8.7, 24.6),
        new poly2tri.Point(9.3, 25.9),
        new poly2tri.Point(10.1, 27.0),
        new poly2tri.Point(10.8, 28.1),
        new poly2tri.Point(11.8, 29.0),
        new poly2tri.Point(13.1, 29.7),
        new poly2tri.Point(14.3, 30.4),
        new poly2tri.Point(15.8, 30.8),
        new poly2tri.Point(17.6, 30.8),
        new poly2tri.Point(18.4, 30.8),
        new poly2tri.Point(19.0, 30.7),
        new poly2tri.Point(19.5, 30.7),
        new poly2tri.Point(19.9, 30.6),
        new poly2tri.Point(20.3, 30.5),
        new poly2tri.Point(20.7, 30.3),
        new poly2tri.Point(17.4, 27.2),
        new poly2tri.Point(21.0, 23.3)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole, fontSize, positionX, positionY);

    swctx.addHole(hole);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.R = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(19.2, 0.0),
        new poly2tri.Point(20.8, 0.0),
        new poly2tri.Point(22.3, 0.3),
        new poly2tri.Point(23.6, 0.8),
        new poly2tri.Point(24.9, 1.3),
        new poly2tri.Point(26.0, 2.0),
        new poly2tri.Point(26.9, 2.9),
        new poly2tri.Point(27.8, 3.8),
        new poly2tri.Point(28.5, 4.8),
        new poly2tri.Point(29.0, 6.0),
        new poly2tri.Point(29.5, 7.2),
        new poly2tri.Point(29.7, 8.5),
        new poly2tri.Point(29.7, 9.9),
        new poly2tri.Point(29.7, 12.0),
        new poly2tri.Point(29.3, 13.8),
        new poly2tri.Point(28.4, 15.3),
        new poly2tri.Point(27.5, 16.8),
        new poly2tri.Point(26.0, 18.0),
        new poly2tri.Point(24.0, 18.8),
        new poly2tri.Point(24.0, 18.9),
        new poly2tri.Point(25.0, 19.2),
        new poly2tri.Point(25.8, 19.6),
        new poly2tri.Point(26.4, 20.1),
        new poly2tri.Point(27.1, 20.7),
        new poly2tri.Point(27.6, 21.3),
        new poly2tri.Point(28.0, 22.1),
        new poly2tri.Point(28.4, 22.8),
        new poly2tri.Point(28.7, 23.7),
        new poly2tri.Point(28.9, 24.6),
        new poly2tri.Point(29.1, 25.5),
        new poly2tri.Point(29.2, 26.4),
        new poly2tri.Point(29.2, 27.2),
        new poly2tri.Point(29.3, 27.8),
        new poly2tri.Point(29.3, 28.5),
        new poly2tri.Point(29.3, 29.2),
        new poly2tri.Point(29.4, 30.0),
        new poly2tri.Point(29.4, 30.8),
        new poly2tri.Point(29.5, 31.6),
        new poly2tri.Point(29.6, 32.4),
        new poly2tri.Point(29.7, 33.2),
        new poly2tri.Point(29.9, 33.9),
        new poly2tri.Point(30.1, 34.6),
        new poly2tri.Point(30.4, 35.2),
        new poly2tri.Point(30.8, 35.7),
        new poly2tri.Point(22.9, 35.7),
        new poly2tri.Point(22.5, 34.6),
        new poly2tri.Point(22.2, 33.2),
        new poly2tri.Point(22.1, 31.7),
        new poly2tri.Point(22.0, 30.1),
        new poly2tri.Point(21.8, 28.6),
        new poly2tri.Point(21.6, 27.2),
        new poly2tri.Point(21.4, 25.3),
        new poly2tri.Point(20.8, 23.9),
        new poly2tri.Point(19.9, 23.1),
        new poly2tri.Point(19.1, 22.2),
        new poly2tri.Point(17.7, 21.8),
        new poly2tri.Point(15.7, 21.8),
        new poly2tri.Point(7.8, 21.8),
        new poly2tri.Point(7.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 0.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    var hole = [
        new poly2tri.Point(16.4, 16.2),
        new poly2tri.Point(18.2, 16.2),
        new poly2tri.Point(19.6, 15.8),
        new poly2tri.Point(20.5, 15.0),
        new poly2tri.Point(21.4, 14.2),
        new poly2tri.Point(21.8, 12.9),
        new poly2tri.Point(21.8, 11.1),
        new poly2tri.Point(21.8, 9.3),
        new poly2tri.Point(21.4, 8.1),
        new poly2tri.Point(20.5, 7.3),
        new poly2tri.Point(19.6, 6.5),
        new poly2tri.Point(18.2, 6.1),
        new poly2tri.Point(16.4, 6.1),
        new poly2tri.Point(7.8, 6.1),
        new poly2tri.Point(7.8, 16.2)
    ];

    TriangulatedHelvetica.sizeAndPosition(hole, fontSize, positionX, positionY);

    swctx.addHole(hole);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.S = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(8.3, 27.8),
        new poly2tri.Point(8.7, 28.6),
        new poly2tri.Point(9.3, 29.3),
        new poly2tri.Point(10.0, 29.8),
        new poly2tri.Point(10.7, 30.3),
        new poly2tri.Point(11.5, 30.7),
        new poly2tri.Point(12.5, 30.9),
        new poly2tri.Point(13.5, 31.2),
        new poly2tri.Point(14.5, 31.3),
        new poly2tri.Point(15.5, 31.3),
        new poly2tri.Point(16.2, 31.3),
        new poly2tri.Point(17.0, 31.2),
        new poly2tri.Point(17.8, 31.1),
        new poly2tri.Point(18.6, 31.0),
        new poly2tri.Point(19.3, 30.8),
        new poly2tri.Point(20.0, 30.4),
        new poly2tri.Point(20.7, 30.1),
        new poly2tri.Point(21.3, 29.7),
        new poly2tri.Point(21.8, 29.1),
        new poly2tri.Point(22.2, 28.5),
        new poly2tri.Point(22.5, 27.8),
        new poly2tri.Point(22.5, 26.8),
        new poly2tri.Point(22.5, 25.9),
        new poly2tri.Point(22.1, 25.1),
        new poly2tri.Point(21.5, 24.5),
        new poly2tri.Point(20.9, 23.9),
        new poly2tri.Point(20.1, 23.4),
        new poly2tri.Point(19.1, 23.0),
        new poly2tri.Point(18.1, 22.6),
        new poly2tri.Point(17.0, 22.2),
        new poly2tri.Point(15.7, 21.9),
        new poly2tri.Point(14.4, 21.6),
        new poly2tri.Point(13.2, 21.3),
        new poly2tri.Point(11.9, 20.9),
        new poly2tri.Point(10.5, 20.6),
        new poly2tri.Point(9.2, 20.2),
        new poly2tri.Point(8.0, 19.7),
        new poly2tri.Point(6.7, 19.2),
        new poly2tri.Point(5.6, 18.6),
        new poly2tri.Point(4.6, 17.8),
        new poly2tri.Point(3.6, 17.1),
        new poly2tri.Point(2.7, 16.1),
        new poly2tri.Point(2.1, 15.0),
        new poly2tri.Point(1.5, 13.8),
        new poly2tri.Point(1.2, 12.4),
        new poly2tri.Point(1.2, 10.8),
        new poly2tri.Point(1.2, 9.0),
        new poly2tri.Point(1.6, 7.4),
        new poly2tri.Point(2.4, 6.0),
        new poly2tri.Point(3.2, 4.7),
        new poly2tri.Point(4.2, 3.5),
        new poly2tri.Point(5.5, 2.6),
        new poly2tri.Point(6.7, 1.8),
        new poly2tri.Point(8.2, 1.1),
        new poly2tri.Point(9.8, 0.6),
        new poly2tri.Point(11.4, 0.2),
        new poly2tri.Point(13.0, 0.0),
        new poly2tri.Point(14.6, 0.0),
        new poly2tri.Point(16.4, 0.0),
        new poly2tri.Point(18.2, 0.2),
        new poly2tri.Point(19.9, 0.6),
        new poly2tri.Point(21.6, 1.0),
        new poly2tri.Point(23.2, 1.7),
        new poly2tri.Point(24.5, 2.6),
        new poly2tri.Point(25.8, 3.6),
        new poly2tri.Point(26.9, 4.8),
        new poly2tri.Point(27.7, 6.2),
        new poly2tri.Point(28.5, 7.7),
        new poly2tri.Point(28.9, 9.4),
        new poly2tri.Point(28.9, 11.5),
        new poly2tri.Point(21.3, 11.5),
        new poly2tri.Point(21.2, 10.4),
        new poly2tri.Point(21.0, 9.5),
        new poly2tri.Point(20.6, 8.8),
        new poly2tri.Point(20.2, 8.1),
        new poly2tri.Point(19.7, 7.6),
        new poly2tri.Point(19.1, 7.2),
        new poly2tri.Point(18.4, 6.8),
        new poly2tri.Point(17.7, 6.5),
        new poly2tri.Point(16.9, 6.3),
        new poly2tri.Point(16.1, 6.2),
        new poly2tri.Point(15.2, 6.1),
        new poly2tri.Point(14.2, 6.1),
        new poly2tri.Point(13.6, 6.1),
        new poly2tri.Point(12.9, 6.2),
        new poly2tri.Point(12.3, 6.3),
        new poly2tri.Point(11.7, 6.4),
        new poly2tri.Point(11.1, 6.7),
        new poly2tri.Point(10.6, 7.0),
        new poly2tri.Point(10.1, 7.3),
        new poly2tri.Point(9.6, 7.8),
        new poly2tri.Point(9.3, 8.2),
        new poly2tri.Point(9.0, 8.8),
        new poly2tri.Point(8.8, 9.4),
        new poly2tri.Point(8.8, 10.1),
        new poly2tri.Point(8.8, 10.8),
        new poly2tri.Point(8.9, 11.4),
        new poly2tri.Point(9.2, 11.8),
        new poly2tri.Point(9.5, 12.3),
        new poly2tri.Point(10.0, 12.7),
        new poly2tri.Point(10.8, 13.0),
        new poly2tri.Point(11.6, 13.4),
        new poly2tri.Point(12.6, 13.8),
        new poly2tri.Point(14.0, 14.1),
        new poly2tri.Point(15.4, 14.5),
        new poly2tri.Point(17.2, 15.0),
        new poly2tri.Point(19.5, 15.5),
        new poly2tri.Point(20.1, 15.7),
        new poly2tri.Point(21.0, 15.9),
        new poly2tri.Point(22.2, 16.3),
        new poly2tri.Point(23.4, 16.6),
        new poly2tri.Point(24.6, 17.2),
        new poly2tri.Point(25.8, 17.9),
        new poly2tri.Point(26.9, 18.7),
        new poly2tri.Point(27.9, 19.7),
        new poly2tri.Point(28.8, 21.0),
        new poly2tri.Point(29.6, 22.3),
        new poly2tri.Point(30.1, 23.9),
        new poly2tri.Point(30.1, 25.9),
        new poly2tri.Point(30.1, 27.6),
        new poly2tri.Point(29.7, 29.1),
        new poly2tri.Point(29.1, 30.5),
        new poly2tri.Point(28.5, 31.9),
        new poly2tri.Point(27.5, 33.1),
        new poly2tri.Point(26.3, 34.1),
        new poly2tri.Point(25.0, 35.1),
        new poly2tri.Point(23.5, 35.9),
        new poly2tri.Point(21.6, 36.5),
        new poly2tri.Point(19.8, 37.1),
        new poly2tri.Point(17.6, 37.3),
        new poly2tri.Point(15.2, 37.3),
        new poly2tri.Point(13.2, 37.3),
        new poly2tri.Point(11.3, 37.1),
        new poly2tri.Point(9.5, 36.6),
        new poly2tri.Point(7.6, 36.1),
        new poly2tri.Point(6.0, 35.4),
        new poly2tri.Point(4.6, 34.3),
        new poly2tri.Point(3.2, 33.3),
        new poly2tri.Point(2.0, 32.0),
        new poly2tri.Point(1.2, 30.4),
        new poly2tri.Point(0.4, 28.8),
        new poly2tri.Point(-0.0, 26.9),
        new poly2tri.Point(0.0, 24.7),
        new poly2tri.Point(7.6, 24.7),
        new poly2tri.Point(7.6, 25.9),
        new poly2tri.Point(7.8, 26.9)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.T = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(0.0, 6.6),
        new poly2tri.Point(0.0, 0.0),
        new poly2tri.Point(29.2, 0.0),
        new poly2tri.Point(29.2, 6.6),
        new poly2tri.Point(18.6, 6.6),
        new poly2tri.Point(18.6, 35.7),
        new poly2tri.Point(10.7, 35.7),
        new poly2tri.Point(10.7, 6.6)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.U = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(26.4, 33.0),
        new poly2tri.Point(23.7, 35.3),
        new poly2tri.Point(20.0, 36.5),
        new poly2tri.Point(15.2, 36.5),
        new poly2tri.Point(10.4, 36.5),
        new poly2tri.Point(6.6, 35.3),
        new poly2tri.Point(4.0, 33.0),
        new poly2tri.Point(1.3, 30.7),
        new poly2tri.Point(0.0, 27.1),
        new poly2tri.Point(0.0, 22.2),
        new poly2tri.Point(0.0, 0.0),
        new poly2tri.Point(7.9, 0.0),
        new poly2tri.Point(7.9, 22.2),
        new poly2tri.Point(7.9, 23.2),
        new poly2tri.Point(7.9, 24.1),
        new poly2tri.Point(8.1, 25.1),
        new poly2tri.Point(8.3, 26.0),
        new poly2tri.Point(8.6, 26.8),
        new poly2tri.Point(9.2, 27.5),
        new poly2tri.Point(9.7, 28.2),
        new poly2tri.Point(10.4, 28.8),
        new poly2tri.Point(11.4, 29.3),
        new poly2tri.Point(12.3, 29.7),
        new poly2tri.Point(13.6, 30.0),
        new poly2tri.Point(15.2, 30.0),
        new poly2tri.Point(18.0, 30.0),
        new poly2tri.Point(19.9, 29.3),
        new poly2tri.Point(21.0, 28.1),
        new poly2tri.Point(22.1, 26.8),
        new poly2tri.Point(22.6, 24.9),
        new poly2tri.Point(22.6, 22.2),
        new poly2tri.Point(22.6, 0.0),
        new poly2tri.Point(30.5, 0.0),
        new poly2tri.Point(30.5, 22.2),
        new poly2tri.Point(30.5, 27.0),
        new poly2tri.Point(29.1, 30.6)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.V = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(11.6, 35.7),
        new poly2tri.Point(0.0, 0.0),
        new poly2tri.Point(8.1, 0.0),
        new poly2tri.Point(16.0, 25.1),
        new poly2tri.Point(16.1, 25.1),
        new poly2tri.Point(24.1, 0.0),
        new poly2tri.Point(32.2, 0.0),
        new poly2tri.Point(20.4, 35.7)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.W = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(29.5, 35.7),
        new poly2tri.Point(23.5, 11.4),
        new poly2tri.Point(23.4, 11.4),
        new poly2tri.Point(17.4, 35.7),
        new poly2tri.Point(9.5, 35.7),
        new poly2tri.Point(0.0, 0.0),
        new poly2tri.Point(7.9, 0.0),
        new poly2tri.Point(13.5, 24.3),
        new poly2tri.Point(13.6, 24.3),
        new poly2tri.Point(19.8, 0.0),
        new poly2tri.Point(27.1, 0.0),
        new poly2tri.Point(33.2, 24.6),
        new poly2tri.Point(33.4, 24.6),
        new poly2tri.Point(39.2, 0.0),
        new poly2tri.Point(46.9, 0.0),
        new poly2tri.Point(37.3, 35.7)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.X = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(1.0, 0.0),
        new poly2tri.Point(10.0, 0.0),
        new poly2tri.Point(17.0, 11.4),
        new poly2tri.Point(24.3, 0.0),
        new poly2tri.Point(32.9, 0.0),
        new poly2tri.Point(21.5, 17.1),
        new poly2tri.Point(33.9, 35.7),
        new poly2tri.Point(24.5, 35.7),
        new poly2tri.Point(16.8, 23.4),
        new poly2tri.Point(8.8, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(12.5, 17.0)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.Y = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(0.0, 0.0),
        new poly2tri.Point(8.8, 0.0),
        new poly2tri.Point(17.1, 14.1),
        new poly2tri.Point(25.4, 0.0),
        new poly2tri.Point(34.2, 0.0),
        new poly2tri.Point(20.9, 22.0),
        new poly2tri.Point(20.9, 35.7),
        new poly2tri.Point(13.1, 35.7),
        new poly2tri.Point(13.1, 21.8)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.Z = function(fontSize, positionX, positionY) {
    var contour = [
        new poly2tri.Point(19.1, 6.6),
        new poly2tri.Point(1.5, 6.6),
        new poly2tri.Point(1.5, 0.0),
        new poly2tri.Point(29.6, 0.0),
        new poly2tri.Point(29.6, 6.2),
        new poly2tri.Point(10.5, 29.1),
        new poly2tri.Point(30.1, 29.1),
        new poly2tri.Point(30.1, 35.7),
        new poly2tri.Point(0.0, 35.7),
        new poly2tri.Point(0.0, 29.5)
    ];

    TriangulatedHelvetica.sizeAndPosition(contour, fontSize, positionX, positionY);

    var swctx = new poly2tri.SweepContext(contour);

    return swctx.triangulate().getTriangles();
}

TriangulatedHelvetica.sizeAndPosition = function(pointArray, fontSize, positionX, positionY) {
    for (var i = 0; i < pointArray.length; i++) {
        pointArray[i].x = positionX + (pointArray[i].x * fontSize);
        pointArray[i].y = positionY + (pointArray[i].y * fontSize);
    }
}