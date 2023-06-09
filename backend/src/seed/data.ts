import argon2 from 'argon2';
import { RoleRecordType } from '../models/role';
const axios = require('axios');
const fs = require('fs');


// async function downloadPhoto(url: string, filePath: string) {
//   const response = await axios.get(url, { responseType: 'arsraybuffer' });
//   fs.writeFileSync(filePath, response.data);
//   const photoData = fs.readFileSync(filePath);
// }

const data = async () => {
  const Slavopwd = await argon2.hash('Gugugaga1#');
  const Tylichpwd = await argon2.hash('Tylich123#');
  const Jarmilpwd = await argon2.hash('Jarmil123#');
  const hashedPassword4 = await argon2.hash('hashed_password4');
  const hashedPassword5 = await argon2.hash('hashed_password5');
  const hashedPassword6 = await argon2.hash('hashed_password6');
  const photo = 'https://www.freepik.com/free-vector/business-magazine-with-image_2447935.htm#query=newspaper%20cover&position=12&from_view=search&track=ais'
  const blob = ''
  // await downloadPhoto(photo, blob)
  

  return {
    publishers: [
      {
        name: 'Global News Group',
        newspapers: [
          {
            name: 'The New York Times',
            newspaperImg: 'placeholder',
            newspaperCopies: [
              {
                articles: [
                  {
                    contents: 'Exploring the Wonders of the Grand Canyon',
                    categories: [{ name: 'Travel' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                  },
                  {
                    
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is an important topic to discuss.', author: { username: 'Tylich' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Slavo' } },
                    ],
                  },
                ],
              },
              {
                articles: [
                  {
                    
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is We need to take immediate action to mitigate climate change.an important topic to discuss.', author: { username: 'Slavo' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Jarmil' } },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'The Washington Post',
            newspaperImg: 'placeholder',
            newspaperCopies: [
              {
                articles: [
                  {
                    contents: 'Exploring the Wonders of the Grand Canyon',
                    categories: [{ name: 'Travel' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                  },
                  {
                    
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is an important topic to discuss.', author: { username: 'Tylich' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Slavo' } },
                    ],
                  },
                ],
              },
              {
                articles: [
                  {
                    
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is We need to take immediate action to mitigate climate change.an important topic to discuss.', author: { username: 'Slavo' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Jarmil' } },
                    ],
                  },
                ],
              },
            ],
          }
        ],
        users: [
          {
            username: 'Slavo',
            email: 'Slavo@example.com',
            passwordHash: Slavopwd,
            role: 'DIRECTOR' as RoleRecordType,
          },
          {
            username: 'Tylich',
            email: 'Tylich@example.com',
            passwordHash: Tylichpwd,
            role: 'MANAGER' as RoleRecordType,
          },
          {
            username: 'Jarmil',
            email: 'Jarmil@example.com',
            passwordHash: Jarmilpwd,
          },
        ],
      },
      {
        name: 'Summit Publications',
        newspapers: [
          {
            name: 'El País',
            newspaperImg: 'placeholder',
            newspaperCopies: [
              {
                articles: [
                  {
                    
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Category A' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Category B' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
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
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
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
          },
        ],
      },
      {
        name: 'Starlight Media',
        newspapers: [
          {
            name: 'The Washington Post',
            newspaperImg: 'placeholder',
            newspaperCopies: [
              {
                articles: [
                  {
                    
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Category A' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Category B' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
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
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
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
          },
          {
            username: 'Hanys',
            email: 'Hanys@example.com',
            passwordHash: Tylichpwd,
            role: 'MANAGER' as RoleRecordType,
          },
        ],
      },
      {
        name: 'Pacific Press Agency',
        newspapers: [
          {
            name: 'The Times of India',
            newspaperImg: 'placeholder',
            newspaperCopies: [
              {
                articles: [
                  {
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Category A' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Category B' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
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
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
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
        name: 'Diamond Publishing House',
        newspapers: [
          {
            name: 'Le Monde',
            newspaperImg: 'placeholder',
            newspaperCopies: [
              {
                articles: [
                  {
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Category A' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Category B' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
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
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                      
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
        name: 'Sunrise News Network',
        newspapers: [
        ],
        users: [

        ],
      },
    ],
  };
};

export default data;
