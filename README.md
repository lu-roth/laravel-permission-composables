# laravel-permission-composables
Use these composables in your vue3 frontend project. </br>
They include some basic methods which work with [laravel-permission](https://spatie.be/docs/laravel-permission/v5/introduction) relations.

Expected format of your user resource:
</br>

    const user = {
        roles: Array<Role>,
        permissions: Array<Permissions> 
        ...
    }   

    interface Permission {
    id: number
    name: string
    permission_group_id: string
    translated_name: string
    }   

    interface Role {
    id: number
    name: string
    permissions: Permission[]
    }


Usage:

    const rolesAndPermissions = useRolesAndPermissions();
    rolesAndPermissions.hasRole('admin');

    OR

    const { hasRole } = useRolesAndPermissions();
    hasRole('admin');
