let chosenLocation = "";
let money = 50;
let spice = 0;
let spiceprice = 0
let numCorrectGuesses = 0;
let monsterHealth = 100;
let playerAttack = 5;
let playerHealth = 100;
let monsterAttack = 5;


window.correctTravelGuess = true;
let destination = "";
if (destination === "") {
    destination = "Monster Hunter HQ";
}
function fightMechanics() {
    const minAttack = 1;
    const maxAttack = 10;
    monsterAttack = Math.random() * (maxAttack - minAttack) + minAttack;
    monsterHealth -= playerAttack;
    if (monsterHealth <=0) {
        money += 500;
        monsterHealth = 100;
        playerHealth = 100;
        goToLocationPage();
    }

    playerHealth -= monsterAttack.toFixed(0);
    
    if (playerHealth <= 0) {
        playerHealth = 100;
        monsterHealth = 100;
        money /= 2;
        goToLocationPage(); 
    }

    var playerHealthElement = document.getElementById("playerHealthText");
    playerHealthElement.innerHTML = "Player Health: " + playerHealth;
    var monsterHealthElement = document.getElementById("monsterHealthText");
    monsterHealthElement.innerHTML = "Monster Health: " + monsterHealth;
    
    
}


function updateLocation(destination) {
    document.getElementById('displayBoard').classList.remove('hidden');
    spiceprice = setSpicePrice();
    if (destination == chosenLocation || destination == "Monster Detective HQ") {
        chosenLocation = "";
        money += 50;
        numCorrectGuesses++;
        console.log(numCorrectGuesses + "correct");
        if(numCorrectGuesses == 4) {
            numCorrectGuesses = 0;
            hideAllPages();
            document.getElementById('battlePage').classList.remove('hidden');
        } else {
            goToLocationPage();

        }
        window.correctTravelGuess = true; // Ensure this is set correctly when the guess is correct
    } else {
        window.correctTravelGuess = false;
        goToLocationPage();

    }

    var locationElement = document.getElementById("locationText");
    locationElement.innerHTML = "You are in " + destination;
    var moneyElement = document.getElementById("moneyText");
    moneyElement.innerHTML = "Money: " + money;
    var spiceElement = document.getElementById("spiceText");
    spiceElement.innerHTML = "Spice: " + spice;
    var spicePriceElement = document.getElementById("spicePriceText");
    spicePriceElement.innerHTML = "Spice Cost: " + spiceprice;
    var playerHealthElement = document.getElementById("playerHealthText");
    playerHealthElement.innerHTML = "Player Health: " + playerHealth;
    var monsterHealthElement = document.getElementById("monsterHealthText");
    monsterHealthElement.innerHTML = "Monster Health: " + monsterHealth;

    var locationImageElement = document.getElementById("locationImage");
    if (destination === "Long Beach") {
        locationImageElement.src = "long_beach.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Istanbul") {
        locationImageElement.src = "istanbul.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Bali") {
        locationImageElement.src = "bali.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Pennsylvania") {
        locationImageElement.src = "pennsylvania.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Cappadocia") {
        locationImageElement.src = "cappadocia.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Los Angeles") {
        locationImageElement.src = "los_angeles.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Istanbul") {
        locationImageElement.src = "istanbul.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Kyoto") {
        locationImageElement.src = "kyoto.png"; 
        locationImageElement.classList.remove('hidden');
    } else if (destination === "Utopia" && money >= 20000) {
        alert('You bought a City in a Bottle! You have won the game!');
        money -= 20000;
        locationImageElement.src = "you_win.png"; 
        locationImageElement.classList.remove('hidden');
    }
    
    else {
        locationImageElement.classList.add('hidden');
    }
}

function buySpice() {
    
    if (spiceprice > money) {
        console.log("Not enough money to buy spice.");
    } else {
        money -= parseFloat(spiceprice); 
        console.log("Spice bought. Current money: " + money);

        spice++;
        var moneyElement = document.getElementById("moneyText");
        if (moneyElement) {
            moneyElement.innerHTML = "Money: " + money;
        } else {
            console.log("moneyText element not found.");
        }

        var spiceElement = document.getElementById("spiceText");
        if (spiceElement) {
            spiceElement.innerHTML = "Spice: " + spice;
        } else {
            console.log("spiceText element not found.");
        }
    }
}

