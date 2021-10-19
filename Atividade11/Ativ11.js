function Retangulo(x,y){
    this.x = 10;
    this.y = 20;

    var calcArea = function(){
        var area = x * y;
        return area;
    }
    this.askTeller = function(){
        return calcArea;
    }

}

var ret = new.Retangulo(10,20);
console(ret.calcArea);