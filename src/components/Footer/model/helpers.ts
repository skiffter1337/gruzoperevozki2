import {FooterData} from "@/components/Footer/model/type";

export const getFooterData = (lang: 'ru' | 'he' | 'en') => {
    const footerData: FooterData = {
        ru: {
            phone: '+7 901 281 8032',
            email: 'test@mail.com',
            address: 'Израиль, ул. Пушкина'
        },
        he: {
            phone: '+7 901 281 8032',
            email: 'test@mail.com',
            address: 'ישראל, רחוב פושקין'
        },
        en: {
            phone: '+7 901 281 8032',
            email: 'test@mail.com',
            address: 'Israel, Tel Aviv'
        }
    };

    return footerData[lang] || footerData.en;
};