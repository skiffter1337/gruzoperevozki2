import { ReactNode } from 'react';

export interface ServicePrice {
    rooms: number;
    price: string;
}

export interface Service {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    hasPriceSlider: boolean;
    prices?: ServicePrice[];
    price?: string;
}

export interface ServicesData {
    ru: Service[];
    he: Service[];
}

export interface ServicesTranslations {
    title: string;
    subtitle: string;
    labels: {
        prices: string;
        rooms: string;
        rooms_plural: string;
        per_unit: string;
        from: string;
    };
}