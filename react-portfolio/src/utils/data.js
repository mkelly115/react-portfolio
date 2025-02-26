import webPulse from '../assets/portfolio/WEB-PULSE.png'
// import weatherApp from '../assets/portfolio/WEATHER DASHBOARD.png'
import clothingApp from '../assets/portfolio/Screenshot 2025-01-14 114348.png'
import dayScheduler from '../assets/portfolio/WORK-DAY.png'
import dnd from '../assets/portfolio/DND.png'
import literary from '../assets/portfolio/LITERARY-VOYAGERS.png'
import socialNetwork from '../assets/portfolio/SOCIAL-NETWORK-API.png'

export const projects = [
    {
        id: 1,
        title: 'Project Management',
        description: 'Company wide management portal allowing tracking of projects on a company-wide, team, and individual basis. Full stack project including use of JWT for authentication',
        image: webPulse,
        technologies: ['MongoDB','Material UI','React'],
        href: 'https://github.com/mkelly115/final-project',
        liveLink: 'https://https://final-project-qomg.onrender.com/'
    },
    // {
    //     id: 2,
    //     title: 'Weather Application',
    //     description: 'A web page that is tied to an API that calls information from the user through a series of interacting API calls. Stores users previously selected cities locally and call call them back',
    //     image: weatherApp,
    //     technologies: ['Javascript','HTML','CSS'],
    //     href: 'https://github.com/mkelly115/weather-app',
    //     liveLink: 'https://mkelly115.github.io/weather-app/'
    // },
    {
        id: 2,
        title: 'Retail Clothing Store',
        description: 'A fully functional webpage that allows the user to store selected items in a shopping cart. The user can also execute a credit/debit payment. Ability to add/remove shopping items.',
        image: clothingApp,
        technologies: ['Javascript','React.JS', 'Stripe'],
        href: 'https://github.com/mkelly115/tefaux-brand',
        liveLink: 'https://tefaux-brand.netlify.app/'
    },
    {
        id: 3,
        title: 'Work Day Scheduler',
        description: 'A daily scheduler that will denote the time of day using colors, will allow the user to store and save information locally. Uses Day.Js to track time',
        image: dayScheduler,
        technologies: ['Javascript','HTML','CSS','Day.js'],
        href: 'https://github.com/mkelly115/day-scheduler',
        liveLink: 'https://mkelly115.github.io/day-scheduler/'
    },
    {
        id: 4,
        title: 'Dungeons and Dragons',
        description: 'An interactive Character creator that calls on multiple API to allow a user to select a race and class with displayed statistical information and a backstory',
        image: dnd,
        technologies: ['Javascript','HTML','CSS'],
        href: 'https://github.com/mkelly115/dnd-stat-compiler',
        liveLink: 'https://crnaro.github.io/dnd-stat-compiler/'
    },
    {
        id: 5,
        title: 'Literary Voyagers',
        description: 'A full stack website that allows users to review, rate books, and discuss individual titles. Includes users and login capabilities',
        image: literary,
        technologies: ['Javascript','HTML','CSS','mySQL'],
        href: 'https://github.com/mkelly115/Literary-Voyagers',
        liveLink: 'https://literary-voyagers-5d41db9d0f86.herokuapp.com/'
    },
    {
        id: 6,
        title: 'Social Media Backend',
        description: 'A NoSQL project showcasing the interaction of a NoSQL database for a social media website includes multiple db interactions',
        image: socialNetwork,
        technologies: ['NoSQL'],
        href: 'https://github.com/mkelly115/social-network-api',
        liveLink: ''
    },
]