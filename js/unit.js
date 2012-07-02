/**
 * Created with JetBrains WebStorm.
 * User: Sagima
 * Date: 01.07.12
 * Time: 16:08
 * To change this template use File | Settings | File Templates.
 */

function _app(){
    var stage = {};
    var layer = {};
    var quene = {};
    quene.queue = [];
    var frag = {}, radius = 14, movInc = radius, fill = "#0a0", stroke = "#f00";
    var x=0,y=0;
    var spX = radius * 0.7, spY = radius * 0.7;
    var angel = 1, angInc = 10;

    this.init = function(cont, wid, hei){
        stage = new Kinetic.Stage({
            container: cont,
            width: wid,
            height: hei
        });
        layer = new Kinetic.Layer();

        frag = new Kinetic.Circle({
            x: x,
            y: y,
            radius: radius,
            fill: fill,
            stroke: stroke,
            strokeWidth: 1
        });

        for(var i=1; i<=50; i++){
            var _frag = clone( frag )
            x+=spX;
            y+=spY;
            _frag.setX(x);
            _frag.setY(y);
            quene.queue.push( _frag );
            layer.add(_frag);
        }
        stage.add(layer);
        document.onkeydown = function(e) {
            //log(e)
            var code = e.keyCode;
            switch( code ){
                case 40: {
                    //log('37');
                    angel + 15 <= 360?angel+=angInc: angel = 0;
                    spX = movInc * Math.cos(angel/57.17);
                    spY = movInc * Math.sin(angel/57.17);
                    break};
                case 38: {
              //      log('39');
                    angel - 15 >= 0?angel-=angInc: angel = 360;
                    spX = movInc * Math.cos(angel/57.17);
                    spY = movInc * Math.sin(angel/57.17);
                    break};
            }

        }
    }
    this.procces = function(){
        var _frag = clone( frag )

        _frag.setX(x+=spX);
        _frag.setY(y+=spY);
        layer.remove( quene.queue.shift() );
        quene.queue.push( _frag );
        layer.add(_frag);
        layer.clear();
        layer.draw();
    }
}
