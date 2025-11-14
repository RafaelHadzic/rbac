"use strict";
// import RBAC from './src/models/RBAC';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// let rbac = new RBAC()
// rbac.addPermission("admin", ["create", "update", "read", "delete"], ["admin", "organization", "organization_admin", "group", "group_admin", "place", "place_admin", "device", "device_admin"])
// rbac.addPermission("organization_admin", ["create", "update", "read", "delete"], ["organization_admin", "group", "group_admin", "place", "place_admin", "device", "device_admin"])
// rbac.addPermission("organization_user", ["create", "update", "read", "delete"], ["group", "group_admin", "place", "place_admin", "device", "device_admin"])
// rbac.addPermission("group_admin", ["create", "update", "read", "delete"], ["group_admin", "place", "place_admin", "device", "device_admin"])
// rbac.addPermission("group_user", ["create", "update", "read", "delete"], ["place", "place_admin", "device", "device_admin"])
// rbac.addPermission("place_admin", ["create", "update", "read", "delete"], ["place_admin", "device", "device_admin"])
// rbac.addPermission("place_user", ["create", "update", "read", "delete"], ["device", "device_admin"])
// rbac.addPermission("device_admin", ["create", "update", "read", "delete"], ["device_admin"])
// rbac.addPermission("device_user", ["read"], ["device"])
// console.log(rbac.checkPermission('group_user', 'create', 'group_admin'));
__exportStar(require("./models/RBAC"), exports);
