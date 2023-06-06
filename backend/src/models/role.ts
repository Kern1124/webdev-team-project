// Serves as enumeration for validation and permission checking
// Is Role table necessary? Is there any way how to store only those?
export const RoleRecordTypeEnumeration = [
    'MANAGER',
    'DIRECTOR',
    'JOURNALIST',
    'GUEST',
  ] as const;
  
  export type RoleRecordType = typeof RoleRecordTypeEnumeration[0]
    | typeof RoleRecordTypeEnumeration[1]
    | typeof RoleRecordTypeEnumeration[2]
    | typeof RoleRecordTypeEnumeration[3];
