const shishas = [
    { 
        name: "African Queen", category: "Modern", intensity: 3, 
        aromen: ["Mango", "Maracuja", "Vanille"],
        pairing: "Aperol Spritz · Hugo",
        shortDesc: { de: "Exotischer Mix aus Mango, Maracuja & Vanille.", en: "Exotic mix of mango, passion fruit & vanilla.", tr: "Mango, marakuja ve vanilyadan oluşan egzotik karışım.", es: "Mezcla exótica de mango, maracuyá y vainilla.", ar: "مزيج غريب من المانجو وفاكهة العاطفة والفانيليا." },
        glow: "#e8820a", emoji: "🥭", gradient: "linear-gradient(135deg, #2a1500 0%, #1a0a00 100%)",
        flavors: ["Mango", "Maracuja", "Vanille", "Exotisch"],
        img: "AfricanQueenCardHochkant.png",
        previewImg: "AfricanQueenBreit.png"
    },
    { 
        name: "Traube Minze", category: "Traditionell", intensity: 3, 
        aromen: ["Dunkle Traube", "Minze", "Kühlend"],
        pairing: "Mojito · Wasser",
        shortDesc: { de: "Dunkle Traube mit kühler Minze.", en: "Dark grape with cool mint.", tr: "Serin naneyle koyu üzüm.", es: "Uva oscura con menta fresca.", ar: "عنب داكن مع نعناع منعش." },
        glow: "#6b21a8", emoji: "🍇", gradient: "linear-gradient(135deg, #1a0a2e 0%, #0d1b3e 100%)",
        flavors: ["Traube", "Minze", "Frisch"],
        img: "TraubeMinzeCardHochkant.png",
        previewImg: "ShishaBreitTraubeMinze.png"
    },
    { 
        name: "Doppelapfel", category: "Traditionell", intensity: 4, 
        aromen: ["Roter Apfel", "Anis", "Klassisch"],
        pairing: "Schwarzer Tee · Cola",
        shortDesc: { de: "Würziger Anis-Apfel-Mix.", en: "Spicy anise-apple mix.", tr: "Baharatlı anason-elma karışımı.", es: "Mezcla picante de anís y manzana.", ar: "مزيج التفاح واليانسون الحار." },
        glow: "#991b1b", emoji: "🍎", gradient: "linear-gradient(135deg, #2a0a0a 0%, #1a0808 100%)",
        flavors: ["Apfel", "Anis", "Traditionell"],
        img: "DoppeltApfelCardHochkant.png",
        previewImg: "ShishaBreitDoppelApfel.png"
    },
    { 
        name: "Kaugummi Minze", category: "Traditionell", intensity: 2, 
        aromen: ["Kaugummi", "Frische Minze", "Süß"],
        pairing: "Sprite · Fanta",
        shortDesc: { de: "Süßer Kaugummi mit frischer Minze.", en: "Sweet gum with fresh mint.", tr: "Taze naneyle tatlı sakız.", es: "Chicle dulce con menta fresca.", ar: "علكة حلوة مع نعناع طازج." },
        glow: "#0ea5e9", emoji: "🍬", gradient: "linear-gradient(135deg, #082f49 0%, #0c4a6e 100%)",
        flavors: ["Süß", "Minze", "Frisch"],
        img: "KaugummiMinzeCardHochkant.png",
        previewImg: "KaugummiMinzeDoppelApfel.png"
    },
    { 
        name: "Blaulicht", category: "Modern", intensity: 5, 
        aromen: ["Blaubeere", "Menthol", "Eis"],
        pairing: "Wasser · Red Bull",
        shortDesc: { de: "Blaubeer-Ice mit starkem Menthol.", en: "Blueberry ice with strong menthol.", tr: "Güçlü mentollü yaban mersini buzu.", es: "Hielo de arándano con mentol intenso.", ar: "ثلج التوت الأزرق مع النعناع القوي." },
        glow: "#1d4ed8", emoji: "🫐", gradient: "linear-gradient(135deg, #000d1a 0%, #001a1a 100%)",
        flavors: ["Blaubeere", "Menthol", "Kühl"],
        img: "BlaulichtCardHochkant.png",
        previewImg: "BalulichtBreit.png"
    },
    { 
        name: "Mango Tango", category: "Modern", intensity: 2, 
        aromen: ["Mango", "Zitrus", "Tropisch"],
        pairing: "Hugo · Aperol",
        shortDesc: { de: "Reife Mango trifft auf Maracuja.", en: "Ripe mango meets passion fruit.", tr: "Olgun mango, marakujayla buluşuyor.", es: "El mango maduro se encuentra con la maracuyá.", ar: "المانجو الناضجة تلتقي بفاكهة العاطفة." },
        glow: "#d97706", emoji: "🥭", gradient: "linear-gradient(135deg, #1a0800 0%, #0d0500 100%)",
        flavors: ["Mango", "Maracuja", "Fruchtig"],
        img: "MangoTangoHochkant.png",
        previewImg: "MagoTangoBreit.png"
    },
    { 
        name: "Watermelon Ice", category: "Modern", intensity: 2, 
        aromen: ["Wassermelone", "Eis", "Frisch"],
        pairing: "Sprite · Wasser",
        shortDesc: { de: "Süße Wassermelone trifft auf frische Minze.", en: "Sweet watermelon meets fresh mint.", tr: "Tatlı karpuz taze naneyle buluşuyor.", es: "La sandía dulce se encuentra con la menta fresca.", ar: "البطيخ الحلو يلتقي بالنعناع الطازج." },
        glow: "#16a34a", emoji: "🍉", gradient: "linear-gradient(135deg, #0a1a08 0%, #1a0808 100%)",
        flavors: ["Wassermelone", "Minze", "Frisch"],
        img: "WatermelonIceHochkant.png",
        previewImg: "WatermeloniceBreit.png"
    },
    { 
        name: "Sternstaub", category: "Modern", intensity: 2, 
        aromen: ["Pfirsich", "Aprikose", "Kokos"],
        pairing: "Rosé · Hugo",
        shortDesc: { de: "Reife Früchte mit süßem Abgang.", en: "Ripe fruits with a sweet finish.", tr: "Tatlı bitiş notasıyla olgun meyveler.", es: "Frutas maduras con un dulce final.", ar: "فواكه ناضجة بلمسة نهائية حلوة." },
        glow: "#d4a017", emoji: "✨", gradient: "linear-gradient(135deg, #2a1a00 0%, #1a0d00 100%)",
        flavors: ["Früchte", "Süß", "Mild"],
        img: "SternStaubHochkant.png",
        previewImg: "SternstaubBreit.png"
    },
    {
        name: "Bonnie 'n Clyde", category: "Modern", intensity: 3,
        aromen: ["Wassermelone", "Kaugummi", "Frisch"],
        pairing: "Sprite · Hugo",
        shortDesc: { de: "Süße Wassermelone trifft auf Kaugummi.", en: "Sweet watermelon meets bubblegum.", tr: "Tatlı karpuz sakızla buluşuyor.", es: "Sandía dulce con chicle.", ar: "بطيخ حلو مع علكة." },
        glow: "#e91e8c", emoji: "🍉", gradient: "linear-gradient(135deg, #2a0018 0%, #1a000f 100%)",
        flavors: ["Wassermelone", "Kaugummi", "Süß"],
        img: "BonnienadClydeBreitKochkant.png",
        previewImg: "BonnienadClydeBreit.png"
    },
    {
        name: "Hamburg", category: "Modern", intensity: 2,
        aromen: ["Apfel", "Beere", "Frisch"],
        pairing: "Fanta · Sprite",
        shortDesc: { de: "Frischer Apfel mit süßen Beeren.", en: "Fresh apple with sweet berries.", tr: "Taze elma ve tatlı meyveler.", es: "Manzana fresca con bayas dulces.", ar: "تفاح طازج مع توت حلو." },
        glow: "#e53935", emoji: "🍎", gradient: "linear-gradient(135deg, #1a0505 0%, #0d0808 100%)",
        flavors: ["Apfel", "Beere", "Frisch"],
        img: "HamburgCardBreit.pngKochkant.png",
        previewImg: "HamburgCardBreit.png"
    },
    {
        name: "Love 66", category: "Modern", intensity: 2,
        aromen: ["Erdbeere", "Vanille", "Süß"],
        pairing: "Hugo · Rosé",
        shortDesc: { de: "Verführerische Erdbeere mit Vanille.", en: "Seductive strawberry with vanilla.", tr: "Büyüleyici çilek ve vanilya.", es: "Fresa seductora con vainilla.", ar: "فراولة ساحرة مع فانيليا." },
        glow: "#e91e63", emoji: "🍓", gradient: "linear-gradient(135deg, #2a0010 0%, #1a0008 100%)",
        flavors: ["Erdbeere", "Vanille", "Süß"],
        img: "Love66BreitKochkant.png",
        previewImg: "Love66Breit.png"
    },
    {
        name: "Zitrone Minze", category: "Modern", intensity: 2,
        aromen: ["Zitrone", "Minze", "Kühlend"],
        pairing: "Wasser · Sprite",
        shortDesc: { de: "Spritzige Zitrone mit kühler Minze.", en: "Zesty lemon with cool mint.", tr: "Ferahlatıcı limon ve serin nane.", es: "Limón refrescante con menta fría.", ar: "ليمون منعش مع نعناع بارد." },
        glow: "#cddc39", emoji: "🍋", gradient: "linear-gradient(135deg, #1a1a00 0%, #0d0d00 100%)",
        flavors: ["Zitrone", "Minze", "Kühl"],
        img: "ZitroneMinzueKochkant.png",
        previewImg: "ZitroneMinnzeCard.png"
    },
    {
        name: "Löwenherz", category: "Traditionell", intensity: 4,
        aromen: ["Roter Apfel", "Minze", "Stark"],
        pairing: "Cola · Schwarzer Tee",
        shortDesc: { de: "Kräftiger Apfel mit starker Minze.", en: "Bold apple with powerful mint.", tr: "Güçlü elma ve kuvvetli nane.", es: "Manzana fuerte con menta intensa.", ar: "تفاح قوي مع نعناع مكثف." },
        glow: "#ffc107", emoji: "🦁", gradient: "linear-gradient(135deg, #1a1000 0%, #0d0800 100%)",
        flavors: ["Apfel", "Minze", "Stark"],
        img: "ShishaLöwenHerzlKochkant.png",
        previewImg: "Löwenherzbreitcard.png"
    },
    {
        name: "Persischer Apfel", category: "Traditionell", intensity: 3,
        aromen: ["Apfel", "Rose", "Exotisch"],
        pairing: "Schwarzer Tee · Ayran",
        shortDesc: { de: "Klassischer Apfel mit Rosenaroma.", en: "Classic apple with rose aroma.", tr: "Klasik elma ve gül aroması.", es: "Manzana clásica con aroma a rosa.", ar: "تفاح كلاسيكي بعطر الورد." },
        glow: "#ff7043", emoji: "🍏", gradient: "linear-gradient(135deg, #1a0800 0%, #0d0400 100%)",
        flavors: ["Apfel", "Rose", "Traditionell"],
        img: "ShishaPerrsicherApfelKochkant.png",
        previewImg: "perrsicherapfelbreitcard.png"
    }
];

