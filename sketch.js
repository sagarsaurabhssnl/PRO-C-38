//Global variables
let player, playerimg, playerdie;
let bullet, muzzle, bulletimg, firesound, bulletgroup;
let back;
let zombie;
let gameover, gameoverimg;
let zombie1img, zombie2img, zombie3img, zombie4img, zombie5img, zombie6img, zombie7img, zombie8img, zombiegroup;
let bulletgroupassign = 1;
let zombiegroupassign = 1;
let bulletreloadtime = 1;
let zombiex = [50, 2650];
let kill = 0;
play = 1;
end = 0;
let health = 200;
let gamestate = play;
let zg1, zg2, zg3, zg4, zg5, zg6, zg7, zg8, zg9, zg10, zg11, zg12, zg13, zg14, zg15, zg16, zg17, zg18, zg19, zg20;
let bg1, bg2, bg3, bg4, bg5, bg6;
let font;
//Loading Images
function preload() {
    alert("Be patient as it will load almost 10 MB of files, or you may also download it");
    alert("Remove headphones or minimise it's volume");
    font = loadFont("fonts/ShriftSteamy.otf");
    firesound= loadSound("firesound.mp3");
    back = loadImage("background.png");
    playerimg = loadAnimation("player/snapshot1.png", "player/snapshot2.png", "player/snapshot3.png", "player/snapshot4.png", "player/snapshot5.png", "player/snapshot6.png", "player/snapshot7.png", "player/snapshot8.png", "player/snapshot9.png", "player/snapshot10.png", "player/snapshot11.png", "player/snapshot12.png", "player/snapshot13.png", "player/snapshot14.png", "player/snapshot15.png", "player/snapshot16.png", "player/snapshot17.png", "player/snapshot18.png");
    zombie1img = loadAnimation("zombie1/snapshot2.png", "zombie1/snapshot3.png", "zombie1/snapshot4.png", "zombie1/snapshot5.png", "zombie1/snapshot6.png", "zombie1/snapshot7.png", "zombie1/snapshot8.png", "zombie1/snapshot9.png", "zombie1/snapshot10.png", "zombie1/snapshot11.png", "zombie1/snapshot12.png", "zombie1/snapshot13.png", "zombie1/snapshot14.png", "zombie1/snapshot15.png", "zombie1/snapshot16.png", "zombie1/snapshot17.png", "zombie1/snapshot18.png", "zombie1/snapshot19.png");
    zombie2img = loadAnimation("zombie2/snapshot1.png", "zombie2/snapshot2.png", "zombie2/snapshot3.png", "zombie2/snapshot4.png", "zombie2/snapshot5.png", "zombie2/snapshot6.png", "zombie2/snapshot7.png", "zombie2/snapshot8.png", "zombie2/snapshot9.png", "zombie2/snapshot10.png", "zombie2/snapshot11.png", "zombie2/snapshot12.png", "zombie2/snapshot13.png", "zombie2/snapshot14.png", "zombie2/snapshot15.png", "zombie2/snapshot16.png", "zombie2/snapshot17.png", "zombie2/snapshot18.png", "zombie2/snapshot19.png", "zombie2/snapshot20.png");
    zombie3img = loadAnimation("zombie3/snapshot1.png", "zombie3/snapshot2.png", "zombie3/snapshot3.png", "zombie3/snapshot4.png", "zombie3/snapshot5.png", "zombie3/snapshot6.png", "zombie3/snapshot7.png", "zombie3/snapshot8.png", "zombie3/snapshot9.png", "zombie3/snapshot10.png", "zombie3/snapshot11.png");
    zombie4img = loadAnimation("zombie4/snapshot1.png", "zombie4/snapshot2.png", "zombie4/snapshot3.png", "zombie4/snapshot4.png", "zombie4/snapshot5.png", "zombie4/snapshot6.png", "zombie4/snapshot7.png", "zombie4/snapshot8.png", "zombie4/snapshot9.png", "zombie4/snapshot10.png", "zombie4/snapshot11.png", "zombie4/snapshot12.png", "zombie4/snapshot13.png", "zombie4/snapshot14.png", "zombie4/snapshot15.png", "zombie4/snapshot16.png", "zombie4/snapshot17.png", "zombie4/snapshot18.png", "zombie4/snapshot19.png", "zombie4/snapshot20.png", "zombie4/snapshot21.png");
    zombie5img = loadAnimation("zombie5/snapshot1.png", "zombie5/snapshot2.png", "zombie5/snapshot3.png", "zombie5/snapshot4.png", "zombie5/snapshot5.png", "zombie5/snapshot6.png", "zombie5/snapshot7.png", "zombie5/snapshot8.png", "zombie5/snapshot9.png", "zombie5/snapshot10.png", "zombie5/snapshot11.png", "zombie5/snapshot12.png", "zombie5/snapshot13.png", "zombie5/snapshot14.png", "zombie5/snapshot15.png", "zombie5/snapshot16.png", "zombie5/snapshot17.png", "zombie5/snapshot18.png", "zombie5/snapshot19.png", "zombie5/snapshot20.png", "zombie5/snapshot21.png", "zombie5/snapshot22.png", "zombie5/snapshot23.png", "zombie5/snapshot24.png", "zombie5/snapshot25.png", "zombie5/snapshot26.png", "zombie5/snapshot27.png", "zombie5/snapshot28.png", "zombie5/snapshot29.png", "zombie5/snapshot30.png", "zombie5/snapshot31.png");
    zombie6img = loadAnimation("zombie6/snapshot1.png", "zombie6/snapshot2.png", "zombie6/snapshot3.png", "zombie6/snapshot4.png", "zombie6/snapshot5.png", "zombie6/snapshot6.png");
    zombie7img = loadAnimation("zombie7/snapshot1.png", "zombie7/snapshot2.png", "zombie7/snapshot3.png", "zombie7/snapshot4.png", "zombie7/snapshot5.png", "zombie7/snapshot6.png", "zombie7/snapshot7.png", "zombie7/snapshot8.png", "zombie7/snapshot9.png", "zombie7/snapshot10.png", "zombie7/snapshot11.png", "zombie7/snapshot12.png", "zombie7/snapshot13.png", "zombie7/snapshot14.png", "zombie7/snapshot15.png", "zombie7/snapshot16.png", "zombie7/snapshot17.png", "zombie7/snapshot18.png", "zombie7/snapshot19.png", "zombie7/snapshot20.png", "zombie7/snapshot21.png");
    zombie8img = loadAnimation("zombie8/snapshot1.png", "zombie8/snapshot2.png", "zombie8/snapshot3.png", "zombie8/snapshot4.png", "zombie8/snapshot5.png", "zombie8/snapshot6.png");
    zombie9img = loadAnimation("zombie9/snapshot1.png", "zombie9/snapshot2.png", "zombie9/snapshot3.png", "zombie9/snapshot4.png", "zombie9/snapshot5.png", "zombie9/snapshot6.png", "zombie9/snapshot7.png", "zombie9/snapshot8.png", "zombie9/snapshot9.png", "zombie9/snapshot10.png", "zombie9/snapshot11.png", "zombie9/snapshot12.png", "zombie9/snapshot13.png", "zombie9/snapshot14.png", "zombie9/snapshot15.png", "zombie9/snapshot16.png");
    zombie10img = loadAnimation("zombie10/snapshot1.png", "zombie10/snapshot2.png", "zombie10/snapshot3.png", "zombie10/snapshot4.png", "zombie10/snapshot5.png", "zombie10/snapshot6.png", "zombie10/snapshot7.png");
    zombie11img = loadAnimation("zombie11/snapshot1.png", "zombie11/snapshot2.png", "zombie11/snapshot3.png", "zombie11/snapshot4.png", "zombie11/snapshot5.png", "zombie11/snapshot6.png", "zombie11/snapshot7.png", "zombie11/snapshot8.png", "zombie11/snapshot9.png", "zombie11/snapshot10.png", "zombie11/snapshot11.png", "zombie11/snapshot1.png");
    zombie12img = loadAnimation("zombie12/snapshot1.png", "zombie12/snapshot2.png", "zombie12/snapshot3.png", "zombie12/snapshot4.png");
    zombie13img = loadAnimation("zombie13/snapshot1.png", "zombie13/snapshot2.png", "zombie13/snapshot3.png", "zombie13/snapshot4.png", "zombie13/snapshot5.png", "zombie13/snapshot6.png", "zombie13/snapshot7.png", "zombie13/snapshot8.png", "zombie13/snapshot9.png", "zombie13/snapshot10.png", "zombie13/snapshot11.png", "zombie13/snapshot12.png", "zombie13/snapshot13.png", "zombie13/snapshot14.png", "zombie13/snapshot15.png", "zombie13/snapshot16.png", "zombie13/snapshot17.png");
    zombie14img = loadAnimation("zombie14/snapshot1.png", "zombie14/snapshot2.png", "zombie14/snapshot3.png", "zombie14/snapshot4.png", "zombie14/snapshot5.png", "zombie14/snapshot6.png", "zombie14/snapshot7.png", "zombie14/snapshot8.png", "zombie14/snapshot9.png", "zombie14/snapshot10.png", "zombie14/snapshot11.png", "zombie14/snapshot12.png", "zombie14/snapshot13.png", "zombie14/snapshot14.png", "zombie14/snapshot15.png", "zombie14/snapshot16.png", "zombie14/snapshot17.png", "zombie14/snapshot18.png", "zombie14/snapshot19.png", "zombie14/snapshot20.png", "zombie14/snapshot21.png", "zombie14/snapshot22.png", "zombie14/snapshot23.png");
    zombie15img = loadAnimation("zombie15/snapshot1.png", "zombie15/snapshot2.png", "zombie15/snapshot3.png", "zombie15/snapshot4.png", "zombie15/snapshot5.png", "zombie15/snapshot6.png", "zombie15/snapshot7.png", "zombie15/snapshot8.png", "zombie15/snapshot9.png", "zombie15/snapshot10.png", "zombie15/snapshot11.png", "zombie15/snapshot12.png", "zombie15/snapshot13.png", "zombie15/snapshot14.png", "zombie15/snapshot15.png", "zombie15/snapshot16.png", "zombie15/snapshot17.png", "zombie15/snapshot18.png", "zombie15/snapshot19.png", "zombie15/snapshot20.png", "zombie15/snapshot21.png", "zombie15/snapshot22.png");
    zombie16img = loadAnimation("zombie16/snapshot1.png", "zombie16/snapshot2.png", "zombie16/snapshot3.png", "zombie16/snapshot4.png");
    zombie17img = loadAnimation("zombie17/snapshot1.png", "zombie17/snapshot2.png", "zombie17/snapshot3.png", "zombie17/snapshot4.png", "zombie17/snapshot5.png", "zombie17/snapshot6.png", "zombie17/snapshot7.png", "zombie17/snapshot8.png", "zombie17/snapshot9.png", "zombie17/snapshot10.png", "zombie17/snapshot11.png", "zombie17/snapshot12.png");
    gameoverimg = loadImage("gameover.png");
    bulletimg = loadImage("bullet.png");
}
//Creating sprites and setting them on the canvas
function setup() {
    createCanvas(displayWidth, displayHeight - 133);
    //CREATING SPRITES AND GROUPS AND ADDING THEIR PROPERTIES
    player = createSprite(displayWidth, displayHeight);
    player.addAnimation("myplayer", playerimg);
    player.setCollider("rectangle", 0, 0, 200, 300);
    player.scale = 0.5;
    player.debug = false;
    player.mirrorX(-1);
    gameover = createSprite(player.x, player.y);
    gameover.addImage("gameover", gameoverimg);
    gameover.visible = false;
    muzzle = createSprite(player.x + 10, player.y - 13, 100, 10);
    bulletgroup = new Group();
    zombiegroup = new Group();
    zg1 = new Group();
    zg2 = new Group();
    zg3 = new Group();
    zg4 = new Group();
    zg5 = new Group();
    zg6 = new Group();
    zg7 = new Group();
    zg8 = new Group();
    zg9 = new Group();
    zg10 = new Group();
    zg11 = new Group();
    zg12 = new Group();
    zg13 = new Group();
    zg14 = new Group();
    zg15 = new Group();
    zg16 = new Group();
    zg17 = new Group();
    zg18 = new Group();
    zg19 = new Group();
    zg20 = new Group();
    bg1 = new Group();
    bg2 = new Group();
    bg3 = new Group();
    bg4 = new Group();
    bg5 = new Group();
    bg6 = new Group();
}

