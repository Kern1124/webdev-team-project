import argon2 from 'argon2';

const data = async () => {
  const hashedPassword1 = await argon2.hash('hashed_password1');
  const hashedPassword2 = await argon2.hash('hashed_password2');
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
            username: 'User1',
            email: 'user1@example.com',
            passwordHash: hashedPassword1,
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
            username: 'User2',
            email: 'user2@example.com',
            passwordHash: hashedPassword2,
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
