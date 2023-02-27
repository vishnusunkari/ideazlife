const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://ideazlife.com',
    gaTrackingId: 'G-3PDJXFVFNH',
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      'IDEAZ <span class="text-primary">LIFE</span>',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/techgry1" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index',
      '/pages/about',// add trailing slash if enabled above
      '/aws',
      '/java',
      '/kafka',
      '/concepts',
      '/datastructures'
    ],
    collapsedNav: [
      '/aws',
    ],
    links: [
              { text: 'Tweet Me', link: 'https://twitter.com/techgry1' }, 
              { text: 'Privacy Policy', link: '/pages/privacypolicy' },
              { text: 'Terms and Conditions', link: '/pages/terms-and-conditions' },
              { text: 'Disclaimer', link: '/pages/disclaimer' },
           ],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='/'>Home </a><div class='greenCircle'></div>" +
      "<a href='/pages/about'>About </a><div class='greenCircle'></div>" +
      "<a href='/pages/about-me'>Me</a>",
  },
  siteMetadata: {
    title: 'IdeazLife',
    description: 'Documentation built with mdx.  ',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'IdeazLife',
      short_name: 'IdeazLife',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      /*icons: [
        {
          src: 'pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],*/
    },
  },
};

module.exports = config;
