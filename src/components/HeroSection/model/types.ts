export interface HeroTranslations {
    title: string;
    subtitle: string;
    stats: {
        clients: string;
        moves: string;
    };
    quickContact: {
        title: string;
        whatsappMessage: string;
    };
    form: {
        name: {
            label: string;
            placeholder: string;
        };
        phone: {
            label: string;
            placeholder: string;
        };
        address: {
            from: {
                title: string;
                label: string;
                placeholder: string;
            };
            to: {
                title: string;
                label: string;
                placeholder: string;
            };
            floor: string;
            floorPlaceholder: string;
            hasLift: string;
            needCrane: string;
        };
        date: {
            label: string;
            placeholder: string;
        };
        services: {
            packing: string;
            assembly: string;
        };
        comment: {
            label: string;
            placeholder: string;
        };
        submit: string;
        validation: {
            required: string;
            nameRequired: string;
            phoneRequired: string;
            addressRequired: string;
        };
    };
    seoText: string;
}

export interface IForm {
    comment: string;
    date: Date;
    fromAddress: string;
    fromFloor: string;
    fromHasLift: boolean;
    fromNeedCrane: boolean;
    name: string;
    needAssembly: boolean;
    needPacking: boolean;
    phone: string;
    toAddress: string;
    toFloor: string;
    toHasLift: boolean;
    toNeedCrane: boolean;
}