const USER_ID =
  localStorage.getItem('clickstream_user_id') || 'USER_101';

const MAX_VISIBLE_EVENTS = 12;

// AWS API Gateway
const API_URL =
  'https://17b1ofat3b.execute-api.us-east-1.amazonaws.com/events';

const RECOMMENDATION_API_URL =
  'https://17b1ofat3b.execute-api.us-east-1.amazonaws.com/recommendations';

const products = [
  {
    id: 'studio-headphones',
    name: 'Studio Headphones',
    category: 'Headphones',
    price: 129,
    tag: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80',
    description:
      'Rich, balanced sound and a comfortable over-ear fit for long listening sessions.'
  },
  {
    id: 'everyday-laptop',
    name: 'Everyday Laptop',
    category: 'Laptops',
    price: 899,
    tag: 'New arrival',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80',
    description:
      'A lightweight everyday companion with the power to move from desk to day trip.'
  },
  {
    id: 'pocket-smartphone',
    name: 'Pocket Smartphone',
    category: 'Smartphones',
    price: 649,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80',
    description:
      'A bright, crisp display and a capable camera in a thoughtfully sized design.'
  },
  {
    id: 'mechanical-keyboard',
    name: 'Mechanical Keyboard',
    category: 'Keyboards',
    price: 109,
    tag: 'Desk favorite',
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80',
    description:
      'A tactile, satisfying typing experience with a clean profile for any workspace.'
  },
  {
    id: 'wireless-mouse',
    name: 'Wireless Mouse',
    category: 'Mice',
    price: 48,
    tag: 'Everyday pick',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80',
    description:
      'Precise wireless control in a comfortable shape made for all-day use.'
  },
  {
    id: 'smart-watch',
    name: 'Smart Watch',
    category: 'Watches',
    price: 229,
    tag: 'Just in',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
    description:
      'Keep your day in view with useful activity insights and a versatile everyday look.'
  },
  {
    id: 'fitness-watch',
    name: 'Fitness Watch',
    category: 'Watches',
    price: 179,
    tag: 'Activity ready',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=700&q=80',
    description: 'Track workouts, daily movement and recovery with a comfortable fitness-first watch.'
  },
  {
    id: 'sport-watch',
    name: 'Sport Watch',
    category: 'Watches',
    price: 199,
    tag: 'Made to move',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80',
    description: 'A durable, easy-to-read watch built to keep pace with outdoor training.'
  },
  {
    id: 'classic-watch',
    name: 'Classic Watch',
    category: 'Watches',
    price: 149,
    tag: 'Timeless style',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80',
    description: 'A refined everyday timepiece with a clean dial and an understated profile.'
  },
  {
    id: 'premium-smart-watch',
    name: 'Premium Smart Watch',
    category: 'Watches',
    price: 399,
    tag: 'Premium pick',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80',
    description: 'A polished smartwatch pairing detailed health insights with premium materials.'
  },
  {
    id: 'gaming-laptop',
    name: 'Gaming Laptop',
    category: 'Laptops',
    price: 1499,
    tag: 'High performance',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80',
    description: 'Responsive graphics and fast performance for immersive gaming sessions.'
  },
  {
    id: 'business-laptop',
    name: 'Business Laptop',
    category: 'Laptops',
    price: 1199,
    tag: 'Work essential',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
    description: 'A dependable, portable laptop designed for focused work wherever the day goes.'
  },
  {
    id: 'pro-laptop',
    name: 'Pro Laptop',
    category: 'Laptops',
    price: 1799,
    tag: 'Creator ready',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80',
    description: 'Power through demanding creative projects with a vivid display and fast hardware.'
  },
  {
    id: 'ultra-laptop',
    name: 'Ultra Laptop',
    category: 'Laptops',
    price: 1399,
    tag: 'Lightweight',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80',
    description: 'A slim, light laptop that brings all-day portability to everyday productivity.'
  },
  {
    id: 'rgb-gaming-keyboard',
    name: 'RGB Gaming Keyboard',
    category: 'Keyboards',
    price: 139,
    tag: 'Game on',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=700&q=80',
    description: 'Responsive mechanical-style keys and customizable lighting for gaming setups.'
  },
  {
    id: 'wireless-keyboard',
    name: 'Wireless Keyboard',
    category: 'Keyboards',
    price: 79,
    tag: 'Cable free',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=700&q=80',
    description: 'A comfortable wireless keyboard that keeps desks tidy and typing effortless.'
  },
  {
    id: 'compact-keyboard',
    name: 'Compact Keyboard',
    category: 'Keyboards',
    price: 89,
    tag: 'Space saver',
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=700&q=80',
    description: 'A compact layout leaves more room for your mouse without losing key essentials.'
  },
  {
    id: 'ergonomic-keyboard',
    name: 'Ergonomic Keyboard',
    category: 'Keyboards',
    price: 119,
    tag: 'Comfort pick',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80',
    description: 'A thoughtfully shaped keyboard supports a more relaxed position through long workdays.'
  },
  {
    id: 'gaming-mouse',
    name: 'Gaming Mouse',
    category: 'Mice',
    price: 69,
    tag: 'Fast response',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80',
    description: 'Accurate tracking and programmable controls give every movement a purpose.'
  },
  {
    id: 'ergonomic-mouse',
    name: 'Ergonomic Mouse',
    category: 'Mice',
    price: 59,
    tag: 'Comfort pick',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=700&q=80',
    description: 'A contoured shape supports a natural grip for comfortable all-day navigation.'
  },
  {
    id: 'silent-mouse',
    name: 'Silent Mouse',
    category: 'Mice',
    price: 39,
    tag: 'Quiet clicks',
    image: 'https://images.unsplash.com/photo-1586349906319-7aa2ad6fcf45?auto=format&fit=crop&w=700&q=80',
    description: 'Quiet, precise clicks make this mouse a considerate companion in shared spaces.'
  },
  {
    id: 'precision-mouse',
    name: 'Precision Mouse',
    category: 'Mice',
    price: 89,
    tag: 'Fine control',
    image: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d410?auto=format&fit=crop&w=700&q=80',
    description: 'Fine-grained tracking and a balanced shape deliver dependable cursor control.'
  },
  {
    id: 'pro-smartphone',
    name: 'Pro Smartphone',
    category: 'Smartphones',
    price: 999,
    tag: 'Pro camera',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80',
    description: 'A bright display, versatile camera system and fast performance in one device.'
  },
  {
    id: 'gaming-smartphone',
    name: 'Gaming Smartphone',
    category: 'Smartphones',
    price: 899,
    tag: 'Game ready',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80',
    description: 'A smooth high-refresh display and responsive performance keep mobile games fluid.'
  },
  {
    id: 'camera-smartphone',
    name: 'Camera Smartphone',
    category: 'Smartphones',
    price: 849,
    tag: 'Capture more',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=700&q=80',
    description: 'Capture detailed photos and clear video with a versatile pocket-sized camera.'
  },
  {
    id: 'budget-smartphone',
    name: 'Budget Smartphone',
    category: 'Smartphones',
    price: 299,
    tag: 'Great value',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80',
    description: 'The everyday essentials, a bright screen and a capable camera at a friendly price.'
  },
  {
    id: 'wireless-headphones',
    name: 'Wireless Headphones',
    category: 'Headphones',
    price: 159,
    tag: 'Cable free',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=80',
    description: 'Enjoy rich sound and easy wireless listening with a comfortable over-ear fit.'
  },
  {
    id: 'gaming-headset',
    name: 'Gaming Headset',
    category: 'Headphones',
    price: 119,
    tag: 'Game audio',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80',
    description: 'Clear team chat and immersive sound help bring every game session to life.'
  },
  {
    id: 'noise-cancelling-headphones',
    name: 'Noise Cancelling Headphones',
    category: 'Headphones',
    price: 279,
    tag: 'Find your focus',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80',
    description: 'Tune out distractions and settle into detailed sound with active noise cancelling.'
  },
  {
    id: 'sport-earbuds',
    name: 'Sport Earbuds',
    category: 'Headphones',
    price: 89,
    tag: 'Workout ready',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80',
    description: 'Lightweight, secure-fit earbuds bring motivating sound to every workout.'
  },
  {
    id: '24-inch-monitor',
    name: '24-inch Monitor',
    category: 'Monitors',
    price: 179,
    tag: 'Desk essential',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80',
    description: 'A sharp 24-inch display makes everyday work and entertainment easy to enjoy.'
  },
  {
    id: '27-inch-monitor',
    name: '27-inch Monitor',
    category: 'Monitors',
    price: 279,
    tag: 'Room to work',
    image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=700&q=80',
    description: 'A spacious 27-inch screen gives projects and entertainment more room to breathe.'
  },
  {
    id: '4k-monitor',
    name: '4K Monitor',
    category: 'Monitors',
    price: 499,
    tag: 'Ultra detailed',
    image: 'https://images.unsplash.com/photo-1586210579191-8377e2c7c465?auto=format&fit=crop&w=700&q=80',
    description: 'Fine 4K detail and vivid color make this display a natural fit for creative work.'
  },
  {
    id: 'gaming-monitor',
    name: 'Gaming Monitor',
    category: 'Monitors',
    price: 399,
    tag: 'Smooth motion',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=700&q=80',
    description: 'Fast refresh and crisp visuals keep gameplay smooth and responsive.'
  },
  {
    id: 'ultrawide-monitor',
    name: 'Ultrawide Monitor',
    category: 'Monitors',
    price: 599,
    tag: 'Wider view',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80',
    description: 'An expansive ultrawide workspace makes multitasking and immersive play feel natural.'
  },
  {
    id: 'standard-tablet',
    name: 'Standard Tablet',
    category: 'Tablets',
    price: 399,
    tag: 'Everyday use',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80',
    description: 'A versatile touchscreen for reading, streaming, browsing and staying organized.'
  },
  {
    id: 'pro-tablet',
    name: 'Pro Tablet',
    category: 'Tablets',
    price: 799,
    tag: 'Creative power',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=80',
    description: 'A vivid display and capable performance support creative work on the move.'
  },
  {
    id: 'mini-tablet',
    name: 'Mini Tablet',
    category: 'Tablets',
    price: 329,
    tag: 'Take it anywhere',
    image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?auto=format&fit=crop&w=700&q=80',
    description: 'A compact tablet slips easily into your bag for entertainment on the go.'
  },
  {
    id: 'gaming-tablet',
    name: 'Gaming Tablet',
    category: 'Tablets',
    price: 549,
    tag: 'Play anywhere',
    image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=700&q=80',
    description: 'A responsive touchscreen and strong performance make gaming portable.'
  },
  {
    id: 'student-tablet',
    name: 'Student Tablet',
    category: 'Tablets',
    price: 279,
    tag: 'Study companion',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80',
    description: 'A lightweight study companion for notes, research and online classes.'
  }
];