const translations = {
    de: {
        head_title: "Brookah Lounge | Shisha & Bar in Gaildorf",
        nav_home: "Home", nav_shisha: "Shisha", nav_drinks: "Getränke", nav_hours: "Öffnungszeiten", nav_insta: "Instagram",
        hero_subtitle: "Café · Bar · Lounge · Gaildorf", hero_tagline: "Wo der Abend beginnt.", hero_btn: "Shisha entdecken", scroll: "Scroll",
        info_hours_title: "Öffnungszeiten", info_hours_desc: "Täglich ab 17:00 Uhr geöffnet",
        info_address_title: "Adresse", info_contact_title: "Kontakt", info_contact_desc: "Reservierung via Instagram",
        shisha_title: "Unsere Shisha-Karte", shisha_subtitle: "Premium Tabak, perfekte Köpfe. Erlebe Geschmack auf höchstem Niveau.",
        filter_all: "Alle", filter_fruity: "Modern", filter_mint: "Traditionell",
        filter_strength: "Stärke", filter_flavor: "Geschmack",
        strength_mild: "Mild", strength_medium: "Mittel", strength_strong: "Stark",
        flavor_all: "Alle Aromen", flavor_fruity: "Fruchtig", flavor_fresh: "Frisch", flavor_sweet: "Süß", flavor_cool: "Kühl", flavor_exotic: "Exotisch", flavor_citrus: "Zitrus",
        drinks_title: "Getränkekarte", drinks_subtitle: "Erfrischend, klassisch oder kreativ gemixt.",
        tab_cocktails: "Cocktails", tab_softdrinks: "Softdrinks", tab_hot: "Heißgetränke", tab_beer: "Bier", tab_mixed: "Longdrinks", tab_shots: "Shots", tab_bottles: "Flaschen",
        hours_title: "Öffnungszeiten",
        snacks_title: "Baguettes & Snacks", snacks_subtitle: "Für den kleinen Hunger.",
        day_mon: "Montag", day_tue: "Dienstag", day_wed: "Mittwoch", day_thu: "Donnerstag", day_fri: "Freitag", day_sat: "Samstag", day_sun: "Sonntag",
        contact_title: "Anfahrt & Kontakt", btn_route: "Route planen", btn_whatsapp: "Reservierung via Instagram",
        insta_subtitle: "Folg uns auf Instagram für aktuelle Specials und Events", btn_follow: "Folgen",
        footer_slogan: "Wo der Abend beginnt.", footer_imprint: "Impressum", footer_privacy: "Datenschutz",
        modal_intensity: "Intensität", modal_recommendation: "Getränke-Empfehlung", modal_badge: "Kategorie",
        intensity_1: "Sehr Mild", intensity_2: "Mild", intensity_3: "Mittel", intensity_4: "Kräftig", intensity_5: "Intensiv",
        lang_cat_modern: "Modern", lang_cat_traditionell: "Traditionell",
        social_label: "SOCIAL", social_title: "INSTAGRAM", social_desc: "Eindrücke und Specials direkt auf dein Smartphone.", social_follow: "FOLLOW US",
        info_hours_title: "Öffnungszeiten", info_hours_desc: "Jeden Tag geöffnet von 17 Uhr",
        info_address_title: "Adresse",
        head_brand: "BROOKAH",
        shisha_price_label: "je 15,00 €",
        feat_1_title: "Premium Shishas", feat_1_desc: "Über 30 exklusive Sorten und perfekt vorbereitete Köpfe.",
        feat_2_title: "Signature Drinks", feat_2_desc: "Von Klassikern bis zu unseren eigenen Kreationen.",
        feat_3_title: "Ambiente", feat_3_desc: "Modernes Design trifft auf gemütliche Lounge-Atmosphäre.",
        feat_4_title: "VIP Reservierung", feat_4_desc: "Sichere dir deinen Platz exklusiv über Instagram.",
        feat_1_btn: "MENÜ ANSEHEN", feat_2_btn: "ZUR KARTE", feat_3_btn: "GALERIE ANSEHEN", feat_4_btn: "JETZT RESERVIEREN",
        contact_address: "Karlstraße 12, 74405 Gaildorf",
        btn_more: "MEHR ANZEIGEN",
        newsletter_title: "NEWSLETTER",
        newsletter_subtitle: "Erhalte exklusive Angebote, Event-Updates und deinen persönlichen Geburtstags-Rabatt.",
        btn_subscribe: "ABONNIEREN", btn_vip: "ABONNIEREN",
        newsletter_success: "Erfolgreich zum Newsletter angemeldet.",
        rec_title: "Unsere Empfehlung für dich",
        modal_recommendation_header: "Empfehlung",
        btn_reroll: "NOCHMAL"
    },
    en: {
        head_title: "Brookah Lounge | Shisha & Bar in Gaildorf",
        nav_home: "Home", nav_shisha: "Shisha", nav_drinks: "Drinks", nav_hours: "Opening Hours", nav_insta: "Instagram",
        hero_subtitle: "Café · Bar · Lounge · Gaildorf", hero_tagline: "Where the evening begins.", hero_btn: "Discover Hookah", scroll: "Scroll",
        info_hours_title: "Opening Hours", info_hours_desc: "Open daily from 17:00",
        info_address_title: "Address", info_contact_title: "Contact", info_contact_desc: "Bookings via Instagram",
        shisha_title: "Our Hookah Menu", shisha_subtitle: "Experience flavor at the highest level.",
        filter_all: "All", filter_fruity: "Modern", filter_mint: "Traditional",
        filter_strength: "Strength", filter_flavor: "Flavor",
        strength_mild: "Mild", strength_medium: "Medium", strength_strong: "Strong",
        flavor_all: "All Flavors", flavor_fruity: "Fruity", flavor_fresh: "Fresh", flavor_sweet: "Sweet", flavor_cool: "Cool", flavor_exotic: "Exotic", flavor_citrus: "Citrus",
        drinks_title: "Beverages", drinks_subtitle: "Refreshing, classic, or creatively mixed.",
        tab_cocktails: "Cocktails", tab_softdrinks: "Soft Drinks", tab_hot: "Hot Drinks", tab_beer: "Beer", tab_mixed: "Longdrinks", tab_shots: "Shots", tab_bottles: "Bottles",
        hours_title: "Opening Hours",
        snacks_title: "Baguettes & Snacks", snacks_subtitle: "For your appetite.",
        day_mon: "Monday", day_tue: "Tuesday", day_wed: "Wednesday", day_thu: "Thursday", day_fri: "Friday", day_sat: "Saturday", day_sun: "Sunday",
        contact_title: "Contact", btn_route: "Get Directions", btn_whatsapp: "Book via Instagram",
        insta_subtitle: "Follow us on Instagram", btn_follow: "Follow",
        footer_slogan: "Where the evening beings.", footer_imprint: "Imprint", footer_privacy: "Privacy",
        modal_intensity: "Intensity", modal_recommendation: "Drink Pairing", modal_badge: "Category",
        intensity_1: "Very Mild", intensity_2: "Mild", intensity_3: "Medium", intensity_4: "Strong", intensity_5: "Intense",
        lang_cat_modern: "Modern", lang_cat_traditionell: "Traditional",
        social_label: "SOCIAL", social_title: "INSTAGRAM", social_desc: "Impressions and specials directly on your smartphone.", social_follow: "FOLLOW US",
        head_brand: "BROOKAH",
        shisha_price_label: "15,00 € each",
        feat_1_title: "Premium Hookahs", feat_1_desc: "Over 30 exclusive blends and perfectly prepared bowls.",
        feat_2_title: "Signature Drinks", feat_2_desc: "From classics to our own unique creations.",
        feat_3_title: "Modern Ambiance", feat_3_desc: "Elegant design meets cozy lounge vibes.",
        feat_4_title: "VIP Booking", feat_4_desc: "Secure your spot exclusively via Instagram.",
        feat_1_btn: "VIEW MENU", feat_2_btn: "VIEW LIST", feat_3_btn: "VIEW GALLERY", feat_4_btn: "BOOK NOW",
        contact_address: "Karlstraße 12, 74405 Gaildorf",
        btn_more: "SHOW MORE",
        newsletter_title: "NEWSLETTER",
        newsletter_subtitle: "Get exclusive offers, event updates and your personal birthday discount.",
        btn_subscribe: "SUBSCRIBE", btn_vip: "SUBSCRIBE",
        newsletter_success: "Successfully subscribed to the newsletter.",
        rec_title: "Recommended For You",
        modal_recommendation_header: "Recommendation",
        btn_reroll: "RETRY",
        filter_fruity_pill: "MODERN",
        filter_mint_pill: "TRADITIONAL",
        filter_mild: "MILD",
        filter_strong: "STRONG",
        filter_exotic: "EXOTIC",
        filter_recommendation: "RECOMMENDATION",
        btn_skip_to_drinks: "Directly to Drinks",
        hero_btn_shisha: "Shisha Menu"
    },
    tr: {
        head_title: "Brookah Lounge | Shisha & Bar in Gaildorf",
        nav_home: "Ana Sayfa", nav_shisha: "Nargile", nav_drinks: "İçecekler", nav_hours: "Çalışma Saatleri", nav_insta: "Instagram",
        hero_subtitle: "Kafe · Bar · Lounge · Gaildorf", hero_tagline: "Akşamın başladığı yer.", hero_btn: "Nargileleri Keşfet", scroll: "Kaydır",
        info_hours_title: "Açılış Saatleri", info_hours_desc: "Her gün 17:00'den itibaren açık",
        info_address_title: "Adres", info_contact_title: "İletişim", info_contact_desc: "Instagram üzerinden rezervasyon",
        shisha_title: "Nargile Menümüz", shisha_subtitle: "Premium tütün, mükemmel lüleler. En üst düzey lezzeti deneyimleyin.",
        filter_all: "Hepsi", filter_strength: "Sertlik", filter_flavor: "Aroma",
        strength_mild: "Hafif", strength_medium: "Orta", strength_strong: "Sert",
        flavor_all: "Tüm Aromalar", flavor_fruity: "Meyveli", flavor_fresh: "Taze", flavor_sweet: "Tatlı", flavor_cool: "Soğuk", flavor_exotic: "Egzotik", flavor_citrus: "Narenciye",
        drinks_title: "İçecek Menüsü", drinks_subtitle: "Ferahlatıcı, klasik veya yaratıcı karışımlar.",
        tab_cocktails: "Kokteyller", tab_softdrinks: "Soğuk İçecekler", tab_hot: "Sıcak İçecekler", tab_beer: "Bira", tab_mixed: "Longdrinkler", tab_shots: "Shotlar", tab_bottles: "Şişeler",
        hours_title: "Çalışma Saatleri",
        snacks_title: "Baguetteler & Atıştırmalıklar", snacks_subtitle: "Küçük bir açlık için.",
        day_mon: "Pazartesi", day_tue: "Salı", day_wed: "Çarşamba", day_thu: "Perşembe", day_fri: "Cuma", day_sat: "Cumartesi", day_sun: "Pazar",
        contact_title: "İletişim", btn_route: "Yol Tarifi Al", btn_whatsapp: "Instagram ile Rezervasyon",
        insta_subtitle: "Bizi takip et", btn_follow: "Takip Et",
        footer_slogan: "Akşamın başladığı yer.", footer_imprint: "Künye", footer_privacy: "Gizlilik",
        modal_intensity: "Yoğunluk", modal_recommendation: "İçecek Önerisi", modal_badge: "Kategori",
        intensity_1: "Çok Hafif", intensity_2: "Hafif", intensity_3: "Orta", intensity_4: "Sert", intensity_5: "Çok Sert",
        lang_cat_modern: "Modern", lang_cat_traditionell: "Geleneksel",
        social_label: "SOSYAL", social_title: "INSTAGRAM", social_desc: "Bizi Instagram'dan takip edin.", social_follow: "TAKİP ET",
        head_brand: "BROOKAH",
        shisha_price_label: "her biri 15,00 €",
        feat_1_title: "Premium Nargileler", feat_1_desc: "30'dan fazla özel çeşit ve mükemmel hazırlanmış lüleler.",
        feat_2_title: "İmza İçecekler", feat_2_desc: "Klasiklerden kendi özel kreasyonlarımıza kadar.",
        feat_3_title: "Modern Ambiyans", feat_3_desc: "Zarif tasarım rahat lounge atmosferiyle buluşuyor.",
        feat_4_title: "VIP Rezervasyon", feat_4_desc: "Instagram üzerinden yerinizi ayırtın.",
        feat_1_btn: "MENÜYÜ GÖR", feat_2_btn: "LİSTEYİ GÖR", feat_3_btn: "GALERİYİ GÖR", feat_4_btn: "ŞİMDİ REZERVASYON YAP",
        filter_category: "Kategori", contact_name: "Brookah Lounge", contact_address_label: "Karlstraße 12, 74405 Gaildorf",
        btn_more: "DAHA FAZLA GÖSTER",
        newsletter_title: "BÜLTEN",
        newsletter_subtitle: "Özel teklifler, etkinlik güncellemeleri ve kişisel doğum günü indiriminizden haberdar olun.",
        btn_subscribe: "ABONE OL", btn_vip: "ABONE OL",
        newsletter_success: "Bültene başarıyla kaydoldunuz.",
        rec_title: "Sizin İçin Önerimiz",
        modal_recommendation_header: "Öneri",
        btn_reroll: "YENİDEN"
    },
    es: {
        head_title: "Brookah Lounge | Shisha & Bar in Gaildorf",
        nav_home: "Inicio", nav_shisha: "Shisha", nav_drinks: "Bebidas", nav_hours: "Horario", nav_insta: "Instagram",
        hero_subtitle: "Café · Bar · Lounge · Gaildorf", hero_tagline: "Donde empieza la noche.", hero_btn: "Descubrir Shisha", scroll: "Desplazar",
        info_hours_title: "Horario", info_hours_desc: "Abierto todos los días desde las 17:00",
        info_address_title: "Dirección", info_contact_title: "Contacto", info_contact_desc: "Reservas por Instagram",
        filter_all: "Todo", filter_strength: "Fuerza", filter_flavor: "Sabor",
        strength_mild: "Suave", strength_medium: "Medio", strength_strong: "Fuerte",
        flavor_all: "Todos los sabores", flavor_fruity: "Frutal", flavor_fresh: "Fresco", flavor_sweet: "Dulce", flavor_cool: "Frío", flavor_exotic: "Exótico", flavor_citrus: "Cítrico",
        tab_cocktails: "Cócteles", tab_softdrinks: "Refrescos", tab_hot: "Bebidas Calientes", tab_beer: "Cerveza", tab_mixed: "Combinados", tab_shots: "Chupitos", tab_bottles: "Botellas",
        hours_title: "Horario de Apertura",
        snacks_title: "Baguettes & Snacks", snacks_subtitle: "Para el hambre.",
        day_mon: "Lunes", day_tue: "Martes", day_wed: "Miércoles", day_thu: "Jueves", day_fri: "Viernes", day_sat: "Sábado", day_sun: "Domingo",
        contact_title: "Contacto", btn_route: "Ver Ruta", btn_whatsapp: "Reservas por Instagram",
        insta_subtitle: "Síguenos en Instagram", btn_follow: "Seguir",
        footer_slogan: "Donde empieza la noche.", footer_imprint: "Aviso Legal", footer_privacy: "Privacidad",
        modal_intensity: "Intensidad", modal_recommendation: "Maridaje", modal_badge: "Categoría",
        intensity_1: "Muy Suave", intensity_2: "Suave", intensity_3: "Medio", intensity_4: "Fuerte", intensity_5: "Intenso",
        lang_cat_modern: "Moderno", lang_cat_traditionell: "Tradicional",
        social_label: "SOCIAL", social_title: "INSTAGRAM", social_desc: "Síguenos en Instagram.", social_follow: "FOLLOW US",
        head_brand: "BROOKAH",
        shisha_price_label: "15,00 € cada uno",
        feat_1_title: "Shishas Premium", feat_1_desc: "Más de 30 variedades exclusivas y cazoletas perfectas.",
        feat_2_title: "Bebidas de Autor", feat_2_desc: "Desde clásicos hasta nuestras propias creaciones.",
        feat_3_title: "Ambiente Moderno", feat_3_desc: "Diseño elegante en una atmósfera acogedora.",
        feat_4_title: "Reserva VIP", feat_4_desc: "Asegura tu lugar a través de Instagram.",
        feat_1_btn: "VER MENÚ", feat_2_btn: "VER CARTA", feat_3_btn: "VER GALERÍA", feat_4_btn: "RESERVAR AHORA",
        filter_category: "Categoría", contact_name: "Brookah Lounge", contact_address_label: "Karlstraße 12, 74405 Gaildorf",
        filter_fruity_pill: "MODERNO",
        filter_mint_pill: "TRADICIONAL",
        filter_mild: "SUAVE",
        filter_strong: "FUERTE",
        filter_exotic: "EXÓTICO",
        filter_recommendation: "RECOMENDACIÓN",
        btn_skip_to_drinks: "Directo a Bebidas",
        hero_btn_shisha: "Carta de Shishas"
    },
    ar: {
        head_title: "Brookah Lounge | Shisha & Bar in Gaildorf",
        nav_home: "الرئيسية", nav_shisha: "شيشة", nav_drinks: "مشروبات", nav_hours: "ساعات العمل", nav_insta: "إنستغرام",
        hero_subtitle: "مقهى · بار · لاونج · جيلدورف", hero_tagline: "حيث يبدأ المساء.", hero_btn: "اكتشف الشيشة", scroll: "تمرير",
        info_hours_title: "ساعات العمل", info_hours_desc: "مفتوح يومياً من الساعة 17:00",
        info_address_title: "العنوان", info_contact_title: "اتصل بنا", info_contact_desc: "الحجز عبر إنستغرام",
        filter_all: "الكل", filter_strength: "القوة", filter_flavor: "النكهة",
        strength_mild: "خفيف", strength_medium: "متوسط", strength_strong: "قوي",
        flavor_all: "جميع النكهات", flavor_fruity: "فاكهي", flavor_fresh: "منعش", flavor_sweet: "حلو", flavor_cool: "بارد", flavor_exotic: "غريب", flavor_citrus: "حمضيات",
        tab_cocktails: "كوكتيلات", tab_softdrinks: "مشروبات غازية", tab_hot: "مشروبات ساخنة", tab_beer: "بيرة", tab_mixed: "لونغ درينك", tab_shots: "شوتس", tab_bottles: "زجاجات",
        hours_title: "ساعات العمل",
        snacks_title: "باغيت و وجبات خفيفة", snacks_subtitle: "للجوع الصغير.",
        day_mon: "الاثنين", day_tue: "الثلاثاء", day_wed: "الأربعاء", day_thu: "الخميس", day_fri: "الجمعة", day_sat: "السبت", day_sun: "الأحد",
        contact_title: "اتصل بنا", btn_route: "الاتجاهات", btn_whatsapp: "الحجز عبر إنستغرام",
        insta_subtitle: "تابعنا على إنستغرام", btn_follow: "متابعة",
        footer_slogan: "حيث يبدأ المساء.", footer_imprint: "بصمة", footer_privacy: "سياسة الخصوصية",
        modal_intensity: "الكثافة", modal_recommendation: "مشروب مقترح", modal_badge: "فئة",
        intensity_1: "خفيف جداً", intensity_2: "خفيف", intensity_3: "متوسط", intensity_4: "قوي", intensity_5: "مكثف",
        lang_cat_modern: "عصري", lang_cat_traditionell: "تقليدي",
        social_label: "اجتماعي", social_title: "إنستغرام", social_desc: "تابعنا على إنستغرام.", social_follow: "FOLLOW US",
        head_brand: "BROOKAH",
        shisha_price_label: "15,00 € لكل منها",
        feat_1_title: "شيشة فاخرة", feat_1_desc: "أكثر von 30 نكهة حصرية ورؤوس معدة بدقة.",
        feat_2_title: "مشروبات مميزة", feat_2_desc: "من الكلاسيكيات إلى ابتكاراتنا الخاصة.",
        feat_3_title: "الأجواء", feat_3_desc: "تصميم عصري يلتقي بأجواء اللاونج المريحة.",
        feat_4_title: "حجز VIP", feat_4_desc: "احجز مكانك حصرياً عبر إنستغرام.",
        feat_1_btn: "عرض القائمة", feat_2_btn: "عرض القائمة", feat_3_btn: "عرض المعرض", feat_4_btn: "احجز الآن",
        filter_category: "فئة", contact_name: "Brookah Lounge", contact_address_label: "Karlstraße 12, 74405 جيلدورف",
        filter_fruity_pill: "عصري",
        filter_mint_pill: "تقليدي",
        filter_mild: "خفيف",
        filter_strong: "قوي",
        filter_exotic: "غريب",
        filter_recommendation: "توصية",
        btn_skip_to_drinks: "مباشرة إلى المشروبات",
        hero_btn_shisha: "قائمة الشيشة"
    }
};

