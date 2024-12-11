import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EuiProvider } from '@elastic/eui';
import en from './json/en.json';
import vn from './json/vn.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => {
  const [language, setLanguage] = useState('vn');
  
  const translations = language === 'en' ? en : vn;
  
  return (
    <EuiProvider colorMode="light">  {/* Thay đổi sang 'dark' nếu bạn muốn theme tối */}
      <App language={language} setLanguage={setLanguage} />
    </EuiProvider>
  );
};

root.render(<Root />);