// =========================================================
// DOM ELEMENTS
// =========================================================

const eventFeed = document.querySelector('#event-feed');
const eventCount = document.querySelector('#event-count');
const feedEmpty = document.querySelector('#feed-empty');
const productGrid = document.querySelector('#product-grid');
const searchInput = document.querySelector('#product-search');
const searchForm = document.querySelector('.search-form');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const cartCount = document.querySelector('.cart-count');
const cartButton = document.querySelector('.cart-button');
const loggedInUser = document.querySelector('#logged-in-user');
const logoutButton = document.querySelector('#logout-button');
const productDialog = document.querySelector('#product-dialog');

const cartConfirmation = document.createElement('span');
cartConfirmation.className = 'cart-confirmation';
cartConfirmation.setAttribute('role', 'status');
cartConfirmation.setAttribute('aria-live', 'polite');
cartConfirmation.textContent = 'Added to bag';
cartConfirmation.hidden = true;
cartConfirmation.style.cssText = 'position:absolute;top:calc(100% + 8px);right:0;z-index:5;padding:7px 10px;border:1px solid #e3e7df;border-radius:3px;background:#fff;color:#1d2521;font-size:11px;white-space:nowrap;box-shadow:0 4px 14px rgba(29,37,33,.12);opacity:0;transform:translateY(-4px);transition:opacity .15s ease,transform .15s ease;pointer-events:none;';
cartButton.style.position = 'relative';
cartButton.appendChild(cartConfirmation);

