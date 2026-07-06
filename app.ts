// Database of the 28 questions and options
const quizQuestions = [
    // === PART 1: SAME DIMENSION PAIRINGS ===
    {
        id: 1,
        scenario: "You are walking through a beautiful, unfamiliar park. Where is your attention?",
        optionA: "On the vivid colors, the immediate sounds, and the physical sensations right now.",
        optionB: "On the nostalgic feelings, memories, or past places this park reminds you of.",
        funcA: "Se",
        funcB: "Si"
    },
    {
        id: 2,
        scenario: "You hear an ambiguous, open-ended rumor about a major change at work.",
        optionA: "Your mind explodes with ten different possibilities and chaotic potential scenarios.",
        optionB: "Your mind immediately zeros in on the one most likely outcome and its long-term future impact.",
        funcA: "Ne",
        funcB: "Ni"
    },
    {
        id: 3,
        scenario: "You are fixing a broken appliance using a tutorial.",
        optionA: "You follow the steps quickly to make it work; you do not care how it works, just that it functions.",
        optionB: "You take it apart to understand the underlying mechanics; you want to know why it broke.",
        funcA: "Te",
        funcB: "Ti"
    },
    {
        id: 4,
        scenario: "A friend shows you a new outfit they love, but you think it looks terrible.",
        optionA: "You compliment it or focus on their happiness to maintain a positive, supportive mood.",
        optionB: "You give a gentle but honest critique because you refuse to say something you do not genuinely mean.",
        funcA: "Fe",
        funcB: "Fi"
    },
    {
        id: 5,
        scenario: "A risky but exciting opportunity pops up out of nowhere.",
        optionA: "You jump on it immediately to ride the wave and see what happens.",
        optionB: "You hesitate to see if this aligns with your grand, long-term life trajectory.",
        funcA: "Se",
        funcB: "Ni"
    },
    {
        id: 6,
        scenario: "You are cooking a meal for guests.",
        optionA: "You use a reliable, time-tested family recipe to guarantee it tastes good.",
        optionB: "You improvise, throwing random ingredients together to experiment with a new flavor profile.",
        funcA: "Si",
        funcB: "Ne"
    },
    {
        id: 7,
        scenario: "A project requires a decision that boosts efficiency but makes a few team members feel hurt.",
        optionA: "You push forward with the decision; metrics and objective goals must come first.",
        optionB: "You halt the project; staying true to human values is more important than raw productivity.",
        funcA: "Te",
        funcB: "Fi"
    },
    {
        id: 8,
        scenario: "In a group debate, someone states a factually incorrect point that everyone else emotionally agrees with.",
        optionA: "You point out the logical flaw because factual accuracy matters above all else.",
        optionB: "You let it slide to keep the peace and protect the comfort of the room.",
        funcA: "Ti",
        funcB: "Fe"
    },
    {
        id: 9,
        scenario: "You have a completely free weekend with zero responsibilities.",
        optionA: "You want physical action—sports, parties, hiking, or hands-on activities.",
        optionB: "You want mental stimulation—falling down internet rabbit holes, reading, gaming, or writing.",
        funcA: "Se",
        funcB: "Ne"
    },
    {
        id: 10,
        scenario: "You need to predict how a complex political situation will unfold.",
        optionA: "You look at exact historical precedents and specific details of what happened in the past.",
        optionB: "You read between the lines to find the abstract, underlying human patterns driving the event.",
        funcA: "Si",
        funcB: "Ni"
    },
    {
        id: 11,
        scenario: "Your team is launching a new business. What role do you naturally fall into?",
        optionA: "Organizing the logistics, setting deadlines, delegating tasks, and enforcing accountability.",
        optionB: "Coming up with the core concept, branding ideas, and endless pivots for what the business could be.",
        funcA: "Te",
        funcB: "Ne"
    },
    {
        id: 12,
        scenario: "You are trying to solve a deeply complex riddle.",
        optionA: "You break the riddle down into logical pieces, checking for semantic consistency and rules.",
        optionB: "You stare at it blankly, waiting for a sudden, subconscious 'aha!' moment of insight to hit you.",
        funcA: "Ti",
        funcB: "Ni"
    },

    // === PART 2: CROSS-DIMENSION PAIRINGS ===
    {
        id: 13,
        scenario: "You enter a messy, chaotic room.",
        optionA: "You absorb the sensory chaos, adapting to it dynamically without feeling a need to change it.",
        optionB: "You immediately feel an urge to clean, organize, and create an efficient system for the space.",
        funcA: "Se",
        funcB: "Te"
    },
    {
        id: 14,
        scenario: "You are handed a complex new smartphone.",
        optionA: "You start tapping buttons, opening apps, and learning through physical trial and error.",
        optionB: "You pause to mentally map out how the operating system is structured before using it heavily.",
        funcA: "Se",
        funcB: "Ti"
    },
    {
        id: 15,
        scenario: "A workplace rule is clearly outdated and slows down production.",
        optionA: "You follow it anyway because respecting established procedures maintains stability.",
        optionB: "You bypass or rewrite the rule to maximize speed and get better bottom-line results.",
        funcA: "Si",
        funcB: "Te"
    },
    {
        id: 16,
        scenario: "You are studying for a massive exam.",
        optionA: "You memorize the specific facts, dates, and exact data points required.",
        optionB: "You look for the underlying principles so you can logically deduce the answers during the test.",
        funcA: "Si",
        funcB: "Ti"
    },
    {
        id: 17,
        scenario: "You attend a massive music festival.",
        optionA: "You are there for the music, the lights, the bass shaking your chest, and the physical vibe.",
        optionB: "You are there for the shared collective energy, bonding with friends, and the crowd's unified mood.",
        funcA: "Se",
        funcB: "Fe"
    },
    {
        id: 18,
        scenario: "You feel deeply upset or stressed out.",
        optionA: "You seek an external distraction—exercise, driving fast, eating comfort food, or watching a movie.",
        optionB: "You isolate yourself to sit with your emotions, unpack them, and understand your true feelings.",
        funcA: "Se",
        funcB: "Fi"
    },
    {
        id: 19,
        scenario: "It is a family holiday tradition you personally dislike, but your family loves it.",
        optionA: "You participate out of a deep sense of duty, respect for heritage, and routine.",
        optionB: "You participate solely because seeing everyone happy and connected warms your heart.",
        funcA: "Si",
        funcB: "Fe"
    },
    {
        id: 20,
        scenario: "Your career path is stable and safe, but it no longer feels personally fulfilling.",
        optionA: "You stay because security, predictability, and your track record are too valuable to risk.",
        optionB: "You leave because staying makes you feel like an impostor living an inauthentic life.",
        funcA: "Si",
        funcB: "Fi"
    },
    {
        id: 21,
        scenario: "You are writing a book or designing a project.",
        optionA: "You constantly add new chapters, twists, and branches, making it hard to ever actually finish.",
        optionB: "You cut out excess ideas ruthlessly to ensure the project meets its deadline and hits the market.",
        funcA: "Ne",
        funcB: "Te"
    },
    {
        id: 22,
        scenario: "Someone presents a flawed but highly creative business idea.",
        optionA: "You get excited by its novelty and start building on top of it with more wild ideas.",
        optionB: "You immediately spot the logical inconsistencies and bugs in their premises.",
        funcA: "Ne",
        funcB: "Ti"
    },
    {
        id: 23,
        scenario: "You are tasked with turning around a failing company.",
        optionA: "You spend days quietly finding the single, hidden root cause of the failure to shift the company's long-term vision.",
        optionB: "You immediately cut costs, restructure teams, and implement daily targets to see immediate progress.",
        funcA: "Ni",
        funcB: "Te"
    },
    {
        id: 24,
        scenario: "You solve a massive, complex puzzle at work. How did you get the answer?",
        optionA: "The solution came to you out of nowhere while you were showering or resting.",
        optionB: "You consciously traced a clear, step-by-step logical thread until the puzzle solved itself.",
        funcA: "Ni",
        funcB: "Ti"
    },
    {
        id: 25,
        scenario: "You are pitching ideas to a community board.",
        optionA: "You pitch abstract, highly unusual concepts that challenge everyone's current way of thinking.",
        optionB: "You pitch ideas specifically tailored to comfort the audience and meet their expressed emotional needs.",
        funcA: "Ne",
        funcB: "Fe"
    },
    {
        id: 26,
        scenario: "Someone plays devil's advocate against a deeply sensitive moral topic.",
        optionA: "You enjoy the mental gymnastics and gladly debate alternative perspectives for fun.",
        optionB: "You feel personally offended or defensive because they are trivializing a core human value.",
        funcA: "Ne",
        funcB: "Fi"
    },
    {
        id: 27,
        scenario: "A friend is crying about a bad breakup.",
        optionA: "You analyze the psychological patterns of their relationship and look at where this fits in their life arc.",
        optionB: "You mirror their emotional state, offer comforting words, and try to make them smile right now.",
        funcA: "Ni",
        funcB: "Fe"
    },
    {
        id: 28,
        scenario: "You are reflecting on the meaning of life.",
        optionA: "You look at it through a cosmic, detached lens, focusing on universal evolution and unseen global patterns.",
        optionB: "You look at it through a deeply personal lens, focusing on individual soul alignment, inner peace, and personal truth.",
        funcA: "Ni",
        funcB: "Fi"
    }
];

