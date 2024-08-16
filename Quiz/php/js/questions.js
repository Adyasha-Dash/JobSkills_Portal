let questions = [
  {
    numb: 1,
    question: "What is PHP?",
    answer:
      "PHP is a widely-used open-source scripting language designed for web development, and it can be embedded into HTML.",
    options: [
      "PHP is a widely-used open-source scripting language designed for web development, and it can be embedded into HTML.",
      "PHP is a database management system.",
      "PHP is a front-end framework.",
      "PHP is a JavaScript library.",
    ],
  },
  {
    numb: 2,
    question: "Explain the difference between 'echo' and 'print' in PHP.",
    answer:
      "'echo' can output one or more strings and has no return value, while 'print' can only output one string and returns a value of 1.",
    options: [
      "'echo' can output one or more strings and has no return value, while 'print' can only output one string and returns a value of 1.",
      "'echo' can only output one string and returns a value, while 'print' can output multiple strings and returns no value.",
      "'echo' is used for debugging purposes, while 'print' is used for standard output.",
      "'echo' and 'print' are completely interchangeable in PHP.",
    ],
  },
  {
    numb: 3,
    question:
      "What is the purpose of the 'include' and 'require' statements in PHP?",
    answer:
      "The 'include' and 'require' statements are used to insert the content of one PHP file into another, with 'require' causing a fatal error if the file is not found, while 'include' only produces a warning.",
    options: [
      "The 'include' and 'require' statements are used to insert the content of one PHP file into another, with 'require' causing a fatal error if the file is not found, while 'include' only produces a warning.",
      "'include' is used for inserting HTML, while 'require' is used for PHP files.",
      "'include' and 'require' are used to connect to databases in PHP.",
      "'include' is for front-end scripts, while 'require' is for back-end scripts.",
    ],
  },
  {
    numb: 4,
    question: "What are PHP sessions used for?",
    answer:
      "PHP sessions are used to store user information across multiple pages, allowing for persistent user data during a session.",
    options: [
      "PHP sessions are used to store user information across multiple pages, allowing for persistent user data during a session.",
      "PHP sessions are used to manage database connections.",
      "PHP sessions are used to cache web pages for faster access.",
      "PHP sessions are used to create forms in PHP.",
    ],
  },
  {
    numb: 5,
    question:
      "What is the purpose of the '$_POST' and '$_GET' superglobals in PHP?",
    answer:
      "'$_POST' is used to collect form data sent via the POST method, while '$_GET' collects form data sent via the GET method and also retrieves data from the URL.",
    options: [
      "'$_POST' is used to collect form data sent via the POST method, while '$_GET' collects form data sent via the GET method and also retrieves data from the URL.",
      "'$_POST' is used for session management, while '$_GET' is used for cookies.",
      "'$_POST' and '$_GET' are used to handle file uploads in PHP.",
      "'$_POST' is used for server-side scripting, while '$_GET' is used for client-side scripting.",
    ],
  },
];