// 5. GLOBAL INITIALIZATION
function init() {
    console.log("Brookah: Initializing...");
    try {
        // 1. Force Reveal critical sections (immediately)
        const revealItems = document.querySelectorAll('#hero, .hero-content, .reveal');
        console.log(`Brookah: Found ${revealItems.length} items to reveal.`);
        revealItems.forEach(el => {
            el.classList.add('active');
        });
        
        // 2. Set Language
        switchLanguage('de');
        
        // 3. Admin Status Check is handled separately via DOMContentLoaded

        // 4. Newsletter Init (Now handled via HTML inline onsubmit)
        // initNewsletter();

        // 5. Mobile Nav Init
        initMobileNav();
        
        // 6. Anti-Zoom Protection (iOS/Android)
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) e.preventDefault();
        }, { passive: false });
        document.addEventListener('gesturestart', (e) => {
            e.preventDefault();
        });

        // 7. Performance: Image Preloading
        initImagePreloading();
    } catch (e) {
        console.error("Brookah: Initialization Error:", e);
        // Emergency Reveal
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }
}


let currentLang = 'de';

// Language Dropdown Logic
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const langOptions = document.querySelectorAll('.lang-option');

if(langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
        document.querySelector('.lang-dropdown').classList.toggle('open');
    });

    document.addEventListener('click', () => {
        langMenu.classList.remove('show');
        document.querySelector('.lang-dropdown').classList.remove('open');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const langCode = e.currentTarget.getAttribute('data-lang');
            const svgImgSrc = e.currentTarget.querySelector('img').getAttribute('src');
            
            document.getElementById('current-lang-code').innerText = langCode.toUpperCase();
            document.getElementById('current-lang-flag').setAttribute('src', svgImgSrc);
            
            switchLanguage(langCode);
        });
    });
}

