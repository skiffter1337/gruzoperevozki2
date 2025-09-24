import {ServicesTranslations} from "@/components/Services/model/types";

export interface ReviewsTranslations {
    title: string;
    subtitle: string;
    companyTitle: string;
    companyDescription: {
        part1: string;
        part2: string;
    };
    cta: {
        title: string;
        description: string;
        button: string;
    };
    navigation: {
        prev: string;
        next: string;
        goToReview: string;
    };
    labels: {
        service: string;
        rating: string;
        location: string;
        date: string;
    };
}

export interface Review {
    id: number;
    name: string;
    location: string;
    date: string;
    rating: number;
    text: string;
    avatar: string;
    service: string;
}