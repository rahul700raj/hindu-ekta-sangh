// Hindu Organizations Data
const organizations = [
    {
        name: "राष्ट्रीय स्वयंसेवक संघ (RSS)",
        category: "national",
        icon: "🚩",
        founded: "1925",
        headquarters: "नागपुर, महाराष्ट्र",
        phone: "0712-2561234",
        email: "contact@rss.org",
        website: "www.rss.org",
        description: "भारत का सबसे बड़ा स्वयंसेवी संगठन जो राष्ट्रीय एकता और सांस्कृतिक जागरण के लिए कार्यरत है।",
        activities: ["शाखा संचालन", "सामाजिक सेवा", "राष्ट्रीय शिक्षा", "संस्कृति संरक्षण"]
    },
    {
        name: "बजरंग दल",
        category: "youth",
        icon: "💪",
        founded: "1984",
        headquarters: "नई दिल्ली",
        phone: "011-23386622",
        email: "info@bajrangdal.org",
        website: "www.bajrangdal.org",
        description: "युवा हिंदू संगठन जो धर्म और संस्कृति की रक्षा के लिए समर्पित है।",
        activities: ["युवा प्रशिक्षण", "धार्मिक रक्षा", "सामाजिक कार्य", "गौ सेवा"]
    },
    {
        name: "विश्व हिंदू परिषद (VHP)",
        category: "national",
        icon: "🕉️",
        founded: "1964",
        headquarters: "नई दिल्ली",
        phone: "011-23517373",
        email: "vhp@vhp.org",
        website: "www.vhp.org",
        description: "विश्व स्तर पर हिंदू धर्म और संस्कृति के प्रचार-प्रसार के लिए कार्यरत संगठन।",
        activities: ["धर्म प्रचार", "मंदिर निर्माण", "सेवा कार्य", "संस्कृति संरक्षण"]
    },
    {
        name: "श्री राम सेना",
        category: "social",
        icon: "🏹",
        founded: "2006",
        headquarters: "बेंगलुरु, कर्नाटक",
        phone: "080-22345678",
        email: "contact@ramsena.org",
        website: "www.ramsena.org",
        description: "हिंदू संस्कृति और मूल्यों की रक्षा के लिए समर्पित संगठन।",
        activities: ["सांस्कृतिक रक्षा", "युवा जागरण", "सामाजिक सुधार", "धार्मिक शिक्षा"]
    },
    {
        name: "हिंदू युवा वाहिनी",
        category: "youth",
        icon: "⚔️",
        founded: "2002",
        headquarters: "गोरखपुर, उत्तर प्रदेश",
        phone: "0551-2234567",
        email: "info@hinduyuvavahini.org",
        website: "www.hinduyuvavahini.org",
        description: "युवाओं में राष्ट्रीय और धार्मिक चेतना जागृत करने वाला संगठन।",
        activities: ["युवा संगठन", "धार्मिक शिक्षा", "सामाजिक कार्य", "राष्ट्र सेवा"]
    },
    {
        name: "दुर्गा वाहिनी",
        category: "social",
        icon: "🔱",
        founded: "1991",
        headquarters: "लखनऊ, उत्तर प्रदेश",
        phone: "0522-2345678",
        email: "contact@durgavahini.org",
        website: "www.durgavahini.org",
        description: "महिला सशक्तिकरण और हिंदू संस्कृति की रक्षा के लिए महिला संगठन।",
        activities: ["महिला सशक्तिकरण", "आत्मरक्षा प्रशिक्षण", "सामाजिक सेवा", "धार्मिक शिक्षा"]
    },
    {
        name: "अखिल भारतीय विद्यार्थी परिषद (ABVP)",
        category: "youth",
        icon: "📚",
        founded: "1948",
        headquarters: "नई दिल्ली",
        phone: "011-23381428",
        email: "abvp@abvp.org",
        website: "www.abvp.org",
        description: "भारत का सबसे बड़ा छात्र संगठन जो राष्ट्रीय शिक्षा और छात्र कल्याण के लिए कार्यरत है।",
        activities: ["छात्र कल्याण", "शैक्षिक सुधार", "राष्ट्रीय शिक्षा", "सांस्कृतिक कार्यक्रम"]
    },
    {
        name: "भारतीय मजदूर संघ (BMS)",
        category: "social",
        icon: "👷",
        founded: "1955",
        headquarters: "नई दिल्ली",
        phone: "011-23344003",
        email: "bms@bms.org.in",
        website: "www.bms.org.in",
        description: "भारत का सबसे बड़ा मजदूर संगठन जो श्रमिकों के अधिकारों के लिए कार्यरत है।",
        activities: ["श्रमिक कल्याण", "अधिकार संरक्षण", "प्रशिक्षण कार्यक्रम", "सामाजिक सुरक्षा"]
    }
];

