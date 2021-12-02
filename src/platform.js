class platform {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rect = new Rect();
    }
    draw(color) {
        this.rect.draw(this.x,this.y,this.w,this.h,color);
    }
}