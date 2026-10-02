function verifyBoyfriend() {

    document.getElementById("verificationMessage").innerHTML = `
        <h2>✅ BOYFRIEND VERIFIED</h2>

        <p>Welcome, Cutu Jalkukra. 🩷</p>

        <p>
        This app belongs to one girl.<br>
        And unfortunately for you...
        </p>

        <h2>You're stuck with her. ♡</h2>

        <button onclick="showPage('home')">
            ENTER AARU'S APP →
        </button>
    `;
}


function wrongBoyfriend() {

    document.getElementById("verificationMessage").innerHTML = `
        ❌ ACCESS DENIED<br><br>
        Nice try, Cutu Jalkukra. 😭
    `;
}


function showPage(page) {

    document.querySelectorAll("section").forEach(function(section) {
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");
}


function generateDate() {

    const dates = [
        "🌙 Late-night drive",
        "🍦 Ice cream",
        "🎬 Movie night",
        "🛍️ Shopping",
        "☕ Café date",
        "🌊 Beach day",
        "🍕 Food + talking for 4 hours"
    ];

    const randomDate =
        dates[Math.floor(Math.random() * dates.length)];

    document.getElementById("dateResult").innerHTML =
        "YOUR DATE: " + randomDate + " ♡";
}


function mood(type) {

    if (type === "happy") {

        document.getElementById("moodResult").innerHTML =
            "😊 Happy Cutu detected. Go tell Aaru something nice.";
    }

    if (type === "sad") {

        document.getElementById("moodResult").innerHTML =
            "🥺 Sad mode detected.<br><br>Prescription: Aaru + virtual hug 🫂";
    }
}


function needAaru() {

    const responses = [
        "🫂 Virtual hug delivered. Don't complain that it's not the real Aaru.",
        "💗 Aaru is probably thinking about you right now.",
        "🥺 Missing her? CALL HER. This is your sign.",
        "💌 Random reminder: Aaru loves you.",
        "🧸 Emergency Aaru dose: one virtual hug + one forehead pat.",
        "😭 Bro just call your girlfriend."
    ];

    const random =
        responses[Math.floor(Math.random() * responses.length)];

    document.getElementById("aaruResponse").innerHTML = random;
}
function updateMissing(value) {

    const result = document.getElementById("missResult");

    if (value == 1) {
        result.innerHTML = "🙂 Just a little";
    }

    if (value == 2) {
        result.innerHTML = "🥺 Okay... you're missing her";
    }

    if (value == 3) {
        result.innerHTML = "😭 BRO YOU MISS HER BADLY";
    }

    if (value == 4) {
        result.innerHTML = "💀 EMERGENCY LEVEL MISS DETECTED.<br><br>CALL AARU.";
    }
}

let lovePoints = 0;
let currentMission = 0;

const missions = [
    "Make Aaru smile today. 💌",
    "Send Aaru a cute message. 💗",
    "Tell Aaru something you love about her. 🥺",
    "Send Aaru a random photo. 📸",
    "Call Aaru. 📞",
    "Make Aaru laugh today. 😂",
    "Tell Aaru you miss her. 🫂",
    "Plan your next date together. 🌎"
];

function completeMission() {

    lovePoints += 10;

    document.getElementById("lovePoints").innerHTML =
        "LOVE POINTS: " + lovePoints + " ♡";

    document.getElementById("missionStatus").innerHTML =
        "✅ Mission complete! +10 Love Points 🩷";

    currentMission++;

    if (currentMission < missions.length) {

        document.getElementById("missionText").innerHTML =
            "NEXT MISSION: " + missions[currentMission];

    } else {

        document.getElementById("missionText").innerHTML =
            "🏆 ALL MISSIONS COMPLETED! You're officially an elite Cutu.";
    }
}

function futureThing(number) {

    const messages = [

        "✈️ One day we'll look back and laugh about how long we waited for this trip. 🌎",

        "🏡 Imagine having our own little place, decorating it exactly how we want. 🏠🩷",

        "🐶 Our future pet is going to be ridiculously spoiled. 😭",

        "💍 One day we'll look back at this app and remember when this was just a dream. 💗",

        "👶 Someday, maybe we'll have a tiny human running around who somehow got all our chaotic traits. 🧸",

        "🌅 No calls, no screens, no distance. Just us watching the sunrise together. 🌅",

        "🎄 Imagine spending Christmas together instead of celebrating through a screen. 🎁",

        "📸 One day we'll have way too many photos together. And yes, Aaru will still take 47 pictures to choose one. 😭",

        "💰 Build a life we're both proud of — together. 🩷",

        "👨‍👩‍👧‍👦 Our little future family. Whatever it looks like, we'll build it together. 🤍"

    ];

    document.getElementById("futureResult").innerHTML =
        messages[number];
}

let memories = JSON.parse(localStorage.getItem("aaruMemories")) || [];

function addMemory() {

    const photoInput = document.getElementById("memoryPhoto");
    const captionInput = document.getElementById("memoryCaption");

    if (!photoInput.files[0]) {
        alert("Choose a photo first 📸");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {

        const memory = {
            photo: event.target.result,
            caption: captionInput.value || "A little memory ♡"
        };

        memories.push(memory);

        localStorage.setItem(
            "aaruMemories",
            JSON.stringify(memories)
        );

        captionInput.value = "";
        photoInput.value = "";

        displayMemories();
    };

    reader.readAsDataURL(photoInput.files[0]);
}


function displayMemories() {

    const gallery = document.getElementById("memoryGallery");

    gallery.innerHTML = "";

    memories.forEach(function(memory, index) {

        gallery.innerHTML += `
            <div class="memory-card">

                <img src="${memory.photo}">

                <p>${memory.caption}</p>

                <button onclick="deleteMemory(${index})">
                    🗑️ Delete
                </button>

            </div>
        `;
    });
}


function deleteMemory(index) {

    memories.splice(index, 1);

    localStorage.setItem(
        "aaruMemories",
        JSON.stringify(memories)
    );

    displayMemories();
}
displayMemories();

const quizQuestions = [
    {
        question: "What does Aaru love the most? 💗",
        options: ["You", "Pizza", "Sleeping", "All of the above"],
        answer: 0
    },
    {
        question: "What should Cutu do when Aaru says she misses him? 🥺",
        options: ["Ignore her", "Call her", "Go to sleep", "Send a meme"],
        answer: 1
    },
    {
        question: "Who is Cutu's favorite person? 👀",
        options: ["Aaru", "His phone", "Food", "Nobody"],
        answer: 0
    },
    {
        question: "What is the most important boyfriend rule? 📜",
        options: [
            "Never reply",
            "Always listen to Aaru",
            "Steal her food",
            "Win every argument"
        ],
        answer: 1
    },
    {
        question: "How much does Aaru deserve to be loved? 🩷",
        options: ["50%", "75%", "99%", "∞%"],
        answer: 3
    }
];

let currentQuestion = 0;
let quizScore = 0;

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    document.getElementById("quizResult").innerHTML = "";

    showQuizQuestion();
}

function showQuizQuestion() {

    const question = quizQuestions[currentQuestion];

    document.getElementById("quizQuestion").innerHTML =
        `<h3>${question.question}</h3>`;

    const options = document.getElementById("quizOptions");

    options.innerHTML = "";

    question.options.forEach(function(option, index) {

        options.innerHTML += `
            <button onclick="answerQuiz(${index})">
                ${option}
            </button>
        `;
    });
}

function answerQuiz(selected) {

    const question = quizQuestions[currentQuestion];

    if (selected === question.answer) {
        quizScore++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        showQuizQuestion();

    } else {

        finishQuiz();
    }
}

function finishQuiz() {

    let message = "";

    if (quizScore === 5) {
        message = "🏆 PERFECT SCORE! You officially know Aaru too well. 💗";
    } 
    else if (quizScore >= 3) {
        message = "🎀 Not bad, Cutu. You may keep your boyfriend license.";
    } 
    else {
        message = "💀 Bro... you need to study Aaru Lore.";
    }

    document.getElementById("quizQuestion").innerHTML =
        "QUIZ COMPLETE 🧠";

    document.getElementById("quizOptions").innerHTML = "";

    document.getElementById("quizResult").innerHTML =
        `<h3>${quizScore}/5</h3><p>${message}</p>`;
}
localStorage.removeItem("shiroHappiness");
let shiroHappiness =
    Number(localStorage.getItem("shiroHappiness")) || 0;

let shiroHunger =
    Number(localStorage.getItem("shiroHunger")) || 100;

let shiroEnergy =
    Number(localStorage.getItem("shiroEnergy")) || 100;


function updateShiro() {

    // Keep everything between 0 and 100
    shiroHappiness = Math.max(0, Math.min(100, shiroHappiness));
    shiroHunger = Math.max(0, Math.min(100, shiroHunger));
    shiroEnergy = Math.max(0, Math.min(100, shiroEnergy));

    // Save the stats
    localStorage.setItem("shiroHappiness", shiroHappiness);
    localStorage.setItem("shiroHunger", shiroHunger);
    localStorage.setItem("shiroEnergy", shiroEnergy);

    // Happiness
    document.getElementById("happinessFill").style.width =
        shiroHappiness + "%";

    document.getElementById("happinessText").innerHTML =
        "💗 Happiness: " + shiroHappiness + "%";

    // Hunger
    const hungerFill = document.getElementById("hungerFill");

    if (hungerFill) {
        hungerFill.style.width = shiroHunger + "%";
    }

    const hungerText = document.getElementById("hungerText");

    if (hungerText) {
        hungerText.innerHTML =
            "🍖 Hunger: " + shiroHunger + "%";
    }

    // Energy
    const energyFill = document.getElementById("energyFill");

    if (energyFill) {
        energyFill.style.width = shiroEnergy + "%";
    }

    const energyText = document.getElementById("energyText");

    if (energyText) {
        energyText.innerHTML =
            "⚡ Energy: " + shiroEnergy + "%";
    }

    // Shiro's mood
    if (shiroHappiness >= 80) {

        document.getElementById("shiroMood").innerHTML =
            "🥰 Shiro is super happy!";

    } else if (shiroHappiness >= 50) {

        document.getElementById("shiroMood").innerHTML =
            "😊 Shiro is doing good.";

    } else if (shiroHappiness >= 25) {

        document.getElementById("shiroMood").innerHTML =
            "🥺 Shiro wants attention...";

    } else {

        document.getElementById("shiroMood").innerHTML =
            "😭 Shiro is very sad.";
    }
}


function feedShiro() {

    shiroHappiness += 10;
    shiroHunger += 25;

    const shiro = document.getElementById("shiro");

    // Make Shiro eat
    shiro.classList.add("shiro-eating");

    // Create food bowl
    const bowl = document.createElement("div");
    bowl.className = "food-bowl";
    bowl.innerHTML = "🍖🥣";

    shiro.appendChild(bowl);

    document.getElementById("shiroMessage").innerHTML =
        "🍖 Shiro is eating! Yummm...";

    updateShiro();

    // Finish eating after 3 seconds
    setTimeout(function() {

        shiro.classList.remove("shiro-eating");

        bowl.remove();

        document.getElementById("shiroMessage").innerHTML =
            "🥰 Shiro finished eating!";

    }, 3000);
}
function playShiro() {

    shiroHappiness += 15;
    shiroEnergy -= 20;
    shiroHunger -= 10;

    document.getElementById("shiroMessage").innerHTML =
        "🎾 Shiro is running around like crazy! 😭";

    updateShiro();
}

function petShiro() {

    shiroHappiness += 5;

    document.getElementById("shiroMessage").innerHTML =
        "🫂 Shiro loves his cuddles. ♡";

    updateShiro();
}

function sleepShiro() {

    const shiro = document.getElementById("shiro");

    shiro.classList.add("shiro-sleeping");

    document.getElementById("shiroMessage").innerHTML =
        "💤 Shiro is sleeping... Zzz...";

    setTimeout(function() {

        shiro.classList.remove("shiro-sleeping");

        shiroEnergy += 40;
        shiroHappiness += 10;
        shiroHunger -= 5;

        document.getElementById("shiroMessage").innerHTML =
            "☀️ Shiro woke up! He feels refreshed! 🐶";

        updateShiro();

    }, 5000);
}

updateShiro();
function shiroAnimate(animationClass) {

    const shiro = document.getElementById("shiro");

    shiro.classList.remove(
        "shiro-playing",
        "shiro-petted",
        "shiro-sleeping"
    );

    void shiro.offsetWidth;

    shiro.classList.add(animationClass);
}


function feedShiro() {

    shiroHappiness += 10;

    shiroAnimate("shiro-playing");

    document.getElementById("shiroMessage").innerHTML =
        "🍖 YUM! Shiro ate his food! ♡";

    updateShiro();
}


function playShiro() {

    shiroHappiness += 15;

    shiroAnimate("shiro-playing");

    document.getElementById("shiroMessage").innerHTML =
        "🎾 Shiro is running around like crazy! 😭";

    updateShiro();
}


function petShiro() {

    shiroHappiness += 5;

    shiroAnimate("shiro-petted");

    document.getElementById("shiroMessage").innerHTML =
        "🫂 Shiro loves his cuddles. ♡";

    // Floating hearts
    for (let i = 0; i < 4; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "💗";

        heart.style.left =
            (80 + Math.random() * 60) + "px";

        heart.style.top =
            (60 + Math.random() * 50) + "px";

        document.getElementById("shiro").appendChild(heart);

        setTimeout(() => heart.remove(), 1200);
    }

    updateShiro();
}


function sleepShiro() {

    shiroAnimate("shiro-sleeping");

    document.getElementById("shiroMessage").innerHTML =
        "💤 Shiro curled up and went to sleep...";

    setTimeout(function() {

        shiro.classList.remove("shiro-sleeping");

        shiroHappiness += 10;

        document.getElementById("shiroMessage").innerHTML =
            "☀️ Shiro woke up! He feels refreshed. 🐶";

        updateShiro();

    }, 3000);
}
let currentWriter = "";

function openWritingPad(person) {

    currentWriter = person;

    const writingArea = document.getElementById("writingArea");
    const writingTitle = document.getElementById("writingTitle");
    const feelingsText = document.getElementById("feelingsText");

    writingArea.style.display = "block";

    if (person === "aaru") {

        writingTitle.innerHTML = "💗 Aaru's Unspoken Words";

        feelingsText.value =
            localStorage.getItem("aaruFeelings") || "";

    } else {

        writingTitle.innerHTML = "💙 Cutu's Unspoken Words";

        feelingsText.value =
            localStorage.getItem("cutuFeelings") || "";
    }

    document.getElementById("feelingsStatus").innerHTML = "";
}


function saveFeelings() {

    const text =
        document.getElementById("feelingsText").value;

    if (currentWriter === "aaru") {

        localStorage.setItem("aaruFeelings", text);

    } else {

        localStorage.setItem("cutuFeelings", text);
    }

    document.getElementById("feelingsStatus").innerHTML =
        "💗 Saved. You don't have to say it out loud yet.";
}


function clearFeelings() {

    document.getElementById("feelingsText").value = "";

    if (currentWriter === "aaru") {

        localStorage.removeItem("aaruFeelings");

    } else {

        localStorage.removeItem("cutuFeelings");
    }

    document.getElementById("feelingsStatus").innerHTML =
        "🧹 Cleared.";
}
let timelineEvents =
    JSON.parse(localStorage.getItem("timelineEvents")) || [];


function showAddTimeline() {

    document.getElementById("addTimelineBox").style.display = "block";
}


function saveTimelineEvent() {

    const date =
        document.getElementById("timelineDate").value;

    const title =
        document.getElementById("timelineTitle").value;

    const description =
        document.getElementById("timelineDescription").value;

    if (!date || !title) {
        alert("Please add a date and title.");
        return;
    }

    timelineEvents.push({
        date: date,
        title: title,
        description: description
    });

    localStorage.setItem(
        "timelineEvents",
        JSON.stringify(timelineEvents)
    );

    document.getElementById("timelineDate").value = "";
    document.getElementById("timelineTitle").value = "";
    document.getElementById("timelineDescription").value = "";

    document.getElementById("addTimelineBox").style.display = "none";

    displayTimelineEvents();
}


function displayTimelineEvents() {

    const timelineList =
        document.getElementById("timelineList");

    if (!timelineList) return;

    timelineEvents.forEach(function(event) {

        timelineList.innerHTML += `
            <div class="timeline-event">

                <div class="timeline-date">
                    ${event.date}
                </div>

                <div class="timeline-content">

                    <h3>💗 ${event.title}</h3>

                    <p>${event.description}</p>

                </div>

            </div>
        `;
    });
}


displayTimelineEvents();
function generateSixMonthCalendar() {

    const calendar =
        document.getElementById("sixMonthCalendar");

    if (!calendar) return;

    calendar.innerHTML = "";

    const startDate = new Date(2026, 3, 7);

    const today = new Date();

    for (let i = 0; i < 24; i++) {

        const milestone = new Date(startDate);

        milestone.setMonth(
            startDate.getMonth() + (i * 6)
        );

        const year = milestone.getFullYear();

        const month = milestone.toLocaleString(
            "default",
            { month: "long" }
        );

        const day = milestone.getDate();

        const past =
            milestone <= today;

        calendar.innerHTML += `
            <div class="six-month-event ${past ? "past" : ""}">

                <span>❤️</span>

                <b>${day} ${month} ${year}</b>

                <small>
                    ${i === 0
                        ? "The day everything began again ♡"
                        : "6-month milestone"}
                </small>

            </div>
        `;
    }
}

generateSixMonthCalendar();
function openOurMap() {
    window.open(
        "https://www.google.com/maps/dir/NMAMIT,+Nitte,+Karnataka/Shivam+Society,+Pimple+Saudagar,+Pune,+Maharashtra",
        "_blank"
    );
}