"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let http_errors_1 = __importDefault(require("http-errors"));
let express_1 = __importDefault(require("express"));
let path_1 = __importDefault(require("path"));
let cookie_parser_1 = __importDefault(require("cookie-parser"));
let morgan_1 = __importDefault(require("morgan"));
let index_1 = __importDefault(require("./routes/index"));
let app = (0, express_1.default)();
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'client')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'node_modules')));
//router middleware
app.use('/', index_1.default);
//app.use('/', indexRouter);
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error',{title:'Error'});
});
exports.default = app;
//# sourceMappingURL=app.js.map