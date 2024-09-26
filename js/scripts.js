window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -0%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
}
// const translations = {
//     en: {
//         home: "Home",
//         trips: "Trips",
//         hotels: "Hotels",
//         cityTours: "City Tours",
//         travels: "Travels",
//         about: "About",
//         contact: "Contact",
//         bookNow: "Book Now",
//         mastheadTitle: "Your Best Choice",
//         contactUs: "Contact Us",
//         contactSubheading: "We are at your service. Do not hesitate to contact us",
//         // Add more translations as needed
//     },
//     ar: {
//         home: `الصفحة الرئيسية  `,
//         trips: "الرحلات",
//         hotels: "الفنادق",
//         cityTours: "جولات المدينة",
//         travels: "السفر",
//         about: "حول",
//         contact: "تواصل",
//         bookNow: "احجز الآن",
//         mastheadTitle: "خيارك الأفضل",
//         contactUs: "اتصل بنا",
//         contactSubheading: "نحن في خدمتك. لا تتردد في الاتصال بنا",
//         boat: "رحلات القارب",
//         safari: "رحلات السفاري",
//         diving: "رحلات الغطس",
//         // Add more translations as needed
//     },
//     ru: {
//         home: "Главная",
//         trips: "Поездки",
//         hotels: "Отели",
//         cityTours: "Городские туры",
//         travels: "Путешествия",
//         about: "О нас",
//         contact: "Контакт",
//         bookNow: "Забронировать",
//         mastheadTitle: "Ваш лучший выбор",
//         contactUs: "Свяжитесь с нами",
//         contactSubheading: "Мы к вашим услугам. Не стесняйтесь обращаться к нам",
//         // Add more translations as needed
//     }
// };

// function changeLanguage(lang) {
//     document.querySelector('.nav-link[href="index.html"]').textContent = translations[lang].home;
//     document.querySelector('.nav-link[href="Hotels.html"]').textContent = translations[lang].hotels;
//     document.querySelector('.nav-link[href="citytours.html"]').textContent = translations[lang].cityTours;
//     document.querySelector('.nav-link[href="travels.html"]').textContent = translations[lang].travels;
//     document.querySelector('.nav-link[href="About.html"]').textContent = translations[lang].about;
//     document.querySelector('.nav-link[href="#contact"]').textContent = translations[lang].contact;
//     document.querySelector('.nav-link[href="trips/boattrips.html"]').textContent = translations[lang].boat;
//     document.querySelector('.nav-link[href="trips/safari.html"]').textContent = translations[lang].safari;
//     document.querySelector('.nav-link[href="trips/diving.html"]').textContent = translations[lang].diving;
//     document.querySelector('#trips').innerText = translations[lang].trips;

//     // Add more elements to update as needed
// }

document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function () {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}


function showPopup() {
    const popup = document.getElementById('help-popup')
    const popupbg = document.getElementById('pop-up-bg')
    popupbg.style.display = "block"
    popup.style.display = 'block'
}

function closePopup() {
    const popup = document.getElementById('help-popup')
    popup.style.display = 'none'
    const popupbg = document.getElementById('pop-up-bg')
    popupbg.style.display = "none"
}

setInterval(showPopup, 120000);

document.getElementById('close-popup').addEventListener('click', closePopup);


