import {
    CarOutlined,
    CreditCardOutlined,
    DollarOutlined,
    PhoneOutlined,
    SafetyCertificateOutlined, UserOutlined
} from "@ant-design/icons";

export const advantagesData = [
    {
        icon: <PhoneOutlined />,
        title: 'Операторы всегда на связи 24/7',
        description: 'Круглосуточная поддержка по вопросам грузоперевозок',
        schemaType: 'CustomerService'
    },
    {
        icon: <CarOutlined />,
        title: 'Большой парк авто и спецтехники',
        description: 'Различные грузоподъемности для любых переездов',
        schemaType: 'AutomotiveBusiness'
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: 'Гарантируем сохранность вашего груза',
        description: 'Полное страхование груза при перевозке',
        schemaType: 'Insurance'
    },
    {
        icon: <CreditCardOutlined />,
        title: 'Оплата частями до 12 платежей',
        description: 'Гибкие условия оплаты для вашего удобства',
        schemaType: 'PaymentService'
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
    }
];