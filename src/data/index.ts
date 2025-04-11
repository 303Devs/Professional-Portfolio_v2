export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Stack', link: '#stack' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'Every project starts with understanding your vision.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'h-full w-full ',
    titleClassName: 'justify-end',
    img: '/vision.webp',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Effortless Collaboration Across Borders',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'Our Services',
    description: 'Good work feels calm, not chaotic.',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: '',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Turning Passion for Tech Into Real-World Solutions',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: 'bg-transparent',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title:
      'Build thoughtful digital solutions that move people and ideas forward.',
    description: 'Our Master Plan',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60 z-10',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Ready to Bring Your Ideas to Life?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const mapDots = [
  {
    start: {
      lat: 64.2008,
      lng: -149.4937,
    }, // Alaska (Fairbanks)
    end: {
      lat: 34.0522,
      lng: -118.2437,
    }, // Los Angeles
  },
  {
    start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
  },
  {
    start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
  },
  {
    start: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    end: { lat: 51.5074, lng: -0.1278 }, // London
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
  },
  {
    start: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
  },
  {
    start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    end: { lat: 40.014984, lng: -105.270546 }, // Boulder, CO
  },
  {
    start: { lat: 40.014984, lng: -105.270546 }, // Boulder, CO
    end: { lat: -33.865143, lng: 151.2099 }, // Sydney
  },
  {
    start: { lat: -33.865143, lng: 151.2099 }, // Sydney
    end: { lat: -33.447487, lng: -70.673676 }, // Santiago
  },
  {
    start: { lat: -33.447487, lng: -70.673676 }, // Santiago
    end: { lat: 64.2008, lng: -149.4937 }, // Fairbanks
  },
];

export const projectItems = [
  {
    id: 1,
    title: 'FitTrack: Your Personal Health Coach',
    des: 'Stay on top of your fitness game with FitTrack! Effortlessly log workouts, track calories burned, and see your progress shine in real-time.',
    img: '/my-health-coach.webp',
    icons: [
      '/nextjs.svg',
      '/tail.svg',
      '/ts.svg',
      '/nodejs.webp',
      '/postgresql.webp',
    ],
    link: 'https://anthonymerino.dev',
  },
  {
    id: 2,
    title: 'Civil Share: Power to the People',
    des: 'Fuel the causes you care about with this Web3-powered crowdsharing platform. Create campaigns, accept donations, and support community-driven dreams with ease.',
    img: '/civil-protocol.webp',
    icons: ['/next.svg', '/tail.svg', '/ts.svg', '/solidity.webp', '/eth.webp'],
    link: 'https://civilprotocol.io',
  },
  {
    id: 3,
    title: 'Civil Swap: Trade Made Simple',
    des: 'Seamlessly swap tokens across EVM-compatible blockchains. Enjoy a transparent, secure, and user-friendly decentralized trading experience.',
    img: '/civil-protocol.webp',
    icons: ['/re.svg', '/tail.svg', '/ts.svg', '/solidity.webp', '/eth.webp'],
    link: 'https://civilprotocol.io',
  },
  {
    id: 4,
    title: 'HealthSync: Your Healthcare Hub',
    des: 'Simplify healthcare management with HealthSync! From scheduling appointments to secure medical records, it’s your all-in-one health solution.',
    img: '/patient-portal.webp',
    icons: [
      '/next.svg',
      '/nodejs.webp',
      '/tail.svg',
      '/ts.svg',
      '/mongodb.webp',
    ],
    link: 'https://anthonymerino.dev',
  },
  {
    id: 5,
    title: 'Atellier: Redefining eCommerce',
    des: 'Discover a seamless shopping experience! Atellier brings personalized recommendations, secure payments, and tools for businesses to thrive.',
    img: '/atelier.webp',
    icons: [
      '/re.svg',
      '/redis.webp',
      '/nginx.webp',
      '/javascript.webp',
      '/mongodb.webp',
    ],
    link: 'https://anthonymerino.dev',
  },
  {
    id: 6,
    title: 'Professional Portfolio: My Digital World',
    des: 'Explore a dynamic showcase of creativity and expertise. Sleek design meets interactivity to spotlight skills, projects, and achievements.',
    img: '/portfolio.webp',
    icons: ['/next.svg', '/tail.svg', '/ts.svg', '/fm.svg', '/three.svg'],
    link: 'https://anthonymerino.dev',
  },
  {
    id: 7,
    title: 'VirtualStitch: Design it. Wear it. Virtually perfect.',
    des: 'Turn your ideas into wearable art! Describe your vision, and let AI craft stunning designs applied to 3D t-shirt models—your style, your way.',
    img: '/bashful-elephant.webp',
    icons: ['/next.svg', '/tail.svg', '/ts.svg', '/openai.webp', '/three.svg'],
    link: 'https://anthonymerino.dev',
  },
  {
    id: 8,
    title: 'Buckets: Smarter Investing with DeFi',
    des: 'Buckets is a DeFi platform that empowers smarter investments with AI tools and unique digital assets, combining transparency, security, and innovation.',
    img: '/buckets.webp',
    icons: [
      '/re.svg',
      '/web3js.webp',
      '/eth.webp',
      '/solidity.webp',
      '/ganache.webp',
    ],
    link: 'https://buckets.fi',
  },
];
