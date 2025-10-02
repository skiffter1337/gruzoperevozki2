export interface FooterTranslations {
    companyName: string;
    contacts: {
        phone: string;
        email: string;
        address: string;
    };
    paymentSection: {
        title: string;
        methods: {
            visa: string;
            mastercard: string;
            googlePay: string;
            applePay: string;
            bit: string;
        };
    };
    quickContact: {
        title: string;
        whatsappMessage: string;
    };
    copyright: string;
    legalLinks: {
        privacyPolicy: string;
    };
    seoContent: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
}

export interface FooterData {
    ru: ContactInfo;
    he: ContactInfo;
    en: ContactInfo;
}