function sellSpice() {
    console.log("Attempting to sell spice. Current money: " + money + ", Spice price: " + spiceprice);
    if (spice == 0) {
        console.log("Not enough spice to sell spice.");
    } else {
        money += parseFloat(spiceprice); 
        console.log("Spice sold. Current money: " + money);

        spice--;
        var moneyElement = document.getElementById("moneyText");
        if (moneyElement) {
            moneyElement.innerHTML = "Money: " + money;
        } else {
            console.log("moneyText element not found.");
        }

        var spiceElement = document.getElementById("spiceText");
        if (spiceElement) {
            spiceElement.innerHTML = "Spice: " + spice;
        } else {
            console.log("spiceText element not found.");
        }
    }
}
function sellAllSpice() {
    console.log("Attempting to sell all spice. Current money: " + money + ", Spice price: " + spiceprice);
    if (spice == 0) {
        console.log("Not enough spice to sell spice.");
    } else {
        money += spice * parseFloat(spiceprice); 
        console.log("Spice sold. Current money: " + money);

        spice = 0;
        var moneyElement = document.getElementById("moneyText");
        if (moneyElement) {
            moneyElement.innerHTML = "Money: " + money;
        } else {
            console.log("moneyText element not found.");
        }

        var spiceElement = document.getElementById("spiceText");
        if (spiceElement) {
            spiceElement.innerHTML = "Spice: " + spice;
        } else {
            console.log("spiceText element not found.");
        }
    }
}

function buyAllSpice() {
    console.log("Attempting to buy all spice. Current money: " + money + ", Spice price: " + spiceprice);
    const maxSpiceAffordable = Math.floor(money / parseFloat(spiceprice));
    
    if (maxSpiceAffordable <= 0) {
        console.log("Not enough money to buy spice.");
    } else {
        const totalCost = maxSpiceAffordable * parseFloat(spiceprice);
        money -= totalCost;
        spice += maxSpiceAffordable;
        
        console.log("Spice bought. Current money: " + money + ", Spice: " + spice);

        var moneyElement = document.getElementById("moneyText");
        if (moneyElement) {
            moneyElement.innerHTML = "Money: " + money;
        } else {
            console.log("moneyText element not found.");
        }

        var spiceElement = document.getElementById("spiceText");
        if (spiceElement) {
            spiceElement.innerHTML = "Spice: " + spice;
        } else {
            console.log("spiceText element not found.");
        }
    }
}


function setSpicePrice() {
    const minPrice = 20;
    const maxPrice = 400;
    const price = Math.random() * (maxPrice - minPrice) + minPrice;
    return price.toFixed(0); // returns the price rounded to two decimal places
}

function goToClue() {
    document.getElementById("clueDisplay").innerText = "";


    if (chosenLocation == "") {
        chosenLocation = selectCorrectLocation();
    }
    hideAllPages();
    document.getElementById('cluePage').classList.remove('hidden');
}

