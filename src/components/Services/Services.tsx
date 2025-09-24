import {Col, Row} from 'antd';
import {BankOutlined, BoxPlotOutlined, GiftOutlined, HomeOutlined, ToolOutlined} from '@ant-design/icons';
import styles from './Services.module.scss';
import {ServiceCard} from "@/components/Services/components/ServiceCard/ServiceCard";

const services = [
    {
        id: 1,
        icon: <HomeOutlined />,
        title: 'Квартирный переезд',
        description: 'Быстрый и аккуратный переезд квартиры любой сложности с профессиональной упаковкой',
        features: ['Упаковка вещей', 'Погрузка/разгрузка', 'Сборка мебели'],
        hasPriceSlider: true,
        prices: [
            { rooms: 1, price: '500 ₪' },
            { rooms: 2, price: '1000 ₪' },
            { rooms: 3, price: '1500 ₪' },
            { rooms: 4, price: '1800 ₪' }
        ]
    },
    {
        id: 2,
        icon: <HomeOutlined />,
        title: 'Офисный переезд',
        description: 'Организованный переезд офиса без остановки рабочего процесса',
        features: ['Работа в нерабочее время', 'Перевозка оргтехники', 'Установка на новом месте'],
        hasPriceSlider: true,
        prices: [
            { rooms: 1, price: '800 ₪' },
            { rooms: 2, price: '1500 ₪' },
            { rooms: 3, price: '2200 ₪' },
            { rooms: 4, price: '2800 ₪' }
        ]
    },
    {
        id: 3,
        icon: <BankOutlined />,
        title: 'Переезд частного дома',
        description: 'Переезд из частного дома с учетом большой площади и количества вещей',
        features: ['Грузчики с опытом', 'Спецтехника', 'Упаковка хрупких вещей'],
        hasPriceSlider: true,
        prices: [
            { rooms: 1, price: '1200 ₪' },
            { rooms: 2, price: '2000 ₪' },
            { rooms: 3, price: '2800 ₪' },
            { rooms: 4, price: '3500 ₪' }
        ]
    },
    {
        id: 4,
        icon: <ToolOutlined />,
        title: 'Перевозка мебели',
        description: 'Бережная перевозка мебели любого размера и сложности',
        features: ['Разборка/сборка', 'Защитная упаковка', 'Гарантия сохранности'],
        hasPriceSlider: false,
        price: 'от 200 ₪/единица'
    },
    {
        id: 5,
        icon: <BoxPlotOutlined />,
        title: 'Упаковочные материалы',
        description: 'Профессиональные упаковочные материалы для безопасной перевозки',
        features: ['Коробки разных размеров', 'Пузырчатая пленка', 'Стрейч-пленка'],
        hasPriceSlider: false,
        price: 'от 200 ₪/комплект'
    },
    {
        id: 6,
        icon: <GiftOutlined />,
        title: 'Грузчики в аренду',
        description: 'Квалифицированные грузчики для помощи в погрузочно-разгрузочных работах',
        features: ['Почасовная оплата', 'Опытные специалисты', 'Соблюдение сроков'],
        hasPriceSlider: false,
        price: '200 ₪/час'
    }
];

export const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <h2 className={styles.title}>Наши услуги</h2>
                <p className={styles.subtitle}>Полный спектр услуг для комфортного переезда</p>

                <Row gutter={[30, 30]}>
                    {services.map((service) => (
                        <Col xs={24} md={12} lg={8} key={service.id}>
                            <ServiceCard service={service} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};



