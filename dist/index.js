"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rbac = void 0;
const RBAC_1 = __importDefault(require("./src/models/RBAC"));
const rbac = new RBAC_1.default();
exports.rbac = rbac;
