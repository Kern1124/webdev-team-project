import argon2 from 'argon2';
import { RoleRecordType } from '../models/role';

const data = async () => {
  /*
  username: 'Slavo',
            email: 'Slavo@example.com',
            passwordHash: hashedPassword1,
  */
  const hashedPassword1 = await argon2.hash('Slavoo123');
  /*
  username: 'Tylich',
            email: 'Tylich@example.com',
            passwordHash: hashedPassword2,
  */  
  const hashedPassword2 = await argon2.hash('Tylich123');
  const hashedPassword3 = await argon2.hash('hashed_password3');
  const hashedPassword4 = await argon2.hash('hashed_password4');
  const hashedPassword5 = await argon2.hash('hashed_password5');
  const hashedPassword6 = await argon2.hash('hashed_password6');

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
            email: 'Slavo@example.com',
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
            email: 'Tylich@example.com',
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
            username: 'jarmil',
            email: 'Jarmil@example.com',
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
      {
        name: 'Publisher B',
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
            username: 'Vojtech',
            email: 'Vojtech@example.com',
            passwordHash: hashedPassword4,
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
        ],
      },
      {
        name: 'Publisher C',
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
            username: 'Honza',
            email: 'Honza@example.com',
            passwordHash: hashedPassword5,
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
            username: 'Hanys',
            email: 'Hanys@example.com',
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
        ],
      },
      {
        name: 'Publisher D',
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
        ],
      },
      {
        name: 'Publisher E',
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
         
        ],
      },

      {
        name: 'Publisher F',
        newspapers: [
        ],
        users: [
          
        ],
      },
    ],
  };
};

export default data;