// Government Portals Data
const governmentPortals = [
    {
        name: "भारत सरकार का राष्ट्रीय पोर्टल",
        category: "central",
        icon: "🏛️",
        url: "https://www.india.gov.in",
        description: "भारत सरकार की सभी सेवाओं और जानकारी के लिए एकल खिड़की",
        services: ["सरकारी योजनाएं", "नागरिक सेवाएं", "सरकारी विभाग", "ऑनलाइन सेवाएं"]
    },
    {
        name: "डिजिटल इंडिया",
        category: "central",
        icon: "💻",
        url: "https://www.digitalindia.gov.in",
        description: "भारत को डिजिटल रूप से सशक्त समाज और ज्ञान अर्थव्यवस्था में बदलने का कार्यक्रम",
        services: ["डिजिटल सेवाएं", "ई-गवर्नेंस", "डिजिटल साक्षरता", "ऑनलाइन सेवाएं"]
    },
    {
        name: "आधार - UIDAI",
        category: "services",
        icon: "🆔",
        url: "https://uidai.gov.in",
        description: "भारतीय विशिष्ट पहचान प्राधिकरण - आधार कार्ड सेवाएं",
        services: ["आधार नामांकन", "आधार अपडेट", "ई-आधार डाउनलोड", "वर्चुअल आईडी"]
    },
    {
        name: "पैन कार्ड - NSDL",
        category: "services",
        icon: "💳",
        url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
        description: "स्थायी खाता संख्या (PAN) के लिए ऑनलाइन आवेदन",
        services: ["नया पैन", "पैन अपडेट", "पैन स्थिति", "ई-पैन डाउनलोड"]
    },
    {
        name: "पासपोर्ट सेवा",
        category: "services",
        icon: "🛂",
        url: "https://www.passportindia.gov.in",
        description: "भारतीय पासपोर्ट के लिए ऑनलाइन आवेदन और सेवाएं",
        services: ["नया पासपोर्ट", "पासपोर्ट नवीनीकरण", "पासपोर्ट स्थिति", "अपॉइंटमेंट"]
    },
    {
        name: "ई-डिस्ट्रिक्ट",
        category: "state",
        icon: "📋",
        url: "https://edistrict.gov.in",
        description: "जिला स्तरीय सेवाओं के लिए ऑनलाइन पोर्टल",
        services: ["प्रमाण पत्र", "लाइसेंस", "पेंशन", "अन्य सेवाएं"]
    },
    {
        name: "उमंग (UMANG)",
        category: "central",
        icon: "📱",
        url: "https://web.umang.gov.in",
        description: "एकीकृत मोबाइल एप्लिकेशन - सभी सरकारी सेवाएं एक जगह",
        services: ["आधार", "पैन", "ड्राइविंग लाइसेंस", "पासपोर्ट", "अन्य सेवाएं"]
    },
    {
        name: "प्रधानमंत्री जन धन योजना",
        category: "central",
        icon: "🏦",
        url: "https://pmjdy.gov.in",
        description: "वित्तीय समावेशन के लिए राष्ट्रीय मिशन",
        services: ["बैंक खाता", "बीमा", "पेंशन", "ऋण सुविधा"]
    },
    {
        name: "आयुष्मान भारत",
        category: "central",
        icon: "🏥",
        url: "https://pmjay.gov.in",
        description: "प्रधानमंत्री जन आरोग्य योजना - स्वास्थ्य बीमा",
        services: ["स्वास्थ्य बीमा", "अस्पताल सूची", "पात्रता जांच", "कार्ड डाउनलोड"]
    },
    {
        name: "ई-श्रम पोर्टल",
        category: "central",
        icon: "👨‍🏭",
        url: "https://eshram.gov.in",
        description: "असंगठित क्षेत्र के श्रमिकों का राष्ट्रीय डेटाबेस",
        services: ["पंजीकरण", "यूएएन कार्ड", "सामाजिक सुरक्षा", "कल्याण योजनाएं"]
    },
    {
        name: "किसान पोर्टल",
        category: "central",
        icon: "🌾",
        url: "https://farmer.gov.in",
        description: "किसानों के लिए एकीकृत पोर्टल",
        services: ["पीएम किसान", "फसल बीमा", "मृदा स्वास्थ्य", "कृषि योजनाएं"]
    },
    {
        name: "राष्ट्रीय छात्रवृत्ति पोर्टल",
        category: "central",
        icon: "🎓",
        url: "https://scholarships.gov.in",
        description: "विभिन्न छात्रवृत्ति योजनाओं के लिए एकल पोर्टल",
        services: ["छात्रवृत्ति आवेदन", "स्थिति जांच", "नवीनीकरण", "योजना खोज"]
    }
];

