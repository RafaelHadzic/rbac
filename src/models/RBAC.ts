/**
 * Describes a permission associated with a role.
 */
export interface Permission {
    /** Name of the role receiving the permission. */
    role: string;
    /** Allowed action(s) — can be a single string or an array of actions. */
    action: string | string[];
    /** Resource(s) the action applies to — single string or array. */
    resource: string | string[];
}

/**
 * RBAC (Role-Based Access Control) class to manage permissions. 
 * This class provides a simple way to add permissions and check
 * if a given `role` has permission to perform an action on a resource.
 * It is intentionally minimalistic for example/POC use.
 * @example
 * const rbac = new RBAC();
 * rbac.addPermission('admin', ['create','read'], ['resource1']);
 * rbac.checkPermission('admin','create','resource1'); // true
 */
export default class RBAC {
    private permissions: Permission[] = [];

    /** Initializes a new instance of the RBAC class.
     * @example
     * const rbac = new RBAC();
     */
    constructor() {}

    /**
     * Adds a permission for a specific role, action(s), and resource(s).
     * @param role - The role to which the permission is assigned.
     * @param action - The action or actions allowed.
     * @param resource - The resource or resources the action applies to.
     * @example 
     * rbac.addPermission("admin", ["create", "read"], ["resource1", "resource2"]);
     */
    addPermission(role: string, action: string | string[], resource: string | string[]): void {
        this.permissions.push({ role, action, resource });
    }

    /**
     * Checks if a role has permission to perform an action on a resource.
     * @param role - The role to check.
     * @param action - The action to check.
     * @param resource - The resource to check.
     * @returns True if the role has the permission, false otherwise.
     * @example 
     * const hasPermission = rbac.checkPermission("admin", "create", "resource1");
     */
    checkPermission(role: string, action: string, resource: string): boolean {
        return this.permissions.some(permission =>
            permission.role === role &&
            (Array.isArray(permission.action) ? permission.action.includes(action) : permission.action === action) &&
            (Array.isArray(permission.resource) ? permission.resource.includes(resource) : permission.resource === resource)
        );
    }

    /**
     * Retrieves all permissions.
     * @returns An array of all permissions.
     * @example
     * const allPermissions = rbac.getPermissions();
     * console.log(allPermissions);
     */
    getPermissions(): Permission[] {
        return this.permissions;
    }
}