//Drawing Elements
function draw() {
    //SETTING UP THE BACKGROUND
    background(150);
    image(back, 0, 0, displayWidth * 2, displayHeight * 2);
    gameover.x = camera.position.x;
    gameover.y = camera.position.y;
    //MUZZLE POSITION AND VISIBILITY
    muzzle.visible = false;
    muzzleplacement();
    //CALLING FUNCTIONS
    gamestateplay();
    gamestateend();
    drawSprites();
    fill(0);
    text("Press C to get the code", player.x - 670, player.y + 300);
    text("Press R to reload game", player.x - 670, player.y + 280);
    push();
    textFont(font, 80);
    // textSize(40);
    fill("red");
    text("Kills: " + kill, player.x + 350, player.y - 250);
    pop();
    camera.position.x = player.x;
    camera.position.y = player.y;
}

function keyPressed() {
    if (keyCode === 67) {
        window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-38";
    }
    if (keyCode === 82) {
        window.location.reload(false);
    }
    if (gamestate !== end) {
        if (keyCode === 37) {
            player.mirrorX(-1);
        }
        if (keyCode === 39) {
            player.mirrorX(1);
        }
    }
    if (gamestate === end && keyCode === 80) {
        gamestate = play;
        zombiegroup.destroyEach();
        kill = 0;
    }
}

