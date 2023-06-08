import { PrismaClient } from "@prisma/client";
import data from "./data";
import auth from "../middleware/authMiddleware";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    console.log(`[${new Date().toISOString()}] Seed started`);
    const seedData = await data();

    // Create publishers
    for (const publisherData of seedData.publishers) {
      const publisher = await prisma.publisher.create({
        data: {
          name: publisherData.name,
        },
      });

      console.log(`Created publisher: ${publisher.name}`);
    
      // Create users
        for (const userData of publisherData.users) {
          await prisma.user.create({
            data: {
              username: userData.username,
              email: userData.email,
              passwordHash: userData.passwordHash,
              publisher: {
                connect: {
                  id: publisher.id,
                },
              },
            },
          });
        }


      // Create newspapers
      for (const newspaperData of publisherData.newspapers) {
        const newspaper = await prisma.newspaper.create({
          data: {
            name: newspaperData.name,
            publisher: {
              connect: {
                id: publisher.id,
              },
            },
          },
        });

        console.log(`Created newspaper: ${newspaper.name}`);

        // Create newspaper copies
        for (const newspaperCopyData of newspaperData.newspaperCopies) {
          const newspaperCopy = await prisma.newspaper_copy.create({
            data: {
              newspaper: {
                connect: {
                  id: newspaper.id,
                },
              },
            },
          });

          console.log(`Created newspaper copy`);

          // Create articles
          for (const articleData of newspaperCopyData.articles) {
            const user = await prisma.user.findFirst(); // Fetch a random user for the article's author
            if (user == null){
                throw new Error("no user");
            }
            const categories = articleData.categories.map((category) => ({
              name: category.name,
            }));
            const article = await prisma.article.create({
              data: {
                contents: articleData.contents,
                newspaper_copy: {
                  connect: {
                    id: newspaperCopy.id,
                  },
                },
                author: {
                  connect: {
                    id: user.id,
                  },
                },
                categories: {
                  create: categories,
                },
              },
            });

            console.log(`Created article with id ${article.id}`);
            console.log(`Created article with id ${article.id}`);

            // Create comments
            for (const commentData of articleData.comments) {
              await prisma.comment.create({
                data: {
                  content: commentData.content,
                  article: {
                    connect: {
                      id: article.id,
                    },
                  },
                  author: {
                    connect: {
                      id: user.id,
                    },
                  },
                },
              });

              console.log(`Created comment for article with id ${article.id}`);
            }
          }
        }
      }

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
