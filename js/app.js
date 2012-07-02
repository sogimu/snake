/**
 * Created with JetBrains WebStorm.
 * User: Sogimu
 * Date: 25.06.12
 * Time: 20:58
 * To change this template use File | Settings | File Templates.
 */

window.onload = function(){

    var App = new _app();
    App.init('container', 800, 600);

    setInterval(function(){App.procces()},100);
};

