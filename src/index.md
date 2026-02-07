<style>
/* Hero Section Styles */
.hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    position: relative;
}

.hero-title {
    font-family: "Adriana", "Horizon", sans-serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    margin: 0;
    background: linear-gradient(135deg, #bc13fe 0%, #ff007f 50%, #00f3ff 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 4s ease infinite;
    text-shadow: 0 0 60px rgba(188, 19, 254, 0.5);
    letter-spacing: 0.05em;
}

.hero-subtitle {
    font-family: "Horizon", sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.3em;
    margin-top: 0.5rem;
    text-transform: uppercase;
}

.hero-date {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #00f3ff;
    margin-top: 2rem;
    text-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
}

.hero-location {
    font-size: 1.2rem;
    color: #ff007f;
    margin-top: 0.5rem;
}

#timer {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: bold;
    text-align: center;
    margin: 2rem 0;
    background: linear-gradient(90deg, #bc13fe, #ff007f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

#problem-button {
    display: inline-block;
    margin: 1rem auto;
    padding: 1rem 2.5rem;
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 50px;
    border: 2px solid #bc13fe;
    background: rgba(188, 19, 254, 0.1);
    color: #bc13fe;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

#problem-button:hover:not([disabled]) {
    background: linear-gradient(135deg, #bc13fe, #ff007f);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(188, 19, 254, 0.4);
}

#problem-button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

@keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.5rem;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* Section Styles */
.section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-family: "Horizon", sans-serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, #bc13fe, #00f3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Prize Cards */
.prize-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.prize-card {
    background: rgba(26, 21, 48, 0.8);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(188, 19, 254, 0.3);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    min-width: 200px;
    transition: all 0.3s ease;
}

.prize-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(188, 19, 254, 0.3);
    border-color: #bc13fe;
}

.prize-card.gold { border-top: 4px solid #ffd700; }
.prize-card.silver { border-top: 4px solid #c0c0c0; }
.prize-card.bronze { border-top: 4px solid #cd7f32; }

.prize-medal {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.prize-place {
    font-weight: 700;
    font-size: 1.2rem;
    color: white;
}

.prize-amount {
    font-size: 1.8rem;
    font-weight: 900;
    background: linear-gradient(90deg, #bc13fe, #ff007f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 0.5rem;
}

/* Sponsors Section */
.sponsors-container {
    text-align: center;
}

.sponsors-image {
    max-width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

/* FAQ Section */
.faq-item {
    background: rgba(26, 21, 48, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(188, 19, 254, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.faq-item:hover {
    border-color: #bc13fe;
    box-shadow: 0 5px 20px rgba(188, 19, 254, 0.2);
}

.faq-question {
    font-weight: 600;
    color: #bc13fe;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.faq-answer {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
}
</style>

<!-- Hero Section -->
<div class="hero-section">
    <div class="hero-subtitle">SREENIDHI</div>
    <h1 class="hero-title">HACKFEST '26</h1>
    <div class="hero-subtitle">INTRACOLLEGE HACKATHON</div>
    <div class="hero-date">16 - 17 February 2026</div>
    <div class="hero-location">📍 CET Lab 3</div>    
    <div id="timer"></div>
    <a id="problem-button" href="problemstatements.html" disabled>View Problem Statements</a>
    <div class="scroll-indicator">↓ Scroll for more</div>
</div>

---

<!-- Prizes Section -->
<div class="section">
    <h2 class="section-title">🏆 Prizes</h2>
    <div class="prize-grid">
        <div class="prize-card silver">
            <div class="prize-medal">🥈</div>
            <div class="prize-place">2ND PLACE</div>
            <div class="prize-amount">₹15,000</div>
        </div>
        <div class="prize-card gold">
            <div class="prize-medal">🥇</div>
            <div class="prize-place">1ST PLACE</div>
            <div class="prize-amount">₹20,000</div>
        </div>
        <div class="prize-card bronze">
            <div class="prize-medal">🥉</div>
            <div class="prize-place">3RD PLACE</div>
            <div class="prize-amount">₹10,000</div>
        </div>
    </div>
</div>

---

<!-- Sponsors Section -->
<div class="section">
    <h2 class="section-title">🤝 Presented By</h2>
    <div class="sponsors-container">
        <img src="static/presentedby.png" alt="Sponsors" class="sponsors-image">
    </div>
</div>

---

<!-- FAQ Section -->
<div class="section">
    <h2 class="section-title">❓ Frequently Asked Questions</h2>
    <div class="faq-item">
        <div class="faq-question">What is this hackathon about?</div>
        <div class="faq-answer">An intra-college hackathon for SNIST students to solve real-world problems, innovate, and showcase their skills during campus hours.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question">What should I bring to the hackathon?</div>
        <div class="faq-answer">Bring your own laptops, chargers, and tools. For hardware projects, specific requirements will be provided with the problem statements.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question">Are there any prizes?</div>
        <div class="faq-answer">Yes! The prize pool includes ₹20,000 for 1st place, ₹15,000 for 2nd place, and ₹10,000 for 3rd place. Additional incentives include internships and participation certificates.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question">How will the projects be evaluated?</div>
        <div class="faq-answer">The hackathon will have two rounds on 16th and 17th February. Projects will be judged on innovation, feasibility, impact, and presentation, with extra points for DSA rounds.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question">How can I contact the organizers?</div>
        <div class="faq-answer">Participants can contact the student coordinators via the WhatsApp Group or reach out to the Dean of Training at CDC.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question">Who is participating?</div>
        <div class="faq-answer">Only shortlisted SNIST students can participate. Teams of 3-5 members have been finalized and notified via email.</div>
    </div>
</div>

---

<div style="text-align: center; padding: 2rem; color: rgba(255,255,255,0.5);">
    <strong>ORGANIZED BY THE TRAINING DEPARTMENT</strong><br>
    Sreenidhi Institute of Science and Technology
</div>

<script>
    const timerElement = document.getElementById('timer');
    const problemButton = document.getElementById('problem-button');
    const targetEpoch = 1771129800000; // Feb 16, 2026 10:00 AM IST

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetEpoch - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            timerElement.innerHTML = "🚀 Hacking has begun!";
            problemButton.removeAttribute('disabled');
            problemButton.href = 'problemstatements.html';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    problemButton.addEventListener('click', (e) => {
        if (problemButton.hasAttribute('disabled')) {
            e.preventDefault();
        }
    });

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
</script>
