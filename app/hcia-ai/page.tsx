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
        "question": "When was the term \"Artificial Intelligence\" first proposed?",
        "options": ["1945", "1956", "1966", "1976"],
        "correctAnswer": "1956"
    },
    {
        "id": 2,
        "question": "Who is known as the \"Father of AI\"?",
        "options": ["Alan Turing", "John McCarthy", "Marvin Minsky", "Arthur Samuel"],
        "correctAnswer": "John McCarthy"
    },
    {
        "id": 3,
        "question": "Which of the following is NOT one of the four key elements of AI according to Huawei?",
        "options": ["Data", "Algorithm", "Human intuition", "Scenario"],
        "correctAnswer": "Human intuition"
    },
    {
        "id": 4,
        "question": "What is the primary goal of Artificial Intelligence?",
        "options": ["To replace all human jobs", "To simulate and extend human intelligence", "To create self-aware machines", "To reduce the need for computing power"],
        "correctAnswer": "To simulate and extend human intelligence"
    },
    {
        "id": 5,
        "question": "Which of the following best describes Machine Learning (ML)?",
        "options": ["A subset of AI focused on rule-based systems", "A method to manually program AI responses", "A core research field of AI where computers learn from data", "A technique to simulate human emotions"],
        "correctAnswer": "A core research field of AI where computers learn from data"
    },
    {
        "id": 6,
        "question": "Deep Learning is primarily associated with which of the following?",
        "options": ["Symbolic reasoning", "Rule-based expert systems", "Artificial Neural Networks", "Genetic algorithms"],
        "correctAnswer": "Artificial Neural Networks"
    },
    {
        "id": 7,
        "question": "Which school of thought in AI emphasizes the use of symbols and rules to represent knowledge?",
        "options": ["Connectionism", "Behaviorism", "Symbolism", "Functionalism"],
        "correctAnswer": "Symbolism"
    },
    {
        "id": 8,
        "question": "Which AI school of thought models the brain using neural networks?",
        "options": ["Symbolism", "Behaviorism", "Connectionism", "Functionalism"],
        "correctAnswer": "Connectionism"
    },
    {
        "id": 9,
        "question": "Which school of thought in AI emphasizes intelligence emerging from interaction with the environment?",
        "options": ["Symbolism", "Behaviorism", "Connectionism", "Functionalism"],
        "correctAnswer": "Behaviorism"
    },
    {
        "id": 10,
        "question": "Which AI technology is primarily used in facial recognition systems?",
        "options": ["Natural Language Processing", "Speech Processing", "Computer Vision", "Reinforcement Learning"],
        "correctAnswer": "Computer Vision"
    },
    {
        "id": 11,
        "question": "What is the main function of Speech Processing in AI?",
        "options": ["Understanding written text", "Recognizing and generating spoken language", "Classifying images", "Detecting anomalies in data"],
        "correctAnswer": "Recognizing and generating spoken language"
    },
    {
        "id": 12,
        "question": "Which AI field focuses on enabling machines to understand and use natural language?",
        "options": ["Computer Vision", "Speech Processing", "Natural Language Processing (NLP)", "Robotics"],
        "correctAnswer": "Natural Language Processing (NLP)"
    },
    {
        "id": 13,
        "question": "Which of the following is a typical application of AI in healthcare?",
        "options": ["Facial recognition for security", "Autonomous vehicles", "Medical image analysis", "Smart city traffic systems"],
        "correctAnswer": "Medical image analysis"
    },
    {
        "id": 14,
        "question": "Which AI application is commonly used in smart homes?",
        "options": ["Voice-controlled appliances", "Autonomous vehicles", "AI in stock trading", "AI in military drones"],
        "correctAnswer": "Voice-controlled appliances"
    },
    {
        "id": 15,
        "question": "What is the name of Huawei's AI computing framework?",
        "options": ["TensorFlow", "MindSpore", "PyTorch", "Keras"],
        "correctAnswer": "MindSpore"
    },
    {
        "id": 16,
        "question": "What is the primary function of Huawei's ModelArts?",
        "options": ["To provide AI chips", "To offer cloud-based AI services", "To enable end-to-end AI model development and deployment", "To simulate AI behavior in robots"],
        "correctAnswer": "To enable end-to-end AI model development and deployment"
    },
    {
        "id": 17,
        "question": "Which Huawei AI chip is known for its high energy efficiency and used in edge devices?",
        "options": ["Ascend 910", "Ascend 310", "Ascend 510", "Ascend 710"],
        "correctAnswer": "Ascend 310"
    },
    {
        "id": 18,
        "question": "What is a common cause of algorithmic bias in AI systems?",
        "options": ["Poorly written code", "Data bias", "High computing costs", "Lack of user feedback"],
        "correctAnswer": "Data bias"
    },
    {
        "id": 19,
        "question": "Which of the following is a major privacy concern related to AI?",
        "options": ["Too much computing power", "Overuse of cloud computing", "Data-driven models collecting personal information", "Lack of AI frameworks"],
        "correctAnswer": "Data-driven models collecting personal information"
    },
    {
        "id": 20,
        "question": "What is Federated Learning used for?",
        "options": ["To centralize all data for training", "To compress AI models for efficiency", "To train models across decentralized data sources while preserving privacy", "To reduce the need for AI frameworks"],
        "correctAnswer": "To train models across decentralized data sources while preserving privacy"
    },
    {
        "id": 21,
        "question": "Which type of AI can truly reason and solve problems and is self-aware?",
        "options": ["Weak AI", "Strong AI", "Narrow AI", "General AI"],
        "correctAnswer": "Strong AI"
    },
    {
        "id": 22,
        "question": "Which type of AI is used in current applications like Siri or Alexa?",
        "options": ["Strong AI", "Weak AI", "General AI", "Autonomous AI"],
        "correctAnswer": "Weak AI"
    },
    {
        "id": 23,
        "question": "What is the primary goal of machine learning?",
        "options": ["To manually create rules for decision-making", "To enable computers to learn from experience", "To write programs that follow fixed instructions", "To reduce the number of datasets used in AI"],
        "correctAnswer": "To enable computers to learn from experience"
    },
    {
        "id": 24,
        "question": "Which type of machine learning uses labeled data for training?",
        "options": ["Unsupervised learning", "Reinforcement learning", "Semi-supervised learning", "Supervised learning"],
        "correctAnswer": "Supervised learning"
    },
    {
        "id": 25,
        "question": "In unsupervised learning, the algorithm is given:",
        "options": ["Labeled data", "Feedback signals", "No labels", "Reward and punishment signals"],
        "correctAnswer": "No labels"
    },
    {
        "id": 26,
        "question": "Which of the following is a common task in unsupervised learning?",
        "options": ["Predicting house prices", "Classifying emails as spam or not", "Grouping similar customers together", "Training a robot to walk"],
        "correctAnswer": "Grouping similar customers together"
    },
    {
        "id": 27,
        "question": "What is the main purpose of gradient descent in machine learning?",
        "options": ["To reduce the number of features", "To find the minimum of the loss function", "To normalize the data", "To split the dataset into training and test sets"],
        "correctAnswer": "To find the minimum of the loss function"
    },
    {
        "id": 28,
        "question": "What is a hyperparameter in machine learning?",
        "options": ["A value learned from the data", "A value that controls the learning process", "A label in the dataset", "A type of feature selection method"],
        "correctAnswer": "A value that controls the learning process"
    },
    {
        "id": 29,
        "question": "What is the purpose of regularization in machine learning?",
        "options": ["To increase model complexity", "To reduce overfitting", "To improve data quality", "To reduce the number of features"],
        "correctAnswer": "To reduce overfitting"
    },
    {
        "id": 30,
        "question": "Which algorithm is used for binary classification and outputs probabilities using the sigmoid function?",
        "options": ["Linear Regression", "Decision Tree", "Logistic Regression", "KNN"],
        "correctAnswer": "Logistic Regression"
    },
    {
        "id": 31,
        "question": "Which of the following is NOT a type of supervised learning algorithm?",
        "options": ["K-means", "Decision Tree", "SVM", "Naive Bayes"],
        "correctAnswer": "K-means"
    },
    {
        "id": 32,
        "question": "Which algorithm is known for building multiple decision trees and aggregating their results?",
        "options": ["GBDT", "Random Forest", "Logistic Regression", "KNN"],
        "correctAnswer": "Random Forest"
    },
    {
        "id": 33,
        "question": "What is the key advantage of deep learning over traditional machine learning?",
        "options": ["Lower hardware requirements", "Ability to automatically extract features", "Simpler model interpretability", "Better performance with small datasets"],
        "correctAnswer": "Ability to automatically extract features"
    },
    {
        "id": 34,
        "question": "What is the primary function of an activation function in a neural network?",
        "options": ["To reduce the number of layers in the network", "To introduce non-linearity into the model", "To normalize input data", "To speed up training by simplifying computation"],
        "correctAnswer": "To introduce non-linearity into the model"
    },
    {
        "id": 35,
        "question": "Which of the following is not a common loss function used in deep learning?",
        "options": ["Mean Squared Error", "Cross-Entropy", "Hinge Loss", "Principal Component Analysis"],
        "correctAnswer": "Principal Component Analysis"
    },
    {
        "id": 36,
        "question": "What is the main difference between Batch Gradient Descent (BGD) and Stochastic Gradient Descent (SGD)?",
        "options": ["BGD uses fewer parameters", "SGD updates weights after each training sample", "BGD converges faster", "SGD uses more memory"],
        "correctAnswer": "SGD updates weights after each training sample"
    },
    {
        "id": 37,
        "question": "Which optimizer introduces a momentum term to accelerate convergence?",
        "options": ["AdaGrad", "RMSProp", "Momentum optimizer", "Adam"],
        "correctAnswer": "Momentum optimizer"
    },
    {
        "id": 38,
        "question": "What is the purpose of the Softmax function in a neural network?",
        "options": ["To normalize weights", "To introduce sparsity in the model", "To convert outputs into probability distributions", "To regularize the model"],
        "correctAnswer": "To convert outputs into probability distributions"
    },
    {
        "id": 39,
        "question": "What is the primary function of a pooling layer in a CNN?",
        "options": ["To increase the spatial dimensions of the input", "To reduce the spatial dimensions of the input", "To apply filters to the input", "To classify the input"],
        "correctAnswer": "To reduce the spatial dimensions of the input"
    },
    {
        "id": 40,
        "question": "Which activation function is most commonly used in hidden layers of deep neural networks?",
        "options": ["Sigmoid", "Tanh", "ReLU", "Softplus"],
        "correctAnswer": "ReLU"
    },
    {
        "id": 41,
        "question": "What is the vanishing gradient problem?",
        "options": ["Gradients become too large and cause instability", "Gradients remain constant across layers", "Gradients shrink exponentially through layers", "Gradients are zero for all layers"],
        "correctAnswer": "Gradients shrink exponentially through layers"
    },
    {
        "id": 42,
        "question": "Which of the following neural networks is best suited for processing sequential data?",
        "options": ["Convolutional Neural Network (CNN)", "Recurrent Neural Network (RNN)", "Feedforward Neural Network", "Radial Basis Function Network"],
        "correctAnswer": "Recurrent Neural Network (RNN)"
    },
    {
        "id": 43,
        "question": "What is the purpose of the dropout technique in neural networks?",
        "options": ["To increase the learning rate", "To reduce the number of epochs", "To randomly remove neurons during training to prevent overfitting", "To normalize the input data"],
        "correctAnswer": "To randomly remove neurons during training to prevent overfitting"
    },
    {
        "id": 44,
        "question": "What is the primary purpose of a deep learning framework?",
        "options": ["To replace traditional machine learning algorithms", "To simplify and accelerate the development of deep learning models", "To perform hardware-level optimization for GPUs", "To provide a database for storing large datasets"],
        "correctAnswer": "To simplify and accelerate the development of deep learning models"
    },
    {
        "id": 45,
        "question": "Which deep learning framework was developed by Facebook?",
        "options": ["TensorFlow", "Keras", "PyTorch", "MXNet"],
        "correctAnswer": "PyTorch"
    },
    {
        "id": 46,
        "question": "Which deep learning framework was developed by Google and is known for its support of distributed computing?",
        "options": ["PyTorch", "TensorFlow", "Caffe", "Theano"],
        "correctAnswer": "TensorFlow"
    },
    {
        "id": 47,
        "question": "What is the fundamental data structure in TensorFlow?",
        "options": ["Arrays", "Vectors", "Tensors", "Scalars"],
        "correctAnswer": "Tensors"
    },
    {
        "id": 48,
        "question": "Which TensorFlow module is primarily used for defining and training neural networks?",
        "options": ["tf.data", "tf.image", "tf.keras", "tf.errors"],
        "correctAnswer": "tf.keras"
    },
    {
        "id": 49,
        "question": "What is the primary objective of the Huawei MindSpore AI development framework?",
        "options": ["To replace all existing AI frameworks", "To provide a unified AI development experience across devices, edge, and cloud", "To specialize only in image recognition tasks", "To focus solely on hardware acceleration"],
        "correctAnswer": "To provide a unified AI development experience across devices, edge, and cloud"
    },
    {
        "id": 50,
        "question": "What is the primary purpose of AI chips?",
        "options": ["To replace CPUs in all computing tasks", "To process massive computing tasks in AI applications", "To enhance the performance of GPUs", "To manage data storage in cloud environments"],
        "correctAnswer": "To process massive computing tasks in AI applications"
    },
    {
        "id": 51,
        "question": "Which AI chip is characterized by reconfigurable hardware that can be programmed after manufacturing?",
        "options": ["CPU", "GPU", "ASIC", "FPGA"],
        "correctAnswer": "FPGA"
    },
    {
        "id": 52,
        "question": "What is the core architecture of the Huawei HiAI platform?",
        "options": ["chip-device-cloud", "chip-cloud-device", "device-cloud-chip", "cloud-device-chip"],
        "correctAnswer": "chip-device-cloud"
    },
    {
        "id": 53,
        "question": "What is the primary objective of HUAWEI CLOUD EI?",
        "options": ["To provide cloud-based entertainment services", "To drive enterprises' intelligent transformation using AI and big data", "To offer cybersecurity solutions for small businesses", "To develop consumer-grade AI applications"],
        "correctAnswer": "To drive enterprises' intelligent transformation using AI and big data"
    },
    {
        "id": 54,
        "question": "What is the primary function of ModelArts?",
        "options": ["A cloud-based gaming platform", "A one-stop AI development platform", "A cybersecurity analytics tool", "A video streaming service"],
        "correctAnswer": "A one-stop AI development platform"
    },
    {
        "id": 55,
        "question": "What is the main use of Huawei HiLens?",
        "options": ["To provide cloud-based office software", "To develop multimodal AI applications with device-cloud synergy", "To offer AI-based cryptocurrency mining", "To host AI training courses"],
        "correctAnswer": "To develop multimodal AI applications with device-cloud synergy"
    },
    {
        "id": 56,
        "question": "Which service is used to automate reimbursement processes using invoice data?",
        "options": ["ModelArts", "OCR (Optical Character Recognition)", "GES", "CBS"],
        "correctAnswer": "OCR (Optical Character Recognition)"
    },
    {
        "id": 57,
        "question": "What is a benefit of using OCR in logistics?",
        "options": ["Increased manual data entry", "Reduced privacy security", "Up to 98% accuracy in waybill recognition", "Slower shipment processing"],
        "correctAnswer": "Up to 98% accuracy in waybill recognition"
    },
    {
        "id": 58,
        "question": "What is the main function of the Intelligent Q&A system in enterprise settings?",
        "options": ["To replace human customer service entirely", "To provide automated, accurate answers based on enterprise knowledge", "To analyze employee performance", "To manage inventory systems"],
        "correctAnswer": "To provide automated, accurate answers based on enterprise knowledge"
    },
    {
        "id": 59,
        "question": "Which of the following is a feature of the Smart Campus solution?",
        "options": ["Facial recognition for access control", "Cloud-based cryptocurrency mining", "Real-time stock market analysis", "Automated tax filing"],
        "correctAnswer": "Facial recognition for access control"
    },
    {
        "id": 60,
        "question": "What is the purpose of intrusion detection in campus surveillance systems?",
        "options": ["To track employee salaries", "To identify unauthorized access to restricted areas", "To monitor internet usage", "To manage student grades"],
        "correctAnswer": "To identify unauthorized access to restricted areas"
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
                            Assessment Level 1
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