const { combineReducers, createStore } = Redux;

const sampleGoogleResponse = `{ "kind": "customsearch#search", "url": { "type": "application/json", "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json" }, "queries": { "request": [ { "title": "Google Custom Search - burmese cat", "totalResults": "91400", "searchTerms": "burmese cat", "count": 10, "startIndex": 11, "inputEncoding": "utf8", "outputEncoding": "utf8", "safe": "off", "cx": "007282463813746948571:9dqvojdfkdy", "filter": "1", "dateRestrict": "d30", "fileType": "jpg", "searchType": "image", "imgSize": "large" } ], "nextPage": [ { "title": "Google Custom Search - burmese cat", "totalResults": "91400", "searchTerms": "burmese cat", "count": 10, "startIndex": 21, "inputEncoding": "utf8", "outputEncoding": "utf8", "safe": "off", "cx": "007282463813746948571:9dqvojdfkdy", "filter": "1", "dateRestrict": "d30", "fileType": "jpg", "searchType": "image", "imgSize": "large" } ] }, "context": { "title": "Google Images", "facets": [ [ { "label": "free_use_share_modify_commercially", "anchor": "free_use_share_modify_commercially", "label_with_op": "more:free_use_share_modify_commercially" } ] ] }, "searchInformation": { "searchTime": 2.035746, "formattedSearchTime": "2.04", "totalResults": "91400", "formattedTotalResults": "91,400" }, "items": [ { "kind": "customsearch#result", "title": "Burmese Cat Breeds Photo Species Images And Kitty Wallpaper - Cat ...", "htmlTitle": "\u003cb\u003eBurmese Cat\u003c/b\u003e Breeds Photo Species Images And Kitty Wallpaper - \u003cb\u003eCat\u003c/b\u003e ...", "link": "https://3.bp.blogspot.com/-I5VuYgOQ_nE/V6llRJ1oiOI/AAAAAAAAD3k/hjofkizQNiQW0SjVtadhOV1RGVhWW-mAwCLcB/s640/burmese-cat-pics.jpg", "displayLink": "www.catimages.net", "snippet": "Burmese Kittens HD Wallpapers", "htmlSnippet": "\u003cb\u003eBurmese Kittens\u003c/b\u003e HD Wallpapers", "mime": "image/jpeg", "image": { "contextLink": "http://www.catimages.net/2016/08/burmese-cat-kitten-photo.html", "height": 425, "width": 640, "byteSize": 37817, "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdfQa5FQkRb3BdzZOBrG-3WCZCkEFdmmUM6FizXLcUEsfNCJP1op4_efOl", "thumbnailHeight": 91, "thumbnailWidth": 137 } }, { "kind": "customsearch#result", "title": "Burmese Cat Breeds Photo Species Images And Kitty Wallpaper - Cat ...", "htmlTitle": "\u003cb\u003eBurmese Cat\u003c/b\u003e Breeds Photo Species Images And Kitty Wallpaper - \u003cb\u003eCat\u003c/b\u003e ...", "link": "https://4.bp.blogspot.com/-rlVTm4HL3Ks/V6llT0bnpMI/AAAAAAAAD3w/2HO9jxTbwmcVq2ddT4wp323RPzQE7Nb2ACLcB/s640/the-burmese-cat-wallpapers.jpg", "displayLink": "www.catimages.net", "snippet": "Burmese Kittens HD Wallpapers", "htmlSnippet": "\u003cb\u003eBurmese Kittens\u003c/b\u003e HD Wallpapers", "mime": "image/jpeg", "image": { "contextLink": "http://www.catimages.net/2016/08/burmese-cat-kitten-photo.html", "height": 426, "width": 640, "byteSize": 41925, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CZg0odKkPsVdF8K2RvfMqQdYLkvipkzaUBnEObxlduKk32AqCJjogQc", "thumbnailHeight": 91, "thumbnailWidth": 137 } }, { "kind": "customsearch#result", "title": "Burmese Cat Breeds Photo Species Images And Kitty Wallpaper - Cat ...", "htmlTitle": "\u003cb\u003eBurmese Cat\u003c/b\u003e Breeds Photo Species Images And Kitty Wallpaper - \u003cb\u003eCat\u003c/b\u003e ...", "link": "https://2.bp.blogspot.com/-0Poh0qz5QmI/V6llO1oTmpI/AAAAAAAAD3g/xR5sYKhINlwUb2OPSEBFcGX8VSo8D377QCLcB/s640/Best-Burmese-Cat-Images.jpg", "displayLink": "www.catimages.net", "snippet": "Burmese Cat Images", "htmlSnippet": "\u003cb\u003eBurmese Cat\u003c/b\u003e Images", "mime": "image/jpeg", "image": { "contextLink": "http://www.catimages.net/2016/08/burmese-cat-kitten-photo.html", "height": 383, "width": 640, "byteSize": 63089, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0ZMvOyY0YKUanG9hg4v4-zVrcl88o7TndxnwqW-RRF8joou8TCObob4", "thumbnailHeight": 82, "thumbnailWidth": 137 } }, { "kind": "customsearch#result", "title": "Burmese Cat Looking To Camera Stock Photo | Getty Images", "htmlTitle": "\u003cb\u003eBurmese Cat\u003c/b\u003e Looking To Camera Stock Photo | Getty Images", "link": "http://cache2.asset-cache.net/gc/87883836-burmese-cat-looking-to-camera-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=eRcnycVmD8ZXsiHmT8ZLpKZ6o4J6PoMvZbNfZOHMKBJ4ouBFi7tFKrB1r94Emlsm9DLCWV2twM82mLx5aXDvKA%3D%3D", "displayLink": "www.gettyimages.com", "snippet": "Burmese cat looking to camera ...", "htmlSnippet": "\u003cb\u003eBurmese cat\u003c/b\u003e looking to camera ...", "mime": "image/jpeg", "image": { "contextLink": "http://www.gettyimages.com/detail/photo/burmese-cat-looking-to-camera-royalty-free-image/87883836", "height": 337, "width": 508, "byteSize": 65106, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7H7pJKd6ykruNqHc-wn-TUZd9Ad-uHvIBzA2oD2TApDTMgBShcF_sbSU", "thumbnailHeight": 87, "thumbnailWidth": 131 } }, { "kind": "customsearch#result", "title": "Burmese Cat Breeds Photo Species Images And Kitty Wallpaper - Cat ...", "htmlTitle": "\u003cb\u003eBurmese Cat\u003c/b\u003e Breeds Photo Species Images And Kitty Wallpaper - \u003cb\u003eCat\u003c/b\u003e ...", "link": "https://3.bp.blogspot.com/-nHu5wUHQ-R0/V6llYVGXPpI/AAAAAAAAD30/NpC4g7901XgI-so1Bo2nOxmmdhHTQcOvwCLcB/s640/burmese-cat-images.jpg", "displayLink": "www.catimages.net", "snippet": "Burmese Cat Images", "htmlSnippet": "\u003cb\u003eBurmese Cat\u003c/b\u003e Images", "mime": "image/jpeg", "image": { "contextLink": "http://www.catimages.net/2016/08/burmese-cat-kitten-photo.html", "height": 331, "width": 640, "byteSize": 33371, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8pJk9OClx9c6gEuM41XRBysClqtswuG9EbPcEt9fOws-e6ts5WfvRG6S", "thumbnailHeight": 71, "thumbnailWidth": 137 } }, { "kind": "customsearch#result", "title": "Popular Burmese Cat-Buy Cheap Burmese Cat lots from China Burmese ...", "htmlTitle": "Popular \u003cb\u003eBurmese Cat\u003c/b\u003e-Buy Cheap \u003cb\u003eBurmese Cat\u003c/b\u003e lots from China \u003cb\u003eBurmese\u003c/b\u003e ...", "link": "https://ae01.alicdn.com/kf/HTB1vASYLFXXXXboXXXXq6xXFXXXy/free-shipping-diy-unfinished-cross-stitch-kit-font-b-burmese-b-font-font-b-cat-b.jpg", "displayLink": "www.aliexpress.com", "snippet": "... burmese cat SLT-C-QC019( ...", "htmlSnippet": "... \u003cb\u003eburmese cat\u003c/b\u003e SLT-C-QC019( ...", "mime": "image/jpeg", "image": { "contextLink": "https://www.aliexpress.com/popular/burmese-cat.html", "height": 400, "width": 330, "byteSize": 32989, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdt9GR7sLvUPeCEm3h61uHRKmE8imS89qQ1BZOh_1DNzZiSKl2yT7H1A", "thumbnailHeight": 124, "thumbnailWidth": 102 } }, { "kind": "customsearch#result", "title": "Top 10 Reasons to Choose a Burmese Cat as Your Pet - YouTube", "htmlTitle": "Top 10 Reasons to Choose a \u003cb\u003eBurmese Cat\u003c/b\u003e as Your Pet - YouTube", "link": "https://i.ytimg.com/vi/5j08E-49o8k/hqdefault.jpg", "displayLink": "www.youtube.com", "snippet": "... a Burmese Cat as Your Pet", "htmlSnippet": "... a \u003cb\u003eBurmese Cat\u003c/b\u003e as Your Pet", "mime": "image/jpeg", "image": { "contextLink": "https://www.youtube.com/watch?v=5j08E-49o8k", "height": 360, "width": 480, "byteSize": 10094, "thumbnailLink": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRl3LVTzPNoSr_s9KoWANoX7qSD-Gx8KP3qTUVnwK6A-9JY8jwNLHDncQFS", "thumbnailHeight": 97, "thumbnailWidth": 129 } }, { "kind": "customsearch#result", "title": "Top 8 Kid-Friendly Cat Breeds", "htmlTitle": "Top 8 Kid-Friendly \u003cb\u003eCat\u003c/b\u003e Breeds", "link": "http://petguide.com.vsassets.com/wp-content/uploads/2016/04/kid-friendly-cat-breeds-Burmese.jpg", "displayLink": "www.petguide.com", "snippet": "... Cat Breeds: Burmese", "htmlSnippet": "... \u003cb\u003eCat\u003c/b\u003e Breeds: \u003cb\u003eBurmese\u003c/b\u003e", "mime": "image/jpeg", "image": { "contextLink": "http://www.petguide.com/blog/cat/top-8-kid-friendly-cat-breeds/", "height": 425, "width": 637, "byteSize": 178394, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdWki18rIQ90l3aVsRpnWnFYr0Iu-VrUz2QregVrdLGXbTo2YPhb3GdQY", "thumbnailHeight": 91, "thumbnailWidth": 137 } }, { "kind": "customsearch#result", "title": "MOSCOW, RUSSIA - FEBRUARY 21, 2015: International Festival Of Cats ...", "htmlTitle": "MOSCOW, RUSSIA - FEBRUARY 21, 2015: International Festival Of \u003cb\u003eCats\u003c/b\u003e ...", "link": "http://il2.picdn.net/shutterstock/videos/8946883/thumb/1.jpg", "displayLink": "www.shutterstock.com", "snippet": "... of cats. Charming Burmese", "htmlSnippet": "... of \u003cb\u003ecats\u003c/b\u003e. Charming \u003cb\u003eBurmese\u003c/b\u003e", "mime": "image/jpeg", "image": { "contextLink": "http://www.shutterstock.com/video/clip-8946895-stock-footage-moscow-russia-february-international-festival-of-cats-charming-burmese-cat-on-a-white.html", "height": 480, "width": 852, "byteSize": 17047, "thumbnailLink": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQY1gbqTe4RUEjLL4Gb5gfk8hRy76YcGQl5KyaKbMCWIw9bY2dKONQcFr0X", "thumbnailHeight": 82, "thumbnailWidth": 145 } }, { "kind": "customsearch#result", "title": "Popular Burmese Cat-Buy Cheap Burmese Cat lots from China Burmese ...", "htmlTitle": "Popular \u003cb\u003eBurmese Cat\u003c/b\u003e-Buy Cheap \u003cb\u003eBurmese Cat\u003c/b\u003e lots from China \u003cb\u003eBurmese\u003c/b\u003e ...", "link": "https://ae01.alicdn.com/kf/HTB1HvySLFXXXXX6XpXXq6xXFXXXu/free-shipping-diy-unfinished-cross-stitch-kit-font-b-burmese-b-font-font-b-cat-b.jpg", "displayLink": "www.aliexpress.com", "snippet": "... burmese cat SLT-C-QC007( ...", "htmlSnippet": "... \u003cb\u003eburmese cat\u003c/b\u003e SLT-C-QC007( ...", "mime": "image/jpeg", "image": { "contextLink": "https://www.aliexpress.com/popular/burmese-cat.html", "height": 395, "width": 322, "byteSize": 18202, "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0APhOrU9Q8dmc9BWUN1b_UpLu_ZinK6edriWVnkFHQH-4zFMYJnftsgA", "thumbnailHeight": 124, "thumbnailWidth": 101 } } ] }`;