// Map MBTI types to their top 2 functions
const mbtiArchetpes = {
    INTJ: { dom: "Ni", aux: "Te" }, INFJ: { dom: "Ni", aux: "Fe" },
    ENTJ: { dom: "Te", aux: "Ni" }, ENFJ: { dom: "Fe", aux: "Ni" },
    INTP: { dom: "Ti", aux: "Ne" }, INFP: { dom: "Fi", aux: "Ne" },
    ENTP: { dom: "Ne", aux: "Ti" }, ENFP: { dom: "Ne", aux: "Fi" },
    ISTJ: { dom: "Si", aux: "Te" }, ISFJ: { dom: "Si", aux: "Fe" },
    ESTJ: { dom: "Te", aux: "Si" }, ESFJ: { dom: "Fe", aux: "Si" },
    ISTP: { dom: "Ti", aux: "Se" }, ISFP: { dom: "Fi", aux: "Se" },
    ESTP: { dom: "Se", aux: "Ti" }, ESFP: { dom: "Se", aux: "Fi" }
};


//Tracking state
let currentQuestionIndex = 0;
const scores = {
    Ni: 0, Ne: 0, 
    Si: 0, Se: 0, 
    Fi: 0, Fe: 0, 
    Ti: 0, Te: 0, 
};

// Function to update question display in HTML
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const totalQuestions = quizQuestions.length
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100

    //Update text content
    document.getElementById('progress-text')!.innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    document.getElementById('question-text')!.innerText = currentQuestion!.scenario;
    document.getElementById('btn-A')!.innerText = currentQuestion!.optionA;
    document.getElementById('btn-B')!.innerText = currentQuestion!.optionB;

    // Animate progress bar dynamically
    document.getElementById('progress-bar')!.style.width = `${progressPercent}%`;
}

