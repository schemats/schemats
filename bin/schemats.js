#! /usr/bin/env node
"use strict";
/**
 * Commandline interface
 * Created by xiamx on 2016-08-10.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var fs = require("fs");
var index_1 = require("../src/index");
var argv = yargs
    .usage('Usage: $0 <command> [options]')
    .global('config')
    .default('config', 'schemats.json')
    .config()
    .env('SCHEMATS')
    .command('generate', 'generate type definition')
    .demand(1)
    // tslint:disable-next-line
    .example('$0 generate -c postgres://username:password@localhost/db -t table1 -t table2 -s schema -o interface_output.ts', 'generate typescript interfaces from schema')
    .demand('c')
    .alias('c', 'conn')
    .nargs('c', 1)
    .describe('c', 'database connection string')
    .alias('t', 'table')
    .nargs('t', 1)
    .describe('t', 'table name')
    .alias('s', 'schema')
    .nargs('s', 1)
    .describe('s', 'schema name')
    .alias('C', 'camelCase')
    .describe('C', 'Camel-case columns')
    .describe('noHeader', 'Do not write header')
    .demand('o')
    .nargs('o', 1)
    .alias('o', 'output')
    .describe('o', 'output file name')
    .help('h')
    .alias('h', 'help')
    .argv;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var formattedOutput, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!Array.isArray(argv.table)) {
                    if (!argv.table) {
                        argv.table = [];
                    }
                    else {
                        argv.table = [argv.table];
                    }
                }
                return [4 /*yield*/, index_1.typescriptOfSchema(argv.conn, argv.table, argv.schema, { camelCase: argv.camelCase, writeHeader: !argv.noHeader })];
            case 1:
                formattedOutput = _a.sent();
                fs.writeFileSync(argv.output, formattedOutput);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.error(e_1);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })().then(function () {
    process.exit();
}).catch(function (e) {
    console.warn(e);
    process.exit(1);
});
//# sourceMappingURL=schemats.js.map