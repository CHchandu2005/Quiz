const Quiz = [
    [
        {
            question: "Which HTML element is used to define the title of a document?",
            options: ["<meta>", "<title>", "<head>", "<link>"],
            answer: 1,
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: ["style", "class", "id", "src"],
            answer: 0,
        },
        {
            question: "What does the <a> tag in HTML stand for?",
            options: ["Anchor", "Article", "Audio", "Array"],
            answer: 0,
        },
        {
            question: "Which HTML tag is used to create a text input field?",
            options: ["<textarea>", "<input>", "<form>", "<label>"],
            answer: 1,
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<br>", "<hr>", "<lb>", "<break>"],
            answer: 0,
        },
    ],
    [
        {
            question: "Which CSS property is used to change the background color?",
            options: ["color", "bgcolor", "background-color", "background"],
            answer: 2,
        },
        {
            question: "Which CSS property is used to change the font of an element?",
            options: ["font-style", "font-family", "font-weight", "font-size"],
            answer: 1,
        },
        {
            question: "How do you select an element with the id 'header' in CSS?",
            options: [".header", "#header", "header", "*header"],
            answer: 1,
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["text-style", "font-style", "text-size", "font-size"],
            answer: 3,
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets",
            ],
            answer: 0,
        },
    ],
    [
        {
            question: "Which of the following is a correct way to create a function in JavaScript?",
            options: [
                "function:myFunction()",
                "function = myFunction()",
                "function myFunction()",
                "myFunction function()",
            ],
            answer: 2,
        },
        {
            question: "How do you declare a JavaScript variable?",
            options: ["var name;", "variable name;", "v name;", "var: name;"],
            answer: 0,
        },
        {
            question: "What is the output of 'typeof null' in JavaScript?",
            options: ["'object'", "'null'", "'undefined'", "'number'"],
            answer: 0,
        },
        {
            question: "Which method is used to round a number to the nearest integer in JavaScript?",
            options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.sqrt()"],
            answer: 0,
        },
        {
            question: "What does 'this' refer to in JavaScript?",
            options: [
                "The global object",
                "The object from which it was called",
                "The document object",
                "The window object",
            ],
            answer: 1,
        },
    ],
    [
        {
            question: "What is the main purpose of React?",
            options: [
                "To build server-side applications",
                "To style websites",
                "To manage the state of web applications",
                "To connect to databases",
            ],
            answer: 2,
        },
        {
            question: "What is JSX in React?",
            options: [
                "A CSS preprocessor",
                "A JavaScript XML syntax extension",
                "A backend framework",
                "A type of database query language",
            ],
            answer: 1,
        },
        {
            question: "Which method is used to update the state in a React component?",
            options: ["updateState()", "setState()", "modifyState()", "changeState()"],
            answer: 1,
        },
        {
            question: "What is the virtual DOM in React?",
            options: [
                "A copy of the real DOM",
                "A template for creating DOM elements",
                "A programming concept to optimize updates",
                "A way to render elements directly on the server",
            ],
            answer: 2,
        },
        {
            question: "What is the correct way to create a React component?",
            options: [
                "function MyComponent() {}",
                "var MyComponent = function() {}",
                "class MyComponent extends React.Component {}",
                "All of the above",
            ],
            answer: 3,
        },
    ],
    [
        {
            question: "What is Node.js?",
            options: [
                "A programming language",
                "A framework for JavaScript",
                "A runtime environment for JavaScript",
                "A type of database",
            ],
            answer: 2,
        },
        {
            question: "Which module is used to work with file systems in Node.js?",
            options: ["fs", "path", "http", "url"],
            answer: 0,
        },
        {
            question: "Which command is used to install a Node.js package?",
            options: ["install package", "npm install package", "node install package", "install-node package"],
            answer: 1,
        },
        {
            question: "What is the default port used by the HTTP server in Node.js?",
            options: ["3000", "8000", "8080", "4000"],
            answer: 2,
        },
        {
            question: "What does the 'require' function do in Node.js?",
            options: [
                "Imports a module",
                "Creates a new module",
                "Exports a module",
                "Deletes a module",
            ],
            answer: 0,
        },
    ],
    [
        {
            question: "What is MongoDB?",
            options: [
                "A relational database",
                "A document-oriented NoSQL database",
                "A type of JavaScript framework",
                "A CSS library",
            ],
            answer: 1,
        },
        {
            question: "Which command is used to insert a document into a MongoDB collection?",
            options: ["insert()", "db.collection.insertOne()", "insertOne()", "db.collection.add()"],
            answer: 1,
        },
        {
            question: "In MongoDB, what is a collection?",
            options: [
                "A group of databases",
                "A set of tables",
                "A group of related documents",
                "A type of index",
            ],
            answer: 2,
        },
        {
            question: "Which method is used to retrieve all documents from a collection?",
            options: ["find()", "fetch()", "get()", "retrieve()"],
            answer: 0,
        },
        {
            question: "What does the 'ObjectId' type represent in MongoDB?",
            options: [
                "A unique identifier for documents",
                "A type of document",
                "A schema definition",
                "A query filter",
            ],
            answer: 0,
        },
    ]
];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const questionElem = document.getElementById("question");
const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");
const option_4 = document.getElementById("option_4");
const submitBtn = document.getElementById("submit");
const resultContainer = document.getElementById("result-container");
const scoreElem = document.getElementById("score");
const timeElem = document.getElementById("time");

let curQuiz = 0;
let score = 0;
let timer; 
let timeLeft = 10; 
let resetTimer = true; 

const startTimer = () => {
    if (resetTimer) {
        timeLeft = 10; 
    }
    timeElem.innerText = `Time left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timeElem.innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer); 
            curQuiz++;
            if (curQuiz < Quiz[id].length) {
                resetTimer = true; 
                loadQuiz(); 
            } else {
                scoreElem.innerText = `You answered ${score}/${Quiz[id].length} questions correctly.`;
                resultContainer.style.display = "block";
                document.getElementById("quiz").style.display = "none";
            } 
        }
    }, 1000);
};

const loadQuiz = () => {
    const currentQuizData = Quiz[id][curQuiz];
    questionElem.innerText = currentQuizData.question;
    option_1.innerText = currentQuizData.options[0];
    option_2.innerText = currentQuizData.options[1];
    option_3.innerText = currentQuizData.options[2];
    option_4.innerText = currentQuizData.options[3];

    if (resetTimer) {
        startTimer(); 
    } else {
        resetTimer = true;
    }
};

const check = () => {
    clearInterval(timer); 

    const options = document.querySelectorAll('input[name="answer"]');
    let selectedValue = null;
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedValue = options[i].value;
            break;
        }
    }

    if (selectedValue === null) {
        alert("Please select an option before submitting!");
        resetTimer = false; 
        startTimer(); 
        return;
    }

    if (selectedValue == Quiz[id][curQuiz].answer) {
        score++;
    }

    curQuiz++;

    if (curQuiz < Quiz[id].length) {
        resetTimer = true;
        loadQuiz(); 
    } else {
        scoreElem.innerText = `You answered ${score}/${Quiz[id].length} questions correctly.`;
        resultContainer.style.display = "block";
        document.getElementById("quiz").style.display = "none";
    }

    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
};

// Initial load
loadQuiz();