class Letter {

    int fontSize = 1;
    Triangle[] triangles;
    ArrayList<color> triangleColors;
    ArrayList<LetterPoint> letterPoints;
    ArrayList<ArrayList<LetterPoint>> trianglePointGroups;
    PVector position;
    boolean showOutlines = false;
    boolean showPoints = true;
    boolean makeSpring = true;
    int letterWidth;

    Letter(String letter, int fontSize, int x, int y) {
        fontSize = fontSize;
        position = new PVector(x, y);
        if (letter != " ") {
            triangles = TriangulatedHelvetica[letter](fontSize, x, y);
        } else {
            triangles = new Triangle[0];
        }

        letterPoints = new ArrayList<LetterPoint>();
        trianglePointGroups = new ArrayList<ArrayList<LetterPoint>>();
        triangleColors = createRandomColorArrayList(triangles.length);

        letterWidth = TriangulatedHelvetica.getLetterWidth(String(letter)) * fontSize;
    }

    void addPoints(toxi.physics2d.VerletPhysics2D phys) {

        for (int i = 0; i < triangles.length; i++) {

            ArrayList<LetterPoint> tlp = new ArrayList<LetterPoint>();

            for (int p = 0; p < triangles[i].points_.length; p++) {
                PVector position = new toxi.geom.Vec2D(triangles[i].points_[p].x, triangles[i].points_[p].y);
                LetterPoint letterPoint = new LetterPoint(position, fontSize, p, i, this);

                if(checkForDuplicatePoint(position)) {
                    //letterPoint.active = false;
                }

                if (!showPoints) {
                    letterPoint.visible = false;
                }

                phys.addParticle(letterPoint.tlParticle);
                //letterPoint.tlParticle.lock();
                tlp.add(letterPoint);
                letterPoints.add(letterPoint);
            }

            trianglePointGroups.add(tlp);
        }

        if (makeSpring) {
            createSpring(phys);
        }
    }

    void hidePoints() {
        for (int i = 0; i < letterPoints.size(); i++) {
            letterPoints.get(i).visible = false;
        }
    }

    void createSpring(toxi.physics2d.VerletPhysics2D phys) {
        for (int i = 0; i < trianglePointGroups.size(); i++) {
            for (int p = 0; p < trianglePointGroups.get(i).size(); p++) {
                if (p > 0) {
                    // First we need a reference to the previous particle.
                    toxi.physics2d.VerletParticle2D previous = trianglePointGroups.get(i).get(p - 1).tlParticle;

                    //[offset-down] Then we make a spring connection between the particle and the previous particle with a rest length and strength (both floats).
                    toxi.physics2d.VerletSpring2D spring = new toxi.physics2d.VerletSpring2D(trianglePointGroups.get(i).get(p).tlParticle, previous, 50, 1.8);

                    // We must not forget to add the spring to the physics world.
                    phys.addSpring(spring);
                }
            }
        }
    }

    void updatePosition (int x, int y) {
        for (int i = 0; i < triangles.length; i++) {
            for (int p = 0; p < triangles[i].points_.length; p++) {
                triangles[i].points_[p].x += x;
                triangles[i].points_[p].y += y;
            }
        }
    }

    void oscillate(oA) {
        int oscillationAmount = .5;
        if (oA) {
            oscillationAmount = oA;
        }

        for (int i = 1; i < letterPoints.size(); i++) {
            letterPoints.get(i).oscillate(oscillationAmount);
        }
    }

    void stopOscillating() {
        for (int i = 1; i < letterPoints.size(); i++) {
            letterPoints.get(i).stopOscillating();
        }
    }

    boolean checkForDuplicatePoint(PVector position) {
        boolean isDuplicate = false;

        for (int i = 0; i < letterPoints.size(); i++) {
            PVector partPos = new PVector(letterPoints.get(i).tlParticle.x, letterPoints.get(i).tlParticle.y);
            PVector newPos = new PVector(position.x, position.y);

            if (partPos.x == newPos.x && partPos.y == newPos.y) {
                isDuplicate = true;
            }
        }

        return isDuplicate;
    }

    void setColor(color c) {
        triangleColors = new ArrayList<color>();

        for (var i = 0; i < triangles.length; i++) {
            triangleColors.add(c);
        }
    }

    ArrayList<color> createRandomColorArrayList() {
        ArrayList<color> tColors = new ArrayList<color>();

        for (var i = 0; i < triangles.length; i++) {
            color from = color(204, 102, 0);
            color to = color(0, 102, 153);
            color randColor = color(random(255),random(255),random(255));
            tColors.add(randColor);
        }

        return tColors;
    }

    LetterPoint pointHitTest() {
        boolean foundPoint = null;

        for (int i = 0; i < letterPoints.size(); i++) {
            if(MouseUtils.hitTest(letterPoints.get(i).tlParticle.x, letterPoints.get(i).tlParticle.y, letterPoints.get(i).particleSize, letterPoints.get(i).particleSize)) {
                if (letterPoints.get(i).active && letterPoints.get(i).visible) {
                    foundPoint = letterPoints.get(i);
                }
            }
        }

        return foundPoint;
    }

    void removeLetterPoint(LetterPoint lp) {
        for (int i = 0; i < letterPoints.size(); i++) {
            if (letterPoints.get(i) == lp) {
                letterPoints.remove(i);
                break;
            }
        }

        for (int i = 0; i < trianglePointGroups.get(lp.parentArrayIteration).size(); i++) {
            if (trianglePointGroups.get(lp.parentArrayIteration).get(i) == lp) {
                trianglePointGroups.get(lp.parentArrayIteration).remove(i);
                break;
            }
        }
    }

    void draw() {
        for(int i = 0; i < trianglePointGroups.size(); i++) {
            noStroke();
            fill(triangleColors.get(i));
            if (showOutlines) {
                stroke(33, 33, 33);
            }

            beginShape();
            for(int p = 0; p < trianglePointGroups.get(i).size(); p++) {
                if (trianglePointGroups.get(i).get(p)) {
                    vertex(trianglePointGroups.get(i).get(p).tlParticle.x, trianglePointGroups.get(i).get(p).tlParticle.y);
                }

            }

            if (trianglePointGroups.get(i).get(0)) {
                vertex(trianglePointGroups.get(i).get(0).tlParticle.x, trianglePointGroups.get(i).get(0).tlParticle.y);
            }
            endShape();
        }

        if (showPoints) {
            for (int p = 0; p < letterPoints.size(); p++) {
                if (letterPoints.get(p).active) {
                    letterPoints.get(p).draw();
                }
            }
        }
    }

}