odoo.define('example.tour', function(require) {
    "use strict";

    var core = require('web.core');
    var tour = require('web_tour.tour');

    var _t = core._t;

    console.log('esta llegando aqui');

    tour.register('example_tour', {
        url: "/web",
    }, [tour.STEPS.MENU_MORE, {
        trigger: '.o_app[data-menu-xmlid="contacts.menu_contacts"], .oe_menu_toggler[data-menu-xmlid="contacts.menu_contacts"]',
        content: _t("Listo para el tour? Esto es una <b>Prueba</b>."),
    }]);
    
});
