// Serves as enumeration for validation and permission checking
export const RoleRecordTypeEnumeration = [
  'DIRECTOR',
  'MANAGER',
  'JOURNALIST',
] as const;

export type RoleRecordType = typeof RoleRecordTypeEnumeration[0]
  | typeof RoleRecordTypeEnumeration[1]
  | typeof RoleRecordTypeEnumeration[2];
