"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var domino = require('domino');
var fs = require('fs');
var path = require('path');
var template = fs.readFileSync(path.join(__dirname, '.', 'browser', 'index.html')).toString();
var win = domino.createWindow(template);
global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
    value: function () {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});
global['document'] = win.document;
global['CSS'] = null;
global['Prism'] = null;
var core_1 = require("@angular/core");
var express_engine_1 = require("@nguniversal/express-engine");
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var express = require("express");
var path_1 = require("path");
core_1.enableProdMode();
var app = express();
var compression = require('compression');
var PORT = process.env.PORT || 4000;
var DIST_FOLDER = __dirname;
var _a = require('./server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
app.use(compression());
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', path_1.join(DIST_FOLDER, 'browser'));
app.get('*.*', express.static(path_1.join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));
app.get('*', function (req, res) {
    res.render(path_1.join(DIST_FOLDER, 'browser', 'index.html'), { req: req });
});
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map