let generatedEventCount = 0;
let cartItems = 0;
let activeProduct = null;
let cartConfirmationTimer;
let cartConfirmationHideTimer;
let recommendationRequestVersion = 0;
const addButtonTimers = new WeakMap();

loggedInUser.textContent = `Logged in as: ${USER_ID}`;

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('clickstream_user_id');
  window.location.href = 'index.html';
});


// =========================================================
// CLICKSTREAM TRACKING
// =========================================================

function trackEvent(eventType, data = {}) {

  const event = {
    ...data,
    user_id: USER_ID,
    event_type: eventType,
    page: data.page || window.location.hash || '/',
    timestamp: new Date().toISOString()
  };

  console.log('Clickstream event:', event);

  generatedEventCount += 1;

  eventCount.textContent =
    String(generatedEventCount);

  addEventToFeed(event);

  fetch(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(event)

  })
    .then(response => {

      if (!response.ok) {

        throw new Error(
          `API Gateway returned HTTP ${response.status}`
        );

      }

      return response.json();

    })

    .then(result => {

      console.log(
        '✅ Event successfully sent to AWS:',
        result
      );

    })

    .catch(error => {

      console.error(
        '❌ Failed to send event to AWS:',
        error
      );

    });

  return event;
}


// =========================================================
// EVENT FEED
// =========================================================