//PLACING MUZZLE ALONG WITH PLAYER
function muzzleplacement() {
    if (player.mirrorX() === 1) {
        muzzle.x = player.x + 90;
        muzzle.y = player.y - 13;
    } else if (player.mirrorX() === (-1)) {
        muzzle.x = player.x - 40;
        muzzle.y = player.y - 13;
    }
}

//FUNCTION TO BE EXECUTED AT GAMESTATE PLAY
function gamestateplay() {
    if (gamestate === play) {
        gameover.visible = false;
        fire();
        playermovement();
        zombiespawn();
        zombiedown();
        gameend();
        push();
        fill(150);
        rect(camera.position.x - 100, camera.position.y + 300, 200, 10);
        pop();
        fill("red");
        rect(camera.position.x - 100, camera.position.y + 300, health, 10);
    }
}

function healthdecrease(damage) { }

//FUNCTIONS TO BE EXECUTED WHEN GAME STATE IS END
function gamestateend() {
    if (gamestate === end) {
        player.pause();
        gameover.visible = true;
        zombiegroup.setVelocityXEach(0);
        zombiegroup.destroyEach();
    }
}

//MOVING PLAYER ALONG WITH THE ARROW CONTROLS
function playermovement() {
    if (keyDown(UP_ARROW) && player.y > 444) {
        player.y = player.y - 5;
    }
    if (keyDown(DOWN_ARROW) && player.y < 1218) {
        player.y = player.y + 5;
    }
    if (keyDown(RIGHT_ARROW) && player.x < 2049) {
        player.x = player.x + 5;
    }
    if (keyDown(LEFT_ARROW) && player.x > 685) {
        player.x = player.x - 5;
    }
}

