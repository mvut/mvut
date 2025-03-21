'use client';
import { useState, useEffect } from 'react'; // Import useEffect
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaUser, FaIdCard, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from '@/app/components/ResultPDF'; // Component to generate the PDF
import Logo from '@/public/mvut_flame.png';

const OnlineTest = () => {
    const [userName, setUserName] = useState('');
    const [registrationId, setRegistrationId] = useState('');
    const [testStarted, setTestStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [showResult, setShowResult] = useState(false);

    // Timer related states
    const totalTimeInSeconds = 60 * 120; // Example: 30 minutes (in seconds)
    const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    // Dummy questions with correct answers (unchanged)
    const questions = [
        {
            "id": 1,
            "question": "What does HTML stand for?",
            "options": [
                "Hyper Text Markup Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language",
                "Hyper Text Machine Language"
            ],
            "correctAnswer": "Hyper Text Markup Language"
        },
        {
            "id": 2,
            "question": "Which HTML tag is used to define an unordered list?",
            "options": [
                "<ul>",
                "<ol>",
                "<li>",
                "<dl>"
            ],
            "correctAnswer": "<ul>"
        },
        {
            "id": 3,
            "question": "What is the correct HTML element for inserting a line break?",
            "options": [
                "<br>",
                "<lb>",
                "<break>",
                "<newline>"
            ],
            "correctAnswer": "<br>"
        },
        {
            "id": 4,
            "question": "Which attribute is used to specify an alternate text for an image?",
            "options": [
                "src",
                "alt",
                "title",
                "href"
            ],
            "correctAnswer": "alt"
        },
        {
            "id": 5,
            "question": "What is the purpose of the <head> section in an HTML document?",
            "options": [
                "To define the main content of the document",
                "To contain metadata about the document",
                "To create hyperlinks",
                "To style the document"
            ],
            "correctAnswer": "To contain metadata about the document"
        },
        {
            "id": 6,
            "question": "Which HTML tag is used to define a hyperlink?",
            "options": [
                "<a>",
                "<link>",
                "<href>",
                "<hyperlink>"
            ],
            "correctAnswer": "<a>"
        },
        {
            "id": 7,
            "question": "What is the correct syntax for creating a comment in HTML?",
            "options": [
                "// This is a comment",
                "/* This is a comment */",
                "<!-- This is a comment -->",
                "# This is a comment"
            ],
            "correctAnswer": "<!-- This is a comment -->"
        },
        {
            "id": 8,
            "question": "Which HTML element is used to define the largest heading?",
            "options": [
                "<h6>",
                "<heading>",
                "<h1>",
                "<head>"
            ],
            "correctAnswer": "<h1>"
        },
        {
            "id": 9,
            "question": "True or False: The <div> element is a block-level element.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 10,
            "question": "Which HTML attribute is used to open a link in a new tab?",
            "options": [
                "target='_blank'",
                "href='_blank'",
                "open='_new'",
                "link='_new'"
            ],
            "correctAnswer": "target='_blank'"
        },
        {
            "id": 11,
            "question": "What is the correct HTML for adding a background color to a page?",
            "options": [
                "<body style='background-color: yellow;'>",
                "<background>yellow</background>",
                "<bgcolor>yellow</bgcolor>",
                "<style>background-color: yellow;</style>"
            ],
            "correctAnswer": "<body style='background-color: yellow;'>"
        },
        {
            "id": 12,
            "question": "Which HTML tag is used to define a table row?",
            "options": [
                "<tr>",
                "<td>",
                "<th>",
                "<table>"
            ],
            "correctAnswer": "<tr>"
        },
        {
            "id": 13,
            "question": "True or False: HTML is a programming language.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "False"
        },
        {
            "id": 14,
            "question": "What is the correct HTML for creating a checkbox?",
            "options": [
                "<input type='checkbox'>",
                "<input type='check'>",
                "<checkbox>",
                "<input type='box'>"
            ],
            "correctAnswer": "<input type='checkbox'>"
        },
        {
            "id": 15,
            "question": "Which HTML element is used to embed JavaScript into a webpage?",
            "options": [
                "<js>",
                "<script>",
                "<javascript>",
                "<code>"
            ],
            "correctAnswer": "<script>"
        },
        {
            "id": 16,
            "question": "What is the purpose of the DOCTYPE declaration in HTML?",
            "options": [
                "To define the document type and version of HTML",
                "To declare variables",
                "To create a new section",
                "To style the document"
            ],
            "correctAnswer": "To define the document type and version of HTML"
        },
        {
            "id": 17,
            "question": "True or False: The <footer> element is used to define the footer of a webpage.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 18,
            "question": "Which HTML tag is used to define an ordered list?",
            "options": [
                "<ul>",
                "<ol>",
                "<li>",
                "<dl>"
            ],
            "correctAnswer": "<ol>"
        },
        {
            "id": 19,
            "question": "What is the correct HTML for creating a button?",
            "options": [
                "<button>",
                "<input type='button'>",
                "<btn>",
                "Both A and B"
            ],
            "correctAnswer": "Both A and B"
        },
        {
            "id": 20,
            "question": "True or False: The <meta> tag is used to define metadata about an HTML document.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 21,
            "question": "Which HTML tag is used to define a table header cell?",
            "options": [
                "<td>",
                "<th>",
                "<tr>",
                "<thead>"
            ],
            "correctAnswer": "<th>"
        },
        {
            "id": 22,
            "question": "What is the default alignment of text inside a <p> element?",
            "options": [
                "Left-aligned",
                "Right-aligned",
                "Center-aligned",
                "Justified"
            ],
            "correctAnswer": "Left-aligned"
        },
        {
            "id": 23,
            "question": "True or False: The <iframe> tag is used to embed another webpage within a webpage.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 24,
            "question": "Which HTML attribute is used to make a text input field read-only?",
            "options": [
                "readonly",
                "disabled",
                "locked",
                "static"
            ],
            "correctAnswer": "readonly"
        },
        {
            "id": 25,
            "question": "What is the correct HTML for creating a dropdown list?",
            "options": [
                "<select>",
                "<dropdown>",
                "<list>",
                "<option>"
            ],
            "correctAnswer": "<select>"
        },
        {
            "id": 26,
            "question": "True or False: The <nav> element is used to define navigation links.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 27,
            "question": "Which HTML tag is used to define emphasized text?",
            "options": [
                "<em>",
                "<i>",
                "<strong>",
                "<b>"
            ],
            "correctAnswer": "<em>"
        },
        {
            "id": 28,
            "question": "What is the purpose of the <form> element in HTML?",
            "options": [
                "To collect user input",
                "To display images",
                "To create tables",
                "To embed videos"
            ],
            "correctAnswer": "To collect user input"
        },
        {
            "id": 29,
            "question": "True or False: The <section> element is used to group related content together.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 30,
            "question": "Which HTML tag is used to define a paragraph?",
            "options": [
                "<p>",
                "<para>",
                "<text>",
                "<paragraph>"
            ],
            "correctAnswer": "<p>"
        },
        {
            "id": 31,
            "question": "What is the correct HTML for creating a radio button?",
            "options": [
                "<input type='radio'>",
                "<input type='button'>",
                "<input type='checkbox'>",
                "<input type='option'>"
            ],
            "correctAnswer": "<input type='radio'>"
        },
        {
            "id": 32,
            "question": "True or False: The <article> element is used to define independent, self-contained content.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 33,
            "question": "Which HTML tag is used to define a caption for a table?",
            "options": [
                "<caption>",
                "<title>",
                "<header>",
                "<label>"
            ],
            "correctAnswer": "<caption>"
        },
        {
            "id": 34,
            "question": "What is the correct HTML for adding an image?",
            "options": [
                "<img src='image.jpg'>",
                "<image src='image.jpg'>",
                "<img href='image.jpg'>",
                "<picture src='image.jpg'>"
            ],
            "correctAnswer": "<img src='image.jpg'>"
        },
        {
            "id": 35,
            "question": "True or False: The <aside> element is used to define content aside from the main content.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 36,
            "question": "Which HTML tag is used to define a table data cell?",
            "options": [
                "<td>",
                "<th>",
                "<tr>",
                "<table>"
            ],
            "correctAnswer": "<td>"
        },
        {
            "id": 37,
            "question": "What is the purpose of the <label> element in HTML?",
            "options": [
                "To define a label for an input element",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define a label for an input element"
        },
        {
            "id": 38,
            "question": "True or False: The <header> element is used to define the header of a webpage.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 39,
            "question": "Which HTML tag is used to define a horizontal rule?",
            "options": [
                "<hr>",
                "<rule>",
                "<line>",
                "<horizontal>"
            ],
            "correctAnswer": "<hr>"
        },
        {
            "id": 40,
            "question": "What is the correct HTML for creating a text input field?",
            "options": [
                "<input type='text'>",
                "<input type='textbox'>",
                "<input type='string'>",
                "<input type='char'>"
            ],
            "correctAnswer": "<input type='text'>"
        },
        {
            "id": 41,
            "question": "True or False: The <main> element is used to define the main content of a webpage.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 42,
            "question": "Which HTML tag is used to define a table body?",
            "options": [
                "<tbody>",
                "<thead>",
                "<tfoot>",
                "<table>"
            ],
            "correctAnswer": "<tbody>"
        },
        {
            "id": 43,
            "question": "What is the purpose of the <fieldset> element in HTML?",
            "options": [
                "To group related elements in a form",
                "To define a hyperlink",
                "To create a table",
                "To embed videos"
            ],
            "correctAnswer": "To group related elements in a form"
        },
        {
            "id": 44,
            "question": "True or False: The <legend> element is used to define a caption for a <fieldset>.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 45,
            "question": "Which HTML tag is used to define a table footer?",
            "options": [
                "<tfoot>",
                "<thead>",
                "<tbody>",
                "<table>"
            ],
            "correctAnswer": "<tfoot>"
        },
        {
            "id": 46,
            "question": "What is the correct HTML for creating a password input field?",
            "options": [
                "<input type='password'>",
                "<input type='secret'>",
                "<input type='hidden'>",
                "<input type='encrypted'>"
            ],
            "correctAnswer": "<input type='password'>"
        },
        {
            "id": 47,
            "question": "True or False: The <address> element is used to define contact information for the author/owner of a document.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 48,
            "question": "Which HTML tag is used to define a table header?",
            "options": [
                "<thead>",
                "<tfoot>",
                "<tbody>",
                "<table>"
            ],
            "correctAnswer": "<thead>"
        },
        {
            "id": 49,
            "question": "What is the purpose of the <abbr> element in HTML?",
            "options": [
                "To define an abbreviation or acronym",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define an abbreviation or acronym"
        },
        {
            "id": 50,
            "question": "True or False: The <cite> element is used to define the title of a creative work.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 51,
            "question": "Which HTML tag is used to define a table column?",
            "options": [
                "<col>",
                "<td>",
                "<th>",
                "<tr>"
            ],
            "correctAnswer": "<col>"
        },
        {
            "id": 52,
            "question": "What is the correct HTML for creating a textarea?",
            "options": [
                "<textarea>",
                "<input type='textarea'>",
                "<text>",
                "<area>"
            ],
            "correctAnswer": "<textarea>"
        },
        {
            "id": 53,
            "question": "True or False: The <time> element is used to define a specific time or date.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 54,
            "question": "Which HTML tag is used to define a table column group?",
            "options": [
                "<colgroup>",
                "<thead>",
                "<tfoot>",
                "<tbody>"
            ],
            "correctAnswer": "<colgroup>"
        },
        {
            "id": 55,
            "question": "What is the purpose of the <progress> element in HTML?",
            "options": [
                "To represent the progress of a task",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To represent the progress of a task"
        },
        {
            "id": 56,
            "question": "True or False: The <meter> element is used to measure data within a given range.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 57,
            "question": "Which HTML tag is used to define a description list?",
            "options": [
                "<dl>",
                "<ul>",
                "<ol>",
                "<li>"
            ],
            "correctAnswer": "<dl>"
        },
        {
            "id": 58,
            "question": "What is the purpose of the <datalist> element in HTML?",
            "options": [
                "To provide a list of predefined options for an input element",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To provide a list of predefined options for an input element"
        },
        {
            "id": 59,
            "question": "True or False: The <output> element is used to represent the result of a calculation.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 60,
            "question": "Which HTML tag is used to define a description term?",
            "options": [
                "<dt>",
                "<dd>",
                "<dl>",
                "<li>"
            ],
            "correctAnswer": "<dt>"
        },
        {
            "id": 61,
            "question": "What is the purpose of the <details> element in HTML?",
            "options": [
                "To create a collapsible widget",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To create a collapsible widget"
        },
        {
            "id": 62,
            "question": "True or False: The <summary> element is used to define a summary for a <details> element.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 63,
            "question": "Which HTML tag is used to define a description definition?",
            "options": [
                "<dd>",
                "<dt>",
                "<dl>",
                "<li>"
            ],
            "correctAnswer": "<dd>"
        },
        {
            "id": 64,
            "question": "What is the purpose of the <dialog> element in HTML?",
            "options": [
                "To create a dialog box or popup",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To create a dialog box or popup"
        },
        {
            "id": 65,
            "question": "True or False: The <template> element is used to hold client-side content that is not displayed when the page loads.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 66,
            "question": "Which HTML tag is used to define a figure caption?",
            "options": [
                "<figcaption>",
                "<figure>",
                "<caption>",
                "<label>"
            ],
            "correctAnswer": "<figcaption>"
        },
        {
            "id": 67,
            "question": "What is the purpose of the <figure> element in HTML?",
            "options": [
                "To represent a figure or illustration",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To represent a figure or illustration"
        },
        {
            "id": 68,
            "question": "True or False: The <mark> element is used to highlight parts of text.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 69,
            "question": "Which HTML tag is used to define a ruby annotation?",
            "options": [
                "<ruby>",
                "<rt>",
                "<rp>",
                "<rb>"
            ],
            "correctAnswer": "<ruby>"
        },
        {
            "id": 70,
            "question": "What is the purpose of the <rt> element in HTML?",
            "options": [
                "To define an explanation or pronunciation of characters in a ruby annotation",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define an explanation or pronunciation of characters in a ruby annotation"
        },
        {
            "id": 71,
            "question": "True or False: The <rp> element is used to provide fallback content for browsers that do not support ruby annotations.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 72,
            "question": "Which HTML tag is used to define a sample output from a computer program?",
            "options": [
                "<samp>",
                "<code>",
                "<pre>",
                "<kbd>"
            ],
            "correctAnswer": "<samp>"
        },
        {
            "id": 73,
            "question": "What is the purpose of the <var> element in HTML?",
            "options": [
                "To define a variable in a mathematical expression",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define a variable in a mathematical expression"
        },
        {
            "id": 74,
            "question": "True or False: The <sub> element is used to define subscript text.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 75,
            "question": "Which HTML tag is used to define superscript text?",
            "options": [
                "<sup>",
                "<sub>",
                "<super>",
                "<up>"
            ],
            "correctAnswer": "<sup>"
        },
        {
            "id": 76,
            "question": "What is the purpose of the <wbr> element in HTML?",
            "options": [
                "To define a word break opportunity",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define a word break opportunity"
        },
        {
            "id": 77,
            "question": "True or False: The <ins> element is used to define inserted text.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 78,
            "question": "Which HTML tag is used to define deleted text?",
            "options": [
                "<del>",
                "<ins>",
                "<strike>",
                "<remove>"
            ],
            "correctAnswer": "<del>"
        },
        {
            "id": 79,
            "question": "What is the purpose of the <small> element in HTML?",
            "options": [
                "To define small text",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define small text"
        },
        {
            "id": 80,
            "question": "True or False: The <bdi> element is used to isolate text that might be formatted differently from the surrounding text.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 81,
            "question": "Which HTML tag is used to define bidirectional override?",
            "options": [
                "<bdo>",
                "<bdi>",
                "<dir>",
                "<rtl>"
            ],
            "correctAnswer": "<bdo>"
        },
        {
            "id": 82,
            "question": "What is the purpose of the <q> element in HTML?",
            "options": [
                "To define a short quotation",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define a short quotation"
        },
        {
            "id": 83,
            "question": "True or False: The <blockquote> element is used to define a long quotation.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 84,
            "question": "Which HTML tag is used to define a keyboard input?",
            "options": [
                "<kbd>",
                "<key>",
                "<input>",
                "<keyboard>"
            ],
            "correctAnswer": "<kbd>"
        },
        {
            "id": 85,
            "question": "What is the purpose of the <code> element in HTML?",
            "options": [
                "To define a piece of computer code",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define a piece of computer code"
        },
        {
            "id": 86,
            "question": "True or False: The <pre> element is used to preserve whitespace and line breaks.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 87,
            "question": "Which HTML tag is used to define a subscript?",
            "options": [
                "<sub>",
                "<sup>",
                "<down>",
                "<below>"
            ],
            "correctAnswer": "<sub>"
        },
        {
            "id": 88,
            "question": "What is the purpose of the <dfn> element in HTML?",
            "options": [
                "To define a term",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define a term"
        },
        {
            "id": 89,
            "question": "True or False: The <s> element is used to define strikethrough text.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 90,
            "question": "Which HTML tag is used to define bold text?",
            "options": [
                "<b>",
                "<strong>",
                "<bold>",
                "<em>"
            ],
            "correctAnswer": "<b>"
        },
        {
            "id": 91,
            "question": "What is the purpose of the <i> element in HTML?",
            "options": [
                "To define italicized text",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define italicized text"
        },
        {
            "id": 92,
            "question": "True or False: The <u> element is used to define underlined text.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 93,
            "question": "Which HTML tag is used to define teletype text?",
            "options": [
                "<tt>",
                "<teletype>",
                "<type>",
                "<tty>"
            ],
            "correctAnswer": "<tt>"
        },
        {
            "id": 94,
            "question": "What is the purpose of the <big> element in HTML?",
            "options": [
                "To define bigger text",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define bigger text"
        },
        {
            "id": 95,
            "question": "True or False: The <center> element is deprecated in HTML5.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 96,
            "question": "Which HTML tag is used to define a base URL for all relative URLs in a document?",
            "options": [
                "<base>",
                "<url>",
                "<link>",
                "<href>"
            ],
            "correctAnswer": "<base>"
        },
        {
            "id": 97,
            "question": "What is the purpose of the <link> element in HTML?",
            "options": [
                "To link external resources like stylesheets",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To link external resources like stylesheets"
        },
        {
            "id": 98,
            "question": "True or False: The <style> element is used to define internal CSS styles.",
            "options": [
                "True",
                "False"
            ],
            "correctAnswer": "True"
        },
        {
            "id": 99,
            "question": "Which HTML tag is used to define metadata about an HTML document?",
            "options": [
                "<meta>",
                "<head>",
                "<title>",
                "<data>"
            ],
            "correctAnswer": "<meta>"
        },
        {
            "id": 100,
            "question": "What is the purpose of the <noscript> element in HTML?",
            "options": [
                "To define alternative content for users who have disabled scripts",
                "To create a hyperlink",
                "To style text",
                "To embed videos"
            ],
            "correctAnswer": "To define alternative content for users who have disabled scripts"
        }
    ]

    // Handle answer selection (unchanged)
    const handleAnswer = (option: string) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    };

    // Handle navigation functions (unchanged)
    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleFirst = () => {
        setCurrentQuestion(0);
    };

    const handleLast = () => {
        setCurrentQuestion(questions.length - 1);
    };

    const handleStartTest = () => {
        if (userName && registrationId) {
            setTestStarted(true);
        } else {
            alert('Please enter your name and registration ID.');
        }
    };

    const handleSubmitTest = () => {
        setShowResult(true);
    };

    const calculateResult = () => {
        let correctCount = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                correctCount++;
            }
        });
        return {
            totalQuestions: questions.length,
            correctAnswers: correctCount,
            percentage: ((correctCount / questions.length) * 100).toFixed(2),
        };
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const result = calculateResult();

    // Timer logic
    useEffect(() => {
        if (testStarted && !showResult) {
            const interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime === 0) {
                        clearInterval(interval); // Stop the timer
                        handleSubmitTest(); // Automatically submit the test
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [testStarted, showResult]);

    // Format time left into MM:SS
    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-teal-900 to-green-900 text-white py-8 px-4 sm:px-6 lg:px-8"
            ref={ref}
        >
            <motion.div
                className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-4 sm:p-6 lg:p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {!testStarted ? (
                    // Pre-Test Screen with MVIT Logo and Examination Title
                    <div className="space-y-6 text-center">
                        <div className="flex justify-center">
                            <Image
                                src={Logo} // Replace with your MVIT logo path
                                alt="MVIT Logo"
                                width={100}
                                height={100}
                                className="rounded-lg w-24 h-24 sm:w-32 sm:h-32"
                            />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-lora">
                            MVC-201 HTML Fundamentals
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-roboto">
                            Quality Assurance Test (QAT) Conducted by MVIT
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center bg-white/10 rounded-lg p-2 sm:p-3">
                                <FaUser className="text-teal-400 mr-2 sm:mr-3" />
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent outline-none text-sm sm:text-base font-roboto"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center bg-white/10 rounded-lg p-2 sm:p-3">
                                <FaIdCard className="text-teal-400 mr-2 sm:mr-3" />
                                <input
                                    type="text"
                                    placeholder="Enter your registration ID"
                                    className="w-full bg-transparent outline-none text-sm sm:text-base font-roboto"
                                    value={registrationId}
                                    onChange={(e) => setRegistrationId(e.target.value)}
                                />
                            </div>
                        </div>
                        <button
                            className="w-full flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                            onClick={handleStartTest}
                        >
                            Start Test <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                ) : showResult ? (
                    // Result Display
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-lora text-center mb-6">
                            Test Result
                        </h2>
                        <div className="text-center">
                            <p className="text-lg sm:text-xl lg:text-2xl font-roboto">Name: {userName}</p>
                            <p className="text-lg sm:text-xl lg:text-2xl font-roboto">Registration ID: {registrationId}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-roboto">
                                Correct Answers: {result.correctAnswers} / {result.totalQuestions}
                            </p>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-roboto">
                                Percentage: {result.percentage}%
                            </p>
                        </div>
                        <div className="flex justify-center mt-6">
                            <PDFDownloadLink
                                document={
                                    <ResultPDF
                                        userName={userName}
                                        registrationId={registrationId}
                                        questions={questions}
                                        answers={answers}
                                        correctAnswers={result.correctAnswers}
                                        totalQuestions={result.totalQuestions}
                                        percentage={result.percentage}
                                        subjectName="MVC-201 HTML Fundamentals" // Add your subject name here
                                    />
                                }
                                fileName="qat_result_mvc201.pdf"
                                className="flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                            >
                                Download Result PDF
                            </PDFDownloadLink>
                        </div>
                    </div>
                ) : (
                    // Test Interface
                    <>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mb-4 sm:mb-6">
                            <div
                                className="bg-teal-400 h-2 sm:h-2.5 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        {/* Timer Display */}
                        <div className="flex justify-end mb-4 sm:mb-6">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold font-roboto text-teal-400">
                                Time Left: {formatTime(timeLeft)}
                            </p>
                        </div>

                        {/* Question */}
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-lora mb-4 sm:mb-6">
                            {questions[currentQuestion].question}
                        </h2>
                        {/* Options */}
                        <div className="space-y-3 sm:space-y-4">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-roboto ${
                                        answers[currentQuestion] === option
                                            ? 'bg-teal-500 text-white'
                                            : 'bg-white/10 hover:bg-white/20'
                                    }`}
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-6 sm:mt-8">
                            <button
                                className="flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                                onClick={handleFirst}
                                disabled={currentQuestion === 0}
                            >
                                <FaStepBackward className="mr-2" /> First
                            </button>
                            <button
                                className="flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                                onClick={handlePrev}
                                disabled={currentQuestion === 0}
                            >
                                <FaArrowLeft className="mr-2" /> Previous
                            </button>
                            {currentQuestion === questions.length - 1 ? (
                                <button
                                    className="flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                                    onClick={handleSubmitTest}
                                >
                                    Submit <FaCheckCircle className="ml-2" />
                                </button>
                            ) : (
                                <button
                                    className="flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                                    onClick={handleNext}
                                >
                                    Next <FaArrowRight className="ml-2" />
                                </button>
                            )}
                            <button
                                className="flex items-center justify-center px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all text-sm sm:text-base font-roboto"
                                onClick={handleLast}
                                disabled={currentQuestion === questions.length - 1}
                            >
                                Last <FaStepForward className="ml-2" />
                            </button>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default OnlineTest;