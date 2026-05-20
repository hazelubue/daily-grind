
const coffeeSpecials = {
    Monday: {
        name: "Monday Motivation (Medium Roast)",
        description: "Kickstart your Monday with our signature blend. This energizing Monday coffee helps you face the week ahead with a positive attitude — a light to medium roast with a smooth, clean taste, bright citrusy notes, and a refreshing aroma that tastes like fresh hope.",
        image: "images/drip.jpg",
        alt: "Black drip coffee in a white mug for Monday",
        color: "day-monday"
    },
    Tuesday: {
        name: "Tuesday Treat (Frappuccino)",
        description: "After the longest Monday, treat yourself to our special Tuesday blend. This creamy, blended Tuesday frappuccino has a rich, sweet vanilla and caramel flavor, a smooth texture, and an indulgent aroma perfect for a relaxing afternoon.",
        image: "images/frappaccino.jpg",
        alt: "Creamy vanilla caramel frappuccino in a tall cup for Tuesday",
        color: "day-tuesday"
    },
    Wednesday: {
        name: "Wednesday Warm-Up (Blonde Roast)",
        description: "Warm up to something special on Wednesday! Our expertly crafted Wednesday blonde roast is the perfect mid-week pick-me-up — a comforting light roast with a gentle aroma, golden color, and a smooth, mellow taste that eases you toward the weekend.",
        image: "images/blonde-roast.jpg",
        alt: "Light golden blonde roast coffee in a ceramic mug for Wednesday",
        color: "day-wednesday"
    },
    Thursday: {
        name: "Thursday Refresher (Iced Coffee with Lemon)",
        description: "Thursday calls for something bright and interesting to help you finish the week strong! This Thursday special is coffee on ice with a hint of lemon — a tangy, citrusy zing that cuts through the coffee's bitterness for a clean, crisp, and slightly sweet profile with vibrant top notes.",
        image: "images/istockphoto-973518820-612x612.jpg",
        alt: "Iced coffee with a lemon slice for Thursday",
        color: "day-thursday"
    },
    Friday: {
        name: "Friday Finale (Caramel Macchiato)",
        description: "You made it — celebrate your Friday with a caramel macchiato! This Friday favorite consists of espresso, steamed milk, vanilla syrup, and a signature drizzle of caramel sauce. Sweet, creamy, and rich with buttery caramel balanced by bold espresso and aromatic vanilla.",
        image: "images/istockphoto-1169562205-612x612.jpg",
        alt: "Caramel macchiato with caramel drizzle for Friday",
        color: "day-friday"
    },
    Saturday: {
        name: "Saturday Sipper (Flat White)",
        description: "Saturday is for slowing down — and our Saturday flat white is the perfect companion. A double espresso with a small amount of steamed milk and microfoam, it delivers a strong, bold coffee flavor that is smooth and velvety, with a rich, creamy texture and a slightly sweet, balanced finish.",
        image: "images/istockphoto-1419086719-612x612.jpg",
        alt: "Flat white coffee in a clear glass for Saturday",
        color: "day-saturday"
    },
    Sunday: {
        name: "Sunday Surprise (Mocha)",
        description: "Change up the rhythm and treat your Sunday to something indulgent. A mocha blends espresso, steamed milk, and rich chocolate syrup for a harmonious mix of bittersweet chocolate and bold coffee — a sweet, creamy, and deeply satisfying way to close out the week.",
        image: "images/mocha.jpg",
        alt: "Mocha drink topped with chocolate shavings for Sunday",
        color: "day-sunday"
    }
};

function displayDailySpecial(day) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let currentDay = day || dayNames[new Date().getDay()];

    const special = coffeeSpecials[currentDay];

    if (special) {
        document.getElementById("coffee-container").innerHTML = `
        <div class="coffee-card ${special.color}">
        <h2>${special.name}</h2>
        <img src="${special.image}" alt="${special.alt}" class="flexible coffee-image">
        <p>${special.description}</p>
        </div>
        `;
    } else {
        document.getElementById("coffee-container").innerHTML = `
        <div class="coffee-card">
        <h2>Special Coming Soon!</h2>
        <p>Check back for our daily coffee special.</p>
        </div>
        `;
    }
}

function handleQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayParam = urlParams.get("day");
    displayDailySpecial(dayParam);
}

document.addEventListener("DOMContentLoaded", function () {

    handleQueryParams();

    document.querySelectorAll(".day-link").forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.search = "?day=" + this.getAttribute("data-day");
        });
    });

    document.getElementById("year").textContent = new Date().getFullYear();

    const currentUrl = window.location.href;
    document.getElementById("html-checker").href = "https://validator.w3.org/nu/?doc=" + encodeURIComponent(currentUrl);
    document.getElementById("css-checker").href  = "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(currentUrl);
});
