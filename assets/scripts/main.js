// Mock Data Configuration & Storage
const seededProducts = [
    {
        id: 1,
        name: 'Стул "Эко"',
        category: 'Стулья',
        price: 4500,
        lead: 'Лаконичный обеденный стул из массива ясеня для светлых и теплых интерьеров.',
        desc: 'Стул "Эко" создается вручную из тщательно отобранного массива ясеня. Плавный изгиб спинки поддерживает посадку, а натуральное масло подчеркивает природный рисунок древесины и защищает поверхность от повседневной нагрузки. Модель подходит для кухни, столовой и камерных кафе.',
        details: ['Массив ясеня с ручной шлифовкой', 'Финишное покрытие натуральным маслом и воском', 'Усиленная посадочная часть для ежедневного использования'],
        specs: { material: 'Ясень, натуральное масло', dimensions: '48 x 52 x 84 см', production: '10-14 дней' },
        img: 'images/chair.jpg'
    },
    {
        id: 2,
        name: 'Стол "Лофт"',
        category: 'Столы',
        price: 15000,
        lead: 'Выразительный обеденный стол с массивной столешницей и архитектурным силуэтом.',
        desc: 'Стол "Лофт" объединяет теплую фактуру дерева и собранную геометрию современного интерьера. Толстая столешница из дуба проходит многоэтапную ручную обработку, а устойчивая опора рассчитана на долгую эксплуатацию. Это предмет для семейных ужинов, рабочих встреч и пространств, где мебель должна производить впечатление.',
        details: ['Столешница из дуба с природным рисунком волокон', 'Надежное основание с антивибрационной конструкцией', 'Подходит для кухни-гостиной и студийного пространства'],
        specs: { material: 'Дуб, металл, матовое масло', dimensions: '180 x 90 x 76 см', production: '14-18 дней' },
        img: 'images/table.jpg'
    },
    {
        id: 3,
        name: 'Тумба "Минимал"',
        category: 'Тумбы',
        price: 8000,
        lead: 'Компактная прикроватная тумба с чистыми линиями и скрытым хранением.',
        desc: 'Тумба "Минимал" спроектирована для спокойных спален и небольших пространств. Выдвижной ящик движется мягко, без резких звуков, а верхняя плоскость удобна для книги, лампы и повседневных мелочей. Внешне модель выглядит легко, но при этом сохраняет надежность за счет плотной сборки и усиленных соединений.',
        details: ['Компактный формат для небольших комнат', 'Ручная сборка с точной подгонкой деталей', 'Скрытый ящик для хранения аксессуаров и документов'],
        specs: { material: 'Береза, шпон дуба, масло', dimensions: '45 x 38 x 54 см', production: '7-10 дней' },
        img: 'images/pedestal.jpg'
    },
    {
        id: 4,
        name: 'Кресло "Комфорт"',
        category: 'Кресла',
        price: 12000,
        lead: 'Мягкое дизайнерское кресло для зоны отдыха, чтения и спокойных вечерних ритуалов.',
        desc: 'Кресло "Комфорт" создается как центр уютной комнаты. Глубокая посадка, мягкий наполнитель и тактильная обивка помогают расслабиться, а древесный каркас добавляет визуальной благородности. Модель хорошо смотрится рядом с торшером, журнальным столиком или в библиотечной зоне.',
        details: ['Эргономичная высокая спинка и глубокое сиденье', 'Износостойкая текстильная обивка теплого оттенка', 'Каркас усилен для стабильной ежедневной эксплуатации'],
        specs: { material: 'Бук, мебельная ткань, пенополиуретан', dimensions: '78 x 84 x 96 см', production: '12-16 дней' },
        img: 'images/armchair.jpg'
    },
    {
        id: 5,
        name: 'Диван "Сканди"',
        category: 'Диваны',
        price: 32000,
        lead: 'Прямой диван для гостиной с мягкой посадкой и спокойным северным силуэтом.',
        desc: 'Диван "Сканди" рассчитан на ежедневный отдых, прием гостей и долгую службу в семейной гостиной. Пропорции выверены так, чтобы модель выглядела легкой, но при этом давала полноценную поддержку спине и плечам.',
        details: ['Износостойкая мебельная ткань', 'Наполнитель повышенной упругости', 'Съемные подушки для удобного ухода'],
        specs: { material: 'Брус, ткань, пенополиуретан', dimensions: '220 x 96 x 88 см', production: '18-24 дней' },
        img: 'images/sofa.jpg'
    },
    {
        id: 6,
        name: 'Комод "Линия"',
        category: 'Хранение',
        price: 18500,
        lead: 'Вертикальный комод с выразительным рисунком фасадов и вместительными ящиками.',
        desc: 'Комод "Линия" помогает организовать хранение в спальне, прихожей или гостиной. Он сочетает компактный след на полу с хорошим полезным объемом, сохраняя чистый и архитектурный вид.',
        details: ['Четыре глубоких ящика', 'Мягкое закрывание направляющих', 'Подходит для спальни и прихожей'],
        specs: { material: 'МДФ, шпон дуба, эмаль', dimensions: '90 x 45 x 110 см', production: '14-18 дней' },
        img: 'images/chest.jpg'
    },
    {
        id: 7,
        name: 'Стеллаж "Модуль"',
        category: 'Хранение',
        price: 21000,
        lead: 'Открытый стеллаж для книг, декора и спокойной организации пространства.',
        desc: 'Стеллаж "Модуль" собирается из крепких секций и хорошо смотрится как у стены, так и в роли легкой перегородки. Его дизайн не перегружает интерьер и позволяет свободно менять сценарии хранения.',
        details: ['Устойчивый каркас с усиленными полками', 'Подходит для книг и предметов декора', 'Можно использовать для зонирования'],
        specs: { material: 'Металл, дубовый шпон', dimensions: '120 x 36 x 200 см', production: '12-16 дней' },
        img: 'images/shelf.jpg'
    },
    {
        id: 8,
        name: 'Консоль "Галерея"',
        category: 'Консоли',
        price: 12800,
        lead: 'Узкая консоль для прихожей и гостиной с аккуратным графичным профилем.',
        desc: 'Консоль "Галерея" помогает оформить входную зону, стену в гостиной или пространство под зеркалом. Небольшая глубина делает ее удобной даже в компактных квартирах.',
        details: ['Компактная глубина для небольших зон', 'Подходит для декора и ежедневных мелочей', 'Сбалансированная геометрия без перегруза'],
        specs: { material: 'Дуб, сталь, масло', dimensions: '110 x 32 x 82 см', production: '10-12 дней' },
        img: 'images/console.jpg'
    },
    {
        id: 9,
        name: 'Кровать "Тихий дом"',
        category: 'Кровати',
        price: 41000,
        lead: 'Кровать с высоким мягким изголовьем для спокойной спальни и мягкого света.',
        desc: 'Кровать "Тихий дом" создается с акцентом на комфортный сон и визуальную мягкость интерьера. Устойчивое основание и продуманная высота делают ее удобной для ежедневного использования.',
        details: ['Высокое мягкое изголовье', 'Надежное основание под матрас', 'Лаконичный силуэт для современных спален'],
        specs: { material: 'Бук, ткань, ламели', dimensions: '212 x 172 x 110 см', production: '16-22 дней' },
        img: 'images/bed.jpg'
    },
    {
        id: 10,
        name: 'Торшер "Норд"',
        category: 'Освещение',
        price: 9600,
        lead: 'Напольный светильник для уютного чтения и мягкой вечерней атмосферы.',
        desc: 'Торшер "Норд" дополняет кресло, диванную группу или спальню спокойным рассеянным светом. Он становится функциональным акцентом и помогает сделать интерьер завершенным.',
        details: ['Мягкий свет для зоны отдыха', 'Устойчивое основание', 'Подходит для спальни и гостиной'],
        specs: { material: 'Металл, текстиль, дерево', dimensions: '45 x 45 x 162 см', production: '5-7 дней' },
        img: 'images/floorlamp.jpg'
    }
];

