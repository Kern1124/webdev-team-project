import argon2 from 'argon2';
import { RoleRecordType } from '../models/role';

export const data = async () => {
  const Slavopwd = await argon2.hash('Gugugaga1#');
  const Tylichpwd = await argon2.hash('Tylich123#');
  const Jarmilpwd = await argon2.hash('Jarmil123#');
  const hashedPassword4 = await argon2.hash('hashed_password4');
  const hashedPassword5 = await argon2.hash('hashed_password5');
  const hashedPassword6 = await argon2.hash('hashed_password6');
  const photo = 'https://www.freepik.com/free-vector/business-magazine-with-image_2447935.htm#query=newspaper%20cover&position=12&from_view=search&track=ais'


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
                    heading: 'Exploring the Wonders of the Grand Canyon',
                    contents: 'Exploring the Wonders of the Grand Canyon',
                    categories: [{ name: 'Travel' }, { name: 'Environment' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                  },
                  {
                    heading: 'The Impact of Climate Change on Coastal Cities',
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
                    heading: 'The smog',
                    contents: 'The smog',
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
                    heading: 'Exploring the Wonders of your mom',
                    contents: 'Exploring the Wonders of the Grand Canyon',
                    categories: [{ name: 'Travel' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                  },
                  {
                    heading: 'The Impact of Climate Change on your mom',
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
                    heading: 'The Impact of your mom on Coastal Cities',
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
            role: 'JOURNALIST' as RoleRecordType
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
                    heading: 'Wouch',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    heading: 'Wouch2',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
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
                    heading: 'Wouch3',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
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
                    heading: 'Wouch4',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    heading: 'Wouch5',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
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
                    heading: 'Wouch6',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
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
                    heading: 'Wouch7',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    heading: 'Wouch8',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
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
                    heading: 'Wouch9',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
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
                    heading: 'Wouch10',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                  },
                  {
                    heading: 'Wouch11',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
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
                    heading: 'Wouch12',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
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
/*
*/
export const cats = [
  {
    name: 'Travel',
    articles: [
      { id: 'c579f40a-86cb-4233-9f78-f8228845457e' },
      { id: '05b37aab-d15d-4797-ba63-2dee6df17a67', },
      { id: 'a5a6458a-6bd1-4f7a-902e-a8ce2bdcc6f8', },
    ]
  },
  {
    name: 'Environment',
    articles: [
      { id: 'adb67906-6c49-4160-bb07-fa0f37f2bf69' },
      { id: '4630e75d-5ab8-429c-88a2-bc557421f8f3' },
      { id: '05b37aab-d15d-4797-ba63-2dee6df17a67' },
      { id: 'a5a6458a-6bd1-4f7a-902e-a8ce2bdcc6f8', },
      { id: '0ea3c2ac-4792-4e99-a000-203cbaeb4e5d', },
    ]
  },
  {
    name: 'Politics',
    articles: [
      { id: 'a09fcc8d-df98-4b43-bff4-b3430f80c2cf', },
      { id: 'd0892329-f5e8-4242-a129-0cf498de5c00', },
      { id: '8d76f0ea-0845-4bdf-b03c-8846ae9ae096', },
      { id: 'e296c74e-4f46-4fa1-98bb-2b0328cf75bc', },
    ]
  },
  {
    name: 'Sport',
    articles: [
      { id: 'c579f40a-86cb-4233-9f78-f8228845457e' },
      { id: 'c23be05f-3089-4250-9f13-7bb63c3be2aa', },
      { id: '9da3cd94-d13b-47c7-8fe1-1c272dd6d40e', },
      { id: '6a08e3e9-1888-4c35-b79f-8fdf326b5641', },
      { id: '3f3e8725-9abe-471d-b1b0-e2f07be904c7', },
      { id: 'cb7ef0a5-af0e-4ae2-98a2-cec6a690b5dd', },
    ]
  },
]



export const roles = [
  {
    user: 'Slavo',
    userRoles: [
      {
        name: 'DIRECTOR' as RoleRecordType,
        newspaperName: 'The New York Times'
      },
      {
        name: 'MANAGER' as RoleRecordType,
        newspaperName: 'The Washington Post'
      },
    ],
  },
  {
    user: 'Tylich',
    userRoles: [
      {

        name: 'MANAGER' as RoleRecordType,
        newspaperName: 'The New York Times'
      },
      {
        name: 'DIRECTOR' as RoleRecordType,
        newspaperName: 'The Washington Post'
      },
    ],
  },
  {
    user: 'Vojtech',
    userRoles: [
      {
        name: 'DIRECTOR' as RoleRecordType,
        newspaperName: 'El País',
      }
    ]
  },
  {
    user: 'Honza',
    userRoles: [
      {
        name: 'DIRECTOR' as RoleRecordType,
        newspaperName: 'The Washington Post',
      },
      {
        name: 'MANAGER' as RoleRecordType,
        newspaperName: 'The Washington Post',
      }
    ]
  },
  {
    user: 'Hanys',
    userRoles: [
      {
        name: 'MANAGER' as RoleRecordType,
        newspaperName: 'The Washington Post',
      }
    ]
  }
]



