int fontSize = 3;
int cursorIncrement = 0;
int minLeftPos = 20;
int leftPos = 20;
int lineHeight = (fontSize * 36);
int numLines;
int letterSpacing = 10;
toxi.physics2d.VerletPhysics2D physics;
ArrayList<Letter> letters;
boolean mouseIsDown = true;
LetterPoint activePoint;
TriangulatedHelvetica helvetica;
boolean pointsDraggable = true;
boolean showOutlines = false;
boolean oscillating = false;
boolean dragApart = true;
boolean unlocked = false;
String[] lettersToRender;


void setup() {
    onResize();

    physics = new toxi.physics2d.VerletPhysics2D();
    physics.addBehavior(new toxi.physics2d.behaviors.GravityBehavior(new toxi.geom.Vec2D(0, 0.2)));
    physics.setWorldBounds(new toxi.geom.Rect(0,0,width,height));

    letters = new ArrayList<Triangle[]>();
    colors = new ArrayList<ArrayList<color>>();
    particles = new ArrayList<ArrayList<LetterParticle>>();

}

void setupExample() {
    fontSize = 5;
    if ($('body').hasClass('mobile')) {
        fontSize = 3;
    }
    lettersToRender = new String[3];
    lettersToRender[0] = 'D';
    lettersToRender[1] = 'E';
    lettersToRender[2] = 'F';

    for (var i = 0; i < lettersToRender.length; i++) {
        addLetter(lettersToRender[i]);
    }
}

void addLetter(String letter) {
    Letter let = new Letter(letter, fontSize, leftPos, 10 + (numLines * (lineHeight + 10)));
    let.setColor(color(16, 219, 94));
    let.addPoints(physics);
    let.showPoints = true;
    letters.add(let);

    leftPos += letterSpacing + let.letterWidth;

    if (oscillating) {
        let.oscillate(1 + fontSize);
    }
}

void resetLetters() {
    leftPos = 20;
    tweens = new ArrayList<Tween>();
    letters = new ArrayList<Triangle[]>();
    colors = new ArrayList<ArrayList<color>>();
    particles = new ArrayList<ArrayList<LetterParticle>>();

    setupExample();

    exploded = false;
}

void addLine() {
    if (leftPos > minLeftPos) {
        leftPos = minLeftPos;
        numLines++;
    }
}

void removeLine() {
    numLines--;
}

void oscillateLetters() {
    for (int i = 0; i < letters.size(); i++) {
        letters.get(i).oscillate(2 + fontSize);
    }
}

void stopOscillation() {
    for (int i = 0; i < letters.size(); i++) {
        letters.get(i).stopOscillation();
    }
}

void removeLetter() {
    if (letters.size() > 0) {
        if (leftPos > minLeftPos) {
            leftPos -= (letterSpacing + letters.get(letters.size() - 1).letterWidth);
        } else {
            numLines--;
            leftPos = letters.get(letters.size() - 2).position.x + letters.get(letters.size() - 2).letterWidth + letterSpacing;
        }
    }

    letters.remove(letters.size() - 1);
}

void mouseMoved() {
    $('body').css({'cursor' : 'default'});

    for (int i = 0; i < letters.size(); i++) {
        if (letters.get(i).pointHitTest() != null) {
            $('body').css({'cursor' : 'pointer'});
        }
    }
}

void mousePressed() {
    for (int i = 0; i < letters.size(); i++) {
        if (letters.get(i).pointHitTest() != null) {
            activePoint = letters.get(i).pointHitTest();
        }
    }

    if (activePoint != null) {
        if (dragApart) {
            if (!unlocked) {
                unlocked = true;
                for (int i = 0; i < activePoint.parentLetter.trianglePointGroups.get(activePoint.parentArrayIteration).size(); i++) {
                    if(activePoint && activePoint.parentLetter) {
                        toxi.physics2d.VerletParticle2D currentParticle = activePoint.parentLetter.trianglePointGroups.get(activePoint.parentArrayIteration).get(i).tlParticle;
                        activePoint.parentLetter.trianglePointGroups.get(activePoint.parentArrayIteration).get(i).tlParticle.unlock();
                        currentParticle.force.x = 0;
                        currentParticle.force.y = 0;
                    }

                }
            }
        } else {
            activePoint.tlParticle.unlock();
        }
    }
}

void mouseDragged() {

}

void mouseReleased() {
    unlocked = false;
    activePoint = null;
}

void draw() {
    background(33, 33, 33);
    physics.update();

    if (activePoint != null) {
        activePoint.tlParticle.lock();
        activePoint.tlParticle.x = mouseX;
        activePoint.tlParticle.y = mouseY;
        activePoint.tlParticle.unlock();
    }

    for (int i = 0; i < letters.size(); i++) {
        letters.get(i).draw();
    }

    /* cursorIncrement++;
    if (cursorIncrement > 30) {
        cursorIncrement = 0;
    }

    if (cursorIncrement < 15) {
        fill(16, 219, 94);
        rect(leftPos, (numLines * (lineHeight + 10)) + lineHeight + 10, (35 * fontSize), (2 * fontSize));
    } */
}

void onResize() {
    size($(window).width(), $(window).height() - 265, P2D);
}