const mergeSeededProducts = existingProducts => {
    if (!Array.isArray(existingProducts) || existingProducts.length === 0) {
        return seededProducts;
    }

    const mergedSeeded = seededProducts.map(seeded => {
        const existing = existingProducts.find(product => product.id === seeded.id);
        if (!existing) {
            return seeded;
        }

        return {
            ...seeded,
            ...existing,
            img: seeded.img,
            category: existing.category || seeded.category,
            lead: existing.lead || seeded.lead,
            desc: existing.desc || seeded.desc,
            details: Array.isArray(existing.details) && existing.details.length ? existing.details : seeded.details,
            specs: existing.specs || seeded.specs
        };
    });

    const customProducts = existingProducts.filter(product => !seededProducts.some(seeded => seeded.id === product.id));
    return [...mergedSeeded, ...customProducts];
};

const initData = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify(mergeSeededProducts(storedProducts)));

    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([
            { id: 1, login: 'admin', password: '123', role: 'admin', name: 'Администратор' },
            { id: 2, login: 'test', password: '123', role: 'user', name: 'Тестовый покупатель' }
        ]));
    }
    if (!localStorage.getItem('reviews')) {
        localStorage.setItem('reviews', JSON.stringify([
            { id: 1, name: 'Иван', text: 'Отличное качество!', rating: 5 }
        ]));
    }
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
};

// Global State access
const getStr = key => JSON.parse(localStorage.getItem(key)) || [];
const setStr = (key, val) => localStorage.setItem(key, JSON.stringify(val));
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

