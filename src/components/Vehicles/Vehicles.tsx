import {Card, Col, Row} from 'antd';
import {ArrowsAltOutlined} from '@ant-design/icons';
import styles from './Vehicles.module.scss';

const vehicles = [
    {
        id: 1,
        capacity: 'до 1.5 тонн',
        volume: '9 м³',
        image: '/kangoo.svg'
    },
    {
        id: 2,
        capacity: 'до 3 тонн',
        volume: '16 м³',
        image: '/mercedes.svg'
    },
    {
        id: 3,
        capacity: 'до 5 тонн',
        volume: '25 м³',
        image: '/jac.svg'
    },
    {
        id: 4,
        capacity: 'до 20 тонн',
        volume: '60 м³',
        image: '/truck.svg'
    }
];

export const Vehicles = () => {

    return (
        <section className={styles.vehicles} id="vehicles">
            <div className={styles.container}>
                <h2 className={styles.title}>Наш автопарк</h2>
                <p className={styles.subtitle}>Разнообразный выбор транспорта для любых задач</p>

                <Row gutter={[30, 30]}>
                    {vehicles.map((vehicle) => (
                        <Col xs={24} md={12} lg={6} key={vehicle.id}>
                            <Card
                                className={styles.card}
                                cover={
                                    <div className={styles.imageContainer}>
                                        <div className={styles.placeholderImage}>
                                            <img src={vehicle.image} alt="транспорт"/>
                                        </div>
                                    </div>
                                }
                            >
                                <div className={styles.cardContent}>

                                    <div className={styles.specs}>
                                        {`${vehicle.capacity} / ${vehicle.volume}`}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </section>
    );
};
