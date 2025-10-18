export interface GalleryPhoto {
    id: number;
    src: string;
    alt: string;
}

export interface GalleryTranslation {
    title: string;
    photos: Array<{
        id: number;
        alt: string;
    }>;
    stats: {
        moves: string;
        clients: string;
        support: string;
    };
}

export interface GalleryPhoto {
    id: number
    src: string
    alt: string
}

export interface GalleryVideo {
    id: number
    youtubeId: string
}