//SEETING FUNCTION TO FIRE FROM PLAYER'S GUN
function fire() {
    if (keyWentDown("space") && bulletreloadtime === 1) {
        if (player.mirrorX() === 1) {
            bullet = createSprite(muzzle.x, muzzle.y);
            bullet.velocityX = 20;
        } else if (player.mirrorX() === (-1)) {
            bullet = createSprite(muzzle.x - 50, muzzle.y);
            bullet.mirrorX(-1);
            bullet.velocityX = -20;
        }
        bullet.addImage(bulletimg);
        bullet.debug = false;
        bullet.setCollider("rectangle", 0, 0, 400, 200)
        bulletgroup.add(bullet);
        //ASSIGNING BULLETS SEPARATE GROUPS AND ADDIND IT'S PROPERTIES
        bulletgroupassignreset();
        switch (bulletgroupassign) {
            case 1: bg1.add(bullet);
                break;
            case 2: bg2.add(bullet);
                break;
            case 3: bg3.add(bullet);
                break;
            case 4: bg4.add(bullet);
                break;
            case 5: bg5.add(bullet);
                break;
            case 6: bg6.add(bullet);
                break;
            default: break;
        }
        bulletgroupassign = bulletgroupassign + 1;
        bullet.scale = 0.1;
        bulletreloadtime = 0;
        bullet.lifetime = 40;
        firesound.play();
        bulletreload();
    }
}

