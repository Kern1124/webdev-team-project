import { Request, Response, NextFunction } from 'express';
import { RoleRecordType } from '../models/role';

const auth = (...roles: RoleRecordType[]) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.user) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    //TODO: 
    const userRoles: RoleRecordType[] = []
    // req.session.user.roles.map((userRole: UserRole) => userRole.role.name);

    if (roles.length > 0 && !roles.some(role => userRoles.includes(role))) {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }
    next();
}

export default auth;