class LetterPoint {

    PVector location;
    float mass = 3;
    float angle = 0;
    float aVelocity = 0;
    float aAcceleration = 0;
    toxi.physics2d.VerletParticle2D tlParticle;
    int particleSize;
    boolean active = true;
    float aVelocity = 0;
    float aAcceleration = 0.001;
    PVector originalPosition;
    int newX;
    int newY;
    int angle = 0;
    int rotatedX = 0;
    int rotatedY = 0;
    int oscillationAmount = 5;
    boolean oscillating = false;
    Letter parent;
    int iteration;
    int parentArrayIteration;
    Letter parentLetter;
    boolean visible = true;
    boolean removed = false;

    LetterPoint(PVector loc, int ps, int it, int pAt, Letter pL) {
        originalPosition = loc;
        tlParticle = new toxi.physics2d.VerletParticle2D(loc);
        tlParticle.lock();
        particleSize = mass * 3 * ps;

        if (particleSize > 15) {
            particleSize = 15;
        }

        iteration = it;
        parentArrayIteration = pAt;
        parentLetter = pL;
    }

    void oscillate(oA) {
        if (oA) {
            oscillationAmount = oA;
        }

        tlParticle.x = random(originalPosition.x - oscillationAmount, originalPosition.x + oscillationAmount);
        tlParticle.y = random(originalPosition.y - oscillationAmount, originalPosition.y + oscillationAmount);
        oscillating = true;
    }

    void stopOscillating() {
        tlParticle.x = originalPosition.x;
        tlParticle.y = originalPosition.y;
        oscillating = false;
    }

    void update() {

    }

    void draw() {
        if (oscillating && active) {
            angle++;
            angle = (angle) * (Math.PI / 180);
            rotatedX = Math.cos(angle) * (tlParticle.x - originalPosition.x) - Math.sin(angle) * (tlParticle.y-originalPosition.y) + originalPosition.x;
            rotatedY = Math.sin(angle) * (tlParticle.x - originalPosition.x) + Math.cos(angle) * (tlParticle.y - originalPosition.y) + originalPosition.y;

            tlParticle.x = rotatedX;
            tlParticle.y = rotatedY;

            parentLetter.triangles[parentArrayIteration].points_[iteration].x = tlParticle.x;
            parentLetter.triangles[parentArrayIteration].points_[iteration].y = tlParticle.y;
        }

        fill(204, 204, 204);
        pushMatrix();
        translate(tlParticle.x, tlParticle.y);
        if (visible) {
            ellipse(0, 0, particleSize, particleSize);
        }
        popMatrix();

        if (tlParticle.y == height && !removed) {
            removed = true;
            parentLetter.removeLetterPoint(this);
            this = null;
        }
    }

}