function switchLanguage(lang) {
    try {
        currentLang = lang;
        const dict = translations[lang];
        if(!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            try {
                const key = el.getAttribute('data-i18n');
                if(dict[key]) {
                    const arrowSpan = el.querySelector('.arrow');
                    if (arrowSpan) {
                        el.innerHTML = `${dict[key]} <span class="arrow">→</span>`;
                    } else {
                        el.innerText = dict[key];
                    }
                }
            } catch (e) {
                console.warn('Error translating element:', el, e);
            }
        });

        if (typeof renderShishas === 'function') {
            renderShishas();
        }
    } catch (err) {
        console.error('Critical error in switchLanguage:', err);
    }
}

// Global script protection
window.onerror = function() {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    return false;
};

// --- Advanced Filter State ---
let activePill = 'all';
let drinkLimit = 6; // Initial limit for drinks per category

// 1. Render Shisha Grid
const shishaGrid = document.getElementById('shisha-grid');

function renderShishas() {
    if (!shishaGrid) return;
    shishaGrid.innerHTML = '';
    
    const filtered = shishas.filter(s => {
        if (activePill === 'all') return true;
        
        // 1. Check Categories
        if (['modern', 'traditional', 'traditionell'].includes(activePill)) {
            const cat = s.category.toLowerCase();
            if (activePill === 'modern') return cat === 'modern';
            if (activePill === 'traditional' || activePill === 'traditionell') return cat === 'traditionell';
        }
        
        // 2. Check Intensity
        if (activePill === 'mild') return s.intensity <= 2;
        if (activePill === 'strong') return s.intensity >= 4;
        
        // 3. Check Flavors/Tags
        const flavorMap = {
            'fruity': ['Fruchtig', 'Mango', 'Maracuja', 'Wassermelone', 'Erdbeere', 'Himbeere', 'Melone', 'Beeren', 'Drachenfrucht', 'Blaubeere', 'Traube', 'Apfel'],
            'mint': ['Minze', 'Menthol', 'Eis', 'Frisch'],
            'traditional': ['Traditionell', 'Doppelapfel', 'Anis', 'Klassisch'],
            'exotic': ['Exotisch', 'Mango', 'Maracuja', 'Drachenfrucht', 'Anis']
        };
        
        const targetFlavors = flavorMap[activePill] || [];
        return s.flavors.some(f => targetFlavors.includes(f));
    });
    
    const dict = translations[currentLang];
    
    filtered.forEach(s => {
        let dotsTemplate = '';
        for(let i=1; i<=5; i++) {
            dotsTemplate += `<div class="dot ${i <= s.intensity ? 'active' : ''}"></div>`;
        }
        let translatedCat = dict['lang_cat_' + s.category.toLowerCase()] || s.category;

        const card = document.createElement('div');
        card.className = 'shisha-card reveal active';
        card.innerHTML = `
            <div class="shisha-card-inner" ${s.previewImg ? `style="background-image: url('${s.previewImg}')"` : ''}>
                <div class="shisha-card-overlay"></div>
                <div class="shisha-card-shine"></div>
                <div class="shisha-card-content">
                    <div class="shisha-header">
                        <h3 class="shisha-name">${s.name}</h3>
                        <span class="shisha-badge">${translatedCat}</span>
                    </div>
                    <p class="shisha-desc">${s.shortDesc[currentLang] || s.shortDesc['de']}</p>
                    <div class="shisha-footer">
                        <div class="intensity">
                            <div class="intensity-dots">${dotsTemplate}</div>
                        </div>
                        <span class="shisha-price">${dict.shisha_price_label || '15,00 €'}</span>
                    </div>
                </div>
            </div>
            <div class="shisha-hover-detail">Details ansehen →</div>
        `;
        card.addEventListener('click', () => openModal(s));
        shishaGrid.appendChild(card);
    });
}