const escapeHtml = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizeText = value => String(value ?? '')
    .toLowerCase()
    .replace(/"/g, '')
    .replace(/ё/g, 'е')
    .trim();

const getFallbackImageByCategory = category => {
    const normalizedCategory = normalizeText(category);

    if (normalizedCategory.includes('стул')) return 'images/chair.jpg';
    if (normalizedCategory.includes('стол')) return 'images/table.jpg';
    if (normalizedCategory.includes('тумб')) return 'images/pedestal.jpg';
    if (normalizedCategory.includes('кресл')) return 'images/armchair.jpg';
    if (normalizedCategory.includes('диван')) return 'images/sofa.jpg';
    if (normalizedCategory.includes('кроват')) return 'images/bed.jpg';
    if (normalizedCategory.includes('консол')) return 'images/console.jpg';
    if (normalizedCategory.includes('освещ') || normalizedCategory.includes('торшер') || normalizedCategory.includes('свет')) return 'images/floorlamp.jpg';
    if (normalizedCategory.includes('хранен')) return 'images/chest.jpg';

    return 'images/chair.jpg';
};

const getFallbackImageByName = name => {
    const normalizedName = normalizeText(name);

    const knownModels = [
        { match: ['стул', 'эко'], img: 'images/chair.jpg' },
        { match: ['стол', 'лофт'], img: 'images/table.jpg' },
        { match: ['тумба', 'минимал'], img: 'images/pedestal.jpg' },
        { match: ['кресло', 'комфорт'], img: 'images/armchair.jpg' },
        { match: ['диван', 'сканди'], img: 'images/sofa.jpg' },
        { match: ['комод', 'линия'], img: 'images/chest.jpg' },
        { match: ['стеллаж', 'модуль'], img: 'images/shelf.jpg' },
        { match: ['консоль', 'галерея'], img: 'images/console.jpg' },
        { match: ['кровать', 'тихий дом'], img: 'images/bed.jpg' },
        { match: ['торшер', 'норд'], img: 'images/floorlamp.jpg' }
    ];

    const exactModel = knownModels.find(model => model.match.every(part => normalizedName.includes(part)));
    if (exactModel) {
        return exactModel.img;
    }

    if (normalizedName.includes('стул')) return 'images/chair.jpg';
    if (normalizedName.includes('стол')) return 'images/table.jpg';
    if (normalizedName.includes('тумб')) return 'images/pedestal.jpg';
    if (normalizedName.includes('кресл')) return 'images/armchair.jpg';
    if (normalizedName.includes('диван')) return 'images/sofa.jpg';
    if (normalizedName.includes('кровать')) return 'images/bed.jpg';
    if (normalizedName.includes('стеллаж')) return 'images/shelf.jpg';
    if (normalizedName.includes('комод')) return 'images/chest.jpg';
    if (normalizedName.includes('консол')) return 'images/console.jpg';
    if (normalizedName.includes('торшер') || normalizedName.includes('свет')) return 'images/floorlamp.jpg';

    return '';
};

const resolveProductImage = (item, products = []) => {
    const normalizedName = normalizeText(item?.name);
    const normalizedCategory = normalizeText(item?.category);

    const matchedProduct = products.find(product => product.id === item?.id)
        || products.find(product => normalizeText(product.name) === normalizedName)
        || products.find(product => normalizedName && (normalizedName.includes(normalizeText(product.name)) || normalizeText(product.name).includes(normalizedName)))
        || products.find(product => normalizeText(product.category) === normalizedCategory);

    if (matchedProduct?.img) {
        return matchedProduct.img;
    }

    if (item?.img) {
        return item.img;
    }

    const imageByName = getFallbackImageByName(item?.name);
    if (imageByName) {
        return imageByName;
    }

    return getFallbackImageByCategory(item?.category);
};

const loadExternalScript = src => new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
        if (existingScript.dataset.loaded === 'true') {
            resolve();
            return;
        }

        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', () => reject(new Error(`Не удалось загрузить скрипт: ${src}`)), { once: true });
        return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        resolve();
    }, { once: true });
    script.addEventListener('error', () => reject(new Error(`Не удалось загрузить скрипт: ${src}`)), { once: true });
    document.body.appendChild(script);
});

const ensureSiteDialog = () => {
    let dialog = document.getElementById('site-dialog');
    if (dialog) {
        return dialog;
    }

    dialog = document.createElement('div');
    dialog.id = 'site-dialog';
    dialog.className = 'site-dialog';
    dialog.innerHTML = `
        <div class="site-dialog__backdrop"></div>
        <div class="site-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="site-dialog-title" aria-describedby="site-dialog-message">
            <span class="site-dialog__eyebrow">HandCraft</span>
            <h3 class="site-dialog__title" id="site-dialog-title">Подтвердите действие</h3>
            <p class="site-dialog__message" id="site-dialog-message"></p>
            <div class="site-dialog__actions"></div>
        </div>
    `;

    document.body.appendChild(dialog);
    return dialog;
};

const closeSiteDialog = dialog => {
    dialog.classList.remove('is-visible');
    document.body.classList.remove('dialog-open');
};

const showSiteDialog = ({ title = 'Подтвердите действие', message = '', confirmText = 'OK', cancelText = '', tone = 'default' } = {}) => new Promise(resolve => {
    const dialog = ensureSiteDialog();
    const titleEl = dialog.querySelector('.site-dialog__title');
    const messageEl = dialog.querySelector('.site-dialog__message');
    const actionsEl = dialog.querySelector('.site-dialog__actions');
    const panel = dialog.querySelector('.site-dialog__panel');

    titleEl.textContent = title;
    messageEl.textContent = message;
    actionsEl.innerHTML = '';
    panel.dataset.tone = tone;

    const cleanup = value => {
        closeSiteDialog(dialog);
        document.removeEventListener('keydown', handleKeydown);
        resolve(value);
    };

    const confirmButton = document.createElement('button');
    confirmButton.type = 'button';
    confirmButton.className = 'btn site-dialog__button';
    confirmButton.textContent = confirmText;
    confirmButton.addEventListener('click', () => cleanup(true));
    actionsEl.appendChild(confirmButton);

    if (cancelText) {
        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.className = 'btn btn-secondary site-dialog__button';
        cancelButton.textContent = cancelText;
        cancelButton.addEventListener('click', () => cleanup(false));
        actionsEl.appendChild(cancelButton);
    }

    const handleKeydown = event => {
        if (event.key === 'Escape') {
            cleanup(false);
        }
        if (event.key === 'Enter') {
            cleanup(true);
        }
    };

    dialog.querySelector('.site-dialog__backdrop').onclick = () => cleanup(false);
    document.addEventListener('keydown', handleKeydown);
    dialog.classList.add('is-visible');
    document.body.classList.add('dialog-open');
    confirmButton.focus();
});

