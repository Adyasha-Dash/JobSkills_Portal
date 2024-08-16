let questions = [
  {
    numb: 1,
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases, enabling tasks like querying, updating, and managing data.",
    options: [
      "SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases, enabling tasks like querying, updating, and managing data.",
      "SQL is a scripting language used for web development.",
      "SQL is a NoSQL database.",
      "SQL is a markup language like HTML.",
    ],
  },
  {
    numb: 2,
    question:
      "Explain the difference between 'INNER JOIN' and 'OUTER JOIN' in SQL.",
    answer:
      "An 'INNER JOIN' returns only the rows that have matching values in both tables, while an 'OUTER JOIN' returns all rows from one table and the matching rows from the other table. If there is no match, NULL values are returned for columns from the other table.",
    options: [
      "An 'INNER JOIN' returns only the rows that have matching values in both tables, while an 'OUTER JOIN' returns all rows from one table and the matching rows from the other table. If there is no match, NULL values are returned for columns from the other table.",
      "'INNER JOIN' returns all rows, and 'OUTER JOIN' returns only the non-matching rows.",
      "'INNER JOIN' is used for combining more than two tables, while 'OUTER JOIN' is for two tables only.",
      "'INNER JOIN' and 'OUTER JOIN' are identical in SQL.",
    ],
  },
  {
    numb: 3,
    question: "What is the purpose of the 'GROUP BY' clause in SQL?",
    answer:
      "The 'GROUP BY' clause in SQL is used to arrange identical data into groups based on one or more columns, often used with aggregate functions like COUNT, SUM, AVG, etc., to perform operations on each group of data.",
    options: [
      "The 'GROUP BY' clause in SQL is used to arrange identical data into groups based on one or more columns, often used with aggregate functions like COUNT, SUM, AVG, etc., to perform operations on each group of data.",
      "'GROUP BY' is used to sort data in ascending or descending order.",
      "'GROUP BY' is used to join multiple tables in SQL.",
      "'GROUP BY' is used to filter records in SQL.",
    ],
  },
  {
    numb: 4,
    question: "What is a 'primary key' in SQL?",
    answer:
      "A 'primary key' in SQL is a unique identifier for each record in a database table, ensuring that no two records have the same primary key value and that the key field is not null.",
    options: [
      "A 'primary key' in SQL is a unique identifier for each record in a database table, ensuring that no two records have the same primary key value and that the key field is not null.",
      "A 'primary key' is a field that allows duplicate values in a table.",
      "A 'primary key' is used to join two tables.",
      "A 'primary key' is a foreign key in another table.",
    ],
  },
  {
    numb: 5,
    question: "What is normalization in SQL databases?",
    answer:
      "Normalization is a process in SQL databases used to organize data to reduce redundancy and improve data integrity, typically by dividing a database into two or more tables and defining relationships between them.",
    options: [
      "Normalization is a process in SQL databases used to organize data to reduce redundancy and improve data integrity, typically by dividing a database into two or more tables and defining relationships between them.",
      "Normalization is the process of encrypting data in SQL databases.",
      "Normalization is a method to create indexes in SQL databases.",
      "Normalization is used to backup data in SQL databases.",
    ],
  },
];