function addEventToFeed(event) {

  const item =
    document.createElement('li');

  item.className =
    'event-item';

  item.dataset.event =
    event.event_type;


  const line =
    document.createElement('div');

  line.className =
    'event-line';


  const type =
    document.createElement('span');

  type.className =
    'event-type';

  type.textContent =
    event.event_type;


  const time =
    document.createElement('time');

  time.className =
    'event-time';

  time.dateTime =
    event.timestamp;


  time.textContent =
    new Intl.DateTimeFormat(
      undefined,
      {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    ).format(
      new Date(event.timestamp)
    );


  line.append(
    type,
    time
  );


  const detail =
    document.createElement('div');

  detail.className =
    'event-detail';


  detail.textContent =
    event.product ||
    event.query ||
    event.label ||
    event.destination ||
    'Page activity';


  item.append(
    line,
    detail
  );


  eventFeed.prepend(item);


  while (
    eventFeed.children.length >
    MAX_VISIBLE_EVENTS
  ) {

    eventFeed.lastElementChild.remove();

  }


  feedEmpty.hidden =
    true;
}


// =========================================================
// PRODUCTS
// =========================================================

function renderProducts(query = '') {

  const normalizedQuery =
    normalizeSearchText(query.trim());


  const matches =
    (normalizedQuery
      ? products.filter(product => {
          const searchableText = normalizeSearchText(
            `${product.name} ${product.category}`
          );

          return searchableText.includes(normalizedQuery);
        }).slice(0, 5)
      : products);


  productGrid.replaceChildren();


  for (
    const [index, product]
    of matches.entries()
  ) {

    const card =
      document.createElement('article');

    card.className =
      'product-card';

    card.dataset.productId =
      product.id;


    card.style.animationDelay =
      `${index * 45}ms`;


    const imageButton =
      document.createElement('button');

    imageButton.className =
      'product-image-button';

    imageButton.type =
      'button';

    imageButton.dataset.action =
      'product-click';


    imageButton.setAttribute(
      'aria-label',
      `View ${product.name}`
    );


    const image =
      document.createElement('img');

    image.src =
      product.image;

    image.alt =
      product.name;

    image.loading =
      'lazy';

    image.addEventListener('error', () => {
      image.src = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80';
    }, { once: true });


    imageButton.appendChild(
      image
    );


    const tag =
      document.createElement('span');

    tag.className =
      'product-tag';

    tag.textContent =
      product.tag;


    imageButton.appendChild(
      tag
    );


    const info =
      document.createElement('div');

    info.className =
      'product-info';


    const top =
      document.createElement('div');

    top.className =
      'product-info-top';


    const nameButton =
      document.createElement('button');

    nameButton.className =
      'product-name';

    nameButton.type =
      'button';

    nameButton.dataset.action =
      'product-click';

    nameButton.textContent =
      product.name;


    const price =
      document.createElement('span');

    price.className =
      'product-price';

    price.textContent =
      formatPrice(product.price);


    top.append(
      nameButton,
      price
    );


    const category =
      document.createElement('p');

    category.className =
      'product-category';

    category.textContent =
      product.category;


    const description =
      document.createElement('p');

    description.className =
      'product-description';

    description.textContent =
      product.description;


    const actions =
      document.createElement('div');

    actions.className =
      'product-actions';


    const viewButton =
      document.createElement('button');

    viewButton.className =
      'view-button';

    viewButton.type =
      'button';

    viewButton.dataset.action =
      'product-view';

    viewButton.textContent =
      'View product';


    const addButton =
      document.createElement('button');

    addButton.className =
      'add-button';

    addButton.type =
      'button';

    addButton.dataset.action =
      'add-to-cart';

    addButton.textContent =
      'Add to bag';


    actions.append(
      viewButton,
      addButton
    );


    info.append(
      top,
      category,
      description,
      actions
    );


    card.append(
      imageButton,
      info
    );


    productGrid.appendChild(
      card
    );

  }


  resultCount.textContent = normalizedQuery
    ? `${matches.length} ${matches.length === 1 ? 'product' : 'products'} found`
    : `${products.length} essentials`;


  emptyState.hidden =
    matches.length > 0;
}


function normalizeSearchText(value) {
  const pluralForms = {
    watches: 'watch',
    laptops: 'laptop',
    keyboards: 'keyboard',
    mice: 'mouse',
    phone: 'smartphone',
    phones: 'smartphone',
    smartphones: 'smartphone',
    headphones: 'headphone',
    monitors: 'monitor',
    tablets: 'tablet'
  };

  return value
    .toLowerCase()
    .replace(/\b(watches|laptops|keyboards|mice|phones|phone|smartphones|headphones|monitors|tablets)\b/g, match => pluralForms[match]);
}


// =========================================================
// FORMAT PRICE
// =========================================================

function formatPrice(value) {

  return new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }
  ).format(value);

}


