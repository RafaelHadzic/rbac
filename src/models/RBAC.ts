interface Permission {
    role: string;
    action: string | string[];
    resource: string | string[];
}

/**
 * RBAC (Role-Based Access Control) class to manage permissions.
 * Allows adding permissions and checking if a role has a specific permission.
 * Example usage:
 * @example const rbac = new RBAC();
 * rbac.addPermission("admin", ["create", "read"], ["resource1", "resource2"]);
 * const hasPermission = rbac.checkPermission("admin", "create", "resource1");
 */
class RBAC {
    private permissions: Permission[];

    constructor() {
        this.permissions = [];
    }

    /**
     * Adds a permission for a specific role, action(s), and resource(s).
     * @param role - The role to which the permission is assigned.
     * @param action - The action or actions allowed.
     * @param resource - The resource or resources the action applies to.
     * @example rbac.addPermission("admin", ["create", "read"], ["resource1", "resource2"]);
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
     * @example const hasPermission = rbac.checkPermission("admin", "create", "resource1");
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
     */
    getPermissions(): Permission[] {
        return this.permissions;
    }
}

export default RBAC;