// 2. Filter Logic
document.querySelectorAll('.pill-btn').forEach(btn => {
    if (btn.id === 'shisha-rec-trigger') return; 
    if (!btn.hasAttribute('data-pill')) return; // GUARD: Prevents drinks 'Show More' from wiping Shishas
    
    btn.addEventListener('click', () => {
        document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activePill = btn.getAttribute('data-pill');
        renderShishas();
        
        // Mobile: Scroll clicked pill into view
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
});

// 3. Modal Logic
const modal = document.getElementById('shisha-modal');
const modalClose = document.getElementById('modal-close');

function getIntensityText(intensity) {
    const dict = translations[currentLang];
    return `${dict['intensity_'+intensity] || ''} (${intensity}/5)`;
}

function getDrinkImageForText(text) {
    let t = text.toLowerCase();
    
    // Specific Soft Drink Cards (PRIORITY)
    if (t.includes("elephant bay")) return "ElephantBayCard.png";
    if (t.includes("eistee") || t.includes("iced tea")) return "Eisteecard.png";
    // Word boundary check for "cola" to avoid matching "colada"
    if (/\bcola\b/.test(t) || t.includes("coca-cola") || t.includes("coca cola")) return "erstecardcola.png";
    if (t.includes("fanta")) return "Fantacard.png";
    if (t.includes("sprite")) return "spritecard.png";
    if (t.includes("moloko")) return "molokocard.png";
    if (t.includes("mezzo")) return "Mezoomixcard.png";
    if (t.includes("red bull")) return "RedBull.png";
    if (t.includes("28 black")) return "28Black.png";
    if (t.includes("orangina")) return "OranginaRotGelb.png";
    if (t.includes("calypso")) return "OceanBlueCalypso.png";
    if (t.includes("teinacher")) return "Teinacherlimo.png";
    if (t.includes("wasser") || t.includes("water")) {
        if (t.includes("sprudel") || t.includes("sparkling")) return "WasserCardSprudel.png";
        return "WasserCard.png";
    }

    // Generic Categories
    if (t.includes("tee") || t.includes("tea") || t.includes("çay") || t.includes("té") || t.includes("شاي") || t.includes("kaffee") || t.includes("coffee") || t.includes("espresso")) return "hot_drink.png";
    if (t.includes("aperol") || t.includes("mojito") || t.includes("hugo") || t.includes("prosecco") || t.includes("pina colada") || t.includes("piña colada") || t.includes("cocktail") || t.includes("vodka")) return "cocktail.png";
    if (t.includes("bier") || t.includes("beer") || t.includes("bira") || t.includes("cerveza")) return "softdrink.png";
    
    return "cold_drink.png";
}

function renderShishaComposition(container, s, drinks) {
    const dict = translations[currentLang];
    const intensityDots = Array(5).fill(0).map((_, i) => 
        `<div class="dot ${i < s.intensity ? 'active' : ''}"></div>`
    ).join('');

    // Central card uses the PORTRAIT image (s.img)
    const centralImg = s.img || 'hintergrundbg.png';

    container.innerHTML = `
        <!-- Side Card Left -->
        <div class="side-pairing-card left">
            <img src="${drinks[0].img || 'cold_drink.png'}" alt="${drinks[0].name}">
            <div class="side-info">
                <h4>${dict.modal_recommendation_header || 'Empfehlung'}</h4>
                <h3>${drinks[0].name}</h3>
            </div>
        </div>

        <!-- Main Card -->
        <div class="shisha-card-main">
            <div class="shisha-modal-img" style="background: url('${centralImg}') center/cover no-repeat, ${s.gradient || 'var(--dark-bg)'};">
                <button class="modal-close-btn" onclick="closeModal()" style="top: 20px; left: 20px; right: auto; z-index: 20;">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" stroke-width="2.5" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
                <div class="rec-card-overlay"></div>
                
                <div class="rec-card-top">
                    <span class="shisha-badge">${dict['lang_cat_' + s.category.toLowerCase()] || s.category}</span>
                </div>
                
                <div class="rec-card-bottom" style="flex-direction: column; align-items: flex-start; gap: 10px;">
                    <div class="intensity">
                        <div class="intensity-dots">${intensityDots}</div>
                    </div>
                    <div class="rec-info-left" style="width: 100%;">
                        <h3 style="font-size: 2.8rem; line-height: 1; margin: 0; color: #fff; font-family: var(--font-heading); text-transform: uppercase;">${s.name}</h3>
                    </div>
                    <div class="modal-aroma-tags" style="margin-top: 5px; display: flex; flex-wrap: wrap; gap: 8px;">
                        ${(s.aromen || []).map(a => `<span class="aroma-pill" style="font-size: 0.7rem; padding: 4px 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; color: #fff;">${a}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>

        <!-- Side Card Right -->
        <div class="side-pairing-card right">
            <img src="${drinks[1].img || 'cold_drink.png'}" alt="${drinks[1].name}">
            <div class="side-info">
                <h4>${dict.modal_recommendation_header || 'Empfehlung'}</h4>
                <h3>${drinks[1].name}</h3>
            </div>
        </div>
    `;
}

function getShishaPairings(s) {
    // Collect all drinks from softdrinks and cocktails
    const allDrinks = [...drinksData.softdrinks, ...drinksData.cocktails];
    
    // Pick 2 random drinks (ideally based on pairing text if available)
    const shuffled = allDrinks.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function openModal(s) {
    const container = document.getElementById('shisha-modal-composition');
    const drinks = getShishaPairings(s);
    if (container) {
        renderShishaComposition(container, s, drinks);
    }

    const modal = document.getElementById('shisha-modal');
    if(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Mobile: Ensure the main shisha card is centered first (Swipe Left/Right for drinks)
        if (window.innerWidth < 900 && container) {
            requestAnimationFrame(() => {
                const mainCard = container.querySelector('.shisha-card-main');
                if (mainCard) {
                    mainCard.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
                }
            });
        }
    }
}

function closeModal() {
    const modal = document.getElementById('shisha-modal');
    const recModal = document.getElementById('shisha-rec-modal');
    const snackModal = document.getElementById('snack-modal');
    const drinkModal = document.getElementById('drink-modal');
    if(modal) modal.classList.remove('active');
    if(recModal) recModal.classList.remove('active');
    if(snackModal) snackModal.classList.remove('active');
    if(drinkModal) drinkModal.classList.remove('active');
    document.body.style.overflow = '';
}

if(modalClose) modalClose.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-overlay')) closeModal();
});

// 3.5 Snack Modal Logic
const snackModal = document.getElementById('snack-modal');
const snackModalClose = document.getElementById('snack-modal-close');

const snackData = {
    sucuk: {
        name: "Sucuk Baguette",
        price: "6,00 €",
        img: "SucukCard.png",
        allergens: "A, C, G, K",
        additives: "1, 2, 3, 4",
        ingredients: "Sesam, Sucukwurst, Gouda, Soße",
        desc: {
            de: "Knuspriges Baguette mit würziger türkischer Knoblauchwurst (Sucuk), überbacken mit Käse.",
            en: "Crispy baguette with spicy Turkish garlic sausage (Sucuk), baked with cheese.",
            tr: "Sucuk ve eritilmiş peynir ile fırınlanmış çıtır baget.",
            es: "Baguette crujiente con salchicha de ajo turca picante (Sucuk), horneada con queso.",
            ar: "باغيت مقرمش مع نقانق الثوم التركية الحارة (سجق) ومخبوز بالجبن."
        },
        pairing: {
            de: "Cay oder Cola",
            en: "Tea or Cola",
            tr: "Çay veya Kola",
            es: "Té o Cola",
            ar: "شاي oder كولا"
        }
    },
    putenbrust: {
        name: "Putenbrust Baguette",
        price: "6,00 €",
        img: "PutenbrustCard.png",
        allergens: "A, G",
        additives: "2, 3, 9",
        ingredients: "Puten, Mozzarella, Kräutersoße",
        desc: {
            de: "Frisches Baguette belegt mit saftiger Putenbrust, Salat und unserer cremigen Haus-Sauce.",
            en: "Fresh baguette topped with juicy turkey breast, salad, and our creamy house sauce.",
            tr: "Sulu hindi göğsü, salata ve kremalı ev yapımı sosumuzla taze baget.",
            es: "Baguette fresca con jugosa pechuga de pavo, ensalada y nuestra cremosa salsa de la casa.",
            ar: "باغيت طازج مع صدر الديك الرومي العصير، سلطة، وصلصة منزلية كريمية."
        },
        pairing: {
            de: "Eistee oder Limo",
            en: "Iced Tea or Lemonade",
            tr: "Soğuk Çay veya Gazoz",
            es: "Té helado o Limonada",
            ar: "شاي مثلج أو ليمونادة"
        }
    },
    kaese: {
        name: "Käse Baguette",
        price: "5,50 €",
        img: "KäseBaguetteCard.png",
        allergens: "A, C, G",
        additives: "",
        ingredients: "Emmentaler, Mozzarella, Tomaten-Kräutersoße",
        desc: {
            de: "Vegetarischer Klassiker: Heiß überbackenes Baguette mit einer doppelten Portion schmelzendem Käse.",
            en: "Vegetarian classic: Hot baked baguette with a double portion of melting cheese.",
            tr: "Vejetaryen klasiği: Çift porsiyon eriyen peynir ile sıcak fırınlanmış baget.",
            es: "Clásico vegetariano: Baguette horneada caliente con una doble porción de queso fundido.",
            ar: "كلاسيك نباتي: باغيت مخبوز ساخن مع حصة مضاعفة من الجبن المذاب."
        },
        pairing: {
            de: "Mezzo Mix oder Fanta",
            en: "Mezzo Mix or Fanta",
            tr: "Mezzo Mix veya Fanta",
            es: "Mezzo Mix o Fanta",
            ar: "ميزو ميكس أو فانتا"
        }
    },
    kebap: {
        name: "Kebap-Style Baguette",
        price: "6,50 €",
        img: "KebabBaguette.png",
        allergens: "A, C, G, K",
        additives: "",
        ingredients: "Hähnchen, Gouda, Knoblauchcreme, Zwiebel",
        desc: {
            de: "Orientalischer Genuss mit saftigem Kebap-Fleisch, frischen Zwiebeln und würziger Knoblauchsauce.",
            en: "Oriental delight with juicy Kebap meat, fresh onions, and spicy garlic sauce.",
            tr: "Sulu Kebap eti, taze soğan ve baharatlı sarımsak sosu ile oryantal lezzet.",
            es: "Delicia oriental con jugosa carne de Kebap, cebolla fresca y salsa de ajo picante.",
            ar: "متعة شرقية مع لحم الكباب العصير، البصل الطازج، وصلصة الثوم الحارة."
        },
        pairing: {
            de: "Ayran oder Red Bull",
            en: "Ayran or Red Bull",
            tr: "Ayran veya Red Bull",
            es: "Ayran o Red Bull",
            ar: "عيران أو ريد بول"
        }
    }
};

document.querySelectorAll('.snack-clickable').forEach(item => {
    item.addEventListener('click', () => {
        const snackKey = item.getAttribute('data-snack');
        const data = snackData[snackKey];
        if (data) {
            const visual = document.getElementById('snack-modal-visual');
            const title = document.getElementById('snack-modal-title');
            const price = document.getElementById('snack-modal-price');
            const desc = document.getElementById('snack-modal-desc');
            const infoBox = document.getElementById('snack-additive-info');
            const btn = document.getElementById('btn-snack-additives');

            if(visual) {
                visual.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), url("${data.img}")`;
                visual.style.backgroundSize = "cover";
                visual.style.backgroundPosition = "center";
            }
            if(title) title.innerText = data.name;
            if(price) price.innerText = data.price;
            if(desc) desc.innerText = data.desc[currentLang] || data.desc['de'];
            
            // Populate additives info
            if(infoBox) {
                infoBox.classList.remove('active');
                if(btn) btn.innerText = 'ZUSATZSTOFFE';
                infoBox.innerHTML = `
                    <div class="additive-details" style="padding: 20px; text-align: center; background: rgba(255,255,255,0.02); border-radius: 12px; margin-top: 15px;">
                        <p style="margin-bottom: 0; font-size: 0.85rem;"><strong style="color:var(--gold)">Zutaten:</strong> ${data.ingredients}</p>
                    </div>
                `;
            }

            const snackPairingContainer = document.getElementById('snack-modal-pairing-container');
            if (snackPairingContainer) {
                snackPairingContainer.innerHTML = '';
                let pairingText = data.pairing[currentLang] || data.pairing['de'];
                let dePairingText = data.pairing['de'];
                
                let parts = pairingText.split(/\s+(?:oder|or|veya|o|أو)\s+/i);
                let deParts = dePairingText.split(/\s+oder\s+/i);
                
                parts.slice(0, 2).forEach((part, idx) => {
                    let cleanText = part.trim();
                    let dePart = deParts[idx] || deParts[0];
                    let imgSrc = getDrinkImageForText(dePart.trim().toLowerCase());
                    
                    snackPairingContainer.innerHTML += `
                        <div class="pairing-item" style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
                            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                                <img src="${imgSrc}" alt="${cleanText}" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <span style="font-size: 0.65rem; color: rgba(255,255,255,0.7);">${cleanText}</span>
                        </div>
                    `;
                });
            }

            snackModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

if(snackModalClose) {
    snackModalClose.onclick = () => {
        snackModal.classList.remove('active');
        document.body.style.overflow = '';
    };
    snackModal.onclick = (e) => {
        if(e.target === snackModal) {
            snackModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
}


if(snackModalClose) {
    snackModalClose.addEventListener('click', () => snackModal.classList.remove('active'));
    snackModal.addEventListener('click', (e) => {
        if(e.target === snackModal) snackModal.classList.remove('active');
    });
}

// 4. Drinks Tab Logic
const drinksData = {
    cocktails: [
        { name: "Mojito", price: "8,50 €", desc: "Rum, Minze, Limette, Soda" },
        { name: "Virgin Mojito", price: "7,50 €", desc: "Minze, Limette, Rohrzucker, Soda", img: "MojitoOhneAlk.png", isNonAlcoholic: true },
        { name: "Coconut Kiss", price: "7,50 €", desc: "Ananas, Kokos, Sahne, Grenadine", img: "coconutkiss.png", isNonAlcoholic: true },
        { name: "Aperol Spritz", price: "7,90 €", desc: "Aperol, Prosecco, Orange" },
        { name: "Hugo", price: "7,90 €", desc: "Holunder, Prosecco, Minze" },
        { name: "Long Island", price: "10,50 €", desc: "4 Spirituosen, Cola, Zitrone" },
        { name: "Brookah Special", price: "9,50 €", desc: "Hausrezept — streng geheim" },
        { name: "Piña Colada", price: "8,90 €", desc: "Rum, Kokos, Ananas" },
        { name: "Negroni", price: "9,00 €", desc: "Gin, Campari, Wermut" },
        { name: "Cosmopolitan", price: "8,50 €", desc: "Wodka, Triple Sec, Cranberry" }
    ],
    softdrinks: [
        { name: "Coca-Cola / Zero", price: "3,00 €", desc: "Classic & erfrischend", img: "erstecardcola.png" },
        { name: "Sprite", price: "3,00 €", desc: "Zitrone & Limette, klar", img: "spritecard.png" },
        { name: "Fanta", price: "3,00 €", desc: "Orange, fruchtig & süß", img: "Fantacard.png" },
        { name: "Mezzo Mix", price: "3,00 €", desc: "Cola und Orange", img: "Mezoomixcard.png" },
        { name: "Wasser Still", price: "2,50 €", desc: "Klar & erfrischend", img: "WasserCard.png" },
        { name: "Wasser Medium", price: "2,50 €", desc: "Spritzig & klar", img: "WasserCardSprudel.png" },
        { name: "Red Bull", price: "3,50 €", desc: "verschiedene Sorten", img: "RedBull.png" },
        { name: "Elephant Bay", price: "3,50 €", desc: "verschiedene Sorten", img: "ElephantBayCard.png" },
        { name: "Eistee", price: "3,50 €", desc: "Pfirsich oder Zitrone", img: "Eisteecard.png" },
        { name: "Moloko", price: "3,50 €", desc: "Erfrischender Drink", img: "molokocard.png" },
        { name: "28 Black", price: "3,50 €", desc: "Energy Drink", img: "28Black.png" },
        { name: "Orangina (rot / gelb)", price: "3,00 €", desc: "Premium Limonade", img: "OranginaRotGelb.png" },
        { name: "Calypso (Ocean Blue)", price: "5,00 €", desc: "Exotische Limonade", img: "OceanBlueCalypso.png" },
        { name: "Teinacher Limo", price: "3,50 €", desc: "verschiedene Sorten", img: "Teinacherlimo.png" }
    ],
    hot: [
        { name: "Espresso", price: "2,50 €", desc: "Stark, kurz, intensiv" },
        { name: "Cappuccino", price: "3,50 €", desc: "Espresso & Milchschaum" },
        { name: "Latte Macchiato", price: "4,00 €", desc: "Mild & cremig" },
        { name: "Türkischer Kaffee", price: "3,50 €", desc: "Traditionell gekocht" },
        { name: "Tee", price: "3,00 €", desc: "Verschiedene Sorten" }
    ],
    beer_wine: [
        { name: "Bier vom Fass", price: "4,50 €", desc: "Frisch gezapft, kalt" },
        { name: "Bier Flasche", price: "3,90 €", desc: "Kalt & klassisch" },
        { name: "Weißwein", price: "5,50 €", desc: "Trocken & fruchtig" },
        { name: "Rotwein", price: "5,50 €", desc: "Vollmundig & samtig" },
        { name: "Rosé", price: "5,50 €", desc: "Leicht & frisch" },
        { name: "Prosecco", price: "5,90 €", desc: "Prickelnd & fein" }
    ]
};

const categoryVisuals = {
    cocktails: { emoji: "🍹", gradient: "linear-gradient(135deg, rgba(180,80,20,0.2) 0%, rgba(180,80,20,0.05) 100%)", glow: "rgba(180,80,20,0.5)" },
    softdrinks: { emoji: "🥤", gradient: "linear-gradient(135deg, rgba(20,100,180,0.2) 0%, rgba(20,100,180,0.05) 100%)", glow: "rgba(20,100,180,0.5)" },
    hot: { emoji: "☕", gradient: "linear-gradient(135deg, rgba(80,40,10,0.15) 0%, rgba(80,40,10,0.05) 100%)", glow: "rgba(80,40,10,0.5)" },
    beer_wine: { emoji: "🍷", gradient: "linear-gradient(135deg, rgba(120,180,20,0.15) 0%, rgba(120,180,20,0.05) 100%)", glow: "rgba(120,180,20,0.5)" }
};

function renderDrinks(category) {
    const container = document.getElementById(category);
    if (!container) return;
    
    // Fix scroll jumping by locking the current height before clearing
    const currentHeight = container.offsetHeight;
    if (currentHeight > 0) {
        container.style.minHeight = `${currentHeight}px`;
    }
    
    container.innerHTML = '<div class="drink-grid"></div>';
    const drinksGrid = container.querySelector('.drink-grid');
    const items = drinksData[category] || [];
    const visual = categoryVisuals[category];
    
    // Slice based on limit
    const displayList = items.slice(0, drinkLimit);

    displayList.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'drink-card';
        // Much faster staggered delay for immediate feedback
        card.style.transitionDelay = `${index * 15}ms`;
        
        const imageContent = item.img 
            ? `<img src="${item.img}" alt="${item.name}" class="drink-card-img">`
            : `<div class="drink-emoji" style="text-shadow: 0 0 20px ${visual.glow}">${visual.emoji}</div>`;

        const badgeHtml = item.isNonAlcoholic 
            ? `<div class="drink-badge-modern">Alkoholfrei</div>` 
            : '';

        card.innerHTML = `
            <div class="drink-image-area" style="background: ${item.img ? 'rgba(0,0,0,0.1)' : visual.gradient}">
                ${badgeHtml}
                ${imageContent}
                <div class="drink-info-overlay">
                    <h3 class="drink-name">${item.name}</h3>
                    <span class="drink-price">${item.price}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openDrinkModal(item, visual));
        drinksGrid.appendChild(card);
        
        // Use requestAnimationFrame for smoother timing
        requestAnimationFrame(() => {
            setTimeout(() => {
                card.classList.add('show-card');
            }, 10);
        });
    });

    // Handle "Show More" visibility for drinks
    const showMoreContainer = document.getElementById('drinks-show-more-container');
    if (showMoreContainer) {
        if (items.length > drinkLimit) {
            showMoreContainer.style.display = 'flex';
        } else {
            showMoreContainer.style.display = 'none';
        }
    }

    // Release min-height once elements are added (so it can grow naturally)
    setTimeout(() => {
        container.style.minHeight = '';
    }, 100);
}

// Drinks Show More Event
const drinksShowMoreBtn = document.getElementById('btn-drinks-show-more');
if (drinksShowMoreBtn) {
    drinksShowMoreBtn.addEventListener('click', () => {
        drinkLimit = 999;
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) renderDrinks(activeTab.getAttribute('data-tab'));
    });
}

function openDrinkModal(item, visual) {
    const modal = document.getElementById('drink-modal');
    if(!modal) return;

    const modalVisual = document.getElementById('drink-modal-visual');
    const modalEmoji = document.getElementById('drink-modal-emoji');
    const modalTitle = document.getElementById('drink-modal-title');
    const modalDesc = document.getElementById('drink-modal-desc');
    const modalPrice = document.getElementById('drink-modal-price');

    if(item.img) {
        modalVisual.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("${item.img}")`;
        modalVisual.style.backgroundSize = "cover";
        modalVisual.style.backgroundRepeat = "no-repeat";
        modalVisual.style.backgroundPosition = "center";
        modalEmoji.style.display = "none";
    } else {
        modalVisual.style.background = visual.gradient;
        modalEmoji.innerText = visual.emoji;
        modalEmoji.style.display = "block";
    }

    modalTitle.innerText = item.name;
    modalDesc.innerText = item.desc;
    modalPrice.innerText = item.price;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

const tabBtns = document.querySelectorAll('.tab-btn');

function initDrinksTabs() {
    const initialBtn = document.querySelector('.tab-btn.active') || tabBtns[0];
    const category = initialBtn?.getAttribute('data-tab');
    if (category) {
        renderDrinks(category);
        const initialContent = document.getElementById(category);
        if(initialContent) initialContent.classList.add('active');
    }
}

if(tabBtns.length > 0) initDrinksTabs();

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-tab');
        const currentActiveBtn = document.querySelector('.tab-btn.active');
        const currentActiveContent = document.querySelector('.menu-content.active');
        const newContent = document.getElementById(category);

        if (currentActiveBtn) currentActiveBtn.classList.remove('active');
        btn.classList.add('active');

        if (currentActiveContent) currentActiveContent.classList.remove('active');
        if (newContent) {
            newContent.classList.add('active');
            drinkLimit = 6; // Reset limit on tab change
            renderDrinks(category);
        }
    });
});

