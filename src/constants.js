import { Platform, StatusBar } from 'react-native';

export const Color = {
  primary: '#f7d8ba',
};

export const constantUsers = [
  {
    id: 0,
    firstName: 'Rawr',
    lastName: 'Arowana',
    email: 'Arowana@gmail.com',
    mobileNo: '09655065929',
    accountBalance: 69420,
    password: 'EngrRawr',
  },
  {
    id: 1,
    firstName: 'Knight',
    lastName: 'Villasquez',
    email: 'Knight@gmail.com',
    mobileNo: '09226849513',
    accountBalance: 74569.25,
    password: 'SweetMonday',
  },
];

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const paddingHorizontalContainer = 16;

export const REGEX_EMAIL_VALIDATION =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

export const homeScreenIcons = [
  { icon: 'send', navigate: 'SendPayment', text: 'Send' },
  { icon: 'download', navigate: '', text: 'Receive' },
  { icon: 'bank', navigate: '', text: 'Transfer' },
  { icon: 'calendar', navigate: '', text: 'Pay Bills' },
];

export const transactions = [
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: 'LAZADA PH',
    amount: `₱563.00`,
  },
  {
    referenceId: Date.now(),
    type: 'Pay Bills',
    to: '+639123456789',
    amount: `₱2431.75`,
  },
  { referenceId: Date.now(), type: 'Buy', to: 'SHOPEE', amount: `₱230.50` },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.00`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: 'LAZADA PH',
    amount: `₱1458.00`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Pay Bills',
    to: '+639123456789',
    amount: `₱5775.75`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Pay Bills',
    to: '+639123456789',
    amount: `₱128.75`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  { referenceId: Date.now(), type: 'Buy', to: 'SHOPEE', amount: `₱54.50` },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Pay Bills',
    to: '+639123456789',
    amount: `₱128.75`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639617096607',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
  {
    referenceId: Date.now(),
    type: 'Transfer',
    to: '+639123456789',
    amount: `₱658.32`,
  },
];

export const notifications = [
  {
    referenceId: Date.now(),
    icon: 'send',
    title: 'Transfered money',
    receiverMobileNo: '09123456789',
    date: '8:42 PM | October 21, 2022',
    isNew: true,
    amount: 6969,
  },
  {
    referenceId: Date.now(),
    icon: 'download',
    title: 'Multiple Wallet Features!',
    receiverMobileNo: '09123456789',
    date: '12:21 PM | October 21, 2022',
    isNew: false,
    amount: 6969,
  },
  {
    referenceId: Date.now(),
    icon: 'shield',
    title: 'Security Updates!',
    receiverMobileNo: '09123456789',
    date: '12:21 PM | October 21, 2022',
    isNew: false,
    amount: 6969,
  },
  {
    referenceId: Date.now(),
    icon: 'download',
    title: 'Multiple Wallet Features!',
    receiverMobileNo: '09123456789',
    date: '12:21 PM | October 21, 2022',
    isNew: false,
    amount: 6969,
  },
];
