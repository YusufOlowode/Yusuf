export interface ProjectSection {
    title?: string;
    heading?: string;
    content: string | string[];
    image?: any;
    layout?: 'imageLeft' | 'imageRight' | 'fullWidth';
    bgColor?: string;
}

export interface Project {
    id: number;
    name: string;
    title: string;
    description: string;
    image: any | null;
    tags: string[];
    bgColor: string;
    behanceUrl?: string;
    details?: {
        role: string;
        duration: string;
        client: string;
        sector: string;
        platform: string;
        collaborators: string;
        about: string[];
        sections: ProjectSection[];
        allScreens?: any[];
        coreFeatures?: ProjectSection[];
        favouriteScreen?: string;
        websiteDesign?: string;
        reflection?: ProjectSection;
        websiteUrl?: string;
        appStoreUrl?: string;
        playStoreUrl?: string;
    };
}