// 4.5 Shisha Recommendation Logic
const recModal = document.getElementById('shisha-rec-modal');
const recTrigger = document.getElementById('shisha-rec-trigger');
const recComposition = document.getElementById('shisha-rec-composition');
const recReroll = document.getElementById('shisha-rec-reroll');

function generateRecommendation() {
    if (!shishas || !recComposition) return;

    // Pick random Shisha
    const randomShisha = shishas[Math.floor(Math.random() * shishas.length)];
    const drinks = getShishaPairings(randomShisha);
    
    renderShishaComposition(recComposition, randomShisha, drinks);

    // Re-inject Reroll button into the composition if needed OR keep it in HTML
    // Actually, in index.html I replaced the inner part. Let's make sure reroll is still there.
    // Wait, in index.html I made it just a composition-wrapper.
    // I should add the reroll button to the composition or keep it outside.
    // Let's add it to the main card's bottom or as absolute overlay.
    
    const cardBottom = recComposition.querySelector('.rec-card-bottom');
    if (cardBottom) {
        const rerollBtn = document.createElement('button');
        rerollBtn.className = 'btn btn-gold';
        rerollBtn.innerText = translations[currentLang].btn_reroll || 'NOCHMAL';
        rerollBtn.style.position = 'relative';
        rerollBtn.style.width = '100%';
        rerollBtn.style.marginTop = '15px';
        rerollBtn.style.zIndex = '30';
        rerollBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Cooler 3D Animation Out
            recComposition.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            recComposition.style.transform = 'scale(0.8) translateY(30px) rotateX(10deg)';
            recComposition.style.opacity = '0';
            recComposition.style.filter = 'blur(5px)';
            
            setTimeout(() => {
                generateRecommendation();
                // Setup Entry State
                recComposition.style.transition = 'none';
                recComposition.style.transform = 'scale(1.1) translateY(-20px)';
                
                // Force GPU Reflow
                void recComposition.offsetWidth;
                
                // Animate In with spring bounce
                recComposition.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                recComposition.style.transform = 'scale(1) translateY(0) rotateX(0)';
                recComposition.style.opacity = '1';
                recComposition.style.filter = 'blur(0px)';
            }, 400);
        });
        cardBottom.appendChild(rerollBtn);
    }
}

