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
        home: `الصفحة الرئيسية  `,
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
    document.querySelector('#trips').innerText = translations[lang].trips;

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
var english = document.getElementById('content').innerHTML
var englishContent = `

        <div class="container gap-4">
            <h1 class="display-4 text-center main-color fw-bold mb-5">Welcome to Albatros Travel</h1>
            <div class="row ">
                <div class="col-md-6 m-auto text-center fs-5 mb-5">
                    <p>Now book your Egypt excursions online . We offer a wide range of tours & activities in Egypt and
                        tickets for the most popular attractions. We are in Egypt and specifically for Egypt holidays ,
                        Egypt excursions & day trips and tours throughout Egypt.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-2 col-sm-6 col-xs-6">
                    <div class="feature">
                        <i class="fas fa-times-circle"></i>
                        <p class="text-black">Free cancellation</p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-6">
                    <div class="feature">
                        <i class="fas fa-coffee"></i>
                        <p class="text-black">No coffee trip</p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-6">
                    <div class="feature">
                        <i class="fas fa-star"></i>
                        <p class="text-black">High quality of service</p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-6">
                    <div class="feature">
                        <i class="fas fa-tag"></i>
                        <p class="text-black">Best price guarantee</p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-6">
                    <div class="feature">
                        <i class="fas fa-shield-alt"></i>
                        <p class="text-black">Insurance included</p>
                    </div>
                </div>
            </div>
        </div>



        <!-- Card Plls -->
        <div class="cards my-5">
            <div class="container">
                <div class="row d-flex m-auto ">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./trips/boattrips.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/paradiseisland.jpg" class="card-img-top" alt="...">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1>
                                            <a href="./trips/boattrips.html" class="text-decoration-none text-white"
                                                style="font-size: 52px;">Boat
                                                Trips</a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./trips/safari.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Desert Safari.jpg" class="card-img-top"
                                        alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1>
                                            <a href="./trips/safari.html" class="text-decoration-none text-white"
                                                style="font-size: 52px;">
                                                Safari
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./trips/diving.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Diving.jpeg" class="card-img-top" alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1 class="fs-1 m-auto">
                                            <a href="./trips/diving.html" class="text-decoration-none text-white "
                                                style="font-size: 52px;">
                                                Diving
                                            </a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./travels.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Cairo.png" class="card-img-top" alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1 class="fs-1 m-auto">
                                            <a href="./travels.html" class="text-decoration-none text-white "
                                                style="font-size: 52px;">
                                                Cairo
                                            </a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./travels.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Luxor.png" class="card-img-top" alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1 class="fs-1 m-auto">
                                            <a href="./travels.html" class="text-decoration-none text-white "
                                                style="font-size: 52px;">
                                                Luxor
                                            </a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h5>[Excursions from Hurghada, El Gouna, Makady]</h5>
                    <ul>
                        <li>Private trip to Luxor</li>
                        <li>Luxor two days private</li>
                        <li>Private trip to Cairo</li>
                        <li>Cairo day trip by plane</li>
                        <li>Cairo two days private</li>
                        <li>Cairo day tour à la carte (exclusive)</li>
                        <li>Cairo Pyramids of Giza, Saqqara and Dahshur Exclusive</li>
                        <li>Dendera excursion half day</li>
                        <li>Dendera & Abydos day tour private</li>
                        <li>Hurghada city tour</li>
                        <li>El-Gouna city tour</li>
                        <li>Aswan & Abu Simbel Two days private</li>
                        <li>Monasteries of St. Antonios & St. Paul</li>
                        <li>3 hours quad tour+camel ride</li>
                        <li>5 hours quad tour + camel ride + dinner</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>[Excursions from Marsa Alam]</h5>
                    <ul>
                        <li>Private trip to Luxor</li>
                        <li>Luxor two days private</li>
                        <li>Private trip to Cairo</li>
                        <li>Cairo day trip by plane</li>
                        <li>Cairo two days private</li>
                        <li>Cairo day tour à la carte (exclusive)</li>
                        <li>Cairo Pyramids of Giza, Saqqara and Dahshur Exclusive</li>
                        <li>Dendera excursion half day</li>
                        <li>Dendera & Abydos day tour private</li>
                        <li>Aswan & Abu Simbel Two days private</li>
                        <li>Monasteries of St. Antonios & St. Paul</li>
                        <li>3 hours quad tour+camel ride</li>
                        <li>5 hours quad tour + camel ride + dinner</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>[Excursions from El- Quseir]</h5>
                    <ul>
                        <li>Private trip to Luxor</li>
                        <li>Luxor two days private</li>
                        <li>Private trip to Cairo</li>
                        <li>Cairo day trip by plane</li>
                        <li>Cairo two days private</li>
                        <li>Cairo day tour à la carte (exclusive)</li>
                        <li>Cairo Pyramids of Giza, Saqqara and Dahshur Exclusive</li>
                        <li>Dendera excursion half day</li>
                        <li>Dendera & Abydos day tour private</li>
                        <li>Aswan & Abu Simbel Two days private</li>
                        <li>Monasteries of St. Antonios & St. Paul</li>
                        <li>3 hours quad tour+camel ride</li>
                        <li>5 hours quad tour + camel ride + dinner</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>[Safaga Port | Shore Excursions from Safaga]</h5>
                    <ul>
                        <li>Private trip to Luxor</li>
                        <li>Luxor 2 days excursion</li>
                        <li>Dendera Abydos Excursion</li>
                        <li>Sharm Elnaga Snorkeling</li>
                        <li>Utopia Island Snorkeling</li>
                        <li>Sindbad Submarine</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Special Feutres -->
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="special-features text-center">
                        <h2>Our Special Features</h2>
                        <p class="w-50 m-auto mb-2">Holidays are probably the most valuable time of the year for
                            everyone.
                            That's why we
                            attach great
                            importance to providing you with an interesting and relaxing time.</p>
                        <a href="About.html" class="btn btn-light btn-primary">Who we are</a>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="feature-item w-100">
                        <i class="feature-icon fas fa-flag"></i>
                        <h3>Individual Excursions Throughout Egypt</h3>
                        <p>We not only visit the most interesting sights, but also show you things off the beaten track.
                        </p>
                    </div>
                    <div class="feature-item">
                        <i class="feature-icon fas fa-euro-sign"></i>
                        <h3>Fair Prices / No Extra Costs</h3>
                        <p>We offer high quality and personal service at affordable prices.</p>
                    </div>
                    <div class="feature-item">
                        <i class="feature-icon fas fa-camera"></i>
                        <h3>Time for You</h3>
                        <p>Thanks to our small group size, you will have enough time during the excursions to see
                            everything
                            at your leisure.</p>
                    </div>
                    <div class="feature-item">
                        <i class="feature-icon fas fa-calendar-alt"></i>
                        <h3>We Adapt to You</h3>
                        <p>Most of our excursions can be customized to suit your schedule and needs.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-muted">We are at your service. Do not hesitate to contact us</h3>
                </div>

                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <!-- Name input-->
                                <input class="form-control" id="name" type="text" placeholder="Your Name *"
                                    data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                                <!-- Email address input-->
                                <input class="form-control" id="email" type="email" placeholder="Your Email *"
                                    data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.
                                </div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                                <!-- Phone number input-->
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *"
                                    data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is
                                    required.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <!-- Message input-->
                                <textarea class="form-control" id="message" placeholder="Your Message *"
                                    data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted-->
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />

                            <a aria-label="Chat on WhatsApp" href="https://wa.me/201152074894"> <img
                                    alt="Chat on WhatsApp" src="assets/img/portfolio/WhatsAppButtonGreenLarge.png" />
                            </a>

                            <!-- <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>-->
                        </div>
                    </div>
                    <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form-->
                    <div class="d-none" id="submitErrorMessage">
                        <div class="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <!-- Submit Button-->
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled"
                            id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>

        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; ALBATROS TRAVEL 2024</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://web.facebook.com/"
                            aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/"
                            aria-label="instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <!-- <div class="col-lg-4 text-lg-end">
                <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>-->
                </div>
            </div>
        </footer>
`;

