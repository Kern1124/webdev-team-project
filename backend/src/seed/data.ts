import argon2 from 'argon2';
import { RoleRecordType, RoleRecordTypeEnumeration } from '../models/role';

export const data = async () => {
  const Slavopwd = await argon2.hash('Gugugaga1#');
  const Tylichpwd = await argon2.hash('Tylich123#');
  const Jarmilpwd = await argon2.hash('Jarmil123#');
  const hashedPassword4 = await argon2.hash('hashed_password4');
  const hashedPassword5 = await argon2.hash('hashed_password5');
  const hashedPassword6 = await argon2.hash('hashed_password6');
  let tommorow = new Date()
  tommorow.setDate(tommorow.getDate() + 1);
  let twoDaysInFuture = new Date()
  twoDaysInFuture.setDate(twoDaysInFuture.getDate() + 2);
  const photo = 'https://www.freepik.com/free-vector/business-magazine-with-image_2447935.htm#query=newspaper%20cover&position=12&from_view=search&track=ais'
  const ourPhotot = '1686438497227.png'


  return {
    publishers: [
      {
        name: 'Global News Group',
        newspapers: [
          {
            name: 'The New York Times',

            newspaperImg: 'TheNewYorkTimes.png',
            newspaperCopies: [
              {
                date: new Date(),
                published: true,
                articles: [
                  {

                    heading: 'Mbappé’s Split With P.S.G. Widens Into a War of Words',
                    contents: '<p>In dueling statements, the French striker and Paris St.-Germain disputed basic facts about the breakdown of their relationship.</p><p>Kylian Mbappé, in his Paris St.-Germain uniform, looking downward with his hands on his hips.</p><p>Kylian Mbappé said he told Paris St.-Germain last summer that he would not extend his contract beyond 2024.</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Kylian_Mbapp%C3%A9_%282%29.jpg"></p><p>One day after news broke that Kylian Mbappé, the French star of Paris St.-Germain, had told the club via letter that he would not extend his contract beyond 2024, Mbappé broke his silence.</p><p>In a statement and on social media, Mbappé said his decision not to extend his contract had been communicated to P.S.G. last summer, a declaration that was immediately rejected by the club. And on social media, Mbappé denied a French newspaper report that he wants to join Real Madrid this summer, calling any such suggestion “lies.”</p><p>He was, he wrote on Twitter, “very happy” at the club.</p><p>By then, however, the player and the club were engaged in a contentious, and very public, back and forth.</p>',
                    categories: [{ name: 'Sport' }],
                    comments: [
                      { content: 'Great article!', author: { username: 'Slavo' } },
                      { content: 'Wow, the dispute between Kylian Mbappé and Paris St.-Germain seems to be getting intense.', author: { username: 'Tylich' } },
                    ],
                    approved: true,
                  },
                  {
                    heading: 'Beauty of Taipei',
                    contents: '<p>A view over a city skyline as the sky fades into dusky orange and purple. In the foreground are trees and a woman posing on a rock. In the background, behind the skyscrapers, is the outline of mountain ranges. </p><p>查看本文中文版閱讀繁體中文版</p><p>Taipei, the Taiwanese capital, is a literal urban jungle — ferns and large elephant ear plants sprout through the crevices of roofs and sidewalks with wild abandon. Hiking trails abound on all sides of this glittering metropolis and tech hub. Taipei is experiencing a quiet renaissance even amid regional tensions. Young artists, chefs and curators are redefining and embracing Taiwanese identity as its own distinct category, with a conscientious pursuit of food and design endemic to the island’s history. With low crime and brightly lit convenience stores everywhere, the city is safe to meander at all hours. A word of advice: Sleep in. With the exception of breakfast shops and wet markets where locals go for their early grocery runs, many stores and coffee shops don’t open until well after 11 a.m.</p><p><img src=https://upload.wikimedia.org/wikipedia/commons/5/54/Taipei_101_view.jpg><br /></p><p>A person, looking at their phone, walks past the window of a clothing store in the daytime. In the window are two mannequins: One mannequin is dressed in a textured white cardigan, a white collared blouse and a mid-length purple skit. The other is wearing a dusty pink long-sleeved dress.</p><p>5 p.m. Dig for vintage gems</p><p>Once a hub for scrap metal parts and auto repair shops, Chifeng Street is now one of the city’s edgiest shopping streets. Maji Treats, on the fourth floor of the Eslite Spectrum building, has artisanal food products, including jams, sauces, noodles and vinegars, as well as items unique to the island, like baskets woven from shell ginger leaves. Back on street level, decompress at the retro and intimate Coffee Dumbo, which specializes in pour-over coffee and cinnamon buns, and is consistently packed with stylish patrons. (Coffee culture is taken extremely seriously in Taipei.) Finally, weave through the many second-hand clothing shops, like Travis Vintage and Used Clothing, which has a rare collection of 1960s Taiwanese bomber jackets (it usually opens at 6 p.m. on Fridays, but hours can be erratic; message their Facebook page ahead of time to check).</p><p>6:30 p.m. Have a quick bite at the night market</p><p>A short stroll away is the buzzing Ningxia Night Market, a collection of tightly packed open-air food stalls. Because of gentrification and noise complaints, most night markets nowadays aren’t nearly as robust as they used to be decades ago. Ningxia is a distinguished exception; many of the businesses are owned by second-generation proprietors and unlike most other Taiwanese night markets, which also have clothing shops and arcade games like claw machines, Ningxia only does food, and does it very well. Snack lightly, since dinner is the next activity: Try a deep-fried taro ball stuffed with salted duck egg yolk (30 Taiwan dollars) and freshly squeezed sugarcane juice (30 Taiwan dollars).</p><p>A close-up of a glazed blue bowl with thinly sliced rounds of watermelon radish arranged in a pretty display. A hand is sprinkling salt on top. </p><p>7:30 p.m. Indulge in upscale Taiwanese cuisine</p><p>The pace of Taiwanese fine dining is being set by classically trained chefs embracing the subtropical abundance of the island. An example of this is at nkụ, a hushed, intimate restaurant with an open kitchen helmed by the German-born Taiwanese chef Li-Han Lin, whose cooking style is influenced by his time working in Copenhagen kitchens. The tasting menu (2,900 Taiwan dollars) is heavily seasonal: On a given day, you might encounter a potato-based cream flavored with blended milkfish (a popular fish in Taiwan that’s usually pan-fried), piped onto a thin, sourdough cracker; or a creamy “risotto” made with lotus seeds instead of rice. For dessert: a tart guava ice cream accented with an indigenous Taiwanese lemon-tasting pepper called maqaw.</p><p>A busy street market in the daytime. In the center of the photo are metal tables, where people use chopsticks to eat from metal bowls. There are many signs in Chinese advertising different kinds of food.</p><p>Because of gentrification and noise complaints, many of Taipei’s night markets aren’t as robust as they were decades ago. Ningxia Night Market is a distinguished exception, and many of the food stalls here are owned by second-generation proprietors.</p>',
                    categories: [{ name: 'Travel' }],
                    comments: [
                      { content: 'Such a beautiful city.', author: { username: 'Tylich' } },
                      { content: 'I need to go here someday.', author: { username: 'Slavo' } },
                    ],
                    approved: true,
                  },
                ],
              },
              {
                date: tommorow,
                published: true,
                articles: [
                  {
                    heading: 'Restaurant Review: Wylie Dufresne’s Pizzeria Has a Really Good Salad',
                    contents: '<p>A diner takes a slice of pizza from a tray set beside a stemless glass of red wine and a salad garnished with potato chips.</p><p>Stretch garnishes salads with potato chips and tops pizzas with potatoes, bacon and sour cream.</p><p><img src="https://get.pxhere.com/photo/dish-food-cuisine-pizza-pizza-cheese-california-style-pizza-ingredient-flatbread-baked-goods-quiche-italian-food-produce-tarte-flamb-e-recipe-dessert-staple-food-american-food-comfort-food-Flamiche-zwiebelkuchen-sicilian-pizza-Manakish-finger-food-side-dish-pizza-stone-pissaladi-re-french-food-1614024.jpg"><br /></p><p>When you make a reservation at an independently reviewed restaurant through our site, we earn an affiliate commission.</p><p><br /></p><p>Cooking Feast on recipes, food writing and culinary inspiration from Sam Sifton and NYT Cooking. Get it sent to your inbox.</p><p>It is the age of the pizza geek.</p><p><br /></p><p>If you recently stood in line for a pizza, or used Resy Notify to get a table at which you later ate a pizza, or showed up at a certain place and time because you had learned on Instagram that it was going to be the site of a pizza drop, chances are that a pizza geek made the pizza in question.</p><p><img src="https://get.pxhere.com/photo/dish-food-cuisine-pizza-ingredient-california-style-pizza-quiche-pizza-cheese-tarte-flamb-e-zwiebelkuchen-baked-goods-Flamiche-italian-food-flatbread-recipe-produce-dessert-comfort-food-fast-food-pissaladi-re-pastry-american-food-french-food-sicilian-pizza-tart-1611473.jpg"><br /></p><p>When pizza geeks are talking, no step in the process of mixing and rising and baking of pizza is too technical, no detail is too granular. They speak to one another about the hydration of their dough, the effect of long fermentation times, the digestibility of the crust.</p>',
                    categories: [{ name: 'Food' }],
                    comments: [
                      { content: "I won't stand a line for other pizza again.", author: { username: 'Slavo' } },
                      { content: 'Yummmyyy.', author: { username: 'Jarmil' } },
                    ],
                    approved: true,
                  },
                ],
              },
              {
                date: twoDaysInFuture,
                published: false,
                articles: [
                  {
                    heading: 'How Wild Turkeys Find Love',
                    contents: '<p>At the onset of the coronavirus pandemic, with travel restrictions in place worldwide, we launched a new series — The World Through a Lens — in which photojournalists help transport you, virtually, to some of our planet’s most compelling places. This week, Anne Readel shares a collection of images from Wisconsin.</p><p>As spring bursts forth, wild turkeys begin the mating game. Groups congregate in lawns and fields — and sometimes in the middle of the street. Males puff out their iridescent feathers, fan their tails and drag their wings on the ground in a vie for the right to breed. Their faces and necks turn dazzling shades of blue and red.</p><p><br /></p><p>Once rare and elusive denizens of America’s woodlands, these heaviest of the galliform birds (chickens and their relatives) have gone urban. Wild turkeys live in the residential neighborhoods around my home in Madison, Wis.</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Wildturkey.jpg"></p>',
                    categories: [{ name: 'Travel' }, { name: 'Environment' }],
                    comments: [
                      { content: "Turkey's are scary", author: { username: 'Slavo' } },
                      { content: 'Interesting article. Love it.', author: { username: 'Tylich' } },
                    ],
                    approved: false,
                  },
                  {
                    heading: 'Judge in Trump Documents Case Has Scant Criminal Trial Experience',
                    contents: '<p>Trump made a “plucking motion.” The indictment recounts how Trump and his lawyer discussed what to do with a folder of 38 documents with classification markings. The lawyer said Trump made a “plucking motion” that implied, “why don’t you take them with you to your hotel room and if there’s anything really bad in there, like, you know, pluck it out.”</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Donald_Trump_%2829496131773%29.jpg"></p><p>Trump was recorded sharing secrets. The indictment says Trump was recorded at his golf club in Bedminster, N.J., showing off secret U.S. battle plans to a writer. Trump described the material as “highly confidential” and “secret,” while admitting it had not been declassified.</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Donald_Trump_in_the_Oval_Office%2C_June_2017.jpg"></p><p>Trump showed a secret map to a staff member. In August or September 2021, Trump shared a top secret military map with a staff member at his political action committee who did not have a security clearance; he warned the person not to “get too close.”</p>',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: "Sharing secret U.S. battle plans without declassification raises serious concerns about Trump's handling of sensitive information.", author: { username: 'Tylich' } },
                      { content: "The indictment's revelations about Trump's actions with classified materials are disturbing and require a thorough examination.", author: { username: 'Slavo' } },
                    ],
                    approved: true,
                  },
                ],
              },
            ],
          },
          {
            name: 'The Washington Post',
            newspaperImg: 'WP2.png',
            newspaperCopies: [
              {
                date: new Date(),
                published: true,
                articles: [
                  {
                    heading: 'Trump’s political fight is his legal fight',
                    contents: '<p>Former president <a href="https://www.washingtonpost.com/elections/candidates/donald-trump-2024/?itid=lk_inline_manual_2" target="_blank">Donald Trump</a> began his first prepared remarks following his arraignment on federal criminal charges on Tuesday the way he so often does: with dishonesty and hyperbole.</p><p>“Today,” he said, “we witness the most evil and heinous abuse of power in the history of our country. Very sad thing to watch. A corrupt sitting president had his top political opponent arrested on fake and fabricated charges of which he and numerous other presidents would be guilty.”</p><p>As exhaustingly familiar as this patter is to outside observers, it remains energizing to some substantial portion of his base. <a href="https://www.washingtonpost.com/elections/candidates/joe-biden-2024/?itid=lk_inline_manual_5" target="_blank"><em>President Biden</em></a><em> </em>is<em> corrupt! </em>they’re invited to think. <em>This whole thing </em>is <em>unfair!</em><span>﻿</span></p><p>So by the time Trump gets into the next phase of his speech — the criminal defendant’s explanation of the legal failings of the case against him — they’re already nodding along. He ropes them in with the cozy familiarity of “everyone is out to get me, by which I mean us” and then outlines the scattershot arguments they can deploy in his defense. The indictment details numerous examples of Trump allegedly seeking to avoid turning over documents? Well: <em>Presidential Records Act!</em> Check and mate.</p>',
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
                    heading: 'House to consider GOP measure to censure Schiff as early as Wednesday',
                    contents: '<p><span>The Republican-led House is expected to consider a measure as early as Wednesday that would censure Rep. Adam B. Schiff (D-Calif.) for pressing allegations that former president Donald Trump’s 2016 campaign colluded with Russia.</span></p><p>The resolution also seeks to fine Schiff, the former House Intelligence Committee chairman, $16 million, which its sponsor, Rep. Anna Paulina Luna (R-Fla.), says is half the cost of an investigation into the alleged collusion.<span>﻿</span></p><p>Luna introduced the measure Tuesday, the same day Trump was arraigned in a federal courthouse in Miami on charges that he broke the law dozens of times by keeping and hiding classified documents in his Florida home. Luna’s measure is a privileged resolution, which means that under House rules it must be considered by Thursday.</p>',
                    categories: [{ name: 'Politics' }],
                    comments: [
                      { content: 'This is an important topic to discuss.', author: { username: 'Tylich' } },
                      { content: 'We need to take immediate action to mitigate climate change.', author: { username: 'Slavo' } },
                    ],
                    approved: false,
                  },
                ],
              },
              {
                date: twoDaysInFuture,
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
            role: RoleRecordTypeEnumeration[0],
          },
          {
            username: 'Tylich',
            email: 'Tylich@example.com',
            passwordHash: Tylichpwd,
            role: RoleRecordTypeEnumeration[1],
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
            newspaperImg: 'ElPais.png',
            newspaperCopies: [
              {
                date: new Date(),
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
                date: tommorow,
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
            role: RoleRecordTypeEnumeration[0],
          },
        ],
      },
      {
        name: 'Starlight Media',
        newspapers: [
          {
            name: 'The Washington Post',
            newspaperImg: `${ourPhotot}`,
            newspaperCopies: [
              {
                date: new Date(),
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
                date: tommorow,
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
            role: RoleRecordTypeEnumeration[0],
          },
          {
            username: 'Hanys',
            email: 'Hanys@example.com',
            passwordHash: Tylichpwd,
            role: RoleRecordTypeEnumeration[1],
          },
        ],
      },
      {
        name: 'Pacific Press Agency',
        newspapers: [
          {
            name: 'The Times of India',
            newspaperImg: 'TOI6.png',
            newspaperCopies: [
              {
                date: new Date(),
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
                date: tommorow,
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
            newspaperImg: 'LeMonde.png',
            newspaperCopies: [
              {
                date: tommorow,
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
                date: twoDaysInFuture,
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
  },
  {
    name: 'Environment',
  },
  {
    name: 'Politics',
  },
  {
    name: 'Sport',
  },
  {
    name: 'Food',
  }
]

// The New York Times  :  The Washington Post  : El País : The Times of India : Le Monde : The Washington Post
// 0 Director 1 Manager
export const roles = [
  {
    user: 'Slavo',
    userRoles: [
      { name: RoleRecordTypeEnumeration[0], newspaperName: 'The New York Times' },
      { name: RoleRecordTypeEnumeration[0], newspaperName: 'The Times of India' },
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'The Times of India' },
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'The Washington Post' },
    ],
  },
  {
    user: 'Tylich',
    userRoles: [
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'The New York Times' },
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'The Washington Post' },
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'El País' },
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'The Times of India' },
      { name: RoleRecordTypeEnumeration[1], newspaperName: 'Le Monde' },
      { name: RoleRecordTypeEnumeration[0], newspaperName: 'The Washington Post' },
    ],
  },
  {
    user: 'Vojtech',
    userRoles: [
      {
        name: RoleRecordTypeEnumeration[0],
        newspaperName: 'El País',
      }
    ]
  },
  {
    user: 'Honza',
    userRoles: [
      {
        name: RoleRecordTypeEnumeration[0],
        newspaperName: 'The Washington Post',
      },
      {
        name: RoleRecordTypeEnumeration[1],
        newspaperName: 'The Washington Post',
      }
    ]
  },
  {
    user: 'Hanys',
    userRoles: [
      {
        name: RoleRecordTypeEnumeration[1],
        newspaperName: 'The Washington Post',
      }
    ]
  }
]