if (recTrigger) {
    recTrigger.addEventListener('click', () => {
        generateRecommendation();
        recModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Scroll to center card on mobile
        if (window.innerWidth <= 900) {
            setTimeout(() => {
                const mainCard = recComposition.querySelector('.shisha-card-main');
                if (mainCard) {
                    mainCard.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
                }
            }, 50);
        }
    });
}

const closeRec = () => {
    recModal.classList.remove('active');
    document.body.style.overflow = '';
};

recModal?.addEventListener('click', (e) => {
    if (e.target === recModal) closeRec();
});

// 5. Navigation & Scroll Effects
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.pill-nav');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if(window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    links.forEach(li => {
        li.classList.remove('active');
        if(li.getAttribute('href') === '#' + current) li.classList.add('active');
    });
});



// 7. Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const offset = 80; // Adjusted for fixed navbar
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// 6. Highlight Current Day in Opening Hours
const currentDay = new Date().getDay();
const todayRow = document.querySelector(`.hours-table tr[data-day="${currentDay}"]`);
if (todayRow) {
    todayRow.classList.add('today');
}

// Final initialization handled via DOMContentLoaded early in script.
// 7. Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ======================================================
// EXECUTION — runs after DOM is guaranteed ready
// ======================================================
function runAll() {
    init();
    checkSiteStatus();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAll);
} else {
    runAll();
}