// Events Data
const events = [
    {
        title: "राम नवमी महोत्सव 2025",
        date: "6 अप्रैल 2025",
        time: "सुबह 6:00 बजे",
        location: "राम मंदिर, अयोध्या",
        image: "https://images.unsplash.com/photo-1604608672516-f1b9b1a0e8c6?w=500",
        description: "भगवान श्री राम के जन्मोत्सव का भव्य आयोजन। शोभा यात्रा, भजन संध्या और प्रसाद वितरण।"
    },
    {
        title: "हनुमान जयंती समारोह",
        date: "23 अप्रैल 2025",
        time: "प्रातः 5:00 बजे",
        location: "हनुमान मंदिर, दिल्ली",
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500",
        description: "हनुमान चालीसा पाठ, सुंदरकांड पाठ और महाआरती का आयोजन।"
    },
    {
        title: "गुरु पूर्णिमा उत्सव",
        date: "13 जुलाई 2025",
        time: "संध्या 6:00 बजे",
        location: "आश्रम, ऋषिकेश",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500",
        description: "गुरुओं के सम्मान में विशेष कार्यक्रम। वेद पाठ, सत्संग और भंडारा।"
    },
    {
        title: "जन्माष्टमी महोत्सव",
        date: "26 अगस्त 2025",
        time: "मध्यरात्रि 12:00 बजे",
        location: "कृष्ण मंदिर, मथुरा",
        image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500",
        description: "भगवान कृष्ण के जन्मोत्सव का भव्य आयोजन। झांकी, रासलीला और प्रसाद।"
    },
    {
        title: "नवरात्रि महोत्सव",
        date: "22 सितंबर - 1 अक्टूबर 2025",
        time: "प्रतिदिन संध्या 7:00 बजे",
        location: "दुर्गा मंदिर, कोलकाता",
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500",
        description: "9 दिनों का भव्य उत्सव। गरबा, डांडिया, आरती और कन्या पूजन।"
    },
    {
        title: "दीपावली महोत्सव",
        date: "1 नवंबर 2025",
        time: "संध्या 6:00 बजे",
        location: "सभी शाखाएं",
        image: "https://images.unsplash.com/photo-1605811625530-d3a0c0e1e0e1?w=500",
        description: "दीपों का त्योहार। लक्ष्मी पूजन, दीप प्रज्वलन और पटाखे।"
    }
];

// Gallery Data
const galleryItems = [
    {
        title: "राम नवमी समारोह 2024",
        image: "https://images.unsplash.com/photo-1604608672516-f1b9b1a0e8c6?w=500",
        category: "events"
    },
    {
        title: "सामाजिक सेवा कार्यक्रम",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500",
        category: "service"
    },
    {
        title: "युवा प्रशिक्षण शिविर",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500",
        category: "training"
    },
    {
        title: "गौ सेवा कार्यक्रम",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500",
        category: "service"
    },
    {
        title: "धार्मिक शिक्षा कक्षा",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
        category: "education"
    },
    {
        title: "स्वास्थ्य शिविर",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
        category: "service"
    },
    {
        title: "सांस्कृतिक कार्यक्रम",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500",
        category: "events"
    },
    {
        title: "वृक्षारोपण अभियान",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
        category: "service"
    },
    {
        title: "महिला सशक्तिकरण कार्यशाला",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
        category: "training"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayOrganizations(organizations);
    displayGovernmentPortals(governmentPortals);
    displayEvents();
    displayGallery();
    animateCounters();
});

