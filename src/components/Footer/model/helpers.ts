import {FooterData} from "@/components/Footer/model/type";

export const getFooterData = (lang: 'ru' | 'he' | 'en') => {
    const footerData: FooterData = {
        ru: {
            phone: '+7 901 281 8032',
            email: 'test@mail.com',
        },
        he: {
            phone: '+7 901 281 8032',
            email: 'test@mail.com',
        },
        en: {
            phone: '+7 901 281 8032',
            email: 'test@mail.com',
        }
    };

    return footerData[lang] || footerData.en;
};