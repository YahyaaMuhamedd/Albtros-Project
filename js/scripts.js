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
        excursions: "Excursions depuis Hurghada, El Gouna, Makady",
        luxorPrivate: "Excursion privée à Louxor",
        luxorTwoDays: "Louxor deux jours privé",
        cairoPrivate: "Excursion privée au Caire",
        cairoDayTrip: "Excursion d'une journée au Caire en avion",
        cairoTwoDays: "Caire deux jours privé",
        cairoExclusive: "Excursion d'une journée au Caire à la carte (exclusif)",
        cairoPyramids: "Caire Pyramides de Gizeh, Saqqarah et Dahchour Exclusif",
        denderaHalfDay: "Excursion d'une demi-journée à Dendera",
        denderaAbydos: "Excursion à Dendera & Abydos d'une journée privée",
        hurghadaCityTour: "Visite de la ville de Hurghada",
        elGounaCityTour: "Visite de la ville d'El-Gouna",
        aswanAbuSimbel: "Assouan & Abou Simbel deux jours privés",
        monasteries: "Monastères de St. Antoine & St. Paul",
        quadTour3Hours: "3 heures de quad + balade à dos de chameau",
        quadTour5Hours: "5 heures de quad + balade à dos de chameau + dîner",
        egyptDayTours: "Tours d'une journée en Égypte & Excursions à Hurghada",
        varietyAndFun: "Des visites des monastères à une visite de la ville de Hurghada ; nous offrons beaucoup de variété et de plaisir pour toute la famille.",
        luxorTrip: {
            title: "Voyage à Louxor",
            description: "Voyage à Louxor",
            price: "60.00 EUR"
        },
        cairoTrip: {
            title: "Voyage au Caire",
            description: "Voyage au Caire",
            price: "70.00 EUR"
        },
        hurghadaTrip: {
            title: "Voyage à Hurghada",
            title: "Voyage à Hurghada",
            description: "Voyage à Hurghada",
            price: "20.00 EUR",
        },
        moreDetails: "Plus de détails"
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
