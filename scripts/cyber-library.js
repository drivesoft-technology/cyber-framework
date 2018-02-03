
/*
 * Cyber JavaScript Library v1.0.0
 * 
 */


"use strict";

(function(window, document) {
    
    "use strict";
    
    var cyber = function(selector){
        return new Cyber.fn.init(selector);
    };
    
    var name = 'Cyber JavaScript Library';
    var version = '1.0.0-rc1.0';
    
    cyber.fn = cyber.prototype = {
        name: name,
        version: version,
        selector: null,
        findMode: 'first', // first, all
        object: {},
        objects: [],
        init: function(selector) {
            if (typeof selector === 'string') {
                cyber.fn.selector = selector.substr(1);
                if (selector.substr(0, 1) === '#') {
                    cyber.fn.getId(cyber.fn.selector);
                } else if (selector.substr(0, 1) === '.') {
                    cyber.fn.getClass(cyber.fn.selector);
                }
            }
            if (typeof selector === 'object') {
                cyber.fn.objects = selector;
            }
            return cyber.fn;
        },  
        getId: function(selector) {
            cyber.fn.object = document.querySelector("[id='" + selector + "']");
            cyber.fn.objects = document.querySelectorAll("[id='" + selector + "']");
        },
        getClass: function(selector) {
            cyber.fn.object = document.querySelector("[class='" + selector + "']");
            cyber.fn.objects = document.querySelectorAll("[class='" + selector + "']");
        },
        click: function(obj) {
            // console.log(cyber.fn.objects.length);
            if (typeof cyber.fn.objects[0] === 'object') {
                cyber.fn.objects[0].addEventListener('click', obj, false);
            } else if (typeof cyber.fn.objects[0] === 'string') {
                if (cyber.fn.objects.length === 0) {
                    cyber.fn.objects[0].addEventListener('click', obj, false);
                }
                if (cyber.fn.objects.length > 0) {
                    for(var i = 0; i < cyber.fn.objects.length; i++) {
                        cyber.fn.objects[i].addEventListener('click', obj, false);
                    }
                } 
            }
            return this;
        },
        mouseover: function(obj){
            if (typeof cyber.fn.objects.length === "undefined") {
                cyber.fn.objects.addEventListener('mouseover', obj, false);
            } else {
                if (cyber.fn.objects.length === 0) {
                    cyber.fn.objects[0].addEventListener('mouseover', obj, false);
                }
                if (cyber.fn.objects.length > 0) {
                    for(var i = 0; i < cyber.fn.objects.length; i++) {
                        cyber.fn.objects[i].addEventListener('mouseover', obj, false);
                    }
                } 
            }
            return this;
        },
        mouseout: function(obj){
            if (typeof cyber.fn.objects.length === "undefined") {
                cyber.fn.objects.addEventListener('mouseout', obj, false);
            } else {
                if (cyber.fn.objects.length === 0) {
                    cyber.fn.objects[0].addEventListener('mouseout', obj, false);
                }
                if (cyber.fn.objects.length > 0) {
                    for(var i = 0; i < cyber.fn.objects.length; i++) {
                        cyber.fn.objects[i].addEventListener('mouseout', obj, false);
                    }
                } 
            }
            return this;
        },
        addClass: function(strClass) {
            cyber.fn.objects[0].classList.add(strClass);
            return this;
        },
        removeClass: function(strClass){
            cyber.fn.objects[0].classList.remove(strClass);
            return this;
        },
        hasClass: function(strClass) {
            var listClass = cyber.fn.objects[0].className;
            if (listClass.replace(/[\n\t]/g, "").indexOf("" + strClass + "") > -1) {
                return true;
            } else {
                return false;
            }
        },
        addAttr: function(strAttr, strValue){
            if (cyber.fn.objects) {
                cyber.fn.objects.setAttribute(strAttr, strValue);
            } else {
                if (cyber.fn.objects.length === 0) {
                    cyber.fn.objects[0].setAttribute(strAttr, strValue);
                }
                if (cyber.fn.objects.length > 0) {
                    for(var i = 0; i < cyber.fn.objects.length; i++) {
                        cyber.fn.objects[i].setAttribute(strAttr, strValue);
                    }
                } 
            }
            return this;
        },
        findOne: function(selector){
            cyber.fn.selector = selector.substr(1);
            if (selector.substr(0, 1) === '#') {
                cyber.fn.objects = document.querySelector("[id='" + selector + "']");
            } else if (selector.substr(0, 1) === '.') {
                cyber.fn.objects = document.querySelector("[class='" + selector + "']");
            }
            return cyber.fn;
        },
        findAll: function(selector){
            cyber.fn.selector = selector.substr(1);
            if (selector.substr(0, 1) === '#') {
                cyber.fn.objects = document.querySelectorAll("[id='" + selector + "']");
            } else if (selector.substr(0, 1) === '.') {
                cyber.fn.objects = document.querySelectorAll("[class='" + selector + "']");
            }
            return cyber.fn;
        },
        first: function (){
            return cyber.fn.objects[0];
        },
        all: function (){
            return cyber.fn.objects;
        }
    };
    
    window.Cyber = cyber;
    
})(typeof window !== "undefined" ? window : this, typeof window.document !== "undefined" ? window.document : this.document);
