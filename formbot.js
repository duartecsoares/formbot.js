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

(function(root){

    "use strict";

    /**
    * List of error messages
    *
    * @private
    * @type Object
    */
    var messages = {

        "min"       : "Field must have atleast %p1 characters",
        "max"       : "Field cant have more than %p1 characters",
        "required"  : "Field is required.",
        "default"   : "Field is invalid"

    };

    function Formbot(settings){

        var _constructor = function(){

            console.log(settings);

        };

        _constructor();
        
    }

    Formbot.prototype = {

        /**
        * Describe what this method does
        *
        * @public
        * @param {Object} rule Adds a new validation rule
        * @returns {Object} Info about the rule
        */        
        add: function(){},

    };

    if (typeof define === 'function' && define.amd) {

        define('Formbot', [], function () { return Formbot; });

    } else if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports) {

        module.exports = Formbot;

    } else {

        root.Formbot = Formbot;

    }

}(this));