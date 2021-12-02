class bc {
    constructor() {
    }
    clearCanvas() {
        ctx.clearRect(0,0,500,500);
    }
    loadImage(id,src) {
        this.img = document.createElement("img");
        this.img.id = id;
        this.img.src = src;
        this.img.style = "display:none"
        document.body.appendChild(this.img);
    }
    drawImage(id,x,y) {
        let image = document.getElementById(id);
        ctx.drawImage(image,x,y);
    }
    random(min,max) {
        Math.random() * (max - min) + min;
    }
    drawText(x,y,color,text,font) {
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText(text,x,y);
        
    }
}
class Rect {
    constructor() {
    }
    draw(x,y,width,height,color) {
        this.rectX = x;
        this.rectY = y;
        this.rectWidth = width;
        this.rectHeight = height;
        ctx.fillStyle = color;
        ctx.fillRect(this.rectX,this.rectY,this.rectWidth,this.rectHeight);
    }
    collideRect(rect) {
        if(this.rectX < rect.rectX + rect.rectWidth) {
            if(this.rectX + this.rectWidth > rect.rectX) {
                if(this.rectY < rect.rectY + rect.rectHeight){
                    if(this.rectY + this.rectHeight+10 > rect.rectY) {
                        return true;
                    } 
                }
            }
        }
    }
}

let Bc = new bc();