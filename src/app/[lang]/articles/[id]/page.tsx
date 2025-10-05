import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import styles from './article.module.scss'
import type {Metadata} from "next";
import Image from 'next/image';

type Language = 'ru' | 'en' | 'he';

type ArticleContent = Record<Language, string>;

type ArticleTitle = Record<Language, string>;

type ArticleDescription = Record<Language, string>;

type ArticleReadTime = Record<Language, string>;

type ArticleKeywords = Record<Language, string[]>;

interface ArticleData {
    title: ArticleTitle;
    description: ArticleDescription;
    content: ArticleContent;
    image: string;
    readTime: ArticleReadTime;
    keywords: ArticleKeywords;
}

type ArticlesData = Record<string, ArticleData>;

type Props = {
    params: Promise<{ lang: Language; id: string }>
}

const articlesData: ArticlesData = {
    'moving-tips': {
        title: {
            ru: 'Как подготовиться к переезду: 10 советов от профессионалов',
            en: 'How to Prepare for Moving: 10 Professional Tips',
            he: 'איך להתכונן למעבר: 10 טיפים מקצועיים'
        },
        description: {
            ru: 'Полное руководство по подготовке к переезду. Узнайте, как правильно упаковать вещи, составить план и избежать стресса.',
            en: 'Complete guide to moving preparation. Learn how to pack properly, create a plan and avoid stress.',
            he: 'מדריך מלא להכנות למעבר. למד כיצד לארוז נכון, ליצור תוכנית ול� избежать לחץ.'
        },
        content: {
            ru: `
        <h2>Планирование - ключ к успешному переезду</h2>
        <p>Переезд может быть стрессовым событием, но правильная подготовка сделает процесс гладким и организованным. Вот 10 проверенных советов от наших специалистов по грузоперевозкам:</p>
        
        <h3>1. Начните заранее</h3>
        <p>Начните подготовку как минимум за 4-6 недель до переезда. Составьте подробный план и расписание.</p>
        
        <h3>2. Сортировка вещей</h3>
        <p>Разделите вещи на три категории: взять с собой, выбросить, отдать. Это поможет уменьшить объем перевозимого груза.</p>
        
        <h3>3. Соберите важные документы</h3>
        <p>Паспорта, документы на недвижимость, медицинские карты и другие важные бумаги храните отдельно в легко доступном месте.</p>

        <h3>4. Создайте аптечку первой необходимости</h3>
        <p>Включайте лекарства, средства гигиены и вещи, которые могут понадобиться в первый день после переезд��.</p>

        <h3>5. Подпишите все коробки</h3>
        <p>Указывайте комнату и краткое содержимое на каждой коробке для легкой распаковки.</p>

      `,
            en: `
        <h2>Planning is the Key to a Successful Move</h2>
        <p>Moving can be a stressful event, but proper preparation will make the process smooth and organized. Here are 10 proven tips from our transportation specialists:</p>
        
        <h3>1. Start Early</h3>
        <p>Start preparation at least 4-6 weeks before moving. Create a detailed plan and schedule.</p>
        
        <h3>2. Sort Your Belongings</h3>
        <p>Divide items into three categories: take with you, throw away, give away. This will help reduce the volume of transported cargo.</p>
        
        <h3>3. Gather Important Documents</h3>
        <p>Keep passports, real estate documents, medical records and other important papers separately in an easily accessible place.</p>

        <h3>4. Create an Essentials Kit</h3>
        <p>Include medications, hygiene products and items you might need on the first day after moving.</p>

        <h3>5. Label All Boxes</h3>
        <p>Mark the room and brief contents on each box for easy unpacking.</p>

      `,
            he: `
        <h2>תכנון הוא המפתח למעבר מוצלח</h2>
        <p>מעבר יכול להיות אירוע מלחיץ, אבל הכנה נכונה תהפוך את התהליך לחלק ומאורגן. הנה 10 טיפים מוכחים מהמומחים שלנו בתחום ההובלות:</p>
        
        <h3>1. התחל מוקדם</h3>
        <p>התחל בהכנות לפחות 4-6 שבועות לפני המעבר. צור תוכנית ולוח זמנים מפורטים.</p>
        
        <h3>2. מיין את החפצים שלך</h3>
        <p>חלק פריטים לשלוש קטגוריות: קח איתך, זרוק, תרום. זה יעזור להפחית את נפח המטען המועבר.</p>
        
        <h3>3. אסוף מסמכים חשובים</h3>
        <p>שמור דרכונים, מסמכי נדל"ן, תיקים רפואיים ומסמכים חשובים אחרים בנפרד במקום נגיש.</p>

        <h3>4. צור ערכת必需品</h3>
        <p>כלול תרופות, מוצרי היגיינה ופריטים שאולי תזדקק להם ביום הראשון לאחר המעבר.</p>

        <h3>5. תייג את כל הקופסאות</h3>
        <p>סמן את החדר והתוכן הקצר על כל קופסה לפריקה קלה.</p>

      `
        },
        image: '/gruzchiki1.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['переезд', 'советы по переезду', 'подготовка к переезду', 'грузоперевозки'],
            en: ['moving', 'moving tips', 'moving preparation', 'transportation'],
            he: ['מעבר', 'טיפים למעבר', 'הכנות למעבר', 'הובלות']
        }
    },

    'packing-guide': {
        title: {
            ru: 'Полное руководство по упаковке вещей для переезда',
            en: 'Complete Packing Guide for Moving',
            he: 'מדריך אריזות מלא למעבר'
        },
        description: {
            ru: 'Узнайте, как правильно упаковать различные типы вещей для безопасной транспортировки. Советы по упаковке хрупких предметов, мебели и электроники.',
            en: 'Learn how to properly pack different types of items for safe transportation. Tips for packing fragile items, furniture and electronics.',
            he: 'למד כיצד לארוז נכון סוגים שונים של פריטים להובלה בטוחה. טיפים לאריזת פריטים שבירים, רהיטים ואלקטרוניקה.'
        },
        content: {
            ru: `
        <h2>Искусство правильной упаковки для переезда</h2>
        <p>Правильная упаковка - залог сохранности ваших вещей во время транспортировки. Наши специалисты по грузоперевозкам делятся профессиональными секретами:</p>
        
        <h3>1. Выбор упаковочных материалов</h3>
        <p>Используйте прочные картонные коробки, пузырчатую пленку, упаковочную бумагу и качественный скотч. Не экономьте на материалах!</p>
        
        <h3>2. Упаковка хрупких предметов</h3>
        <p>Каждую хрупкую вещь оберните в несколько слоев пузырчатой пленки. Между предметами в коробке добавьте амортизирующий материал.</p>
        
        <h3>3. Разборка мебели</h3>
        <p>Разберите крупную мебель на части. Все болты и винты сложите в отдельные пакеты с маркировкой.</p>

        <h3>4. Электроника и техника</h3>
        <p>Сохраните оригинальные упаковки для электроники. Если их нет, используйте антистатические материалы.</p>

        <h3>5. Одежда и текстиль</h3>
        <p>Используйте специальные кофры для одежды или вакуумные пакеты для экономии места.</p>

      `,
            en: `
        <h2>The Art of Proper Packing for Moving</h2>
        <p>Proper packing is the key to the safety of your belongings during transportation. Our transportation specialists share professional secrets:</p>
        
        <h3>1. Choosing Packing Materials</h3>
        <p>Use sturdy cardboard boxes, bubble wrap, packing paper and quality tape. Don't skimp on materials!</p>
        
        <h3>2. Packing Fragile Items</h3>
        <p>Wrap each fragile item in several layers of bubble wrap. Add cushioning material between items in the box.</p>
        
        <h3>3. Furniture Disassembly</h3>
        <p>Disassemble large furniture into parts. Put all bolts and screws in separate labeled bags.</p>

        <h3>4. Electronics and Appliances</h3>
        <p>Keep original packaging for electronics. If not available, use anti-static materials.</p>

        <h3>5. Clothing and Textiles</h3>
        <p>Use special garment cases or vacuum bags to save space.</p>

      `,
            he: `
        <h2>אמנות האריזה הנכונה למעבר</h2>
        <p>אריזה נכונה היא המפתח לבטיחות החפצים שלך במהלך ההובלה. המומחים שלנו בתחום ההובלות חולקים סודות מקצועיים:</p>
        
        <h3>1. בחירת חומרי אריזה</h3>
        <p>השתמש בקופסאות קרטון חזקות, נייר בועות, נייר אריזה וסקוטch איכותי. אל תחסוך בחומרים!</p>
        
        <h3>2. אריזת פריטים שבירים</h3>
        <p> עטפו כל פריט שביר במספר שכבות של נייר בועות. הוסף חומר ריפוד בין פריטים בקופסה.</p>
        
        <h3>3. פירוק רהיטים</h3>
        <p>פרק רהיטים גדולים לחלקים. שים את כל הברגים והאומים בשקיות נפרדות עם תווית.</p>

        <h3>4. אלקטרוניקה ומכשירים</h3>
        <p>שמור על אריזות מקוריות לאלקטרוניקה. אם לא זמין, השתמש בחומרים אנטי-סטטיים.</p>

        <h3>5. ביגוד וטקסטיל</h3>
        <p>השתמש במארזים מיוחדים לבגדים או בשקיות ואקום כדי לחסוך מקום.</p>

      `
        },
        image: '/gruzchiki2.jpg',
        readTime: {
            ru: '7 мин чтения',
            en: '7 min read',
            he: '7 דקות קריאה'
        },
        keywords: {
            ru: ['упаковка вещей', 'как упаковать вещи', 'упаковка для переезда', 'грузоперевозки'],
            en: ['packing', 'how to pack', 'packing for moving', 'transport services'],
            he: ['אריזת חפצים', 'איך לארוז', 'אריזה למעבר', 'שירותי הובלה']
        }
    },

    'israel-transport': {
        title: {
            ru: 'Особенности грузоперевозок в Израиле: что нужно знать',
            en: 'Features of Transportation in Israel: What You Need to Know',
            he: 'מאפייני הובלה בישראל: מה צריך לדעת'
        },
        description: {
            ru: 'Все о грузоперевозках в Израиле: правила, документы, таможня и логистика. Профессиональные советы для международных перевозок.',
            en: 'All about transportation in Israel: rules, documents, customs and logistics. Professional advice for international shipments.',
            he: 'כל מה שצריך לדעת על הובלות בישראל: כללים, מסמכים, מכס ולוגיסטיקה. ייעוץ מקצועי למשלוחים בינלאומיים.'
        },
        content: {
            ru: `
        <h2>Грузоперевозки в Израиле: полный гид</h2>
        <p>Израиль имеет свои особенности в организации грузоперевозок. Знание местных правил и требований поможет избежать проблем и задержек.</p>
        
        <h3>1. Таможенные правила</h3>
        <p>Все международные грузы проходят таможенный контроль. Необходимо предоставить полный пакет документов, включая инвойс и упаковочный лист.</p>
        
        <h3>2. Документы для импорта</h3>
        <p>Требуется: коммерческий инвойс, коносамент, сертификат происхождения, импортная лицензия для определенных товаров.</p>
        
        <h3>3. Логистические особенности</h3>
        <p>Учитывайте ограничения по движению грузового транспорта в субботу и праздничные дни. Планируйте маршрут заранее.</p>

        <h3>4. Налоги и пошлины</h3>
        <p>Рассчитайте заранее налоги и таможенные пошлины. Некоторые товары имеют льготы.</p>

        <h3>5. Специфические товары</h3>
        <p>Особые требования к перевозке продуктов питания, медицинского оборудования и электроники.</p>

      `,
            en: `
        <h2>Transportation in Israel: Complete Guide</h2>
        <p>Israel has its own features in organizing transportation. Knowledge of local rules and requirements will help avoid problems and delays.</p>
        
        <h3>1. Customs Regulations</h3>
        <p>All international shipments go through customs control. It is necessary to provide a complete set of documents, including invoice and packing list.</p>
        
        <h3>2. Documents for Import</h3>
        <p>Required: commercial invoice, bill of lading, certificate of origin, import license for certain goods.</p>
        
        <h3>3. Logistics Features</h3>
        <p>Consider restrictions on freight traffic on Saturdays and holidays. Plan your route in advance.</p>

        <h3>4. Taxes and Duties</h3>
        <p>Calculate in advance taxes and customs duties. Some goods have benefits.</p>

        <h3>5. Specific Goods</h3>
        <p>Special requirements for transportation of food, medical equipment and electronics.</p>

      `,
            he: `
        <h2>הובלה בישראל: מדריך מלא</h2>
        <p>לישראל יש מאפיינים משלה בארגון הובלות. ידיעת הכללים והדרישות המקומיות תעזור להימנע מבעיות ועיכובים.</p>
        
        <h3>1. תקנות מכס</h3>
        <p>כל המשלוחים הבינלאומיים עוברים ביקורת מכס. יש לספק סט מלא של מסמכים, כולל חשבונית ורשימת אריזה.</p>
        
        <h3>2. מסמכים ליבוא</h3>
        <p>נדרש: חשבונית מסחרית, Bill of lading, תעודת מקור, רישיון יבוא לסחורות מסוימות.</p>
        
        <h3>3. מאפיינים לוגיסטיים</h3>
        <p>קחו בחשבון הגבלות על תנועת משאיות בשבתות וחגים. תכננו את המסלול מראש.</p>

        <h3>4. מיסים ואגרות</h3>
        <p>חשבו מראש מע"מ  ומכס. לסחורות מסוימות יש הטבות.</p>

        <h3>5. סחורות ספציפיות</h3>
        <p>דרישות מיוחדות להובלת מזון, ציוד רפואי ואלקטרוניקה.</p>

      `
        },
        image: '/gruzchiki3.jpg',
        readTime: {
            ru: '6 мин чтения',
            en: '6 min read',
            he: '6 דקות קריאה'
        },
        keywords: {
            ru: ['грузоперевозки в Израиль', 'транспорт в Израиле', 'международные перевозки', 'логистика Израиль'],
            en: ['transportation to Israel', 'shipping to Israel', 'international transport', 'Israel logistics'],
            he: ['הובלות לישראל', 'משלוחים לישראל', 'הובלות בינלאומיות', 'לוגיסטיקה ישראל']
        }
    },

    'office-moving': {
        title: {
            ru: 'Организация переезда офиса: пошаговое руководство',
            en: 'Office Moving Organization: Step-by-Step Guide',
            he: 'ארגון מעבר משרד: מדריך שלב אחר שלב'
        },
        description: {
            ru: 'Как организовать переезд офиса без потери рабочего времени. Планирование, упаковка оборудования, переезд IT-инфраструктуры.',
            en: 'How to organize office moving without losing working time. Planning, equipment packing, IT infrastructure relocation.',
            he: 'איך לארגן מעבר משרד ללא אובדן זמן עבודה. תכנון, אריזת ציוד, העברת תשתיות IT.'
        },
        content: {
            ru: `
        <h2>Профессиональный переезд офиса: минимизируем простои</h2>
        <p>Переезд офиса - сложный процесс, требующий тщательного планирования. Наши решения помогут сохранить бизнес-процессы без interruption.</p>
        
        <h3>1. Планирование за 2-3 месяца</h3>
        <p>Создайте комитет по переезду, составьте детальный план и бюджет. Определите ответственных за каждое направление.</p>
        
        <h3>2. Инвентаризация и сортировка</h3>
        <p>Проведите полную инвентаризацию офисного имущества. Решите, что перевозить, а что утилизировать.</p>
        
        <h3>3. IT-инфраструктура</h3>
        <p>Спланируйте переезд серверов, компьютеров и сетевого оборудования. Обеспечьте резервное копирование данных.</p>

        <h3>4. Упаковка офисного оборудования</h3>
        <p>Используйте специальные упаковочные решения для оргтехники, мебели и документов. Маркируйте все коробки по отделам.</p>

        <h3>5. Коммуникация с сотрудниками</h3>
        <p>Информируйте персонал о планах переезда. Создайте FAQ и назначьте ответственных за вопросы.</p>

        <h3>6. Выбор грузоперевозчика</h3>
        <p>Выбирайте компанию с опытом офисных переездов. Убедитесь в наличии страховки и специального оборудования.</p>

      `,
            en: `
        <h2>Professional Office Moving: Minimizing Downtime</h2>
        <p>Office moving is a complex process requiring careful planning. Our solutions will help maintain business processes without interruption.</p>
        
        <h3>1. Planning 2-3 Months in Advance</h3>
        <p>Create a moving committee, develop a detailed plan and budget. Assign responsible persons for each area.</p>
        
        <h3>2. Inventory and Sorting</h3>
        <p>Conduct a complete inventory of office property. Decide what to move and what to dispose of.</p>
        
        <h3>3. IT Infrastructure</h3>
        <p>Plan the relocation of servers, computers and network equipment. Ensure data backup.</p>

        <h3>4. Office Equipment Packing</h3>
        <p>Use special packing solutions for office equipment, furniture and documents. Label all boxes by departments.</p>

        <h3>5. Employee Communication</h3>
        <p>Inform staff about moving plans. Create FAQ and assign responsible persons for questions.</p>

        <h3>6. Choosing a Transport Company</h3>
        <p>Choose a company with office moving experience. Make sure they have insurance and special equipment.</p>

      `,
            he: `
        <h2>מעבר משרד מקצועי: מזעור זמן השבתה</h2>
        <p>מעבר משרד הוא תהליך מורכב הדורש תכנון קפדני. הפתרונות שלנו יעזרו לשמור על תהליכי עסקים ללא הפרעה.</p>
        
        <h3>1. תכנון 2-3 חודשים מראש</h3>
        <p>צור וועדת מעבר, פיתוח תוכנית מפורטת ותקציב. назначь אחראים לכל תחום.</p>
        
        <h3>2. מלאי ומיון</h3>
        <p>ערוך מלאי מלא של רכוש המשרד. החלט מה להעביר ומה לזרוק.</p>
        
        <h3>3. תשתיות IT</h3>
        <p>תכנן את העברת השרתים, מחשבים וציוד רשת. ודא גיבוי נתונים.</p>

        <h3>4. אריזת ציוד משרדי</h3>
        <p>השתמש בפתרונות אריזה מיוחדים לציוד משרדי, רהיטים ומסמכים. תייג כל קופסאות לפי מחלקות.</p>

        <h3>5. תקשורת עם עובדים</h3>
        <p>דווח לצוות על תוכניות המעבר. צור שאלות נפוצות and назначь אחראים לשאלות.</p>

        <h3>6. בחירת חברת הובלות</h3>
        <p>בחר חברה עם ניסיון במעברי משרדים. ודא שיש להם ביטוח וציוד מיוחד.</p>

      `
        },
        image: '/gruzchiki4.jpg',
        readTime: {
            ru: '8 мин чтения',
            en: '8 min read',
            he: '8 דקות קריאה'
        },
        keywords: {
            ru: ['переезд офиса', 'офисный переезд', 'бизнес переезд', 'грузоперевозки для бизнеса'],
            en: ['office moving', 'office relocation', 'business moving', 'commercial transportation'],
            he: ['מעבר משרד', 'העברת משרד', 'מעבר עסקי', 'הובלות מסחריות']
        }
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, id } = await params
    const article = articlesData[id]

    if (!article) {
        return {
            title: {
                ru: 'Статья не найдена',
                en: 'Article not found',
                he: 'המאמר לא נמצא'
            }[lang]
        }
    }

    return {
        title: article.title[lang],
        description: article.description[lang],
        keywords: article.keywords[lang]?.join(', ')
    }
}

