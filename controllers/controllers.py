# -*- coding: utf-8 -*-
from odoo import http

# class Custom/testTour(http.Controller):
#     @http.route('/custom/test_tour/custom/test_tour/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/custom/test_tour/custom/test_tour/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('custom/test_tour.listing', {
#             'root': '/custom/test_tour/custom/test_tour',
#             'objects': http.request.env['custom/test_tour.custom/test_tour'].search([]),
#         })

#     @http.route('/custom/test_tour/custom/test_tour/objects/<model("custom/test_tour.custom/test_tour"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('custom/test_tour.object', {
#             'object': obj
#         })