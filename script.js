const questions = [
    {
        question: "ভ্যাকুয়ল সম্পর্কিত নিচের কোন তথ্যটি সঠিক নয়?",
        options: [
            "উদ্ভিদের মধ্যে একটি বৃহৎ কেন্দ্রীয় ভ্যাকুয়ল থাকে, যা কোষের মোট পরিমাণের ৯০% দখল করে",
            "ভ্যাকুয়ল উদ্ভিদ কোষকে রসস্ফীতি ও দৃঢ়তা প্রদান করে",
            "অ্যামিবার ভ্যাকুয়ল পুষ্টির কাজে সহায়তা করে",
            "প্রাণী কোষে ভ্যাকুয়ল অনুপস্থিত থাকে"
        ],
        correct: 3,
        explanation: "প্রাণী কোষে ভ্যাকুয়ল *অনুপস্থিত নয়*, তবে সেগুলো সাধারণত ছোট ও কম সংখ্যা বিশিষ্ট হয়। তাই D অপশনটি সঠিক নয়।"
    },
    {
        question: "কোন কোষীয় অঙ্গানুকে 'আত্মঘাতী থলি' বলা হয়?",
        options: ["রাইবোজোম", "লাইসোজোম", "মেসোজোম", "এন্ডোপ্লাজমিক রেটিকুলাম"],
        correct: 1,
        explanation: "লাইসোজোম এনজাইম বহন করে যা কোষের নিজের উপাদান ভেঙে ফেলতে সক্ষম — তাই একে 'আত্মঘাতী থলি' বলা হয়।"
    },
    {
        question: "প্রাণী কোষে কোন অঙ্গানু স্পিন্ডল তৈরি করে?",
        options: ["রাইবোজোম", "সেন্ট্রোজোম", "লাইসোজোম", "মাইটোকন্ড্রিয়া"],
        correct: 1,
        explanation: "সেন্ট্রোজোম কোষ বিভাজনের সময় স্পিন্ডল তন্তু তৈরি করে যা ক্রোমোজোম টানতে সাহায্য করে।"
    },
    {
        question: "নিচের কোনটি কোষের প্রধান মাইক্রোটিউবিউল সংগঠক কেন্দ্র, যা সেলুলার গতি ও সংবেদন প্রক্রিয়ার সাথে যুক্ত?",
        options: ["লাইসোজোম", "প্লাস্টিড", "সেন্ট্রোজোম", "ভ্যাকুয়ল"],
        correct: 2,
        explanation: "সেন্ট্রোজোম হলো মাইক্রোটিউবিউল অর্গানাইজিং সেন্টার (MTOC), যা কোষের গঠন ও গতি নিয়ন্ত্রণে সহায়তা করে।"
    },
    {
        question: "উদ্ভিদ কোষ প্রাচীরের মুখ্য উপাদান কী?",
        options: ["পেক্টোজ", "সেলুলোজ", "পেপ্টিডোগ্লাইকান", "জিন"],
        correct: 1,
        explanation: "উদ্ভিদের কোষপ্রাচীরের মুখ্য উপাদান হলো সেলুলোজ, যা একটি শক্ত ফাইবারস উপাদান।"
    },
    {
        question: "গঠনগত কোন স্তর শেওলা, ছত্রাক ও গাছের কোষের চারদিকে থাকে এবং যান্ত্রিক চাপের বিরুদ্ধে সুরক্ষা দেয়?",
        options: ["প্লাস্টিড", "কোষ ঝিল্লি", "কোষ প্রাচীর", "ভ্যাকুয়ল"],
        correct: 2,
        explanation: "কোষ প্রাচীর কোষকে কাঠামোগত শক্তি ও সুরক্ষা প্রদান করে এবং শুধুমাত্র উদ্ভিদ, ছত্রাক ও কিছু ব্যাকটেরিয়াতে থাকে।"
    },
    {
        question: "নিচের কোনটি পর্দাবিহীন কোষীয় অঙ্গানু?",
        options: ["রাইবোজোম", "রাইসোম", "সেন্ট্রোজোম", "গলগি বডি"],
        correct: 0,
        explanation: "রাইবোজোমে কোন ঝিল্লি থাকে না। এটি প্রোটিন সংশ্লেষের জন্য দায়ী।"
    },
    {
        question: "নিচের কোন অঙ্গানু ঝিল্লি দ্বারা ঘেরা নয়?",
        options: ["লাইসোজোম", "রাইবোজোম", "নিউক্লিয়াস", "গলগি বডি"],
        correct: 1,
        explanation: "রাইবোজোম একমাত্র অঙ্গানু যেটি ঝিল্লিবিহীন, অন্য তিনটির বাইরের ঝিল্লি থাকে।"
    },
    {
        question: "কোষ ঝিল্লি সম্বন্ধে নিচের কোন বিবৃতিটি সঠিক নয়?",
        options: [
            "এটি সমস্ত পদার্থ দ্বারা ভেদ্য",
            "এটি নমনীয় এবং কোষকে বিভিন্ন পদার্থ পরিবহণে সাহায্য করে",
            "এটি অক্সিজেন ও কার্বন ডাই-অক্সাইড প্রবেশে সহায়তা করে",
            "এটি নির্বাচনীভাবে পদার্থ প্রবেশ-প্রস্থান নিয়ন্ত্রণ করে"
        ],
        correct: 0,
        explanation: "কোষ ঝিল্লি *selectively permeable*, সব কিছু প্রবেশ করতে দেয় না। তাই A বিবৃতিটি সঠিক নয়।"
    },
    {
        question: "নিউক্লিয়াস ও সাইটোপ্লাজমের মধ্যে উপাদান পরিবহণে কোন অঙ্গানুটি প্রধান?",
        options: ["রাইবোজোম", "মাইটোকন্ড্রিয়া", "লাইসোজোম", "এন্ডোপ্লাজমিক রেটিকুলাম"],
        correct: 3,
        explanation: "ER নিউক্লিয়াস সংলগ্ন অঙ্গানু যা প্রোটিন ও লিপিড পরিবহনে সাহায্য করে।"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 600; // 10 মিনিট (সেকেন্ডে)
let timerInterval;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

function loadQuestion() {
    const quiz = document.getElementById('quiz');
    const q = questions[currentQuestion];
    quiz.innerHTML = `
        <div class="question">
            <h3>${currentQuestion + 1}. ${q.question}</h3>
            <div class="options">
                ${q.options.map((option, index) => `
                    <label>
                        <input type="radio" name="option" value="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('question-count').textContent = `${currentQuestion + 1}/${questions.length}`;
    document.getElementById('progress').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const timerDisplay = document.getElementById('timer');
        timerDisplay.textContent = `সময়: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 30) {
            timerDisplay.classList.add('warning');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult();
            document.getElementById('end-audio').play();
        }
    }, 1000);
}

function showResult() {
    clearInterval(timerInterval);
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = '';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline-block';
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }
    document.getElementById('result').innerHTML = `
        <div class="result-item">
            আপনার স্কোর: ${score}/${questions.length}<br>
            শতকরা: ${(score / questions.length * 100).toFixed(2)}%<br>
            সর্বোচ্চ স্কোর: ${highScore}/${questions.length}<br>
            <h3>বিস্তারিত:</h3>
            ${questions.map((q, i) => `
                <div class="result-item">
                    <strong>${i + 1}. ${q.question}</strong><br>
                    সঠিক উত্তর: ${q.options[q.correct]}<br>
                    ব্যাখ্যা: ${q.explanation}
                </div>
            `).join('')}
        </div>
    `;
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('দয়া করে একটি উত্তর নির্বাচন করুন!');
        return;
    }
    const selectedIndex = parseInt(selectedOption.value);
    const labels = document.querySelectorAll('.options label');
    labels[selectedIndex].classList.add(selectedIndex === questions[currentQuestion].correct ? 'correct' : 'wrong');
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
        document.getElementById('correct-audio').play();
    } else {
        document.getElementById('wrong-audio').play();
    }
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
            document.getElementById('end-audio').play();
        }
    }, 1000); // ১ সেকেন্ড অপেক্ষা অ্যানিমেশনের জন্য
});

document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    timeLeft = 600;
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('result').innerHTML = '';
    document.getElementById('timer').classList.remove('warning');
    loadQuestion();
    startTimer();
    document.getElementById('start-audio').play();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('theme-toggle').textContent = document.body.classList.contains('dark-mode') ? 'লাইট মোড' : 'ডার্ক মোড';
});

// কুইজ শুরুতে স্টার্ট অডিও চালানো
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    startTimer();
    document.getElementById('start-audio').play();
});