// redux reducers
const searchEngine = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RESULTS':
      return JSON.parse(action.response);
    case 'UPDATE_TERM':
      return Object.assign({}, state, { term: action.term });
      break
    default:
      return state;
  }
};

const apiInput = (state = {visible: false}, action) => {
  switch (action.type) {
    case 'TOGGLE-API-INPUT':
      return (state.visible)
        ? Object.assign({}, state, { visible: false })
        : Object.assign({}, state, { visible: true });
      break;
    case 'ADD_GOOGLE_API_KEY':
      return Object.assign({}, state, { googleApiKey: action.apiKey });
      break;
    default:
      return state;
  }
}

// init redux store
const searchApp = combineReducers({ searchEngine, apiInput });
const store = createStore(searchApp);

// front-end code
const render = state => {
  (state.apiInput.visible)
    ? theApiStatus.nextElementSibling.classList.remove('hidden')
    : theApiStatus.nextElementSibling.classList.add('hidden');

  (state.apiInput.googleApiKey)
    ? theApiStatus.textContent = 'API KEY: ' + state.apiInput.googleApiKey
    : theApiStatus.textContent = 'API KEY: NONE - Click to Add';
  console.log(state);
}

const theTerm = document.getElementById('term');
theTerm.addEventListener('change', () => store.dispatch(
  { type: 'UPDATE_TERM', term: theTerm.value }
));

const theSearchForm = document.getElementById('search-form');
theSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

const theApiStatus = document.getElementById('api-status');
theApiStatus.addEventListener('click', () => store.dispatch(
  {type: 'TOGGLE-API-INPUT'}
));

const theApiInput = document.getElementById('google-api-key');
theApiInput.addEventListener('change', () =>
  store.dispatch({ type: 'ADD_GOOGLE_API_KEY', apiKey: theApiInput.value })
);
theApiInput.addEventListener('blur', () =>
  store.dispatch({ type: 'TOGGLE-API-INPUT' })
);

// run app
store.subscribe( () => render(store.getState()) );
render(store.getState());
//store.dispatch({ type: 'ADD_RESULTS', response: sampleGoogleResponse });


//
