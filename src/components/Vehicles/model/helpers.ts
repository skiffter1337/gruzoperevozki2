import {VehiclesData} from "@/components/Vehicles/model/types";

export const getVehiclesData = (lang: 'ru' | 'he') => {
    const vehiclesData: VehiclesData = {
        ru: [
            {
                id: 1,
                name: 'Renault Kangoo',
                capacity: 'до 1.5 тонн',
                volume: '9 м³',
                image: '/kangoo.svg',
                description: 'Компактный фургон для небольших переездов и перевозок',
                type: 'Минивэн',
                features: ['Экономичный', 'Маневренный', 'Подходит для узких улиц']
            },
            {
                id: 2,
                name: 'Mercedes Sprinter',
                capacity: 'до 3 тонн',
                volume: '16 м³',
                image: '/mercedes.svg',
                description: 'Средний грузовой фургон для квартирных переездов',
                type: 'Фургон',
                features: ['Вместительный', 'Надежный', 'Подходит для стандартных переездов']
            },
            {
                id: 3,
                name: 'JAC Truck',
                capacity: 'до 5 тонн',
                volume: '25 м³',
                image: '/jac.svg',
                description: 'Грузовик для крупных переездов и коммерческих перевозок',
                type: 'Грузовик',
                features: ['Большая грузоподъемность', 'Проходимость', 'Для крупногабаритных грузов']
            },
        ],
        he: [
            {
                id: 1,
                name: 'Renault Kangoo',
                capacity: 'עד 1.5 טון',
                volume: '9 מ"ק',
                image: '/kangoo.svg',
                description: 'טנדר קומפקטי למעברים קטנים והובלות',
                type: 'מיניבוס',
                features: ['חסכוני', 'זריז', 'מתאים לרחובות צרים']
            },
            {
                id: 2,
                name: 'Mercedes Sprinter',
                capacity: 'עד 3 טון',
                volume: '16 מ"ק',
                image: '/mercedes.svg',
                description: 'טנדר משא בינוני למעבר דירה',
                type: 'טנדר',
                features: ['מרווח', 'אמין', 'מתאים למעברים סטנדרטיים']
            },
            {
                id: 3,
                name: 'JAC Truck',
                capacity: 'עד 5 טון',
                volume: '25 מ"ק',
                image: '/jac.svg',
                description: 'משאית למעברים גדולים והובלות מסחריות',
                type: 'משאית',
                features: ['יכולת נשיאה גדולה', 'ניידות', 'למטענים גדולים']
            },
        ]
    };

    return vehiclesData[lang] || vehiclesData.ru;
};