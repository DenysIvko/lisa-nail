import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pl', name: 'PL' },
    { code: 'uk', name: 'UA' },
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: 'pl' | 'uk' | 'en' | 'ru') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium hover:text-gray-600 transition-colors"
      >
        <span>{currentLang?.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-16 bg-white rounded-lg shadow-lg border z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as 'pl' | 'uk' | 'en' | 'ru')}
              className={`block w-full text-left px-3 py-1 text-sm hover:bg-gray-50 transition-colors ${
                language === lang.code ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
