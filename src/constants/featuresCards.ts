import feature100 from 'assets/icons/featuresIcons/feature100.svg'
import feature200 from 'assets/icons/featuresIcons/feature200.svg'
import feature300 from 'assets/icons/featuresIcons/feature300.svg'
import feature400 from 'assets/icons/featuresIcons/feature400.svg'
import feature500 from 'assets/icons/featuresIcons/feature500.svg'
import feature600 from 'assets/icons/featuresIcons/feature600.svg'
import feature700 from 'assets/icons/featuresIcons/feature700.svg'
import feature800 from 'assets/icons/featuresIcons/feature800.svg'
import feature900 from 'assets/icons/featuresIcons/feature900.svg'
import feature910 from 'assets/icons/featuresIcons/feature910.svg'

const FEATURES_CARDS = [
    {
        id: 0,
        title: 'Stop Loss and Take Profit',
        icon: feature100,
        description: 'Limit risks and earn more by setting both Stop Loss and several Take Profits for each trade.'
    },
    {
        id: 1,
        title: 'Trailings',
        icon: feature200,
        description: 'Buy and sell assets at better prices using various trailing options.'},
    {
        id: 2,
        title: 'Timeout and candlestick Stop Loss',
        icon: feature300,
        description: 'The position can be exited only after the timer expires or when the candle of the selected time frame closes. Allows you to protect your trade from squeeze and gives flexibility to your trading strategy.'
    },
    {
        id: 3,
        title: 'Pending orders',
        icon: feature400,
        description: 'You can create orders both above the current price and below. Funds on balance are not blocked. Such orders are not “seen” by the exchange.'
    },
    {
        id: 4,
        title: 'Trading on a chart',
        icon: feature500,
        description: 'Create and edit deals or bots clearly and quickly. Right on the chart.'
    },
    {
        id: 5,
        title: 'Channel bot',
        icon: feature600,
        description: 'Get the maximum benefit from trading within a given price range. Auto-restart allows you to make an unlimited number of purchases and sales without the participation of a trader.'
    },
    {
        id: 6,
        title: 'Ladder and averaging',
        icon: feature700,
        description: 'Create grids of orders to enter and exit positions. The system itself will calculate the average entry price and final profit.'
    },
    {
        id: 7,
        title: 'Automatic Breakeven',
        icon: feature800,
        description: 'After the first take is executed, the platform will set Stop Loss to breakeven, protecting the position from unwanted drawdown.'
    },
    {
        id: 8,
        title: 'Booster',
        icon: feature900,
        description: 'Trade on Binance Futures with just 2 buttons to enter a trade and manage your position. Instant reversal from long to short and back.'
    },
    {
        id: 9,
        title: 'Panic Sell',
        icon: feature910,
        description: 'Quickly close all active smart trades and exit positions at the current market price.'
    }
];

export default FEATURES_CARDS;
