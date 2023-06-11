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
                published: true,
                articles: [
                  {
                    heading: 'Exploring the Wonders of the Grand Canyon',
                    contents: 'Exploring the Wonders of the Grand Canyon',
                    categories: [{ name: 'Travel' }, { name: 'Environment' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                    approved: true,
                  },
                  {
                    heading: 'The Impact of Climate Change on Coastal Cities',
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is an important topic to discuss.', author: { username: 'Tylich' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Slavo' } },
                    ],
                    approved: true,
                  },
                ],
              },
              {
                published: true,
                articles: [
                  {
                    heading: 'The smog',
                    contents: 'The smog',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is We need to take immediate action to mitigate climate change.an important topic to discuss.', author: { username: 'Slavo' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Jarmil' } },
                    ],
                    approved: false,
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
                published: true,
                articles: [
                  {
                    heading: 'Exploring the Wonders of your mom',
                    contents: 'Exploring the Wonders of the Grand Canyon',
                    categories: [{ name: 'Travel' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                    approved: true,
                  },
                  {
                    heading: 'Trump\'s path to indictment: \"Isn\'t it better if there are no documents?\"',
                    contents: '<p><img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KIBJOCUJ6EI6ZAJHUNH3JGYOCI.jpg&amp;w=1440&amp;impolicy=high_res"></p><p><br></p><p>Now, 2 ½ years after Trump’s frenzied departure from the White House, the Justice Department on Friday revealed the first-ever federal indictment of a president of the United States, a 49-page chronicle of allegations that portray the 45th president as the architect of a knowing, underhanded scheme to hide classified documents from the government he had run and to persuade his own attorneys to mislead federal officials.</p><p><br></p><p>Even for a self-proclaimed rogue, who rose to the nation’s highest office by boasting that only he, as a rich and powerful man, could break rules and bust norms that he said were holding the country from reaching its full potential, the trouble Trump now faces is virgin terrain: A former president, now his party’s leading candidate to return to the White House, has been indicted by his successor’s Justice Department and faces trial, at risk of a years-long prison sentence, during the heart of his third campaign for the nation’s highest office.</p><p>Trump has angrily denied wrongdoing and attacked Jack Smith, the special counsel who led the investigation against him, as a “deranged ‘psycho.’” Through half a century in business, Trump always had an unusual relationship with documents. On one hand, he coveted printed evidence of his fame and fortune, hoarding towering stacks of magazines featuring himself on the cover on a table just down the hall from his Trump Tower office in midtown Manhattan.</p><p><br></p><p>On the other, he often hesitated to allow his private actions to be documented in print, directing top aides to make no paper record of certain decisions, three longtime former Trump Organization executives said. For all his years in business and politics, the executives said, Trump maintained a practice of tearing up documents he did not want others to see, ripping them in halves and then in half once more before discarding them in a pail, on the floor or even in the toilet.</p><p>“Donald was always fearless,” Barbara Res, an engineer and attorney who was a top executive at the Trump Organization for two decades,&nbsp;<a href="https://www.washingtonpost.com/national-security/2023/03/30/trump-investigations-history/?itid=lk_inline_manual_15" rel="noopener noreferrer" target="_blank" style="color: rgb(42, 42, 42);">told The Washington Post</a>&nbsp;earlier this year. “He absolutely believed he was above the law. He loved cutting corners.”</p><h3><br></h3><h3>The parade of boxes</h3><p>The road from the last days of the Trump presidency to this first weekend as the nation’s most prominent and powerful criminal defendant began in those chaotic days of the transition between Trump’s frenetic drive to overturn the result of the 2020 election and&nbsp;<a href="https://www.washingtonpost.com/elections/candidates/joe-biden-2024/?itid=lk_inline_manual_18" rel="noopener noreferrer" target="_blank" style="color: rgb(42, 42, 42);">Joe Biden</a>’s inauguration.</p>',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'I\'ve always wanted to visit the Grand Canyon.', author: { username: 'Tylich' } },
                    ],
                    approved: true,
                  },
                  {
                    heading: 'The Impact of Climate Change on your mom',
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is an important topic to discuss.', author: { username: 'Tylich' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Slavo' } },
                    ],
                    approved: false,
                  },
                ],
              },
              {
                published: false,
                articles: [
                  {
                    heading: 'The Impact of your mom on Coastal Cities',
                    contents: 'The Impact of Climate Change on Coastal Cities',
                    categories: [{ name: 'Environment' }],
                    comments: [
                      { content: 'This is We need to take immediate action to mitigate climate change.an important topic to discuss.', author: { username: 'Slavo' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Jarmil' } },
                    ],
                    approved: false,
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
                published: false,
                articles: [
                  {
                    heading: 'Wouch',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                    approved: true,
                  },
                  {
                    heading: 'Wouch2',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
                    ],
                    approved: true,
                  },
                ],
              },
              {
                published: false,
                articles: [
                  {
                    heading: 'Wouch3',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
                    ],
                    approved: true,
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
                published: true,
                articles: [
                  {
                    heading: 'Wouch4',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                    approved: false,
                  },
                  {
                    heading: 'Wouch5',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
                    ],
                    approved: false,
                  },
                ],
              },
              {
                published: true,
                articles: [
                  {
                    heading: 'Wouch6',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                    ],
                    approved: false,
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
                published: false,
                articles: [
                  {
                    heading: 'Wouch7',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                    approved: true,
                  },
                  {
                    heading: 'Wouch8',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
                    ],
                    approved: true,
                  },
                ],
              },
              {
                published: true,
                articles: [
                  {
                    heading: 'Wouch9',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
                    ],
                    approved: false,
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
                published: true,
                articles: [
                  {
                    heading: 'Wouch10',
                    contents: 'Article 1 for Newspaper A Issue 1',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 1 for Article 1', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 1', author: { username: 'Slavo' } },
                    ],
                    approved: false,
                  },
                  {
                    heading: 'Wouch11',
                    contents: 'Article 2 for Newspaper A Issue 1',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: 'Comment 1 for Article 2', author: { username: 'Tylich' } },
                      { content: 'Comment 2 for Article 2', author: { username: 'Jarmil' } },
                    ],
                    approved: true,
                  },
                ],
              },
              {
                published: true,
                articles: [
                  {
                    heading: 'Wouch12',
                    contents: 'Article 1 for Newspaper A Issue 2',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Comment 2 for Article 1', author: { username: 'Jarmil' } },
                      { content: 'Comment 1 for Article 1', author: { username: 'Slavo' } },
                    ],
                    approved: true,
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
      { id: 'a09fcc8d-df98-4b43-bff4-b3430f80c2cd', },
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



