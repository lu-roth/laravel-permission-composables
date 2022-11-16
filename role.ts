import { Permission } from './permission'
import { ComputedRef } from 'vue'

export interface Role {
  id: number
  name: string
  permissions: Permission[]
}

export default function useRole(roles: ComputedRef<Role[]>) {
  const hasRole = (roleName: string) => {
    return roles.value.map((role: Role) => role.name).includes(roleName)
  }

  const hasAnyRole = (roleNames: string[]) => {
    return roleNames.some((roleName) =>
      roles.value.map((role: Role) => role.name).includes(roleName)
    )
  }

  const hasAllRoles = (roleNames: string[]) => {
    return roleNames.every((roleName) =>
      roles.value.map((role: Role) => role.name).includes(roleName)
    )
  }

  const hasExactRoles = (roleNames: string[]) => {
    return roles.value
      .map((role: Role) => role.name)
      .every((roleName: string) => roleNames.includes(roleName))
  }

  return {
    hasRole,
    hasAnyRole,
    hasAllRoles,
    hasExactRoles,
  }
}
