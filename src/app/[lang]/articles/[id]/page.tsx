import {notFound} from 'next/navigation'
import type {Metadata} from "next";
import {ArticleContent} from "@/components/ArticleContent";

type Language = 'ru' | 'en' | 'he';

type ArticleContentType = Record<Language, string>;

type ArticleTitle = Record<Language, string>;

type ArticleDescription = Record<Language, string>;

type ArticleReadTime = Record<Language, string>;

type ArticleKeywords = Record<Language, string[]>;

interface ArticleData {
    title: ArticleTitle;
    description: ArticleDescription;
    content: ArticleContentType;
    image: string;
    readTime: ArticleReadTime;
    keywords: ArticleKeywords;
}

type ArticlesData = Record<string, ArticleData>;


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
    },
    'local-moving-israel': {
        title: {
            ru: 'Грузоперевозки по городам Израиля: Нетания, Тель-Авив, Холон, Петах-Тиква',
            en: 'Local Moving in Israel: Netanya, Tel Aviv, Holon, Petah Tikva',
            he: 'הובלות בערים המרכזיות: נתניה, תל אביב, חולון, פתח תקווה'
        },
        description: {
            ru: 'Профессиональные грузоперевозки в Нетании, Тель-Авиве, Холоне, Петах-Тикве и по всему Центральному округу. Недорого и быстро.',
            en: 'Professional moving services in Netanya, Tel Aviv, Holon, Petah Tikva and throughout the Central District. Affordable and fast.',
            he: 'הובלות מקצועיות בנתניה, תל אביב, חולון, פתח תקווה ובכל מרחב המרכז. במחיר משתלם ומהר.'
        },
        content: {
            ru: `
        <h2>Грузоперевозки в Центральном округе Израиля</h2>
        <p>Ищете надежные <strong>грузоперевозки в Нетании</strong>, <strong>перевозки в Тель-Авиве</strong> или <strong>перевозки в Холоне</strong>? Наша компания предлагает полный спектр услуг по переезду по всему Израилю. Мы специализируемся на быстрых и аккуратных <strong>мелких перевозках в Израиле</strong>, а также на комплексных <strong>перевозках квартир в Израиле</strong>.</p>

        <h3>Популярные направления для переезда</h3>
        <p><strong>Перевозка по Нетании</strong> и соседним городам (Рамат-Ган, Гиватаим) — одно из наших основных направлений. Мы также выполняем <strong>перевозки в Петах-Тиква</strong>, <strong>перевозки в Рамат-Ган</strong> и <strong>перевозки в Хадеру</strong>. Наши клиенты часто заказывают <strong>перевозки в Ришон ле-Цион</strong> и <strong>перевозки в Ор Акиву</strong>.</p>

        <h3>Перевозка мебели недорого</h3>
        <p>Мы понимаем, что стоимость важна, поэтому предлагаем <strong>перевозку мебели недорого</strong> без потери качества. Наши услуги включают <strong>перевозку мебели</strong> любой сложности — от одного предмета до полной комплектации дома.</p>

        <h3>Сколько стоит перевозка квартиры в Израиле?</h3>
        <p><strong>Сколько стоит перевозка квартиры в Израиле?</strong> Цена зависит от объема, расстояния и дополнительных услуг. Мы предлагаем прозрачный прайс-лист и бесплатные оценки. <strong>Перевозка квартиры с упаковкой</strong> — популярная услуга, которая экономит ваше время и нервы.</p>
      `,
            en: `
        <h2>Local Moving in Central Israel</h2>
        <p>Looking for reliable <strong>moving in Netanya</strong>, <strong>moving in Tel Aviv</strong>, or <strong>moving in Holon</strong>? Our company offers a full range of moving services throughout Israel. We specialize in fast and careful <strong>small moves in Israel</strong>, as well as comprehensive <strong>apartment transportation in Israel</strong>.</p>

        <h3>Popular Moving Destinations</h3>
        <p><strong>Transportation to Netanya</strong> and neighboring cities (Ramat Gan, Givatayim) is one of our main directions. We also perform <strong>moving in Petah Tikva</strong>, <strong>moving in Ramat Gan</strong>, and <strong>moving in Hadera</strong>. Our clients often order <strong>moving to Rishon LeZion</strong> and <strong>moving to Or Akiva</strong>.</p>

        <h3>Furniture Transportation Affordable</h3>
        <p>We understand that cost is important, so we offer <strong>furniture transportation affordable</strong> without quality loss. Our services include <strong>furniture transportation</strong> of any complexity - from one item to a complete house setup.</p>

        <h3>How Much Does Apartment Moving Cost in Israel?</h3>
        <p><strong>How much does apartment moving cost in Israel?</strong> The price depends on volume, distance, and additional services. We offer transparent <strong>moving price list</strong> and free estimates. <strong>Apartment transportation with packaging</strong> is a popular service that saves your time and nerves.</p>
      `,
            he: `
        <h2>הובלות בערים המרכזיות בישראל</h2>
        <p>מחפשים <strong>הובלות בנתניה</strong>, <strong>הובלות בתל אביב</strong> או <strong>הובלות בחולון</strong> אמינות? החברה שלנו מציעה מגוון מלא של שירותי הובלה בכל רחבי ישראל. אנחנו מתמחים ב<strong>הובלות קטנות</strong> מהירות ומדויקות, כמו גם ב<strong>הובלות דירות</strong> מקיפות.</p>

        <h3>יעדים פופולריים למעבר</h3>
        <p><strong>הובלות בשרון</strong> וערים שכנות (רמת גן, גבעתיים) היא אחת מהכיוונים העיקריים שלנו. אנחנו גם מבצעים <strong>הובלות ברעננה</strong>, <strong>הובלות ברמת גן</strong> ו<strong>הובלות בחדרה</strong>. הלקוחות שלנו מזמינים часто <strong>הובלות בראשון לציון</strong> ו<strong>הובלות באור עקיבא</strong>.</p>

        <h3>הובלת רהיטים במחיר משתלם</h3>
        <p>אנחנו מבינים שהמחיר חשוב, поэтому מציעים <strong>הובלת רהיטים</strong> במחיר משתלם без אובדן איכות. השירותים שלנו כוללים <strong>הובלות רהיטים</strong> בכל רמת מורכבות - מפריט בודד עד להסעת בית מלאה.</p>

        <h3>כמה עולה הובלת דירה בישראל?</h3>
        <p><strong>כמה עולה הובלת דירה בישראל?</strong> המחיר תלוי בהיקף, במרחק ובשירותים נוספים. אנחנו מציעים <strong>מחירון הובלות</strong> שקוף והערכות חינם. <strong>הובלה עם אריזה</strong> היא שירות פופולרי שחוסך לכם זמן ועצבים.</p>
      `
        },
        image: '/gruzchiki5.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['грузоперевозки в израиле', 'перевозка по нетании', 'перевозки тель-авив', 'перевозки холон', 'перевозки петах тиква', 'перевозки ришон ле цион', 'перевозки рамат ган', 'перевозки хадера', 'перевозки ор акива', 'мелкие перевозки в израиле', 'перевозка квартир в израиле', 'перевозка мебели недорого', 'сколько стоит перевозка квартиры в израиле', 'перевозка квартиры с упаковкой'],
            en: ['moving israel', 'moving netanya', 'moving tel aviv', 'moving holon', 'moving petah tikva', 'moving rishon lezion', 'moving ramat gan', 'moving hadera', 'moving or akiva', 'small move israel', 'apartment transportation israel', 'furniture transportation affordable', 'moving price list', 'apartment transportation with packaging'],
            he: ['הובלות בנתניה', 'הובלות בתל אביב', 'הובלות בחולון', 'הובלות בפתח תקווה', 'הובלות בראשון לציון', 'הובלות ברמת גן', 'הובלות בחדרה', 'הובלות באור עקיבא', 'הובלות קטנות', 'הובלות דירות', 'הובלות רהיטים', 'מחירון הובלות', 'הובלה עם אריזה', 'הובלות במרכז']
        }
    },

    'crane-moving-services': {
        title: {
            ru: 'Перевозка с подъемным краном: для крупногабаритных предметов и сложных условий',
            en: 'Moving with a Crane: For Large Items and Complex Conditions',
            he: 'הובלה עם מנוף: לפריטים גדולים ותנאים מורכבים'
        },
        description: {
            ru: 'Услуги перевозки с подъемным краном в Израиле для мебели, пианино, сейфов. Сложные перевозки на высоких этажах.',
            en: 'Crane moving services in Israel for furniture, pianos, safes. Complex moves to high floors.',
            he: 'שירותי הובלה עם מנוף בישראל לרהיטים, פסנתרים, כספות. הובלות מורכבות לקומות גבוהות.'
        },
        content: {
            ru: `
        <h2>Перевозка с подъемным краном — решение сложных задач</h2>
        <p>Когда стандартные методы не работают, на помощь приходит <strong>перевозка с подъемным краном</strong>. Эта услуга незаменима для <strong>перевозки крупногабаритной мебели</strong>, пианино, сейфов и оборудования через окно или балкон.</p>

        <h3>Когда нужна транспортировка мебели с краном?</h3>
        <p><strong>Транспортировка мебели по Израилю</strong> часто требует нестандартных решений. <strong>Перевозка с подъемным краном</strong> необходима когда:</p>
        <ul>
          <li>Лестница слишком узкая для <strong>перевозки дивана</strong> или <strong>перевозки шкафа</strong></li>
          <li>Нужна <strong>перевозка пианино</strong> на высокий этаж</li>
          <li>Требуется <strong>перевозка сейфа</strong> или тяжелого оборудования</li>
          <li>Доступ в здание ограничен</li>
        </ul>

        <h3>Преимущества перевозки с краном</h3>
        <p>Наша услуга <strong>перевозка с подъемным краном</strong> обеспечивает:</p>
        <ul>
          <li>Безопасность — все работы страхуются</li>
          <li>Скорость — экономия времени на подъеме</li>
          <li>Сохранность имущества — профессиональное оборудование</li>
          <li>Возможность <strong>срочной перевозки</strong> в сложных условиях</li>
        </ul>

        <h3>Города обслуживания</h3>
        <p>Мы предоставляем услуги <strong>перевозки с краном</strong> по всему Израилю: <strong>перевозки в Тель-Авиве</strong>, <strong>перевозки в Нетании</strong>, <strong>перевозки в Холоне</strong>, <strong>перевозки в Петах-Тикве</strong> и других городах.</p>
      `,
            en: `
        <h2>Moving with a Crane - Solving Complex Problems</h2>
        <p>When standard methods don't work, <strong>moving with a lifting crane</strong> comes to the rescue. This service is indispensable for <strong>large furniture transportation</strong>, pianos, safes, and equipment through windows or balconies.</p>

        <h3>When Do You Need Furniture Transportation with a Crane?</h3>
        <p><strong>Furniture transportation across Israel</strong> often requires non-standard solutions. <strong>Transportation with a lifting crane</strong> is necessary when:</p>
        <ul>
          <li>Stairs are too narrow for <strong>sofa transportation</strong> or <strong>wardrobe transportation</strong></li>
          <li>You need <strong>piano transportation</strong> to a high floor</li>
          <li><strong>Safe transportation</strong> or heavy equipment is required</li>
          <li>Building access is limited</li>
        </ul>

        <h3>Benefits of Crane Moving</h3>
        <p>Our <strong>moving with a crane</strong> service provides:</p>
        <ul>
          <li>Safety - all work is insured</li>
          <li>Speed - time saving on lifting</li>
          <li>Property preservation - professional equipment</li>
          <li>Possibility of <strong>urgent moving</strong> in complex conditions</li>
        </ul>

        <h3>Service Cities</h3>
        <p>We provide <strong>crane moving services</strong> throughout Israel: <strong>moving in Tel Aviv</strong>, <strong>moving in Netanya</strong>, <strong>moving in Holon</strong>, <strong>moving in Petah Tikva</strong> and other cities.</p>
      `,
            he: `
        <h2>הובלה עם מנוף - פתרון לבעיות מורכבות</h2>
        <p>כשיטות סטנדרטיות לא עובדות, <strong>הובלה עם מנוף</strong> מגיעה להצלה. שירות זה הכרחי ל<strong>הובלת רהיטים גדולים</strong>, פסנתרים, כספות וציוד דרך חלונות או מרפסות.</p>

        <h3>מתי צריך הובלת רהיטים עם מנוף?</h3>
        <p><strong>הובלת רהיטים בישראל</strong> часто דורשת פתרונות לא סטנדרטיים. <strong>הובלה עם מנוף</strong> необходиמת כאשר:</p>
        <ul>
          <li>המדרגות צרות מדי עבור <strong>הובלת ספה</strong> או <strong>הובלת ארונית</strong></li>
          <li>נדרשת <strong>הובלת פסנתר</strong> לקומה גבוהה</li>
          <li>נדרשת <strong>הובלת כספת</strong> או ציוד כבד</li>
          <li>גישה לבניין מוגבלת</li>
        </ul>

        <h3>יתרונות של הובלה עם מנוף</h3>
        <p>השירות שלנו <strong>הובלה עם מנוף</strong> מספק:</p>
        <ul>
          <li>בטיחות - כל העבודה מבוטחת</li>
          <li>מהירות - חיסכון בזמן בהרמה</li>
          <li>שימור רכוש - ציוד מקצועי</li>
          <li>אפשרות ל<strong>הובלה דחופה</strong> בתנאים מורכבים</li>
        </ul>

        <h3>ערי שירות</h3>
        <p>אנו מספקים שירותי <strong>הובלה עם מנוף</strong> בכל רחבי ישראל: <strong>הובלות בתל אביב</strong>, <strong>הובלות בנתניה</strong>, <strong>הובלות בחולון</strong>, <strong>הובלות בפתח תקווה</strong> וערים נוספות.</p>
      `
        },
        image: '/gruzchiki8.jpg',
        readTime: {
            ru: '6 мин чтения',
            en: '6 min read',
            he: '6 דקות קריאה'
        },
        keywords: {
            ru: ['перевозка с подъемным краном', 'транспортировка мебели по израилю', 'перевозка мебели', 'перевозка дивана', 'перевозка шкафа', 'перевозка пианино', 'перевозка сейфа', 'срочная перевозка', 'перевозки в тель-авиве', 'перевозки в нетании', 'перевозки в холоне', 'перевозки в петах-тикве'],
            en: ['moving with a lifting crane', 'furniture transportation israel', 'furniture transportation', 'sofa transportation', 'wardrobe transportation', 'piano transportation', 'safe transportation', 'urgent moving', 'moving tel aviv', 'moving netanya', 'moving holon', 'moving petah tikva'],
            he: ['הובלה עם מנוף', 'הובלות רהיטים', 'הובלת רהיטים', 'הובלת ספה', 'הובלת ארונית', 'הובלת פסנתר', 'הובלת כספת', 'הובלה דחופה', 'הובלות בתל אביב', 'הובלות בנתניה', 'הובלות בחולון', 'הובלות בפתח תקווה']
        }
    },

    'office-moving-center': {
        title: {
            ru: 'Переезд офиса в Центральном округе: Тель-Авив, Рамат-Ган, Бней-Брак',
            en: 'Office Moving in the Central District: Tel Aviv, Ramat Gan, Bnei Brak',
            he: 'הובלת משרדים במרכז: תל אביב, רמת גן, בני ברק'
        },
        description: {
            ru: 'Профессиональный переезд офиса в Тель-Авиве, Рамат-Гане, Бней-Браке. Минимизация простоя бизнеса. Перевозка оргтехники и мебели.',
            en: 'Professional office moving in Tel Aviv, Ramat Gan, Bnei Brak. Business downtime minimization. Office equipment and furniture transportation.',
            he: 'הובלת משרדים מקצועית בתל אביב, רמת גן, בני ברק. מזעור זמן השבתה עסקי. הובלת ציוד משרדי ורהיטים.'
        },
        content: {
            ru: `
        <h2>Переезд офиса в бизнес-центрах Израиля</h2>
        <p>Организация <strong>переезда офиса в Центральном округе</strong> требует особого подхода. Мы специализируемся на <strong>перевозках офисов в Тель-Авиве</strong>, <strong>перевозках офисов в Рамат-Гане</strong> и <strong>перевозках офисов в Бней-Браке</strong> с минимальным простоем.</p>

        <h3>Особенности офисного переезда</h3>
        <p><strong>Переезд офиса</strong> — это не просто <strong>перевозка мебели</strong>. Это сложный процесс, включающий:</p>
        <ul>
          <li><strong>Перевозку оргтехники</strong> и компьютеров</li>
          <li>Демонтаж и сборку офисной мебели</li>
          <li>Упаковку документов и архивов</li>
          <li>Переподключение IT-инфраструктуры</li>
        </ul>

        <h3>Почему выбирают нашу компанию для переезда офиса?</h3>
        <p>Мы — <strong>рекомендуемые перевозчики</strong> для бизнеса потому что:</p>
        <ul>
          <li>Имеем опыт <strong>переездов офисов в Центральном округе</strong></li>
          <li>Предлагаем <strong>срочные перевозки</strong> для бизнеса</li>
          <li>Гарантируем сохранность оборудования</li>
          <li>Работаем в выходные — <strong>перевозки в субботу</strong> по запросу</li>
        </ul>

        <h3>Города для офисного переезда</h3>
        <p>Помимо <strong>переездов офисов в Тель-Авиве</strong>, мы выполняем <strong>переезды офисов в Рамат-Гане</strong>, <strong>переезды офисов в Бней-Браке</strong>, <strong>переезды офисов в Гиватаиме</strong> и <strong>переезды офисов в Герцлии</strong>.</p>
      `,
            en: `
        <h2>Office Moving in Business Centers of Israel</h2>
        <p>Organizing <strong>office moving in the Central District</strong> requires a special approach. We specialize in <strong>office moving in Tel Aviv</strong>, <strong>office moving in Ramat Gan</strong>, and <strong>office moving in Bnei Brak</strong> with minimal downtime.</p>

        <h3>Office Moving Features</h3>
        <p><strong>Office moving</strong> is not just <strong>furniture transportation</strong>. It's a complex process including:</p>
        <ul>
          <li><strong>Office equipment transportation</strong> and computers</li>
          <li>Office furniture disassembly and assembly</li>
          <li>Document and archive packing</li>
          <li>IT infrastructure reconnection</li>
        </ul>

        <h3>Why Choose Our Company for Office Moving?</h3>
        <p>We are <strong>recommended movers</strong> for business because:</p>
        <ul>
          <li>We have experience with <strong>office moves in the Central District</strong></li>
          <li>We offer <strong>urgent moving</strong> for business</li>
          <li>We guarantee equipment safety</li>
          <li>We work on weekends - <strong>moving on Saturday</strong> upon request</li>
        </ul>

        <h3>Cities for Office Moving</h3>
        <p>In addition to <strong>office moving in Tel Aviv</strong>, we perform <strong>office moving in Ramat Gan</strong>, <strong>office moving in Bnei Brak</strong>, <strong>office moving in Givatayim</strong>, and <strong>office moving in Herzliya</strong>.</p>
      `,
            he: `
        <h2>הובלת משרדים במרכז העסקים של ישראל</h2>
        <p>ארגון <strong>הובלת משרדים במרכז</strong> דורש גישה מיוחדת. אנחנו מתמחים ב<strong>הובלת משרדים בתל אביב</strong>, <strong>הובלת משרדים ברמת גן</strong> ו<strong>הובלת משרדים בבני ברק</strong> עם מינימום זמן השבתה.</p>

        <h3>מאפייני הובלת משרדים</h3>
        <p><strong>הובלת משרדים</strong> היא לא רק <strong>הובלת רהיטים</strong>. זה תהליך מורכב הכולל:</p>
        <ul>
          <li><strong>הובלת ציוד משרדי</strong> ומחשבים</li>
          <li>פירוק והרכבה של רהיטי משרד</li>
          <li>אריזת מסמכים וארכיונים</li>
          <li>חיבור מחדש של תשתיות IT</li>
        </ul>

        <h3>למה לבחור בחברה שלנו להובלת משרדים?</h3>
        <p>אנחנו <strong>מובילים מומלצים</strong> לעסקים потому ש:</p>
        <ul>
          <li>יש לנו ניסיון ב<strong>הובלות משרדים במרכז</strong></li>
          <li>אנחנו מציעים <strong>הובלה דחופה</strong> לעסקים</li>
          <li>אנחנו מבטיחים שמירה על הציוד</li>
          <li>אנחנו עובדים בסופ"ש - <strong>הובלות בשבת</strong> לפי בקשה</li>
        </ul>

        <h3>ערים להובלת משרדים</h3>
        <p>בנוסף ל<strong>הובלות משרדים בתל אביב</strong>, אנחנו מבצעים <strong>הובלות משרדים ברמת גן</strong>, <strong>הובלות משרדים בבני ברק</strong>, <strong>הובלות משרדים בגבעתיים</strong> ו<strong>הובלות משרדים בהרצליה</strong>.</p>
      `
        },
        image: '/gruzchiki6.jpg',
        readTime: {
            ru: '7 мин чтения',
            en: '7 min read',
            he: '7 דקות קריאה'
        },
        keywords: {
            ru: ['переезд офиса', 'переезд офиса в центральном округе', 'перевозки офисов в тель-авиве', 'перевозки офисов в рамат-гане', 'перевозки офисов в бней-браке', 'перевозка оргтехники', 'рекомендуемые перевозчики', 'срочные перевозки', 'перевозки в субботу', 'переезды офисов в герцлии'],
            en: ['office moving', 'office moving central district', 'office moving tel aviv', 'office moving ramat gan', 'office moving bnei brak', 'office equipment transportation', 'recommended movers', 'urgent moving', 'moving on saturday', 'office moving herzliya'],
            he: ['הובלת משרדים', 'הובלת משרדים במרכז', 'הובלות משרדים בתל אביב', 'הובלות משרדים ברמת גן', 'הובלות משרדים בבני ברק', 'הובלת ציוד משרדי', 'מובילים מומלצים', 'הובלה דחופה', 'הובלות בשבת', 'הובלות משרדים בהרצליה']
        }
    },

    'urgent-moving': {
        title: {
            ru: 'Срочные перевозки: быстро, надежно, в любое время',
            en: 'Urgent Moving: Fast, Reliable, Anytime',
            he: 'הובלה דחופה: מהר, אמין, בכל זמן'
        },
        description: {
            ru: 'Срочные грузоперевозки по Израилю. Переезд сегодня, перевозка мебели срочно, экстренные перевозки. Работаем 24/7.',
            en: 'Urgent moving services across Israel. Moving today, furniture transportation urgently, emergency moves. We work 24/7.',
            he: 'שירותי הובלה דחופה ברחבי ישראל. מעבר היום, הובלת רהיטים דחוף, הובלות חירום. אנחנו עובדים 24/7.'
        },
        content: {
            ru: `
        <h2>Срочные перевозки — когда время критично</h2>
        <p>Нужна <strong>срочная перевозка</strong> сегодня? Мы специализируемся на <strong>экстренных переездах</strong> по всему Израилю. Наши услуги <strong>перевозка сейчас</strong> доступны 24/7 включая выходные.</p>

        <h3>Когда нужна срочная перевозка?</h3>
        <p><strong>Срочная перевозка</strong> может потребоваться в разных ситуациях:</p>
        <ul>
          <li>Внезапная смена аренды или покупка жилья</li>
          <li>Срочный переезд офиса</li>
          <li>Необходимость <strong>перевезти холодильник</strong> или другую технику срочно</li>
          <li>Переезд по рабочим или семейным обстоятельствам</li>
        </ul>

        <h3>Наши преимущества для срочных перевозок</h3>
        <p>Мы понимаем что <strong>срочная перевозка</strong> — это стресс, поэтому предлагаем:</p>
        <ul>
          <li><strong>Перевозка сегодня</strong> — минимальное время ожидания</li>
          <li>Возможность <strong>перевозки в субботу</strong> и праздники</li>
          <li>Полный спектр услуг — от <strong>мелкой перевозки</strong> до <strong>переезда квартиры</strong></li>
          <li>Доступные цены даже на <strong>экстренные перевозки</strong></li>
        </ul>

        <h3>Что мы перевозим срочно?</h3>
        <p>Мы выполняем <strong>срочные перевозки</strong> любого типа:</p>
        <ul>
          <li><strong>Перевозка холодильника</strong> и другой бытовой техники</li>
          <li><strong>Перевозка дивана</strong> и корпусной мебели</li>
          <li><strong>Переезд квартиры</strong> или офиса</li>
          <li><strong>Мелкие перевозки</strong> нескольких предметов</li>
        </ul>

        <p>Независимо от того, нужна ли вам <strong>перевозка в Тель-Авиве</strong>, <strong>перевозка в Нетании</strong> или <strong>перевозка в Холоне</strong> — мы доставим быстро и надежно.</p>
      `,
            en: `
        <h2>Urgent Moving - When Time is Critical</h2>
        <p>Need <strong>urgent moving</strong> today? We specialize in <strong>emergency moves</strong> throughout Israel. Our <strong>moving now</strong> services are available 24/7 including weekends.</p>

        <h3>When Do You Need Urgent Moving?</h3>
        <p><strong>Urgent moving</strong> may be needed in various situations:</p>
        <ul>
          <li>Sudden rental change or home purchase</li>
          <li>Urgent office moving</li>
          <li>Need to <strong>transport a refrigerator</strong> or other appliance urgently</li>
          <li>Moving for work or family reasons</li>
        </ul>

        <h3>Our Advantages for Urgent Moving</h3>
        <p>We understand that <strong>urgent moving</strong> is stressful, so we offer:</p>
        <ul>
          <li><strong>Moving today</strong> - minimum waiting time</li>
          <li>Possibility of <strong>moving on Saturday</strong> and holidays</li>
          <li>Full range of services - from <strong>small moves</strong> to <strong>apartment moving</strong></li>
          <li>Affordable prices even for <strong>emergency moves</strong></li>
        </ul>

        <h3>What Do We Move Urgently?</h3>
        <p>We perform <strong>urgent moving</strong> of any type:</p>
        <ul>
          <li><strong>Refrigerator transportation</strong> and other household appliances</li>
          <li><strong>Sofa transportation</strong> and cabinet furniture</li>
          <li><strong>Apartment moving</strong> or office</li>
          <li><strong>Small moves</strong> of several items</li>
        </ul>

        <p>Regardless of whether you need <strong>moving in Tel Aviv</strong>, <strong>moving in Netanya</strong> or <strong>moving in Holon</strong> - we'll deliver fast and reliably.</p>
      `,
            he: `
        <h2>הובלה דחופה - כאשר הזמן קריטי</h2>
        <p>צריך <strong>הובלה דחופה</strong> היום? אנחנו מתמחים ב<strong>הובלות חירום</strong> בכל רחבי ישראל. השירותים שלנו <strong>הובלה לעכשיו</strong> זמינים 24/7 כולל סופ"ש.</p>

        <h3>מתי צריך הובלה דחופה?</h3>
        <p><strong>הובלה דחופה</strong> может להידרש במצבים שונים:</p>
        <ul>
          <li>שינוי שכירות פתאומי או קניית דירה</li>
          <li>מעבר משרד דחוף</li>
          <li>צורך <strong>להוביל מקרר</strong> או מכשיר אחר בדחיפות</li>
          <li>מעבר מסיבות עבודה או משפחה</li>
        </ul>

        <h3>היתרונות שלנו להובלות דחופות</h3>
        <p>אנחנו מבינים ש<strong>הובלה דחופה</strong> היא מלחיצה, поэтому מציעים:</p>
        <ul>
          <li><strong>הובלה היום</strong> - זמן המתנה מינימלי</li>
          <li>אפשרות ל<strong>הובלות בשבת</strong> וחגים</li>
          <li>מגוון מלא של שירותים - מ<strong>הובלות קטנות</strong> עד <strong>מעבר דירה</strong></li>
          <li>מחירים משתלמים даже ל<strong>הובלות חירום</strong></li>
        </ul>

        <h3>מה אנחנו מובילים בדחיפות?</h3>
        <p>אנחנו מבצעים <strong>הובלה דחופה</strong> מכל סוג:</p>
        <ul>
          <li><strong>הובלת מקרר</strong> ומכשירי חשמל ביתיים אחרים</li>
          <li><strong>הובלת ספה</strong> ורהיטי קיר</li>
          <li><strong>מעבר דירה</strong> או משרד</li>
          <li><strong>הובלות קטנות</strong> של מספר פריטים</li>
        </ul>

        <p>לא משנה אם אתה צריך <strong>הובלות בתל אביב</strong>, <strong>הובלות בנתניה</strong> או <strong>הובלות בחולון</strong> - אנחנו נספק מהר ובאמינות.</p>
      `
        },
        image: '/gruzchiki8.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['срочные перевозки', 'перевозка сегодня', 'экстренные перевозки', 'переезд срочно', 'перевозка мебели срочно', 'перевозка сейчас', 'перевозка холодильника', 'перевозка в субботу', 'мелкая перевозка', 'переезд квартиры', 'перевозки в тель-авиве', 'перевозки в нетании', 'перевозки в холоне'],
            en: ['urgent moving', 'moving today', 'emergency moves', 'moving urgently', 'furniture transportation urgent', 'moving now', 'refrigerator transportation', 'moving on saturday', 'small move', 'apartment moving', 'moving tel aviv', 'moving netanya', 'moving holon'],
            he: ['הובלה דחופה', 'הובלה היום', 'הובלות חירום', 'מעבר דחוף', 'הובלת רהיטים דחוף', 'הובלה לעכשיו', 'הובלת מקרר', 'הובלות בשבת', 'הובלות קטנות', 'מעבר דירה', 'הובלות בתל אביב', 'הובלות בנתניה', 'הובלות בחולון']
        }
    },
    'sharon-moving': {
        title: {
            ru: 'Грузоперевозки в Шароне: надежные переезды по региону',
            en: 'Moving in Sharon: Reliable Moving Services in the Region',
            he: 'הובלות בשרון: שירותי הובלה אמינים באזור'
        },
        description: {
            ru: 'Профессиональные услуги переезда в Шароне. Быстро, качественно и по доступным ценам для жителей региона.',
            en: 'Professional moving services in Sharon. Fast, quality and affordable for residents of the region.',
            he: 'שירותי הובלה מקצועיים בשרון. מהר, איכותי ובמחיר משתלם לתושבי האזור.'
        },
        content: {
            ru: `<h2>Грузоперевозки в Шароне - комплексные решения для переезда</h2>
            <p>Регион Шарон известен своими живописными городами и развитой инфраструктурой. Наша компания предлагает полный спектр услуг по переезду в этом регионе.</p>
            <h3>Популярные направления в Шароне</h3>
            <p>Мы обслуживаем все города Шарона, включая Нетанию, Раанану, Кфар-Сабу, Герцлию и другие населенные пункты.</p>`,
            en: `<h2>Moving in Sharon - Comprehensive Moving Solutions</h2>
            <p>The Sharon region is known for its picturesque cities and developed infrastructure. Our company offers a full range of moving services in this region.</p>
            <h3>Popular Destinations in Sharon</h3>
            <p>We serve all cities in Sharon, including Netanya, Ra'anana, Kfar Saba, Herzliya and other settlements.</p>`,
            he: `<h2>הובלות בשרון - פתרונות הובלה מקיפים</h2>
            <p>אזור השרון ידוע בערים הציוריות שלו ובתשתיות המפותחות. החברה שלנו מציעה מגוון מלא של שירותי הובלה באזור זה.</p>
            <h3>יעדים פופולריים בשרון</h3>
            <p>אנו משרתים את כל ערי השרון, כולל נתניה, רעננה, כפר סבא, הרצליה ויישובים נוספים.</p>`
        },
        image: '/gruzchiki9.jpg',
        readTime: {
            ru: '4 мин чтения',
            en: '4 min read',
            he: '4 דקות קריאה'
        },
        keywords: {
            ru: ['грузоперевозки в шароне', 'переезд в шароне', 'перевозки в нетании', 'перевозки в раанане', 'перевозки в кфар-сабе', 'переезд в герцлии', 'услуги переезда в израиле'],
            en: ['moving in sharon', 'sharon moving services', 'netanya moving', 'raanana moving', 'kfar saba moving', 'herzliya moving', 'israel moving services'],
            he: ['הובלות בשרון', 'מעבר בשרון', 'הובלות בנתניה', 'הובלות ברעננה', 'הובלות בכפר סבא', 'הובלות בהרצליה', 'שירותי הובלה בישראל']
        }
    },

    'raanana-moving': {
        title: {
            ru: 'Переезд в Раанане: профессиональные услуги грузоперевозок',
            en: 'Moving in Ra\'anana: Professional Moving Services',
            he: 'הובלות ברעננה: שירותי הובלה מקצועיים'
        },
        description: {
            ru: 'Организация переезда в Раанане любой сложности. Квартирные и офисные переезды, перевозка мебели и техники.',
            en: 'Organization of moving in Ra\'anana of any complexity. Apartment and office moves, furniture and appliance transportation.',
            he: 'ארגון מעבר ברעננה בכל רמת מורכבות. מעברי דירות ומשרדים, הובלת רהיטים ומכשירים.'
        },
        content: {
            ru: `<h2>Переезд в Раанане - комфорт и надежность</h2>
            <p>Раанана - один из самых престижных городов в центре Израиля. Мы обеспечиваем качественные услуги переезда для жителей этого города.</p>`,
            en: `<h2>Moving in Ra\'anana - Comfort and Reliability</h2>
            <p>Ra\'anana is one of the most prestigious cities in central Israel. We provide quality moving services for residents of this city.</p>`,
            he: `<h2>מעבר ברעננה - נוחות ואמינות</h2>
            <p>רעננה היא אחת הערים היוקרתיות ביותר במרכז ישראל. אנו מספקים שירותי הובלה איכותיים לתושבי העיר הזו.</p>`
        },
        image: '/gruzchiki10.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['переезд в раанане', 'грузоперевозки в раанане', 'перевозки мебели в раанане', 'квартирный переезд в раанане', 'офисный переезд в раанане', 'услуги грузчиков в раанане'],
            en: ['moving in raanana', 'raanana moving services', 'furniture moving in raanana', 'apartment moving in raanana', 'office moving in raanana', 'movers in raanana'],
            he: ['מעבר ברעננה', 'הובלות ברעננה', 'הובלת רהיטים ברעננה', 'מעבר דירה ברעננה', 'מעבר משרד ברעננה', 'שירותי סבלים ברעננה']
        }
    },

    'harish-moving': {
        title: {
            ru: 'Грузоперевозки в Харише: переезды в новый развивающийся город',
            en: 'Moving in Harish: Relocations to the New Developing City',
            he: 'הובלות בחריש: מעבר לעיר החדשה המתפתחת'
        },
        description: {
            ru: 'Специализированные услуги переезда в Хариш - новый современный город на севере Израиля. Помощь с переездом в новый район.',
            en: 'Specialized moving services to Harish - a new modern city in northern Israel. Assistance with moving to a new neighborhood.',
            he: 'שירותי הובלה מיוחדים לחריש - עיר מודרנית חדשה בצפון ישראל. סיוע במעבר לשכונה חדשה.'
        },
        content: {
            ru: `<h2>Переезд в Хариш - новые возможности</h2>
            <p>Хариш стремительно развивается и привлекает новых жителей. Мы помогаем с комфортным переездом в этот современный город.</p>`,
            en: `<h2>Moving to Harish - New Opportunities</h2>
            <p>Harish is rapidly developing and attracting new residents. We help with comfortable relocation to this modern city.</p>`,
            he: `<h2>מעבר לחריש - הזדמנויות חדשות</h2>
            <p>חריש מתפתחת במהירות ומושכת תושבים חדשים. אנו מסייעים עם מעבר נוח לעיר המודרנית הזו.</p>`
        },
        image: '/gruzchiki11.jpg',
        readTime: {
            ru: '4 мин чтения',
            en: '4 min read',
            he: '4 דקות קריאה'
        },
        keywords: {
            ru: ['переезд в хариш', 'грузоперевозки в харише', 'новый город хариш', 'переезд на север израиля', 'перевозки в развивающиеся города', 'услуги переезда в новые районы'],
            en: ['moving to harish', 'harish moving services', 'new city harish', 'moving to northern israel', 'moving to developing cities', 'relocation services to new neighborhoods'],
            he: ['מעבר לחריש', 'הובלות בחריש', 'עיר חדשה חריש', 'מעבר לצפון ישראל', 'הובלות לערים מתפתחות', 'שירותי מעבר לשכונות חדשות']
        }
    },

    'kfar-saba-moving': {
        title: {
            ru: 'Переезд в Кфар-Сабе: качественные грузоперевозки в зеленом городе',
            en: 'Moving in Kfar Saba: Quality Moving Services in the Green City',
            he: 'הובלות בכפר סבא: שירותי הובלה איכותיים בעיר הירוקה'
        },
        description: {
            ru: 'Профессиональные услуги переезда в Кфар-Сабе. Учитываем особенности города и обеспечиваем бережную перевозку вашего имущества.',
            en: 'Professional moving services in Kfar Saba. We take into account the characteristics of the city and ensure careful transportation of your property.',
            he: 'שירותי הובלה מקצועיים בכפר סבא. אנו לוקחים בחשבון את מאפייני העיר ומבטיחים הובלה זהירה של הרכוש שלך.'
        },
        content: {
            ru: `<h2>Кфар-Саба - комфортный переезд в зеленый город</h2>
            <p>Кфар-Саба известна своими парками и качественной жизнью. Мы делаем переезд в этот город максимально комфортным.</p>`,
            en: `<h2>Kfar Saba - Comfortable Move to the Green City</h2>
            <p>Kfar Saba is known for its parks and quality of life. We make moving to this city as comfortable as possible.</p>`,
            he: `<h2>כפר סבא - מעבר נוח לעיר הירוקה</h2>
            <p>כפר סבא ידועה בפארקים שלה ובאיכות חיים. אנו הופכים את המעבר לעיר זו לנוח ככל האפשר.</p>`
        },
        image: '/gruzchiki12.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['переезд в кфар-сабу', 'грузоперевозки в кфар-сабе', 'перевозки мебели в кфар-сабе', 'квартирный переезд в кфар-сабе', 'офисный переезд в кфар-сабе', 'зеленый город переезд'],
            en: ['moving to kfar saba', 'kfar saba moving services', 'furniture moving in kfar saba', 'apartment moving in kfar saba', 'office moving in kfar saba', 'green city moving'],
            he: ['מעבר לכפר סבא', 'הובלות בכפר סבא', 'הובלת רהיטים בכפר סבא', 'מעבר דירה בכפר סבא', 'מעבר משרד בכפר סבא', 'מעבר לעיר ירוקה']
        }
    },

    'tel-aviv-moving': {
        title: {
            ru: 'Переезд в Тель-Авиве: сложные городские перевозки',
            en: 'Moving in Tel Aviv: Complex Urban Transportation',
            he: 'הובלות בתל אביב: הובלות עירוניות מורכבות'
        },
        description: {
            ru: 'Специализированные услуги переезда в Тель-Авиве с учетом особенностей мегаполиса. Парковка, узкие улицы, высотные дома.',
            en: 'Specialized moving services in Tel Aviv considering the characteristics of the metropolis. Parking, narrow streets, high-rise buildings.',
            he: 'שירותי הובלה מיוחדים בתל אביב בהתחשב במאפייני המטרופולין. חניה, רחובות צרים, בניינים גבוהים.'
        },
        content: {
            ru: `<h2>Тель-Авив - переезд в условиях мегаполиса</h2>
            <p>Переезд в Тель-Авиве требует особого подхода. Мы знаем все особенности города и обеспечиваем беспроблемный переезд.</p>`,
            en: `<h2>Tel Aviv - Moving in Metropolis Conditions</h2>
            <p>Moving in Tel Aviv requires a special approach. We know all the features of the city and ensure trouble-free moving.</p>`,
            he: `<h2>תל אביב - מעבר בתנאי מטרופולין</h2>
            <p>מעבר בתל אביב דורש גישה מיוחדת. אנו מכירים את כל מאפייני העיר ומבטיחים מעבר ללא בעיות.</p>`
        },
        image: '/gruzchiki13.jpg',
        readTime: {
            ru: '6 мин чтения',
            en: '6 min read',
            he: '6 דקות קריאה'
        },
        keywords: {
            ru: ['переезд в тель-авиве', 'грузоперевозки в тель-авиве', 'тель-авив переезд квартиры', 'перевозки в центре тель-авива', 'высотные дома переезд', 'городские перевозки тель-авив'],
            en: ['moving in tel aviv', 'tel aviv moving services', 'tel aviv apartment moving', 'moving in central tel aviv', 'high-rise building moving', 'urban transportation tel aviv'],
            he: ['מעבר בתל אביב', 'הובלות בתל אביב', 'מעבר דירה בתל אביב', 'הובלות במרכז תל אביב', 'מעבר לבניינים גבוהים', 'הובלות עירוניות תל אביב']
        }
    },

    'big-moves': {
        title: {
            ru: 'Крупные перевозки: организация масштабных переездов',
            en: 'Big Moves: Organization of Large-Scale Relocations',
            he: 'הובלות גדולות: ארגון מעברים בקנה מידה גדול'
        },
        description: {
            ru: 'Профессиональная организация крупных переездов: виллы, большие квартиры, офисные центры. Специальная техника и оборудование.',
            en: 'Professional organization of large moves: villas, large apartments, office centers. Special equipment and machinery.',
            he: 'ארגון מקצועי של מעברים גדולים: וילות, דירות גדולות, מרכזי משרדים. ציוד וכלים מיוחדים.'
        },
        content: {
            ru: `<h2>Крупные перевозки - профессиональный подход</h2>
            <p>Организация масштабных переездов требует специальных знаний и оборудования. Мы имеем опыт работы с крупными объектами.</p>`,
            en: `<h2>Big Moves - Professional Approach</h2>
            <p>Organization of large-scale moves requires special knowledge and equipment. We have experience with large facilities.</p>`,
            he: `<h2>הובלות גדולות - גישה מקצועית</h2>
            <p>ארגון מעברים בקנה מידה גדול דורש ידע וציוד מיוחד. יש לנו ניסיון עם מתקנים גדולים.</p>`
        },
        image: '/gruzchiki14.jpg',
        readTime: {
            ru: '7 мин чтения',
            en: '7 min read',
            he: '7 דקות קריאה'
        },
        keywords: {
            ru: ['крупные перевозки', 'масштабные переезды', 'переезд виллы', 'большие квартиры переезд', 'офисные центры переезд', 'специальная техника перевозки'],
            en: ['big moves', 'large-scale relocations', 'villa moving', 'large apartment moving', 'office center moving', 'special equipment transportation'],
            he: ['הובלות גדולות', 'מעברים בקנה מידה גדול', 'מעבר וילה', 'מעבר דירות גדולות', 'מעבר מרכז משרדים', 'הובלת ציוד מיוחד']
        }
    },

    'apartment-moving': {
        title: {
            ru: 'Переезд квартиры: полный комплекс услуг',
            en: 'Apartment Moving: Complete Range of Services',
            he: 'הובלות דירות: מגוון שירותים מלא'
        },
        description: {
            ru: 'Комплексные услуги по переезду квартиры: упаковка, погрузка, транспортировка, разгрузка, расстановка мебели. Под ключ.',
            en: 'Comprehensive apartment moving services: packing, loading, transportation, unloading, furniture arrangement. Turnkey.',
            he: 'שירותי הובלת דירות מקיפים: אריזה, טעינה, הובלה, פריקה, סידור רהיטים. מפתח.'
        },
        content: {
            ru: `<h2>Квартирный переезд - забота о каждой детали</h2>
            <p>Мы берем на себя все заботы по организации переезда вашей квартиры. От упаковки до расстановки мебели на новом месте.</p>`,
            en: `<h2>Apartment Moving - Care for Every Detail</h2>
            <p>We take care of all the concerns of organizing your apartment move. From packing to furniture arrangement in the new place.</p>`,
            he: `<h2>מעבר דירה - דאגה לכל פרט</h2>
            <p>אנו לוקחים על עצמנו את כל הדאגות לארגון מעבר הדירה שלך. מהאריזה ועד לסידור הרהיטים במקום החדש.</p>`
        },
        image: '/gruzchiki15.jpg',
        readTime: {
            ru: '6 мин чтения',
            en: '6 min read',
            he: '6 דקות קריאה'
        },
        keywords: {
            ru: ['переезд квартиры', 'квартирные перевозки', 'услуги переезда квартиры', 'переезд под ключ', 'упаковка квартиры', 'расстановка мебели при переезде'],
            en: ['apartment moving', 'apartment transportation', 'apartment moving services', 'turnkey moving', 'apartment packing', 'furniture arrangement when moving'],
            he: ['מעבר דירה', 'הובלות דירות', 'שירותי מעבר דירה', 'מעבר מפתח', 'אריזת דירה', 'סידור רהיטים במעבר']
        }
    },

    'herzliya-moving': {
        title: {
            ru: 'Переезд в Герцлии: премиальные услуги грузоперевозок',
            en: 'Moving in Herzliya: Premium Moving Services',
            he: 'הובלות בהרצליה: שירותי הובלה פרמיים'
        },
        description: {
            ru: 'Элитные услуги переезда в Герцлии. Бережное отношение к вашему имуществу, страховка, индивидуальный подход.',
            en: 'Elite moving services in Herzliya. Careful attitude to your property, insurance, individual approach.',
            he: 'שירותי הובלה elit בהרצליה. יחס זהיר לרכושך, ביטוח, גישה אישית.'
        },
        content: {
            ru: `<h2>Герцлия - переезд с премиальным сервисом</h2>
            <p>Герцлия известна своими высокими стандартами жизни. Мы соответствуем этим стандартам в наших услугах переезда.</p>`,
            en: `<h2>Herzliya - Moving with Premium Service</h2>
            <p>Herzliya is known for its high living standards. We meet these standards in our moving services.</p>`,
            he: `<h2>הרצליה - מעבר עם שירות פרמיום</h2>
            <p>הרצליה ידועה בסטנדרטים הגבוהים של החיים. אנו עומדים בסטנדרטים אלה בשירותי ההובלה שלנו.</p>`
        },
        image: '/gruzchiki16.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['переезд в герцлии', 'грузоперевозки в герцлии', 'премиальные перевозки', 'элитный переезд', 'герцлия питуах переезд', 'услуги переезда для вип'],
            en: ['moving to herzliya', 'herzliya moving services', 'premium moving', 'elite relocation', 'herzliya pituach moving', 'vip moving services'],
            he: ['מעבר להרצליה', 'הובלות בהרצליה', 'הובלות פרמיות', 'מעבר elit', 'מעבר הרצליה פיתוח', 'שירותי מעבר ל-vip']
        }
    },

    'rosh-haayin-moving': {
        title: {
            ru: 'Переезд в Рош-ха-Аин: надежные грузоперевозки в развивающемся городе',
            en: 'Moving in Rosh HaAyin: Reliable Moving Services in the Developing City',
            he: 'הובלות בראש העין: שירותי הובלה אמינים בעיר המתפתחת'
        },
        description: {
            ru: 'Профессиональные услуги переезда в Рош-ха-Аин. Учитываем динамичное развитие города и растущие потребности жителей.',
            en: 'Professional moving services in Rosh HaAyin. We consider the dynamic development of the city and the growing needs of residents.',
            he: 'שירותי הובלה מקצועיים בראש העין. אנו מתחשבים בהתפתחות הדינמית של העיר ובצרכים הגדלים של התושבים.'
        },
        content: {
            ru: `<h2>Рош-ха-Аин - переезд в город возможностей</h2>
            <p>Рош-ха-Аин активно развивается и привлекает новые семьи. Мы помогаем с комфортным переездом в этот перспективный город.</p>`,
            en: `<h2>Rosh HaAyin - Moving to the City of Opportunities</h2>
            <p>Rosh HaAyin is actively developing and attracting new families. We help with comfortable relocation to this promising city.</p>`,
            he: `<h2>ראש העין - מעבר לעיר ההזדמנויות</h2>
            <p>ראש העין מתפתחת באופן פעיל ומושכת משפחות חדשות. אנו מסייעים עם מעבר נוח לעיר מבטיחה זו.</p>`
        },
        image: '/gruzchiki17.jpg',
        readTime: {
            ru: '4 мин чтения',
            en: '4 min read',
            he: '4 דקות קריאה'
        },
        keywords: {
            ru: ['переезд в рош-ха-аин', 'грузоперевозки в рош-ха-аин', 'переезд в развивающийся город', 'новые районы рош-ха-аин', 'перевозки мебели в рош-ха-аин'],
            en: ['moving to rosh haayin', 'rosh haayin moving services', 'moving to developing city', 'new neighborhoods rosh haayin', 'furniture moving in rosh haayin'],
            he: ['מעבר לראש העין', 'הובלות בראש העין', 'מעבר לעיר מתפתחת', 'שכונות חדשות ראש העין', 'הובלת רהיטים בראש העין']
        }
    },

    'furniture-moving': {
        title: {
            ru: 'Перевозка мебели: бережная транспортировка любых предметов',
            en: 'Furniture Moving: Careful Transportation of Any Items',
            he: 'הובלות רהיטים: הובלה זהירה של כל הפריטים'
        },
        description: {
            ru: 'Специализированные услуги по перевозке мебели: диваны, шкафы, кровати, столы. Разборка, упаковка, сборка на новом месте.',
            en: 'Specialized furniture moving services: sofas, cabinets, beds, tables. Disassembly, packing, assembly in the new place.',
            he: 'שירותי הובלת רהיטים מיוחדים: ספות, ארונות, מיטות, שולחנות. פירוק, אריזה, הרכבה במקום החדש.'
        },
        content: {
            ru: `<h2>Перевозка мебели - профессиональный подход</h2>
            <p>Каждый предмет мебели требует особого подхода при перевозке. Мы гарантируем сохранность вашей мебели.</p>`,
            en: `<h2>Furniture Moving - Professional Approach</h2>
            <p>Each piece of furniture requires a special approach when moving. We guarantee the safety of your furniture.</p>`,
            he: `<h2>הובלת רהיטים - גישה מקצועית</h2>
            <p>כל פריט רהיטים דורש גישה מיוחדת בעת המעבר. אנו מבטיחים את בטיחות הרהיטים שלך.</p>`
        },
        image: '/gruzchiki18.jpg',
        readTime: {
            ru: '5 мин чтения',
            en: '5 min read',
            he: '5 דקות קריאה'
        },
        keywords: {
            ru: ['перевозка мебели', 'транспортировка мебели', 'перевозка диванов', 'перевозка шкафов', 'разборка мебели', 'сборка мебели после переезда'],
            en: ['furniture moving', 'furniture transportation', 'sofa moving', 'cabinet moving', 'furniture disassembly', 'furniture assembly after moving'],
            he: ['הובלת רהיטים', 'הובלת רהיטים', 'הובלת ספות', 'הובלת ארונות', 'פירוק רהיטים', 'הרכבת רהיטים לאחר מעבר']
        }
    },

    'saturday-moving': {
        title: {
            ru: 'Перевозки в субботу: услуги для особых случаев',
            en: 'Moving on Saturday: Services for Special Occasions',
            he: 'הובלות בשבת: שירותים לאירועים מיוחדים'
        },
        description: {
            ru: 'Специальные услуги перевозки в субботу для срочных и особых случаев. Предварительное согласование и подготовка.',
            en: 'Special moving services on Saturday for urgent and special occasions. Preliminary coordination and preparation.',
            he: 'שירותי הובלה מיוחדים בשבת לאירועים דחופים ומיוחדים. תיאום והכנה מוקדמים.'
        },
        content: {
            ru: `<h2>Перевозки в субботу - решение особых ситуаций</h2>
            <p>Иногда обстоятельства требуют переезда в субботу. Мы предоставляем такие услуги с учетом всех особенностей.</p>`,
            en: `<h2>Moving on Saturday - Solution for Special Situations</h2>
            <p>Sometimes circumstances require moving on Saturday. We provide such services taking into account all features.</p>`,
            he: `<h2>הובלות בשבת - פתרון למצבים מיוחדים</h2>
            <p>לפעמים נסיבות דורשות מעבר בשבת. אנו מספקים שירותים כאלה תוך התחשבות בכל המאפיינים.</p>`
        },
        image: '/gruzchiki19.jpg',
        readTime: {
            ru: '4 мин чтения',
            en: '4 min read',
            he: '4 דקות קריאה'
        },
        keywords: {
            ru: ['перевозки в субботу', 'субботние переезды', 'срочный переезд в субботу', 'особые случаи переезда', 'перевозки в выходные'],
            en: ['moving on saturday', 'saturday moves', 'urgent moving on saturday', 'special moving occasions', 'weekend moving'],
            he: ['הובלות בשבת', 'מעברים בשבת', 'מעבר דחוף בשבת', 'אירועי מעבר מיוחדים', 'הובלות בסופ"ש']
        }
    }
}


type Props = {
    params: Promise<{ lang: Language; id: string }>
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

    const backUrl = lang === 'he' ? '/' : `/${lang}`

    return (
        <ArticleContent
            article={article}
            lang={lang}
            backUrl={backUrl}
        />
    )
}