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

    ru: {
        "help-text": "Wenn Sie nicht gefunden haben, was Sie suchen, zögern Sie nicht, uns zu schreiben, und wir helfen Ihnen so schnell wie möglich!",
        "send-whatsapp-btn": "WhatsApp senden",
        "call-or-whatsapp": "Rufen Sie an oder WhatsApp: +201552378066",
        "home": "Startseite",
        "trips": "Reisen",
        "boat-trips": "Bootsausflüge",
        "safari": "Safari",
        "diving": "Tauchen",
        "hotels": "Hotels",
        "city-tours": "Stadttouren",
        "hurghada": "Hurghada",
        "el-gouna": "El Gouna",
        "travels": "Reisen",
        "about": "Über uns",
        "language": "Sprache",
        "english": "Englisch",
        "russian": "Russisch",
        "carousel-title": "ALBATROS ROTES MEER",
        "carousel-subtitle": "Das Beste am Roten Meer",
        "welcome": "Willkommen bei Albatros Travel",
        "intro-text": "Buchen Sie Ihre Ausflüge in Ägypten online. Wir bieten eine große Auswahl an Touren und Aktivitäten in Ägypten sowie Tickets für die beliebtesten Sehenswürdigkeiten. Wir sind in Ägypten und speziell für ägyptische Ferien, Ausflüge und Tagestrips und Touren in ganz Ägypten.",
        "free-cancellation": "Kostenlose Stornierung",
        "no-coffee-trip": "Keine Kaffeefahrten",
        "high-quality-services": "Hochwertiger Service",
        "best-price-guarantee": "Bestpreisgarantie",
        "insurance-included": "Versicherung inbegriffen",
        "Boat Trips": "Bootsausflüge",
        "Safari": "Safari",
        "Diving": "Tauchen",
        "Cairo": "Kairo",
        "Luxor": "Luxor",
        "Sea Activity": "Meer Aktivitäten",
        "excursions": "Ausflüge von Hurghada, El Gouna, Makadi",
        "luxorPrivate": "Private Tour nach Luxor",
        "luxorTwoDays": "Luxor für zwei Tage, privat",
        "cairoPrivate": "Private Tour nach Kairo",
        "cairoDayTrip": "Tagesausflug nach Kairo mit dem Flugzeug",
        "cairoTwoDays": "Kairo für zwei Tage, privat",
        "cairoExclusive": "Exklusiver Tagesausflug nach Kairo auf Anfrage",
        "cairoPyramids": "Kairo: Pyramiden von Gizeh, Saqqara und Dahshur, exklusiv",
        "denderaHalfDay": "Halbtägige Tour nach Dendera",
        "denderaAbydos": "Private Tagestour nach Dendera und Abydos",
        "hurghadaCityTour": "Stadtrundfahrt in Hurghada",
        "elGounaCityTour": "Stadtrundfahrt in El Gouna",
        "aswanAbuSimbel": "Aswan und Abu Simbel für zwei Tage, privat",
        "monasteries": "Klöster St. Antonius und St. Paulus",
        "quadTour3Hours": "3 Stunden Quad-Tour + Kamelritt",
        "quadTour5Hours": "5 Stunden Quad-Tour + Kamelritt + Abendessen",
        "egyptDayTours": "Tagesausflüge und Touren in Ägypten ab Hurghada",
        "varietyAndFun": "Von Klostertouren bis hin zu Stadtrundfahrten in Hurghada; wir bieten viel Abwechslung und Spaß für die ganze Familie.",
        "luxorTriptitle": "Ausflug nach Luxor",
        "luxorTripdescription": "Ausflug nach Luxor",
        "luxorTripprice": "60.00 EUR",
        "cairoTriptitle": "Ausflug nach Kairo",
        "cairoTripdescription": "Ausflug nach Kairo",
        "cairoTripprice": "70.00 EUR",
        "hurghadaTriptitle": "Ausflug nach Hurghada",
        "hurghadaTripdescription": "Ausflug nach Hurghada",
        "hurghadaTripprice": "20.00 EUR",
        "moreDetails": "Mehr Details",
        "paradise_island": "PARADIESINSEL",
        "best_price": "Bester Preis pro Person",
        "your_favourite_trip": "Ihre Lieblingsreise!",
        "duration": "• Dauer",
        "snorkelling": "• Schnorcheln + Ausrüstung",
        "drinks_and_lunch": "• Alkoholfreie Getränke und heißer Tee, sowie Mittagessen an Bord",
        "pickup": "• Abholung und Rücktransfer zu Ihrem Hotel",
        "book_now": "Jetzt buchen",
        "more_details": "Mehr Details",
        "desert_safari": "Wüstensafari",
        "quad_3h": "3 Stunden Quad-Tour",
        "exciting_experience": "• Spannendes Erlebnis auf einem ATV",
        "bedouin_village": "• Besuch eines Beduinendorfs in der Wüste",
        "camels_ride": "• Kamelritt",
        "desert_safari_sunset": "Wüstensafari zum Sonnenuntergang",
        "dinner_party": "• Abendessen + Party",
        "desert_mega_safari": "Mega Wüstensafari",
        "hurghadaTitle": "Stadtrundfahrt Hurghada",
        "bestPrice": "Bester Preis pro Person",
        "hurghadaPrice": "15 EUR",
        "hurghadaTitleCard": "Stadtrundfahrt Hurghada",
        "hurghadaDescription": "Hurghada: Morgendliche oder abendliche Touren mit Guide. Englisch/Deutschsprachiger Guide.",
        "duration": "• 3 Stunden",
        "groupSize": "• Kleine Gruppe",
        "returnTrip": "• Hin- und Rückfahrt",
        "mosqueVisit": "• Besuch der größten Moschee",
        "churchVisit": "• Besuch der größten Kirche",
        "oldCity": "• Altstadt",
        "shishaExtra": "• Shisha + 5 EUR extra (Shisha-Typ oder Wasserpfeife)",
        "bookNow": "Jetzt buchen",
        "horseRiding": "Reiten",
        "horseRidingTitle": "Reiten + Schwimmen",
        "horsePrice1Hour": "1 Stunde = 30 EUR",
        "horsePrice2Hour": "2 Stunden = 50 EUR",
        "horsePrice3Hour": "3 Stunden = 70 EUR",
        "horseRidingTitleCard": "Reiten + Schwimmen",
        "horseDescription": "Ihr Lieblingsritt",
        "horseDuration": "• 1 oder 2 oder 3 Stunden",
        "horseEveryDay": "• Täglich",
        "hotelPickup": "• Hotelabholung möglich",
        "nativeSpeaker": "• Muttersprachlicher Guide",
        "moreDetails": "Mehr Details",
        "camel_riding": "Kamelreiten",
        "best_price": "Bester Preis pro Person",
        "price_1hour": "1 Stunde = 30 EUR",
        "price_2hour": "2 Stunden = 50 EUR",
        "price_3hour": "3 Stunden = 70 EUR",
        "card_title": "Kamelreiten",
        "favourite_ride": "Ihr Lieblingsritt",
        "duration": "• 1, 2 oder 3 Stunden",
        "every_day": "• Täglich",
        "hotel_pickup": "• Hotelabholung möglich",
        "native_speaker": "• Muttersprachlicher Guide",
        "book_now": "Jetzt buchen",
        "more_details": "Mehr Details",
        "time": "Zeit",
        "program": "Programm",
        "time_1430": "⏰ 14:30",
        "time_1500": "⏰ 15:00",
        "time_1900": "⏰ 19:00",
        "pick_up": "Abholung vom Hotel",
        "arrival_safari": "Ankunft an der Safari-Station",
        "back_hotel": "Rückkehr zum Hotel",
        "description_5hours": "Beschreibung der 5-stündigen Quad-Tour und Kamelritt",
        "quad_pickup": "Wir holen Sie gegen 14:30 Uhr von Ihrem Hotel ab und bringen Sie zur Quad-Station...",
        "quad_instructions": "Alle Quads sind mit einem automatischen Steuerungssystem ausgestattet, Sie müssen nur Gas und Bremse betätigen...",
        "quad_drive": "Wir fahren etwa 1 Stunde (ca. 25 km) mit dem Quad, bis wir das Beduinendorf erreichen...",
        "bedouin_village": "Freundliche Beduinen empfangen Sie im Beduinendorf...",
        "camel_ride": "Hier haben Sie die Möglichkeit, auf Kamelen zu reiten und die Umgebung zu erkunden...",
        "back_to_hotel": "Anschließend bringen wir Sie zurück zu Ihrem Hotel.",
        "dinner_bqq": "Abendessen + BBQ Party + Tanzshow + Feuershow",
        "time_1130": "⏰ 11:30",
        "time_1200": "⏰ 12:00",
        "description_mega_safari": "Beschreibung der Mega-Safari",
        "mega_safari_details": "• 1 Stunde Quadfahren <br> • 20 Minuten Buggy-Jeeptour <br>• Tee, Kamelritt...",
        "paradise_snorkeling": "Tagesausflug zum Schnorcheln auf der Insel Paradise",
        "snorkeling_description_1": "Genießen Sie unvergessliches Schwimmen an einem Privatstrand der Insel Paradise und eine entspannende Bootstour auf dem Roten Meer...",
        "snorkeling_description_2": "Die Insel Paradise ist ein Naturschutzgebiet im Roten Meer in der Nähe von Hurghada und bietet seinen Besuchern weiße Sandstrände...",
        "snorkeling_description_3": "Schwimmen und schnorcheln Sie mit vielen exotischen Fischen und entdecken Sie die einzigartige Unterwasserwelt...",
        "paradise_program": "Programm des Tagesausflugs zum Schnorcheln auf der Insel Paradise",
        "boat_trip": "Bootsausflug mit Schnorchelstopps",
        "island_stay": "Aufenthalt auf der Insel",

        "folklore_show": "Folklore-Show",
        "paradise_description": "Beschreibung des Tagesausflugs zum Schnorcheln auf der Insel Paradise",
        "paradise_snorkeling_program_1": "Wir holen Sie von Ihrem Hotel in einem voll klimatisierten Auto ab und bringen Sie zum Hafen, wo Ihr Schnorchelabenteuer beginnt...",
        "paradise_snorkeling_program_2": "Bewundern Sie die farbenfrohen Korallen und schwimmen Sie mit einer Vielzahl exotischer Fische...",
        "paradise_snorkeling_program_3": "Nach einem Schnorchelstopp geht es weiter zur Insel Paradise...",
        "safari_title": "Quad-Safari und Kamelritt",
        "safari_desc1": "Diese 3-stündige Tour ist ein staubiges Abenteuer mit garantiertem Spaß!",
        "safari_desc2": "Eine 3-stündige Quad-Safari ist eine großartige Gelegenheit, die Wüste in ihrer ganzen Pracht und Majestät zu erleben. Dies ist eine Tour für diejenigen, die die Wüste auf einem vierrädrigen Quad durchqueren möchten.",
        "safari_desc3": "Während der Safari können Sie das Leben und die Traditionen eines Beduinendorfs erkunden und auf einem Kamel reiten und interessante Fakten über ihr Leben in der Wüste erfahren.",
        "safari_desc4": "Die Erinnerungen und Eindrücke von dieser Tour werden Ihnen lange in Erinnerung bleiben!",
        "safari_program_title": "Programm der 3-stündigen Quad-Safari und Kamelritt",
        "time": "Zeit",
        "program": "Programm",
        "safari_time1": "⏰ 7:30",
        "safari_prog1": "Abholung vom Hotel",
        "safari_time2": "⏰ 8:00",
        "safari_prog2": "Ankunft an der Safaristation",
        "safari_time3": "⏰ 11:00",
        "safari_prog3": "Rückkehr zum Hotel",
        "safari_time4": "⏰ 11:30",
        "safari_prog4": "Ankunft im Hotel",
        "safari_desc_title": "Beschreibung der 3-stündigen Quad-Safari und Kamelritt",
        "safari_desc5": "Wir holen Sie gegen 07:30 Uhr von Ihrem Hotel ab und bringen Sie zur Trainingsstation...",
        "safari_desc6": "Alle Quads sind mit einem automatischen Steuerungssystem ausgestattet...",
        "safari_desc7": "Wir fahren etwa eine Stunde (ca. 25 km), bis wir das Beduinendorf erreichen.",
        "safari_desc8": "Freundliche Beduinen werden Sie empfangen...",
        "safari_desc9": "An diesem Ort haben Sie die Möglichkeit, auf einem Kamel zu reiten...",
        "safari_desc10": "Danach bringen wir Sie zurück zu Ihrem Hotel.",
        "city_tour_title": "Private Stadtrundfahrt durch Hurghada",
        "city_tour_desc1": "Möchten Sie das echte, ursprüngliche Hurghada kennenlernen?",
        "city_tour_desc2": "Wir haben die richtige Mischung für Sie ausgewählt...",
        "city_tour_program_title": "Programm der privaten Stadtrundfahrt durch Hurghada",
        "city_tour_stop1": "El-Mina Masjid Moschee",
        "city_tour_stop2": "Koptische Kathedrale von St. Shenouda",
        "city_tour_stop3": "Fischmarkt",
        "city_tour_stop4": "Gemüsemarkt",
        "city_tour_stop5": "Hurghada Marina Boulevard",
        "city_tour_desc_title": "Beschreibung der privaten Stadtrundfahrt durch Hurghada",
        "city_tour_desc3": "Wir holen Sie um 14:00 Uhr von Ihrem Hotel ab...",
        "city_tour_desc4": "Der erste Stopp führt Sie direkt zum höchsten Punkt...",
        "city_tour_desc5": "Dann fahren wir weiter zum städtischen Pier...",
        "city_tour_desc6": "Wir setzen unsere Tour auf dem Fischmarkt fort...",
        "city_tour_desc7": "Wenn Sie eine besondere Anfrage haben...",
        "city_tour_desc8": "Gegen 19:00 Uhr bringen wir Sie zurück zu Ihrem Hotel...",
        "included_services_title": "Inklusive Leistungen",
        "included_service1": "Abholung von Ihrem Hotel",
        "included_service2": "Englischsprachiger Reiseleiter",
        "included_service3": "Kundensupport rund um die Uhr",
        "included_service4": "Versicherung inbegriffen",
        "prices_title": "Preise",
        "people": "Anzahl der Personen",
        "vehicle": "Transport",
        "price_per_adult": "Preis pro Person",
        "price1_people": "1-2 Personen",
        "price1_vehicle": "Privates Auto",
        "price1_amount": "15 € pro Person",
        "price2_people": "4-5 Personen",
        "price2_vehicle": "Privater Minibus",
        "price2_amount": "10 € pro Person",
        "duration": "Dauer",
        "trip_type": "Reiseart",
        "availability": "Verfügbarkeit",
        "pickup_time": "Abholzeit",
        "duration_value": "ca. 6 Stunden",
        "trip_type_value": "Individuell",
        "availability_value": "Täglich",
        "pickup_time_value": "ca. 14:00 Uhr",
        "ride_on_horseback": "Reitausflug durch die Wüste und am Strand",
        "horseback_description": "Reiten Sie durch die Wüste und am Strand entlang, um die großen Naturwunder von Hurghada bei diesem Reitabenteuer zu erkunden.",
        "itinerary": "Reiseverlauf",
        "itinerary_description": "Wir holen Sie von Ihrem Hotel ab. Beginnen Sie Ihren Tag mit einem Ausritt unter der Leitung eines professionellen Trainers. Reiten Sie eine Stunde durch die Wüste und eine weitere Stunde entlang des Strandes. Genießen Sie während des Reitens am Strand atemberaubende Ausblicke und schaffen Sie unvergessliche Erinnerungen in einer unvergleichlichen Umgebung.",
        "what_to_expect": "Was Sie erwartet",
        "beginner_info": "Keine Sorge, wenn Sie Anfänger sind, Helme werden zur Verfügung gestellt, und der Trainer hilft Ihnen bei Bedarf.",
        "egyptian_horse": "Genießen Sie die seltene Gelegenheit, auf einem ägyptischen Pferd am Meer und in der Wüste zu reiten",
        "explore_desert": "Erkunden Sie die Wüste zu Pferd",
        "play_in_sea": "Spielen Sie mit Ihrem Pferd im Meer",
        "transfer_information": "Transferinformationen",
        "transfer_details": "Der Transfer von jedem Hotel in Hurghada ist kostenlos. Der Transfer aus (Sahl Hasheesh, Makadi Bay, El Gouna) kostet zusätzlich 5 € pro Person, und aus (Soma Bay, Safaga) 10 € pro Person.",
        "suitability_warning": "Nicht geeignet für Schwangere und Personen mit Rückenproblemen",
        "ride_on_camelback": "Kamelritt durch die Wüste und am Strand",
        "camelback_description": "Kamelreiten durch die Wüste und entlang des Strandes, um die großen Naturwunder von Hurghada bei diesem Kamelreitabenteuer zu erkunden.",






        "special_features": "Unsere Besonderen Merkmale",
        "special_features_description": "Urlaub ist wahrscheinlich die wertvollste Zeit des Jahres für jeden. Deshalb legen wir großen Wert darauf, Ihnen eine interessante und entspannte Zeit zu bieten.",
        "who_we_are": "Wer wir sind",
        "individual_excursions": "Individuelle Ausflüge in Ägypten",
        "individual_excursions_description": "Wir besuchen nicht nur die interessantesten Sehenswürdigkeiten, sondern zeigen Ihnen auch, was abseits der ausgetretenen Pfade liegt.",
        "fair_prices": "Faire Preise / Keine zusätzlichen Kosten",
        "fair_prices_description": "Wir bieten hohe Qualität und persönlichen Service zu erschwinglichen Preisen.",
        "time_for_you": "Zeit für Sie",
        "time_for_you_description": "Dank der kleinen Gruppengröße haben Sie genügend Zeit, um alles in Ihrem eigenen Tempo zu sehen.",
        "adapt_to_you": "Wir passen uns Ihnen an",
        "adapt_to_you_description": "Die meisten unserer Ausflüge können an Ihren Zeitplan und Ihre Bedürfnisse angepasst werden.",
        "contact_us": "Kontaktieren Sie uns",
        "contact_description": "Wir stehen Ihnen zur Verfügung. Zögern Sie nicht, uns zu kontaktieren",
        "your_name": "Ihr Name",
        "name_required": "Name ist erforderlich.",
        "your_email": "Ihre E-Mail",
        "email_required": "E-Mail ist erforderlich.",
        "email_invalid": "E-Mail ist ungültig.",
        "your_phone": "Ihre Telefonnummer",
        "phone_required": "Telefonnummer ist erforderlich.",
        "your_message": "Ihre Nachricht",
        "message_required": "Nachricht ist erforderlich.",
        "form_successful": "Formular erfolgreich gesendet!",
        "form_error": "Fehler beim Senden der Nachricht!",
        "send_message": "Nachricht senden",
        "copyright": "Urheberrecht &copy; ALBATROS TRAVEL 2024",
        "travelLuxor": "Luxor",
        "travelPriceForPerson": "Bester Preis pro Person",
        "travelPrice60EUR": "60.00 EUR",
        "travelTitleLuxor": "Reise nach Luxor",
        "travelFavoriteTrip": "Ihre Lieblingsreise!",
        "travelDuration1Day": "• Dauer 1 Tag",
        "travelBus": "• Transport in einem klimatisierten Bus",
        "travelWithEntry": "• mit Eintritt",
        "travelWaterOnBoard": "• Wasser an Bord",
        "travelBookNow": "Jetzt buchen",
        "travelMoreDetails": "Mehr Details",
        "travelCairo": "Kairo",
        "travelPrice70EUR": "70.00 EUR",
        "travelTitleCairo": "Reise nach Kairo",
        "travelVehicle": "• Transport in einem klimatisierten Fahrzeug",
        "travelWithEntryPickup": "• mit Eintritt, Abholung und Lieferung in Kairo/Gizeh",
        "travelProgramLuxorTour": "Programm für private Luxor-Tour",
        "travelKarnakTemple": "Karnak-Tempel",
        "travelColossiMemnon": "Kolosse von Memnon",
        "travelHatshepsutTemple": "Totentempel der Hatschepsut",
        "travelValleyKings": "Tal der Könige",
        "travelLunch": "Mittagessen (Ägyptische Gerichte)",
        "travelNileExcursion": "Nil-Ausflug dauert 1 Stunde (NUR BEI UNS KOSTENLOS)",
        "travelDescriptionLuxorTour": "Beschreibung der privaten Luxor-Tour",
        "travelPickedMorning": "Sie werden früh am Morgen abgeholt. Dann fahren Sie in einem modernen, komfortablen, klimatisierten Fahrzeug über Safaga durch die neu gebaute Wüstenstraße etwa 225 km bis ins Niltal in Qena.",
        "travelShortBreak": "Auf dem Weg machen Sie eine kurze Pause, um die Toilette zu besuchen oder sich die Beine zu vertreten.",
        "travelDriveToLuxor": "Dann fahren Sie über eine dicht besiedelte Landstraße nach Luxor (ca. 60 km).",
        "travelArrivalLuxor": "Bei der Ankunft in Luxor genießen Sie Ihre Besichtigungstour. Zuerst besuchen Sie den größten Tempelkomplex der Welt mit einer riesigen Säulenhalle. Der Bus bringt Sie auf die Westseite von Luxor, wo Sie in einem typischen ägyptischen Café zu Mittag essen.",
        "travelValleyKingsTour": "Nach der Mittagspause erkunden Sie das weltberühmte Tal der Könige mit einer internen Führung durch die königlichen Gräber. Neu! Es ist nun erlaubt, Gräber mit dem Handy ohne Blitz kostenlos zu fotografieren. Danach besuchen Sie die Terrasse des Tempels der Hatschepsut, ein beliebtes Fotomotiv. Ihre Tour endet bei den beeindruckenden Kolossen von Memnon.",
        "travelReturnToHurghada": "Dann fahren Sie zurück nach Hurghada. Zeit, die Eindrücke des Tages Revue passieren zu lassen und vielleicht das Leben am Nil zu beobachten. Sie werden gegen 20:00 Uhr zu Ihrem Hotel zurückgebracht. Die Tour nach Luxor und ins Tal der Könige wird Ihnen lange in Erinnerung bleiben.",
        "travelPrices": "Preise",
        "travelNumberOfPeople": "Anzahl der Personen",
        "travelVehicle": "Fahrzeug",
        "travelPricePerAdult": "Preis pro Erwachsener",
        "travelTwoPersons": "2 Personen",
        "travelPrivateCar": "Privates Auto",
        "travel125": "125 € pro Person",
        "travelFourPersons": "4 Personen",
        "travelPrivateMiniBus": "Privater Minibus",
        "travel100": "100 € pro Person",
        "travelSixToEightPersons": "6 - 8 Personen",
        "travel80": "80 € pro Person",
        "travelPrivateLuxorTour": "Programm für private Luxor-Tour",
        "travelKarnakTemple": "Karnak-Tempel",
        "travelColossiMemnon": "Kolosse von Memnon",
        "travelTempleHatshepsut": "Totentempel der Hatschepsut",
        "travelValleyOfKings": "Tal der Könige",
        "travelLunch": "Mittagessen (Ägyptische Gerichte)",
        "travelNileExcursion": "Nil-Ausflug dauert 1 Stunde (NUR BEI UNS KOSTENLOS)",
        "travelDescriptionLuxorTour": "Beschreibung der privaten Luxor-Tour",
        "travelPickUp": "Sie werden früh am Morgen abgeholt...",
        "travelShortBreak": "Auf dem Weg machen wir eine kurze Pause...",
        "travelDriveLuxor": "Dann fahren wir über eine dicht besiedelte...",
        "travelArrivalLuxor": "Bei der Ankunft in Luxor...",
        "travelLunchBreak": "Nach der Mittagspause...",
        "travelReturnHurghada": "Nach der Tour kehren wir nach Hurghada zurück...",
        "travelCairoTour": "Programm für private Kairo-Tour",
        "travelEgyptianMuseum": "Ägyptisches Museum...",
        "travelPyramids": "Pyramiden von Gizeh",
        "travelSphinx": "Die Große Sphinx von Gizeh",
        "travelValleyTempleKhafre": "Taltempel des Chephren",
        "travelOldTown": "Altstadt von Kairo (nur bei uns)",
        "travelBazaar": "Basar Khan el-Khalili (nur bei uns)",
        "travelSightseeing": "Stadtrundfahrt",
        "travelLunchCairo": "Mittagessen",
        "travelDescriptionCairoTour": "Beschreibung der privaten Kairo-Tour",
        "travelPickUpCairo": "Wir holen Sie um 3:00 Uhr aus Ihrem Hotel ab...",
        "travelShortBreakCairo": "Gegen 5:30 Uhr machen wir eine kurze Pause...",
        "travelArrivalCairo": "Wir kommen gegen 8:00 Uhr in Kairo an...",
        "travelEgyptianMuseumTour": "Dann besuchen wir das Ägyptische Museum...",
        "travelLunchLocalDishes": "Dann probieren Sie lokale ägyptische Gerichte...",
        "travelVisitGiza": "Nach dem Mittagessen besuchen wir die Pyramiden...",
        "travelReturnHurghadaCairo": "Wir kehren gegen 20:00 Uhr nach Hurghada zurück...",

        "travel-luxor-title": "Luxor",
        "travel-luxor-best-price": "Bester Preis pro Person",
        "travel-luxor-price": "60.00 EUR",
        "travel-luxor-card-title": "Reise nach Luxor",
        "travel-luxor-favorite-trip": "Ihre Lieblingsreise!",
        "travel-luxor-duration": "• Dauer 1 Tag",
        "travel-luxor-transportation": "• Transport in einem klimatisierten Bus",
        "travel-luxor-entry": "• mit Eintritt",
        "travel-luxor-water": "• Wasser an Bord",
        "travel-luxor-book-now": "Jetzt buchen",
        "travel-luxor-more-details": "Mehr Details",

        "travel-cairo-title": "Kairo",
        "travel-cairo-best-price": "Bester Preis pro Person",
        "travel-cairo-price": "70.00 EUR",
        "travel-cairo-card-title": "Reise nach Kairo",
        "travel-cairo-favorite-trip": "Ihre Lieblingsreise!",
        "travel-cairo-duration": "• Dauer 1 Tag",
        "travel-cairo-transportation": "• Transport in einem klimatisierten Bus",
        "travel-cairo-entry": "• mit Eintritt",
        "travel-cairo-water": "• Wasser an Bord",
        "travel-cairo-book-now": "Jetzt buchen",
        "travel-cairo-more-details": "Mehr Details",
        "terms_conditions": "AGB",
        "privacy_policy": "Datenschutzerklärung",
        "cookie_policy": "Cookie-Richtlinie",
        "private-luxor-title": "Privates Reise nach Luxor",
        "private-luxor-card-title": "Privates Reise nach Luxor",
        "private-luxor-favorite-trip": "Ihre Lieblingsreise!",
        "private-luxor-duration": "• Dauer 1 Tag",
        "private-luxor-transportation": "• Transport in einem klimatisierten Bus",
        "private-luxor-entry": "• mit Eintritt",
        "private-luxor-water": "• Wasser an Bord",
        "private-luxor-book-now": "Jetzt buchen",
        "private-luxor-more-details": "Mehr Details",

        "private-cairo-title": "Privates Reise nach Kairo",
        "private-cairo-card-title": "Privates Reise nach Kairo",
        "private-cairo-favorite-trip": "Ihre Lieblingsreise!",
        "private-cairo-duration": "• Dauer 1 Tag",
        "private-cairo-transportation": "• Transport in einem klimatisierten Bus",
        "private-cairo-entry": "• mit Eintritt",
        "private-cairo-water": "• Wasser an Bord",
        "private-cairo-book-now": "Jetzt buchen",
        "private-cairo-more-details": "Mehr Details",

        "TransferAirportTaxiServices": "Flughafentransfer | Taxidienste in Hurghada",
        "TransferNeedTransportation": "Brauchen Sie einen Transfer zum oder vom Flughafen Hurghada? Privater Flughafentransfer in Hurghada oder zum Flughafen! Machen Sie es sich bequem und buchen Sie ein komfortables Fahrzeug bei Albatros Travel. Sie können auch einen Minivan oder Kleinbus für Familien oder Gruppen buchen.",
        "TransferInTime": "Pünktlichkeit",
        "TransferSafety": "Sicherheit",
        "TransferTrustful": "Vertrauenswürdigkeit",
        "TransferHighQuality": "Hohe Qualität",
        "TransferWeDriveComfortably": "Wir bringen Sie komfortabel und sicher direkt vom Flughafen zum Hotel. Falls sich Ihr Flug ändert oder verspätet, keine Sorge, wir verfolgen das im System. Albatros Travel bietet einen bequemen und angenehmen Flughafentransfer. Am Flughafenausgang erwartet Sie ein Guide mit einem Schild, auf dem Ihr Name steht. Der Albatros-Transfer ist ein moderner Service, der Sie und Ihre Mitreisenden stressfrei und günstig vom Flughafen zu Ihrem Hotel und zurück bringt.",
        "TransferHowToBook": "Wie buchen Sie einen Transfer mit Albatros Travel?",
        "TransferInquiry": "Anfrage",
        "TransferSendRouteDetails": "Sie senden uns Ihre Route oder Flugdaten. Sie können uns auf verschiedene Weise per E-Mail kontaktieren.",
        "TransferContactConfirmation": "Kontakt und Bestätigung",
        "TransferContactConfirmText": "Wir kontaktieren Sie zur Bestätigung des Transfers zum oder vom Flughafen Hurghada.",
        "TransferMeetAtAirport": "Treffen am Flughafen",
        "TransferDriverWaiting": "Unser Fahrer wartet mit einem Schild, auf dem Ihr Name steht. Er begleitet Sie zum Fahrzeug.",
        "TransferPayment": "Bezahlung",
        "TransferPaymentUponPickup": "Die Zahlung erfolgt bei der Abholung.",
        "TransferAirportHurghadaToHurghada": "Transfer vom Flughafen Hurghada nach Hurghada",
        "TransferPriceFrom20": "Preis ab 20 EUR",
        "TransferAirportHurghadaToGouna": "Transfer vom Flughafen Hurghada nach El Gouna",
        "TransferPriceFrom25": "Preis ab 25 EUR",
        "TransferAirportHurghadaToMakadi": "Transfer vom Flughafen Hurghada nach Makadi",
        "TransferAirportHurghadaToSahlHasheesh": "Transfer vom Flughafen Hurghada nach Sahl Hasheesh",
        "TransferAirportHurghadaToSomaBay": "Transfer vom Flughafen Hurghada nach Soma Bay",
        "TransferPricesPrivateAirportTransfer": "Preise für privaten Flughafentransfer in Hurghada",
        "TransferFromHurghadaAirportTo": "Vom Flughafen Hurghada nach",
        "TransferPricePerVehicle": "Preis pro Fahrzeug",
        "TransferToHurghada": "Hurghada",
        "TransferToGouna": "El Gouna",
        "TransferToSahlHasheesh": "Sahl Hasheesh",
        "TransferToMakadi": "Makadi",
        "TransferToSomaBay": "Soma Bay",
        "TransferPriceFrom20": "ab 20 €",
        "TransferPriceFrom25": "ab 25 €",
        "TransferAdvantagesWithAlbatros": "Unsere Kunden profitieren von den folgenden Vorteilen bei Transfers mit Albatros Travel:",
        "TransferFixedPrice": "Festpreis",
        "TransferLotsOfVehicles": "Große Fahrzeugauswahl",
        "TransferComfort": "Komfort",
        "TransferReliability": "Zuverlässigkeit",
        "TransferSafety": "Sicherheit",
        "hotelpageCities": "Cities",
        "hotelpageSubheading": "Сэкономьте на следующей поездке с ALBATROS TRAVEL. Найдите отличные предложения на отели или апартаменты и забронируйте всего за несколько минут.",
        "hotelpageHurghada": "Hurghada",
        "hotelpageAboutUs": "Über uns",
        "hotelpageMission": "ALBATROS TRAVEL IHRE GLÜCKLICHKEIT UNSERE MISSION",
        "hotelpageVacationPlanning": "Planen Sie einen Urlaub? Lassen Sie ALBATROS TRAVEL Ihr erster Stopp sein. Entdecken Sie unsere Welt der erstaunlichen Resorts und Reisen in Hurghada.",
        "hotelpageExperience": "Jeder Aufenthalt bei ALBATROS TRAVEL ist ein Erlebnis wie kein anderes. Schaffen Sie Erinnerungen, die ein Leben lang halten, während Sie mit uns, zu Land oder zu Wasser, reisen. Wir versichern Ihnen, dass wir Ihre Erwartungen übertreffen werden. Wir versprechen, zurückzukehren, um weitere glückliche Erinnerungen zu schaffen.",
        "hotelpageWelcome": "Willkommen in unserem Unternehmen! Wir sind Ihre Anlaufstelle für die Buchung von Hotels und verschiedenen Reisen in der schönen Stadt Hurghada. Mit einer Leidenschaft für das Reisen und einem Engagement für außergewöhnlichen Service streben wir an, Ihren Aufenthalt in Hurghada unvergesslich zu machen.",
        "hotelpageContactUs": "Seien Sie Teil der großen ALBATROS TRAVEL Familie. Zögern Sie nicht, uns zu kontaktieren. Buchen Sie jetzt Ihr nächstes Reiseziel.",
        "hotelpageValues": "Unsere Werte lassen sich wie folgt zusammenfassen:",
        "hotelpageToursInEgypt": "Touren in Ägypten",
        "hotelpageVarietyOfTours": "Wir bieten eine große Auswahl an Touren mit unterschiedlichen Reiserouten in Ägypten an.",
        "hotelpageIndividualDayTrips": "Individuelle Tagesausflüge von:",
        "hotelpageLuxuryNileCruises": "Luxuriöse Nilkreuzfahrten zwischen:",
        "hotelpageLookingForward": "Wir freuen uns darauf, Ihnen ‚unser‘ Ägypten zu zeigen!",
        "hotelpageOver20Years": "Seit über 20 Jahren haben wir uns kontinuierlich zu einem der größten Reiseveranstalter in Ägypten entwickelt.",
        "hotelpageOpenToChanges": "Wir sind offen für neue Aufgaben, Veränderungen und Herausforderungen und wachsen mit ihnen.",
        "hotelpagePhilosophy": "Unsere Philosophie",
        "hotelpageGuestSatisfaction": "Unsere Gäste sollten zufrieden sein:",
        "hotelpageFriendlyAdvice": "Wir beraten unsere Gäste freundlich, ehrlich und höflich.",
        "hotelpageCompetence": "Wir erweitern kontinuierlich unsere Kompetenz und stellen Sie in den Dienst unserer Gäste.",
        "hotelpageLongTermSatisfaction": "Kurzfristiger wirtschaftlicher Erfolg ist uns nicht wichtig, sondern unsere Gäste sollten langfristig zufrieden sein, uns immer wieder als Partner sehen und uns anderen empfehlen.",
        parasailingTitle: "Parasailing In Hurghada",
        singleParasailingTitle: "Einzel-Para-Sailing",
        doubleParasailingTitle: "Doppel-Para-Sailing",
        bestPriceForPerson: "Bester Preis für Person",
        bestPriceForTwo: "Bester Preis für 2 Personen",
        yourFavouriteTrip: "Ihr Lieblingsausflug!",
        pickupDropoff: "• Abholung & Rückgabe an Ihrem Hotel",
        parasailingDetails: "• Parasailing (10 Min, in der Luft)",
        lifeJacket: "• Schwimmweste",
        speedBoat: "• Schnellboot",
        bookNow: "Jetzt Buchen",
        "fly_board_title": "Flyboard In Hurghada",
        "fly_board_caption": "Flyboard",
        "best_price": "Bester Preis pro Person",
        "your_favourite_trip": "Ihre Lieblingsreise!",
        "fly_board_details_1": "• Flyboard (15 Min, in der Luft)",
        "fly_board_details_2": "• Schwimmweste",
        "fly_board_details_3": "• Schnellboot",
        "book_now": "Jetzt buchen",

        "in_water_title": "Im Wasser",

        "banana_boat_title": "Banana Boot",
        "banana_boat_details_1": "• Dauer: 15 Min",
        "banana_boat_details_2": "• Schwimmweste",
        "banana_boat_details_3": "• 10 EUROS p. P. wenn Sie 3 sind",
        "sofa_bed_title": "Sofa-Bett",
        "sofa_bed_details_1": "• Dauer: 15 Min",
        "sofa_bed_details_2": "• Schwimmweste",
        "sofa_bed_details_3": "• 10 EUROS p. P. wenn Sie 3 sind",
        "diving_title": "Tauchen",
        "diving_island_title": "Tauchen + Insel",
        "best_price": "Bester Preis pro Person",
        "favourite_trip": "Ihre Lieblingsreise für Anfänger",
        "duration_15_min": "• Dauer: 15 Min / 1 Tauchgang",
        "snorkelling_equipment": "• 2 Schnorcheln + Ausrüstung",
        "soft_drinks_launch": "• Erfrischungsgetränke + Mittagessen auf dem Boot",
        "book_now": "Jetzt buchen",
        "daily_diving_title": "Tägliches Tauchen",
        "duration_1_hour": "• Dauer: 1 Stunde / Tauchgang",
        "open_water_advanced_title": "Open Water & Advanced Padi Kurs",
        "open_water_diver_course_title": "Open Water Diver Kurs",
        "advanced_diver_course_title": "Fortgeschrittener Taucherkurs",
        "duration_3_days": "• Dauer: 3 Tage",
        "first_pool_beach": "• Erster: Pool + Strand",
        "second_by_boat": "• Zweiter: 2 Tauchgänge mit dem Boot",
        "last_dive_exam": "• Letzter: 1 Tauchgang + Prüfung",
        "including_certificate": "• Inklusive Zertifikat von PADI",
        "book_now": "Jetzt buchen",
        "best_price": "Bester Preis pro Person",
        "your_favourite_trip": "Ihre Lieblingsreise!",
        "private_speed_boat_title": "Privater Schnellboot",
        "hours_with_boat": "• 3 Stunden mit dem Boot",
        "snorkelling_equipments": "• Schnorcheln + Ausrüstung",
        "soft_drinks_fruit": "• Erfrischungsgetränke + Obst auf dem Boot",
        "dolphin_house": "• Delfinhaus",
        "book_now": "Jetzt buchen",
        "best_price": "Bester Preis pro Person",
        "your_favourite_trip": "Ihre Lieblingsreise!",
        "more_details": "Weitere Details",
        "full_description": "Vollständige Beschreibung",
        "day_dives": "1 Tag – 2 Tauchgänge",
        "explore_red_sea": "Entdecken Sie die Schönheit des Roten Meeres und lassen Sie sich von seiner wunderbaren Meereswelt begeistern.",
        "tour_details": "Tourdetails",
        "tour_day_description": "Ein Tag an Bord mit zwei Tauchgängen mit einem Tauchguide. Zeit für das Mittagessen zwischen den Tauchgängen. Es ist möglich, Tauchgeräte zu mieten.",
        "highlights": "Höhepunkte",
        "dolphin_house_dive_site": "Dolphin-Haus-Tauchplatz",
        "includes": "Inklusive",
        "food_beverages": "Essen und Getränke an Bord: Mittagessen, Kaffee, Tee, Wasser & Erfrischungsgetränke sind kostenlos",
        "dive_instructor": "Tauchlehrer",
        "transfer_hotel": "Transfer von/zum Hotel ist kostenlos",
        "excludes": "Nicht enthalten",
        "dive_equipment_rental": "Miete von Tauchausrüstung: 15 €",
        "equipment": "Ausrüstung",
        "diving_mask": "Tauchermaske (Sicherheitsglas, kein Kunststoff) mit Schnorchel",
        "fins": "Flossen (geschlossen oder offene Ferse mit Stiefel)",
        "bcd": "Auftriebskontrollgerät (BCD) mit Druckinflator",
        "regulator": "Regler mit Unterwasserdruckmesser (SPG)",
        "compass_signal_tube": "Kompass und ein aufblasbares Signaltube (oder DSMB)",
        "exposure_suit": "Tauchanzug (abhängig von der Wassertemperatur)",
        "weights": "Gewichte",
        "weight_belt": "Gürtel",
        "aluminium_tank": "Aluminium-Tauchflasche",
        "course_overview": "KURSÜBERSICHT",
        "scuba_diving_lessons": "Wenn Sie schon immer Tauchunterricht nehmen und ein unvergleichliches Abenteuer erleben wollten, dann fangen Sie hier an. Holen Sie sich Ihre Tauchzertifizierung mit dem PADI Open Water Diver Kurs – dem weltweit beliebtesten und anerkanntesten Tauchkurs.",
        "millions_scuba_divers": "Millionen von Menschen haben das Tauchen gelernt und die Wunder der aquatischen Welt durch diesen Kurs entdeckt. Der PADI Open Water Diver Kurs besteht aus drei Hauptphasen: der Wissensentwicklung, den eingeschränkten Tauchgängen, um grundlegende Tauchfähigkeiten zu erlernen, und den offenen Tauchgängen, um Ihre Fähigkeiten zu nutzen und zu erkunden.",
        "whats_included": "Was ist enthalten",
        "padi_materials": "PADI Kursmaterialien und Zertifizierung",
        "transfer_hurghada": "Transfer von / zu jedem Hotel in Hurghada",
        "full_diving_equipment": "Vollständige Tauchausrüstung",
        "whats_excluded": "Was ist nicht enthalten",
        "transfer_elgouna": "Transfer von / zu jedem Hotel in El Gouna, Sahl Hasheesh, Makadi Bay und Soma Bay 10 € (pro Person/pro Tag)",
        "learning_materials": "Lernmaterialien",
        "choose_material": "Es gibt zwei Optionen, um Ihr eigenes Material in verschiedenen Sprachen auszuwählen:",
        "book_option": "Buch: Das PADI Open Water Diver Manual (Buch, RDP und RDP Manual) und 5 Videos (müssen durch unser Tauchzentrum angesehen werden). Beide müssen vor Abschluss des Kurses abgeschlossen werden.",
        "elearning_option": "eLearning: Das PADI eLearning gibt Ihnen die Möglichkeit, den Kurs online zu beginnen, bevor Sie Ihren Urlaub beginnen. Beginnen Sie mit dem Lesen und Ansehen des Videos, bevor Sie mit dem Tauchen beginnen. Sie können auf Ihr PADI eLearning über die PADI-App oder auf Webbrowsern auf jedem Gerät zugreifen. Unser PADI-Instruktor wird mit Ihnen Zeit planen, um Ihren Fortschritt zu überprüfen und sicherzustellen, dass Sie wichtige Informationen zum Tauchen verstehen.",
        "speed_boat_specifications": "Speedboot-Spezifikationen",
        "speed_boat_description": "Das Speedboot ist ein 9 Meter langes RIB (Rigid Inflatable Boat), das speziell für das Tauchen entwickelt wurde, mit einer maximalen Kapazität von 8 Tauchern. Es ist mit zwei Yamaha 115 PS Motoren ausgestattet, die es uns ermöglichen, Tauchplätze in Hurghada innerhalb von Minuten zu erreichen. Das Boot ist so gebaut, dass es auch durch die rauesten Gewässer stabil bleibt, mit einem leichten Design, das sich den Wellen anpasst und bequem manövriert.",
        "trip_durations": "Halbtägige Speedboot-Tauchfahrten: 1 Tauchgang dauert 2 Stunden - 2 Tauchgänge dauern 4 Stunden - 3 Tauchgänge dauern 6 Stunden",
        "emergency_ready": "Notfallbereit",
        "communication_device": "Kommunikationsgerät",
        "gps": "GPS",
        "life_jackets": "Rettungswesten",
        "first_aid_kit": "Erste-Hilfe-Kasten",
        "oxygen_supply": "100% Sauerstoff",
        "why_dive_speed_boat": "Warum mit einem Speedboot tauchen?",
        "top_dive_sites": "Top-Tauchplätze haben Priorität",
        "fast_trip": "Schnelle Reise (Zeitersparnis)",
        "drift_dive": "Immer mit der Strömung planen (Drift)",
        "citytourhurghada_hurghada": "Hurghada",
        "citytourhurghada_save_on_trip": "Sparen Sie bei Ihrer nächsten Reise mit ALBATROS TRAVEL. Finden Sie tolle Hotel- oder Appartementangebote und buchen Sie in nur wenigen Minuten.",
        "citytourhurghada_card_title": "Hurghada",
        "citytourhurghada_best_price": "Bester Preis pro Person",
        "citytourhurghada_price": "25 EUR",
        "citytourhurghada_guided_tour": "Geführte Tour",
        "citytourhurghada_tour_description": "Hurghada-Stadttour & Nationalmuseum mit Abholung und Rückgabe",
        "citytourhurghada_duration": "• 4 - 5 Stunden",
        "citytourhurghada_small_group": "• Kleine Gruppe",
        "citytourhurghada_round_trip": "• Hin- und Rückfahrt",
        "citytourhurghada_largest_mosque": "• Besuch der größten Moschee",
        "citytourhurghada_largest_church": "• Die größte Kirche",
        "citytourhurghada_old_city": "• Alte Stadt",
        "citytourhurghada_shisha": "• Shisha + 5 EUR extra (eine Art Wasserpfeife)",
        "citytourhurghada_book_now": "Jetzt buchen",
        "citytourhurghada_more_details": "Mehr Details",
        "citytourhurghada_mini_park_title": "Ein Mini Park Ägypten ist ein offener Raum, der Miniaturgebäude und Modelle zeigt.",
        "citytourhurghada_mini_park_description": "Der Mini Egypt Park bietet ein völlig anderes Erlebnis im Vergleich zu einem traditionellen Museum. Dies ist ein fantastischer Ausflug für unsere ausländischen Gäste, der als lebender Katalog für sie fungiert, um die touristischen Attraktionen in Ägypten zu erkennen, was die Auswahl erleichtert, wohin sie gehen möchten. Es ist auch ein fabelhafter Ausflug für Eltern oder Großeltern mit Kindern und eine erweiterte Lernumgebung für Schulen. Dies ist kein Hobby für Kinder, sondern tatsächlich ein Erwachsenenhobby. Im Museum möchten wir, dass Kinder von Erwachsenen begleitet werden, anstatt dass Kinder alleine kommen. Es ist die neue Generation von collegebesuchenden Erwachsenen, die dieses Hobby pflegen sollte, was ihnen im wirklichen Leben von großem Nutzen sein wird. Das Miniaturmuseum ist sehr charmant, und wir sollten seine künstlerische Qualität nicht unterschätzen. Das (neue) Miniaturmuseum umfasst eine Sammlung von 60 Kunstwerken von gut ausgewählten Künstlern. Diese winzigen Werke wurden nicht gekauft; sie sind das Ergebnis jahrelanger Geschenke von Vorfahren. Hinter jedem Kunstwerk steht eine Geschichte, wie es Teil der Sammlung von Mini Egypt wurde, die jetzt an einem Ort im Mini Egypt Park untergebracht ist. Im Mini Egypt Park finden Sie unseren Führer, der Sie auf einer reichen Tour durch dieses große Land in wenigen Stunden begleitet, während Sie von Kairo nach Luxor in wenigen Schritten laufen können! Besuchen Sie den Tempel von Abu Simbel und den Hochdamm in Assuan, passieren Sie den Tempel von Edfu, um zum legendären Luxor zum berühmten Karnak-Tempel zu gelangen, und machen Sie sich auf den Weg nach Gizeh zu den wundersamen Pyramiden und sprechen Sie mit der Sphinx.",
        "citytourhurghada_book_now": "Jetzt buchen",
        "modalhurghadapage_title": "Hurghada Privater Stadtrundgang",
        "modalhurghadapage_intro": "Möchten Sie das echte, originale Hurghada kennenlernen? Möchten Sie die Sehenswürdigkeiten der Stadt besuchen? Sind Sie müde von der Massentourismus und Kaffeeausflügen? Möchten Sie sehen, erstaunt sein und wirklich genießen?",
        "modalhurghadapage_mix": "Wir haben die richtige Mischung für Sie zusammengestellt. Natürlich haben Sie auch die Möglichkeit, Ihre Tour individuell mit uns zu gestalten! Die Hurghada-Stadtrundfahrt mit Memnon Reisen ist fernab vom Massentourismus!",
        "modalhurghadapage_program": "Programm des Hurghada Privater Stadtrundgang",
        "modalhurghadapage_mosque": "Moschee El Mina Masjid",
        "modalhurghadapage_cathedral": "Koptische Kathedrale von Saint Shenouda",
        "modalhurghadapage_fishmarket": "Der Fischmarkt",
        "modalhurghadapage_vegetablemarket": "Der Gemüsemarkt",
        "modalhurghadapage_marina": "Hurghada Marina Boulevard",
        "modalhurghadapage_description": "Beschreibung für Hurghada Privater Stadtrundgang",
        "modalhurghadapage_pickup": "Um 14:00 Uhr holen wir Sie in einem hochwertigen klimatisierten Fahrzeug ab.",
        "modalhurghadapage_firststop": "Der erste Halt bringt Sie direkt zum höchsten Punkt der Stadt. Von hier aus öffnet sich ein schöner Panoramablick auf die gesamte Stadt Hurghada und das Rote Meer.",
        "modalhurghadapage_pier": "Dann fahren wir zum Stadtpier. Lassen Sie sich von den schönen Yachten und der Hafenatmosphäre verzaubern, während Sie gemütlich entlang schlendern. Wir setzen unsere Tour zum Fischmarkt fort. Der nächste Halt ist die älteste Kirche der Stadt, die koptische Kirche, und die größte Meer moschee.",
        "modalhurghadapage_vegetablefruitmarket": "Von dort fahren wir zum Gemüse- und Obstmarkt in der Altstadt. Dann fahren wir zu einem lokalen Café, um Minztee oder ägyptischen Kaffee zu genießen.",
        "modalhurghadapage_specialrequest": "Wenn Sie eine spezielle Anfrage haben, können Sie dies mit unserem Reiseleiter besprechen. Wir werden an allen interessanten Orten anhalten.",
        "modalhurghadapage_backtime": "Um ca. 19:00 Uhr bringen wir Sie zurück zu Ihrem Hotel.",
        "modalhurghadapage_thrilling": "Unsere Tour durch Hurghada wird absolut aufregend sein, und Sie werden viele neue Erfahrungen aus Hurghada mitnehmen.",
        "modalhurghadapage_included_services": "Inklusive Dienstleistungen",
        "modalhurghadapage_pickup_hotel": "Abholung von der Lobby Ihres Hotels",
        "modalhurghadapage_guide": "Englisch sprechender Reiseführer",
        "modalhurghadapage_support": "Kundenservice ist 24/7 verfügbar",
        "modalhurghadapage_insurance": "Versicherung inklusive",
        "modalhurghadapage_prices": "Preise",
        "modalhurghadapage_table_header1": "Anzahl der Personen",
        "modalhurghadapage_table_header2": "Fahrzeug",
        "modalhurghadapage_table_header3": "Preis pro Erwachsenen",
        "modalhurghadapage_price1": "1-2 Personen",
        "modalhurghadapage_vehicle1": "Privatwagen",
        "modalhurghadapage_price_value1": "35 € p.P.",
        "modalhurghadapage_price2": "3-4 Personen",
        "modalhurghadapage_vehicle2": "Privater Kleinbus",
        "modalhurghadapage_price_value2": "24 € p.P.",
        "modalhurghadapage_price3": "5-6 Personen",
        "modalhurghadapage_vehicle3": "Privater Kleinbus",
        "modalhurghadapage_price_value3": "19 € p.P.",
        "modalhurghadapage_price4": "7-8 Personen",
        "modalhurghadapage_vehicle4": "Privater Kleinbus",
        "modalhurghadapage_price_value4": "13 € p.P.",
        "modalhurghadapage_table_duration": "Dauer",
        "modalhurghadapage_table_trip_type": "Reiseart",
        "modalhurghadapage_table_availability": "Verfügbarkeit",
        "modalhurghadapage_table_pickup_time": "Abholzeit",
        "modalhurghadapage_duration": "ca. 6 Stunden",
        "modalhurghadapage_trip_type": "Individuell",
        "modalhurghadapage_availability": "Jeden Tag",
        "modalhurghadapage_pickup_time_value": "um ca. 14:00 Uhr",
        "modalhurghadapage_title": "Privater Stadtrundgang durch Hurghada",
        "modalhurghadapage_intro1": "Möchten Sie das echte, originale Hurghada kennenlernen? Möchten Sie die Sehenswürdigkeiten der Stadt besuchen? Sind Sie müde von Massentourismus und Kaffeeausflügen? Möchten Sie sehen, erstaunt sein und wirklich genießen?",
        "modalhurghadapage_intro2": "Wir haben die richtige Mischung für Sie zusammengestellt. Natürlich haben Sie auch die Möglichkeit, Ihre Tour individuell mit uns zu gestalten! Die Stadtrundfahrt in Hurghada mit Memnon Reisen ist abseits des Massentourismus!",
        "modalhurghadapage_program_title": "Programm des privaten Stadtrundgangs durch Hurghada",
        "modalhurghadapage_program_mosque": "Moschee El Mina Masjid",
        "modalhurghadapage_program_church": "Koptische Kathedrale von Saint Shenouda",
        "modalhurghadapage_program_fish_market": "Der Fischmarkt",
        "modalhurghadapage_program_vegetable_market": "Der Gemüsemarkt",
        "modalhurghadapage_program_marina": "Hurghada Marina Boulevard",
        "modalhurghadapage_description_title": "Beschreibung für den privaten Stadtrundgang durch Hurghada",
        "modalhurghadapage_description_intro1": "Um 14:00 Uhr holen wir Sie in einem qualitativ hochwertigen, klimatisierten Fahrzeug von Ihrem Hotel ab.",
        "modalhurghadapage_description_intro2": "Der erste Halt führt Sie direkt zum höchsten Punkt der Stadt. Von hier aus eröffnet sich ein wunderschöner Panoramablick über die gesamte Stadt Hurghada und das Rote Meer.",
        "modalhurghadapage_description_intro3": "Dann fahren wir zum Stadtpier. Lassen Sie sich von den schönen Yachten und der Hafenatmosphäre verzaubern, während Sie entlang einer gemütlichen Stippvisite segeln. Wir setzen unsere Tour zum Fischmarkt fort. Der nächste Halt ist die älteste Kirche der Stadt, die koptische Kirche und die größte Meeresmosschee.",
        "modalhurghadapage_description_intro4": "Von dort fahren wir zum Gemüse- und Obstmarkt in der Altstadt. Danach fahren wir zu einem lokalen Café, um Minztee oder ägyptischen Kaffee zu genießen.",
        "modalhurghadapage_description_request": "Wenn Sie einen speziellen Wunsch haben, können Sie dies mit unserem Reiseführer besprechen. Wir halten an allen interessanten Orten an.",
        "modalhurghadapage_description_return_time": "Gegen 19:00 Uhr bringen wir Sie zurück zu Ihrem Hotel.",
        "modalhurghadapage_description_experience": "Unsere Tour durch Hurghada wird absolut aufregend sein und Sie werden viele neue Erfahrungen aus Hurghada mitnehmen.",
        "modalhurghadapage_included_services_title": "Inklusive Leistungen",
        "modalhurghadapage_included_services_pickup": "Abholung in der Lobby Ihres Hotels",
        "modalhurghadapage_included_services_guide": "Englischsprachiger Reiseführer",
        "modalhurghadapage_included_services_support": "Kundenbetreuung ist rund um die Uhr verfügbar",
        "modalhurghadapage_included_services_insurance": "Versicherung inklusive",
        "modalhurghadapage_prices_title": "Preise",
        "modalhurghadapage_prices_num_people": "Anzahl der Personen",
        "modalhurghadapage_prices_vehicle": "Fahrzeug",
        "modalhurghadapage_prices_price": "Preis pro Erwachsenem",
        "modalhurghadapage_duration": "ca. 6 Stunden",
        "modalhurghadapage_trip_type": "Individuell",
        "modalhurghadapage_availability": "Jeden Tag",
        "modalhurghadapage_pickup_time": "gegen 14:00 Uhr",
        "modalhurghadapage_prices_title": "Preise",
        "modalhurghadapage_prices_num_people": "Anzahl der Personen",
        "modalhurghadapage_prices_vehicle": "Fahrzeug",
        "modalhurghadapage_prices_price": "Preis pro Erwachsenem",
        "modalhurghadapage_duration": "Dauer",
        "modalhurghadapage_trip_type": "Reiseart",
        "modalhurghadapage_availability": "Verfügbarkeit",
        "modalhurghadapage_pickup_time": "Abholzeit",


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

const form = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

// Fetch comments when the page loads
document.addEventListener('DOMContentLoaded', fetchComments);

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Send data to MongoDB
    const response = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, userEmail, comment })
    });

    if (response.ok) {
        // Handle successful submission
        console.log('Comment submitted successfully!');
        // Clear the form fields
        form.reset();
        // Fetch comments again to update the list
        fetchComments();
    } else {
        // Handle error
        console.error('Error submitting comment:', response.statusText);
    }
});

async function fetchComments() {
    try {
        const response = await fetch('http://localhost:3000/comments');

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log(data); // Log the response to confirm structure

        // Check if data has the 'comments' property and if it's an array
        if (data && Array.isArray(data.comments)) {
            // Clear current comments
            commentsList.innerHTML = '';
            // Display each comment
            data.comments.forEach((comment) => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'card mb-2';
                commentDiv.innerHTML = `
                    <div class="card-body">
                        <h6 class="card-title">${comment.userName} (${comment.userEmail})</h6>
                        <p class="card-text">${comment.comment}</p>
                    </div>
                `;
                commentsList.appendChild(commentDiv);
            });
        } else {
            console.error('Expected an array of comments, but received:', data);
        }
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}