// =========================================================
// FIND PRODUCT
// =========================================================

function findProduct(element) {

  const card =
    element.closest(
      '[data-product-id]'
    );


  return products.find(
    product =>
      product.id ===
      card?.dataset.productId
  );

}


// =========================================================
// OPEN PRODUCT
// =========================================================

function openProduct(product) {

  activeProduct =
    product;


  document.querySelector(
    '#dialog-image'
  ).src =
    product.image;


  document.querySelector(
    '#dialog-image'
  ).alt =
    product.name;


  document.querySelector(
    '#dialog-title'
  ).textContent =
    product.name;


  document.querySelector(
    '#dialog-description'
  ).textContent =
    product.description;


  document.querySelector(
    '#dialog-price'
  ).textContent =
    formatPrice(
      product.price
    );


  productDialog.showModal();

}


// =========================================================
// ADD TO CART
// =========================================================

function addToCart(
  product,
  {
    page = '/products',
    recommendation = false
  } = {}
) {

  cartItems += 1;


  cartCount.textContent =
    String(cartItems);


  showCartConfirmation();


  trackEvent(
    'add_to_cart',
    {
      product:
        product.name,

      page,

      ...(recommendation && { recommendation: true })
    }
  );


  loadRecommendations();

}


function showCartConfirmation() {

  clearTimeout(cartConfirmationTimer);
  clearTimeout(cartConfirmationHideTimer);

  cartConfirmation.hidden = false;
  cartConfirmation.style.opacity = '1';
  cartConfirmation.style.transform = 'translateY(0)';

  cartConfirmationTimer = setTimeout(
    () => {
      cartConfirmation.style.opacity = '0';
      cartConfirmation.style.transform = 'translateY(-4px)';
      cartConfirmationHideTimer = setTimeout(
        () => {
          cartConfirmation.hidden = true;
        },
        180
      );
    },
    1200
  );

}


function showAddedButton(button) {

  clearTimeout(
    addButtonTimers.get(button)
  );

  button.textContent = 'Added ✓';

  addButtonTimers.set(
    button,
    setTimeout(
      () => {
        button.textContent = 'Add to bag';
        addButtonTimers.delete(button);
      },
      1200
    )
  );

}


