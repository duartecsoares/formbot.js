/**
 * formbot.js - An easy-to-use agent to verify input values.
 *
 * @author Duarte Soares
 * @contact duartecsoares@me.com
 * @version 0.1
 *
 * @github https://github.com/duartecsoares/formbot.js
 *
 * @license
 *     
 *
 * @copyright 2015, Duarte Soares
 *
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.Formbot = factory;
    }
}(this, function Formbot(){

    this.init = function(){

        console.log("init");
    }

    this.init();

}));