export const navbarData = {
  homeTitle: "UrBlueDr's Blog",
}

export const footerData = {
  author: 'Puamus Oki Babas',
  aboutAuthor: `Hi! I am Yourbluedoctor, A writer, music enthusiast, History Buff , and Amature Chess player. Currently licenced to practice as a Medical Doctor in 🇺🇦🇳🇬🇬🇧`,
  authorInterest:
    "I have a fair amount of knowledge of Music, History, and Chess. If you have an interesting idea, let's connect.",
  aboutTheSite:
    'This is a personal blog site built with Medicine, Lifestyle, and Healthcare. Currently being created in my free time.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Get Medicine, Healthcare and lifestyle Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Puamus Oki Babas',
  description: 'Music enthusiast, History Buff and Chess Prodigy.',
  aboutMe: `When not busy saving lives and writing witty prescriptions, you can find this doctor:
  
  Debunking health myths with a side of humor.
  Sharing expert advice that's easy to understand (and sometimes, easy to laugh at).
  Trying to convince patients that "eat your veggies" isn't just a suggestion. 🥦
  So, sit back, relax, and let Dr. Blue be your go-to source for all things health and hilarity.`,
}

export const seoData = {
  title: `UrBlueDr's Blog | UrBlueDr's Blog`,
  ogTitle: `Let's learn Medicine, Healthcare, lifestyle & Problem Solving - UrBlueDrs Blog | UrBlueDr's Blog`,
  description: `Hi I am UrBlueDr. A Music enthusiast, History Buff and Chess Prodigy. - UrBlueDrs Blog | UrBlueDr's Blog`,
  twitterDescription: `UrBlueDr's Blog, where you get Medicine, Healthcare and lifestyle Related Articles, Tips, Learning resources and more. - UrBlueDrs Blog | UrBlueDr's Blog`,
  image:
    'https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/37657158_2028957410469057_7623800265908420608_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyODg1LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=3MReU4nZjCYQ7kNvgEvQg66&_nc_gid=69b3b818e41f425085277586181198b9&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MTgzOTE0NzMyOTg2OTk5Nzk2OA%3D%3D.3-ccb7-5&oh=00_AYC11yea-3yVzWuHQFiCG9TA9V-c3NXGNfvS36qf136UhA&oe=675A2D2D&_nc_sid=7a9f4b',
  mySite: 'https://blog-UrBlueDr.vercel.app',
  twitterHandle: '@yourbluedoctor',
  mailAddress: 'info@bluniverse.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
