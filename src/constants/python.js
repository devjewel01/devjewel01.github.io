export default [
  {
    id: "day1",
    title: "Day 1",
    img: "https://i.ibb.co/0jZ3qYH/python.png",
    desc: "Python is a general-purpose programming language that is becoming ever more popular for data science.",
    content: [
      {
        type: 'heading',
        text: 'Printing in python'
      },
      {
        type: "code",
        language: "python",
        text: `print("Hello World")`,
      },
      {
        type: "text",
        text: "Output:"
      },
      {
        type: "code-output",
        text: `Hello World`,
      },
      {
        type: 'para-text',
        text: 'print হল পাইথনের ফাংশন যেটা দিয়ে আমরা কোনো কিছু Display তে দেখতে পারবো । print ফাংশন এর ভিতরে যা কোটেশন এর মধ্যে যা লিখবো তাই আমাকে কোড রান করার পর দেখাবে '
      },
      {
        type: "code",
        language: "python",
        text: `print("Jewel Nath")\nprint("Department of ICT")\nprint("Comilla University")`,
      },
      {
        type: "code-output",
        text: `Jewel Nath\nDepartment of ICT\nComilla University`,
      },
      {
        type: 'heading',
        text: 'String'
      },
      {
        type: 'para-text',
        text: '→  পাইথনে এক বা একাধিক বর্ন, অক্ষর, প্রতীককে কোটেশন এর মধ্যে লিখা হলে তাকে বলে String। আমরা print function এর মধ্যে string ব্যাবহার করে থাকি । string এর শুরু ও শেষে কোটেশন বসাতে হবে। string সম্পর্কে আমরা আর জানবে Data Types পড়ার সময় ।'
      },
      {
        type: 'correct-text',
        text: 'Correct String: '
      },
      {
        type: "list",
        elements: [
          '“hello”, ‘hello’', '123number', '“ক#@^&*”', '"  "'
        ]
      },
      { 
        type: 'wrong-text',
        text: 'Wrong String: '
      },
      {
        type: "list",
        elements : ['"hello', 'hello"']
      }
    ]
  },
  {
    id: "day2",
    title: "Day 2",
    img: "https://i.ibb.co/0jZ3qYH/python.png",
    desc: "Python is a general-purpose programming language that is becoming ever more popular for data science.",
    content : [
      {
        type: 'heading',
        text: 'Variable'
      },
    ]
  },
  {
    id: "day3",
    title: "Day 3",
    img: "https://i.ibb.co/0jZ3qYH/python.png",
    desc: "Python is a general-purpose programming language that is becoming ever more popular for data science."
  },
  {
    id: "day4",
    title: "Day 4",
    img: "https://i.ibb.co/0jZ3qYH/python.png",
    desc: "Python is a general-purpose programming language that is becoming ever more popular for data science."
  },
  {
    id: "day5",
    title: "Day 5",
    img: "https://i.ibb.co/0jZ3qYH/python.png",
    desc: "Python is a general-purpose programming language that is becoming ever more popular for data science."
  },
]