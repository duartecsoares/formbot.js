/**
 * formbot.js - An easy-to-use agent to verify input values.
 *
 * @author duartecsoares
 * @contact duartecsoares@me.com
 * @version 0.1
 *
 * @github https://github.com/duartecsoares/formbot.js
 *
 * @license
 *     
 *
 * @copyright 2015, duartecsoares
 *
 */

(function(root) {

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
        "required"  : "Field is required",
        "default"   : "Field is invalid"

    },
    dom = document,
    forEach = Array.prototype.forEach,
    getElement  = function(id) {

        return dom.getElementById(id);

    },
    on = function(eventName, action) {

        this.addEventListener(eventName, action);

    },
    off = function(eventName, action) {

        this.removeEventListener(eventName, action);

    },
    copy = function(object, properties) {

        object = object || {};

        properties.map(function(property) {

            object[property.name] = property.action;

        });

        return object;
    }

    function Formbot(settings) {

        var _constructor = function() {

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
        add : function(rule) {},
        process : function(e) {

            var retrieveValue = function(input, iterator){

                var value = input.value,
                    name  = input.getAttribute("name");

                return { name : name, value : value };

            },
            formData = [];

            e.preventDefault();

            var target = e.target,
                inputs = target.querySelectorAll("[data-formbot='input']");

            forEach.call(inputs, function(input, iterator){

                formData.push(retrieveValue(input, iterator));

            });

            console.log(formData);

            return formData

        },
        listenTo : function(id) {
            
            var binds = [{ name : "on", action: on }],
                form  = copy(getElement(id), binds);

            form.on("submit", this.process);

        },

        stopListenTo : function(id) {

            var binds = [{ name : "off", action: off }],
                form  = copy(getElement(id), binds);

            form.off("submit", this.process);                
        }

    };

    /* todo
    * put more descriptions on methods
    * extract data from inputs within process function
    * add more methods to formbot's api such as stopListen
    */

    if (typeof define === 'function' && define.amd) {

        define('Formbot', [], function () { return Formbot; });

    } else if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports) {

        module.exports = Formbot;

    } else {

        root.Formbot = Formbot;

    }

}(this));