var arabicContent = `
  <div class="container gap-4">
        <h1 class="display-4 text-center main-color fw-bold mb-5">مرحباً بكم في ألباتروس ترافيل</h1>
        <div class="row ">
            <div class="col-md-6 m-auto text-center fs-5 mb-5">
                <p>احجز جولات مصر الآن عبر الإنترنت. نقدم مجموعة واسعة من الجولات والأنشطة في مصر وتذاكر لأشهر المعالم السياحية. نحن في مصر وخاصة لاجازات مصر وجولات مصر والرحلات اليومية والجولات في جميع أنحاء مصر.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-times-circle"></i>
                    <p class="text-black">إلغاء مجاني</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-coffee"></i>
                    <p class="text-black">لا توجد جولة قهوة</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-star"></i>
                    <p class="text-black">جودة خدمة عالية</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-tag"></i>
                    <p class="text-black">أفضل سعر garanty</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-shield-alt"></i>
                    <p class="text-black">التأمين شامل</p>
                </div>
            </div>
        </div>
    </div>
`;

var russiancontent = `
<div class="container gap-4">
        <h1 class="display-4 text-center main-color fw-bold mb-5">Добро пожаловать в Albatros Travel</h1>
        <div class="row ">
            <div class="col-md-6 m-auto text-center fs-5 mb-5">
                <p>Забронируйте сейчас экскурсии в Египте онлайн. Мы предлагаем широкий спектр туров и активностей в Египте, а также билеты на самые популярные достопримечательности. Мы находимся в Египте и специализируемся на отдыхе в Египте, экскурсиях в Египте, дневных поездках и турах по всей Египте.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-times-circle"></i>
                    <p class="text-black">Бесплатная отмена</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-coffee"></i>
                    <p class="text-black">Нет кофейной поездки</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-star"></i>
                    <p class="text-black">Высокое качество обслуживания</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-tag"></i>
                    <p class="text-black">Гарантия лучшей цены</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="feature">
                    <i class="fas fa-shield-alt"></i>
                    <p class="text-black">Страхование включено</p>
                </div>
            </div>
        </div>
    </div>

     <div class="cards my-5">
            <div class="container">
                <div class="row d-flex m-auto ">
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./trips/boattrips.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/paradiseisland.jpg" class="card-img-top" alt="...">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1>
                                            <a href="./trips/boattrips.html" class="text-decoration-none text-white"
                                                style="font-size: 52px;">Boat
                                                Trips</a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./trips/safari.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Desert Safari.jpg" class="card-img-top"
                                        alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1>
                                            <a href="./trips/safari.html" class="text-decoration-none text-white"
                                                style="font-size: 52px;">
                                                Safari
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./trips/diving.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Diving.jpeg" class="card-img-top" alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1 class="fs-1 m-auto">
                                            <a href="./trips/diving.html" class="text-decoration-none text-white "
                                                style="font-size: 52px;">
                                                Diving
                                            </a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./travels.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Cairo.png" class="card-img-top" alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1 class="fs-1 m-auto">
                                            <a href="./travels.html" class="text-decoration-none text-white "
                                                style="font-size: 52px;">
                                                Cairo
                                            </a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <a href="./travels.html">
                            <div class="card w-100 rounded-pill">
                                <div class="img-info position-relative overflow-hidden rounded-pill">
                                    <img src="./assets/trips img/Luxor.png" class="card-img-top" alt="Desert Safari">
                                    <div
                                        class="caption text-center text-white position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                                        <h1 class="fs-1 m-auto">
                                            <a href="./travels.html" class="text-decoration-none text-white "
                                                style="font-size: 52px;">
                                                Luxor
                                            </a>
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>


        <div class="container">
  <div class="row">
    <div class="col-md-3">
      <h5>[Экскурсии из Хургады, Эль-Гуны, Макади]</h5>
      <ul>
        <li>Частная поездка в Луксор</li>
        <li>Луксор на два дня частная</li>
        <li>Частная поездка в Каир</li>
        <li>Дневная поездка в Каир на самолете</li>
        <li>Каир на два дня частная</li>
        <li>Дневной тур в Каир по карте (эксклюзив)</li>
        <li>Пирамиды Гизы, Саккары и Дахшура Эксклюзив</li>
        <li>Полудневная экскурсия в Дендеру</li>
        <li>Дендер и Абидос дневной тур частный</li>
        <li>Тур по городу Хургада</li>
        <li>Тур по городу Эль-Гуна</li>
        <li>Асван и Абу Симбел на два дня частная</li>
        <li>Монастыри Святого Антония и Святого Павла</li>
        <li>3 часа квадроцикл + верблюжья поездка</li>
        <li>5 часов квадроцикл + верблюжья поездка + ужин</li>
      </ul>
    </div>
    <div class="col-md-3">
      <h5>[Экскурсии из Марса-Алама]</h5>
      <ul>
        <li>Частная поездка в Луксор</li>
        <li>Луксор на два дня частная</li>
        <li>Частная поездка в Каир</li>
        <li>Дневная поездка в Каир на самолете</li>
        <li>Каир на два дня частная</li>
        <li>Дневной тур в Каир по карте (эксклюзив)</li>
        <li>Пирамиды Гизы, Саккары и Дахшура Эксклюзив</li>
        <li>Полудневная экскурсия в Дендеру</li>
        <li>Дендер и Абидос дневной тур частный</li>
        <li>Асван и Абу Симбел на два дня частная</li>
        <li>Монастыри Святого Антония и Святого Павла</li>
        <li>3 часа квадроцикл + верблюжья поездка</li>
        <li>5 часов квадроцикл + верблюжья поездка + ужин</li>
      </ul>
    </div>
    <div class="col-md-3">
      <h5>[Экскурсии из Эль-Кусейра]</h5>
      <ul>
        <li>Частная поездка в Луксор</li>
        <li>Луксор на два дня частная</li>
        <li>Частная поездка в Каир</li>
        <li>Дневная поездка в Каир на самолете</li>
        <li>Каир на два дня частная</li>
        <li>Дневной тур в Каир по карте (эксклюзив)</li>
        <li>Пирамиды Гизы, Саккары и Дахшура Эксклюзив</li>
        <li>Полудневная экскурсия в Дендеру</li>
        <li>Дендер и Абидос дневной тур частный</li>
        <li>Асван и Абу Симбел на два дня частная</li>
        <li>Монастыри Святого Антония и Святого Павла</li>
        <li>3 часа квадроцикл + верблюжья поездка</li>
        <li>5 часов квадроцикл + верблюжья поездка + ужин</li>
      </ul>
    </div>
    <div class="col-md-3">
  <h5>[Порт Сафага | Береговые экскурсии из Сафаги]</h5>
  <ul>
    <li>Частная поездка в Луксор</li>
    <li>Луксор на два дня экскурсия</li>
    <li>Экскурсия в Дендеру и Абидос</li>
    <li>Снорклинг в Шарм Эльнага</li>
    <li>Снорклинг на острове Утопия</li>
    <li>Субмарина Синдбад</li>
  </ul>
</div>
</div>
</div>


<div class="container">
  <div class="row">
    <div class="col-md-12 ">
      <div class="special-features text-center">
        <h2>Наши Особые Предложения</h2>
        <p class="w-50 m-auto mb-2">Отпуск - это, вероятно, самое ценное время года для каждого.
          Поэтому мы
          придаем большое значение тому, чтобы обеспечить вам интересное и расслабляющее время.</p>
        <a href="About.html" class="btn btn-light btn-primary">Кто мы</a>
      </div>
    </div>
    <div class="col-md-12">
      <div class="feature-item w-100">
        <i class="feature-icon fas fa-flag"></i>
        <h3>Индивидуальные экскурсии по всему Египту</h3>
        <p>Мы не только посещаем самые интересные достопримечательности, но и показываем вам вещи, которые не входят в стандартный маршрут.</p>
      </div>
      <div class="feature-item">
        <i class="feature-icon fas fa-euro-sign"></i>
        <h3>Честные цены / Без дополнительных затрат</h3>
        <p>Мы предлагаем высококачественный и персональный сервис по доступным ценам.</p>
      </div>
      <div class="feature-item">
        <i class="feature-icon fas fa-camera"></i>
        <h3>Время для вас</h3>
        <p>Благодаря нашему маленькому размеру группы, у вас будет достаточно времени во время экскурсий, чтобы увидеть все в свое удовольствие.</p>
      </div>
      <div class="feature-item">
        <i class="feature-icon fas fa-calendar-alt"></i>
        <h3>Мы адаптируемся к вам</h3>
        <p>Большинство наших экскурсий могут быть настроены в соответствии с вашим расписанием и потребностями.</p>
      </div>
    </div>
  </div>
</div>



<section class="page-section" id="contact">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Св яжитесь с нами</h2>
            <h3 class="section-subheading text-muted">Мы готовы помочь. Не стесняйтесь связаться с нами</h3>
        </div>
        
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div class="row align-items-stretch mb-5">
                <div class="col-md-6">
                    <div class="form-group">
                        <!-- Name input-->
                        <input class="form-control" id="name" type="text" placeholder="Ваше имя *" 
                            data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="name:required">Имя обязательно.</div>
                    </div>
                    <div class="form-group">
                        <!-- Email address input-->
                        <input class="form-control" id="email" type="email" placeholder="Ваш Email *" 
                            data-sb-validations="required,email" />
                        <div class="invalid-feedback" data-sb-feedback="email:required">Email обязателен.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email не является валидным.</div>
                    </div>
                    <div class="form-group mb-md-0">
                        <!-- Phone number input-->
                        <input class="form-control" id="phone" type="tel" placeholder="Ваш телефон *" 
                            data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="phone:required">Телефон обязателен.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-textarea mb-md-0">
                        <!-- Message input-->
                        <textarea class="form-control" id="message" placeholder="Ваше сообщение *" 
                            data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">Сообщение обязательно.</div>
                    </div>
                </div>
            </div>
            <!-- Submit success message-->
            <!-- This is what your users will see when the form-->
            <!-- has successfully submitted-->
            <div class="d-none" id="submitSuccessMessage">
                <div class="text-center text-white mb-3">
                    <div class="fw-bolder">Форма отправлена успешно!</div>
                    Чтобы активировать эту форму, зарегистрируйтесь на
                    <br />

                    <a aria-label="Чат на WhatsApp" href="https://wa.me/201152074894"> <img
                            alt="Чат на WhatsApp" src="assets/img/portfolio/WhatsAppButtonGreenLarge.png" />
                    </a>

                    <!-- <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>-->
                </div>
            </div>
            <!-- Submit error message-->
            <!-- This is what your users will see when there is-->
            <!-- an error submitting the form-->
            <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Ошибка отправки сообщения!</div>
            </div>
            <!-- Submit Button-->
            <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled"
                    id="submitButton" type="submit">Отправить сообщение</button></div>
        </form>
    </div>
</section>

<footer class="footer py-4">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4 text-lg-start">Копирайт &copy; АЛЬБАТРОС ТУРИЗМ 2024</div>
            <div class="col-lg-4 my-3 my-lg-0">
                <a class="btn btn-dark btn-social mx-2" href="https://web.facebook.com/"
                    aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/"
                    aria-label="instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <!-- <div class="col-lg-4 text-lg-end">
                <a class="link-dark text-decoration-none me-3" href="#!">Политика конфиденциальности</a>
                <a class="link-dark text-decoration-none" href="#!">Условия использования</a>
            </div>-->
        </div>
    </div>
</footer>
`

document.getElementById('english-btn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = english;
})



document.getElementById('russian-btn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = russiancontent;
})