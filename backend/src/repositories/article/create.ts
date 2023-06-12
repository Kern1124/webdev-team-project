import { Result } from "@badrap/result";
import { db } from "../../utils/db.server";
import { Article } from "@prisma/client";
import { ArticleCreateData } from "../../types/article.types";

const createArticle = async (data: ArticleCreateData): Promise<Result<Article>> => {

  try {
    return Result.ok(await db.$transaction(async transaction => {
      // Find last unpublished copy /// OF THE NEWSPAPER XDD
      const unpublished = await db.newspaper_copy.findMany({
        where: {
          newspaperId: data.newspaperId,
          published: false,
        },
        orderBy: {
          date: 'desc'
        },
        take: 1
      });
      let copy;

      if (unpublished.length > 0) {
        copy = unpublished[0];
      } else {
        // Create a new newspaper copy if no unpublished copies exist
        const newspaperCopy = await db.newspaper_copy.create({
          data: {
            newspaperId: data.newspaperId, // Replace with the appropriate newspaperId value
          },
        });

        copy = newspaperCopy;
      }

      const article = await db.article.create({
        data: {
          heading: data.heading,
          contents: data.contents,
          categories: {
            connect: data.categories.map(categoryId => ({ id: categoryId }))
          },
          newspaperCopyId: copy.id,
          authorId: data.authorId,
        },
        // Testing if it forgets it or not
        include: {
          categories: true,
          newspaper_copy: true,
        }
      })
      return article;
    }));
  } catch (err) {
    return Result.err(err as Error);
  }
}
/*

*/
export default createArticle