window.showSiteDialog = showSiteDialog;
window.alert = message => showSiteDialog({ message: String(message ?? '') });
window.confirm = message => showSiteDialog({ message: String(message ?? ''), confirmText: 'Подтвердить', cancelText: 'Отмена' });

const renderFooter = () => {
    if (document.querySelector('.site-footer')) return;

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-shell">
            <div class="footer-brand">
                <span class="footer-kicker">HandCraft Furniture</span>
                <h3>Авторская мебель для интерьеров, в которых хочется жить медленнее.</h3>
                <p>Проектируем, изготавливаем и бережно доводим каждое изделие вручную: от обеденных столов и кресел до компактных тумб и акцентных предметов.</p>
            </div>
            <div class="footer-column">
                <h4>Навигация</h4>
                <a href="index.html">Главная</a>
                <a href="catalog.html">Каталог</a>
                <a href="reviews.html">Отзывы</a>
                <a href="cart.html">Корзина</a>
            </div>
            <div class="footer-column">
                <h4>Контакты</h4>
                <p>Казань, студия ручной мебели</p>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                <a href="mailto:hello@handcraft.local">hello@handcraft.local</a>
            </div>
            <div class="footer-column">
                <h4>Почему мы</h4>
                <p>Натуральные материалы</p>
                <p>Малые тиражи</p>
                <p>Индивидуальная отделка</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 HandCraft Furniture. Ручная работа, честные материалы, спокойный дизайн.</p>
        </div>
    `;

    document.body.appendChild(footer);
};

// Helper: Check Auth for Cart
const requireAuth = (redirectUrl = 'login.html') => {
    if (!currentUser) {
        showSiteDialog({ message: 'Пожалуйста, войдите в аккаунт.' }).then(() => {
            window.location.href = redirectUrl;
        });
        return false;
    }
    return true;
};

// UI: Navigation & Burger
const setupNav = () => {
    const nav = document.getElementById('nav-links');
    const burger = document.getElementById('burger');
    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Dynamic nav links based on auth
    const authLink = document.getElementById('nav-auth');
    if (authLink) {
        if (currentUser) {
            authLink.innerHTML = `<div class="nav-auth-inline"><a class="nav-auth-link" href="${currentUser.role === 'admin' ? 'admin.html' : 'profile.html'}">Кабинет</a><span class="nav-auth-separator">/</span><a class="nav-auth-link" href="#" id="logout-btn">Выйти</a></div>`;
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
        }
    }
};

// UI: Slider (Index)
const setupSlider = () => {
    const slidesContainer = document.querySelector('.slides');
    if (!slidesContainer) return;
    
    let currentIndex = 0;
    const slidesCount = document.querySelectorAll('.slide').length;
    
    const moveSlider = (dir) => {
        currentIndex = (currentIndex + dir + slidesCount) % slidesCount;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    document.querySelector('.prev').addEventListener('click', () => moveSlider(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlider(1));
    
    setInterval(() => moveSlider(1), 5000);
};

// Render: Catalog
const renderCatalog = () => {
    const grid = document.getElementById('catalog-grid');
    const featuredGrid = document.getElementById('featured-catalog-grid');
    const categoriesContainer = document.getElementById('catalog-categories');
    const products = getStr('products');
    const categories = ['Все', ...new Set(products.map(product => product.category || 'Другое'))];
    const selectedCategory = categoriesContainer?.dataset.activeCategory || 'Все';

    const filteredProducts = selectedCategory === 'Все'
        ? products
        : products.filter(product => (product.category || 'Другое') === selectedCategory);

    if (categoriesContainer) {
        categoriesContainer.innerHTML = categories.map(category => `
            <button class="category-pill ${category === selectedCategory ? 'active' : ''}" data-category="${category}">${category}</button>
        `).join('');

        categoriesContainer.querySelectorAll('.category-pill').forEach(button => {
            button.addEventListener('click', () => {
                categoriesContainer.dataset.activeCategory = button.dataset.category;
                renderCatalog();
            });
        });
    }

    if (grid) {
        grid.innerHTML = filteredProducts.map(p => `
            <div class="card fade-in">
                <img src="${p.img}" alt="${p.name}">
                <div class="card-body">
                    <span class="card-chip">${p.category || 'Ручная работа'}</span>
                    <h3 class="card-title">${p.name}</h3>
                    <p class="card-text">${p.lead || p.desc}</p>
                    <p class="card-price">${p.price} ₽</p>
                    <a href="product.html?id=${p.id}" class="btn">Подробнее</a>
                </div>
            </div>
        `).join('');
    }

    if (featuredGrid) {
        featuredGrid.innerHTML = products.slice(0, 3).map(p => `
        <div class="card fade-in">
            <img src="${p.img}" alt="${p.name}">
            <div class="card-body">
                <span class="card-chip">${p.category || 'Выбор студии'}</span>
                <h3 class="card-title">${p.name}</h3>
                <p class="card-text">${p.lead || p.desc}</p>
                <p class="card-price">${p.price} ₽</p>
                <a href="product.html?id=${p.id}" class="btn">Подробнее</a>
            </div>
        </div>
    `).join('');
    }

    triggerFadeIn();
};

// Render: Product Page
const renderProduct = () => {
    const container = document.getElementById('product-details');
    if (!container) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const product = getStr('products').find(p => p.id === id);
    
    if (!product) {
        container.innerHTML = '<p>Товар не найден.</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="product-layout fade-in">
            <img src="${product.img}" class="product-image" alt="${product.name}">
            <div class="product-content">
                <span class="product-badge">Мебель ручной работы</span>
                <h2>${product.name}</h2>
                <p class="product-lead">${product.lead || ''}</p>
                <h3 class="product-price">${product.price} ₽</h3>
                <p class="product-description">${product.desc}</p>
                <div class="product-specs">
                    <div class="spec-item"><span>Материалы</span><strong>${product.specs?.material || 'Под заказ'}</strong></div>
                    <div class="spec-item"><span>Размер</span><strong>${product.specs?.dimensions || 'Уточняется'}</strong></div>
                    <div class="spec-item"><span>Изготовление</span><strong>${product.specs?.production || 'До 14 дней'}</strong></div>
                </div>
                <ul class="product-features">
                    ${(product.details || []).map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                <div class="product-actions">
                    <button class="btn" data-action="add-to-cart" data-product-id="${product.id}">В корзину</button>
                    <button class="btn btn-secondary" data-action="add-to-favorites" data-product-id="${product.id}">В избранное</button>
                </div>
            </div>
        </div>
    `;
    triggerFadeIn();
};

