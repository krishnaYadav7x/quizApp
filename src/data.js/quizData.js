const mathImg = new URL("../assets/math.png", import.meta.url).href;
const physicsImg = new URL("../assets/physics.png", import.meta.url).href;
const chemistryImg = new URL("../assets/chemistry.png", import.meta.url).href;

export const quizImages = {
  Math: mathImg,
  Physics: physicsImg,
  Chemistry: chemistryImg,
};

export const instructions = {
  Guidelines: [
    "Read each question carefully before answering.",
    "Select the correct answer from the given options.",
    "Use Next to move to the next question.",
    "Use Previous to review or change your answer.",
    "Try to solve each problem before selecting an answer.",
    "Submit the quiz after completing all questions.",
  ],
};

export const questions = {
  Math: [
    
    {
      id: 1,
      question: "If x + 1/x = 5, where x ≠ 0, what is the value of x² + 1/x²?",
      options: ["21", "23", "25", "27"],
      answer: "23",
    },

    {
      id: 2,
      question:
        "A can complete a task in 12 days and B can complete it in 18 days. If they work together, how many days will they take?",
      options: ["6.2 days", "7.2 days", "8.4 days", "9.6 days"],
      answer: "7.2 days",
    },

    {
      id: 3,
      question:
        "A rectangle has a perimeter of 50 cm and an area of 144 cm². What is its length?",
      options: ["12 cm", "14 cm", "16 cm", "18 cm"],
      answer: "16 cm",
    },

    {
      id: 4,
      question:
        "Two fair dice are rolled together. What is the probability that their sum is greater than 9?",
      options: ["1/9", "1/6", "1/4", "1/3"],
      answer: "1/6",
    },

    {
      id: 5,
      question: "What is the next number in the sequence: 3, 8, 15, 24, 35, ?",
      options: ["44", "46", "48", "50"],
      answer: "48",
    },

    {
      id: 6,
      question:
        "A price is increased by 20% and then decreased by 20%. What is the overall percentage change?",
      options: ["No change", "2% decrease", "4% decrease", "4% increase"],
      answer: "4% decrease",
    },

    {
      id: 7,
      question:
        "A train 180 m long is moving at 54 km/h. How many seconds will it take to completely pass a pole?",
      options: ["10 seconds", "12 seconds", "15 seconds", "18 seconds"],
      answer: "12 seconds",
    },

    {
      id: 8,
      question:
        "A container has 10 L of a 40% salt solution. How much water should be added to make the solution 25% salt?",
      options: ["4 L", "5 L", "6 L", "8 L"],
      answer: "6 L",
    },

    {
      id: 9,
      question:
        "The present age of a father is three times the age of his son. After 8 years, the father will be twice as old as his son. What is the father's present age?",
      options: ["20 years", "24 years", "28 years", "32 years"],
      answer: "24 years",
    },

    {
      id: 10,
      question:
        "A number is first divided by 3, then 5 is added to the result. The final answer is 17. What is the original number?",
      options: ["30", "36", "42", "48"],
      answer: "36",
    },
  ],
  Physics: [
  {
    id: 1,
    question:
      "A car accelerates uniformly from 10 m/s to 30 m/s in 5 seconds. What is its acceleration?",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    answer: "4 m/s²",
  },
  {
    id: 2,
    question:
      "A force of 20 N acts on an object of mass 5 kg. What acceleration is produced?",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    answer: "4 m/s²",
  },
  {
    id: 3,
    question:
      "A body of mass 2 kg is moving with a velocity of 6 m/s. What is its kinetic energy?",
    options: ["18 J", "24 J", "36 J", "72 J"],
    answer: "36 J",
  },
  {
    id: 4,
    question:
      "A 10 kg object is lifted to a height of 5 m. Taking g = 10 m/s², what is its gravitational potential energy?",
    options: ["50 J", "100 J", "500 J", "1000 J"],
    answer: "500 J",
  },
  {
    id: 5,
    question:
      "A wave has a frequency of 50 Hz and a wavelength of 4 m. What is its speed?",
    options: ["12.5 m/s", "100 m/s", "200 m/s", "250 m/s"],
    answer: "200 m/s",
  },
  {
    id: 6,
    question:
      "An electric current of 2 A flows through a resistor of 6 Ω. What is the potential difference across the resistor?",
    options: ["3 V", "8 V", "12 V", "18 V"],
    answer: "12 V",
  },
  {
    id: 7,
    question:
      "A bulb operates at 220 V and draws a current of 0.5 A. What is its power?",
    options: ["55 W", "110 W", "220 W", "440 W"],
    answer: "110 W",
  },
  {
    id: 8,
    question:
      "A projectile is thrown vertically upward with an initial velocity of 20 m/s. Taking g = 10 m/s², what maximum height will it reach?",
    options: ["10 m", "20 m", "30 m", "40 m"],
    answer: "20 m",
  },
  {
    id: 9,
    question:
      "A 5 kg object is moving at 4 m/s. What is the magnitude of its momentum?",
    options: ["5 kg·m/s", "10 kg·m/s", "20 kg·m/s", "25 kg·m/s"],
    answer: "20 kg·m/s",
  },
  {
    id: 10,
    question:
      "A machine does 600 J of work in 20 seconds. What is its power?",
    options: ["20 W", "30 W", "40 W", "60 W"],
    answer: "30 W",
  },
],
};
















