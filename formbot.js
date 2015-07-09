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

    "use strict";

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.Formbot = factory;
    }
}(this, function Formbot(settings){

    //private interface
    var messages = {

        "min"       : "Field must have atleast %p1 characters",
        "max"       : "Field cant have more than %p1 characters",
        "required"  : "Field is required.",
        "default"   : "Field is invalid"

        },

        /**
         * Constructor method to set settings
         *
         * @private
         * @param {Object} settings Config object
         */
        _constructor = function(settings){

            console.log("init", settings);

            return settings;

        };


    //public interface
    this.add = function(){} //add validations

    _constructor(settings);

}));