// Show Section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
    
    if (sectionId === 'home') {
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.stats-section').style.display = 'block';
    }
    
    event.target.closest('.nav-link')?.classList.add('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Display Organizations
function displayOrganizations(orgs) {
    const orgsList = document.getElementById('orgsList');
    orgsList.innerHTML = '';
    
    orgs.forEach(org => {
        const orgCard = `
            <div class="org-card" data-category="${org.category}">
                <span class="org-badge">${org.category === 'national' ? 'राष्ट्रीय' : org.category === 'social' ? 'सामाजिक' : 'युवा संगठन'}</span>
                <div class="org-header">
                    <div class="org-icon">${org.icon}</div>
                    <h3>${org.name}</h3>
                </div>
                <p>${org.description}</p>
                <div class="org-details">
                    <p><i class="fas fa-calendar"></i> स्थापना: ${org.founded}</p>
                    <p><i class="fas fa-map-marker-alt"></i> मुख्यालय: ${org.headquarters}</p>
                    <p><i class="fas fa-phone"></i> ${org.phone}</p>
                    <p><i class="fas fa-envelope"></i> ${org.email}</p>
                    <p><i class="fas fa-globe"></i> ${org.website}</p>
                </div>
                <div style="margin-top: 15px;">
                    <strong>गतिविधियां:</strong>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        ${org.activities.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        orgsList.innerHTML += orgCard;
    });
}

// Filter Organizations
function filterOrgs(category) {
    document.querySelectorAll('.org-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayOrganizations(organizations);
    } else {
        const filtered = organizations.filter(o => o.category === category);
        displayOrganizations(filtered);
    }
}

// Display Government Portals
function displayGovernmentPortals(portals) {
    const portalsList = document.getElementById('govtPortalsList');
    portalsList.innerHTML = '';
    
    portals.forEach(portal => {
        const portalCard = `
            <div class="govt-card" data-category="${portal.category}">
                <div class="govt-header">
                    <div class="govt-icon">${portal.icon}</div>
                    <h3>${portal.name}</h3>
                </div>
                <p>${portal.description}</p>
                <div class="govt-details">
                    <p><i class="fas fa-link"></i> <a href="${portal.url}" target="_blank">${portal.url}</a></p>
                </div>
                <div style="margin-top: 15px;">
                    <strong>सेवाएं:</strong>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        ${portal.services.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn-primary" style="margin-top: 15px; width: 100%;" onclick="window.open('${portal.url}', '_blank')">
                    पोर्टल पर जाएं <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
        `;
        portalsList.innerHTML += portalCard;
    });
}

// Filter Government Portals
function filterGovt(category) {
    document.querySelectorAll('.govt-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayGovernmentPortals(governmentPortals);
    } else {
        const filtered = governmentPortals.filter(p => p.category === category);
        displayGovernmentPortals(filtered);
    }
}

// Display Events
function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = `
            <div class="event-card">
                <img src="${event.image}" alt="${event.title}" class="event-image">
                <div class="event-content">
                    <span class="event-date">${event.date}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-meta">
                        <span><i class="fas fa-clock"></i> ${event.time}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    </div>
                    <p>${event.description}</p>
                </div>
            </div>
        `;
        eventsList.innerHTML += eventCard;
    });
}

// Display Gallery
function displayGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    galleryItems.forEach(item => {
        const galleryItem = `
            <div class="gallery-item">
                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                <div class="gallery-overlay">
                    <h4>${item.title}</h4>
                </div>
            </div>
        `;
        galleryGrid.innerHTML += galleryItem;
    });
}

// Animate Counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString('hi-IN') + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString('hi-IN');
            }
        }, 16);
    });
}

// Handle Contact Form
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    showNotification('आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।', 'success');
    
    document.getElementById('contactForm').reset();
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        showNotification('लॉगिन सफल! स्वागत है।', 'success');
        showSection('home');
    }
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('पासवर्ड मेल नहीं खाते। कृपया फिर से प्रयास करें।', 'error');
        return;
    }
    
    if (name && email && phone && password) {
        showNotification('खाता सफलतापूर्वक बनाया गया! कृपया लॉगिन करें।', 'success');
        showSection('login');
    }
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'var(--accent-color)' : 'var(--primary-color)';
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);