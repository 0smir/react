import FacebookMediaLogo from '../images/social/facebook.svg';
import GithubMediaLogo from '../images/social/github.svg';
import TwitterMediaLogo from '../images/social/twitter.svg';
import InstagramMediaLogo from '../images/social/instagram.svg';

//icons
import vr_glasses from '../images/advantages/icon_vr_glasses.svg';
import vr_person from '../images/advantages/icon_vr_person.svg';
import vr_space from '../images/advantages/icon_vr_space.svg';

import vr_comment from '../images/services/icon_comment.svg';
import vr_event from '../images/services/icon_event.svg';
import vr_game_pad from '../images/services/icon_game_pad.svg';
import vr_light from '../images/services/icon_light.svg';
import vr_mask from '../images/services/icon_mask.svg';
import vr_tv from '../images/services/icon_vr_tv.svg';

import client_1 from '../images/clients/client_1.png';
import client_2 from '../images/clients/client_2.png';
import client_3 from '../images/clients/client_3.png';

import main_banner from '../images/vr_user.png';

import team_member_1 from '../images/our_team/member_1.jpg';
import team_member_2 from '../images/our_team/member_2.jpg';
import team_member_3 from '../images/our_team/member_3.jpg';
import team_member_4 from '../images/our_team/member_4.jpg';
import team_member_5 from '../images/our_team/member_5.jpg';
import team_member_6 from '../images/our_team/member_6.jpg';



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

export const HOME_MAIN = [
    {
        title: "Immerse Yourself in Virtual Reality",
        description: "Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services.",
        clients_info: [
            {
                list:[client_1, client_2, client_3],
                total_count: 32,
            }
        ],

        
        banner: main_banner,
        advantages: [
            {
                id: "expertise",
                title: "Expertise",
                icon: vr_glasses,
                description: "Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service."
            },
            {
                id: "customization",
                title: "Customization",
                icon: vr_person,
                description: "Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals."
            },
            {
                id: "service",
                title: "Service",
                icon: vr_space,
                description: "We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience."
            }
        ]
    }
];

export const ABOUT = [
    {   
        section_name: "ABOUT US",
        title: "Bring your events to life like never before with our VR services.",
        description: "VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.",
        checkpoints: ["Cutting-Edge Technology", "Versatile Applications", "Affordable and Accessible"]
    }
];

export const SERVICES = [
    {
        section_name: "OUR SERVICE",
        title: "Our Service",
        description: "We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.",
        services_list: [
            {
                id:"development",
                title: "VR Development",
                icon: vr_tv,
                description: "From concept to creation, our team of VR developers will bring your vision to life."
            },
            {
                id:"design",
                title: "VR Design",
                icon: vr_light,
                description: "Our talented VR designers will create immersive and engaging environments that will captivate your audience."
            },
            {
                id:"consulting",
                title: "VR Consulting",
                icon: vr_comment,
                description: "Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations."
            },
            {
                id:"games",
                title: "VR Games",
                icon: vr_game_pad,
                description: "We offer a wide selection of VR games that are suitable for players of all ages and skill levels."
            },
            {
                id:"events",
                title: "VR Events",
                icon: vr_event,
                description: "Make your next event unforgettable with our VR event services."
            },
            {
                id:"entertainment",
                title: "VR Entertainment",
                icon: vr_mask,
                description: "reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen."
            }
        ]
    }
];

export const ADVANTAGES = [
    {
        section_name: "WHY CHOOSE US",
        title: "Why Choose Us for Your VR Needs",
        advantages: [
            {
                id: 1,
                title: "Passionate and Experienced Team",
                description: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
            },
            {
                id: 2,
                title: "Customized Solutions",
                description: "Customized Solutions. We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
            },
            {
                id: 3,
                title: "Exceptional Customer Service",
                description: "Exceptional Customer Service. We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
            },
        ]
    }
];

export const API_OUR_TEAM = [
    {
        id: 0,
        avatar: team_member_1,
        name: "Bondan Prabowo",
        position: "CEO"
    },
    {
        id: 1,
        avatar: team_member_2,
        name: "Bayu Aji",
        position: "VR Development"
    },
    {
        id: 2,
        avatar: team_member_3,
        name: "Agung Brandon",
        position: "VR Artist"
    },
    {
        id: 3,
        avatar: team_member_4,
        name: "Aldo Boy",
        position: "3D Designer"
    },
    {
        id: 4,
        avatar: team_member_5,
        name: "Aril Laso",
        position: "UI / UX Designer"
    },
    {
        id: 5,
        avatar: team_member_6,
        name: "Beni Barak",
        position: "3D Artist"
    }
];