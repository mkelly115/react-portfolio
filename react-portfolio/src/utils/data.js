import javaQuiz from '../assets/portfolio/CODING-QUIZ.png'
import weatherApp from '../assets/portfolio/WEATHER DASHBOARD.png'
import dayScheduler from '../assets/portfolio/WORK-DAY.png'
import dnd from '../assets/portfolio/DND.png'
import literary from '../assets/portfolio/LITERARY-VOYAGERS.png'
import socialNetwork from '../assets/portfolio/SOCIAL-NETWORK-API.png'

export const projects = [
    {
        id: 1,
        title: 'JavaScript Quiz',
        description: 'A quiz that asks basic questions about javascript but showcases ability to swap elements, store hi-scores locally, and use a single div to perform multiple functions',
        image: javaQuiz,
        technologies: ['Javascript','HTML','CSS'],
        href: 'https://github.com/mkelly115/java-quiz'
    },
    {
        id: 2,
        title: 'Weather Application',
        description: 'A web page that is tied to an API that calls information from the user through a series of interacting API calls. Stores users previously selected cities locally',
        image: weatherApp,
        technologies: ['Javascript','HTML','CSS'],
        href: 'https://mkelly115.github.io/weather-app/'
    },
    {
        id: 3,
        title: 'Work Day Scheduler',
        description: 'A daily scheduler that will denote the time of day using colors, will allow the user to store and save information locally. Uses Day.Js to track time',
        image: dayScheduler,
        technologies: ['Javascript','HTML','CSS','Day.js'],
        href: 'https://github.com/mkelly115/day-scheduler'
    },
    {
        id: 4,
        title: 'Dungeons and Dragons',
        description: 'An interactive Character creator that calls on multiple API to allow a user to select a race and class with displayed statstical information as well as a backstory',
        image: dnd,
        technologies: ['Javascript','HTML','CSS'],
        href: 'https://github.com/CRNaro/dnd-stat-compiler'
    },
    {
        id: 5,
        title: 'Literary Voyagers',
        description: 'A full stack website that allows users to review, rate books, and discuss individual titles. Includes users and login capabilities',
        image: literary,
        technologies: ['Javascript','HTML','CSS','mySQL'],
        href: 'https://github.com/sambrez/Literary-Voyagers'
    },
    {
        id: 6,
        title: 'Social Media Backend',
        description: 'A NoSQL project showcasing the interaction of a NoSQL database for a social media website',
        image: socialNetwork,
        technologies: ['NoSQL'],
        href: 'https://github.com/mkelly115/social-network-api'
    },
]