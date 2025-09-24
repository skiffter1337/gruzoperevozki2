import {
    CarOutlined,
    CreditCardOutlined,
    DollarOutlined,
    FastBackwardOutlined,
    PhoneOutlined,
    SafetyCertificateOutlined,
    ThunderboltOutlined,
    UserOutlined
} from "@ant-design/icons";

export const getAdvantagesData = (lang: 'ru' | 'he') => {
    const advantages = {
        ru: [
            {
                icon: <PhoneOutlined />,
                title: 'Операторы всегда на связи',
                description: 'Поддержка по вопросам грузоперевозок',
                schemaType: 'CustomerService'
            },
            {
                icon: <CarOutlined />,
                title: 'Большой парк авто',
                description: 'Различные грузоподъемности для любых переездов',
                schemaType: 'AutomotiveBusiness'
            },
            {
                icon: <SafetyCertificateOutlined />,
                title: 'Гарантируем сохранность вашего груза',
                description: 'Бережная и надежная упаковка',
                schemaType: 'Insurance'
            },
            {
                icon: <DollarOutlined />,
                title: 'Принимаем любые способы оплаты',
                description: 'Наличные, карты, банковские переводы',
                schemaType: 'PaymentMethod'
            },
            {
                icon: <UserOutlined />,
                title: 'Специальные цены для студентов',
                description: 'Скидки для учащихся на все виды переездов',
                schemaType: 'Discount'
            },
            {
                icon: <ThunderboltOutlined />,
                title: 'Возможность приезда в день заказа',
                description: 'Быстрая подача транспорта при срочных переездах',
                schemaType: 'SpeedyService'
            }
        ],
        he: [
            {
                icon: <PhoneOutlined />,
                title: 'מפעילים זמינים 24/7',
                description: 'תמיכה מסביב לשעון בנושאי הובלות',
                schemaType: 'CustomerService'
            },
            {
                icon: <CarOutlined />,
                title: 'צי גדול של רכבים',
                description: 'יכולות נשיאה שונות עבור כל סוגי המעברים',
                schemaType: 'AutomotiveBusiness'
            },
            {
                icon: <SafetyCertificateOutlined />,
                title: 'מבטיחים את שלמות המטען שלך',
                description: 'אריזה זהירה ואמינה',
                schemaType: 'Insurance'
            },
            {
                icon: <DollarOutlined />,
                title: 'מקבלים כל סוגי תשלום',
                description: 'מזומן, כרטיסים, העברות בנקאיות',
                schemaType: 'PaymentMethod'
            },
            {
                icon: <UserOutlined />,
                title: 'מחירים מיוחדים לסטודנטים',
                description: 'הנחות לסטודנטים על כל סוגי המעברים',
                schemaType: 'Discount'
            },
            {
                icon: <ThunderboltOutlined />,
                title: 'אפשרות הגעה ביום ההזמנה',
                description: 'הגעת רכב מהירה למעברים דחופים',
                schemaType: 'SpeedyService'
            }
        ]
    };

    return advantages[lang] || advantages.ru;
};