const translations = {
    en: {
        "help-text": "If you have not found what you are looking for, please do not hesitate to write to us and we will help you as soon as possible!",
        "send-whatsapp-btn": "Send WhatsApp",
        "call-or-whatsapp": "Call Or WhatsApp: +201552378066",
        "home": "Home",
        "trips": "Trips",
        "boat-trips": "Boat Trips",
        "safari": "Safari",
        "diving": "Diving",
        "hotels": "Hotels",
        "city-tours": "City Tours",
        "hurghada": "Hurghada",
        "el-gouna": "El Gouna",
        "travels": "Travels",
        "about": "About",
        "language": "Language",
        "english": "English",
        "russian": "Русский",
        "carousel-title": "ALBATROS RED SEA",
        "carousel-subtitle": "The Best In The Red Sea",
        "welcome": "Welcome to Albatros Travel",
        "intro-text": "Now book your Egypt excursions online. We offer a wide range of tours & activities in Egypt and tickets for the most popular attractions. We are in Egypt and specifically for Egypt holidays, Egypt excursions & day trips and tours throughout Egypt.",
        "free-cancellation": "Free cancellation",
        "no-coffee-trip": "No coffee trip",
        "high-quality-services": "High quality of service",
        "best-price-guarantee": "Best price guarantee",
        "insurance-included": "Insurance included",
    },
    ru: {
        "help-text": "Если вы не нашли то, что искали, не стесняйтесь писать нам, и мы поможем вам как можно скорее!",
        "send-whatsapp-btn": "Отправить WhatsApp",
        "call-or-whatsapp": "Звоните или WhatsApp: +201552378066",
        "home": "Главная",
        "trips": "Поездки",
        "boat-trips": "Лодочные поездки",
        "safari": "Сафари",
        "diving": "Дайвинг",
        "hotels": "Отели",
        "city-tours": "Городские туры",
        "hurghada": "Хургада",
        "el-gouna": "Эль Гуна",
        "travels": "Путешествия",
        "about": "О нас",
        "language": "Язык",
        "english": "Английский",
        "russian": "Русский",
        "carousel-title": "АЛЬБАТРОС КРАСНОЕ МОРЕ",
        "carousel-subtitle": "Лучшее в Красном Море",
        "welcome": "Добро пожаловать в Albatros Travel",
        "intro-text": "Забронируйте экскурсии по Египту онлайн. Мы предлагаем широкий выбор туров и развлечений в Египте и билеты на самые популярные достопримечательности. Мы в Египте и специально для египетских праздников, экскурсий и однодневных поездок и туров по всему Египту.",
        "free-cancellation": "Бесплатная отмена",
        "no-coffee-trip": "Без поездок за кофе",
        "high-quality-services": "Высокое качество обслуживания",
        "best-price-guarantee": "Гарантия лучшей цены",
        "insurance-included": "Включена страховка",
        "Boat Trips": "Лодочные прогулки",
        "Safari": "Сафари",
        "Diving": "Дайвинг",
        "Cairo": "Каир",
        "Luxor": "Луксор",
        "Sea Activity": "Морские развлечения",
        "excursions": "Экскурсии из Хургады, Эль-Гуны, Макади",
        "luxorPrivate": "Частная экскурсия в Луксор",
        "luxorTwoDays": "Луксор на два дня, частная",
        "cairoPrivate": "Частная экскурсия в Каир",
        "cairoDayTrip": "Однодневная экскурсия в Каир на самолете",
        "cairoTwoDays": "Каир на два дня, частная",
        "cairoExclusive": "Однодневная экскурсия в Каир по индивидуальному запросу (эксклюзив)",
        "cairoPyramids": "Каир: Пирамиды Гизы, Саккара и Дахшур, эксклюзивно",
        "denderaHalfDay": "Полудневная экскурсия в Дендера",
        "denderaAbydos": "Частная экскурсия на день в Дендера и Абидос",
        "hurghadaCityTour": "Обзорная экскурсия по Хургаде",
        "elGounaCityTour": "Обзорная экскурсия по Эль-Гуне",
        "aswanAbuSimbel": "Асуан и Абу Симбел на два дня, частные",
        "monasteries": "Монастыри Святого Антония и Святого Павла",
        "quadTour3Hours": "3 часа на квадроцикле + поездка на верблюде",
        "quadTour5Hours": "5 часов на квадроцикле + поездка на верблюде + ужин",
        "egyptDayTours": "Однодневные туры по Египту и экскурсии из Хургады",
        "varietyAndFun": "От экскурсий по монастырям до обзорной экскурсии по Хургаде; мы предлагаем множество разнообразия и удовольствия для всей семьи.",
        "luxorTriptitle": "Поездка в Луксор",
        "luxorTripdescription": "Поездка в Луксор",
        "luxorTripprice": "60.00 EUR",
        "cairoTriptitle": "Поездка в Каир",
        "cairoTripdescription": "Поездка в Каир",
        "cairoTripprice": "70.00 EUR",
        "hurghadaTriptitle": "Поездка в Хургаду",
        "hurghadaTripdescription": "Поездка в Хургаду",
        "hurghadaTripprice": "20.00 EUR",
        "moreDetails": "Подробнее",
        "paradise_island": "ПАРАДИЗНЫЙ ОСТРОВ",
        "best_price": "Лучшая цена за человека",
        "your_favourite_trip": "Ваша любимая поездка!",
        "duration": "• продолжительность",
        "snorkelling": "• снорклинг + снаряжение",
        "drinks_and_lunch": "• безалкогольные и горячие напитки, а также обед в буфете на лодке",
        "pickup": "• встреча и доставка в ваш отель",
        "book_now": "Забронировать сейчас",
        "more_details": "Больше деталей",
        "desert_safari": "Пустынный сафари",
        "quad_3h": "квадроцикл 3 часа",
        "exciting_experience": "• получите захватывающий опыт на ATV",
        "bedouin_village": "• посетите бедуинскую деревню в пустыне",
        "camels_ride": "• верховая езда на верблюдах",
        "desert_safari_sunset": "Пустынный сафари на закате",
        "dinner_party": "• Ужин + Вечеринка",
        "desert_mega_safari": "Пустынный Мега Сафари",
        "hurghadaTitle": "Городской тур по Хургаде",
        "bestPrice": "Лучшая цена за человека",
        "hurghadaPrice": "15 EUR",
        "hurghadaTitleCard": "Городской тур по Хургаде",
        "hurghadaDescription": "Хургада: утренние или вечерние экскурсии с гидом. Английский/Немецкий гид.",
        "duration": "• 3 часа",
        "groupSize": "• Небольшая группа",
        "returnTrip": "• Туда и обратно",
        "mosqueVisit": "• Посещение крупнейшей мечети",
        "churchVisit": "• Крупнейшая церковь",
        "oldCity": "• Старый город",
        "shishaExtra": "• Кальян + 5 EUR дополнительно (тип кальяна или водяной трубки)",
        "bookNow": "Забронировать",
        "horseRiding": "Верховая езда",
        "horseRidingTitle": "Верховая езда + плавание",
        "horsePrice1Hour": "1 час = 30 EUR",
        "horsePrice2Hour": "2 часа = 50 EUR",
        "horsePrice3Hour": "3 часа = 70 EUR",
        "horseRidingTitleCard": "Верховая езда + плавание",
        "horseDescription": "Ваше любимое катание",
        "horseDuration": "• 1 или 2 или 3 часа",
        "horseEveryDay": "• Каждый день",
        "hotelPickup": "• Предлагается трансфер из отеля",
        "nativeSpeaker": "• Носитель языка",
        "moreDetails": "Подробнее",
        "camel_riding": "Верховая езда на верблюде",
        "best_price": "Лучшая цена за человека",
        "price_1hour": "1 час = 30 EUR",
        "price_2hour": "2 часа = 50 EUR",
        "price_3hour": "3 часа = 70 EUR",
        "card_title": "Верховая езда на верблюде",
        "favourite_ride": "Ваше любимое катание",
        "duration": "• 1, 2 или 3 часа",
        "every_day": "• Каждый день",
        "hotel_pickup": "• Трансфер от отеля",
        "native_speaker": "• Носитель языка",
        "book_now": "Забронировать сейчас",
        "more_details": "Подробнее",
        "time": "Время",
        "program": "Программа",
        "time_1430": "⏰ 14:30",
        "time_1500": "⏰ 15:00",
        "time_1900": "⏰ 19:00",
        "pick_up": "Забрать из отеля",
        "arrival_safari": "Прибытие на станцию сафари",
        "back_hotel": "Возвращение в отель",
        "description_5hours": "Описание тура Сафари на 5 часов на квадроцикле и верховая езда на верблюде",
        "quad_pickup": "Мы заберем вас из вашего отеля около 14:30 и отвезем на станцию обучения вождению квадроциклов...",
        "quad_instructions": "Все квадроциклы оснащены автоматической системой управления, поэтому вам нужно только нажимать на газ и тормоз...",
        "quad_drive": "Мы едем около 1 часа (примерно 25 км) на квадроцикле, пока не прибудем в бедуинскую деревню...",
        "bedouin_village": "Дружелюбные бедуины встретят и поприветствуют вас в деревне бедуинов...",
        "camel_ride": "Здесь вы сможете покататься на верблюдах и осмотреть окрестности...",
        "back_to_hotel": "После этого мы отвезем вас обратно в ваш отель.",
        "dinner_bqq": "Ужин + Вечеринка BBQ + Танцевальное шоу + Огненное шоу",
        "time_1130": "⏰ 11:30",
        "time_1200": "⏰ 12:00",
        "description_mega_safari": "Описание Мега Сафари",
        "mega_safari_details": "• 1 час езды на квадроцикле <br> • 20 минут багги на джипе <br>• Чай, катание на верблюде...",
        "paradise_snorkeling": "Экскурсия на день снорклинга на острове Парадиз",
        "snorkeling_description_1": "Наслаждайтесь незабываемым плаванием на частном пляже острова Парадиз и расслабляющей поездкой на лодке по Красному морю...",
        "snorkeling_description_2": "Остров Парадиз - это природный заповедник в Красном море недалеко от Хургады, предлагающий своим посетителям белоснежные пляжи...",
        "snorkeling_description_3": "Плавайте и ныряйте с маской среди множества экзотических рыб и откройте для себя уникальный подводный мир...",
        "paradise_program": "Программа экскурсии на день снорклинга на острове Парадиз",
        "boat_trip": "Поездка на лодке с остановкой для снорклинга",
        "island_stay": "Пребывание на острове",
        "folklore_show": "Фольклорное шоу",
        "paradise_description": "Описание экскурсии на день снорклинга на острове Парадиз",
        "paradise_snorkeling_program_1": "Мы заберем вас из отеля на полностью кондиционированном автомобиле и доставим в порт, где начнется ваше снорклинг-приключение...",
        "paradise_snorkeling_program_2": "Любуйтесь яркими кораллами и плавайте среди множества экзотических рыб...",
        "paradise_snorkeling_program_3": "После остановки для снорклинга мы продолжим путь к острову Парадиз...",
        "safari_title": "Сафари на квадроцикле и катание на верблюде",
        "safari_desc1": "Этот 3-часовой тур — пыльное приключение с гарантированным удовольствием!",
        "safari_desc2": "3-часовое сафари на квадроцикле — отличная возможность увидеть пустыню во всей её красоте и величии. Это тур для тех, кто хочет пересечь пустыню на четырехколесном квадроцикле.",
        "safari_desc3": "Во время сафари вы сможете исследовать жизнь и традиции бедуинской деревни, а также покататься на верблюде и узнать интересные факты о их жизни в пустыне.",
        "safari_desc4": "Воспоминания и впечатления от экскурсии останутся с вами надолго!",
        "safari_program_title": "Программа 3-часового сафари на квадроцикле и катания на верблюде",
        "time": "Время",
        "program": "Программа",
        "safari_time1": "⏰ 7:30",
        "safari_prog1": "Забор из отеля",
        "safari_time2": "⏰ 8:00",
        "safari_prog2": "Прибытие на станцию сафари",
        "safari_time3": "⏰ 11:00",
        "safari_prog3": "Отправление в отель",
        "safari_time4": "⏰ 11:30",
        "safari_prog4": "Возвращение в отель",
        "safari_desc_title": "Описание 3-часового сафари на квадроцикле и катания на верблюде",
        "safari_desc5": "Мы заберем вас из вашего отеля около 07:30 и доставим на станцию тренировки...",
        "safari_desc6": "Все квадроциклы оснащены автоматической системой управления...",
        "safari_desc7": "Мы будем ехать около 1 часа (примерно 25 км) до прибытия в бедуинскую деревню.",
        "safari_desc8": "Дружелюбные бедуины встретят вас...",
        "safari_desc9": "В этом же месте у вас будет возможность покататься на верблюде...",
        "safari_desc10": "После этого мы отвезем вас обратно в отель.",
        "city_tour_title": "Частный городской тур по Хургаде",
        "city_tour_desc1": "Хотите узнать настоящую, оригинальную Хургаду?",
        "city_tour_desc2": "Мы подобрали для вас правильное сочетание...",
        "city_tour_program_title": "Программа частного городского тура по Хургаде",
        "city_tour_stop1": "Мечеть Эль-Мина Масджид",
        "city_tour_stop2": "Коптский собор Святого Шенуды",
        "city_tour_stop3": "Рыбный рынок",
        "city_tour_stop4": "Овощной рынок",
        "city_tour_stop5": "Бульвар Хургада Марина",
        "city_tour_desc_title": "Описание частного городского тура по Хургаде",
        "city_tour_desc3": "В 14:00 мы заберем вас из вашего отеля...",
        "city_tour_desc4": "Первая остановка приведет вас прямо к самой высокой точке...",
        "city_tour_desc5": "Затем мы отправимся на городской пирс...",
        "city_tour_desc6": "Мы продолжим наш тур на рыбный рынок...",
        "city_tour_desc7": "Если у вас есть особый запрос...",
        "city_tour_desc8": "Около 19:00 мы отвезем вас обратно в ваш отель...",
        "included_services_title": "Включенные услуги",
        "included_service1": "Забор из вашего отеля",
        "included_service2": "Гид, говорящий на английском",
        "included_service3": "Круглосуточная поддержка клиентов",
        "included_service4": "Включена страховка",
        "prices_title": "Цены",
        "people": "Количество человек",
        "vehicle": "Транспорт",
        "price_per_adult": "Цена на человека",
        "price1_people": "1-2 человека",
        "price1_vehicle": "Частный автомобиль",
        "price1_amount": "15 € на человека",
        "price2_people": "4-5 человек",
        "price2_vehicle": "Частный микроавтобус",
        "price2_amount": "10 € на человека",
        "duration": "Длительность",
        "trip_type": "Тип поездки",
        "availability": "Доступность",
        "pickup_time": "Время забора",
        "duration_value": "около 6 часов",
        "trip_type_value": "Индивидуальная",
        "availability_value": "Ежедневно",
        "pickup_time_value": "около 14:00",
        "ride_on_horseback": "Путешествие верхом на лошади через пустыню и пляж",
        "horseback_description": "Путешествие верхом на лошади через пустыню и пляж, чтобы исследовать великие природные чудеса Хургады в этом приключении верхом.",
        "itinerary": "Маршрут",
        "itinerary_description": "Мы заберем вас из вашего отеля. Начните свой день с верховой прогулки под руководством профессионального инструктора. Прокатитесь 1 час через пустыню, а затем еще час вдоль пляжа. Наслаждайтесь потрясающими видами во время верховой прогулки по пляжу и создайте незабываемые воспоминания в незабываемой обстановке.",
        "what_to_expect": "Что ожидать",
        "beginner_info": "Не переживайте, если вы новичок, так как шлемы предоставляются, и тренер поможет вам и окажет помощь при необходимости.",
        "egyptian_horse": "Наслаждайтесь редкой возможностью покататься на египетской лошади в море и пустыне",
        "explore_desert": "Исследуйте пустыню верхом",
        "play_in_sea": "Играйте в море со своей лошадью",
        "transfer_information": "Информация о трансфере",
        "transfer_details": "Трансфер из любого отеля в Хургаде бесплатный. Трансфер из (Сахл Хашиш, Макади Бэй, Эль Гуна) стоит дополнительно €5 с человека, а из (Сома Бэй, Сафага) – дополнительно €10 с человека.",
        "suitability_warning": "Не подходит для беременных женщин и людей с проблемами спины",
        "ride_on_camelback": "Путешествие верхом на верблюде через пустыню и пляж",
        "camelback_description": "Путешествие верхом на верблюде через пустыню и пляж, чтобы исследовать великие природные чудеса Хургады в этом приключении верхом на верблюде.",
        "special_features": "Наши Особые Черты",
        "special_features_description": "Отпуск, вероятно, самое ценное время года для каждого. Вот почему мы придаем большое значение тому, чтобы предоставить вам интересное и расслабляющее время.",
        "who_we_are": "Кто мы",
        "individual_excursions": "Индивидуальные Экскурсии по Египту",
        "individual_excursions_description": "Мы не только посещаем самые интересные достопримечательности, но и показываем вам то, что находится вне проторенных путей.",
        "fair_prices": "Честные Цены / Без Дополнительных Расходов",
        "fair_prices_description": "Мы предлагаем высокое качество и персональный сервис по доступным ценам.",
        "time_for_you": "Время для Вас",
        "time_for_you_description": "Благодаря малому размеру наших групп, у вас будет достаточно времени, чтобы увидеть все в своем темпе.",
        "adapt_to_you": "Мы Приспосабливаемся к Вам",
        "adapt_to_you_description": "Большинство наших экскурсий можно настроить в соответствии с вашим графиком и потребностями.",
        "contact_us": "Свяжитесь с нами",
        "contact_description": "Мы в вашем распоряжении. Не стесняйтесь обращаться к нам",
        "your_name": "Ваше Имя",
        "name_required": "Имя обязательно.",
        "your_email": "Ваш Email",
        "email_required": "Требуется электронная почта.",
        "email_invalid": "Электронная почта недействительна.",
        "your_phone": "Ваш Телефон",
        "phone_required": "Номер телефона обязателен.",
        "your_message": "Ваше Сообщение",
        "message_required": "Сообщение обязательно.",
        "form_successful": "Отправка формы успешна!",
        "form_error": "Ошибка при отправке сообщения!",
        "send_message": "Отправить Сообщение",
        "copyright": "Авторские права &copy; ALBATROS TRAVEL 2024",
        "travelLuxor": "Луксор",
        "travelPriceForPerson": "Лучшая цена за человека",
        "travelPrice60EUR": "60.00 EUR",
        "travelTitleLuxor": "Путешествие в Луксор",
        "travelFavoriteTrip": "Ваше любимое путешествие!",
        "travelDuration1Day": "• продолжительность 1 день",
        "travelBus": "• транспортировка в кондиционированном автобусе",
        "travelWithEntry": "• с входом",
        "travelWaterOnBoard": "• вода на борту",
        "travelBookNow": "Забронировать сейчас",
        "travelMoreDetails": "Подробнее",
        "travelCairo": "Каир",
        "travelPrice70EUR": "70.00 EUR",
        "travelTitleCairo": "Путешествие в Каир",
        "travelVehicle": "• транспортировка в кондиционированном транспорте",
        "travelWithEntryPickup": "• с входом, пикапом и доставкой в Каире/Гизе",
        "travelProgramLuxorTour": "Программа частной экскурсии в Луксор",
        "travelKarnakTemple": "Храм Карнак",
        "travelColossiMemnon": "Колоссы Мемнона",
        "travelHatshepsutTemple": "Погребальный храм Хатшепсут",
        "travelValleyKings": "Долина царей",
        "travelLunch": "Обед (Египетские блюда)",
        "travelNileExcursion": "Экскурсия по Нилу длится 1 час (БЕСПЛАТНО только у нас)",
        "travelDescriptionLuxorTour": "Описание частной экскурсии в Луксор",
        "travelPickedMorning": "Вас заберут рано утром. Затем вы поедете на современном, комфортном, кондиционированном транспорте через Сафагу по новопостроенной пустынной дороге приблизительно 225 км до долины Нила в Кене.",
        "travelShortBreak": "По дороге сделайте короткую остановку, чтобы посетить туалет или размять ноги.",
        "travelDriveToLuxor": "Затем поезжайте по плотно населенной загородной дороге до Луксора (около 60 км).",
        "travelArrivalLuxor": "По прибытии в Луксор, наслаждайтесь вашей экскурсией. Прежде всего, вы посетите крупнейший храмовый комплекс в мире с огромным залом колонн. Автобус отвезет вас в западную часть Луксора, где вы пообедаете в типичном египетском кафе.",
        "travelValleyKingsTour": "После обеденного перерыва исследуйте всемирно известную Долину царей с внутренней экскурсией по царским гробницам. Новое! Теперь разрешено фотографировать гробницы с мобильным телефоном без вспышки бесплатно. Затем отправляйтесь на террасу храма Хатшепсут, популярное место для фотографов, где можно сделать отличные снимки. Ваш визит заканчивается у впечатляющих Колоссов Мемнона.",
        "travelReturnToHurghada": "Затем отправляйтесь обратно в Хургаду. Пора вспомнить о впечатлениях дня и, возможно, понаблюдать за жизнью на Ниле. Вас вернут в ваш отель около 20:00. Экскурсия в Луксор и Долину царей запомнится вам надолго.",
        "travelPrices": "Цены",
        "travelNumberOfPeople": "Количество людей",
        "travelVehicle": "Транспорт",
        "travelPricePerAdult": "Цена за взрослого",
        "travelTwoPersons": "2 человека",
        "travelPrivateCar": "Частный автомобиль",
        "travel125": "125 € за человека",
        "travelFourPersons": "4 человека",
        "travelPrivateMiniBus": "Частный минивэн",
        "travel100": "100 € за человека",
        "travelSixToEightPersons": "6 - 8 человек",
        "travel80": "80 € за человека",
        "travelPrivateLuxorTour": "Программа Частного тура в Луксор",
        "travelKarnakTemple": "Храм Карнак",
        "travelColossiMemnon": "Колоссы Мемнона",
        "travelTempleHatshepsut": "Погребальный храм Хатшепсут",
        "travelValleyOfKings": "Долина царей",
        "travelLunch": "Обед (Египетские блюда)",
        "travelNileExcursion": "Экскурсия по Нилу длится 1 час (БЕСПЛАТНО только у нас)",
        "travelDescriptionLuxorTour": "Описание для Частного тура в Луксор",
        "travelPickUp": "Вас заберут рано утром...",
        "travelShortBreak": "По пути сделаем короткий перерыв...",
        "travelDriveLuxor": "Затем поедем по густонаселенной...",
        "travelArrivalLuxor": "По прибытии в Луксор...",
        "travelLunchBreak": "После обеденного перерыва...",
        "travelReturnHurghada": "После экскурсии мы возвращаемся в Хургаду...",
        "travelCairoTour": "Программа Частного тура в Каир",
        "travelEgyptianMuseum": "Египетский музей...",
        "travelPyramids": "Пирамиды Гизы",
        "travelSphinx": "Великий Сфинкс Гизы",
        "travelValleyTempleKhafre": "Долинный храм Хафра",
        "travelOldTown": "Старый город Каира (только у нас)",
        "travelBazaar": "Базар Хан эль-Халили (только у нас)",
        "travelSightseeing": "Обзорная экскурсия",
        "travelLunchCairo": "Обед",
        "travelDescriptionCairoTour": "Описание для Частного тура в Каир",
        "travelPickUpCairo": "Мы заберем вас из отеля в 3:00...",
        "travelShortBreakCairo": "Около 5:30 сделаем короткую остановку...",
        "travelArrivalCairo": "Мы прибудем в Каир около 8 утра...",
        "travelEgyptianMuseumTour": "Затем мы посетим Египетский музей...",
        "travelLunchLocalDishes": "Затем вы попробуете местные египетские блюда...",
        "travelVisitGiza": "После этого отправимся к пирамидам...",
        "travelReturnHurghadaCairo": "Мы вернемся в Хургаду около 20:00...",

        "travel-luxor-title": "Луксор",
        "travel-luxor-best-price": "Лучшая цена за человека",
        "travel-luxor-price": "60.00 EUR",
        "travel-luxor-card-title": "Путешествие в Луксор",
        "travel-luxor-favorite-trip": "Ваше любимое путешествие!",
        "travel-luxor-duration": "• продолжительность 1 день",
        "travel-luxor-transportation": "• транспортировка в кондиционированном автобусе",
        "travel-luxor-entry": "• с входом",
        "travel-luxor-water": "• вода на борту",
        "travel-luxor-book-now": "Забронировать сейчас",
        "travel-luxor-more-details": "Подробнее",

        "travel-cairo-title": "Каир",
        "travel-cairo-best-price": "Лучшая цена за человека",
        "travel-cairo-price": "70.00 EUR",
        "travel-cairo-card-title": "Путешествие в Каир",
        "travel-cairo-favorite-trip": "Ваше любимое путешествие!",
        "travel-cairo-duration": "• продолжительность 1 день",
        "travel-cairo-transportation": "• транспортировка в кондиционированном транспортном средстве",
        "travel-cairo-entry-pickup": "• с входом и трансфером в Каире/Гизе",
        "travel-cairo-water": "• вода на борту",
        "travel-cairo-book-now": "Забронировать сейчас",
        "travel-cairo-more-details": "Подробнее",
        "private-luxor-title": "Частное путешествие в Луксор",
        "private-luxor-card-title": "Частное путешествие в Луксор",
        "private-luxor-favorite-trip": "Ваше любимое путешествие!",
        "private-luxor-duration": "• продолжительность 1 день",
        "private-luxor-transportation": "• транспортировка в кондиционированном автобусе",
        "private-luxor-entry": "• с входом",
        "private-luxor-water": "• вода на борту",
        "private-luxor-book-now": "Забронировать сейчас",
        "private-luxor-more-details": "Подробнее",

        "private-cairo-title": "Частное путешествие в Каир",
        "private-cairo-card-title": "Частное путешествие в Каир",
        "private-cairo-favorite-trip": "Ваше любимое путешествие!",
        "private-cairo-duration": "• продолжительность 1 день",
        "private-cairo-transportation": "• транспортировка в кондиционированном автобусе",
        "private-cairo-entry": "• с входом",
        "private-cairo-water": "• вода на борту",
        "private-cairo-book-now": "Забронировать сейчас",
        "private-cairo-more-details": "Подробнее"
    }
};


// Function to change the language
function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}
