export default {
  availableTags: {
    javascript: 'JavaScript',
    browser: 'Browser',
    java: 'Java',
    magnolia: 'Magnolia',
    network: 'Network',
    css: 'CSS',
    osx: 'OSX',
    linux: 'Linux',
    visualization: 'Visualization',
    ux: 'User Experience',
    cs: 'Computer Science',
    security: 'Security',
    mail: 'E-Mail',
    mathematics: 'Mathematics',
    'package-manager': 'Package Manager',
    organization: 'Organization'
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
      description: ``
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
    }  
  ]
};