const addToCart = id => {
    if(!requireAuth()) return;
    const cart = getStr('cart');
    const existing = cart.find(item => item.id === id);
    if(existing) {
        existing.qty += 1;
    } else {
        const product = getStr('products').find(p => p.id === id);
        cart.push({...product, qty: 1});
    }
    setStr('cart', cart);
    showSiteDialog({ title: 'Товар добавлен', message: 'Товар добавлен в корзину.' });
};

const addToFavs = id => {
    if(!requireAuth()) return;
    const favs = getStr('favorites');
    if(!favs.includes(id)) {
        favs.push(id);
        setStr('favorites', favs);
        showSiteDialog({ title: 'Избранное', message: 'Товар добавлен в избранное.' });
    } else {
        showSiteDialog({ title: 'Избранное', message: 'Товар уже в избранном.' });
    }
};

const renderCart = () => {
    const container = document.getElementById('cart-content');
    const totalEl = document.getElementById('cart-total');
    if (!container || !totalEl) return;

    const cart = getStr('cart');

    if (cart.length === 0) {
        container.innerHTML = '<p>Ваша корзина пуста.</p>';
        totalEl.innerText = 'Итого: 0 ₽';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <article class="cart-card">
            <img class="cart-card__image" src="${escapeHtml(item.img)}" alt="${escapeHtml(item.name)}">
            <div class="cart-card__content">
                <div class="cart-card__head">
                    <div>
                        <span class="card-chip">${escapeHtml(item.category || 'Мебель')}</span>
                        <h3 class="cart-card__title">${escapeHtml(item.name)}</h3>
                        <p class="cart-card__lead">${escapeHtml(item.lead || '')}</p>
                    </div>
                    <button class="btn btn-danger btn-small" data-action="remove-cart-item" data-cart-index="${index}">Удалить</button>
                </div>
                <div class="cart-card__meta">
                    <div class="cart-card__meta-item">
                        <span>Цена</span>
                        <strong>${item.price} ₽</strong>
                    </div>
                    <div class="cart-card__meta-item">
                        <span>Количество</span>
                        <input class="cart-qty-input" type="number" min="1" value="${item.qty}" data-action="update-cart-qty" data-cart-index="${index}">
                    </div>
                    <div class="cart-card__meta-item">
                        <span>Сумма</span>
                        <strong>${item.price * item.qty} ₽</strong>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.innerText = `Итого: ${total} ₽`;
};

const updateQty = (index, qty) => {
    const cart = getStr('cart');
    if (!cart[index]) return;
    cart[index].qty = Math.max(1, parseInt(qty, 10) || 1);
    setStr('cart', cart);
    renderCart();
};

const removeCart = index => {
    const cart = getStr('cart');
    cart.splice(index, 1);
    setStr('cart', cart);
    renderCart();
};

const clearCart = () => {
    setStr('cart', []);
    renderCart();
};

const checkout = () => {
    const cart = getStr('cart');
    if (cart.length === 0) {
        showSiteDialog({ title: 'Корзина', message: 'Корзина пуста!' });
        return;
    }

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        requireAuth();
        return;
    }

    const orders = getStr('orders');
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    orders.push({
        id: Date.now(),
        userId: user.id,
        userName: user.name,
        items: cart,
        total,
        status: 'Новый'
    });

    setStr('orders', orders);
    clearCart();
    showSiteDialog({
        title: 'Заказ оформлен',
        message: 'Заказ успешно оформлен. Вы можете отследить его в личном кабинете.'
    }).then(() => {
        window.location.href = 'profile.html';
    });
};

