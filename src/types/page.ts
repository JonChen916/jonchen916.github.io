export interface BasePageConfig {
    type: 'about' | 'publication' | 'card' | 'text' | 'gallery';
    title: string;
    description?: string;
}

export interface PublicationPageConfig extends BasePageConfig {
    type: 'publication';
    source: string;
}

export interface TextPageConfig extends BasePageConfig {
    type: 'text';
    source: string;
}

export interface CardItem {
    title: string;
    subtitle?: string;
    date?: string;
    content?: string;
    tags?: string[];
    link?: string;
    image?: string;
}

export interface CardPageConfig extends BasePageConfig {
    type: 'card';
    items: CardItem[];
}

export interface GalleryPhotoItem {
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
}

export interface GallerySection {
    title: string;
    subtitle?: string;
    date?: string;
    description?: string;
    photos: GalleryPhotoItem[];
}

export interface GalleryPageConfig extends BasePageConfig {
    type: 'gallery';
    sections: GallerySection[];
}