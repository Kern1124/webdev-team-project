import { PrismaClient } from "@prisma/client";
import data from "./data";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    console.log(`[${new Date().toISOString()}] Seed started`);
    const seedData = await data();


    for (const publisherData of seedData.publishers) {
      const publisher = await prisma.publisher.create({
        data: {
          name: publisherData.name,
          newspapers: {
            create: publisherData.newspapers.map((newspaper) => ({
              name: newspaper.name,
              newspaperCopies: {
                create: newspaper.newspaperCopies.map((newspaperCopy) => ({
                  issueNr: newspaperCopy.issueNr,
                  articles: {
                    create: newspaperCopy.articles.map((article) => ({
                      contents: article.contents,
                      categories: {
                        create: article.categories.map((category) => ({
                          name: category.name,
                        })),
                      },
                      comments: {
                        create: article.comments.map((comment) => ({
                          content: comment.content,
                          author: {
                            connect: {
                              username: comment.author.username,
                            },
                          },
                        })),
                      },
                    })),
                  },
                })),
              },
            })),
          },
          users: {
            create: publisherData.users.map((user) => ({
              username: user.username,
              email: user.email,
              passwordHash: user.passwordHash,
              articles: {
                create: user.articles.map((article) => ({
                  contents: article.contents,
                  newspaper_copy: {
                    connect: {
                      issueNr: article.newspaperCopy.issueNr,
                    },
                  },
                  categories: {
                    create: article.categories.map((category) => ({
                      name: category.name,
                    })),
                  },
                  comments: {
                    create: article.comments.map((comment) => ({
                      content: comment.content,
                      author: {
                        connect: {
                          username: comment.author.username,
                        },
                      },
                    })),
                  },
                })),
              },
            })),
          },
        },
      });

      console.log(`Created publisher: ${publisher.name}`);
    }

    console.log(`[${new Date().toISOString()}] Seed succeeded`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Seed failed`);
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();