const toggleForm = () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('reg-form');
    if (!loginForm || !registerForm) return;

    const showLogin = loginForm.style.display === 'none';
    loginForm.style.display = showLogin ? 'block' : 'none';
    registerForm.style.display = showLogin ? 'none' : 'block';
};

const login = () => {
    const log = document.getElementById('log-login')?.value;
    const pass = document.getElementById('log-pass')?.value;
    const users = getStr('users');
    const user = users.find(item => item.login === log && item.password === pass);

    if (!user) {
        alert('Неверный логин или пароль');
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    window.location.href = user.role === 'admin' ? 'admin.html' : 'profile.html';
};

const register = () => {
    const name = document.getElementById('reg-name')?.value.trim();
    const log = document.getElementById('reg-login')?.value.trim();
    const pass = document.getElementById('reg-pass')?.value;
    if (!name || !log || !pass) {
        alert('Заполните все поля');
        return;
    }

    const users = getStr('users');
    if (users.find(user => user.login === log)) {
        alert('Логин занят');
        return;
    }

    const newUser = { id: Date.now(), name, login: log, password: pass, role: 'user' };
    users.push(newUser);
    setStr('users', users);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    currentUser = newUser;
    window.location.href = 'profile.html';
};

const resetProductForm = () => {
    const fieldIds = [
        'prod-id',
        'prod-name',
        'prod-category',
        'prod-lead',
        'prod-price',
        'prod-img',
        'prod-material',
        'prod-dimensions',
        'prod-production',
        'prod-desc',
        'prod-details'
    ];

    fieldIds.forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            field.value = '';
        }
    });
};

const renderAdminProducts = () => {
    const container = document.getElementById('admin-products');
    if (!container) return;

    const products = getStr('products');
    container.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${escapeHtml(product.name)}</td>
            <td>${product.price} ₽</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-small" data-action="edit-product" data-product-id="${product.id}">Редактировать</button>
                    <button class="btn btn-danger btn-small" data-action="delete-product" data-product-id="${product.id}">Удалить</button>
                </div>
            </td>
        </tr>
    `).join('');
};

const saveProduct = () => {
    const id = document.getElementById('prod-id')?.value;
    const name = document.getElementById('prod-name')?.value.trim();
    const category = document.getElementById('prod-category')?.value.trim();
    const lead = document.getElementById('prod-lead')?.value.trim();
    const price = document.getElementById('prod-price')?.value;
    const img = document.getElementById('prod-img')?.value.trim();
    const material = document.getElementById('prod-material')?.value.trim();
    const dimensions = document.getElementById('prod-dimensions')?.value.trim();
    const production = document.getElementById('prod-production')?.value.trim();
    const desc = document.getElementById('prod-desc')?.value.trim();
    const details = (document.getElementById('prod-details')?.value || '')
        .split('\n')
        .map(item => item.trim())
        .filter(Boolean);

    if (!name || !price) {
        alert('Заполните обязательные поля');
        return;
    }

    const products = getStr('products');
    const productData = {
        id: id ? parseInt(id, 10) : Date.now(),
        name,
        category: category || 'Другое',
        lead: lead || 'Авторская мебель ручной работы для современного интерьера.',
        price: parseInt(price, 10),
        img: img || 'images/chair.jpg',
        desc: desc || 'Изделие создается вручную из качественных материалов с вниманием к деталям и долговечности.',
        details: details.length ? details : ['Ручная сборка', 'Натуральные материалы', 'Подходит для жилого интерьера'],
        specs: {
            material: material || 'Под заказ',
            dimensions: dimensions || 'Уточняется',
            production: production || 'До 14 дней'
        }
    };

    if (id) {
        const index = products.findIndex(product => product.id === parseInt(id, 10));
        if (index > -1) {
            products[index] = productData;
        }
    } else {
        products.push(productData);
    }

    setStr('products', products);
    resetProductForm();
    renderAdminProducts();
    renderCatalog();
};

const editProduct = id => {
    const product = getStr('products').find(item => item.id === id);
    if (!product) return;

    document.getElementById('prod-id').value = product.id;
    document.getElementById('prod-name').value = product.name;
    document.getElementById('prod-category').value = product.category || '';
    document.getElementById('prod-lead').value = product.lead || '';
    document.getElementById('prod-price').value = product.price;
    document.getElementById('prod-img').value = product.img || '';
    document.getElementById('prod-material').value = product.specs?.material || '';
    document.getElementById('prod-dimensions').value = product.specs?.dimensions || '';
    document.getElementById('prod-production').value = product.specs?.production || '';
    document.getElementById('prod-desc').value = product.desc || '';
    document.getElementById('prod-details').value = (product.details || []).join('\n');
};

const deleteProduct = id => {
    const products = getStr('products').filter(product => product.id !== id);
    setStr('products', products);
    renderAdminProducts();
    renderCatalog();
};

const renderAdminOrders = () => {
    const container = document.getElementById('admin-orders');
    if (!container) return;

    const orders = getStr('orders');
    container.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${escapeHtml(order.userName)}</td>
            <td>${order.total} ₽</td>
            <td>
                <select class="status-select" data-action="update-order-status" data-order-id="${order.id}">
                    <option value="Новый" ${order.status === 'Новый' ? 'selected' : ''}>Новый</option>
                    <option value="В доставке" ${order.status === 'В доставке' ? 'selected' : ''}>В доставке</option>
                    <option value="Доставлен" ${order.status === 'Доставлен' ? 'selected' : ''}>Доставлен</option>
                    <option value="Отменен" ${order.status === 'Отменен' ? 'selected' : ''}>Отменен</option>
                </select>
            </td>
            <td><button class="btn btn-danger btn-small" data-action="delete-order" data-order-id="${order.id}">Удалить</button></td>
        </tr>
    `).join('');
};

