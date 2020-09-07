"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_history_api_fallback_1 = __importDefault(require("express-history-api-fallback"));
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./lib/env"));
const app = express_1.default();
const staticFileMiddleware = express_1.default.static('../ui');
app.use(staticFileMiddleware);
app.use(express_history_api_fallback_1.default('index.html', { root: `${__dirname}/../ui` }));
function rootRedirect(req, res, next) {
    if (req.accepts('html')) {
        return res.redirect('/app');
    }
    next();
}
exports.rootRedirect = rootRedirect;
function uiConfig(req, res) {
    res.header('content-type', 'application/javascript');
    res.write(`
window.oidc = {
  authority: '${env_1.default.AUTH_ISSUER}',
  clientId: '${env_1.default.AUTH_CLIENT_ID}',
  client_secret: '${env_1.default.AUTH_CLIENT_SECRET}',
  scope: '${env_1.default.AUTH_SCOPES}',
  loadUserInfo: false,
}`);
    res.end();
}
exports.uiConfig = uiConfig;
exports.default = app;
