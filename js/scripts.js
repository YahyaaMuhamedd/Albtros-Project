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
            rootMargin: '0px 0px -40%',
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
const translations = {
    en: {
        home: "Home",
        trips: "Trips",
        hotels: "Hotels",
        cityTours: "City Tours",
        travels: "Travels",
        about: "About",
        contact: "Contact",
        bookNow: "Book Now",
        mastheadTitle: "Your Best Choice",
        contactUs: "Contact Us",
        contactSubheading: "We are at your service. Do not hesitate to contact us",
        // Add more translations as needed
    },
    ar: {
        home: "الصفحة الرئيسية",
        trips: "الرحلات",
        hotels: "الفنادق",
        cityTours: "جولات المدينة",
        travels: "السفر",
        about: "حول",
        contact: "تواصل",
        bookNow: "احجز الآن",
        mastheadTitle: "خيارك الأفضل",
        contactUs: "اتصل بنا",
        contactSubheading: "نحن في خدمتك. لا تتردد في الاتصال بنا",
        boat: "رحلات القارب",
        safari: "رحلات السفاري",
        diving: "رحلات الغطس",
        // Add more translations as needed
    },
    ru: {
        home: "Главная",
        trips: "Поездки",
        hotels: "Отели",
        cityTours: "Городские туры",
        travels: "Путешествия",
        about: "О нас",
        contact: "Контакт",
        bookNow: "Забронировать",
        mastheadTitle: "Ваш лучший выбор",
        contactUs: "Свяжитесь с нами",
        contactSubheading: "Мы к вашим услугам. Не стесняйтесь обращаться к нам",
        // Add more translations as needed
    }
};

function changeLanguage(lang) {
    document.querySelector('.nav-link[href="index.html"]').textContent = translations[lang].home;
    document.querySelector('.nav-link[href="Hotels.html"]').textContent = translations[lang].hotels;
    document.querySelector('.nav-link[href="citytours.html"]').textContent = translations[lang].cityTours;
    document.querySelector('.nav-link[href="travels.html"]').textContent = translations[lang].travels;
    document.querySelector('.nav-link[href="About.html"]').textContent = translations[lang].about;
    document.querySelector('.nav-link[href="#contact"]').textContent = translations[lang].contact;
    document.querySelector('.nav-link[href="trips/boattrips.html"]').textContent = translations[lang].boat;
    document.querySelector('.nav-link[href="trips/safari.html"]').textContent = translations[lang].safari;
    document.querySelector('.nav-link[href="trips/diving.html"]').textContent = translations[lang].diving;
    document.querySelector('.nav-link[href="trips.html"]').textContent = translations[lang].trips;

    document.querySelector('.masthead-heading p').innerHTML = translations[lang].mastheadTitle;
    document.getElementsByClassName('book-btn').innerHTML = translations[lang].bookNow;
    document.querySelector('#contact .section-heading').textContent = translations[lang].contactUs;
    document.querySelector('#contact .section-subheading').textContent = translations[lang].contactSubheading;

    // Add more elements to update as needed
}

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
