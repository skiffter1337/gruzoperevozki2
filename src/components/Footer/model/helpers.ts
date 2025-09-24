import {FooterData} from "@/components/Footer/model/type";

export const getFooterData = (lang: 'ru' | 'he') => {
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
        }
    };

    return footerData[lang] || footerData.ru;
};

export const getWhatsAppPhone = () => {
    return '+7 901 281 8032';
};
