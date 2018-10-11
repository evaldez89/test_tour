odoo.define('example.tour', function(require) {
    "use strict";

    var core = require('web.core');
    var tour = require('web_tour.tour');

    var _t = core._t;

    console.log('esta llegando aqui');

    tour.register('example_tour', {
        url: "/web",
    }, [tour.STEPS.MENU_MORE, {
        trigger: '.o_app[data-menu="110"]',
        content: _t('<b>Probando </b><br/><i>Es que se sabe.</i>'),
        position: 'bottom',
    }]);
}); 
