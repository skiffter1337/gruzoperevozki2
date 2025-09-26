import {CheckCircleOutlined, SafetyCertificateOutlined, TeamOutlined, TrophyOutlined} from "@ant-design/icons";

export const getReviewsData = (lang: 'ru' | 'he') => {
    const reviews = {
        ru: [
            {
                id: 1,
                name: 'Анна Иванова',
                location: 'Тель-Авив, ул. Кауфман',
                date: '2024-12-15',
                rating: 5,
                text: 'Очень довольна переездом! Ребята работали быстро и аккуратно. Все вещи доставлены в целости и сохранности. Особенно порадовала бережная упаковка хрупких предметов.',
                avatar: '/avatars/avatar1.jpg',
                service: 'Квартирный переезд'
            },
            {
                id: 2,
                name: 'Михаил Петров',
                location: 'Тель-Авив, ул. Кауфман',
                date: '2024-12-08',
                rating: 1,
                text: 'Пиздец! Все расхуярили!',
                avatar: '/avatars/avatar2.jpg',
                service: 'Офисный переезд'
            },
            {
                id: 3,
                name: 'Елена Смирнова',
                location: 'Тель-Авив, ул. Кауфман',
                date: '2024-12-02',
                rating: 5,
                text: 'Лучший сервис по переездам! Заказывала переезд из трехкомнатной квартиры. Все сделали быстро, качественно и по адекватной цене. Рекомендую всем!',
                avatar: '/avatars/avatar3.jpg',
                service: 'Квартирный переезд'
            },
            {
                id: 4,
                name: 'Дмитрий Козлов',
                location: 'Тель-Авив, ул. Кауфман',
                date: '2024-11-25',
                rating: 5,
                text: 'Перевозили пианино и антикварную мебель. Отнеслись с максимальной осторожностью. Все доставлено без единой царапины. Большое спасибо команде!',
                avatar: '/avatars/avatar4.jpg',
                service: 'Перевозка мебели'
            }
        ],
        he: [
            {
                id: 1,
                name: 'אנה איבנובה',
                location: 'תל אביב, רחוב קאופמן',
                date: '2024-12-15',
                rating: 5,
                text: 'מרוצה מאוד מהמעבר! העובדים עבדו במהירות ובזהירות. כל החפצים הועברו בשלמותם.',
                avatar: '/avatars/avatar1.jpg',
                service: 'מעבר דירה'
            },
            {
                id: 2,
                name: 'מיכאיל פטרוב',
                location: 'תל אביב, רחוב קאופמן',
                date: '2024-12-08',
                rating: 1,
                text: 'Пиздец! Все расхуярили!',
                avatar: '/avatars/avatar2.jpg',
                service: 'מעבר משרד'
            },
            {
                id: 3,
                name: 'ילנה סמירנובה',
                location: 'תל אביב, רחוב קאופמן',
                date: '2024-12-02',
                rating: 5,
                text: 'השירות הטוב ביותר למעבר דירה! הזמנתי מעבר מדירה שלושה חדרים. הכל נעשה במהירות, באיכות ובמחיר סביר. ממליצה לכולם!',
                avatar: '/avatars/avatar3.jpg',
                service: 'מעבר דירה'
            },
            {
                id: 4,
                name: 'דמיטרי קוזלוב',
                location: 'תל אביב, רחוב קאופמן',
                date: '2024-11-25',
                rating: 5,
                text: 'הובלנו פסנתר ורהיטים עתיקים. התייחסו במקסימום זהירות. הכל הועבר ללא שריטה אחת. תודה רבה לצוות!',
                avatar: '/avatars/avatar4.jpg',
                service: 'הובלת רהיטים'
            }
        ]
    };

    return reviews[lang] || reviews.ru;
};

export const getCompanyStats = (lang: 'ru' | 'he') => {
    const stats = {
        ru: [
            {icon: <TeamOutlined/>, number: '740+ ', text: 'Довольных клиентов'},
            {icon: <CheckCircleOutlined/>, number: '1360+', text: 'Успешных переездов'},
            {icon: <TrophyOutlined/>, number: '7 лет', text: 'На рынке услуг'},
            {icon: <SafetyCertificateOutlined/>, number: '100%', text: 'Страхование груза'}
        ],
        he: [
            {icon: <TeamOutlined/>, number: '740+ ', text: 'לקוחות מרוצים'},
            {icon: <CheckCircleOutlined/>, number: '1360+', text: 'מעברים מוצלחים'},
            {icon: <TrophyOutlined/>, number: '5 שנים', text: 'בשוק השירותים'},
            {icon: <SafetyCertificateOutlined/>, number: '100%', text: 'ביטוח מטען'}
        ]
    };

    return stats[lang] || stats.ru;
};