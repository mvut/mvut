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
            "question": "Which of the following best defines the primary objective of Artificial Intelligence according to the document?",
            "options": [
                "To replace all human decision-making processes",
                "To simulate and extend human intelligence",
                "To create fully autonomous robots",
                "To maximize computational speed"
            ],
            "correctAnswer": "To simulate and extend human intelligence",
            "domain": "AI Fundamentals",
            "level": "hard"
        },
        {
            "id": 2,
            "question": "Huawei’s full-stack, all-scenario AI strategy includes all of the following EXCEPT:",
            "options": [
                "Ascend AI chips",
                "MindSpore framework",
                "ModelArts platform",
                "Android-based device integration"
            ],
            "correctAnswer": "Android-based device integration",
            "domain": "Huawei AI Strategy",
            "level": "hard"
        },
        {
            "id": 3,
            "question": "What is the key reason for algorithmic bias in AI systems as highlighted in the document?",
            "options": [
                "Insufficient computing power",
                "Poorly designed neural networks",
                "Data bias in training datasets",
                "Inadequate model interpretability"
            ],
            "correctAnswer": "Data bias in training datasets",
            "domain": "AI Ethics",
            "level": "hard"
        },
        {
            "id": 4,
            "question": "Which of the following is NOT one of the four key elements of AI according to Huawei's framework?",
            "options": [
                "Data",
                "Algorithm",
                "Computing Power",
                "Human Intuition"
            ],
            "correctAnswer": "Human Intuition",
            "domain": "AI Fundamentals",
            "level": "hard"
        },
        {
            "id": 5,
            "question": "The Huawei HiAI platform follows which architectural model to enable cross-device intelligence?",
            "options": [
                "cloud-device-chip",
                "chip-cloud-device",
                "device-cloud-chip",
                "chip-device-cloud"
            ],
            "correctAnswer": "chip-device-cloud",
            "domain": "Smart Devices & HiAI",
            "level": "hard"
        },
        {
            "id": 6,
            "question": "Which component of Huawei HiAI provides developers with direct access to AI capabilities like CV, ASR, and NLP through APIs?",
            "options": [
                "HiAI Service",
                "HiAI Engine",
                "HiAI Foundation",
                "HiAI Framework"
            ],
            "correctAnswer": "HiAI Engine",
            "domain": "Smart Devices & HiAI",
            "level": "hard"
        },
        {
            "id": 7,
            "question": "What is the primary function of the AscendCL interface in the Ascend software stack?",
            "options": [
                "To manage power consumption",
                "To generate offline models",
                "To provide a programming interface for developers",
                "To optimize image decoding"
            ],
            "correctAnswer": "To provide a programming interface for developers",
            "domain": "AI Hardware & Software Stack",
            "level": "hard"
        },
        {
            "id": 8,
            "question": "Which of the following best describes the role of the L3 application enabling layer in the Ascend software architecture?",
            "options": [
                "Handles hardware resource allocation",
                "Provides application-level AI processing engines",
                "Converts neural networks for hardware execution",
                "Manages data dependencies"
            ],
            "correctAnswer": "Provides application-level AI processing engines",
            "domain": "AI Hardware & Software Stack",
            "level": "hard"
        },
        {
            "id": 9,
            "question": "What is the main purpose of the framework adapter in the Ascend AI software stack?",
            "options": [
                "To reduce power consumption",
                "To support frameworks like TensorFlow and PyTorch",
                "To manage model deployment",
                "To accelerate video decoding"
            ],
            "correctAnswer": "To support frameworks like TensorFlow and PyTorch",
            "domain": "AI Frameworks & Integration",
            "level": "hard"
        },
        {
            "id": 10,
            "question": "Which Huawei AI processor is specifically optimized for high-performance AI training in data centers?",
            "options": [
                "Ascend 310",
                "Ascend 510",
                "Ascend 710",
                "Ascend 910"
            ],
            "correctAnswer": "Ascend 910",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 11,
            "question": "For an AI application requiring ultra-low power inference on a surveillance camera at the edge, the most suitable Huawei chip is:",
            "options": [
                "Ascend 910",
                "Ascend 810",
                "Ascend 310",
                "Ascend 710"
            ],
            "correctAnswer": "Ascend 310",
            "domain": "Edge AI & IoT",
            "level": "hard"
        },
        {
            "id": 12,
            "question": "Which of the following is a key benefit of the Atlas 900 AI cluster?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "World's fastest AI training cluster",
                "Fanless design"
            ],
            "correctAnswer": "World's fastest AI training cluster",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 13,
            "question": "The Atlas 500 AI edge station is particularly suited for transportation applications due to its:",
            "options": [
                "High training throughput",
                "Massive parallel computing",
                "Fanless design and wide temperature range",
                "Cloud-native deployment"
            ],
            "correctAnswer": "Fanless design and wide temperature range",
            "domain": "IoT & Edge AI",
            "level": "hard"
        },
        {
            "id": 14,
            "question": "Which Huawei platform enables multimodal AI development with device-cloud synergy?",
            "options": [
                "ModelArts",
                "HiAI",
                "HiLens",
                "GES"
            ],
            "correctAnswer": "HiLens",
            "domain": "AI Development Platforms",
            "level": "hard"
        },
        {
            "id": 15,
            "question": "What is the maximum FP16 computing power of the Atlas 800 AI server?",
            "options": [
                "1 PFLOPS",
                "2 PFLOPS",
                "4 PFLOPS",
                "8 PFLOPS"
            ],
            "correctAnswer": "2 PFLOPS",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 16,
            "question": "Which service in HUAWEI CLOUD EI is used to detect and filter inappropriate content such as pornography or terrorism?",
            "options": [
                "ModelArts",
                "Content Moderation",
                "Graph Engine Service",
                "Conversational Bot Service"
            ],
            "correctAnswer": "Content Moderation",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 17,
            "question": "Which of the following is NOT a core component of HUAWEI CLOUD EI?",
            "options": [
                "Industry know-how",
                "Algorithms",
                "Cloud gaming infrastructure",
                "Computing power"
            ],
            "correctAnswer": "Cloud gaming infrastructure",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 18,
            "question": "What is the primary purpose of the FusionDirector tool in the Atlas AI platform?",
            "options": [
                "To manage power consumption",
                "To decode video streams",
                "To manage large-scale AI deployments and push updates",
                "To store intermediate results"
            ],
            "correctAnswer": "To manage large-scale AI deployments and push updates",
            "domain": "AI Management & Orchestration",
            "level": "hard"
        },
        {
            "id": 19,
            "question": "For an IoT application requiring real-time anomaly detection on a power line using video analytics, the most suitable Huawei product would be the:",
            "options": [
                "Atlas 900 AI cluster",
                "Atlas 800 AI server",
                "Atlas 500 AI edge station",
                "Ascend 910 chip in a cloud data center"
            ],
            "correctAnswer": "Atlas 500 AI edge station",
            "domain": "IoT & Edge AI",
            "level": "hard"
        },
        {
            "id": 20,
            "question": "Which of the following is a key feature of the Atlas 200 Developer Kit?",
            "options": [
                "High-density video decoding",
                "Edge-cloud collaboration",
                "Ultra-low cost for local development",
                "Massive parallel computing"
            ],
            "correctAnswer": "Ultra-low cost for local development",
            "domain": "Edge AI Development",
            "level": "hard"
        },
        {
            "id": 21,
            "question": "What is the main function of the Graph Engine Service (GES) in HUAWEI CLOUD EI?",
            "options": [
                "Image recognition",
                "Analyzing complex relationships in data",
                "Text-to-speech synthesis",
                "Video transcoding"
            ],
            "correctAnswer": "Analyzing complex relationships in data",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 22,
            "question": "Which AI capability is primarily used for intelligent photo categorization in Huawei HiAI?",
            "options": [
                "NLP",
                "ASR",
                "CV",
                "OCR"
            ],
            "correctAnswer": "CV",
            "domain": "Computer Vision",
            "level": "hard"
        },
        {
            "id": 23,
            "question": "What is the projected size of the global AI market by 2025 according to the document?",
            "options": [
                "$1 trillion",
                "$2 trillion",
                "$3 trillion",
                "$4 trillion"
            ],
            "correctAnswer": "$3 trillion",
            "domain": "AI Industry Trends",
            "level": "hard"
        },
        {
            "id": 24,
            "question": "Which of the following is a major challenge in current AI development as mentioned in the document?",
            "options": [
                "Too much data",
                "Lack of computing power",
                "Algorithmic bias",
                "Excessive regulation"
            ],
            "correctAnswer": "Algorithmic bias",
            "domain": "AI Challenges",
            "level": "hard"
        },
        {
            "id": 25,
            "question": "Which of the following is NOT a benefit of using Huawei HiAI for app development?",
            "options": [
                "Real-time performance",
                "Lower cost",
                "Reduced security",
                "Stability"
            ],
            "correctAnswer": "Reduced security",
            "domain": "Smart Devices & HiAI",
            "level": "hard"
        },
        {
            "id": 26,
            "question": "What is the primary purpose of AI image super-resolution (SR)?",
            "options": [
                "Improve battery life",
                "Enhance image clarity",
                "Increase app size",
                "Reduce data usage"
            ],
            "correctAnswer": "Enhance image clarity",
            "domain": "Computer Vision",
            "level": "hard"
        },
        {
            "id": 27,
            "question": "Which Huawei AI framework is designed to provide a unified experience across device, edge, and cloud?",
            "options": [
                "TensorFlow",
                "PyTorch",
                "MindSpore",
                "Keras"
            ],
            "correctAnswer": "MindSpore",
            "domain": "AI Frameworks",
            "level": "hard"
        },
        {
            "id": 28,
            "question": "Which of the following is NOT a key component of the MindSpore architecture?",
            "options": [
                "Mind Expression (ME)",
                "Graph Engine (GE)",
                "Tensor Backend Engine (TBE)",
                "Central Control Engine (CCE)"
            ],
            "correctAnswer": "Central Control Engine (CCE)",
            "domain": "AI Frameworks",
            "level": "hard"
        },
        {
            "id": 29,
            "question": "What is the main focus of Huawei’s AI ecosystem strategy?",
            "options": [
                "Monopolize the AI market",
                "Promote intelligent transformation with partners",
                "Replace all traditional apps",
                "Focus only on hardware"
            ],
            "correctAnswer": "Promote intelligent transformation with partners",
            "domain": "AI Strategy",
            "level": "hard"
        },
        {
            "id": 30,
            "question": "Which service in HUAWEI CLOUD EI is used for intelligent Q&A and task-based interactions?",
            "options": [
                "ModelArts",
                "Content Moderation",
                "Conversational Bot Service",
                "Graph Engine Service"
            ],
            "correctAnswer": "Conversational Bot Service",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 31,
            "question": "Which of the following is a key application of NLP in HUAWEI CLOUD EI?",
            "options": [
                "Image recognition",
                "Text summarization",
                "Video editing",
                "Network optimization"
            ],
            "correctAnswer": "Text summarization",
            "domain": "Natural Language Processing",
            "level": "hard"
        },
        {
            "id": 32,
            "question": "What is the primary purpose of federated learning as highlighted in the document?",
            "options": [
                "To increase model size",
                "To preserve privacy and security in AI training",
                "To reduce the need for data",
                "To replace cloud computing"
            ],
            "correctAnswer": "To preserve privacy and security in AI training",
            "domain": "AI Trends & Security",
            "level": "hard"
        },
        {
            "id": 33,
            "question": "Which of the following is a key benefit of the Atlas 800 AI server in inference tasks?",
            "options": [
                "High training performance",
                "High inference performance",
                "Low power consumption",
                "Fanless design"
            ],
            "correctAnswer": "High inference performance",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 34,
            "question": "Which Huawei platform supports the full lifecycle of AI model development, from data preparation to deployment?",
            "options": [
                "HiAI",
                "HiLens",
                "ModelArts",
                "GES"
            ],
            "correctAnswer": "ModelArts",
            "domain": "AI Development Platforms",
            "level": "hard"
        },
        {
            "id": 35,
            "question": "Which module in the Ascend software stack ensures proper execution order and resolves data dependencies?",
            "options": [
                "Event synchronization module",
                "Memory management unit",
                "Power control engine",
                "Data encoding layer"
            ],
            "correctAnswer": "Event synchronization module",
            "domain": "AI Hardware & Software Stack",
            "level": "hard"
        },
        {
            "id": 36,
            "question": "Which of the following is a key feature of the Ascend Graph Optimization Engine?",
            "options": [
                "Real-time video encoding",
                "Neural network graph optimization and compilation",
                "Battery life extension",
                "Cloud storage integration"
            ],
            "correctAnswer": "Neural network graph optimization and compilation",
            "domain": "AI Hardware & Software Stack",
            "level": "hard"
        },
        {
            "id": 37,
            "question": "What is the main use of the Intelligent EdgeFabric (IEF) in Huawei’s ecosystem?",
            "options": [
                "To provide cloud office tools",
                "To manage edge applications and push models to edge nodes",
                "To host AI training courses",
                "To mine cryptocurrency"
            ],
            "correctAnswer": "To manage edge applications and push models to edge nodes",
            "domain": "Edge AI & IoT",
            "level": "hard"
        },
        {
            "id": 38,
            "question": "Which of the following best describes the purpose of the ModelArts platform?",
            "options": [
                "To provide cloud-based office productivity tools",
                "To support the full lifecycle of AI model development",
                "To offer online gaming services",
                "To manage cryptocurrency transactions"
            ],
            "correctAnswer": "To support the full lifecycle of AI model development",
            "domain": "AI Development Platforms",
            "level": "hard"
        },
        {
            "id": 39,
            "question": "Which AI technology is essential for autonomous vehicles to perform object detection and real-time navigation?",
            "options": [
                "NLP",
                "ASR",
                "CV",
                "OCR"
            ],
            "correctAnswer": "CV",
            "domain": "Autonomous Systems",
            "level": "hard"
        },
        {
            "id": 40,
            "question": "Which of the following is a major application of the Atlas AI platform in the electric power industry?",
            "options": [
                "Customer service chatbots",
                "Smart meter data analysis",
                "Predictive maintenance of power lines",
                "Employee training simulations"
            ],
            "correctAnswer": "Predictive maintenance of power lines",
            "domain": "Industry-Specific AI",
            "level": "hard"
        },
        {
            "id": 41,
            "question": "Which of the following is a key breakthrough enabling the widespread adoption of AI?",
            "options": [
                "Quantum encryption",
                "Blockchain technology",
                "Advancements in computing power, algorithms, and data",
                "5G network billing models"
            ],
            "correctAnswer": "Advancements in computing power, algorithms, and data",
            "domain": "AI Enablers",
            "level": "hard"
        },
        {
            "id": 42,
            "question": "What is the primary purpose of AI chips as stated in the document?",
            "options": [
                "To replace CPUs in all computing tasks",
                "To process massive computing tasks in AI applications",
                "To enhance GPU graphics rendering",
                "To manage cloud storage"
            ],
            "correctAnswer": "To process massive computing tasks in AI applications",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 43,
            "question": "Which of the following is a key challenge faced by AI developers today?",
            "options": [
                "Long training cycles and low efficiency",
                "Too many open-source models",
                "Excessive user feedback",
                "Lack of interest from enterprises"
            ],
            "correctAnswer": "Long training cycles and low efficiency",
            "domain": "AI Development Challenges",
            "level": "hard"
        },
        {
            "id": 44,
            "question": "Which of the following is NOT a type of machine learning described in the document?",
            "options": [
                "Supervised learning",
                "Unsupervised learning",
                "Reinforcement learning",
                "Deterministic learning"
            ],
            "correctAnswer": "Deterministic learning",
            "domain": "Machine Learning Overview",
            "level": "hard"
        },
        {
            "id": 45,
            "question": "Which AI processor is used in the Atlas 200 AI accelerator module?",
            "options": [
                "Ascend 910",
                "Ascend 310",
                "Ascend 710",
                "Ascend 510"
            ],
            "correctAnswer": "Ascend 310",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 46,
            "question": "Which of the following is a key benefit of device-edge-cloud collaboration in the Atlas platform?",
            "options": [
                "Reduced power consumption",
                "Centralized development and deployment",
                "High-density video decoding",
                "Fanless design"
            ],
            "correctAnswer": "Centralized development and deployment",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 47,
            "question": "Which technology enables AI models to be trained across decentralized devices without sharing raw data?",
            "options": [
                "Edge computing",
                "Federated learning",
                "Cloud bursting",
                "Model pruning"
            ],
            "correctAnswer": "Federated learning",
            "domain": "AI Trends & Security",
            "level": "hard"
        },
        {
            "id": 48,
            "question": "Which of the following is a real-world application of Huawei HiAI in the tourism industry?",
            "options": [
                "Battery optimization",
                "Voice recognition for bookings",
                "Enhancing photo quality for Ctrip",
                "Flight scheduling"
            ],
            "correctAnswer": "Enhancing photo quality for Ctrip",
            "domain": "Industry Applications",
            "level": "hard"
        },
        {
            "id": 49,
            "question": "Which feature is used for real-time AI image segmentation in smart devices?",
            "options": [
                "GPU",
                "NPU",
                "CPU",
                "DSP"
            ],
            "correctAnswer": "NPU",
            "domain": "Smart Devices & HiAI",
            "level": "hard"
        },
        {
            "id": 50,
            "question": "Which of the following is NOT a way Huawei connects with developers?",
            "options": [
                "HiAI open courses",
                "Technical symposiums",
                "Game development contests",
                "Cloud service ecosystem co-construction"
            ],
            "correctAnswer": "Game development contests",
            "domain": "Developer Ecosystem",
            "level": "hard"
        },
        {
            "id": 51,
            "question": "What is the main purpose of the Ascend 910 AI processor?",
            "options": [
                "Edge inference",
                "High-performance AI training",
                "Video decoding",
                "Power management"
            ],
            "correctAnswer": "High-performance AI training",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 52,
            "question": "Which of the following is a key feature of the Atlas 200 AI accelerator module?",
            "options": [
                "High-density video decoding",
                "Edge-cloud collaboration",
                "Ultra-low cost for local development",
                "Massive parallel computing"
            ],
            "correctAnswer": "Edge-cloud collaboration",
            "domain": "Edge AI",
            "level": "hard"
        },
        {
            "id": 53,
            "question": "Which of the following best describes the purpose of the ModelArts platform?",
            "options": [
                "To provide AI chips",
                "To offer cloud-based AI services",
                "To enable end-to-end AI model development and deployment",
                "To simulate AI behavior in robots"
            ],
            "correctAnswer": "To enable end-to-end AI model development and deployment",
            "domain": "AI Development Platforms",
            "level": "hard"
        },
        {
            "id": 54,
            "question": "Which Huawei AI chip is known for its high energy efficiency and used in edge devices?",
            "options": [
                "Ascend 910",
                "Ascend 310",
                "Ascend 510",
                "Ascend 710"
            ],
            "correctAnswer": "Ascend 310",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 55,
            "question": "Which of the following best describes Huawei's Atlas AI Computing Platform?",
            "options": [
                "A cloud-based AI development tool",
                "A platform for AI training and inference across device, edge, and cloud",
                "An AI chip for mobile phones",
                "A framework for natural language processing"
            ],
            "correctAnswer": "A platform for AI training and inference across device, edge, and cloud",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 56,
            "question": "What is one use of image scene recognition?",
            "options": [
                "Improving GPS accuracy",
                "Identifying objects in a photo",
                "Increasing app download speed",
                "Enhancing battery life"
            ],
            "correctAnswer": "Identifying objects in a photo",
            "domain": "Computer Vision",
            "level": "hard"
        },
        {
            "id": 57,
            "question": "Which of the following is a key component of Huawei’s AI development strategy?",
            "options": [
                "Limited to cloud computing",
                "Full-stack, all-scenario AI portfolio",
                "Exclusive use of open-source frameworks",
                "Focus on only one AI application"
            ],
            "correctAnswer": "Full-stack, all-scenario AI portfolio",
            "domain": "AI Strategy",
            "level": "hard"
        },
        {
            "id": 58,
            "question": "Which of the following is a challenge faced by AI today?",
            "options": [
                "Too much data",
                "Lack of computing power",
                "Algorithmic bias",
                "Excessive regulation in all countries"
            ],
            "correctAnswer": "Algorithmic bias",
            "domain": "AI Ethics",
            "level": "hard"
        },
        {
            "id": 59,
            "question": "What is the primary objective of HUAWEI CLOUD EI?",
            "options": [
                "To provide cloud-based entertainment services",
                "To drive enterprises' intelligent transformation using AI and big data",
                "To offer cybersecurity solutions for small businesses",
                "To develop consumer-grade AI applications"
            ],
            "correctAnswer": "To drive enterprises' intelligent transformation using AI and big data",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 60,
            "question": "Which of the following is a key benefit of the Atlas 500 AI edge station in transportation applications?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "Fanless design and wide temperature range",
                "Massive parallel computing"
            ],
            "correctAnswer": "Fanless design and wide temperature range",
            "domain": "IoT & Edge AI",
            "level": "hard"
        },
        {
            "id": 61,
            "question": "Which of the following is a key benefit of the Atlas 800 AI server in inference tasks?",
            "options": [
                "High training performance",
                "High inference performance",
                "Low power consumption",
                "Fanless design"
            ],
            "correctAnswer": "High inference performance",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 62,
            "question": "What is the main purpose of the FusionDirector management tool in the Atlas platform?",
            "options": [
                "To manage power consumption",
                "To decode video streams",
                "To manage large-scale AI deployments and push updates",
                "To store intermediate results"
            ],
            "correctAnswer": "To manage large-scale AI deployments and push updates",
            "domain": "AI Management",
            "level": "hard"
        },
        {
            "id": 63,
            "question": "What is the main function of the Ascend 310 AI processor?",
            "options": [
                "High-performance training",
                "Edge inference",
                "Cloud computing",
                "Video decoding"
            ],
            "correctAnswer": "Edge inference",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 64,
            "question": "Which of the following is a key benefit of the Atlas 500 AI edge station in transportation applications?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "Fanless design and wide temperature range",
                "Massive parallel computing"
            ],
            "correctAnswer": "Fanless design and wide temperature range",
            "domain": "IoT & Edge AI",
            "level": "hard"
        },
        {
            "id": 65,
            "question": "Which of the following is a key benefit of the Atlas 800 AI server in inference tasks?",
            "options": [
                "High training performance",
                "High inference performance",
                "Low power consumption",
                "Fanless design"
            ],
            "correctAnswer": "High inference performance",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 66,
            "question": "What is the main function of the Ascend 910 AI processor?",
            "options": [
                "Edge inference",
                "High-performance AI training",
                "Video decoding",
                "Power management"
            ],
            "correctAnswer": "High-performance AI training",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 67,
            "question": "Which of the following is a key feature of the Atlas 200 AI accelerator module?",
            "options": [
                "High-density video decoding",
                "Edge-cloud collaboration",
                "Ultra-low cost for local development",
                "Massive parallel computing"
            ],
            "correctAnswer": "Edge-cloud collaboration",
            "domain": "Edge AI",
            "level": "hard"
        },
        {
            "id": 68,
            "question": "Which of the following is a key benefit of the Atlas 900 AI cluster?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "World's fastest AI training cluster",
                "Fanless design"
            ],
            "correctAnswer": "World's fastest AI training cluster",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 69,
            "question": "Which of the following is a key benefit of the Atlas 900 AI cluster?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "World's fastest AI training cluster",
                "Fanless design"
            ],
            "correctAnswer": "World's fastest AI training cluster",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 70,
            "question": "What is the maximum computing power of the Atlas 800 AI server in FP16 precision?",
            "options": [
                "1 PFLOPS",
                "2 PFLOPS",
                "4 PFLOPS",
                "8 PFLOPS"
            ],
            "correctAnswer": "2 PFLOPS",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 71,
            "question": "Which of the following is a key feature of the Atlas 900 AI cluster?",
            "options": [
                "Highest density video decoding",
                "World's fastest AI training cluster",
                "Ultra-low cost for local development",
                "Fanless design"
            ],
            "correctAnswer": "World's fastest AI training cluster",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 72,
            "question": "Which of the following is a key benefit of the device-edge-cloud collaboration in the Atlas platform?",
            "options": [
                "Reduced power consumption",
                "Centralized development and deployment",
                "High-density video decoding",
                "Fanless design"
            ],
            "correctAnswer": "Centralized development and deployment",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 73,
            "question": "Which of the following is a major application of the Atlas AI platform in the electric power industry?",
            "options": [
                "Customer service automation",
                "Smart metering",
                "Predictive maintenance of power lines",
                "Energy trading"
            ],
            "correctAnswer": "Predictive maintenance of power lines",
            "domain": "Industry-Specific AI",
            "level": "hard"
        },
        {
            "id": 74,
            "question": "Which of the following is NOT a benefit of apps using Huawei HiAI?",
            "options": [
                "Real-time performance",
                "Lower cost",
                "Reduced security",
                "Stability"
            ],
            "correctAnswer": "Reduced security",
            "domain": "Smart Devices & HiAI",
            "level": "hard"
        },
        {
            "id": 75,
            "question": "What is one of the key AI capabilities used in photo categorization?",
            "options": [
                "NLP",
                "ASR",
                "CV",
                "OCR"
            ],
            "correctAnswer": "CV",
            "domain": "Computer Vision",
            "level": "hard"
        },
        {
            "id": 76,
            "question": "What does Huawei HiAI help with in the example with Ctrip?",
            "options": [
                "Real-time translation",
                "Enhancing photo quality",
                "Voice recognition",
                "Battery optimization"
            ],
            "correctAnswer": "Enhancing photo quality",
            "domain": "Industry Applications",
            "level": "hard"
        },
        {
            "id": 77,
            "question": "Which feature is used for real-time AI image segmentation?",
            "options": [
                "GPU",
                "NPU",
                "CPU",
                "DSP"
            ],
            "correctAnswer": "NPU",
            "domain": "Smart Devices & HiAI",
            "level": "hard"
        },
        {
            "id": 78,
            "question": "Which of the following is NOT a way Huawei connects with developers?",
            "options": [
                "HiAI open courses",
                "Technical symposiums",
                "Game development contests",
                "Cloud service ecosystem co-construction"
            ],
            "correctAnswer": "Game development contests",
            "domain": "Developer Ecosystem",
            "level": "hard"
        },
        {
            "id": 79,
            "question": "What is the primary purpose of AI chips according to the text?",
            "options": [
                "To replace CPUs in all computing tasks",
                "To process massive computing tasks in AI applications",
                "To enhance the performance of GPUs",
                "To manage data storage in cloud environments"
            ],
            "correctAnswer": "To process massive computing tasks in AI applications",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 80,
            "question": "Which of the following is a key feature of the L3 application enabling layer in the Ascend software stack?",
            "options": [
                "It handles hardware resource allocation",
                "It provides application-level AI processing engines",
                "It generates offline models",
                "It converts neural networks for hardware execution"
            ],
            "correctAnswer": "It provides application-level AI processing engines",
            "domain": "AI Software Stack",
            "level": "hard"
        },
        {
            "id": 81,
            "question": "Which of the following is a key feature of the Ascend 910 AI processor?",
            "options": [
                "Low power consumption",
                "High training performance",
                "Fanless design",
                "Small form factor"
            ],
            "correctAnswer": "High training performance",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 82,
            "question": "What is the main purpose of the FusionDirector management tool in the Atlas platform?",
            "options": [
                "To manage power consumption",
                "To decode video streams",
                "To manage large-scale AI deployments and push updates",
                "To store intermediate results"
            ],
            "correctAnswer": "To manage large-scale AI deployments and push updates",
            "domain": "AI Management",
            "level": "hard"
        },
        {
            "id": 83,
            "question": "What is the main function of the Ascend 310 AI processor?",
            "options": [
                "High-performance training",
                "Edge inference",
                "Cloud computing",
                "Video decoding"
            ],
            "correctAnswer": "Edge inference",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 84,
            "question": "Which of the following is a key benefit of the Atlas 500 AI edge station in transportation applications?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "Fanless design and wide temperature range",
                "Massive parallel computing"
            ],
            "correctAnswer": "Fanless design and wide temperature range",
            "domain": "IoT & Edge AI",
            "level": "hard"
        },
        {
            "id": 85,
            "question": "Which of the following is a key benefit of the Atlas 800 AI server in inference tasks?",
            "options": [
                "High training performance",
                "High inference performance",
                "Low power consumption",
                "Fanless design"
            ],
            "correctAnswer": "High inference performance",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 86,
            "question": "What is the main function of the Ascend 910 AI processor?",
            "options": [
                "Edge inference",
                "High-performance AI training",
                "Video decoding",
                "Power management"
            ],
            "correctAnswer": "High-performance AI training",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 87,
            "question": "Which of the following is a key feature of the Atlas 200 AI accelerator module?",
            "options": [
                "High-density video decoding",
                "Edge-cloud collaboration",
                "Ultra-low cost for local development",
                "Massive parallel computing"
            ],
            "correctAnswer": "Edge-cloud collaboration",
            "domain": "Edge AI",
            "level": "hard"
        },
        {
            "id": 88,
            "question": "Which of the following is a key benefit of the Atlas 900 AI cluster?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "World's fastest AI training cluster",
                "Fanless design"
            ],
            "correctAnswer": "World's fastest AI training cluster",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 89,
            "question": "Which of the following is a key feature of the Atlas 900 AI cluster?",
            "options": [
                "Highest density video decoding",
                "World's fastest AI training cluster",
                "Ultra-low cost for local development",
                "Fanless design"
            ],
            "correctAnswer": "World's fastest AI training cluster",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 90,
            "question": "Which of the following is a key benefit of the device-edge-cloud collaboration in the Atlas platform?",
            "options": [
                "Reduced power consumption",
                "Centralized development and deployment",
                "High-density video decoding",
                "Fanless design"
            ],
            "correctAnswer": "Centralized development and deployment",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 91,
            "question": "Which of the following is a major application of the Atlas AI platform in the electric power industry?",
            "options": [
                "Customer service chatbots",
                "Smart meter data analysis",
                "Predictive maintenance of power lines",
                "Employee training"
            ],
            "correctAnswer": "Predictive maintenance of power lines",
            "domain": "Industry-Specific AI",
            "level": "hard"
        },
        {
            "id": 92,
            "question": "What is the primary objective of HUAWEI CLOUD EI?",
            "options": [
                "To provide cloud-based entertainment services",
                "To drive enterprises' intelligent transformation using AI and big data",
                "To offer cybersecurity solutions for small businesses",
                "To develop consumer-grade AI applications"
            ],
            "correctAnswer": "To drive enterprises' intelligent transformation using AI and big data",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 93,
            "question": "Which of the following is NOT a core component of the HUAWEI CLOUD EI ecosystem?",
            "options": [
                "Industry know-how",
                "Computing power",
                "Cloud gaming infrastructure",
                "Algorithms"
            ],
            "correctAnswer": "Cloud gaming infrastructure",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 94,
            "question": "What is the main use of Huawei HiLens?",
            "options": [
                "To provide cloud-based office software",
                "To develop multimodal AI applications with device-cloud synergy",
                "To offer AI-based cryptocurrency mining",
                "To host AI training courses"
            ],
            "correctAnswer": "To develop multimodal AI applications with device-cloud synergy",
            "domain": "AI Development Platforms",
            "level": "hard"
        },
        {
            "id": 95,
            "question": "What is the Graph Engine Service (GES) primarily used for?",
            "options": [
                "Image recognition",
                "Analyzing complex relationships in data",
                "Text-to-speech",
                "Video transcoding"
            ],
            "correctAnswer": "Analyzing complex relationships in data",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 96,
            "question": "What is one of the key applications of Natural Language Processing (NLP) in HUAWEI CLOUD EI?",
            "options": [
                "Image recognition",
                "Text summarization",
                "Video editing",
                "Network optimization"
            ],
            "correctAnswer": "Text summarization",
            "domain": "Natural Language Processing",
            "level": "hard"
        },
        {
            "id": 97,
            "question": "Which service is used for identifying sensitive or inappropriate content in media?",
            "options": [
                "ModelArts",
                "Content Moderation",
                "Graph Engine Service",
                "Huawei HiLens"
            ],
            "correctAnswer": "Content Moderation",
            "domain": "Enterprise AI",
            "level": "hard"
        },
        {
            "id": 98,
            "question": "Which of the following is a key feature of the Ascend 310 AI processor?",
            "options": [
                "High-performance training",
                "Edge inference",
                "Cloud computing",
                "Video decoding"
            ],
            "correctAnswer": "Edge inference",
            "domain": "AI Hardware",
            "level": "hard"
        },
        {
            "id": 99,
            "question": "Which of the following is a key benefit of the Atlas 800 AI server in inference tasks?",
            "options": [
                "High training performance",
                "High inference performance",
                "Low power consumption",
                "Fanless design"
            ],
            "correctAnswer": "High inference performance",
            "domain": "AI Infrastructure",
            "level": "hard"
        },
        {
            "id": 100,
            "question": "Which of the following is a key benefit of the Atlas 500 AI edge station in transportation applications?",
            "options": [
                "High-density video decoding",
                "Ultra-low cost for local development",
                "Fanless design and wide temperature range",
                "Massive parallel computing"
            ],
            "correctAnswer": "Fanless design and wide temperature range",
            "domain": "IoT & Edge AI",
            "level": "hard"
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
                            Assessment Level 2
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
                            <p className="text-lg sm:text-xl lg:text-2xl font-roboto">CNIC: {registrationId}</p>
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
                                        subjectName="HCIA-AI Certification Pre-Assessment Level 2" // Add your subject name here
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