const updateOrderStatus = (id, status) => {
    const orders = getStr('orders');
    const index = orders.findIndex(order => order.id === id);
    if (index === -1) return;

    orders[index].status = status;
    setStr('orders', orders);
};

const deleteOrder = id => {
    const orders = getStr('orders').filter(order => order.id !== id);
    setStr('orders', orders);
    renderAdminOrders();
};

const renderAdminReviews = () => {
    const container = document.getElementById('admin-reviews');
    if (!container) return;

    const reviews = getStr('reviews');
    container.innerHTML = reviews.map(review => `
        <tr>
            <td>${review.id}</td>
            <td>${escapeHtml(review.name)}</td>
            <td>${'⭐'.repeat(review.rating)}</td>
            <td>${escapeHtml(review.text)}</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-small" data-action="edit-review" data-review-id="${review.id}">Редактировать</button>
                    <button class="btn btn-danger btn-small" data-action="delete-review" data-review-id="${review.id}">Удалить</button>
                </div>
            </td>
        </tr>
    `).join('');
};

const resetReviewForm = () => {
    document.getElementById('review-id').value = '';
    document.getElementById('review-name').value = '';
    document.getElementById('review-rating').value = '5';
    document.getElementById('review-text').value = '';
};

const saveReview = () => {
    const id = document.getElementById('review-id')?.value;
    const name = document.getElementById('review-name')?.value.trim();
    const rating = parseInt(document.getElementById('review-rating')?.value || '5', 10);
    const text = document.getElementById('review-text')?.value.trim();

    if (!name || !text) {
        alert('Заполните имя и текст отзыва');
        return;
    }

    const reviews = getStr('reviews');
    const reviewData = {
        id: id ? parseInt(id, 10) : Date.now(),
        name,
        rating,
        text
    };

    if (id) {
        const index = reviews.findIndex(review => review.id === parseInt(id, 10));
        if (index > -1) {
            reviews[index] = reviewData;
        }
    } else {
        reviews.push(reviewData);
    }

    setStr('reviews', reviews);
    resetReviewForm();
    renderAdminReviews();
};

const editReview = id => {
    const review = getStr('reviews').find(item => item.id === id);
    if (!review) return;

    document.getElementById('review-id').value = review.id;
    document.getElementById('review-name').value = review.name;
    document.getElementById('review-rating').value = review.rating;
    document.getElementById('review-text').value = review.text;
};

const deleteReview = id => {
    const reviews = getStr('reviews').filter(review => review.id !== id);
    setStr('reviews', reviews);
    renderAdminReviews();
    renderReviews();
    if (document.getElementById('review-id')?.value === String(id)) {
        resetReviewForm();
    }
};

