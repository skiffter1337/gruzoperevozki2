export interface VehicleFeature {
    id: number;
    name: string;
    description: string;
    features: string[];
}

export interface Vehicle {
    id: number;
    name: string;
    capacity: string;
    volume: string;
    image: string;
    description: string;
    type: string;
    features: string[];
}

export interface VehiclesData {
    ru: Vehicle[];
    he: Vehicle[];
    en: Vehicle[];
}

export interface VehiclesTranslations {
    title: string;
    subtitle: string;
    seoContent: {
        paragraph: string;
        listItems: string[];
    };
    labels: {
        capacity: string;
        volume: string;
        type: string;
        features: string;
    };
    categories: {
        minivan: string;
        van: string;
        truck: string;
    };
}