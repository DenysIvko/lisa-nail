import { translations } from '@shared/translations';
import { useLanguage } from '../contexts/LanguageContext';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, language };
}
