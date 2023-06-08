import { Request, Response, NextFunction } from 'express';
import { RoleRecordType } from '../models/role';

const isForbiddenUserRole = (users: string | null, required: RoleRecordType) => {
  if (users == null) {
    return true;
  }
  switch (required) {
    case 'DIRECTOR':
      if (users !== 'DIRECTOR') {
        return true;
      }
    case 'MANAGER':
      if (!(users === 'DIRECTOR' || users === 'MANAGER')) {
        return true;
      }
    case 'JOURNALIST':
      return false;
  }
};

const auth = (role: RoleRecordType) => (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.user) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  if (role.length > 0 && isForbiddenUserRole(req.session.user.userRole, role)) {
    res.status(403).json({ message: `Forbidden, for this task you need to be at least ${role}` });
    return;
  }
  next();
};

export default auth;
