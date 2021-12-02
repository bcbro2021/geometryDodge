//canvas
let ctx = document.getElementById("canvas").getContext("2d");
//assets
Bc.loadImage("pimg","assets/player.png");
Bc.loadImage("playimg","assets/play.png");
Bc.loadImage("menuimg","assets/menu.png");
Bc.loadImage("shopimg","assets/shop.png");
Bc.loadImage("blockimg","assets/block.png");
Bc.loadImage("platimg", "assets/plat.png");
//global vars
let fps = 60;
let GameScene = "main";
let p_color = "black";


//playscene
//vars
let dodge_count = 0;
//player
let p = new player(250,350);
//platforms
let platforms = [];
let platx = 190;
let platy = 120;
for(let i = 0;i < 7;i++) {
    platx = Math.random() * (-50 - -100) + -100
    platy = Math.random() * (400 - -100) + -100
    platforms[i] = new platform(platx,platy,32,32);
}


//mainmenu
//player
let mp = new player(20,20);
//platforms
let mpx = 10;
let mpy = 250;
let mp2y = 400;
let mainplat = new platform(mpx,mpy,140,20);
let mainplat2 = new platform(mpx,mp2y,140,20);
//play button
let playbx = 180;
let playby = 100;
let playbutton = new Rect();
//skins
let redskin = new Rect();
let aquaskin = new Rect();
let limeskin = new Rect();
let goldskin = new Rect();

//deathmenu
//player
let dp = new player(20,450);
//menu button
let menux = 170;
let menuy = 350;
let menubutton = new Rect();


//loop
function loop() {
    if(GameScene=="main"){
        //canvas clear
        Bc.clearCanvas();
        //platforms
        mainplat.draw("black");
        mainplat2.draw("black");
        Bc.drawImage("platimg",mpx,mpy);
        Bc.drawImage("platimg",mpx,mp2y);
        //play button
        playbutton.draw(playbx,playby,154,71,"red");
        Bc.drawImage("playimg",playbx,playby);
        //text
        Bc.drawText(175,350,"white","SKINS","60px Courier New");
        Bc.drawText(193,420,"lime","LIME","10px Courier New");
        Bc.drawText(236,420,"red","RED","10px Courier New");
        Bc.drawText(273,420,"aqua","AQUA","10px Courier New");
        Bc.drawText(313,420,"gold","GOLD","10px Courier New");
        //skins
        redskin.draw(230,380,30,30,"red");
        aquaskin.draw(270,380,30,30,"aqua");
        limeskin.draw(190,380,30,30,"lime");
        goldskin.draw(310,380,30,30,"gold");
        //playerdraw
        mp.draw(p_color);
        mp.update();
        //collisions
        if(mp.rect.collideRect(playbutton)) {
            GameScene="play";
        }
        if(mp.rect.collideRect(mainplat.rect)) {
            mp.y_momentum = 0;
            mp.on_ground = true;
        }
        if(mp.rect.collideRect(mainplat2.rect)) {
            mp.y_momentum = 0;
            mp.on_ground = true;
        }
    }
    if(GameScene=="death") {
        //canvas clear
        Bc.clearCanvas();
        //menubutton
        menubutton.draw(menux,menuy,154,71,"red");
        Bc.drawImage("menuimg",menux,menuy);
        //player draw
        dp.draw(p_color);
        dp.update();
        //you died
        Bc.drawText(160,100,"white","YOU","100px Courier New");
        Bc.drawText(10,250,"white","DIED","200px Courier New");
        Bc.drawText(170,300,"white","dodged: "+dodge_count,"30px Courier New");
        
    }
    if(GameScene=="play") {
        //canvas clear
        Bc.clearCanvas();
        //dodge count
        Bc.drawText(20,30,"white","dodged: "+dodge_count,"30px Courier New");
        //platforms
        for(let i = 0;i < platforms.length;i++) {
            platforms[i].draw("black");
            Bc.drawImage("blockimg",platforms[i].x,platforms[i].y);
            platforms[i].y += Math.random() * (100 - 40) + 40
            if(platforms[i].y > 480) {
                dodge_count ++;
                platforms[i].y = 0;
                platforms[i].x = Math.random() * (500 - 0) + 0
            }
        }
        //playerdraw
        p.draw(p_color);
        p.update();
        /*if(p.rect.collideRect(platforms[0].rect)) {
            GameScene="death"
        }
        if(p.rect.collideRect(platforms[1].rect)) {
            GameScene="death"
        }
        if(p.rect.collideRect(platforms[2].rect)) {
            GameScene="death"
        }
        if(p.rect.collideRect(platforms[3].rect)) {
            GameScene="death"
        }
        if(p.rect.collideRect(platforms[4].rect)) {
            GameScene="death"
        }
        if(p.rect.collideRect(platforms[5].rect)) {
            GameScene="death"
        }
        if(p.rect.collideRect(platforms[6].rect)) {
            GameScene="death"
        }*/
    }
    //collisions
    //other
    if(dp.rect.collideRect(menubutton)) {
        location.reload();
    }
    //skin collisions
    if(mp.rect.collideRect(limeskin)) {
        p_color = "lime"
    }
    if(mp.rect.collideRect(redskin)) {
        p_color = "red"
    }
    if(mp.rect.collideRect(aquaskin)) {
        p_color = "aqua"
    }
    if(mp.rect.collideRect(goldskin)) {
        p_color = "gold"
    }
}
setInterval(loop,1000/fps);
//controls
document.addEventListener("keydown",event=>{
    if (event.key == "a") {
        p.moveleft = true;
        mp.moveleft = true;
        dp.moveleft = true;
    }
    if (event.key == "d") {
        p.moveright = true;
        mp.moveright = true;
        dp.moveright = true;
    }
    if (event.key == " ") {
        p.jumping = true;
        mp.jumping = true;
        dp.jumping = true;
    }
})
document.addEventListener("keyup",event=>{
    if (event.key == "a") {
        p.moveleft = false;
        mp.moveleft = false;
        dp.moveleft = false;
    }
    if (event.key == "d") {
        p.moveright = false;
        mp.moveright = false;
        dp.moveright = false;
    }
    if (event.key == " ") {
        p.jumping = false;
        mp.jumping = false;
        dp.jumping = false;
    }
})