export async function generateStaticParams() {
    const articles = Object.keys(articlesData)
    const languages: Language[] = ['ru', 'en', 'he']

    return articles.flatMap((article) =>
        languages.map((lang) => ({
            id: article,
            lang: lang
        }))
    )
}

export default async function ArticlePage({ params }: Props) {
    const { lang, id } = await params
    const article = articlesData[id]

    if (!article) {
        notFound()
    }

    // Функция для замены плейсхолдеров в ссылках
    const processContent = (content: string) => {
        return content.replace(/\/\[lang\]\//g, `/${lang}/`)
    }

    return (
        <div className={styles.articlePage}>
            <div className={styles.container}>
                <Link href={`/${lang}/`}>
                    <Button
                        type="text"
                        icon={<ArrowLeftOutlined />}
                        className={styles.backButton}
                    >
                        {{
                            ru: 'Назад',
                            en: 'Back',
                            he: 'לַחֲזוֹר'
                        }[lang]}
                    </Button>
                </Link>

                <article className={styles.article}>
                    <header className={styles.articleHeader}>
                        <h1 className={styles.articleTitle}>{article.title[lang]}</h1>
                        <div className={styles.articleMeta}>
                            <span className={styles.readTime}>{article.readTime[lang]}</span>
                        </div>
                        {article.image && (
                            <div className={styles.articleImage}>
                                <Image
                                    src={article.image}
                                    alt={article.title[lang]}
                                    loading="lazy"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        )}
                    </header>

                    <div
                        className={styles.articleContent}
                        dangerouslySetInnerHTML={{
                            __html: processContent(article.content[lang])
                        }}
                    />
                </article>
            </div>
        </div>
    )
}