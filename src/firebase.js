import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCTwpNdI7s89yAQnEEcjuuktyP6rZS4D8I',
  authDomain: 'teskilat-app.firebaseapp.com',
  projectId: 'teskilat-app',
  storageBucket: 'teskilat-app.appspot.com',
  messagingSenderId: '411775724257',
  appId: '1:411775724257:web:2b3a7db8381561c05ae5a0',
  measurementId: 'G-KYQV8DB3YQ',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