const renderProfile = () => {
    const profileName = document.getElementById('profile-name');
    const ordersContainer = document.getElementById('orders-list');
    const favoritesContainer = document.getElementById('favs-list');
    if (!profileName || !ordersContainer || !favoritesContainer) return;

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role === 'admin') {
        window.location.href = 'login.html';
        return;
    }

    profileName.innerText = `Здравствуйте, ${user.name}!`;

    const allProducts = getStr('products');
    const orders = getStr('orders').filter(order => order.userId === user.id);
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p class="profile-empty">У вас пока нет заказов.</p>';
    } else {
        ordersContainer.innerHTML = orders.map(order => `
            <div class="order-card">
                <div class="order-card__top">
                    <div>
                        <h4>Заказ #${order.id}</h4>
                        <p class="order-card__status">Статус: ${escapeHtml(order.status)}</p>
                    </div>
                    <strong class="order-card__total">${order.total} ₽</strong>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        ${(() => {
                            const imageSrc = resolveProductImage(item, allProducts);

                            return `
                        <div class="order-item">
                            <img class="order-item__image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.name)}">
                            <div class="order-item__content">
                                <h5>${escapeHtml(item.name)}</h5>
                                <p>${escapeHtml(item.lead || item.category || 'Авторская мебель')}</p>
                                <div class="order-item__meta">
                                    <span>${item.price} ₽</span>
                                    <span>Количество: ${item.qty}</span>
                                    <span>Сумма: ${item.price * item.qty} ₽</span>
                                </div>
                            </div>
                        </div>
                    `;
                        })()}
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    const favoriteIds = getStr('favorites');
    const products = allProducts.filter(product => favoriteIds.includes(product.id));
    if (products.length === 0) {
        favoritesContainer.innerHTML = '<p class="profile-empty" style="grid-column: 1/-1;">Нет избранных товаров.</p>';
    } else {
        favoritesContainer.innerHTML = products.map(product => `
            <div class="card">
                <img src="${escapeHtml(product.img)}" alt="${escapeHtml(product.name)}">
                <div class="card-body">
                    <h3 class="card-title">${escapeHtml(product.name)}</h3>
                    <button class="btn btn-secondary btn-small" data-action="remove-favorite" data-product-id="${product.id}">Удалить</button>
                </div>
            </div>
        `).join('');
    }
};

const removeFav = id => {
    const favorites = getStr('favorites').filter(favoriteId => favoriteId !== id);
    setStr('favorites', favorites);
    renderProfile();
};

const renderReviews = () => {
    const container = document.getElementById('reviews-list');
    if (!container) return;

    const reviews = getStr('reviews');
    container.innerHTML = reviews.map(review => `
        <div style="background:#fff; padding:1.5rem; border-radius:8px; margin-bottom:1rem; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                <strong>${escapeHtml(review.name)}</strong>
                <span>${'⭐'.repeat(review.rating)}</span>
            </div>
            <p>${escapeHtml(review.text)}</p>
        </div>
    `).join('');
};

const addReview = () => {
    const name = document.getElementById('rev-name')?.value.trim();
    const text = document.getElementById('rev-text')?.value.trim();
    const rating = parseInt(document.getElementById('rev-rating')?.value || '5', 10);

    if (!name || !text) {
        alert('Заполните имя и текст');
        return;
    }

    const reviews = getStr('reviews');
    reviews.push({ id: Date.now(), name, text, rating });
    setStr('reviews', reviews);

    document.getElementById('rev-name').value = '';
    document.getElementById('rev-text').value = '';
    document.getElementById('rev-rating').value = '5';
    renderReviews();
};

const initReviewsMap = async () => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    try {
        await loadExternalScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js');
    } catch (error) {
        mapContainer.innerHTML = '<p>Карта временно недоступна.</p>';
        return;
    }

    if (mapContainer.dataset.mapReady === 'true' || typeof window.L === 'undefined') {
        return;
    }

    const map = window.L.map('map').setView([55.796127, 49.106414], 13);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    window.L.marker([55.796127, 49.106414]).addTo(map)
        .bindPopup('HandCraft Studio, Казань')
        .openPopup();
    mapContainer.dataset.mapReady = 'true';
};

const initAdminPage = () => {
    if (!document.getElementById('admin-products')) return;

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role !== 'admin') {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('admin-save-product')?.addEventListener('click', saveProduct);
    document.getElementById('admin-save-review')?.addEventListener('click', saveReview);
    document.getElementById('admin-reset-review')?.addEventListener('click', resetReviewForm);
    renderAdminProducts();
    renderAdminOrders();
    renderAdminReviews();
};

const initCartPage = () => {
    if (!document.getElementById('cart-content')) return;
    if (!requireAuth()) return;

    document.getElementById('clear-cart-btn')?.addEventListener('click', clearCart);
    document.getElementById('checkout-btn')?.addEventListener('click', checkout);
    renderCart();
};

const initLoginPage = () => {
    if (!document.getElementById('login-form')) return;

    document.getElementById('login-submit')?.addEventListener('click', login);
    document.getElementById('register-submit')?.addEventListener('click', register);
    document.getElementById('toggle-to-register')?.addEventListener('click', toggleForm);
    document.getElementById('toggle-to-login')?.addEventListener('click', toggleForm);
};

const initProfilePage = () => {
    if (!document.getElementById('orders-list')) return;
    renderProfile();
};

const initReviewsPage = () => {
    if (!document.getElementById('reviews-list')) return;

    document.getElementById('add-review-btn')?.addEventListener('click', addReview);
    renderReviews();
    initReviewsMap();
};

const setupDelegatedActions = () => {
    document.addEventListener('click', event => {
        const actionElement = event.target.closest('[data-action]');
        if (!actionElement) return;

        const productId = parseInt(actionElement.dataset.productId || '', 10);
        const reviewId = parseInt(actionElement.dataset.reviewId || '', 10);
        const orderId = parseInt(actionElement.dataset.orderId || '', 10);
        const cartIndex = parseInt(actionElement.dataset.cartIndex || '', 10);

        switch (actionElement.dataset.action) {
            case 'add-to-cart':
                addToCart(productId);
                break;
            case 'add-to-favorites':
                addToFavs(productId);
                break;
            case 'remove-cart-item':
                removeCart(cartIndex);
                break;
            case 'edit-product':
                editProduct(productId);
                break;
            case 'delete-product':
                deleteProduct(productId);
                break;
            case 'delete-order':
                deleteOrder(orderId);
                break;
            case 'edit-review':
                editReview(reviewId);
                break;
            case 'delete-review':
                deleteReview(reviewId);
                break;
            case 'remove-favorite':
                removeFav(productId);
                break;
            default:
                break;
        }
    });

    document.addEventListener('change', event => {
        const actionElement = event.target.closest('[data-action]');
        if (!actionElement) return;

        if (actionElement.dataset.action === 'update-cart-qty') {
            updateQty(parseInt(actionElement.dataset.cartIndex || '', 10), event.target.value);
        }

        if (actionElement.dataset.action === 'update-order-status') {
            updateOrderStatus(parseInt(actionElement.dataset.orderId || '', 10), event.target.value);
        }
    });
};

// Scroll Animations
const triggerFadeIn = () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    elements.forEach(el => observer.observe(el));
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initData();
    setupNav();
    setupDelegatedActions();
    renderFooter();
    setupSlider();
    renderCatalog();
    renderProduct();
    initAdminPage();
    initCartPage();
    initLoginPage();
    initProfilePage();
    initReviewsPage();
    triggerFadeIn();
});
