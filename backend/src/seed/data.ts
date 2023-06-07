import argon2 from 'argon2';
import { RoleRecordType } from '../models/role';

const data = async () => {
  const hashedPassword1 = await argon2.hash('Slavoo');
  const hashedPassword2 = await argon2.hash('Tylich');
  const hashedPassword3 = await argon2.hash('hashed_password3');

  return {
    publishers: [
      {
        name: 'Publisher A',
        newspapers: [
          {
            name: 'Newspaper A',
            newspaperCopies: [
              {
                articles: [
                  {
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Category A' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'User1' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'User2' } },
                    ],
                  },
                  {
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Category B' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'User1' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'User3' } },
                    ],
                  },
                ],
              },
              {
                articles: [
                  {
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Category A' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'User2' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'User3' } },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        users: [
          {
            username: 'Slavo',
            email: 'slavo@example.com',
            passwordHash: hashedPassword1,
            role: 'DIRECTOR' as RoleRecordType,
            articles: [
              {
                contents: 'Article 1 by User1',
                categories: [{ name: 'Category A' }],
                comments: [
                  { content: 'Comment 1 for Article 1 by User1' },
                  { content: 'Comment 2 for Article 1 by User1' },
                ],
              },
              {
                contents: 'Article 2 by User1',
                categories: [{ name: 'Category B' }],
                comments: [
                  { content: 'Comment 1 for Article 2 by User1' },
                  { content: 'Comment 2 for Article 2 by User1' },
                ],
              },
            ],
          },
          {
            username: 'Tylich',
            email: 'tylich@example.com',
            passwordHash: hashedPassword2,
            role: 'MANAGER' as RoleRecordType,
            articles: [
              {
                contents: 'Article 1 by User2',
                categories: [{ name: 'Category A' }],
                comments: [
                  { content: 'Comment 1 for Article 1 by User2' },
                  { content: 'Comment 2 for Article 1 by User2' },
                ],
              },
              {
                contents: 'Article 2 by User2',
                categories: [{ name: 'Category B' }],
                comments: [
                  { content: 'Comment 1 for Article 2 by User2' },
                  { content: 'Comment 2 for Article 2 by User2' },
                ],
              },
            ],
          },
          {
            username: 'User3',
            email: 'user3@example.com',
            passwordHash: hashedPassword3,
            articles: [
              {
                contents: 'Article 1 by User3',
                categories: [{ name: 'Category A' }],
                comments: [
                  { content: 'Comment 1 for Article 1 by User3' },
                  { content: 'Comment 2 for Article 1 by User3' },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
};

export default data;