function displayRandomClue() {

    const losAngelesClues = [
        "Known as the entertainment capital of the world, home to Hollywood and the film industry.",
        "Features the iconic Hollywood Sign located in the Hollywood Hills.",
        "Home to famous attractions like the Walk of Fame, Universal Studios, and Griffith Observatory.",
        "Offers a diverse cultural scene with neighborhoods like Koreatown, Little Tokyo, and Chinatown.",
        "Known for its beautiful beaches such as Venice Beach and Santa Monica Beach."
    ];

    const baliClues = [
        "Known for its beautiful beaches and stunning sunsets.",
        "A popular destination for surfing and yoga retreats.",
        "Features lush rice terraces and scenic volcanoes.",
        "Home to the famous cultural landmark, the Uluwatu Temple.",
        "Offers a vibrant arts and crafts scene, including traditional Balinese dance and music."
    ];

    const pennsylvaniaClues = [
        "Known as the Keystone State due to its central role in the founding of the United States.",
        "Home to the Liberty Bell and Independence Hall in Philadelphia.",
        "Famous for its Amish communities and beautiful farmlands.",
        "Features the Pocono Mountains, a popular destination for outdoor activities and resorts.",
        "Hosts the annual Groundhog Day celebration in Punxsutawney."
    ];

    const cappadociaClues = [
        "Famous for its unique fairy chimneys and rock formations.",
        "Known for its extensive network of ancient underground cities.",
        "A popular destination for hot air balloon rides offering stunning views.",
        "Home to the Goreme Open Air Museum, a UNESCO World Heritage site.",
        "Features numerous cave churches and dwellings carved into the soft volcanic rock."
    ];

    const istanbulClues = [
        "The only city in the world that spans two continents: Europe and Asia.",
        "Home to the historic Hagia Sophia, a former church and mosque, now a museum.",
        "Famous for the bustling Grand Bazaar, one of the world's oldest and largest covered markets.",
        "Features the stunning Blue Mosque with its iconic blue tiles and six minarets.",
        "Known for its rich history as the capital of the Byzantine and Ottoman Empires."
    ];

    const longBeachClues = [
        "Home to the historic RMS Queen Mary, a retired British ocean liner now serving as a museum and hotel.",
        "Known for the Long Beach Grand Prix, an annual IndyCar race held on city streets.",
        "Features the Aquarium of the Pacific, a major attraction with a diverse array of marine life.",
        "Offers beautiful sandy beaches and a vibrant waterfront area with shops, restaurants, and entertainment.",
        "Hosts one of the busiest seaports in the world."
    ];

    const kyotoClues = [
        "Known for its well-preserved ancient temples and traditional wooden houses.",
        "Home to the iconic Fushimi Inari Shrine, famous for its thousands of red torii gates.",
        "Features the beautiful Arashiyama Bamboo Grove, a serene and picturesque bamboo forest.",
        "Famous for its traditional tea houses and the historic geisha district of Gion.",
        "Hosts the annual Kyoto Gion Matsuri, one of Japan's most famous festivals."
    ];

    document.getElementById("clueDisplay").innerText = "Welcome back";

    let cityClues = [];
    switch (chosenLocation) {
        case "Kyoto":
            cityClues = kyotoClues;
            break;
        case "Los Angeles":
            cityClues = losAngelesClues;
            break;
        case "Long Beach":
            cityClues = longBeachClues;
            break;
        case "Istanbul":
            cityClues = istanbulClues;
            break;
        case "Cappadocia":
            cityClues = cappadociaClues;
            break;
        case "Pennsylvania":
            cityClues = pennsylvaniaClues;
            break;
        case "Bali":
            cityClues = baliClues;
            break;
    }

    const randomIndex = Math.floor(Math.random() * cityClues.length);
    const selectedClue = cityClues[randomIndex];

    if (window.correctTravelGuess) {
        document.getElementById("clueDisplay").innerText = selectedClue;
    } else {
        document.getElementById("clueDisplay").innerText = `Go back to ${chosenLocation} and try again`;
    }
}

function buyFlyingSword() {
    if (money >= 1000) {
        money -= 1000;
        playerAttack = 10;
        updateDisplay();
        alert('You bought a Flying Sword!');
    } else {
        alert('Not enough money!');
    }
}

function buySwordOfErdrick() {
    if (money >= 5000) {
        money -= 5000;
        playerAttack = 20;
        updateDisplay();
        alert('You bought the Sword of Erdrick!');
    } else {
        alert('Not enough money!');
    }
}






function selectCorrectLocation() {
    const locations = [
        "Pennsylvania",
        "Cappadocia",
        "Istanbul",
        "Long Beach",
        "Kyoto",
        "Los Angeles",
        "Bali"
    ];
    const randomIndex = Math.floor(Math.random() * locations.length);
    return locations[randomIndex];
}

// navigation functions
function goToLocationPage() {
    var moneyElement = document.getElementById("moneyText");
    moneyElement.innerHTML = "Money: " + money;
    hideAllPages();
    document.getElementById('locationPage').classList.remove('hidden');
}

function goToStartPage() {
    money = 50;
    spice = 0;
    document.getElementById('displayBoard').classList.add('hidden');

    hideAllPages();
    document.getElementById('startPage').classList.remove('hidden');
}

function goToInvestigatePage() {
    hideAllPages();
    document.getElementById('investigatePage').classList.remove('hidden');
}

function goToMerchant() {
    hideAllPages();
    document.getElementById('merchantPage').classList.remove('hidden');
}

function goToMerchantWares() {
    
    
    
    
    hideAllPages();
    document.getElementById('merchantWaresPage').classList.remove('hidden');
}

function goToBlacksmith() {
    hideAllPages();
    document.getElementById('blacksmithPage').classList.remove('hidden');
}

function goToTravel() {
    hideAllPages();
    document.getElementById('travelPage').classList.remove('hidden');
}

// function to clean up other functions    
function hideAllPages() {
    const pages = [
        'startPage', 
        'investigatePage', 
        'merchantPage', 
        'blacksmithPage', 
        'locationPage', 
        'travelPage', 
        'merchantWaresPage',
        'cluePage',
        'battlePage'
    ];
    
    pages.forEach(pageId => {
        document.getElementById(pageId).classList.add('hidden');
    });
}