// =========================================================
// SEARCH
// =========================================================

searchForm.addEventListener(
  'submit',
  event => {

    event.preventDefault();


    const query =
      searchInput.value.trim();


    renderProducts(
      query
    );


    trackEvent(
      'button_click',
      {
        label:
          'Search',

        query,

        page:
          '/products'
      }
    );


    if (query) {

      trackEvent(
        'search',
        {
          query,

          page:
            '/products'
        }
      );

    }

  }
);


searchInput.addEventListener(
  'input',
  () => {

    renderProducts(
      searchInput.value
    );

  }
);


// =========================================================
// KEYBOARD SEARCH
// =========================================================

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === '/' &&
      ![
        'INPUT',
        'TEXTAREA'
      ].includes(
        document.activeElement.tagName
      )
    ) {

      event.preventDefault();

      searchInput.focus();

    }

  }
);


// =========================================================
// NAVIGATION
// =========================================================

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    link => {

      link.addEventListener(
        'click',
        () => {

          const destination =
            link.getAttribute(
              'href'
            );


          const label =
            link.dataset.nav ||
            link.textContent.trim();


          trackEvent(
            'navigation',
            {
              destination,

              label,

              page:
                destination || '/'
            }
          );


          document
            .querySelectorAll(
              '.nav-link'
            )
            .forEach(
              navLink =>

                navLink.classList.toggle(
                  'is-active',

                  navLink.getAttribute(
                    'href'
                  ) === destination
                )
            );

        }
      );

    }
  );


// =========================================================
// SHOPPING CART BUTTON
// =========================================================

document
  .querySelector(
    '.cart-button'
  )
  .addEventListener(
    'click',
    () => {

      trackEvent(
        'button_click',
        {
          label:
            'Shopping cart',

          page:
            '/cart'
        }
      );

    }
  );


// =========================================================
// PRODUCT ACTIONS
// =========================================================

productGrid.addEventListener(
  'click',
  event => {

    const actionButton =
      event.target.closest(
        '[data-action]'
      );


    if (!actionButton) {
      return;
    }


    const product =
      findProduct(
        actionButton
      );


    if (!product) {
      return;
    }


    // PRODUCT CLICK

    if (
      actionButton.dataset.action ===
      'product-click'
    ) {

      trackEvent(
        'product_click',
        {
          product:
            product.name,

          page:
            '/products'
        }
      );

      return;
    }


    // PRODUCT VIEW

    if (
      actionButton.dataset.action ===
      'product-view'
    ) {

      trackEvent(
        'button_click',
        {
          product:
            product.name,

          label:
            'View product',

          page:
            '/products'
        }
      );


      trackEvent(
        'product_view',
        {
          product:
            product.name,

          page:
            '/products'
        }
      );


      openProduct(
        product
      );

      return;
    }


    // ADD TO CART

    if (
      actionButton.dataset.action ===
      'add-to-cart'
    ) {

      trackEvent(
        'button_click',
        {
          product:
            product.name,

          label:
            'Add to bag',

          page:
            '/products'
        }
      );


      addToCart(
        product
      );


      showAddedButton(actionButton);

    }

  }
);


// =========================================================
// CLOSE PRODUCT DETAILS
// =========================================================

document
  .querySelector(
    '.dialog-close'
  )
  .addEventListener(
    'click',
    () => {

      trackEvent(
        'button_click',
        {
          label:
            'Close product details',

          page:
            '/products'
        }
      );


      productDialog.close();

    }
  );


// =========================================================
// CLOSE DIALOG OUTSIDE
// =========================================================

productDialog.addEventListener(
  'click',
  event => {

    if (
      event.target ===
      productDialog
    ) {

      productDialog.close();

    }

  }
);


// =========================================================
// ADD TO CART FROM DETAILS
// =========================================================

document
  .querySelector(
    '.dialog-add'
  )
  .addEventListener(
    'click',
    () => {

      if (!activeProduct) {
        return;
      }


      trackEvent(
        'button_click',
        {
          product:
            activeProduct.name,

          label:
            'Add to bag from details',

          page:
            '/products'
        }
      );


      addToCart(
        activeProduct
      );


      productDialog.close();

    }
  );