// Function to handle the user click
function selectOption(choice: string) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const totalQuestions = quizQuestions.length;

    // Award point to cognitive function based on answer
    if (choice == 'A') {
        scores[currentQuestion!.funcA as keyof typeof scores]++;
    } else {
        scores[currentQuestion!.funcB as keyof typeof scores]++;
    }

    // Move to next question (or show results if finished)
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        showResults();
    }
}

(window as any).selectOption = selectOption;

// Function to calculate MBTI type
function calculateMBTI() {
    // Sort functions from highest to lowest scored and pick the top 2
    const sortedFunctions = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

    const highest = sortedFunctions[0];
    const secondHighest = sortedFunctions[1];

    // Assigning the final MBTI type
    let finalType = 'Unknown';
    for (const [type, stack] of Object.entries(mbtiArchetpes)) {
        if (stack.dom == highest) {
            finalType = type;

            if (stack.aux == secondHighest) {
                break;
            }
        }

    }

    return [highest, secondHighest, finalType];
}

// Function to show results once over
function showResults() {
    // Run calculation
    calculateMBTI();
    const [highest, secondHighest, finalType] = calculateMBTI();

    document.getElementById('quiz-container')!.innerHTML = `
        <div class="mb-8 flex flex-col items-center">
            <h1 class="text-4xl font-bold tracking-wide text-indigo-800 mb-6">
                What is your MBTI?
            </h1>
            <h3 class="text-2xl font-bold tracking-wide text-slate-700 mb-2 leading-snug underline">
                Quiz Completed!!
            </h3>
        </div>

        <div class="mb-8 flex flex-col gap-2 mb-2">
            <h3 class="text-xl md:text-2xl font-semibold text-slate-900 leading-snug">
                Your Results:
            </h3>

            <div class="flex justify-center items-center ">
                <span class="font-bold text-6xl p-2 text-red-900 tracking-wide">
                    ${finalType}
                </span>
            </div>
        </div>

        <div class="flex flex-col gap-6 justify-center items-start leading-normal">
            <span class="tracking-wide text-lg pb-4">
                Your personality type is <strong class="text-lg italic">${finalType}</strong>.<br> Congratulations!&#127881;&#127881;
            </span>

            <div class="flex w-full">
                <span class="flex-1">Your <strong>Dominant</strong> Function: ${highest}</span><br>
                <span class="flex-1">Your <strong>Auxilary</strong> Function: ${secondHighest}</span>
            </div>
        </div>

    `
}

displayQuestion();
