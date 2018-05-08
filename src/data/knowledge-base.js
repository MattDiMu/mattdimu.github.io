export default {
  availableTags: {
    java: 'Java & JVM',
    magnolia: 'Magnolia',
    browser: 'Browser',
    javascript: 'JavaScript',
    css: 'CSS',
    a11y: 'Accessibility',
    network: 'Network',
    performance: 'Performance',
    'package-manager': 'Package Manager',
    osx: 'OSX',
    linux: 'Linux',
    visualization: 'Visualization',
    ux: 'User Experience',
    cs: 'Computer Science',
    security: 'Security',
    mail: 'E-Mail',
    mathematics: 'Mathematics',
    organization: 'Organization',
    interesting: 'Interesting Stuff'
  },
  entries: [
    {
      date: '2018-04-01',
      tags: [
        'osx',
        'package-manager'
      ],
      links: [
        'https://brew.sh/',
        'https://caskroom.github.io/'
      ],
      title: 'Homebrew & Cask',
      description: ''
    },
    {
      date: '2018-04-01',
      tags: [
        'package-manager'
      ],
      links: [
        'https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5'
      ],
      title: 'Sensitive Data Harvesting',
      description: 'About the architecture of npm & yarn and its problems'
    },
    {
      date: '2018-04-02',
      tags: [
        'visualization',
        'ux'
      ],
      links: [
        'https://www.darkhorseanalytics.com/blog/data-looks-better-naked',
        'https://www.darkhorseanalytics.com/blog/data-looks-better-naked-maps-edition',
        'https://www.darkhorseanalytics.com/blog/salvaging-the-pie'
      ],
      title: 'Data looks better naked',
      description: 'recommendations for minimalistic data representations'
    },
    {
      date: '2018-04-04',
      tags: [
        'proc',
        'linux'
      ],
      links: [
        'https://pbs.twimg.com/media/DZ3HpVXXkAEgxpc.jpg:large'
      ],
      title: 'Linux proc directory Cheat Sheet',
      description: ''
    },
    {
      date: '2018-04-04',
      links: [
        'https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66'
      ],
      title: 'Using zero-width-characters for hiding information'
    },
    {
      date: '2018-04-05',
      tags: [
        'browser'
      ],
      links: [
        'https://www.youtube.com/watch?v=hQZ7Xg7q7zw'
      ],
      title: 'How Browser handle Images',
      description: `JPG vs PNG vs WebP vs HEIF
        Download -> Decode -> VRAM -> Composite
        Techniques: blur up, contrast swap like jpg, histogram scope reduction ~20%
        consider missing css filters on shared images`
    },
    {
      date: '2018-04-06',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/supermanitu/how-does-a-map-work-2l94'
      ],
      title: 'How a Map works under the hood',
      description: `calculating memory address space
        collision avoidance strategies: Linear hashing, Double Hashing, Linked List
        O(1) for insertion, random access and deletion, but Linked List based Maps have O(n) for random access and deletion`
    },
    {
      date: '2018-04-07',
      tags: [
        'browser'
      ],
      links: [
        'https://developers.google.com/web/updates/2015/12/getting-started-pwa'
      ],
      title: 'PWA Overview',
      description: ''
    },

    {
      date: '2018-04-08',
      tags: [
        'javascript'
      ],
      links: [
        'https://developers.google.com/web/updates/2018/03/smooshgate'
      ],
      title: 'The problem of extending native prototypes',
      description: ''
    },
    {
      date: '2018-04-08',
      tags: [
        'mail',
        'css'
      ],
      links: [
        'https://www.youtube.com/watch?v=tVQcfghzwJI'
      ],
      title: 'Responsive HTML-Emails',
      description: `webkit 50%, gmail 25%, outlook 13%
        width: calc(480px-100%)*480 => min-width or max width applies`
    },
    {
      date: '2018-04-08',
      tags: [
        'linux'
      ],
      links: [
        'https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units'
      ],
      title: 'Managing sytemd with systemctl',
      description: ''
    },
    {
      date: '2018-04-08',
      tags: [
        'mathematics'
      ],
      links: [
        'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'
      ],
      title: 'Linear Algebra Video '
    },
    {
      date: '2018-04-09',
      tags: [
        'organization'
      ],
      links: [
        'https://www.youtube.com/watch?v=kmblhEj9BSA'
      ],
      title: 'Code Review & Time Management'
    },
    {
      date: '2018-04-09',
      tags: [
        'java'
      ],
      links: [
        'https://www.javacodegeeks.com/2018/04/jvm-architecture-overview-of-jvm-and-jvm-architecture.html'
      ],
      title: 'Overview of JVM and JVM Architecture'
    },
    {
      date: '2018-04-10',
      tags: [
        'javascript'
      ],
      links: [
        'https://codeburst.io/understanding-javascript-proxies-by-examining-on-change-library-f252eddf76c2',
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy'
      ],
      title: 'JavaScript Proxies',
      description: 'target (object), traps (intercepted operation) & handler (object containing all traps)'
    },
    {
      date: '2018-04-10',
      tags: [
        'javascript'
      ],
      links: [
        'https://developers.google.com/web/updates/2015/03/introduction-to-fetch',
        'https://developers.google.com/web/updates/2017/09/abortable-fetch',
        'https://developer.mozilla.org/en-US/docs/Web/API/AbortController'
      ],
      title: 'A refresher on fetch API and the experimental AbortController',
      description: ''
    },
    {
      date: '2018-04-10',
      tags: [
        'css',
        'javascript'
      ],
      links: [
        'https://developers.google.com/web/updates/2018/03/cssom'
      ],
      title: 'CSSOM vs CSS Typed Object Model',
      description: ''
    },
    {
      date: '2018-04-10',
      tags: [
        'interesting'
      ],
      links: [
        'https://pudding.cool/2018/02/waveforms/'
      ],
      title: 'An interactive explanation of (audio) waveforms',
      description: ''
    },
    {
      date: '2018-04-10',
      tags: [
        'javascript',
        'a11y'
      ],
      links: [
        'https://hackernoon.com/its-a-focus-trap-699a04d66fb5'
      ],
      title: 'Focus Lock - a technique for accessible modal dialogs',
      description: ''
    },
    {
      date: '2018-04-11',
      tags: [
        'javascript',
        'browser',
        'a11y'
      ],
      links: [
        'https://de.udacity.com/course/web-accessibility--ud891'
      ],
      title: 'Udacity Web Accessibility',
      description: ''
    },
    {
      date: '2018-04-11',
      tags: [
        'javascript',
        'browser',
        'performance'
      ],
      links: [
        'https://alistapart.com/article/going-offline'
      ],
      title: 'History of Service Workers',
      description: 'Same Origin & HTTPS Only (like geolocation, payments api or notifications api)'
    },
    {
      date: '2018-04-13',
      tags: [
        'javascript'
      ],
      links: [
        'https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841'
      ],
      title: 'Recap of JavaScript/TypeScript Decorators',
      description: ''
    },
    {
      date: '2018-04-14',
      tags: [
        'mathematics'
      ],
      links: [
        'https://www.youtube.com/watch?v=yk6wbvNPZW0'
      ],
      title: 'Visualising irrationality with triangular squares and other geometrical figures',
      description: ''
    },
    {
      date: '2018-04-15',
      tags: [
        'javascript'
      ],
      links: [
        'http://2ality.com/2017/08/promise-callback-data-flow.html'
      ],
      title: 'Passing data between Promise callbacks',
      description: ''
    },
    {
      date: '2018-04-16',
      tags: [
        'linux'
      ],
      links: [
        'https://drawings.jvns.ca/proc/'
      ],
      title: 'About the /proc directory',
      description: ''
    },
    {
      date: '2018-04-17',
      tags: [
        'javascript',
        'browser'
      ],
      links: [
        'https://youtu.be/wFLJARWVPlc'
      ],
      title: 'Jake Archibald - In The Loop',
      description: ''
    },
    {
      date: '2018-04-17',
      tags: [
        'linux'
      ],
      links: [
        'https://drawings.jvns.ca/file-descriptors/'
      ],
      title: 'File Descriptors',
      description: ''
    },
    {
      date: '2018-04-18',
      tags: [
        'network'
      ],
      links: [
        'https://drawings.jvns.ca/layers/'
      ],
      title: 'Network Layers',
      description: ''
    },
    {
      date: '2018-04-19',
      tags: [
        'interesting'
      ],
      links: [
        'https://daverupert.com/2018/04/eponymous-laws-of-tech/'
      ],
      title: 'tech-related laws, fallacies, and other wisdom',
      description: `Bezos’ Two-Pizza Rule
                    Brooks' Law
                    Cunningham’s Law
                    Dunning-Kruger Effect
                    Miller’s Law`
    },
    {
      date: '2018-04-19',
      tags: [
        'css',
        'browser'
      ],
      links: [
        'https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3'
      ],
      title: 'Recap: Critical Rendering Path',
      description: ''
    },
    {
      date: '2018-04-20',
      tags: [
        'linux'
      ],
      links: [
        'https://drawings.jvns.ca/bashtips/'
      ],
      title: 'Bash (scripting) cheat sheet',
      description: ''
    },
    {
      date: '2018-04-21',
      tags: [
        'design',
        'browser',
        'css'
      ],
      links: [
        'https://eu.udacity.com/course/responsive-web-design-fundamentals--ud893'
      ],
      title: 'Udacity Responsive Web Design fundamentals',
      description: ''
    },
    {
      date: '2018-04-14',
      tags: [
        'js',
        'css',
        'browser',
        'network',
        'performance'
      ],
      links: [
        'https://eu.udacity.com/course/browser-rendering-optimization--ud860'
      ],
      title: 'Udacity Browser Rendering Optimization',
      description: ''
    },
    {
      date: '2018-04-23',
      tags: [
        'js'
      ],
      links: [
        'https://www.youtube.com/watch?v=QOnUcU8U_XE'
      ],
      title: 'Excellent explanation of generators in JavaScript',
      description: ''
    },
    {
      date: '2018-04-25',
      tags: [
        'cs',
        'interesting'
      ],
      links: [
        'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'
      ],
      title: 'Playlist Neural Networks',
      description: 'neuron, multiple lines for patterns/subcomponents, backpropagation, lines = weight, which neuron affects the weighted sum most?, local minimum, huge learning data, good recognition, bad for creation'
    },
    {
      date: '2018-04-28',
      tags: [
        'javascript'
      ],
      links: [
        'https://youtu.be/W4brAobC2Hc'
      ],
      title: 'Iterators in JavaScript',
      description: ''
    },
    {
      date: '2018-04-30',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/vaidehijoshi/whats-a-linked-list-anyway',
        'https://dev.to/vaidehijoshi/whats-a-linked-list-anyway-part-2'
      ],
      title: 'How Linked Lists work under the hood',
      description: ''
    },
    {
      date: '2018-05-01',
      tags: [
        'javascript',
        'browser'
      ],
      links: [
        'https://www.rainerhahnekamp.com/en/javascript-essentials-the-engine/'
      ],
      title: 'Inline Caching in V8',
      description: ''
    },
    {
      date: '2018-05-03',
      tags: [
        'javascript'
      ],
      links: [
        'http://2ality.com/2018/04/async-iter-nodejs.html'
      ],
      title: 'Async iteration in node.js',
      description: ''
    },
    {
      date: '2018-05-04',
      tags: [
        'cs',
        'network',
        'javascript'
      ],
      links: [
        'https://medium.com/@wedekind.kai/rest-in-peace-long-live-graphql-f53e269c466d'
      ],
      title: 'GraphQL Recap',
      description: ''
    },
    {
      date: '2018-05-08',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/supermanitu/what-does-big-o-notation-mean-anyway--1hea'
      ],
      title: 'Recap Big O Notation - Landau-Symbole',
      description: ''
    }
  ]
};

