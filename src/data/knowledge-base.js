/* eslint-disable quotes,linebreak-style,comma-dangle,quote-props */
export default {
  availableTags: {
    java: 'Java & JVM',
    spring: 'Spring',
    magnolia: 'Magnolia',
    browser: 'Browser',
    javascript: 'JavaScript',
    seo: 'SEO',
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
    interesting: 'Interesting Stuff',
    shell: 'Shell'
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
        'https://youtu.be/wFLJARWVPlc',
        'https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/'
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
      date: '2018-05-23',
      tags: [
        'network'
      ],
      links: [
        'https://drawings.jvns.ca/layers/',
        'https://en.wikipedia.org/wiki/OSI_model'
      ],
      title: 'Network Layers',
      description: ''
    },
    {
      date: '2018-09-25',
      tags: [
        'interesting'
      ],
      links: [
        'https://daverupert.com/2018/04/eponymous-laws-of-tech/',
        'https://en.wikipedia.org/wiki/Ninety-ninety_rule'
      ],
      title: 'tech-related laws, fallacies, and other wisdom',
      description: `Bezos’ Two-Pizza Rule
                    Brooks' Law
                    Cunningham’s Law
                    Dunning-Kruger Effect
                    Miller’s Law
                    Ninety-Ninety rule`
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
    },
    {
      date: '2018-05-09',
      tags: [
        'javascript'
      ],
      links: [
        'http://2ality.com/2018/05/child-process-streams.html'
      ],
      title: 'Async messaging with child processes in node.js',
      description: ''
    },
    {
      date: '2018-05-12',
      tags: [
        'interesting'
      ],
      links: [
        'https://www.youtube.com/watch?v=ubHVK71F01M'
      ],
      title: 'Golden Ratio spirals visualized',
      description: ''
    },
    {
      date: '2018-05-14',
      tags: [
        'cs',
        'javascript'
      ],
      links: [
        'https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67'
      ],
      title: 'Recap: Stacks and Overflows',
      description: `LIFO principle, often implemented as singly linked lists,
                    => time complexity O(1) for adding/removing elements,
                    call stack consists of stack frames (e.g. for each functions)`
    },
    {
      date: '2018-05-14',
      tags: [
        'cs',
        'javascript'
      ],
      links: [
        'https://dev.to/vaidehijoshi/to-queue-or-not-to-queue'
      ],
      title: 'Recap: Queues',
      description: `FIFO principle, often implemented as linked lists, 
                    => enqueuing & dequeuing time complexity of O(1)
                    multilevel priority queue`
    },
    {
      date: '2018-05-16',
      tags: [
        'java'
      ],
      links: [
        'https://www.journaldev.com/349/java-classloader'
      ],
      title: 'Java Classloader',
      description: `Bootstrap Class Loader (class.getClassLoader() = null) > Extensions Class Loader > System Class Loader
classes have only access to classes loaded by same or parent class loaders, not by sibling class loaders`
    },
    {
      date: '2018-05-17',
      tags: [
        'interesting'
      ],
      links: [
        'https://www.youtube.com/watch?v=p-0SOWbzUYI'
      ],
      title: 'Pythagorean theorem proofs',
      description: ``
    },
    {
      date: '2018-05-19',
      tags: [
        'interesting'
      ],
      links: [
        'https://www.youtube.com/watch?v=YuIIjLr6vUA'
      ],
      title: 'Why 1+2+3+... != -1/12',
      description: ``
    },
    {
      date: '2018-05-21',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.youtube.com/watch?v=wrI-Jb0oFyk'
      ],
      title: 'Async generators in JavaScript',
      description: ``
    },
    {
      date: '2018-05-21',
      tags: [
        'interesting',
        'security',
        'java'
      ],
      links: [
        'https://media.ccc.de/v/34c3-8805-die_fabelhafte_welt_des_mobilebankings#t=1'
      ],
      title: '2FA, App App Hardening and mobile Onlinebanking',
      description: ``
    },
    {
      date: '2018-05-22',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.youtube.com/watch?v=I5oDbp_U-fQ'
      ],
      title: 'Async iterators (for await ... of) in JavaScript',
      description: ``
    },
    {
      date: '2018-05-22',
      tags: [
        'ux'
      ],
      links: [
        'https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886'
      ],
      title: 'RefactoringUi design tricks',
      description: ``
    },
    {
      date: '2018-05-23',
      tags: [
        'security',
        'javascript',
        'browser'
      ],
      links: [
        'https://dev.to/rdegges/please-stop-using-local-storage-1i04'
      ],
      title: 'Risks when using localStorage',
      description: ``
    },
    {
      date: '2018-05-23',
      tags: [
        'cs'
      ],
      links: [
        'https://www.youtube.com/watch?v=MBWAP_8zxaM'
      ],
      title: 'Programming Language Design Thoughts by Douglas Crockford',
      description: ``
    },
    {
      date: '2018-05-23',
      tags: [
        'ux'
      ],
      links: [
        'https://www.youtube.com/watch?v=mxzK4sWfvH8'
      ],
      title: 'How Psychology influences UIs',
      description: `users have a bad self-rating: they are distracted, prefer few choices (Hick's Law)
we should try to reduce cognitive load, unlock pin = more declarative, unlock pattern = more procedural/sequential (less cognitive load)`
    },
    {
      date: '2018-05-23',
      tags: [
        'ux'
      ],
      links: [
        'https://www.youtube.com/watch?v=QR4EbVDkWcI'
      ],
      title: 'How Psychology influences UIs',
      description: `Recap: Basic Design Rules`
    },
    {
      date: '2018-05-26',
      tags: [
        'cs'
      ],
      links: [
        'https://www.youtube.com/watch?v=D4auWwMsEnY'
      ],
      title: 'Code Refactoring Recommendations',
      description: ``
    },
    {
      date: '2018-05-29',
      tags: [
        'interesting'
      ],
      links: [
        'https://en.wikipedia.org/wiki/Simpson%27s_paradox'
      ],
      title: 'Simpson\'s paradox',
      description: ``
    },
    {
      date: '2018-05-30',
      tags: [
        'browser',
        'performance'
      ],
      links: [
        'https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts'
      ],
      title: 'Forced Synchronous Layouts & Layout Thrashing',
      description: ``
    },
    {
      date: '2018-06-01',
      tags: [
        'java',
        'cs'
      ],
      links: [
        'https://docs.spring.io/spring/docs/4.3.15.RELEASE/spring-framework-reference/html/aop.html#aop-introduction-defn'
      ],
      title: 'Aspect Oriented Programming Definitions',
      description: ``
    },
    {
      date: '2018-06-04',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/vaidehijoshi/a-gentle-introduction-to-graph-theory'
      ],
      title: 'Recap: Graph Theory',
      description: ``
    },
    {
      date: '2018-06-05',
      tags: [
        'browser',
        'performance'
      ],
      links: [
        'https://csswizardry.com/2017/07/performance-and-resilience-stress-testing-third-parties/'
      ],
      title: 'Stress-Testing 3rd party dependencies in the browser',
      description: ``
    },
    {
      date: '2018-06-06',
      tags: [
        'browser',
        'javascript'
      ],
      links: [
        'https://kryogenix.org/code/browser/everyonehasjs.html'
      ],
      title: 'Illustration why JavaScript might not work for everyone',
      description: ``
    },
    {
      date: '2018-06-13',
      tags: [
        'browser',
        'javascript'
      ],
      links: [
        'https://blog.phantombuster.com/web-scraping-in-2017-headless-chrome-tips-tricks-4d6521d695e8'
      ],
      title: 'Tips for web scraping with headless chrome',
      description: ``
    },
    {
      date: '2018-06-13',
      tags: [
        'java',
        'spring'
      ],
      links: [
        'https://www.journaldev.com/21429/spring-component',
        'https://www.journaldev.com/21435/spring-service-annotation',
        'https://www.journaldev.com/21460/spring-repository-annotation',
        'https://www.journaldev.com/14476/spring-mvc-example#spring-mvc-controller-class'
      ],
      title: 'Spring Boot @Component and specialized @Service, @Repository and @Controller annotations',
      description: ``
    },
    {
      date: '2018-06-13',
      tags: [
        'java',
        'spring'
      ],
      links: [
        'http://www.baeldung.com/properties-with-spring',
      ],
      title: 'Spring Boot @PropertySource and @Value annotations',
      description: ``
    },
    {
      date: '2018-06-13',
      tags: [
        'css',
        'browser',
        'performance'
      ],
      links: [
        'https://csswizardry.com/2018/06/image-inconsistencies-how-and-when-browsers-download-images/',
      ],
      title: 'How and when browsers download images',
      description: ``
    },
    {
      date: '2018-06-13',
      tags: [
        'java',
        'spring'
      ],
      links: [
        'https://www.youtube.com/watch?v=Sw7I70vjN0E',
      ],
      title: 'Spring boot annotation magic demystified',
      description: ``
    },
    {
      date: '2018-06-29',
      tags: [
        'css'
      ],
      links: [
        'https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/',
      ],
      title: 'ch unit in css',
      description: `60ch ~ 80 characters`
    },
    {
      date: '2018-07-02',
      tags: [
        'java'
      ],
      links: [
        'https://www.javacodegeeks.com/2018/06/java-8-language-features-nutshell-part-1.html',
      ],
      title: 'Functional Interfaces, Lambda expressions & Default Methods',
      description: ``
    },
    {
      date: '2018-07-03',
      tags: [
        'java'
      ],
      links: [
        'https://www.javacodegeeks.com/2018/07/java-8-language-features-part-2.html',
      ],
      title: 'Static methods in Interfaces & Streams',
      description: ``
    },
    {
      date: '2018-07-04',
      tags: [
        'network'
      ],
      links: [
        'https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236',
      ],
      title: `L4 vs L7
              Active vs Passive Health Checking, Loadbalancing, Sticky Sessions (fragile), TLS termination, Observability, DoS mitigation, Tarpitting & Security, 
              topologies: middle prox & edge proxy, embedded client library, sidecar proxy / service mesh`,
      description: ``
    },
    {
      date: '2018-07-06',
      tags: [
        'shell'
      ],
      links: [
        'https://drawings.jvns.ca/bashtips/',
      ],
      title: `Common bash tips`,
      description: ``
    },
    {
      date: '2018-10-23',
      tags: [
        'ux',
        'ui'
      ],
      links: [
        'https://www.theverge.com/2013/8/29/4640308/dark-patterns-inside-the-interfaces-designed-to-trick-you',
        'https://thedesignest.net/see-now-dark-patterns-design/'
      ],
      title: `Dark Pattern in UIs`,
      description: `trick questions, forced continuity, misdirection, constrained software`
    },
    {
      date: '2018-07-09',
      tags: [
        'java'
      ],
      links: [
        'http://www.baeldung.com/java-in-2018',
      ],
      title: `State of Java 2018`,
      description: ``
    },
    {
      date: '2018-07-10',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/trekhleb/dynamic-programming-vs-divide-and-conquer-218i',
      ],
      title: `Dynamic Programming vs Divide and Conquer`,
      description: ``
    },
    {
      date: '2018-07-10',
      tags: [
        'css',
        'browser'
      ],
      links: [
        'https://codepen.io/MattDiMu/pen/LBVpjm',
      ],
      title: `A lesson in browser standards: The single <div>, that looks different everywhere.`,
      description: ``
    },
    {
      date: '2018-07-12',
      tags: [
        'java'
      ],
      links: [
        'https://www.javacodegeeks.com/2018/07/fixing-if-smell.html',
      ],
      title: `Checks for range of values.`,
      description: `Collections.unmodifiableSet(new HashSet(Arrays.asList(xx,yy,zz)))`
    },
    {
      date: '2018-07-12',
      tags: [
        'java'
      ],
      links: [
        'http://www.baeldung.com/java-classloaders',
      ],
      title: `Java Classloaders`,
      description: ``
    },
    {
      date: '2018-07-15',
      tags: [
        'cs'
      ],
      links: [
        'https://en.wikipedia.org/wiki/SOLID',
      ],
      title: `SOLID principles in OOP`,
      description: ``
    },
    {
      date: '2018-07-16',
      tags: [
        'java'
      ],
      links: [
        'http://www.baeldung.com/javax-validation',
      ],
      title: `Java Bean validation - jsr380`,
      description: ``
    },
    {
      date: '2018-07-17',
      tags: [
        'ux'
      ],
      links: [
        'https://www.w3.org/TR/html5/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      ],
      title: `Html Autocomplete attribute`,
      description: ``
    },
    {
      date: '2018-07-17',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/pieohpah/memoization-in-a-nutshell-5072',
      ],
      title: `Memoization in a nutshell`,
      description: ``
    },
    {
      date: '2018-07-17',
      tags: [
        'java'
      ],
      links: [
        'https://dzone.com/articles/how-to-change-private-static-final-fields',
      ],
      title: `Changing (hacking) private static final fields in unit tests`,
      description: ``
    },
    {
      date: '2018-07-18',
      tags: [
        'css',
        'performance'
      ],
      links: [
        'https://www.sitepoint.com/optimizing-css-id-selectors-and-other-myths/',
      ],
      title: `CSS Selector Peformance Update 2018`,
      description: ``
    },
    {
      date: '2018-07-18',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/aershov24/9-unusual-design-patterns-interview-question-with-answers-3gjl',
      ],
      title: `Design Patterns Interview Questions`,
      description: ``
    },
    {
      date: '2018-07-19',
      tags: [
        'java'
      ],
      links: [
        'https://www.javacodegeeks.com/2018/04/jvm-architecture-overview-of-jvm-and-jvm-architecture.html',
      ],
      title: `JVM Architecture & Components`,
      description: ``
    },
    {
      date: '2018-07-24',
      tags: [
        'browser'
      ],
      links: [
        'https://scotthelme.co.uk/a-new-security-header-feature-policy/',
      ],
      title: `HTTP Security Header: Feature-Policy`,
      description: ``
    },
    {
      date: '2018-07-25',
      tags: [
        'spring'
      ],
      links: [
        'http://www.baeldung.com/spring-data-jpa-query',
      ],
      title: `Spring Data JPA Queries`,
      description: ``
    },
    {
      date: '2018-07-25',
      tags: [
        'css',
        'a11y'
      ],
      links: [
        'https://developer.paciellogroup.com/blog/2016/12/windows-high-contrast-mode-the-limited-utility-of-ms-high-contrast/',
      ],
      title: `Windows High contrast mode -ms-high-contrast`,
      description: ``
    },
    {
      date: '2018-07-27',
      tags: [
        'shell'
      ],
      links: [
        'https://pbs.twimg.com/media/DjFb_FPX4AAOwpa?format=jpg',
      ],
      title: `lsof`,
      description: ``
    },
    {
      date: '2018-07-29',
      tags: [
        'cs'
      ],
      links: [
        'https://en.wikipedia.org/wiki/Quicksort',
      ],
      title: `Quicksort Algorithm`,
      description: `time complexity: Avg O(n log n), Worst O(n²), space complexity: from O(n) to O(n log n)`
    },
    {
      date: '2018-07-30',
      tags: [
        'cs'
      ],
      links: [
        'https://en.wikipedia.org/wiki/Selection_sort',
      ],
      title: `Selection sort Algorithm`,
      description: `time complexity: Worst, Avg and Best is O(n²) comparisons + O(n) swaps, space complexity: O(1)`
    },
    {
      date: '2018-08-01',
      tags: [
        'java'
      ],
      links: [
        'http://www.baeldung.com/java-timer-and-timertask',
      ],
      title: `TimerTask vs ScheduledThreadPoolExecutor`,
      description: ``
    },
    {
      date: '2018-08-01',
      tags: [
        'java'
      ],
      links: [
        'https://javarevisited.blogspot.com/2012/01/how-to-write-thread-safe-code-in-java.html',
      ],
      title: `Java Thread Safety`,
      description: ``
    },
    {
      date: '2018-08-02',
      tags: [
        'browser'
      ],
      links: [
        'https://developers.google.com/web/updates/2018/06/feature-policy',
      ],
      title: `HTTP-Header Feature-Policy`,
      description: ``
    },
    {
      date: '2018-08-02',
      tags: [
        'browser',
        'security'
      ],
      links: [
        'https://en.wikipedia.org/wiki/IDN_homograph_attack',
      ],
      title: `IDN Homograph Attack`,
      description: ``
    },
    {
      date: '2018-08-04',
      tags: [
        'javascript'
      ],
      links: [
        'https://alligator.io/angular/httpclient-intro/',
        'https://alligator.io/angular/httpclient-interceptors/'
      ],
      title: `Angular HttpClient`,
      description: ``
    },
    {
      date: '2018-08-04',
      tags: [
        'interesting'
      ],
      links: [
        'https://www.youtube.com/watch?v=-YpwsdRKt8Q',
      ],
      title: `Data Mining Spiegel Online by David Kriesel (de)`,
      description: ``
    },
    {
      date: '2018-08-05',
      tags: [
        'java'
      ],
      links: [
        'https://www.youtube.com/watch?v=-YpwsdRKt8Q',
      ],
      title: `Try-With-Resources instead of finalize methods`,
      description: `GC is implenetation-specific, may occur too late for system resources, finalize may be slow, exceptions in finalize method create corrupt objects => finalize deprecated since Java 9. Autocloseable and Try-With-Resources to the rescue.`
    },
    {
      date: '2018-08-05',
      tags: [
        'javascript',
        'browser'
      ],
      links: [
        'https://eu.udacity.com/course/front-end-frameworks--ud894'
      ],
      title: `Front End Frameworks under the hood`,
      description: ``
    },
    {
      date: '2018-08-06',
      tags: [
        'javascript',
        'performance'
      ],
      links: [
        'https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4',
      ],
      title: `The cost of JavaScript (2018 edition)`,
      description: ``
    },
    {
      date: '2018-08-07',
      tags: [
        'javascript'
      ],
      links: [
        'http://reactivex.io/rxjs/manual/overview.html'
      ],
      title: `Reactive Programming using RxJS`,
      description: `EventEmitters are eager, Observables are lazy (but not async)
EventHandler APIs register listeneres, common Observables do not.
Subscribe call starts Observable execution and delivers the values/events
Observer = consumer of these values from the Observable. Possible notifications: /next*(error|complete)?/
Subject = special type of Observable, also an Observer, maintains a list of observers and may be used for multicast
BehaviorSubject = Subject which maintains a "current value"
ReplaySubject = BehaviorSubject which records multiple bygone values
AsyncSubject = Subject which sends only the last value and only when it completes
Operators generate new transformed Observables from existing ones (pure)
Schedulers control when the subscription starts and notfications are delivered
`
    },
    {
      date: '2018-08-07',
      tags: [
        'seo',
        'accessibility'
      ],
      links: [
        'https://en.wikipedia.org/wiki/Schema.org',
        'https://schema.org'
      ],
      title: `Semantic web & schema.org`,
      description: `Microdata: [itemscope][itemtype="..."] [itemprop=""]
JSON-LD (JavaScript Object Notation for Linked Data) <script type="application/ld+json">{...}</script>
RDFa Lite (Resource Description Framework in attributes) [vocab="..."] [typeof="..."] [property=""]
Microformats (class naming conventions) is not supported by schema.org`
    },
    {
      date: '2018-08-09',
      tags: [
        'network',
        'security',
        'browser'
      ],
      links: [
        'https://eu.udacity.com/course/client-server-communication--ud897'
      ],
      title: `Recap: Client-Server Communication`,
      description: ``
    },
    {
      date: '2018-08-10',
      tags: [
        'cs',
        'security'
      ],
      links: [
        'https://www.youtube.com/watch?v=E0_Y53ci9cw'
      ],
      title: `Software Development Antipatterns 34C3 (de)`,
      description: ``
    },
    {
      date: '2018-08-10',
      tags: [
        'interesting',
        'mathematics'
      ],
      links: [
        'https://www.youtube.com/watch?v=uCsD3ZGzMgE'
      ],
      title: `The Josephus problem aka detecting patterns`,
      description: ``
    },
    {
      date: '2018-08-20',
      tags: [
        'java'
      ],
      links: [
        'https://www.rainerhahnekamp.com/en/publishing-a-java-library-to-maven-central/'
      ],
      title: `Publishing a java library to maven central`,
      description: ``
    },
    {
      date: '2018-08-25',
      tags: [
        'java'
      ],
      links: [
        'https://examples.javacodegeeks.com/enterprise-java/sql-enterprise-java/jdbc-driver-types-example/',
        'https://en.wikipedia.org/wiki/JDBC_driver'
      ],
      title: `JDBC Drivers`,
      description: `Type 1: JDBC – ODBC Bridge
Type 2: Native API Driver
Type 3: Network Protocol Driver (Middleware Driver)
Type 4: Database Protocol Driver (Pure Java) or thin driver`
    },
    {
      date: '2018-08-25',
      tags: [
        'javascript'
      ],
      links: [
        'https://medium.com/dailyjs/angular-cli-6-under-the-hood-builders-demystified-f0690ebcf01'
      ],
      title: `Angular CLI Builders`,
      description: ``
    },
    {
      date: '2018-09-02',
      tags: [
        'java',
      ],
      links: [
        'http://www.vogella.com/tutorials/EclipseMemoryAnalyzer/article.html',
      ],
      title: 'Introduction: Eclipse Memory Analyzer',
      'description': ``
    },
    {
      date: '2018-09-05',
      tags: [
        'java',
      ],
      links: [
        'https://www.baeldung.com/java-uuid',
      ],
      title: 'Java uuid/guid',
      'description': ``
    },
    {
      date: '2018-09-09',
      tags: [
        'javascript',
      ],
      links: [
        'https://www.valentinog.com/blog/js-execution-context-call-stack/',
      ],
      title: 'JS-Engine: Execution Context, Global Memory and Call Stack.',
      'description': ``
    },
    {
      date: '2018-09-10',
      tags: [
        'css',
      ],
      links: [
        'https://www.youtube.com/watch?v=7kVeCqQCxlk',
      ],
      title: 'CSS Grid',
      'description': ``
    },
    {
      date: '2018-09-13',
      tags: [
        'package-manager',
        'javscript'
      ],
      links: [
        'https://github.com/yarnpkg/rfcs/files/2378943/Plugnplay.pdf',
      ],
      title: `Yarn Plug'n'PLay RFC`,
      'description': ``
    },
    {
      date: '2018-09-18',
      tags: [
        'javscript'
      ],
      links: [
        'https://engineering.linkedin.com/blog/2018/03/how-we-built-the-same-app-twice-with-preact-and-glimmerjs',
      ],
      title: `SSR, Preact and Glimmer benchmarks`,
      'description': ``
    },
    {
      date: '2018-09-20',
      tags: [
        'javscript'
      ],
      links: [
        'https://dev.to/nickyhajal/demystifying-arrayreduce-how-to-understand-it-and-when-to-use-it-in-your-code-5b96',
      ],
      title: `JavaScripts Array.prototype.reduce`,
      'description': ``
    },
    {
      date: '2018-09-24',
      tags: [
        'cs'
      ],
      links: [
        'https://dev.to/theoutlander/how-can-you-swap-two-variables-without-using-a-third-2f30',
      ],
      title: `Swapping two variables using bitwise operators`,
      'description': `x = x ^ y
y = x ^ y
x = x ^ y
`
    },
    {
      date: '2018-09-24',
      tags: [
        'cs'
      ],
      links: [
        'http://ookami86.github.io/event-sourcing-in-practice/index.html',
      ],
      title: `Event Sourcing vs Command Sourcing`,
      'description': `Problems: side effects, reporting & queries, versioning of events, concurrent writes`
    },
    {
      date: '2018-10-30',
      tags: [
        'performance',
        'browser'
      ],
      links: [
        'https://3perf.com/talks/web-perf-101/',
      ],
      title: `Recap: Browser Performance Optimizations`,
      'description': ``
    },
    {
      date: '2018-11-06',
      tags: [
        'java',
        'cs'
      ],
      links: [
        'https://springframework.guru/gang-of-four-design-patterns/template-method-pattern/',
      ],
      title: `Template Method Pattern`,
      'description': ``
    },
    {
      date: '2018-11-12',
      tags: [
        'javascript',
        'browser'
      ],
      links: [
        'https://www.youtube.com/watch?v=XCti72iChzg',
      ],
      title: `Web Components`,
      'description': ``
    },
    {
      date: '2018-11-26',
      tags: [
        'performance',
        'browser'
      ],
      links: [
        'https://bitsofco.de/what-is-first-input-delay',
      ],
      title: `First Input Delay`,
      'description': ``
    },
    {
      date: '2018-11-28',
      tags: [
        'cs',
        'java'
      ],
      links: [
        'https://codeahoy.com/2016/05/08/the-char-type-in-java-is-broken/',
        'https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/'
      ],
      title: `Unicode & Java char problems`,
      'description': ``
    },
    {
      date: '2018-12-13',
      tags: [
        'css',
        'html',
        'performance',
        'browser'
      ],
      links: [
        'https://eu.udacity.com/course/responsive-images--ud882'
      ],
      title: `Recap: Responsive Images`,
      'description': ``
    },
    {
      date: '2018-12-18',
      tags: [
        'java'
      ],
      links: [
        'http://dolszewski.com/java/java-object-equals-contract/'
      ],
      title: `Java Object euqals contract`,
      'description': `hash code collisions are okay`
    },
    {
      date: '2018-12-21',
      tags: [
        'css'
      ],
      links: [
        'https://css-tricks.com/font-display-masses/'
      ],
      title: `CSS font-display`,
      'description': ``
    },
    {
      date: '2018-12-28',
      tags: [
        'javascript',
        'browser'
      ],
      links: [
        'https://eu.udacity.com/course/offline-web-applications--ud899'
      ],
      title: `Udacity IndexedDB, web cache & service workers`,
      'description': ``
    },
    {
      date: '2019-01-03',
      tags: [
        'java'
      ],
      links: [
        'https://www.javacodegeeks.com/2018/12/java-11-new-http-client-api.html'
      ],
      title: `Java 11 HTTP Client API`,
      'description': ``
    },
    {
      date: '2019-01-06',
      tags: [
        'seo'
      ],
      links: [
        'https://dev.to/kunnendavid/how-to-get-250k-pages-indexed-by-google-57ep'
      ],
      title: `Google Indexing for huge sites`,
      'description': ``
    },
    {
      date: '2019-02-07',
      tags: [
        'performance',
        'browser',
        'ux'
      ],
      links: [
        'https://addyosmani.com/blog/usability/'
      ],
      title: `Performance impacts on usability`,
      'description': ``
    },
    {
      date: '2019-03-06',
      tags: [
        'spring',
        'java'
      ],
      links: [
        'https://www.baeldung.com/spring-lookup'
      ],
      title: `Spring lookup`,
      'description': ``
    },
    {
      date: '2019-03-13',
      tags: [
        'css',
        'browser'
      ],
      links: [
        'https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css',
        'https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css',
        'https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css'
      ],
      title: `User Agent Style Sheets`,
      'description': ``
    },
    {
      date: '2019-04-01',
      tags: [
        'js',
        'browser'
      ],
      links: [
        'https://youtu.be/lG7U3fuNw3A'
      ],
      title: `Sanitizing HTML, Pitfalls and Problems`,
      'description': ``
    },
    {
      date: '2019-04-06',
      tags: [
        'js'
      ],
      links: [
        'https://javascriptrefined.io/the-wrapper-object-400311b29151'
      ],
      title: `JavaScript Wrapper Objects`,
      'description': ``
    },
    {
      date: '2019-04-22',
      tags: [
        'java'
      ],
      links: [
        'https://www.baeldung.com/java-lambda-effectively-final-local-variables'
      ],
      title: `Why only (Effectively) final local variables may be used in lambdas.`,
      'description': ``
    },
    {
      date: '2019-05-02',
      tags: [
        'css'
      ],
      links: [
        'https://andy-bell.design/wrote/creating-a-full-bleed-css-utility/'
      ],
      title: `CSS Full Bleed Utility`,
      'description': ``
    },
    {
      date: '2019-07-01',
      tags: [
        'spring'
      ],
      links: [
        'https://www.baeldung.com/configuration-properties-in-spring-boot'
      ],
      title: `Spring Boot Configuration Properties`,
      'description': ``
    },
    {
      date: '2019-07-09',
      tags: [
        'java'
      ],
      links: [
        'https://truth.dev/'
      ],
      title: `Truth Assertion Library`,
      'description': ``
    },
    {
      date: '2019-07-10',
      tags: [
        'javascript'
      ],
      links: [
        'https://samsaccone.com/posts/why-is-my-webpack-build-slow.html'
      ],
      title: `Webpack performance debugging`,
      'description': ``
    },
    {
      date: '2019-07-31',
      tags: [
        'javascript'
      ],
      links: [
        'https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/'
      ],
      title: `Dates in JavaScript`,
      'description': ``
    },
    {
      date: '2019-08-16',
      tags: [
        'javascript',
        'browser'
      ],
      links: [
        'https://www.youtube.com/watch?v=D61EQuTqvvY'
      ],
      title: `Performance of postMessage`,
      'description': `complexity of payload doesn't really matter, lenght does -> currently max. 10kB on low-end`
    },
    {
      date: '2019-09-04',
      tags: [
        'javascript'
      ],
      links: [
        'https://vladmihalcea.com/why-you-should-never-use-the-table-identifier-generator-with-jpa-and-hibernate/'
      ],
      title: 'JPA & Hibernate ID-Generator',
      'description': 'SEQUENCE ftw :)'
    },
    {
      date: '2019-09-23',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.youtube.com/watch?v=wPBjd-vb9eI'
      ],
      title: 'IEEE 754 Implementation in JS',
      'description': ''
    },
    {
      date: '2019-09-28',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.baeldung.com/spring-boot-12-factor'
      ],
      title: 'Twelve-Factor Methodology in a Spring Boot',
      'description': ''
    },
    {
      date: '2019-10-08',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.baeldung.com/spring-aop-vs-aspectj'
      ],
      title: 'Spring AOP vs AspectJ',
      'description': ''
    },
    {
      date: '2019-11-07',
      tags: [
        'javascript'
      ],
      links: [
        'https://hstspreload.org/'
      ],
      title: 'HSTS Preload List / preload flag',
      'description': ''
    },
    {
      date: '2019-11-25',
      tags: [
        'javascript'
      ],
      links: [
        'https://hackernoon.com/the-rise-of-microsoft-visual-studio-code-a3d143490a52'
      ],
      title: 'Editor and IDE Adoption Rate',
      'description': ''
    },
    {
      date: '2019-12-05',
      tags: [
        'javascript'
      ],
      links: [
        'http://www.jenv.be/'
      ],
      title: 'jEnv Java Version Manager',
      'description': ''
    },
    {
      date: '2019-12-10',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.dylanpaulus.com/2019-11-24-how-fb-avoids-adblockers/'
      ],
      title: 'How Facebook Avoids Ad Blockers',
      'description': ''
    },
    {
      date: '2019-12-13',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.baeldung.com/java-runtime-halt-vs-system-exit'
      ],
      title: 'Runtime.getRuntime().halt() vs System.exit()',
      'description': ''
    },
    {
      date: '2019-12-16',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.baeldung.com/running-setup-logic-on-startup-in-spring'
      ],
      title: 'Running Logic on Startup in Spring',
      'description': ''
    },
    {
      date: '2019-12-30',
      tags: [
        'javascript'
      ],
      links: [
        'https://youtu.be/0rb9CfOvojk'
      ],
      title: '36C3 - BahnMining by David Kriesel (DE)',
      'description': ''
    },
    {
      date: '2020-01-05',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.youtube.com/watch?v=31xA9p3pYE4'
      ],
      title: '36C3 - Reaktive Security (DE)',
      'description': ''
    },
    {
      date: '2020-01-16',
      tags: [
        'javascript'
      ],
      links: [
        'https://goofonts.com/'
      ],
      title: 'Google Fonts by Tags',
      'description': ''
    },
    {
      date: '2020-01-16',
      tags: [
        'javascript'
      ],
      links: [
        'https://github.com/0xZ0F/Z0FCourse_ReverseEngineering'
      ],
      title: 'ReverseEngineering Course (Windows/C++)',
      'description': ''
    },
    {
      date: '2020-01-29',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.baeldung.com/hibernate-spatial'
      ],
      title: 'Hibernate Spatial | Baeldung',
      'description': ''
    },
    {
      date: '2020-01-29',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.baeldung.com/spring-boot-admin'
      ],
      title: 'Spring Boot Admin | Baeldung',
      'description': ''
    },
    {
      date: '2020-02-09',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.youtube.com/watch?v=rIaz-l1Kf8w'
      ],
      title: 'Scrum vs Kanban - YouTube',
      'description': ''
    },
    {
      date: '2020-02-10',
      tags: [
        'javascript'
      ],
      links: [
        'https://www.youtube.com/watch?v=lJ3CD9M3nEQ'
      ],
      title: 'Modular Arithmetic Visually Explained',
      'description': ''
    }
  ]
};