// =========================================================
// CLEAR EVENTS
// =========================================================

document
  .querySelector(
    '#clear-events'
  )
  .addEventListener(
    'click',
    () => {

      eventFeed.replaceChildren();

      feedEmpty.hidden =
        false;


      trackEvent(
        'button_click',
        {
          label:
            'Clear recent events'
        }
      );

    }
  );


// =========================================================
// PERSONALIZED RECOMMENDATIONS
// =========================================================

const recommendationProducts = {

  "Monitor": {
    price: 249,

    category:
      "Workspace",

    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80",

    description:
      "A crisp display that pairs perfectly with your workspace setup."
  },

"Mouse Pad": {
  price: 25,
  category: "Workspace",
  image:
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=80",
  description:
    "A smooth surface designed for comfortable and precise mouse movement."
},

  "Laptop Stand": {
    price: 59,

    category:
      "Workspace",

    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=700&q=80",

    description:
      "Raise your laptop to create a cleaner and more comfortable workspace."
  },


  "Wireless Mouse": {
    price: 48,

    category:
      "Workspace",

    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80",

    description:
      "Precise wireless control in a comfortable shape made for all-day use."
  },


  "Mechanical Keyboard": {
    price: 109,

    category:
      "Workspace",

    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",

    description:
      "A tactile typing experience designed for productive work and gaming."
  },


  "Smart Watch": {
    price: 229,

    category:
      "Wearables",

    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",

    description:
      "Keep your day in view with useful activity insights and a versatile design."
  },


  "Studio Headphones": {
    price: 129,

    category:
      "Audio",

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",

    description:
      "Rich, balanced sound and a comfortable over-ear fit."
  },


  "Everyday Laptop": {
    price: 899,

    category:
      "Technology",

    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",

    description:
      "A lightweight everyday laptop for work, study and entertainment."
  },


 "Smartphone": {
  price: 649,
  category: "Technology",
  image:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
  description:
    "A bright display and capable camera in a compact everyday design."
},

};

for (const product of products) {
  recommendationProducts[product.name] = {
    image: product.image,
    price: product.price,
    category: product.category,
    description: product.description
  };
}


