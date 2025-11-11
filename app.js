/*
== THE OFFICIAL SEND - APP LOGIC V4.0 ==
This file controls the navigation and rendering for 'index.html'.
It REQUIRES 'products.js' to be loaded first.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- STATE & ELEMENT REFERENCES ---
    const breadcrumbs = document.getElementById('breadcrumbs');
    const views = {
        home: document.getElementById('home-view'),
        mission: document.getElementById('mission-view'),
        subcategory: document.getElementById('subcategory-view'),
        product: document.getElementById('product-view')
    };
    const grids = {
        mission: document.getElementById('mission-grid'),
        subcategory: document.getElementById('subcategory-grid')
    };
    const titles = {
        mission: document.getElementById('mission-title'),
        missionTagline: document.getElementById('mission-tagline'),
        subcategory: document.getElementById('subcategory-title')
    };
    const lists = {
        productTiers: document.getElementById('product-tier-list')
    };

    // --- NAVIGATION LOGIC ---

    /**
     * The main router for the single-page app.
     * @param {string} viewName - The ID of the view to show.
     * @param {object} [data] - The data payload (e.g., missionId, subcatId).
     */
    function showView(viewName, data = {}) {
        // Hide all views
        Object.values(views).forEach(view => view.style.display = 'none');
        
        // Show the target view
        if (views[viewName]) {
            views[viewName].style.display = 'block';
        }

        // Handle data loading and rendering for the new view
        switch (viewName) {
            case 'home':
                renderHome();
                updateBreadcrumbs();
                break;
            case 'mission':
                renderMissionPage(data.missionId);
                updateBreadcrumbs(data.missionId);
                break;
            case 'subcategory':
                renderSubCategoryPage(data.missionId, data.subcatId);
                updateBreadcrumbs(data.missionId, data.subcatId);
                break;
            case 'product':
                renderProductPage(data.product);
                updateBreadcrumbs(data.product.missionId, data.product.subcatId, data.product.name);
                break;
        }
        window.scrollTo(0, 0); // Scroll to top on view change
    }

    /**
     * Updates the breadcrumb navigation trail.
     */
    function updateBreadcrumbs(missionId = null, subcatId = null, productName = null) {
        breadcrumbs.innerHTML = ''; // Clear
        
        // Home link
        const homeLink = document.createElement('a');
        homeLink.href = '#';
        homeLink.className = 'hover:text-send';
        homeLink.textContent = 'HOME';
        homeLink.onclick = (e) => {
            e.preventDefault();
            showView('home');
        };
        breadcrumbs.appendChild(homeLink);

        if (missionId) {
            const mission = DB.find(m => m.id === missionId);
            if (!mission) return;
            
            breadcrumbs.appendChild(document.createTextNode(' / '));
            const missionLink = document.createElement('a');
            missionLink.href = '#';
            missionLink.className = 'hover:text-send uppercase';
            missionLink.textContent = mission.name;
            missionLink.onclick = (e) => {
                e.preventDefault();
                showView('mission', { missionId: mission.id });
            };
            breadcrumbs.appendChild(missionLink);
        }

        if (subcatId) {
            const mission = DB.find(m => m.id === missionId);
            const subcat = mission.subcats.find(s => s.id === subcatId);
            if (!subcat) return;

            breadcrumbs.appendChild(document.createTextNode(' / '));
            const subcatLink = document.createElement('a');
            subcatLink.href = '#';
            subcatLink.className = 'hover:text-send uppercase';
            subcatLink.textContent = subcat.name;
            subcatLink.onclick = (e) => {
                e.preventDefault();
                showView('subcategory', { missionId: mission.id, subcatId: subcat.id });
            };
            breadcrumbs.appendChild(subcatLink);
        }

        if (productName) {
            breadcrumbs.appendChild(document.createTextNode(' / '));
            const productText = document.createElement('span');
            productText.className = 'text-white uppercase';
            productText.textContent = productName;
            breadcrumbs.appendChild(productText);
        }
    }

    // --- RENDER LOGIC ---

    /**
     * Renders the 9 Mission Categories on the Home page.
     */
    function renderHome() {
        if (!grids.mission) return;
        grids.mission.innerHTML = ''; // Clear grid
        DB.forEach(mission => {
            const card = document.createElement('a');
            card.href = '#';
            card.className = 'block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 hover:shadow-xl transform hover:-translate-y-1';
            card.onclick = (e) => {
                e.preventDefault();
                showView('mission', { missionId: mission.id });
            };
            card.innerHTML = `
                <div class="text-4xl mb-3">${mission.icon}</div>
                <h3 class="text-2xl font-black text-white uppercase">${mission.name}</h3>
                <p class="text-gray-400">${mission.tagline}</p>
            `;
            grids.mission.appendChild(card);
        });
    }

    /**
     * Renders the list of Sub-Categories for a specific Mission.
     * @param {string} missionId - The ID of the mission to render.
     */
    function renderMissionPage(missionId) {
        const mission = DB.find(m => m.id === missionId);
        if (!mission) {
            showView('home'); // Fail-safe
            return;
        }

        titles.mission.textContent = mission.name;
        titles.missionTagline.textContent = mission.tagline;
        grids.subcategory.innerHTML = ''; // Clear grid

        mission.subcats.forEach(subcat => {
            const card = document.createElement('a');
            card.href = '#';
            card.className = 'block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 transform hover:scale-105';
            card.onclick = (e) => {
                e.preventDefault();
                showView('subcategory', { missionId: mission.id, subcatId: subcat.id });
            };
            card.innerHTML = `
                <h3 class="text-lg font-bold text-white">${subcat.name}</h3>
                <p class="text-sm text-send">${subcat.products.length} Vetted Products</p>
            `;
            grids.subcategory.appendChild(card);
        });
    }

    /**
     * Renders the B/M/P Tiers for a specific Sub-Category.
     * @param {string} missionId 
     * @param {string} subcatId 
     */
    function renderSubCategoryPage(missionId, subcatId) {
        const mission = DB.find(m => m.id === missionId);
        const subcat = mission.subcats.find(s => s.id === subcatId);
        if (!subcat) {
            showView('home'); // Fail-safe
            return;
        }

        titles.subcategory.textContent = subcat.name;
        lists.productTiers.innerHTML = ''; // Clear list

        // Map products into tiers
        const tiers = {
            Budget: subcat.products.find(p => p.tier === 'Budget'),
            'Mid-Tier': subcat.products.find(p => p.tier === 'Mid-Tier'),
            Premium: subcat.products.find(p => p.tier === 'Premium')
        };

        // Render each tier card
        for (const [tierName, product] of Object.entries(tiers)) {
            if (!product) continue; // Skip if a tier is missing

            // Attach mission/subcat IDs for the product view
            product.missionId = missionId;
            product.subcatId = subcatId;

            const tierMeta = tierClassMap[tierName]; // Get color data
            
            const card = document.createElement('div');
            card.className = `p-6 bg-gray-800 rounded-xl border-l-4 ${tierMeta.border} shadow-lg`;
            card.innerHTML = `
                <h3 class="text-3xl font-black ${tierMeta.text} uppercase mb-4">${tierName}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <img src="${product.img}" alt="${product.name}" class="w-full h-auto rounded-lg col-span-1">
                    <div class="md:col-span-2">
                        <h4 class="text-2xl font-bold text-white">${product.name}</h4>
                        <span class="text-xl font-semibold ${tierMeta.text}">$${product.price}</span>
                        <p class="text-lg text-gray-300 italic my-3">"${product.verdict}"</p>
                        <button class="view-product-btn bg-send text-black font-bold py-2 px-4 rounded-lg shadow-send hover:bg-green-400 transition">
                            View Full Verdict & Details
                        </button>
                    </div>
                </div>
            `;
            
            // Add click listener to the button
            card.querySelector('.view-product-btn').onclick = () => {
                showView('product', { product: product });
            };

            lists.productTiers.appendChild(card);
        }
    }

    /**
     * Renders the final, detailed Product Verdict page.
     * @param {object} product - The full product object.
     */
    function renderProductPage(product) {
        const view = views.product;
        const tierMeta = tierClassMap[product.tier];

        view.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <div class="md:flex md:items-start md:space-x-8">
                    <img src="${product.img}" alt="${product.name}" class="w-full md:w-1/3 h-auto rounded-lg shadow-2xl mb-4 md:mb-0">
                    <div class="flex-1">
                        <span class="text-sm font-bold uppercase ${tierMeta.text}">${product.tier} Pick</span>
                        <h2 class="text-4xl font-black text-white mt-1">${product.name}</h2>
                        <span class="text-4xl font-bold text-gray-400">$${product.price}</span>
                        <a href="https://www.amazon.com/s?k=${encodeURIComponent(product.name)}&tag=officialsend-20" 
                           target="_blank" 
                           class="block w-full text-center bg-send text-black font-extrabold py-4 px-6 rounded-lg text-lg mt-6 shadow-send hover:bg-green-400 transition duration-200">
                            FULL SEND: CHECK PRICE ON AMAZON
                        </a>
                    </div>
                </div>

                <div class="mt-12 bg-gray-800 p-6 rounded-xl border-t-4 ${tierMeta.border}">
                    <h3 class="text-3xl font-black text-send mb-4">The Official Send Verdict (The Truth)</h3>
                    <p class="text-xl text-white italic font-light leading-relaxed">"${product.verdict}"</p>
                </div>

                <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-3">Vetted Pros</h3>
                        <ul class="space-y-2">
                            ${product.pros.map(pro => `
                                <li class="flex items-start">
                                    <svg class="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span class="text-gray-300">${pro}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-3">Vetted Cons</h3>
                        <ul class="space-y-2">
                            ${product.cons.map(con => `
                                <li class="flex items-start">
                                    <svg class="w-5 h-5 mr-2 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.36 6.64a9 9 0 11-12.73 0M12 9v4m0 4h.01"></path></svg>
                                    <span class="text-gray-300">${con}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // --- INITIALIZATION ---
    
    // Attach listener to main logo/home link
    document.getElementById('logo-link').onclick = (e) => { e.preventDefault(); showView('home'); };
    document.getElementById('home-link').onclick = (e) => { e.preventDefault(); showView('home'); };

    // Initial page load
    showView('home');
});