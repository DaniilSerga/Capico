import speedIcon from 'assets/icons/speedIcon.svg';
import hotKeysIcon from 'assets/icons/hotKeysIcon.svg';
import notificationsIcon from 'assets/icons/notificationsIcon.svg';
import demoAccountIcon from 'assets/icons/demoAccountIcon.svg';
import cloudServiceIcon from 'assets/icons/cloudServiceIcon.svg';
import darkThemeIcon from 'assets/icons/darkThemeIcon.svg';

const WORK_CARDS = [
    {
        id: 0, 
        title: 'Speed', 
        description: 'Your assets on all connected exchanges are collected in one place',
        icon: speedIcon,
    },
    {
        id: 1,
        title: 'Hotkeys',
        description: 'Use hot keys to work faster',
        icon: hotKeysIcon
    },
    {
        id: 2,
        title: 'Notifications',
        description: 'Get all the importantemail messages and Telegram',
        icon: notificationsIcon
    },
    {
        id: 3,
        title: 'Demo Account',
        description: 'Train. Learn. Test any features. Free and without risks',
        icon: demoAccountIcon
    },
    {
        id: 4,
        title: 'Cloud Service',
        description: 'Updates are usually invisible. No break from trade.',
        icon: cloudServiceIcon
    },
    {
        id: 5,
        title: 'Dark theme',
        description: 'Trade anytime. Even at night.',
        icon: darkThemeIcon
    },
]

export default WORK_CARDS;