async function loadRecommendations() {

  const currentUserId = USER_ID;
  const requestVersion = ++recommendationRequestVersion;

  console.log(
    `Loading recommendations for ${currentUserId}`
  );

  try {

    const url =
      `${RECOMMENDATION_API_URL}?user_id=${encodeURIComponent(USER_ID)}`;

    console.log(
      'Loading recommendations for:',
      USER_ID
    );

    console.log(
      'Recommendation URL:',
      url
    );

    const response =
      await fetch(
        url,
        {
          method: 'GET',
          cache: 'no-store'
        }
      );


    console.log(
      'Recommendation HTTP status:',
      response.status
    );


    if (!response.ok) {

      throw new Error(
        `Recommendation API returned HTTP ${response.status}`
      );

    }


    const data =
      await response.json();


    if (requestVersion !== recommendationRequestVersion) {
      return;
    }


    console.log('Recommendation response:', data);


    const recommendations =
      Array.isArray(data?.recommendations)
        ? data.recommendations
        : [];

    if (recommendations.length === 0) {

      showNoRecommendationsMessage(
        currentUserId
      );

      return;

    }


    console.log("Rendering recommendations:", data.recommendations);


    // Main section

    const section =
      document.createElement(
        'section'
      );


    section.className =
      'recommendation-section';


    // Header

    const header =
      document.createElement(
        'div'
      );


    header.className =
      'recommendation-header';


    const title =
      document.createElement(
        'h2'
      );


    title.textContent =
      'Recommended for You';


    const subtitle =
      document.createElement(
        'p'
      );


    subtitle.textContent =
      'Based on your recent activity';


    header.append(
      title,
      subtitle
    );


    // Grid

    const grid =
      document.createElement(
        'div'
      );


    grid.className =
      'recommendation-grid';


    recommendations.forEach(
      productName => {

        const canonicalProductName =
          productName === 'Smartphone'
            ? 'Pocket Smartphone'
            : productName;

        const product =
          recommendationProducts[canonicalProductName] ||
          products.find(
            catalogProduct =>
              catalogProduct.name === canonicalProductName
          );


        const card =
          document.createElement(
            'article'
          );


        card.className =
          'recommendation-card';


        // Fallback

        if (!product) {
          const info = document.createElement('div');
          info.className = 'recommendation-info';

          const name = document.createElement('h3');
          name.textContent = canonicalProductName;

          const description = document.createElement('p');
          description.textContent = 'Recommended based on your clickstream activity.';

          info.append(name, description);
          card.appendChild(info);


          grid.appendChild(
            card
          );


          return;

        }


        // Image container

        const imageContainer =
          document.createElement(
            'div'
          );


        imageContainer.className =
          'recommendation-image-container';


        const image =
          document.createElement(
            'img'
          );


        image.src =
          product.image;


        image.alt =
          canonicalProductName;


        image.loading =
          'lazy';

        image.addEventListener('error', () => {
          image.src = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80';
        }, { once: true });


        imageContainer.appendChild(
          image
        );


        // Badge

        const badge =
          document.createElement(
            'span'
          );


        badge.className =
          'recommendation-badge';


        badge.textContent =
          'For You';


        imageContainer.appendChild(
          badge
        );


        // Information

        const info =
          document.createElement(
            'div'
          );


        info.className =
          'recommendation-info';


        const category =
          document.createElement(
            'span'
          );


        category.className =
          'recommendation-category';


        category.textContent =
          product.category;


        const name =
          document.createElement(
            'h3'
          );


        name.textContent =
          canonicalProductName;


        const description =
          document.createElement(
            'p'
          );


        description.textContent =
          product.description;


        // Bottom row

        const bottom =
          document.createElement(
            'div'
          );


        bottom.className =
          'recommendation-bottom';


        const price =
          document.createElement(
            'strong'
          );


        price.textContent =
          formatPrice(
            product.price
          );


        // Add to bag

        const button =
          document.createElement(
            'button'
          );


        button.className =
          'recommendation-button';


        button.type =
          'button';


        button.textContent =
          'Add to bag';


        button.addEventListener(
          'click',
          () => {

            showAddedButton(button);

            addToCart(
              {
                ...product,
                name: canonicalProductName
              },
              {
                page: '/recommendations',
                recommendation: true
              }
            );

          }
        );


        bottom.append(
          price,
          button
        );


        info.append(
          category,
          name,
          description,
          bottom
        );


        card.append(
          imageContainer,
          info
        );


        grid.appendChild(
          card
        );

      }
    );


    section.append(
      header,
      grid
    );


    // Display recommendations
    // before normal products

    replaceRecommendationSection(section);


  } catch (error) {

    if (requestVersion !== recommendationRequestVersion) {
      return;
    }

    console.error(
      '❌ Failed to load recommendations:',
      error
    );

    showNoRecommendationsMessage(
      currentUserId,
      true
    );

  }

}


function replaceRecommendationSection(section) {

  const oldSection =
    document.querySelector('.recommendation-section');

  if (oldSection) {
    oldSection.remove();
  }

  productGrid.parentElement.insertBefore(
    section,
    document.querySelector('.all-products-heading')
  );

}


function showNoRecommendationsMessage(
  currentUserId,
  isError = false
) {

  const section =
    document.createElement('section');

  section.className =
    'recommendation-section';

  const header =
    document.createElement('div');

  header.className =
    'recommendation-header';

  const title =
    document.createElement('h2');

  title.textContent =
    'Recommended for You';

  const message =
    document.createElement('p');

  if (isError) {
    message.textContent =
      `Unable to load recommendations for ${currentUserId}. Please try again.`;
  } else {
    message.textContent =
      'No personalized recommendations yet. Interact with a few products to get recommendations.';
  }

  header.append(
    title,
    message
  );

  section.appendChild(
    header
  );

  replaceRecommendationSection(section);

}


// =========================================================
// INITIAL PAGE LOAD
// =========================================================

renderProducts();

loadRecommendations();

trackEvent(
  'page_view',
  {
    page: '/'
  }
);