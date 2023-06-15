import { Request, Response } from "express";
import { db } from "../../utils/db.server";
import { RoleRecordTypeEnumeration } from "../../models/role";

const approve = async (req: Request, res: Response) => {
    try {
        ///DUPLICATED
        const id = req.params.id
        const relatedCopy = await db.newspaper_copy.findFirst({
          where: {
            id,
          },
          select: {
            newspaperId: true,
            newspaper: {
              select: {
                name: true,
              }
            },
            articles: true,
          }
        })
        if (!relatedCopy) {
          res.status(400).json({ message: 'Invalid copy' });
          return
        }
        const newspaperId = relatedCopy.newspaperId
        if (!(req.session.user?.userRoles.filter(role => role.newspaperId === newspaperId).some(role => role.name === RoleRecordTypeEnumeration[0]))) {
          res.status(400).json({ message: `Cannot perform operation. You need to be at least ${RoleRecordTypeEnumeration[0]} in ${relatedCopy.newspaper.name}` });
          return
        }
        ///
        // check if all relatedArticles are discard / approved
        if (relatedCopy.articles.length == 0){
            res
            .status(400)
            .json({ message: `Cannot publish empty newspaper copy` });
        return;
        }
        if (relatedCopy.articles.some((article) => !article.approved)){
            res
            .status(400)
            .json({ message: `All articles must be approved` });
        return;
        }
        const copy = await db.newspaper_copy.update({
            where: {
                id,
            },
            data: {
                published: true,
                date: new Date()
            }
        })
        res.status(200).json({ item: copy, message: 'Copy succesfully approved.' });
      } catch (e) {
        res.status(500).json({ message: "Something went wrong", error: e })
      }
    
}

const discard = async (req: Request, res: Response) => {
    try {
        ///DUPLICATED
        const id = req.params.id
        const relatedCopy = await db.newspaper_copy.findFirst({
          where: {
            id,
          },
          select: {
            newspaperId: true,
            newspaper: {
              select: {
                name: true,
              }
            }
          }
        })
        if (!relatedCopy) {
          res.status(400).json({ message: 'Invalid copy' });
          return
        }
        const newspaperId = relatedCopy.newspaperId
        if (!(req.session.user?.userRoles.filter(role => role.newspaperId === newspaperId).some(role => role.name === RoleRecordTypeEnumeration[0]))) {
          res.status(400).json({ message: `Cannot perform operation. You need to be at least ${RoleRecordTypeEnumeration[0]} in ${relatedCopy.newspaper.name}` });
          return
        }
        
        ///
        // change time
        const copy = await db.newspaper_copy.delete({
            where: {
                id,
            }
        })
        res.status(200).json({ item: copy, message: 'Copy succesfully approved.' });
      } catch (e) {
        res.status(500).json({ message: "Something went wrong", error: e })
      }
}

export const copyApi = {
    approve,
    discard,
}