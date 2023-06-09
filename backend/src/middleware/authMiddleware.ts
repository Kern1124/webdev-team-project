import { Request, Response, NextFunction } from 'express';
import { RoleRecordType } from '../models/role';
import { Role, User } from '@prisma/client';

const isForbiddenUserRole = (newspaperId: string, user: (User & { userRoles: Role[]}), required: RoleRecordType) => {
  
  // here I would get users roles for newspaper and find if there is required
  // contains role
  return !user.userRoles.filter(role => role.newspaperId === newspaperId).some(role => role.name === required);
};


const auth = (role: RoleRecordType) => (req: Request, res: Response, next: NextFunction) => {
  const user = req.session.user
  if (!user) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  const newspaperId = req.body
  if (role.length > 0 && isForbiddenUserRole(newspaperId, user, role)) {
    res.status(403).json({ message: `Forbidden, for this task you need to be at least ${role}` });
    return;
  }
  next();
};

export default auth;
