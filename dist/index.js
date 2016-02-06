System.register("greeting", [], function(exports_1) {
    "use strict";
    var GREET_TEXT, greeting;
    return {
        setters:[],
        execute: function() {
            GREET_TEXT = "\n==========================\n    TWITTER LIKE REACT\n    \nTwitter like app written for educational purpose using react, flux and typescript.    \n==========================    \n";
            exports_1("greeting", greeting = function () {
                return console.log(GREET_TEXT);
            });
        }
    }
});
System.register("app", ["greeting"], function(exports_2) {
    "use strict";
    var greeting_1;
    return {
        setters:[
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            }],
        execute: function() {
            greeting_1.greeting();
        }
    }
});
System.import('app');
//# sourceMappingURL=index.js.map