//SETTING OUR RELOAD TIME
function bulletreload() {
    if (bulletreloadtime === 0) {
        setTimeout(reload, 2000);
    }
}

//RELOAD TIME VALUE
function reload() {
    bulletreloadtime = 1;
}

//SPAWNING ZOMBIES WITH FRAME COUNT
function zombiespawn() {
    if (frameCount % 50 === 0) {
        zombie = createSprite(random(zombiex), Math.round(random(444, 1218)));
        if (zombie.x < 800) {
            zombie.velocityX = 3;
            zombie.mirrorX(-1);
        } else if (zombie.x > 1800) {
            zombie.velocityX = -3;
        }
        zombie.debug = false;
        //ADDIND RANDOM ANIMATIONS TO ZOMBIES AND ADDING COLLIDERS
        let zom = Math.round(random(1, 17));
        switch (zom) {
            case 1: zombie.addAnimation("zimg1", zombie1img);
                zombie.setCollider("rectangle", 0, 35, 100, 370);
                break;
            case 2: zombie.addAnimation("zimg2", zombie2img);
                zombie.setCollider("rectangle", 0, 0, 100, 200);
                break;
            case 3: zombie.addAnimation("zimg3", zombie3img);
                zombie.setCollider("rectangle", 0, 10, 100, 220);
                break;
            case 4: zombie.addAnimation("zimg4", zombie4img);
                zombie.setCollider("rectangle", 0, 0, 100, 230);
                break;
            case 5: zombie.addAnimation("zimg5", zombie5img);
                zombie.setCollider("rectangle", 0, 0, 100, 190);
                break;
            case 6: zombie.addAnimation("zimg6", zombie6img);
                zombie.setCollider("rectangle", 0, 0, 100, 190);
                break;
            case 7: zombie.addAnimation("zimg7", zombie7img);
                zombie.setCollider("rectangle", 0, 0, 100, 230);
                break;
            case 8: zombie.addAnimation("zimg8", zombie8img);
                zombie.setCollider("rectangle", 0, 0, 100, 200);
                break;
            case 9: zombie.addAnimation("zimg9", zombie9img);
                zombie.setCollider("rectangle", 0, 0, 100, 320);
                break;
            case 10: zombie.addAnimation("zimg10", zombie10img);
                zombie.setCollider("rectangle", 0, 0, 100, 420);
                break;
            case 11: zombie.addAnimation("zimg11", zombie11img);
                zombie.setCollider("rectangle", 0, 0, 100, 470);
                break;
            case 12: zombie.addAnimation("zimg12", zombie12img);
                zombie.setCollider("rectangle", 0, 0, 100, 470);
                break;
            case 13: zombie.addAnimation("zimg13", zombie13img);
                zombie.setCollider("rectangle", 0, 0, 100, 270);
                break;
            case 14: zombie.addAnimation("zimg14", zombie14img);
                zombie.setCollider("rectangle", 0, 0, 100, 540);
                break;
            case 15: zombie.addAnimation("zimg15", zombie15img);
                zombie.setCollider("rectangle", 0, 0, 100, 280);
                break;
            case 16: zombie.addAnimation("zimg16", zombie16img);
                zombie.setCollider("rectangle", 0, -30, 100, 380);
                break;
            case 17: zombie.addAnimation("zimg17", zombie17img);
                zombie.setCollider("rectangle", 0, 20, 100, 220);
                break;
            default: break;
        }
        //PROPERTIES OF ZOMBIES
        zombie.scale = 0.4;
        zombie.lifetime = 1000;
        //ADDIND ZOMBIES TO GROUPS
        zombiegroup.add(zombie);
        zombiegroupassignreset();
        switch (zombiegroupassign) {
            case 1: zg1.add(zombie);
                break;
            case 2: zg2.add(zombie);
                break;
            case 3: zg3.add(zombie);
                break;
            case 4: zg4.add(zombie);
                break;
            case 5: zg5.add(zombie);
                break;
            case 6: zg6.add(zombie);
                break;
            case 7: zg7.add(zombie);
                break;
            case 8: zg8.add(zombie);
                break;
            case 9: zg9.add(zombie);
                break;
            case 10: zg10.add(zombie);
                break;
            case 11: zg11.add(zombie);
                break;
            case 12: zg12.add(zombie);
                break;
            case 13: zg13.add(zombie);
                break;
            case 14: zg14.add(zombie);
                break;
            case 15: zg15.add(zombie);
                break;
            case 16: zg16.add(zombie);
                break;
            case 17: zg17.add(zombie);
                break;
            case 18: zg18.add(zombie);
                break;
            case 19: zg19.add(zombie);
                break;
            case 20: zg20.add(zombie);
                break;
            default: break;
        }
        zombiegroupassign = zombiegroupassign + 1;
    }
}

