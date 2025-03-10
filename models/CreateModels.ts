export interface GuitarConfig {
    form: string;
    scale: string;
    pickups: string;
    inlays: string;
    wiring: string;
    price: number;
}

export const formsImages = [
    { source: require('../assets/images/EMPEROR.jpg'), caption: 'EMPEROR' },
    { source: require('../assets/images/KOYOT.jpg'), caption: 'KOYOT' },
];

export const pickupsImages = [
    { source: require('../assets/images/ACTIVE.jpg'), caption: 'ACTIVE' },
    { source: require('../assets/images/CRUSHER.jpg'), caption: 'CRUSHER' },
];

export const markersImages = [
    { source: require('../assets/images/DOTS.jpg'), caption: 'ТОЧКИ' },
    { source: require('../assets/images/SHARP.png'), caption: 'АКУЛИЙ ЗУБ' },
];
