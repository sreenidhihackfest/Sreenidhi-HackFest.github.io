# Welcome to HACKFEST '26!

The Hackathon, organized by the Career Development Cell (CDC) of Sreenidhi Institute of Science and Technology (SNIST), is an intra-college level event for shortlisted students from various branches to collaborate and innovate.

> [!NOTE]
> Problem statements will be shared here, Check the timer below!

<style>
    #timer {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        color: var(--sidebar-header-border-color, #3672d1);
    }

    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        50% { transform: translateX(2px); }
        75% { transform: translateX(-2px); }
        100% { transform: translateX(0); }
    }

    #problem-button {
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        font-size: 1.2em;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.2s ease-in-out;
    }

    #problem-button[disabled] {
        background-color: var(--table-header-bg, #fafafa);
        color: var(--table-header-fg, #333);
        border: 1px solid var(--separator-color, #ccc);
        opacity: 0.7;
        cursor: not-allowed;
    }

    #problem-button[disabled]:hover {
        animation: shake 0.2s ease-in-out;
    }

    #problem-button.active {
        background-color: var(--link-color, #3672d1);
        color: var(--page-bg, #fff);
    }
</style>

<div id="timer"></div>
<a id="problem-button" href="#" disabled>View Problems</a>

<script>
    const timerElement = document.getElementById('timer');
    const problemButton = document.getElementById('problem-button');
    const targetEpoch = 1771129800000;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetEpoch - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            timerElement.innerHTML = "Hacking has begun!";
            problemButton.removeAttribute('disabled');
            problemButton.classList.add('active');
            problemButton.href = 'problemstatements.md';
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

    updateCountdown(); // Initial call to display countdown immediately
    const countdownInterval = setInterval(updateCountdown, 1000);
</script>

---

## Frequently Asked Questions (FAQ)

### What is this hackathon about? 
An intra-college hackathon for SNIST students to solve real-world problems, innovate, and showcase their skills during campus hours.

### What should I bring to the hackathon? 
Bring your own laptops, chargers, and tools. For hardware projects, specific requirements will be provided with the problem statements.

### Are there any prizes?
Yes, the prize pool includes ₹20,000 for 1st place, ₹15,000 for 2nd place, and ₹10,000 for 3rd place. Additional incentives include internships and participation certificates.

### How will the projects be evaluated? 
The hackathon will have two rounds on 16th and 17th February, held in CET Lab 3 near the basketball ground. Projects will be judged on innovation, feasibility, impact, and presentation, with extra points for DSA rounds. See [Evaluation Guide](../evaluation.md).

### How can I contact the organizers? 
You can contact the student coordinators via WhatsApp or reach out to the CDC at [cdc@sreenidhi.edu.in](mailto:cdc@sreenidhi.edu.in).

### Who is participating?
Only shortlisted SNIST students can participate. Teams of 3-5 members have been finalized and notified via email.

---
