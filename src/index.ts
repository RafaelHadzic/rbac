import RBAC from './models/RBAC';

let rbac = new RBAC()

rbac.addPermission("admin", ["create", "update", "read", "delete"], ["admin", "organization", "organization_admin", "group", "group_admin", "place", "place_admin", "device", "device_admin"])
rbac.addPermission("organization_admin", ["create", "update", "read", "delete"], ["organization_admin", "group", "group_admin", "place", "place_admin", "device", "device_admin"])
rbac.addPermission("organization_user", ["create", "update", "read", "delete"], ["group", "group_admin", "place", "place_admin", "device", "device_admin"])
rbac.addPermission("group_admin", ["create", "update", "read", "delete"], ["group_admin", "place", "place_admin", "device", "device_admin"])
rbac.addPermission("group_user", ["create", "update", "read", "delete"], ["place", "place_admin", "device", "device_admin"])
rbac.addPermission("place_admin", ["create", "update", "read", "delete"], ["place_admin", "device", "device_admin"])
rbac.addPermission("place_user", ["create", "update", "read", "delete"], ["device", "device_admin"])
rbac.addPermission("device_admin", ["create", "update", "read", "delete"], ["device_admin"])
rbac.addPermission("device_user", ["read"], ["device"])

console.log(rbac.checkPermission('group_user', 'create', 'group_admin'));