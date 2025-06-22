'use client';
import { useState, useEffect } from 'react'; // Import useEffect
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaUser, FaIdCard, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from '@/app/components/ResultPDF'; // Component to generate the PDF
import Logo from '@/public/huawei.png';

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
            "question": "Which of the following is a correct file extension for Python scripts?",
            "options": [".py", ".python", ".pt", ".p"],
            "correctAnswer": ".py"
        },
        {
            "id": 2,
            "question": "What is the output of print(2 ** 3) in Python?",
            "options": ["6", "8", "9", "None of the above"],
            "correctAnswer": "8"
        },
        {
            "id": 3,
            "question": "Which data type is mutable in Python?",
            "options": ["Tuple", "String", "List", "Integer"],
            "correctAnswer": "List"
        },
        {
            "id": 4,
            "question": "How do you create a function in Python?",
            "options": ["def myFunction():", "function myFunction():", "create myFunction():", "define myFunction():"],
            "correctAnswer": "def myFunction():"
        },
        {
            "id": 5,
            "question": "Which keyword is used to handle exceptions in Python?",
            "options": ["try", "catch", "error", "except"],
            "correctAnswer": "try"
        },
        {
            "id": 6,
            "question": "Which of the following is NOT an AI domain?",
            "options": ["Natural Language Processing", "Computer Vision", "Mechanical Engineering", "Reinforcement Learning"],
            "correctAnswer": "Mechanical Engineering"
        },
        {
            "id": 7,
            "question": "What does NLP stand for in AI?",
            "options": ["Neural Language Processing", "Natural Language Processing", "New Language Protocol", "Natural Logic Processing"],
            "correctAnswer": "Natural Language Processing"
        },
        {
            "id": 8,
            "question": "Which AI technique enables machines to interpret visual information from the world?",
            "options": ["Speech Recognition", "Computer Vision", "Robotics", "Data Mining"],
            "correctAnswer": "Computer Vision"
        },
        {
            "id": 9,
            "question": "Which algorithm is commonly used in supervised learning for classification tasks?",
            "options": ["K-Means Clustering", "Decision Trees", "Principal Component Analysis", "Apriori Algorithm"],
            "correctAnswer": "Decision Trees"
        },
        {
            "id": 10,
            "question": "What is Reinforcement Learning based on?",
            "options": ["Feedback in the form of rewards or penalties", "Labeled datasets", "Unlabeled data", "Statistical models only"],
            "correctAnswer": "Feedback in the form of rewards or penalties"
        },
        {
            "id": 11,
            "question": "Which certification path focuses on AI application development using Huawei Cloud?",
            "options": ["HCIA-AI", "HCIP-AI", "HCIE-AI", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "id": 12,
            "question": "Which Huawei certification covers deep learning frameworks like TensorFlow and PyTorch?",
            "options": ["HCIA-AI", "HCIP-AI", "HCIE-AI", "None of the above"],
            "correctAnswer": "HCIP-AI"
        },
        {
            "id": 13,
            "question": "Which Huawei certification is considered expert-level in AI?",
            "options": ["HCIA-AI", "HCIP-AI", "HCIE-AI", "HCCP-AI"],
            "correctAnswer": "HCIE-AI"
        },
        {
            "id": 14,
            "question": "Which service in Huawei Cloud provides AI model training capabilities?",
            "options": ["ModelArts", "ECS", "VPC", "OBS"],
            "correctAnswer": "ModelArts"
        },
        {
            "id": 15,
            "question": "Which Huawei Cloud service allows deployment of AI applications at the edge?",
            "options": ["Edge Computing Service (ECS)", "IoT Edge", "ModelArts", "Cloud Eye"],
            "correctAnswer": "IoT Edge"
        },
        {
            "id": 16,
            "question": "What is the full form of OBS in Huawei Cloud?",
            "options": ["Object Backup Service", "Object Browser Storage", "Object-Based System", "Object Storage Service"],
            "correctAnswer": "Object Storage Service"
        },
        {
            "id": 17,
            "question": "Which Python library is primarily used for data manipulation and analysis?",
            "options": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
            "correctAnswer": "Pandas"
        },
        {
            "id": 18,
            "question": "Which tool is best suited for data visualization in Python?",
            "options": ["TensorFlow", "Seaborn", "Keras", "SciPy"],
            "correctAnswer": "Seaborn"
        },
        {
            "id": 19,
            "question": "Which statistical method is used to find relationships between variables in a dataset?",
            "options": ["Clustering", "Regression", "Classification", "Dimensionality Reduction"],
            "correctAnswer": "Regression"
        },
        {
            "id": 20,
            "question": "Which technique helps in reducing the number of input variables in a model?",
            "options": ["Cross-validation", "Regularization", "Feature Selection", "Hyperparameter Tuning"],
            "correctAnswer": "Feature Selection"
        },
        {
            "id": 21,
            "question": "What is Anaconda primarily used for?",
            "options": ["Web Development", "Game Development", "Data Science and Machine Learning", "Network Security"],
            "correctAnswer": "Data Science and Machine Learning"
        },
        {
            "id": 22,
            "question": "Which command creates a new environment in Anaconda?",
            "options": ["conda create --env myenv", "conda create -n myenv", "conda add env myenv", "conda make env myenv"],
            "correctAnswer": "conda create -n myenv"
        },
        {
            "id": 23,
            "question": "Jupyter Notebook is based on which concept?",
            "options": ["Notebook Interface", "IDE Interface", "Command Line Interface", "Graphical User Interface"],
            "correctAnswer": "Notebook Interface"
        },
        {
            "id": 24,
            "question": "Which language kernel is not supported by default in Jupyter Notebook?",
            "options": ["Python", "R", "C++", "Julia"],
            "correctAnswer": "C++"
        },
        {
            "id": 25,
            "question": "Which of the following is a Large Language Model (LLM)?",
            "options": ["BERT", "GPT-3", "ResNet", "Both A and B"],
            "correctAnswer": "Both A and B"
        },
        {
            "id": 26,
            "question": "What is the primary goal of transfer learning in AI?",
            "options": ["To train models faster", "To apply knowledge from one task to another related task", "To reduce data size", "To increase model accuracy"],
            "correctAnswer": "To apply knowledge from one task to another related task"
        },
        {
            "id": 27,
            "question": "Which of the following is a pre-trained model for NLP tasks?",
            "options": ["YOLO", "BERT", "AlexNet", "Inception"],
            "correctAnswer": "BERT"
        },
        {
            "id": 28,
            "question": "What is overfitting in machine learning?",
            "options": ["When a model performs well on training data but poorly on test data", "When a model performs well on both training and test data", "When a model underperforms on training data", "None of the above"],
            "correctAnswer": "When a model performs well on training data but poorly on test data"
        },
        {
            "id": 29,
            "question": "Which framework is NOT typically used for building LLMs?",
            "options": ["TensorFlow", "PyTorch", "Keras", "MySQL"],
            "correctAnswer": "MySQL"
        },
        {
            "id": 30,
            "question": "Which job role involves designing and implementing ML models?",
            "options": ["AI Product Manager", "Machine Learning Engineer", "Data Analyst", "UX Designer"],
            "correctAnswer": "Machine Learning Engineer"
        },
        {
            "id": 31,
            "question": "Which skill is most important for a career in AI?",
            "options": ["Graphic Design", "Mathematics and Statistics", "Public Speaking", "Cooking Skills"],
            "correctAnswer": "Mathematics and Statistics"
        },
        {
            "id": 32,
            "question": "Which of the following is a key responsibility of a Data Scientist?",
            "options": ["Building web applications", "Analyzing data and deriving insights", "Managing databases", "Designing logos"],
            "correctAnswer": "Analyzing data and deriving insights"
        },
        {
            "id": 33,
            "question": "Which component is part of the AI technical stack?",
            "options": ["Hardware (GPUs)", "Frameworks (TensorFlow)", "Algorithms (CNN)", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "id": 34,
            "question": "Which hardware accelerates AI model training?",
            "options": ["CPU", "GPU", "RAM", "ROM"],
            "correctAnswer": "GPU"
        },
        {
            "id": 35,
            "question": "Which open-source framework is widely used for deep learning?",
            "options": ["Docker", "Kubernetes", "TensorFlow", "Apache Spark"],
            "correctAnswer": "TensorFlow"
        },
        {
            "id": 36,
            "question": "Which tool is used for containerizing AI applications?",
            "options": ["TensorBoard", "Keras", "Docker", "Jupyter"],
            "correctAnswer": "Docker"
        },
        {
            "id": 37,
            "question": "What is the purpose of a validation set in model training?",
            "options": ["To train the model", "To evaluate the model during training", "To test final performance", "To visualize data"],
            "correctAnswer": "To evaluate the model during training"
        },
        {
            "id": 38,
            "question": "Which metric is commonly used for evaluating classification models?",
            "options": ["Mean Squared Error", "Accuracy", "R-squared", "Adjusted R-squared"],
            "correctAnswer": "Accuracy"
        },
        {
            "id": 39,
            "question": "Which technique prevents overfitting in neural networks?",
            "options": ["Batch Normalization", "Dropout", "Early Stopping", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "id": 40,
            "question": "Which optimizer is commonly used in training deep learning models?",
            "options": ["Linear Regression", "Logistic Regression", "Adam", "KNN"],
            "correctAnswer": "Adam"
        },
        {
            "id": 41,
            "question": "Which industry is expected to be transformed the most by AI in the future?",
            "options": ["Healthcare", "Agriculture", "Education", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "id": 42,
            "question": "Which technology will likely work closely with AI in future applications?",
            "options": ["Blockchain", "Quantum Computing", "Augmented Reality", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "id": 43,
            "question": "Which AI trend is expected to dominate in the next decade?",
            "options": ["Explainable AI", "AutoML", "Edge AI", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "id": 44,
            "question": "What is federated learning used for?",
            "options": ["Centralized data collection", "Training models across decentralized devices", "Improving graphics rendering", "Reducing cloud costs"],
            "correctAnswer": "Training models across decentralized devices"
        },
        {
            "id": 45,
            "question": "What is prompt engineering related to?",
            "options": ["Image Classification", "Working with LLMs", "Mobile App Development", "Cybersecurity"],
            "correctAnswer": "Working with LLMs"
        },
        {
            "id": 46,
            "question": "Which AI field aims to understand how models make decisions?",
            "options": ["Deep Learning", "Explainable AI", "Computer Vision", "Natural Language Generation"],
            "correctAnswer": "Explainable AI"
        },
        {
            "id": 47,
            "question": "Which architecture is the basis for many modern LLMs like GPT?",
            "options": ["Recurrent Neural Networks", "Transformers", "Convolutional Neural Networks", "Autoencoders"],
            "correctAnswer": "Transformers"
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
                            HCIA-AI Certification
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-roboto">
                            Assessment for Python and AI Fundamentals
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
                                        subjectName="Python and AI Fundamentals" // Add your subject name here
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