//DESTROYING ZOMBIE AS THE BULLET TOUCHES IT
function zombiedown() {
    if (bulletgroup.isTouching(zg1)) {
        zg1.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg2)) {
        zg2.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg3)) {
        zg3.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg4)) {
        zg4.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg5)) {
        zg5.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg6)) {
        zg6.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg7)) {
        zg7.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg8)) {
        zg8.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg9)) {
        zg9.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg10)) {
        zg10.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg11)) {
        zg11.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg12)) {
        zg12.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg13)) {
        zg13.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg14)) {
        zg14.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg15)) {
        zg15.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg16)) {
        zg16.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg17)) {
        zg17.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg18)) {
        zg18.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg19)) {
        zg19.destroyEach();
        kill = kill + 1;
    }
    if (bulletgroup.isTouching(zg20)) {
        zg20.destroyEach();
        kill = kill + 1;
    }
}

//CONDITION WHERE THE GAME FINISHES
function gameend() {
    if (player.isTouching(zg1)) {
        zg1.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg2)) {
        zg2.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg3)) {
        zg3.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg4)) {
        zg4.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg5)) {
        zg5.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg6)) {
        zg6.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg7)) {
        zg7.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg8)) {
        zg8.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg9)) {
        zg9.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg10)) {
        zg10.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg11)) {
        zg11.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg12)) {
        zg12.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg13)) {
        zg13.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg14)) {
        zg14.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg15)) {
        zg15.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg16)) {
        zg16.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg17)) {
        zg17.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg18)) {
        zg18.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg19)) {
        zg19.destroyEach();
        health = health - 10;
    }
    if (player.isTouching(zg20)) {
        zg20.destroyEach();
        health = health - 10;
    }
    if (health <= 0) {
        gamestate = end;
    }
}

//RECOMPUTING THE VALUE OF THE VARIABLE RESPONSIBLE FOR ASSIGNING ZOMBIE THEIR SEPARATE GROUPS
function zombiegroupassignreset() {
    if (zombiegroupassign === 20) {
        zombiegroupassign = 1;
    }
}

//RECOMPUTING THE VALUE OF THE VARIABLE RESPONSIBLE FOR ASSIGNING BULLET THEIR SEPARATE GROUPS
function bulletgroupassignreset() {
    if (bulletgroupassign === 6) {
        bulletgroupassign = 1;
    }
}