// ======================================================
// SITE STATUS & VACATION OVERLAY LOGIC
// ======================================================
function checkSiteStatus() {
    const data = localStorage.getItem('brookah-site-settings');
    if (!data) return;

    let settings;
    try {
        settings = JSON.parse(data);
    } catch(e) {
        console.error('Brookah: Failed to parse site settings', e);
        return;
    }

    console.warn('Brookah Status Check — isOnline:', settings.isOnline, '| Type:', typeof settings.isOnline);

    // isOnline must be explicitly true to show the site normally
    // Any falsy value (false, 0, null, undefined, "") means offline
    const isOnline = settings.isOnline === true;
    
    if (!isOnline) {
        console.warn('Brookah: Site is OFFLINE — showing vacation overlay');
        showVacationOverlay(settings);
    }
}

function showVacationOverlay(settings) {
    const overlay = document.createElement('div');
    overlay.className = 'vacation-overlay active';
    overlay.id = 'vacation-overlay';
    
    let countdownHtml = '';
    if (settings.reopenDate) {
        countdownHtml = `
            <div class="countdown-container" id="main-countdown">
                <div class="countdown-box"><span class="countdown-num" id="cd-days">00</span><span class="countdown-label">TAGE</span></div>
                <div class="countdown-box"><span class="countdown-num" id="cd-hours">00</span><span class="countdown-label">STD</span></div>
                <div class="countdown-box"><span class="countdown-num" id="cd-min">00</span><span class="countdown-label">MIN</span></div>
                <div class="countdown-box"><span class="countdown-num" id="cd-sec">00</span><span class="countdown-label">SEK</span></div>
            </div>`;
    }

    overlay.innerHTML = `
        <button class="modal-close-btn" id="vacation-close" style="top: 20px; left: 20px; right: auto; position: absolute; z-index: 50;">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" stroke-width="2.5" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="vacation-content">
            <div class="vacation-logo">BROOKAH</div>
            <div class="vacation-msg">${settings.message || 'Wir haben aktuell geschlossen.'}</div>
            ${countdownHtml}
        </div>`;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Allow Admin/Owner to dismiss the overlay and browse the offline site
    document.getElementById('vacation-close').addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => overlay.remove(), 500);
    });

    if (settings.reopenDate) {
        startMainCountdown(settings.reopenDate);
    }
}

function startMainCountdown(targetDate) {
    // Parse as local time (datetime-local input gives YYYY-MM-DDTHH:MM)
    // Replace 'T' with a space so all browsers parse as local time
    const target = new Date(targetDate.replace('T', ' ')).getTime();
    
    if (isNaN(target)) {
        console.warn('Brookah Countdown: Invalid date string', targetDate);
        return;
    }
    
    let timer;

    function update() {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            if (timer) clearInterval(timer);
            // Clear offline state and reload
            const settings = JSON.parse(localStorage.getItem('brookah-site-settings') || '{}');
            settings.isOnline = true;
            localStorage.setItem('brookah-site-settings', JSON.stringify(settings));
            location.reload();
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        if(document.getElementById('cd-days')) document.getElementById('cd-days').innerText = days.toString().padStart(2, '0');
        if(document.getElementById('cd-hours')) document.getElementById('cd-hours').innerText = hours.toString().padStart(2, '0');
        if(document.getElementById('cd-min')) document.getElementById('cd-min').innerText = mins.toString().padStart(2, '0');
        if(document.getElementById('cd-sec')) document.getElementById('cd-sec').innerText = secs.toString().padStart(2, '0');
    }

    update(); // Run immediately
    timer = setInterval(update, 1000);
}

// ======================================================
// NEWSLETTER LOGIC
// ======================================================
// ======================================================
// NEWSLETTER LOGIC (Globally accessible for inline onsubmit)
// ======================================================
window.submitNewsletter = function() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    const nameInput = document.getElementById('newsletter-name');
    const emailInput = document.getElementById('newsletter-email');
    const bdayInput = document.getElementById('newsletter-birthday');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const birthday = bdayInput ? bdayInput.value : '';

    if (!email) return;

    try {
        const existing = localStorage.getItem('brookah-subscribers');
        const subscribers = existing ? JSON.parse(existing) : [];
        const timestamp = new Date().toLocaleString('de-DE');
        
        subscribers.push({ name, email, birthday, date: timestamp });
        localStorage.setItem('brookah-subscribers', JSON.stringify(subscribers));
        console.log('Newsletter: subscriber saved:', email);

        // UI Feedback
        form.style.display = 'none';
        const successEl = document.getElementById('newsletter-success');
        if (successEl) successEl.style.display = 'flex';
    } catch (err) {
        console.error('Newsletter save error:', err);
    }
};

// ======================================================
// MOBILE NAVIGATION LOGIC
// ======================================================
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileClose = document.getElementById('mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.nav-link-m');

    if (!hamburger || !mobileNav) return;

    const toggleNav = (forceClose = false) => {
        const isActive = forceClose ? false : !mobileNav.classList.contains('active');
        hamburger.classList.toggle('active', isActive);
        mobileNav.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggleNav());
    
    if (mobileClose) {
        mobileClose.addEventListener('click', () => toggleNav(true));
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleNav(true));
    });
}

// ======================================================
// SKIP BUTTON LOGIC
// ======================================================
function initSkipButton() {
    const skipBtn = document.getElementById('shisha-skip-btn');
    const target = document.getElementById('getraenke');
    if (!skipBtn || !target) return;

    skipBtn.addEventListener('click', () => {
        const offset = 80;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    });
}
initSkipButton();

// ======================================================
// PERFORMANCE: IMAGE PRELOADING
// ======================================================
function initImagePreloading() {
    console.log("Brookah: Starting background image preloading...");
    const imagesToPreload = [];

    // 1. Shisha Images
    if (typeof shishas !== 'undefined') {
        shishas.forEach(s => {
            if (s.image) imagesToPreload.push(s.image);
        });
    }

    // 2. High Priority Drinks (Top items of each category)
    const topDrinkImages = [
        'Erstecardcola.png', 'Eisteecard.png', 'redbull.png', 
        'mojitoohnealk.png', 'coconutkiss.png', 'teinacherlimo.png',
        '28Black.png', 'ElephantBayCard.png'
    ];
    topDrinkImages.forEach(img => imagesToPreload.push(img));

    // Execute Preload
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    console.log(`Brookah: Preloading ${imagesToPreload.length} assets.`);
}

const globalAdditiveBtn = document.getElementById('btn-snack-additives');
const globalAdditiveInfo = document.getElementById('snack-additive-info');

if (globalAdditiveBtn && globalAdditiveInfo) {
    globalAdditiveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        globalAdditiveInfo.classList.toggle('active');
        if (globalAdditiveInfo.classList.contains('active')) {
            globalAdditiveBtn.innerText = 'ZUSATZSTOFFE SCHLIESSEN';
        } else {
            globalAdditiveBtn.innerText = 'ZUSATZSTOFFE';
        }
    });
}

// ======================================================
// SKIP BUTTON: Show only while in Shisha section (mobile)
// ======================================================
(function() {
    const skipWrapper = document.querySelector('.shisha-skip-wrapper');
    const shishaSection = document.getElementById('shisha');
    if (!skipWrapper || !shishaSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skipWrapper.classList.add('skip-visible');
            } else {
                skipWrapper.classList.remove('skip-visible');
            }
        });
    }, {
        threshold: 0.05 // Show as soon as 5% of section is visible
    });

    observer.observe(shishaSection);
})();
