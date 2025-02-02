document.addEventListener("DOMContentLoaded", function () {
    const exams = [
        { date: "2025-04-29T13:00:00", subject: "PHYSICS SL - P1" },
        { date: "2025-04-30T09:00:00", subject: "PHYSICS SL - P2" },
        { date: "2025-05-08T13:00:00", subject: "ENGLISH A HL - P1" },
        { date: "2025-05-09T09:00:00", subject: "ENGLISH A HL - P2" },
        { date: "2025-05-09T13:00:00", subject: "GEOGRAPHY SL - P1" },
        { date: "2025-05-12T09:00:00", subject: "GEOGRAPHY SL - P2" },
        { date: "2025-05-13T13:00:00", subject: "ECONOMICS HL - P2" },
        { date: "2025-05-14T09:00:00", subject: "ECONOMICS HL - P1" },
        { date: "2025-05-14T09:00:00", subject: "ECONOMICS HL - P3" },
        { date: "2025-05-14T13:00:00", subject: "SPANISH B SL - P1" },
        { date: "2025-05-14T13:00:00", subject: "SPANISH B SL - RE" },
        { date: "2025-05-14T13:00:00", subject: "SPANISH B SL - LI" },
        { date: "2025-05-15T09:00:00", subject: "MATH AA HL - P1" },
        { date: "2025-05-15T13:00:00", subject: "MATH AA HL - P2" },
        { date: "2025-05-16T09:00:00", subject: "MATH AA HL - P3" }
    ];

    function updateCountdown() {
        const now = new Date();
        let nextExam = null;

        for (let exam of exams) {
            const examDate = new Date(exam.date);
            if (examDate > now) {
                nextExam = exam;
                break;
            }
        }

        if (!nextExam) {
            document.getElementById("countdown-btn").innerHTML = "All Exams Completed!";
            return;
        }

        const examDate = new Date(nextExam.date);
        const timeDiff = examDate - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("countdown-btn").innerHTML = `Next Exam: ${nextExam.subject}<br>${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
