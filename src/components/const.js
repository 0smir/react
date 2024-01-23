import FacebookMediaLogo from '../images/social/facebook.svg';
import GithubMediaLogo from '../images/social/github.svg';
import TwitterMediaLogo from '../images/social/twitter.svg';
import InstagramMediaLogo from '../images/social/instagram.svg';

// constants.js
export const API_URLs_CONTACTS = [
    {
        name: 'address',
        value: 'Tanjung Sari Street no.48, Pontianak City',
        id: '1'

    },
    {
        id: '2',
        name: 'email',
        value: 'Support@VRNas.com'
    },
  
    {
        id: '3',
        name: 'phone',
        value: '+123 456 7890'
    }

];
export const API_URLs_SUPPORT = [
    {
        id: 1,
        title: 'About',
        linkUrl: '/about'
    },
    {
        id: 2,
        title: 'Contact Us',
        linkUrl: '/contact-us'
    },
    {
        id: 3,
        title: 'FAQ',
        linkUrl: '/faq'
    },
    {
        id: 4,
        title: 'Tems & Conditions',
        linkUrl: '/terms'
    },
    {
        id: 5,
        title: 'Privacy Policy',
        linkUrl: '/privacy'
    }
];   

export const API_URLs_HEADER = [
    {
        id: 1,
        title: 'Home',
        linkUrl: '/'
    },
    {
        id: 2,
        title: 'About',
        linkUrl: '/about'
    },
    {
        id: 3,
        title: 'Blog',
        linkUrl: '/blog'
    },
];

export const API_URLs_QUICKLINKS = [
    {
        id: 1,
        title: 'Home',
        linkUrl: '/'
    },
    {
        id: 3,
        title: 'Blog',
        linkUrl: '/blog'
    },
    {
        id: 4,
        title: 'Service',
        linkUrl: '/service'
    },
    {
        id: 5,
        title: 'Our Team',
        linkUrl: '/our-team'
    }
];

export const API_URLs_SOCIAL = [
    {
        name: "facebook",
        link: "https://www.facebook.com/",
        img_link: FacebookMediaLogo
    },
    {
        name: "twitter",
        link: "https://twitter.com/",
        img_link: TwitterMediaLogo
    },

    {
        name: "instagram",
        link: "https://www.instagram.com/",
        img_link: InstagramMediaLogo
    },
    {
        name: "github",
        link: "https://github.com/",
        img_link: GithubMediaLogo
    }
    
];