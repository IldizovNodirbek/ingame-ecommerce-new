import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      home: "Главная",
      products: "Продукция",
      services: "Услуги",
      about: "О бренде",
      contact: "Связаться",
      search: "Поиск",
      mainText: "Новые игровые видеокарты доступны к заказу!",
      mainTextContinue: "доступны к заказу!",
      fontText: "NVIDIA GeForce RTX 4070 Super, 4070 Ti и 4080",
      mainParagraph: "Будь среди первых и протестируй новые возможности.",
      mainButton: "Подробнее",
      modalText: "Оставьте заявку",
      modalTextContinue: "и наш менеджер свяжется с Вами",
      modalPlaceholder: "Ф.И.О.",
      modalText2: "Как зовут?",
      modalText3: "Номер телефона",
      modalButton: "Отправить",
      modalConnect: "Либо свяжитесь с нами в",
      screen: "Мониторы",
      desk: "Столы",
      chair: "Кресла",
      keyboard: "Клавиатуры",
      cooler: "Комплектующие",
      headphone: "Гарнитура",
      mouse: "Мыши",
      microphone: "Аксессуары",
      category: "КАТАЛОГ",
      categoryText: "Выберите себе в каталоге для максимально комфортной игры",
      OurPK: "Наши ПК",
      money: "сум",
      monthText: "месяц",
      OurPKFirstText: "Оптимальные",
      OurPKFirstText2: "Сбалансированные игровые ПК",
      Processortext: "Процессоры",
      GPUtext: "Видеокарты",
      Coolingtext: "Охлаждение",
      Memorytext: "Память",
      GameText: "Игрa",
      BuyText: "Купить",
      MoreDetails: "Подробнее",
      CompleteSettings: "КОМПЛЕКТАЦИЙ",
      ReadyText: "Готово",
      loading: "Yuklanmoqda...",
      notFound: "Mahsulot topilmadi",
      compare: "Сравнить",
      noDescription: "Qisqa tavsif mavjud emas",
      readMore: "Читать далее...",
      noPrice: "Narx mavjud emas",
      cart: "Корзина",
      delivery: "Доставка",
      needHelp: "Нужна помощь?",
      aboutProduct: "О товаре",
      noFullDescription: "To‘liq tavsif mavjud emas",
      specifications: "Общие характеристики",
      noSpecs: "Технические характеристики недоступны",
      toCart: "В корзину",
      customizePC: {
        title: "Подберем компьютер",
        nav: {
          byPrice: "По цене",
          byGpu: "По видеокарте",
          byCpu: "По процессору",
          byResolution: "По разрешению",
        },
        prices: [
          "от 5 550 000 сум",
          "от 6 500 000 сум",
          "от 7 000 000 сум",
          "от 8 000 000 сум",
          "от 9 500 000 сум",
          "от 10 000 000 сум",
          "от 12 000 000 сум",
        ],
        switches: {
          gaming: "Игровые",
          compact: "Компактные",
          perGame: "По играм",
        },
        submit: "Готово",
      },
      productCardSection: {
        title: "Кастомизация",
        description: "Закастомизируем ваш ПК по вашему любимому дизайну",
        details:
          "Снова же из-за двух отдельных камер. Первая отвечает за басы, а вторая за средние и высокие частоты — за счет этого звук становится чистым, сбалансированным и более качественным.",
        listItems: ["описание услуги", "описание услуги", "описание услуги"],
        moreDetails: "Подробнее",
        modalTitle: "Кастомизация вашего ПК по вашему любимому дизайну",
        closeButton: "Закрыть",
      },
      whyChooseUs: "Почему стоит выбрать нас?",
      clientFeedback: "Об этом лучше всего расскажут сами наши клиенты!",
      professions: {
        gamer: "Геймер",
        designer: "Дизайнер",
        architect: "Архитектор",
      },
      faqTitle: "Часто задаваемые вопросы",
      faqItems: [
        {
          question: "Сколько примерно стоит средний ПК для игр?",
          answer:
            "Средняя цена игрового ПК составляет от $800 до $1500 в зависимости от компонентов.",
        },
        {
          question: "Как выбрать монитор для игр?",
          answer:
            "Рекомендуется выбирать мониторы с частотой обновления не менее 120 Гц.",
        },
        {
          question: "Какие игры популярны в 2025 году?",
          answer: "Популярные игры включают киберспорт, шутеры и ролевые игры.",
        },
        {
          question: "Какой объем оперативной памяти нужен для игр?",
          answer: "Для большинства игр достаточно 16 ГБ оперативной памяти.",
        },
        {
          question: "Какая видеокарта лучше всего подходит для игр?",
          answer: "RTX 4060 и выше — идеальные варианты для геймеров.",
        },
        {
          question: "Можно ли использовать ноутбук для современных игр?",
          answer:
            "Да, современные игровые ноутбуки предлагают мощность, сравнимую с ПК.",
        },
        {
          question: "Как выбрать игровую клавиатуру и мышь?",
          answer:
            "Обратите внимание на эргономику, отклик и дополнительные функции.",
        },
      ],
      blogTitle: "Блог и новости",
      blogItems: [
        {
          title: "Технические советы Линуса: обзор NVIDIA RTX 5090",
          description:
            "Линус тестирует новейшую видеокарту NVIDIA RTX 5090 — все об игровой производительности и технических новостях!",
        },
        {
          title: "JayzTwoCents: распаковка NVIDIA RTX 4080",
          description:
            "Джей представляет NVIDIA RTX 4080 и демонстрирует ее игровые возможности и возможности разгона — развлечение для каждого геймера!",
        },
        {
          title: "Gamers Nexus: обзор NVIDIA RTX 4070 Ti",
          description:
            "Gamers Nexus тщательно протестировала NVIDIA RTX 4070 Ti — с помощью тестов и реальных игровых тестов!",
        },
      ],
      callTitle: "Одним онлайн-звонком мы изменим ваш игровой опыт навсегда",
      callDescription:
        "Назначим звонок, узнаем о ваших запросах, предложим подходящую конфигурацию. После разбора мы возьмем на себя все заботы по поддержке и дальнейшей доставке и сбору ПК.",
      callButton: "Заказать звонок",
      contactsTitle: "Контакты",
      contacts: {
        phone: "Номер: +998 90 123 45 67",
        workingHours: "Время работы: 09:00 - 21:00",
        location: "Локация: г. Ташкент, ул. Амира Темура, 45",
      },
      socialMediaTitle: "Наши соц. сети",
      socialMedia: {
        instagram: "Instagram: @ingame_shop",
        telegram: "Telegram: t.me/ingame_shop",
      },
      storeInfo:
        "<strong>Ingame savdo do‘koni</strong><br/>Online manzil: г. Ташкент, ул. Амира Темура, 45",
      cartDatas: {
        product: "Товар",
        availability: "Наличие",
        quantity: "Количество",
        price: "Цена",
        emptyCart: "Savatcha bo‘sh",
        order: "Заказ",
        deliveryTime: "4-7 дней",
        total: "Итого",
        continue: "Продолжить",
      },
      checkoutDatas: {
        title: "Оформить заказ",
        fullNameLabel: "Ф.И.О.",
        phoneNumberLabel: "Номер телефона",
        deliveryMethodsTitle: "Способы получения заказа",
        delivery: "Доставка",
        pickup: "Самовывоз",
        deliveryOptions: [
          { label: "Стандартная доставка", time: "1 день" },
          { label: "Бесплатная доставка по Ташкенту", time: "1 день" },
          { label: "Доставка в регионы", time: "2 день" },
        ],
        addressLabel: "Адрес доставки",
        deliveryCostTitle: "СТОИМОСТЬ И УСЛОВИЯ ДОСТАВКИ:",
        deliveryCostText:
          "Доставка в течении 1 дня бесплатная.<br/>Доставка осуществляется по городу Ташкент до локации.<br/><br/>Время доставки по Ташкенту осуществляется в течении 1 дня.<br/>Срочные доставки по тарифу «Яндекс доставка» (100% предоплата)",
        commentTitle: "Комментарий к заказу",
        commentPlaceholder: "Ваш комментарий",
        submitButton: "Оформить заказ",
        yourOrder: "Ваш заказ",
        emptyCart: "Саватча бош",
        itemsLabel: "Товаров",
        totalLabel: "Итого",
        errors: {
          fullName: "Ф.И.О. обязательно",
          phoneNumber: "Телефонный номер обязателен",
          deliveryMethod: "Выберите способ доставки",
          deliveryOption: "Выберите тип доставки",
          address: "Адрес обязателен",
        },
      },
      carousel: {
        slides: [
          {
            title: "NVIDIA RTX SUPER",
            text: "Новые игровые видеокарты <span style={{ fontFamily: 'Orbitron' }}>NVIDIA GeForce RTX 4070 Super, 4070 Ti и 4080</span> доступны к заказу! <br /><br />Будь среди первых и протестируй новые возможности",
          },
          {
            title: "RTX 4070 SUPER",
            text: "Новые игровые видеокарты <span style={{ fontFamily: 'Orbitron' }}>NVIDIA GeForce RTX 4070 Super, 4070 Ti и 4080</span> доступны к заказу! <br /><br />Будь среди первых и протестируй новые возможности",
          },
          {
            title: "NVIDIA 4080 SUPER",
            text: "Новые игровые видеокарты <span style={{ fontFamily: 'Orbitron' }}>NVIDIA GeForce RTX 4070 Super, 4070 Ti и 4080</span> доступны к заказу! <br /><br />Будь среди первых и протестируй новые возможности",
          },
        ],
      },
    },
  },
  uz: {
    translation: {
      home: "Bosh sahifa",
      products: "Mahsulotlar",
      services: "Xizmatlar",
      about: "Brend haqida",
      contact: "Aloqa",
      search: "Qidirish",
      mainText: "Yangi o'yin videokartalari buyurtma berish uchun mavjud!",
      mainTextContinue: "buyurtma berish uchun mavjud!",
      fontText: "NVIDIA GeForce RTX 4070 Super, 4070 Ti va 4080",
      mainParagraph:
        "Birinchi bo'lganlar orasiga kir va yangi imkoniyatlarni sinab ko'ring.",
      mainButton: "Batafsil",
      modalText: "So'rov qoldiring",
      modalTextContinue: "va bizning menejerimiz siz bilan bog'lanadi",
      modalText2: "Ismingizni kiriting",
      modalPlaceholder: "F.I.Sh.",
      modalText3: "Telefon raqamingiz",
      modalButton: "Yuborish",
      modalConnect: "Yoki biz bilan bog'laning",
      screen: "Monitorlar",
      desk: "Stollar",
      chair: "O'rindiqlar",
      keyboard: "Klaviaturalar",
      cooler: "Komplektlar",
      headphone: "Naushniklar",
      mouse: "Sichqonchalar",
      microphone: "Aksessuarlar",
      category: "KATEGORIYA",
      categoryText: "Eng qulay o'yin uchun katalogdan tanlang",
      OurPK: "Bizning PK",
      money: "so'm",
      monthText: "oy",
      OurPKFirstText: "Optimal",
      OurPKFirstText2: "Muvozanatli o'yin PK",
      Processortext: "Protsessorlar",
      GPUtext: "Videokartalar",
      Coolingtext: "Sovutish",
      Memorytext: "Xotira",
      GameText: "O'yin",
      BuyText: "Sotib olish",
      MoreDetails: "Batafsil",
      CompleteSettings: "TO'LIQ O'RNATILGAN",
      ReadyText: "Tayyor",
      loading: "Yuklanmoqda...",
      notFound: "Mahsulot topilmadi",
      compare: "Taqqoslash",
      noDescription: "Qisqa tavsif mavjud emas",
      readMore: "Batafsil o‘qish...",
      noPrice: "Narx mavjud emas",
      cart: "Savat",
      delivery: "Yetkazib berish",
      needHelp: "Yordam kerakmi?",
      aboutProduct: "Mahsulot haqida",
      noFullDescription: "To‘liq tavsif mavjud emas",
      specifications: "Umumiy xususiyatlar",
      noSpecs: "Texnik xususiyatlar mavjud emas",
      toCart: "Savatchaga",
      customizePC: {
        title: "Kompyuter tanlaymiz",
        nav: {
          byPrice: "Narx bo‘yicha",
          byGpu: "Videokarta bo‘yicha",
          byCpu: "Protsessor bo‘yicha",
          byResolution: "Ruxsat bo‘yicha",
        },
        prices: [
          "5 550 000 so‘mdan",
          "6 500 000 so‘mdan",
          "7 000 000 so‘mdan",
          "8 000 000 so‘mdan",
          "9 500 000 so‘mdan",
          "10 000 000 so‘mdan",
          "12 000 000 so‘mdan",
        ],
        switches: {
          gaming: "O‘yin uchun",
          compact: "Ixcham",
          perGame: "O‘yinlar bo‘yicha",
        },
        submit: "Tayyor",
      },
      productCardSection: {
        title: "Moslashtirish",
        description: "PK-ni sizning sevimli dizayningizga moslashtiramiz",
        details:
          "Yana ikkita alohida kamera tufayli. Birinchisi baslarga, ikkinchisi esa o‘rta va yuqori chastotalarga javob beradi — shu tufayli ovoz toza, muvozanatli va sifatli bo‘ladi.",
        listItems: ["xizmat tavsifi", "xizmat tavsifi", "xizmat tavsifi"],
        moreDetails: "Batafsil",
        modalTitle: "PK-ni sizning sevimli dizayningizga moslashtirish",
        closeButton: "Yopish",
      },
      whyChooseUs: "Nega bizni tanlash kerak?",
      clientFeedback:
        "Bu haqda eng yaxshi mijozlarimiz o‘zlari aytib berishadi!",
      professions: {
        gamer: "Geymer",
        designer: "Dizayner",
        architect: "Arxitektor",
      },
      faqTitle: "Ko‘p beriladigan savollar",
      faqItems: [
        {
          question: "O‘yin uchun o‘rtacha PK qancha turadi?",
          answer:
            "O‘yin PKning o‘rtacha narxi komponentlarga qarab $800 dan $1500 gacha.",
        },
        {
          question: "O‘yinlar uchun monitorni qanday tanlash kerak?",
          answer:
            "Kamida 120 Gts yangilanish tezligiga ega monitorlarni tanlash tavsiya etiladi.",
        },
        {
          question: "2025 yilda qaysi o‘yinlar mashhur?",
          answer:
            "Mashhur o‘yinlarga kiber sport, otishma va rolli o‘yinlar kiradi.",
        },
        {
          question: "O‘yinlar uchun qancha operativ xotira kerak?",
          answer: "Ko‘p o‘yinlar uchun 16 GB operativ xotira yetarli.",
        },
        {
          question: "O‘yinlar uchun qaysi videokarta eng yaxshi?",
          answer: "RTX 4060 va undan yuqori — geymerlar uchun ideal tanlov.",
        },
        {
          question: "Zamonaviy o‘yinlar uchun noutbukdan foydalansa bo‘ladimi?",
          answer:
            "Ha, zamonaviy o‘yin noutbuklari PKga teng quvvatni taqdim etadi.",
        },
        {
          question:
            "O‘yin klaviaturasi va sichqonchasini qanday tanlash kerak?",
          answer:
            "Ergonomika, javob tezligi va qo‘shimcha funksiyalarga e’tibor bering.",
        },
      ],
      blogTitle: "Blog va yangiliklar",
      blogItems: [
        {
          title: "Linus Tech Tips: NVIDIA RTX 5090 sharhi",
          description:
            "Linus NVIDIA’ning eng yangi RTX 5090 grafik kartasini sinab ko‘rdi — o‘yin samaradorligi va texnologik yangiliklar haqida to‘liq ma'lumot!",
        },
        {
          title: "JayzTwoCents: NVIDIA RTX 4080 qadoqdan chiqarish",
          description:
            "Jay NVIDIA RTX 4080’ni ochib, uning o‘yin va overclocking imkoniyatlarini ko‘rsatadi — har bir geymer uchun qiziqarli!",
        },
        {
          title: "Gamers Nexus: NVIDIA RTX 4070 Ti tahlili",
          description:
            "Gamers Nexus NVIDIA RTX 4070 Ti’ni chuqur sinovdan o‘tkazdi — benchmarklar va real o‘yin testlari bilan!",
        },
      ],
      callTitle:
        "Bitta onlayn qo‘ng‘iroq bilan o‘yin tajribangizni butunlay o‘zgartiramiz",
      callDescription:
        "Qo‘ng‘iroqni belgilaymiz, talablaringizni bilib olamiz va mos konfiguratsiyani taklif qilamiz. Tahlildan so‘ng biz qo‘llab-quvvatlash, yetkazib berish va PK yig‘ish bilan bog‘liq barcha tashvishlarni o‘z zimmamizga olamiz.",
      callButton: "Qo‘ng‘iroqqa buyurtma berish",
      contactsTitle: "Aloqa",
      contacts: {
        phone: "Raqam: +998 90 123 45 67",
        workingHours: "Ish vaqti: 09:00 - 21:00",
        location: "Manzil: Toshkent sh., Amir Temur ko‘chasi, 45",
      },
      socialMediaTitle: "Bizning ijtimoiy tarmoqlar",
      socialMedia: {
        instagram: "Instagram: @ingame_shop",
        telegram: "Telegram: t.me/ingame_shop",
      },
      storeInfo:
        "<strong>Ingame savdo do‘koni</strong><br/>Onlayn manzil: Toshkent sh., Amir Temur ko‘chasi, 45",
      cartDatas: {
        product: "Mahsulot",
        availability: "Mavjudlik",
        quantity: "Soni",
        price: "Narx",
        emptyCart: "Savatcha bo‘sh",
        order: "Buyurtma",
        deliveryTime: "4-7 kun",
        total: "Jami",
        continue: "Davom etish",
      },
      checkoutDatas: {
        title: "Buyurtmani rasmiylashtirish",
        fullNameLabel: "F.I.Sh.",
        phoneNumberLabel: "Telefon raqami",
        deliveryMethodsTitle: "Buyurtmani olish usullari",
        delivery: "Yetkazib berish",
        pickup: "O‘z-o‘zidan olib ketish",
        deliveryOptions: [
          { label: "Standart yetkazib berish", time: "1 kun" },
          { label: "Toshkent bo‘ylab bepul yetkazib berish", time: "1 kun" },
          { label: "Viloyatlarga yetkazib berish", time: "2 kun" },
        ],
        addressLabel: "Yetkazib berish manzili",
        deliveryCostTitle: "YETKAZIB BERISH NARXI VA SHARTLARI:",
        deliveryCostText:
          "1 kun ichida yetkazib berish bepul.<br/>Yetkazib berish Toshkent shahri bo‘ylab manzilgacha amalga oshiriladi.<br/><br/>Toshkent bo‘ylab yetkazib berish muddati 1 kun ichida.<br/>Shoshilinch yetkazib berish «Yandex yetkazib berish» tarifi bo‘yicha (100% oldindan to‘lov)",
        commentTitle: "Buyurtma uchun izoh",
        commentPlaceholder: "Sizning izohingiz",
        submitButton: "Buyurtmani rasmiylashtirish",
        yourOrder: "Sizning buyurtmangiz",
        emptyCart: "Savatcha bo‘sh",
        itemsLabel: "Mahsulotlar",
        totalLabel: "Jami",
        errors: {
          fullName: "F.I.Sh. majburiy",
          phoneNumber: "Telefon raqami majburiy",
          deliveryMethod: "Yetkazib berish usulini tanlang",
          deliveryOption: "Yetkazib berish turini tanlang",
          address: "Manzil majburiy",
        },
      },
      carousel: {
        slides: [
          {
            title: "NVIDIA RTX SUPER",
            text: "Yangi o‘yin videokartalari <span style={{ fontFamily: 'Orbitron' }}>NVIDIA GeForce RTX 4070 Super, 4070 Ti va 4080</span> buyurtma berish uchun mavjud! <br /><br />Birinchi bo‘lganlar orasiga kir va yangi imkoniyatlarni sinab ko‘r",
          },
          {
            title: "NVIDIA 4070 SUPER",
            text: "Yangi o‘yin videokartalari <span style={{ fontFamily: 'Orbitron' }}>NVIDIA GeForce RTX 4070 Super, 4070 Ti va 4080</span> buyurtma berish uchun mavjud! <br /><br />Birinchi bo‘lganlar orasiga kir va yangi imkoniyatlarni sinab ko‘r",
          },
          {
            title: "NVIDIA 4080 SUPER",
            text: "Yangi o‘yin videokartalari <span style={{ fontFamily: 'Orbitron' }}>NVIDIA GeForce RTX 4070 Super, 4070 Ti va 4080</span> buyurtma berish uchun mavjud! <br /><br />Birinchi bo‘lganlar orasiga kir va yangi imkoniyatlarni sinab ko‘r",
          },
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // Boshlang'ich til
  interpolation: { escapeValue: false },
});

export default i18n;
