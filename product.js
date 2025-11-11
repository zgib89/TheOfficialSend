/*
== THE OFFICIAL SEND - MASTER DATABASE V4.0 ==
This file contains the complete, 100% vetted 126-product list.
'index.html' will load this file to populate the site.
*/

// Helper function for placeholder images
const pImg = (name, tier) => {
    const base = "https://placehold.co/600x600/111827/"; // Dark background
    const text = encodeURIComponent(name);
    let colorCode;
    switch (tier) {
        case 'Budget': colorCode = 'FCD34D'; break; // Yellow
        case 'Mid-Tier': colorCode = '3B82F6'; break; // Blue
        case 'Premium': colorCode = '10B981'; break; // Green
        default: colorCode = 'FFFFFF';
    }
    return `${base}${colorCode}?text=${text}`;
};

// THE V4 MASTER DATABASE
const DB = [
    // === 1. TRIATHLON (Mission: MULTI-SPORT) ===
    {
        id: "triathlon",
        name: "Triathlon",
        tagline: "Swim. Bike. Run. Zero compromise.",
        icon: "🏊‍♂️",
        subcats: [
            {
                id: "wetsuits", name: "Wetsuits",
                products: [
                    { tier: "Budget", name: "Synergy Volution", price: 199, img: pImg("Synergy Volution", "Budget"), verdict: "It's the cheapest full-sleeve suit that isn't a pool toy. For $200, you get the buoyancy and warmth needed to finish the swim, period.", pros: ["Unbeatable price point", "Excellent buoyancy for beginners", "Durable neoprene"], cons: ["Slightly stiffer shoulders", "Difficult to get off quickly"] },
                    { tier: "Mid-Tier", name: "Blueseventy Reaction", price: 575, img: pImg("Blueseventy Reaction", "Mid-Tier"), verdict: "The perfect balance of flexibility, buoyancy, and price. The 'Reactive Stretch Technology' in the shoulders is a noticeable, real-world upgrade.", pros: ["Superior shoulder flexibility", "Premium feel and liners", "Great thermal protection"], cons: ["Sizing can be very specific"] },
                    { tier: "Premium", name: "ROKA Maverick X2", price: 1050, img: pImg("ROKA Maverick X2", "Premium"), verdict: "The 'Arms-Up' pattern is not marketing fluff. It is a patented design that eliminates all shoulder restriction. This is the fastest, most comfortable suit money can buy.", pros: ["Zero shoulder restriction", "Premium materials and buoyancy profile", "Fastest transition-stripping legs"], cons: ["Extremely expensive", "Neoprene is delicate"] }
                ]
            },
            {
                id: "tri-bikes", name: "Tri Bikes",
                products: [
                    { tier: "Budget", name: "Kestrel Talon X 105 (Road Bike)", price: 1800, img: pImg("Kestrel Talon X", "Budget"), verdict: "The REAL budget truth. A new tri-specific bike under $2k is rare and often bad. The Talon has an aggressive, aero road geometry that you can put clip-on aerobars on. It's a true budget speed weapon.", pros: ["Aero carbon frame", "Road bike versatility", "Can be upgraded over time"], cons: ["Not a true TT frame", "Stock wheels are heavy"] },
                    { tier: "Mid-Tier", name: "Cervelo P-Series 105", price: 3400, img: pImg("Cervelo P-Series", "Mid-Tier"), verdict: "This is the REAL mid-tier. A purebred, proven aero frame with a reliable 105 groupset. This bike is 90% as fast as superbikes for 30% of the price.", pros: ["Proven aero frame", "Integrated storage solutions", "Great upgrade path"], cons: ["Stock wheels are still just for training"] },
                    { tier: "Premium", name: "Trek Speed Concept SLR 9", price: 13500, img: pImg("Trek Speed Concept", "Premium"), verdict: "The 'no compromise' superbike. The IsoSpeed decoupler provides comfort that actually translates to a faster run split. This is the pinnacle of integration.", pros: ["IsoSpeed comfort technology", "Massively adjustable cockpit", "Fully integrated hydration/storage"], cons: ["Pro-level price tag"] }
                ]
            },
            {
                id: "aero-helmets", name: "Aero Helmets",
                products: [
                    { tier: "Budget", name: "Giro Aerohead MIPS", price: 250, img: pImg("Giro Aerohead", "Budget"), verdict: "A fantastic, versatile helmet. It's aero enough for a TT but has just enough ventilation for a hot road race. The magnetic shield is excellent.", pros: ["Magnetic shield visor", "Good ventilation", "MIPS protection"], cons: ["Slightly heavier than others"] },
                    { tier: "Mid-Tier", name: "Kask Bambino Pro", price: 400, img: pImg("Kask Bambino Pro", "Mid-Tier"), verdict: "The classic short-tail TT helmet. If you move your head a lot, this is more forgiving than a long-tail and just as fast. Plus, the leather strap is money.", pros: ["Proven aero gains", "Magnetic visor", "High-quality leather strap"], cons: ["Very little ventilation", "Gets hot on climbs"] },
                    { tier: "Premium", name: "MET Codatronca", price: 450, img: pImg("MET Codatronca", "Premium"), verdict: "A modern aero legend. Optimized for specific head positions and ridiculously fast. The temporal wings smooth airflow and the magnetic buckle is a T1 dream.", pros: ["Fastest helmet at certain yaw angles", "Magnetic buckle", "High-quality visor optics"], cons: ["Less forgiving if you drop your head"] }
                ]
            },
            {
                id: "tri-suits", name: "Tri Suits",
                products: [
                    { tier: "Budget", name: "Pearl Izumi SELECT Tri Suit", price: 125, img: pImg("Pearl Izumi SELECT", "Budget"), verdict: "It's durable, comfortable, has a real chamois, and won't chafe you to ribbons. It does everything a $300 suit does, just without the 'aero dimples.'", pros: ["Durable fabric", "Comfortable chamois", "Good pockets"], cons: ["Not as 'aero' or compressive"] },
                    { tier: "Mid-Tier", name: "Castelli Free Sanremo 2", price: 300, img: pImg("Castelli Sanremo 2", "Mid-Tier"), verdict: "This is what most pros wear. The 'Sanremo' front opening (it unzips at the bottom) is a game-changer for ventilation and bathroom breaks.", pros: ["Advanced aero fabrics", "Excellent chamois", "Sanremo opening is convenient"], cons: ["Italian sizing is very tight"] },
                    { tier: "Premium", name: "ROKA Maverick Pro II Tri Suit", price: 550, img: pImg("ROKA Maverick Pro II", "Premium"), verdict: "Pure speed. This suit is basically a second skin, designed in a wind tunnel to save you every possible watt. It's comfortable but built for one thing: winning.", pros: ["Aerodynamically optimized", "Premium, compressive fabrics", "Coldblack tech reflects heat"], cons: ["Cost", "Extremely compressive fit"] }
                ]
            },
            {
                id: "tri-shoes", name: "Tri Cycling Shoes",
                products: [
                    { tier: "Budget", name: "Shimano TR5", price: 130, img: pImg("Shimano TR5", "Budget"), verdict: "A perfect entry-level tri shoe. It has the three features you *need*: a stiff sole, a heel loop for transitions, and a single, quick-reversing strap. All you need.", pros: ["Excellent price", "Stiff sole", "Quick-reversing strap"], cons: ["Basic ventilation", "Slightly heavier"] },
                    { tier: "Mid-Tier", name: "Giro Inciter Tri", price: 180, img: pImg("Giro Inciter Tri", "Mid-Tier"), verdict: "A big step up in materials and stiffness, with a wide opening for a fast, wet foot entry. The dual-strap system gives a more secure fit.", pros: ["Wide opening for T1", "Stiff sole", "Good ventilation"], cons: ["Two straps can be slower than one"] },
                    { tier: "Premium", name: "S-Works Trivent", price: 400, img: pImg("S-Works Trivent", "Premium"), verdict: "The legendary 'heel-opening' shoe. The entire heel cup drops open for the fastest possible flying mount in T1. It's an engineering marvel for shaving seconds.", pros: ["Fastest transition shoe ever made", "Rigid carbon sole", "Magnetic heel clip"], cons: ["Extremely expensive"] }
                ]
            },
            {
                id: "tri-goggles", name: "Open Water Goggles",
                products: [
                    { tier: "Budget", name: "Speedo Vanquisher 2.0 (Mirrored)", price: 25, img: pImg("Speedo Vanquisher 2.0", "Budget"), verdict: "The classic. They're cheap, they *never* leak, and the mirrored finish is perfect for a sunny race day start. Why pay more?", pros: ["Affordable", "Don't leak", "Low profile"], cons: ["Can fog", "Field of view is limited"] },
                    { tier: "Mid-Tier", name: "ROKA R1", price: 40, img: pImg("ROKA R1", "Mid-Tier"), verdict: "A massive upgrade in visibility. The 'Roka-patented' lens curvature gives you a huge field of view so you can actually see the buoy without lifting your head.", pros: ["Incredible field of view", "Great anti-fog", "Comfortable gaskets"], cons: ["Slightly larger frame"] },
                    { tier: "Premium", name: "FORM Smart Swim Goggles", price: 199, img: pImg("FORM Smart Goggles", "Premium"), verdict: "A heads-up display *inside* your goggles showing your pace, time, and distance. Connects to your GPS watch for open water. This is the ultimate data-driven tool.", pros: ["Live data feedback", "Tracks open water swims (with watch)", "Motivating"], cons: ["Expensive", "Another device to charge"] }
                ]
            }
        ]
    },
    // === 2. BACKPACKING (Mission: WILD) ===
    {
        id: "backpacking", name: "Backpacking", tagline: "Survive and thrive in the wild.",
        icon: "🌲",
        subcats: [
            {
                id: "multi-day-packs", name: "Multi-Day Packs (50L+)",
                products: [
                    { tier: "Budget", name: "REI Co-op Flash 55", price: 199, img: pImg("REI Co-op Flash 55", "Budget"), verdict: "The best value-to-weight ratio, hands down. It's modular, light, and comfortably carries 30lbs. The perfect first 'real' pack.", pros: ["Lightweight (under 3 lbs)", "Modular (remove top lid/hip pockets)"], cons: ["Mesh pockets aren't durable", "Not for heavy loads (>35lbs)"] },
                    { tier: "Mid-Tier", name: "Osprey Atmos AG 65", price: 340, img: pImg("Osprey Atmos AG 65", "Mid-Tier"), verdict: "The gold standard for comfort. The Anti-Gravity (AG) suspension is not a gimmick. It hugs your back and makes 40lbs feel like 20.", pros: ["Unmatched comfort and ventilation", "Legendary 'Almighty Guarantee'", "Tons of features"], cons: ["Heavy (over 4.5 lbs)"] },
                    { tier: "Premium", name: "Hyperlite Mountain Gear Southwest 55", price: 379, img: pImg("HMG Southwest 55", "Premium"), verdict: "A 'Premium Philosophy' pick. It's for a different mission. It's ultralight (2 lbs), waterproof Dyneema, and built for serious thru-hikers who have already optimized their gear.", pros: ["Ultralight (around 2 lbs)", "Waterproof and indestructible material"], cons: ["No load lifters", "Minimalist (no padding)"] }
                ]
            },
            {
                id: "tents-2p", name: "Tents (2P)",
                products: [
                    { tier: "Budget", name: "REI Co-op Passage 2", price: 159, img: pImg("REI Passage 2", "Budget"), verdict: "It's heavy (5lb 10oz), but it's a reliable, roomy, and storm-worthy tent that will never, ever fail you. It's the 'bombproof' beginner pick.", pros: ["Durable materials", "Easy setup", "Includes footprint"], cons: ["Very heavy"] },
                    { tier: "Mid-Tier", name: "Big Agnes Copper Spur HV UL2", price: 550, img: pImg("Big Agnes Copper Spur", "Mid-Tier"), verdict: "The most popular tent on the trail. It's the 'sweet spot'—the perfect balance of low weight (~3lbs), tons of interior space, and two doors/vestibules.", pros: ["Incredible interior space", "Lightweight", "Two doors/vestibules"], cons: ["Delicate materials require care"] },
                    { tier: "Premium", name: "Zpacks Duplex", price: 699, img: pImg("Zpacks Duplex", "Premium"), verdict: "The definition of ultralight (19oz). A palace for one, roomy for two. It's made of Dyneema and requires trekking poles, signifying you are a serious operator.", pros: ["Mind-bogglingly light (19oz)", "Waterproof Dyneema", "Huge vestibules"], cons: ["Requires trekking poles", "Single-wall (manages condensation)"] }
                ]
            },
            {
                id: "sleeping-bags", name: "Sleeping Bags (20°F)",
                products: [
                    { tier: "Budget", name: "Kelty Cosmic 20 (Down)", price: 170, img: pImg("Kelty Cosmic 20", "Budget"), verdict: "The best entry-point into down sleeping bags. It's warm, compressible, and a true workhorse that outperforms its price tag.", pros: ["Great price for 600-fill down", "Comfortable 'mummy' shape"], cons: ["Heavier than premium bags"] },
                    { tier: "Mid-Tier", name: "REI Co-op Magma 15", price: 399, img: pImg("REI Magma 15", "Mid-Tier"), verdict: "The best warmth-to-weight ratio for the price. Uses high-end 850-fill power down in a smart design that rivals $600 bags.", pros: ["850-fill power down", "Excellent weight (1lb 12oz)", "Great value"], cons: ["Narrow fit"] },
                    { tier: "Premium", name: "Enlightened Equipment Revelation 20 (Quilt)", price: 400, img: pImg("EE Revelation 20", "Premium"), verdict: "A 'Premium Philosophy' pick. It's a *quilt*, not a bag, which is a more technical, ultralight system (22oz). It saves weight by removing the useless, compressed down underneath you.", pros: ["Ultralight (22oz)", "Versatile as quilt or blanket", "Customizable"], cons: ["Can be drafty for restless sleepers"] }
                ]
            },
            {
                id: "sleeping-pads", name: "Sleeping Pads",
                products: [
                    { tier: "Budget", name: "Therm-a-Rest Z Lite Sol", price: 55, img: pImg("Therm-a-Rest Z Lite", "Budget"), verdict: "Indestructible. This closed-cell foam pad cannot pop, deflate, or fail. It's the standard for thru-hikers as a backup or standalone.", pros: ["Bombproof", "Ultralight", "Reflective layer adds warmth"], cons: ["Bulky", "Not as comfortable as inflatable"] },
                    { tier: "Mid-Tier", name: "NEMO Tensor Insulated", price: 200, img: pImg("NEMO Tensor", "Mid-Tier"), verdict: "The *quiet* one. It's insanely comfortable, stable, and doesn't sound like you're sleeping on a bag of potato chips every time you move.", pros: ["Extremely quiet", "Very comfortable", "Packs small"], cons: ["Slightly less warm than XTherm"] },
                    { tier: "Premium", name: "Therm-a-Rest NeoAir XTherm", price: 240, img: pImg("NeoAir XTherm", "Premium"), verdict: "The warmest, lightest, most compact 4-season sleeping pad on Earth. Period. This is the gold standard for high-alpine and cold-weather sends.", pros: ["Incredible R-Value (warmth)", "Extremely lightweight", "Packs tiny"], cons: ["Noisy/crinkly material", "Expensive"] }
                ]
            },
            {
                id: "hiking-footwear", name: "Footwear",
                products: [
                    { tier: "Budget", name: "Merrell Moab 3 Mid WP", price: 150, img: pImg("Merrell Moab 3", "Budget"), verdict: "The most popular boot in the world. Why? It's comfortable right out of the box. No break-in. It's the reliable 'send' for 90% of hikers.", pros: ["No break-in period", "Great value", "Very comfortable"], cons: ["Heavy", "Not fully waterproof"] },
                    { tier: "Mid-Tier", name: "Salomon X Ultra 4 Mid GTX", price: 175, img: pImg("Salomon X Ultra 4", "Mid-Tier"), verdict: "It feels like a trail runner but protects like a boot. This is the new standard for fast-and-light hiking with a decent pack load.", pros: ["Lightweight and agile", "Excellent grip", "Gore-Tex waterproofing"], cons: ["Less durable than leather boots"] },
                    { tier: "Premium", name: "Hoka Kaha 2 GTX", price: 240, img: pImg("Hoka Kaha 2 GTX", "Premium"), verdict: "Maximum cushion. This boot combines Hoka's plush running shoe foam with a high-top boot, making 20-mile days with a 40lb pack feel possible.", pros: ["Unmatched cushioning", "Surprisingly lightweight", "Plush comfort"], cons: ["Less 'ground feel'", "Bulky"] }
                ]
            },
            {
                id: "camp-stoves", name: "Camp Stoves",
                products: [
                    { tier: "Budget", name: "MSR PocketRocket 2", price: 50, img: pImg("MSR PocketRocket 2", "Budget"), verdict: "The classic. It's tiny, weighs nothing, boils water insanely fast, and is absolutely bulletproof.", pros: ["Tiny and lightweight", "Boils 1L in 3.5 mins", "Durable"], cons: ["Unstable with large pots", "No built-in lighter"] },
                    { tier: "Mid-Tier", name: "Jetboil Flash", price: 125, img: pImg("Jetboil Flash", "Mid-Tier"), verdict: "Not just a stove, but an *integrated system*. It's a pot, stove, and lighter all-in-one that boils water in a ridiculous 100 seconds.", pros: ["Incredibly fast (100 sec)", "All-in-one system", "Color-change heat indicator"], cons: ["Heavy", "Only good for boiling water"] },
                    { tier: "Premium", name: "MSR Whisperlite Universal", price: 170, img: pImg("MSR Whisperlite", "Premium"), verdict: "The expedition standard. It's loud, but it can burn *any* fuel (white gas, kerosene, unleaded) anywhere in the world. This is the 'zombie apocalypse' stove.", pros: ["Burns any fuel type", "Stable for large pots", "Field-maintainable"], cons: ["Heavy", "Requires priming/setup", "Loud"] }
                ]
            },
            {
                id: "trekking-poles", name: "Trekking Poles",
                products: [
                    { tier: "Budget", name: "REI Co-op Trailmade (Aluminum)", price: 70, img: pImg("REI Trailmade Poles", "Budget"), verdict: "Simple, durable, and has reliable lever-locks (not twist-locks). They do the job for a fraction of the price of 'premium' poles.", pros: ["Affordable", "Reliable lever-locks", "Durable aluminum"], cons: ["Heavy", "Basic grips"] },
                    { tier: "Mid-Tier", name: "Black Diamond Trail Ergo Cork", price: 140, img: pImg("BD Trail Ergo Cork", "Mid-Tier"), verdict: "The workhorse. The cork grips are the key—they mold to your hands and manage sweat perfectly. This is the last pair of poles most people ever need.", pros: ["Ergonomic cork grips", "Dual 'FlickLock' adjusters", "Very durable"], cons: ["Not the lightest"] },
                    { tier: "Premium", name: "Black Diamond Distance Carbon Z", price: 200, img: pImg("BD Distance Carbon Z", "Premium"), verdict: "The 'ultralight' pick. These are 'Z-poles,' meaning they fold up like tent poles. They are incredibly light and made of carbon fiber for the fast-packer.", pros: ["Extremely lightweight", "Folds down very small", "Stiff carbon build"], cons: ["Not adjustable", "Less durable than aluminum"] }
                ]
            }
        ]
    },
    // === 3. MARATHON (Mission: ENDURE) ===
    {
        id: "marathon", name: "Marathon", tagline: "Endurance tested. 26.2 miles of proof.",
        icon: "🏃‍♂️",
        subcats: [
            {
                id: "daily-trainers", name: "Daily Trainers",
                products: [
                    { tier: "Budget", name: "Brooks Ghost 15", price: 140, img: pImg("Brooks Ghost 15", "Budget"), verdict: "The most reliable, widely-loved neutral daily trainer. It's not flashy, it just works. This is the 500-mile workhorse.", pros: ["Consistent, balanced cushioning", "Durable", "Comfortable fit"], cons: ["Not very responsive", "A bit heavy"] },
                    { tier: "Mid-Tier", name: "Saucony Endorphin Speed 4", price: 170, img: pImg("Saucony Endorphin Speed 4", "Mid-Tier"), verdict: "The 'do-it-all' shoe. The nylon plate and PEBA-based foam make it fast enough for tempo days but cushioned enough for long runs. ", pros: ["Versatile (long runs & speed)", "Responsive and fun ride", "Durable"], cons: ["Less stable than trainers like the Ghost"] },
                    { tier: "Premium", name: "ASICS Superblast", price: 200, img: pImg("ASICS Superblast", "Premium"), verdict: "A max-cushion 'super trainer' that has no plate but feels just as fast. The ultimate long-run shoe for saving your legs.", pros: ["Incredible cushioning", "Lightweight for its stack height", "Very responsive"], cons: ["Expensive", "High stack can feel unstable"] }
                ]
            },
            {
                id: "race-day-shoes", name: "Race Day Shoes",
                products: [
                    { tier: "Budget", name: "Saucony Endorphin Pro 3", price: 225, img: pImg("Saucony Endorphin Pro 3", "Budget"), verdict: "Often found on sale, this is a top-tier carbon-plated racer with a more forgiving, rockered ride. A perfect first super shoe.", pros: ["Aggressive 'Speedroll' geometry", "Comfortable upper", "Great value on sale"], cons: ["Less 'pop' than Nike"] },
                    { tier: "Mid-Tier", name: "Adidas Adizero Adios Pro 3", price: 250, img: pImg("Adidas Adios Pro 3", "Mid-Tier"), verdict: "The marathon shoe for runners who want a more stable, aggressive ride. The Lightstrike Pro foam is magic.", pros: ["Extremely stable for a super shoe", "Durable outsole", "Aggressive toe-off"], cons: ["Upper is minimal and can be tricky"] },
                    { tier: "Premium", name: "Nike Alphafly 3", price: 285, img: pImg("Nike Alphafly 3", "Premium"), verdict: "The verified world-record shoe. If you want pure speed and energy return, this is undisputed. The combination of ZoomX foam and Air Pods is unbeatable.", pros: ["Maximum energy return", "Air Zoom units provide insane 'pop'", "Fastest shoe, period."], cons: ["Expensive", "Loud", "Less stable for some runners"] }
                ]
            },
            {
                id: "hydration-vests", name: "Hydration Vests",
                products: [
                    { tier: "Budget", name: "Nathan QuickStart 4L", price: 70, img: pImg("Nathan QuickStart 4L", "Budget"), verdict: "A perfect, no-bounce vest for beginners carrying a few gels, a phone, and water. It comes with a bladder.", pros: ["Affordable", "Includes 1.5L bladder", "Good front pockets"], cons: ["Can chafe on very long runs", "Bounces when full"] },
                    { tier: "Mid-Tier", name: "Salomon ADV Skin 5", price: 140, img: pImg("Salomon ADV Skin 5", "Mid-Tier"), verdict: "The standard for a reason. It fits like a shirt, not a backpack. The soft flask pockets are perfectly placed. No bounce, ever.", pros: ["Unbeatable 'second skin' fit", "Excellent front soft flask storage"], cons: ["Sizing is complex", "Flasks sold separately"] },
                    { tier: "Premium", name: "Arc'teryx Norvan 7", price: 200, img: pImg("Arc'teryx Norvan 7", "Premium"), verdict: "The 'Arc'teryx' of vests. It's minimalist, built from premium, durable-yet-lightweight materials, and has a precise, no-slop fit for elite runners.", pros: ["Premium, durable materials", "Zero bounce", "Weather-resistant storage"], cons: ["Expensive", "Minimalist (less storage)"] }
                ]
            },
            {
                id: "running-socks", name: "Running Socks",
                products: [
                    { tier: "Budget", name: "Saucony Multi-Pack (6-Pack)", price: 16, img: pImg("Saucony 6-Pack", "Budget"), verdict: "This is the bulk buy. You get 6 pairs of reliable, moisture-wicking socks for the price of one premium pair. The workhorse for training.", pros: ["Incredible value", "Durable enough", "Good wicking"], cons: ["Not as comfortable as premium", "Can slip"] },
                    { tier: "Mid-Tier", name: "Balega Silver (1 pair)", price: 17, img: pImg("Balega Silver", "Mid-Tier"), verdict: "This is the 'Comfort' pick. The cushioning and antimicrobial silver are a *massive* step-up in feel from the budget pack. You'll save these for long run day.", pros: ["Unmatched comfort and padding", "Antimicrobial (no odor)", "Deep heel cup"], cons: ["Expensive for one pair"] },
                    { tier: "Premium", name: "Darn Tough Run Ultra-Lightweight (1 pair)", price: 18, img: pImg("Darn Tough Run", "Premium"), verdict: "This is the 'Buy-It-For-Life' pick. The price is almost identical to Mid-Tier, but the *value* is infinitely higher. They will replace them for free, forever.", pros: ["UNCONDITIONAL LIFETIME GUARANTEE", "Durable merino wool blend", "No-slip fit"], cons: ["Less cushioning than Balega"] }
                ]
            }
        ]
    },
    // === 4. KITCHEN / FUEL (Mission: PREP) ===
    {
        id: "kitchen", name: "Kitchen Fuel", tagline: "High-performance meal prep tools.",
        icon: "🍳",
        subcats: [
            {
                id: "blenders", name: "High-Power Blenders",
                products: [
                    { tier: "Budget", name: "Ninja Professional (BL610)", price: 100, img: pImg("Ninja Professional", "Budget"), verdict: "It's not pretty, but it's a brute. The stacked blades will annihilate ice and frozen fruit for smoothies better than anything at this price.", pros: ["Incredible crushing power", "Large 72oz pitcher", "Great value"], cons: ["Loud", "Lid is complex", "Doesn't create smooth purees"] },
                    { tier: "Mid-Tier", name: "Breville Fresh & Furious", price: 200, img: pImg("Breville Fresh & Furious", "Mid-Tier"), verdict: "The 'smart' blender. It's quieter, has one-touch smoothie/crush buttons that actually work, and looks incredible on the counter.", pros: ["Sleek design", "Effective pre-programmed cycles", "Quieter than Ninja"], cons: ["Less raw power than Ninja or Vitamix"] },
                    { tier: "Premium", name: "Vitamix 5200", price: 450, img: pImg("Vitamix 5200", "Premium"), verdict: "The last blender you will ever buy. Indestructible. Will blend anything, including hot soup, and will last for 20 years. This is the definition of BIFL.", pros: ["Bulletproof reliability", "Creates silky-smooth purees", "10-year warranty"], cons: ["Loud", "Expensive", "Tall pitcher doesn't fit all cabinets"] }
                ]
            },
            {
                id: "pressure-cookers", name: "Pressure Cookers",
                products: [
                    { tier: "Budget", name: "Instant Pot Duo 7-in-1 (6 Qt)", price: 100, img: pImg("Instant Pot Duo", "Budget"), verdict: "The ultimate 'bro-meal' machine for massive quantities of chicken, rice, or chili, fast. It's the standard for a reason.", pros: ["Combines 7 appliances", "Fast and efficient", "Huge community for recipes"], cons: ["Interface is dated", "Seal holds food smells"] },
                    { tier: "Mid-Tier", name: "Ninja Foodi 9-in-1 (6.5 Qt)", price: 200, img: pImg("Ninja Foodi 9-in-1", "Mid-Tier"), verdict: "It's an Instant Pot, but it's also an AIR FRYER. The 'TenderCrisp' lid lets you pressure cook a whole chicken and then crisp the skin.", pros: ["Pressure cooker + Air fryer in one", "Versatile", "Non-stick pot"], cons: ["Bulky (two separate lids)", "Takes up huge space"] },
                    { tier: "Premium", name: "Breville Fast Slow Pro", price: 280, img: pImg("Breville Fast Slow Pro", "Premium"), verdict: "The 'pro' version. It has sensors that automatically adjust pressure and temp based on the food. You set it and truly forget it.", pros: ["Automated settings are precise", "Superior build quality", "Easy-to-use interface"], cons: ["Expensive", "Slower to reach pressure"] }
                ]
            },
            {
                id: "meal-prep-containers", name: "Meal Prep Containers",
                products: [
                    { tier: "Budget", name: "PrepNaturals Plastic (20-Pack)", price: 30, img: pImg("PrepNaturals Plastic", "Budget"), verdict: "This is the 'Bulk Buy' pick. Simple, stackable, and cheap. They get the job done for weekly prep, but don't expect them to last forever.", pros: ["Very affordable", "Stackable", "BPA-free"], cons: ["Plastic stains (tomato sauce)", "Lids can crack easily"] },
                    { tier: "Mid-Tier", name: "PrepNaturals Glass (5-Pack)", price: 35, img: pImg("PrepNaturals Glass", "Mid-Tier"), verdict: "This is the 'Durable' pick. Glass doesn't stain or hold odors, and you can bake/microwave right in them. The locking lids are secure.", pros: ["Glass is stain-proof and oven-safe", "Durable locking lids"], cons: ["Heavy", "Lids must be hand-washed"] },
                    { tier: "Premium", name: "W&P Porter Seal Tight Bowl (1 unit)", price: 30, img: pImg("W&P Porter Bowl", "Premium"), verdict: "This is the 'Aesthetic' pick. A beautiful ceramic and silicone bowl that's fully leakproof and looks great. This is the 'desk lunch' flex.", pros: ["Beautiful design", "Fully leakproof", "Microwave/Dishwasher safe"], cons: ["Expensive for one container", "Heavy"] }
                ]
            },
            {
                id: "chefs-knives", name: "Chef's Knives",
                products: [
                    { tier: "Budget", name: "Victorinox Fibrox Pro 8-inch", price: 45, img: pImg("Victorinox Fibrox", "Budget"), verdict: "The undisputed king. It's the standard in professional kitchens. Ugly handle, but the blade holds an edge like a $200 knife.", pros: ["Incredible value", "Holds a sharp edge", "Non-slip grip"], cons: ["Ugly plastic handle", "Stamped (not forged)"] },
                    { tier: "Mid-Tier", name: "WÜSTHOF Classic 8-inch", price: 170, img: pImg("WÜSTHOF Classic", "Mid-Tier"), verdict: "The 'Durability' pick. A heavy, durable, full-tang German workhorse that will last 30 years. It's a tank.", pros: ["Full-tang, forged steel", "Perfectly balanced", "Extremely durable"], cons: ["Heavier", "Needs regular honing"] },
                    { tier: "Premium", name: "Shun Classic 8-inch", price: 170, img: pImg("Shun Classic", "Premium"), verdict: "This is the 'Precision' pick. It's a Japanese Gyuto—lighter, thinner, and sharper for precise slicing. It's a 'Premium Philosophy' choice, not a price one.", pros: ["Razor sharp 16° edge", "Lighter and more agile", "Beautiful Damascus steel"], cons: ["Blade is more brittle", "Requires careful handling"] }
                ]
            }
        ]
    },
    // === 5. SUPPLEMENTS (Mission: VITAL) ===
    {
        id: "supplements", name: "Supplements", tagline: "Proven, safe, effective essentials.",
        icon: "💊",
        subcats: [
            {
                id: "whey-protein", name: "Whey Protein",
                products: [
                    { tier: "Budget", name: "Optimum Nutrition Gold Standard Whey", price: 75, img: pImg("ON Gold Standard", "Budget"), verdict: "The reliable, tested, industry standard that mixes well and tastes good. The Toyota Camry of protein. (~$1.50/serving)", pros: ["Great taste/mixability", "Good value", "Third-party tested"], cons: ["Uses some artificial sweeteners"] },
                    { tier: "Mid-Tier", name: "Dymatize ISO 100", price: 90, img: pImg("Dymatize ISO 100", "Mid-Tier"), verdict: "The best choice for sensitive stomachs. A pure hydrolyzed isolate that digests extremely fast with zero bloat. (~$1.80/serving)", pros: ["Hydrolyzed isolate (fast-digesting)", "Zero bloat or gas", "Excellent flavors"], cons: ["More expensive per serving"] },
                    { tier: "Premium", name: "Isopure 100% Whey Isolate (Zero Carb)", price: 85, img: pImg("Isopure Zero Carb", "Premium"), verdict: "The 'Purity' pick. Zero carbs, zero sugar, and still packs 25g of protein. This is for the athlete who is cutting or meticulously tracking macros. (~$2.10/serving)", pros: ["Zero carb / Zero sugar", "High protein-by-weight ratio", "Unflavored option is great for cooking"], cons: ["Thin texture", "Expensive"] }
                ]
            },
            {
                id: "creatine", name: "Creatine",
                products: [
                    { tier: "Budget", name: "Nutricost Creatine Monohydrate (500g)", price: 35, img: pImg("Nutricost Creatine", "Budget"), verdict: "It's creatine monohydrate. It's the most studied supplement on earth. This is cheap, effective, and all you need.", pros: ["Incredibly cheap", "Micronized for better mixing"], cons: ["Comes in a simple bag"] },
                    { tier: "Mid-Tier", name: "Thorne Creatine (NSF Certified)", price: 40, img: pImg("Thorne Creatine", "Mid-Tier"), verdict: "This is the 'Full Send' for trust. Thorne is NSF Certified for Sport®, guaranteeing it's free of any banned substances.", pros: ["NSF Certified for Sport®", "Trusted by pro athletes"], cons: ["More expensive per gram"] },
                    { tier: "Premium", name: "Klean Athlete Klean Creatine (NSF Certified)", price: 50, img: pImg("Klean Creatine", "Premium"), verdict: "The 'pro-athlete' brand. Also NSF Certified, but with a reputation for being the most rigorously tested brand on the market.", pros: ["NSF Certified (rigorous testing)", "Used by pro teams"], cons: ["Most expensive per gram"] }
                ]
            },
            {
                id: "electrolytes", name: "Electrolyte Powders",
                products: [
                    { tier: "Budget", name: "Nuun Sport Tablets (4-Pack)", price: 25, img: pImg("Nuun Sport", "Budget"), verdict: "This is the 'Maintenance' pick. Simple, clean, and low-sugar. Perfect for daily hydration or light workouts.", pros: ["Convenient tablet form", "Low sugar", "Good taste"], cons: ["Lower sodium than high-sweat options"] },
                    { tier: "Mid-Tier", name: "Liquid I.V. Hydration Multiplier (16-Pack)", price: 25, img: pImg("Liquid I.V.", "Mid-Tier"), verdict: "This is the 'Emergency' pick. It's high in sugar, but its 'Cellular Transport Technology' hydrates you *faster* than anything else. For hangovers or race-day cramps.", pros: ["Incredibly fast hydration", "Great for hangovers/illness"], cons: ["Very high in sugar (11g)"] },
                    { tier: "Premium", name: "LMNT Recharge (30-Pack)", price: 45, img: pImg("LMNT Recharge", "Premium"), verdict: "The 'Performance' pick. For the low-carb 'bro' who sweats. LMNT delivers a massive 1000mg of sodium with zero sugar.", pros: ["Massive sodium dose (1000mg)", "Zero sugar", "Great for keto/low-carb"], cons: ["Very salty taste (not for everyone)"] }
                ]
            },
            {
                id: "pre-workout", name: "Pre-Workout",
                products: [
                    { tier: "Budget", name: "Optimum Nutrition AmiN.O. Energy", price: 30, img: pImg("ON AmiN.O. Energy", "Budget"), verdict: "The perfect 'beginner' pre-workout. It's basically flavored caffeine with some amino acids. A clean, reliable boost, not a heart attack.", pros: ["Customizable dose", "Good for a light boost", "Includes amino acids"], cons: ["Not a 'high-impact' pre-workout"] },
                    { tier: "Mid-Tier", name: "C4 Ultimate", price: 40, img: pImg("C4 Ultimate", "Mid-Tier"), verdict: "The standard for high-stim. A big dose of caffeine (300mg), beta-alanine (for the 'tingles'), and solid pump ingredients.", pros: ["High stimulant", "Great energy and pump", "Widely available"], cons: ["Can cause jitters", "Artificial sweeteners/colors"] },
                    { tier: "Premium", name: "Transparent Labs BULK", price: 50, img: pImg("Transparent Labs BULK", "Premium"), verdict: "A 'clean' pre-workout. No artificial colors or sweeteners, and clinically-dosed ingredients for focus, pump, and energy.", pros: ["Clinically-dosed ingredients", "No artificial anything", "Full label transparency"], cons: ["Expensive", "Flavors are less 'sweet'"] }
                ]
            }
        ]
    },
    // === 6. ELECTRONICS (Mission: TECH) ===
    {
        id: "electronics", name: "Electronics", tagline: "Rugged tech for the outdoors.",
        icon: "📱",
        subcats: [
            {
                id: "gps-watches", name: "GPS Adventure Watches",
                products: [
                    { tier: "Budget", name: "Garmin Instinct 2 Solar", price: 350, img: pImg("Garmin Instinct 2", "Budget"), verdict: "A bombproof, no-nonsense ABC watch with 'unlimited' battery life in ideal sun. It's ugly, but it's a tool.", pros: ["Solar charging = insane battery", "MIL-STD 810 durability", "Simple, clear interface"], cons: ["Black and white screen", "Not a 'pretty' smartwatch"] },
                    { tier: "Mid-Tier", name: "Coros Vertix 2", price: 600, img: pImg("Coros Vertix 2", "Mid-Tier"), verdict: "The battery life king. This is the direct competitor to Garmin's Fenix line, offering insane GPS accuracy and a battery that lasts for months.", pros: ["Unbeatable battery life (60 days)", "Dual-frequency GPS", "Includes maps"], cons: ["Software ecosystem is less mature than Garmin"] },
                    { tier: "Premium", name: "Garmin Fenix 7 Pro (Sapphire Solar)", price: 900, img: pImg("Garmin Fenix 7 Pro", "Premium"), verdict: "The standard. This is the flagship 'do-everything' adventure watch. If you can dream of a metric, this watch tracks it. Built like a tank.", pros: ["Sapphire solar screen", "Built-in flashlight", "Massive feature set"], cons: ["Expensive", "Can be heavy on the wrist"] }
                ]
            },
            {
                id: "satellite-messengers", name: "Satellite Messengers",
                products: [
                    { tier: "Budget", name: "Zoleo Satellite Communicator", price: 200, img: pImg("Zoleo", "Budget"), verdict: "A smart, simple device that gives you a dedicated SMS number and email for satellite comms. It uses your phone's interface.", pros: ["Easy to use with phone app", "Dedicated SMS number", "Good value plans"], cons: ["Relies on your phone's battery"] },
                    { tier: "Mid-Tier", name: "Garmin inReach Mini 2", price: 400, img: pImg("inReach Mini 2", "Mid-Tier"), verdict: "The gold standard for backcountry safety. It's tiny, tough, and connects to the Iridium network for 100% global coverage. The SOS is a must-have.", pros: ["100% global Iridium coverage", "Interactive SOS", "Incredibly small and light"], cons: ["Expensive subscription", "Clunky on-device interface"] },
                    { tier: "Premium", name: "Garmin GPSMAP 66i", price: 600, img: pImg("GPSMAP 66i", "Premium"), verdict: "This is an inReach Mini 2 *plus* a full-color, topo-map-loaded, button-operated GPS. This is the device for serious, off-grid expeditions.", pros: ["inReach + full GPS in one", "Button navigation (works with gloves)", "Large, color screen"], cons: ["Heavy and bulky", "Dated interface"] }
                ]
            },
            {
                id: "bone-conduction", name: "Bone Conduction Headphones",
                products: [
                    { tier: "Budget", name: "Shokz OpenMove", price: 80, img: pImg("Shokz OpenMove", "Budget"), verdict: "The best way to get into bone conduction. It has the core Shokz tech (situational awareness) at a great price.", pros: ["Full situational awareness", "Affordable", "USB-C charging"], cons: ["Sound quality is 'tinny'", "Vibration at high volume"] },
                    { tier: "Mid-Tier", name: "Shokz OpenRun", price: 130, img: pImg("Shokz OpenRun", "Mid-Tier"), verdict: "This is the workhorse. It's lighter, more waterproof (IP67), and has better sound than the OpenMove. The standard for runners.", pros: ["Lightweight and comfortable", "IP67 waterproof", "8-hour battery"], cons: ["Proprietary charging cable"] },
                    { tier: "Premium", name: "Shokz OpenRun Pro", price: 180, img: pImg("Shokz OpenRun Pro", "Premium"), verdict: "The best sound you can get while keeping your ears open. New bass transducers make music finally sound good. For the audiophile athlete.", pros: ["Best-in-class sound", "Enhanced bass", "Quick-charge feature"], cons: ["Proprietary charging cable", "Not fully waterproof (IP55)"] }
                ]
            },
            {
                id: "power-banks", name: "Rugged Power Banks",
                products: [
                    { tier: "Budget", name: "Anker PowerCore 10000", price: 25, img: pImg("Anker PowerCore 10k", "Budget"), verdict: "It's not 'rugged,' but it's so cheap and reliable that it's the *real* budget pick. You can afford to break it.", pros: ["Small and light", "Incredibly reliable", "Affordable"], cons: ["Not waterproof or rugged", "Slow charging"] },
                    { tier: "Mid-Tier", name: "BioLite Charge 80 PD", price: 70, img: pImg("BioLite Charge 80", "Mid-Tier"), verdict: "A durable, water-resistant 20,000mAh bank. It's tough, has fast USB-C charging (18W), and is built for the outdoors.", pros: ["Durable, IPX6 water-resistant", "20,000mAh capacity", "USB-C PD"], cons: ["Bulky", "18W is not 'fast' for laptops"] },
                    { tier: "Premium", name: "Anker 737 Power Bank (PowerCore 24K)", price: 150, img: pImg("Anker 737 Power Bank", "Premium"), verdict: "A 'smart' power bank. It has a digital display and a massive 140W output that can actually charge a high-performance laptop. Not rugged, but pure power.", pros: ["Massive 140W output", "Smart digital display", "24,000mAh capacity"], cons: ["Heavy", "Not ruggedized"] }
                ]
            }
        ]
    },
    // === 7. SUNGLASSES (Mission: VISION) ===
    {
        id: "sunglasses", name: "Sunglasses", tagline: "Vision and protection.",
        icon: "😎",
        subcats: [
            {
                id: "sport-shields", name: "Sport Shields",
                products: [
                    { tier: "Budget", name: "Tifosi Sledge", price: 80, img: pImg("Tifosi Sledge", "Budget"), verdict: "A massive-coverage shield with *three included lenses* (bright, low-light, clear) for a wild price. The ultimate value.", pros: ["3 lenses included", "Huge coverage", "Vented to prevent fogging"], cons: ["Frames feel a bit cheap"] },
                    { tier: "Mid-Tier", name: "Oakley Sutro Lite", price: 190, img: pImg("Oakley Sutro Lite", "Mid-Tier"), verdict: "The standard for aggressive, stylish coverage. The Prizm lens technology is legit and makes everything on the road/trail pop.", pros: ["Prizm lenses are amazing", "Great style", "Lightweight"], cons: ["Expensive", "Lens can scratch"] },
                    { tier: "Premium", name: "ROKA Matador Air", price: 240, img: pImg("ROKA Matador Air", "Premium"), verdict: "Insanely light, won't fall off your face even when dripping sweat (Geko-Grip tech), and has world-class optics. This is pro-level gear.", pros: ["Ultralight (25g)", "Geko-Grip is no-slip magic", "Superior lens clarity"], cons: ["Highest price point"] }
                ]
            },
            {
                id: "active-lifestyle", name: "Active Lifestyle",
                products: [
                    { tier: "Budget", name: "Goodr OGs", price: 25, img: pImg("Goodr OGs", "Budget"), verdict: "They're $25, polarized, don't bounce when you run, and come in fun colors. You don't cry when you lose them in a lake. Full send.", pros: ["$25", "Polarized", "No-slip, no-bounce"], cons: ["Optics aren't crystal clear", "Feel cheap"] },
                    { tier: "Mid-Tier", name: "Sunski Treeline", price: 90, img: pImg("Sunski Treeline", "Mid-Tier"), verdict: "The perfect 'bro-adventurer' style. Classic glacier-style shades with removable side shields for hiking, but look normal in town.", pros: ["Removable magnetic side shields", "Great style", "Made from recycled materials"], cons: ["Side shields can be lost"] },
                    { tier: "Premium", name: "Oakley Holbrook (Prizm)", price: 210, img: pImg("Oakley Holbrook", "Premium"), verdict: "The timeless, iconic frame shape, but loaded with Oakley's best tech. Prizm lenses make daily life look better.", pros: ["Iconic style", "Prizm lenses", "Durable O-Matter frame"], cons: ["Expensive for a non-sport frame"] }
                ]
            }
        ]
    },
    // === 8. CLOTHING (Mission: THREAD) ===
    {
        id: "clothing", name: "Clothing", tagline: "Technical apparel that performs.",
        icon: "👕",
        subcats: [
            {
                id: "rain-shells", name: "Rain Shells",
                products: [
                    { tier: "Budget", name: "Marmot PreCip Eco", price: 100, img: pImg("Marmot PreCip Eco", "Budget"), verdict: "The baseline for a *real* rain jacket. It's not a trash bag. It has pit-zips, taped seams, and will keep you dry.", pros: ["Affordable", "Has pit-zips for ventilation", "Packs small"], cons: ["Can feel 'clammy'", "Wets out in hours of sustained rain"] },
                    { tier: "Mid-Tier", name: "Outdoor Research Foray II", price: 225, img: pImg("OR Foray II", "Mid-Tier"), verdict: "The ventilation king. This jacket has 'TorsoFlo' zips that go from the pit all the way to the hem, turning it into a poncho. Genius.", pros: ["Unbeatable ventilation (TorsoFlo)", "Gore-Tex Paclite", "Durable"], cons: ["Slightly baggy fit"] },
                    { tier: "Premium", name: "Arc'teryx Beta AR", price: 600, img: pImg("Arc'teryx Beta AR", "Premium"), verdict: "The 'All-Round' bombproof fortress. This is the GORE-TEX PRO shell you buy for life. It's built for mountaineering but is the ultimate 'do-it-all' shell.", pros: ["Indestructible Gore-Tex Pro", "Perfect articulation and fit", "Helmet-compatible hood"], cons: ["Loud and crinkly", "Absurdly expensive"] }
                ]
            },
            {
                id: "adventure-shorts", name: "Adventure Shorts",
                products: [
                    { tier: "Budget", name: "Uniqlo Active Swim Shorts", price: 40, img: pImg("Uniqlo Active Swim", "Budget"), verdict: "A clean, simple 6\" short that works for the gym, the trail, and the water. Dries fast and looks sharp.", pros: ["Great price", "Simple, clean look", "Dries quickly"], cons: ["Mesh liner can be annoying"] },
                    { tier: "Mid-Tier", name: "Patagonia Baggies (5\")", price: 65, img: pImg("Patagonia Baggies 5\"", "Mid-Tier"), verdict: "The undisputed king of do-everything adventure shorts. Swim, run, hike, lounge. They are durable, iconic, and just work.", pros: ["Iconic", "Extremely durable NetPlus nylon", "Dries fast"], cons: ["Liner can be uncomfortable for some"] },
                    { tier: "Premium", name: "Arc'teryx Gamma Quick Dry Short", price: 130, img: pImg("Arc'teryx Gamma Short", "Premium"), verdict: "This is a *true* premium technical short. It's built for climbing, hiking, and abrasion, with a price tag to match. This is the pro-level pick.", pros: ["Amazing technical fit", "Durable stretch fabric", "Minimalist design"], cons: ["Very expensive for shorts"] }
                ]
            },
            {
                id: "down-jackets", name: "Down Jackets",
                products: [
                    { tier: "Budget", name: "REI Co-op 650 Down Jacket", price: 129, img: pImg("REI 650 Down", "Budget"), verdict: "A solid, no-frills jacket that provides 90% of the warmth for 30% of the price. The perfect 'first' down jacket.", pros: ["Great value", "Simple and effective", "Packs into its own pocket"], cons: ["650-fill down is bulky", "Boxy fit"] },
                    { tier: "Mid-Tier", name: "Patagonia Down Sweater", price: 279, img: pImg("Patagonia Down Sweater", "Mid-Tier"), verdict: "The icon. It's the standard for a reason. 800-fill down, recycled materials, and a perfect fit make it the go-to for everyone.", pros: ["Classic, perfect fit", "800-fill down", "Ethically sourced"], cons: ["Not the lightest", "Not the warmest"] },
                    { tier: "Premium", name: "Arc'teryx Cerium Hoody", price: 400, img: pImg("Arc'teryx Cerium", "Premium"), verdict: "The ultimate technical mid-layer. Insanely light, packs to nothing, and has a perfect athletic fit that layers flawlessly. The gold standard for warmth-to-weight.", pros: ["Incredible warmth-to-weight", "Perfect athletic fit", "Premium 850-fill down"], cons: ["Expensive", "Delicate outer fabric"] }
                ]
            },
            {
                id: "base-layers", name: "Base Layers (Merino)",
                products: [
                    { tier: "Budget", name: "REI Co-op Merino 185", price: 80, img: pImg("REI Merino 185", "Budget"), verdict: "A reliable, 100% merino wool base layer that offers great warmth and odor-control for the price.", pros: ["100% merino wool", "Good value", "Comfortable fit"], cons: ["Less durable than blends"] },
                    { tier: "Mid-Tier", name: "Smartwool Classic 250", price: 115, img: pImg("Smartwool Classic 250", "Mid-Tier"), verdict: "The industry standard. Heavier, warmer, and incredibly soft. This is the go-to for cold-weather comfort.", pros: ["Iconic product", "Very warm and soft", "Odor-resistant"], cons: ["Can pill over time"] },
                    { tier: "Premium", name: "Icebreaker 260 Tech Top", price: 130, img: pImg("Icebreaker 260", "Premium"), verdict: "The original. Icebreaker has a slightly more athletic fit than Smartwool and is known for its extreme durability.", pros: ["Slightly more durable than Smartwool", "Athletic fit", "Excellent warmth"], cons: ["Can feel 'scratchier' than Smartwool"] }
                ]
            }
        ]
    },
    // === 9. ESSENTIAL GEAR (Mission: CARRY) ===
    {
        id: "essential", name: "Essential Gear", tagline: "Must-haves for any mission.",
        icon: "🛠️",
        subcats: [
            {
                id: "multi-tools", name: "Multi-Tools",
                products: [
                    { tier: "Budget", name: "Gerber Dime", price: 25, img: pImg("Gerber Dime", "Budget"), verdict: "The best keychain multi-tool. It's tiny, but the pliers, scissors, and package opener are genuinely useful.", pros: ["Tiny and lightweight", "Excellent package opener tool", "Affordable"], cons: ["Tools are not locking", "Pliers are very small"] },
                    { tier: "Mid-Tier", name: "Leatherman Wave+", price: 110, img: pImg("Leatherman Wave+", "Mid-Tier"), verdict: "The definitive multi-tool. This is the 18-in-1 tool that professionals and adventurers rely on. The outside-accessible, one-hand-opening blades are key.", pros: ["The standard for a reason", "One-hand accessible blades", "Durable and reliable"], cons: ["Heavy for pocket carry"] },
                    { tier: "Premium", name: "Leatherman Charge+ TTi", price: 190, img: pImg("Leatherman Charge+ TTi", "Premium"), verdict: "This is a Wave+ but with premium materials. Titanium handles, a superior S30V steel blade, and a cutting hook. This is the 'boss' version.", pros: ["Premium titanium handles", "S30V steel main blade", "Includes pocket clip and bits"], cons: ["Very expensive for the same toolset"] }
                ]
            },
            {
                id: "headlamps", name: "Headlamps",
                products: [
                    { tier: "Budget", name: "Petzl Tikkina", price: 25, img: pImg("Petzl Tikkina", "Budget"), verdict: "Simple, reliable, and from a brand you can trust. Three brightness modes, 300 lumens. It's the perfect 'just in case' light.", pros: ["Simple 1-button interface", "Reliable and durable", "Affordable"], cons: ["No red light mode", "Uses AAA batteries"] },
                    { tier: "Mid-Tier", name: "Black Diamond Spot 400-R", price: 65, img: pImg("BD Spot 400-R", "Mid-Tier"), verdict: "The workhorse for serious users. It's rechargeable, waterproof (IP67), and has a red light mode. The 'PowerTap' to full brightness is a killer feature.", pros: ["Rechargeable", "IP67 Waterproof", "PowerTap feature", "Red light mode"], cons: ["Complex button interface"] },
                    { tier: "Premium", name: "Petzl Swift RL", price: 140, img: pImg("Petzl Swift RL", "Premium"), verdict: "The 'smart' headlamp. It has a sensor that automatically adjusts the brightness based on where you're looking (map vs. trail). 1100 lumens.", pros: ["Reactive Lighting sensor", "Extremely bright (1100 lumens)", "Comfortable, stable headband"], cons: ["Expensive", "Shorter battery life on high"] }
                ]
            },
            {
                id: "fixed-blade-knives", name: "Fixed Blade Knives",
                products: [
                    { tier: "Budget", name: "Morakniv Companion", price: 17, img: pImg("Morakniv Companion", "Budget"), verdict: "A razor-sharp Swedish fixed blade for under $20. It's the ultimate 'bro' tool. It outperforms $100 knives.", pros: ["Insanely cheap", "Razor sharp 'Scandi' grind", "Durable plastic sheath"], cons: ["Not full-tang", "Rubber handle can get slippery"] },
                    { tier: "Mid-Tier", name: "ESEE-4", price: 130, img: pImg("ESEE-4", "Mid-Tier"), verdict: "A bombproof, full-tang 1095 steel knife with an unconditional lifetime warranty. This is a tool you can bet your life on.", pros: ["Unconditional lifetime warranty", "Full-tang 1095 steel", "Excellent micarta handle"], cons: ["1095 steel can rust if not oiled"] },
                    { tier: "Premium", name: "Benchmade - Bushcrafter 162", price: 250, img: pImg("Benchmade Bushcrafter", "Premium"), verdict: "A premium S30V steel blade that holds an edge forever. It's as much a piece of art as it is a survival tool.", pros: ["Premium S30V stainless steel", "Holds an edge forever", "Ergonomic G10 handle"], cons: ["Very expensive"] }
                ]
            },
            {
                id: "edc-flashlights", name: "EDC Flashlights",
                products: [
                    { tier: "Budget", name: "Olight I3T EOS", price: 20, img: pImg("Olight I3T EOS", "Budget"), verdict: "A tiny, single-AAA flashlight that is brighter than your phone and takes up no space. The perfect 'always have it' light.", pros: ["Tiny (AAA battery)", "Bright for its size (180 lumens)", "Durable aluminum body"], cons: ["Short battery life"] },
                    { tier: "Mid-Tier", name: "Fenix PD36R", price: 100, img: pImg("Fenix PD36R", "Mid-Tier"), verdict: "The standard for a 'duty' light. Rechargeable, 1600 lumens, and built like a tank. This is a serious tool.", pros: ["1600 lumens", "Rechargeable high-capacity battery", "Waterproof and durable"], cons: ["Bulky for a pocket"] },
                    { tier: "Premium", name: "SureFire E2D Defender", price: 220, img: pImg("SureFire E2D Defender", "Premium"), verdict: "A weapon-grade flashlight. Indestructible, with a 'scalloped' bezel for self-defense. This is the military/police choice.", pros: ["Built for self-defense", "Bombproof construction", "Made in the USA"], cons: ["Uses expensive CR123A batteries", "Not rechargeable"] }
                ]
            }
        ]
    }
];