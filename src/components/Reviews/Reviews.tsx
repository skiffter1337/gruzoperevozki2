import {useState} from 'react';
import {Row, Col, Rate, Avatar} from 'antd';
import {
    PhoneOutlined,
    StarFilled,
    UserOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    TeamOutlined,
    TrophyOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';
import styles from './Reviews.module.scss';

const reviews = [
    {
        id: 1,
        name: 'Анна Иванова',
        location: 'Тель-Авив, ул. Кауфман',
        date: '15.12.2024',
        rating: 5,
        text: 'Очень довольна переездом! Ребята работали быстро и аккуратно. Все вещи доставлены в целости и сохранности. Особенно порадовала бережная упаковка хрупких предметов.',
        avatar: '/avatars/avatar1.jpg'
    },
    {
        id: 2,
        name: 'Михаил Петров',
        location: 'Тель-Авив, ул. Кауфман',
        date: '08.12.2024',
        rating: 1,
        text: 'Пиздец! Все расхуярили!',
        avatar: '/avatars/avatar2.jpg'
    },
    {
        id: 3,
        name: 'Елена Смирнова',
        location: 'Тель-Авив, ул. Кауфман',
        date: '02.12.2024',
        rating: 5,
        text: 'Лучший сервис по переездам! Заказывала переезд из трехкомнатной квартиры. Все сделали быстро, качественно и по адекватной цене. Рекомендую всем!',
        avatar: '/avatars/avatar3.jpg'
    },
    {
        id: 4,
        name: 'Дмитрий Козлов',
        location: 'Тель-Авив, ул. Кауфман',
        date: '25.11.2024',
        rating: 5,
        text: 'Перевозили пианино и антикварную мебель. Отнеслись с максимальной осторожностью. Все доставлено без единой царапины. Большое спасибо команде!',
        avatar: '/avatars/avatar4.jpg'
    }
];

const companyStats = [
    {icon: <TeamOutlined/>, number: '500+', text: 'Довольных клиентов'},
    {icon: <CheckCircleOutlined/>, number: '1200+', text: 'Успешных переездов'},
    {icon: <TrophyOutlined/>, number: '5 лет', text: 'На рынке услуг'},
    {icon: <SafetyCertificateOutlined/>, number: '100%', text: 'Страхование груза'}
];

export const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <section className={styles.section} id="reviews">
            <div className={styles.container}>
                <h2 className={styles.title}>Отзывы клиентов</h2>
                <p className={styles.subtitle}>Что говорят наши клиенты о качестве наших услуг</p>

                <Row gutter={[60, 40]}>
                    {/* Блок с телефоном и отзывами */}
                    <Col xs={24} lg={10} >
                        <div className={styles.phoneContainer}>
                            <div className={styles.phone}>


                                <div className={styles.phoneScreen}>
                                    <div className={styles.reviewContent}>
                                        <div className={styles.reviewHeader}>
                                            <Avatar
                                                size={60}
                                                src={reviews[currentReview].avatar}
                                                icon={<UserOutlined/>}
                                                className={styles.avatar}
                                            />
                                            <div className={styles.userInfo}>
                                                <h4 className={styles.userName}>{reviews[currentReview].name}</h4>
                                                <div className={styles.userDetails}>
                          <span className={styles.location}>
                            <EnvironmentOutlined/>
                              {reviews[currentReview].location}
                          </span>
                                                    <span className={styles.date}>
                            <CalendarOutlined/>
                                                        {reviews[currentReview].date}
                          </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.rating}>
                                            <Rate
                                                disabled
                                                defaultValue={reviews[currentReview].rating}
                                                character={<StarFilled/>}
                                                className={styles.stars}
                                            />
                                        </div>

                                        <p className={styles.reviewText}>
                                            {`"${reviews[currentReview].text}"`}
                                        </p>

                                        <div className={styles.navigation}>
                                            <button className={styles.navButton} onClick={prevReview}>
                                                ←
                                            </button>
                                            <div className={styles.dots}>
                                                {reviews.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className={`${styles.dot} ${index === currentReview ? styles.activeDot : ''}`}
                                                    />
                                                ))}
                                            </div>
                                            <button className={styles.navButton} onClick={nextReview}>
                                                →
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={14}>
                        <div className={styles.companyInfo}>
                            <h3 className={styles.companyTitle}>О нашей компании</h3>

                            <div className={styles.companyDescription}>
                                <p>
                                    <strong>ГрузовичОК</strong> — это профессиональная служба переездов,
                                    которая уже более 5 лет помогает людям и бизнесу осуществлять
                                    переезды любой сложности. Мы гордимся своим безупречным сервисом
                                    и внимательным отношением к каждому клиенту.
                                </p>

                                <p>
                                    Наша команда состоит из опытных грузчиков и водителей,
                                    которые проходят регулярное обучение и сертификацию.
                                    Мы используем только современное оборудование и качественные
                                    упаковочные материалы.
                                </p>
                            </div>

                            <div className={styles.statsGrid}>
                                {companyStats.map((stat, index) => (
                                    <div key={index} className={styles.statItem}>
                                        <div className={styles.statIcon}>{stat.icon}</div>
                                        <div className={styles.statContent}>
                                            <div className={styles.statNumber}>{stat.number}</div>
                                            <div className={styles.statText}>{stat.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.ctaBlock}>
                                <h4>Готовы к переезду?</h4>
                                <p>Оставьте заявку и мы перезвоним вам в течение 15 минут</p>
                                <button className={styles.ctaButton}>
                                    <PhoneOutlined/>
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

