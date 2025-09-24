import { Row, Col, Card } from 'antd';
import {
    PhoneOutlined,
    CarOutlined,
    SafetyCertificateOutlined,
    CreditCardOutlined,
    DollarOutlined,
    UserOutlined
} from '@ant-design/icons';
import styles from './Advantages.module.scss';

const advantages = [
    {
        icon: <PhoneOutlined />,
        title: 'Операторы всегда на связи 24/7',
        description: 'Круглосуточная поддержка'
    },
    {
        icon: <CarOutlined />,
        title: 'Большой парк авто и спецтехники',
        description: 'Различные грузоподъемности'
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: 'Гарантируем сохранность вашего груза',
        description: 'Страхование груза'
    },
    {
        icon: <CreditCardOutlined />,
        title: 'Оплата частями до 12 платежей',
        description: 'Гибкие условия оплаты'
    },
    {
        icon: <DollarOutlined />,
        title: 'Принимаем любые способы оплаты',
        description: 'Наличные, карты, переводы'
    },
    {
        icon: <UserOutlined />,
        title: 'Специальные цены для студентов',
        description: 'Скидки для учащихся'
    }
];

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className={styles.container}>
                <h2 className={styles.title}>Наши преимущества</h2>
                <Row gutter={[30, 30]}>
                    {advantages.map((advantage, index) => (
                        <Col xs={24} md={8} key={index}>
                            <Card className={styles.card}>
                                <div className={styles.icon}>{advantage.icon}</div>
                                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                                <p className={styles.description}>{advantage.description}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Advantages;