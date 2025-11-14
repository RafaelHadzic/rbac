
# RBAC (Role-Based Access Control) for Node.js

This is a Node.js library for managing **Role-Based Access Control (RBAC)**. It allows you to define roles, assign permissions to those roles, and check if a role has permission to perform an action on a resource. This package is useful for applications that need to control access to different parts of the system based on roles.

## Installation

To install this package, use npm:

```bash
npm install @rafaelhadzic/rbac
```

Or with yarn:

```bash
yarn add @rafaelhadzic/rbac
```

## Usage

After installing the package, you can import and use it in your Node.js application as follows:

### Importing the Library

```typescript
import { RBAC } from '@rafaelhadzic/rbac';
```

### Creating an RBAC Instance

To create an RBAC instance, you can simply instantiate the `RBAC` class:

```typescript
const rbac = new RBAC();
```

### Adding Permissions

You can add permissions for specific roles. For example, to allow the `admin` role to `create` and `read` from a resource called `posts`:

```typescript
rbac.addPermission('admin', ['create', 'read'], ['posts']);
```

### Checking Permissions

You can check if a role has a specific permission for a resource. For example, to check if the `admin` role can `create` a `post`:

```typescript
const hasPermission = rbac.checkPermission('admin', 'create', 'posts');
console.log(hasPermission);  // true
```

### Getting All Permissions

You can retrieve all the permissions in the system:

```typescript
const permissions = rbac.getPermissions();
console.log(permissions);
```

## Example

Here’s a complete example that shows how to use the library:

```typescript
import { RBAC } from '@rafaelhadzic/rbac';

const rbac = new RBAC();

// Add permissions
rbac.addPermission('admin', ['create', 'read'], ['posts']);
rbac.addPermission('user', ['read'], ['posts']);

// Check permissions
const canAdminCreate = rbac.checkPermission('admin', 'create', 'posts'); // true
const canUserCreate = rbac.checkPermission('user', 'create', 'posts'); // false

console.log(`Can Admin Create Post? ${canAdminCreate}`);
console.log(`Can User Create Post? ${canUserCreate}`);
```

## API

### `RBAC` Class

#### `addPermission(role: string, action: string | string[], resource: string | string[])`

Adds a permission for a role to perform actions on a resource.

- `role`: The role (e.g., `admin`, `user`).
- `action`: The action(s) the role can perform (e.g., `create`, `read`). Can be a single string or an array of strings.
- `resource`: The resource(s) the role can access (e.g., `posts`, `comments`). Can be a single string or an array of strings.

#### `checkPermission(role: string, action: string, resource: string): boolean`

Checks if a role has permission to perform a specific action on a resource.

- `role`: The role to check.
- `action`: The action to check.
- `resource`: The resource to check.

Returns `true` if the role has permission, otherwise `false`.

#### `getPermissions(): Permission[]`

Retrieves all permissions currently in the system. Returns an array of all permissions.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
