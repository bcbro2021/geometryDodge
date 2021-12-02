class player {
    constructor(x,y) {
        //variables
        //movement
        this.jumping = false;
        this.moveleft = false;
        this.moveright = false;
        this.x_speed = 6;
        //jumping and gravity
        this.y_momentum = 0;
        this.on_ground = false;
        this.gravity_cap = 5;
        this.x = x;
        this.y = y;
        //rect nbt data
        this.size = 32;
        this.rect = new Rect();
    }
    draw(color) {
        this.rect.draw(this.x,this.y,this.size,this.size,color);
        Bc.drawImage("pimg",this.x,this.y);
    }
    update() {
        //movement
        if(this.x>10) {
            if(this.moveleft == true) {
                this.x -= this.x_speed;
            }
        }
        if(this.x<460) {
            if(this.moveright == true) {
                this.x += this.x_speed;
            }
        }
        if(this.jumping == true) {
            if (this.on_ground == true) {
                if(this.x > 20) {
                    this.y_momentum = -6;
                }
                this.on_ground = false;
            }
        }
        //gravity
        if(this.y < 20) {
            this.y = 20;
        }
        this.y += this.y_momentum;
        if(this.y < 460) {
            this.y_momentum += 0.2;
            if(this.y_momentum >= this.gravity_cap) {
                this.y_momentum = this.gravity_cap;
            }
        }
        else {
            this.y_momentum = 0;
            this.on_ground = true;
        }
    }
}