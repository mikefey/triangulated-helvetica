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
ArrayList<Tween> tweens;

void setup() {
    onResize();

    physics = new toxi.physics2d.VerletPhysics2D();
    physics.addBehavior(new toxi.physics2d.behaviors.GravityBehavior(new toxi.geom.Vec2D(0, 0.2)));
    physics.setWorldBounds(new toxi.geom.Rect(0,0,width,height));

    tweens = new ArrayList<Tween>();
    letters = new ArrayList<Triangle[]>();
    colors = new ArrayList<ArrayList<color>>();
    particles = new ArrayList<ArrayList<LetterParticle>>();

}

void setupExample() {
    fontSize = 5;
    lettersToRender = new String[3];
    lettersToRender[0] = 'H';
    lettersToRender[1] = 'E';
    lettersToRender[2] = 'Y';

    for (var i = 0; i < lettersToRender.length; i++) {
        addLetter(lettersToRender[i]);
    }
}

void addLetter(String letter) {
    Letter let = new Letter(letter, fontSize, leftPos, 10 + (numLines * (lineHeight + 10)));
    let.setColor(color(205, 120, 216));
    let.showPoints = false;
    let.makeSpring = false;
    let.addPoints(physics);
    letters.add(let);

    leftPos += letterSpacing + let.letterWidth;

    if (oscillating) {
        let.oscillate(1 + fontSize);
    }
}

void explodeLetters() {
    for (int i = 0; i < letters.size(); i++) {
        for (int ii = 0; ii < letters.get(i).trianglePointGroups.size(); ii++) {

            toxi.physics2d.VerletParticle2D firstParticle = letters.get(i).trianglePointGroups.get(ii).get(0).tlParticle;
            int randXpos = random(firstParticle.x - random(20), firstParticle.x + random(20));
            int randYpos = random(firstParticle.y - random(20), firstParticle.y + random(20));
            int randNegXint = ceil(random(0, 2));
            if (randNegXint == 1) {
                randXpos = randXpos * -1;
            }
            int randNegYint = ceil(random(0, 2));
            if (randNegYint == 1) {
                randYpos = randYpos * -1;
            }

            for (int iii = 0; iii < letters.get(i).trianglePointGroups.get(ii).size(); iii++) {
                toxi.physics2d.VerletParticle2D currentParticle = letters.get(i).trianglePointGroups.get(ii).get(iii).tlParticle;

                Tween positionXTween = new Tween(currentParticle, 'x', Tween.regularEaseOut, currentParticle.x, currentParticle.x + randXpos, .5);
                Tween positionYTween = new Tween(currentParticle, 'y', Tween.regularEaseOut, currentParticle.y, currentParticle.y + randYpos, .5);
                tweens.add(positionXTween);
                tweens.add(positionYTween);
                //currentParticle.unlock();
                //console.log(positionTween);
                positionXTween.start();
                positionYTween.start();
            }
        }
    }
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

    for (int i = 0; i < tweens.size(); i++) {
        tweens.get(i).tick();
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
    size($(window).width(), $(window).height() - 175, P2D);
}