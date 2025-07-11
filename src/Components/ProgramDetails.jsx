import ED from '../Images/ExecutiveDiploma.webp'
import EAD from '../Images/ExecutiveAdvancedDiploma.webp'
import PC from '../Images/ProfessionalCourses.webp'
import MINI from '../Images/MiniMBA.webp'
import projectManager from '../Images/ProjectManager.png'
import accounting from '../Images/accounting.png'
import businessManagement from '../Images/business_management.png'
import CS from '../Images/customer_services.png'
import HumanResourceManagement from '../Images/Human_Resource_Management.png'
import IT from '../Images/IT.png'
import marketing from '../Images/marketing.png'
import risKManagement from '../Images/risk_management.png'
import salesManagement from '../Images/sales_management.png'
import SCM from '../Images/Supply_Chain_Management.png'
import SMM from '../Images/social_media_management.png'
import UI from '../Images/UI.png'
import graphics from '../Images/graphics.png'
import IOT from '../Images/IOT.png'
import blockchain from '../Images/blockchain.png'
import SQL from '../Images/SQL.png'
import devops from '../Images/devops.png'
import network from '../Images/network.png'
import cyber from '../Images/cyber.jpg'
import excel from '../Images/excel.jpg'
import powerBI from '../Images/power_BI.jpg'
import dart from '../Images/dart.jpg'
import html from '../Images/html.jpg'
import python from '../Images/python.jpg'
import reactNative from '../Images/reactNative.png'
import webDev from '../Images/webDev.jpg'
import cloud from '../Images/cloud.jpg'
import AI from '../Images/AI.jpg'
import dataScience from '../Images/dataScience.jpg'
import projectManagement from '../Images/projectManagement.jpg'
import frontend from '../Images/Frontend.webp'

const ProgramDetails = [
    {
        path: '/executive-advanced-diploma',
        programName: 'EXECUTIVE ADVANCED DIPLOMA',
        heroImg: EAD,
        heroBigText: 'Get Certified in Just 4 Weeks — for Only €12',
        heroSmallText:
            'This fast, focused program delivers foundational business skills in just 4 weeks, making it perfect for aspiring professionals and early-career learners.',
        label: 'Explore Executive Advanced Diploma’s',
        programDetails: [
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/project-management',
                programImg: projectManager,
                programLabel: 'Project Management',
                programText:
                    'Master the principles of project management and gain globally recognized expertise to lead projects successfully.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 91,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Develop skills to manage projects efficiently using globally recognized frameworks and tools for success across industries.'
            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/social-media-management',
                programImg: SMM,
                programLabel: 'Social Media Management',
                programText:
                    'Master content strategy, analytics, and growth techniques to manage and scale social media for modern brands.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 78,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Train in digital communication, content strategy, and brand management to lead social engagement for businesses.'
            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/customer-service',
                programImg: CS,
                programLabel: 'Customer Service',
                programText:
                    'Develop skills to manage customer relationships, resolve issues effectively, and deliver exceptional service experiences.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 86,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Build communication and conflict resolution skills to handle customer needs and elevate satisfaction standards.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/accounting',
                programImg: accounting,
                programLabel: 'Accounting',
                programText:
                    'Gain practical accounting knowledge in financial reporting, budgeting, and business analysis for decision-making.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 93,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Learn financial reporting, budgeting, and essential accounting principles for smarter business decisions.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/marketing',
                programImg: marketing,
                programLabel: 'Marketing',
                programText:
                    'Learn digital and strategic marketing to attract, engage, and convert customers across various platforms, both digital and traditional.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 88,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Equip yourself with techniques to promote brands, attract customers, and drive revenue across platforms.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/human-resource-management',
                programImg: HumanResourceManagement,
                programLabel: 'Human Resource Management',
                programText:
                    'Build core Human Resource (HR) skills in recruitment, employee development, and organizational performance.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 82,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Gain insight into recruitment, team building, and employee relations for organizational performance.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/supply-chain-management',
                programImg: SCM,
                programLabel: 'Supply Chain Management',
                programText:
                    'Understand logistics, procurement, and operations to successfully manage efficient, end-to-end supply chains globally.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 79,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Learn to manage supply chains from end-to-end, optimizing inventory, logistics, and vendor networks.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/sales-management',
                programImg: salesManagement,
                programLabel: 'Sales Management',
                programText:
                    'Learn and master modern sales strategies, pipeline management, and negotiation to drive revenue and growth in any niche.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 89,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Build core sales strategies, lead pipelines, and understand consumer behavior to close deals faster.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/risk-management',
                programImg: risKManagement,
                programLabel: 'Risk Management',
                programText:
                    'Learn to identify, assess, and manage business risks to protect and grow your organization. A core skill for any entrepreneur.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 76,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Mitigate financial, operational, and strategic risks with smart frameworks and decision-making tools.'

            },
            {
                addToCart: false,
                projectPath: '/executive-advanced-diploma/information-technology',
                programImg: IT,
                programLabel: 'Information Technology',
                programText:
                    'Understand IT systems, cybersecurity, and digital tools to support business operations and innovation in an every growing digital world.',
                programPrice: '12',
                programName: 'EXECUTIVE ADVANCED DIPLOMA',
                reviews: 95,
                duration: '4 Weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Advanced Diploma Certificate upon completion',
                note: 'Grasp IT systems, cybersecurity principles, and business applications for digital transformation.'

            },
        ],
    },
    {
        path: '/mini-mba',
        programName: 'EXECUTIVE MINI MBA',
        heroImg: MINI,
        heroBigText: 'Executive Mini MBA — Everything You Need to Lead',
        heroSmallText:
            'Take the next big step in your career with our 2-month online Executive Mini MBA—designed for professionals who want flexible, world-class business training without the high cost.',
        label: `Explore Executive Mini MBA's`,
        programDetails: [
            {
                addToCart: false,
                projectPath: '/mini-mba/business-management',
                programImg: businessManagement,
                programLabel: 'Business Management',
                programText:
                    'Master core business functions, leadership, and strategy to run or grow any organization effectively and confidently.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 97,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'A complete program in leadership, operations, and strategy for professionals aiming to scale careers or businesses.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/project-management',
                programImg: projectManager,
                programLabel: 'Project Management',
                programText:
                    'Gain essential tools and leadership techniques to plan, execute, and deliver successful projects across industries.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 94,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Advanced project planning, budgeting, and execution skills for professionals leading cross-functional teams.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/social-media-management',
                programImg: SMM,
                programLabel: 'Social Media Management',
                programText:
                    'Develop strategic social media skills for brand growth, audience engagement, and measurable marketing impact.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 87,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Specialize in digital branding, audience targeting, and platform analytics to manage successful campaigns.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/customer-service',
                programImg: CS,
                programLabel: 'Customer Service',
                programText:
                    'Learn to create outstanding customer experiences, handle complaints professionally, and boost client satisfaction.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 80,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Enhance loyalty and retention through service excellence, emotional intelligence, and client-centric strategies.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/accounting',
                programImg: accounting,
                programLabel: 'Accounting',
                programText:
                    'Understand accounting principles, financial reporting, and analysis to support smart business decision-making.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 90,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Build competence in financial statements, costing, and interpretation for smart managerial decisions.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/marketing',
                programImg: marketing,
                programLabel: 'Marketing',
                programText:
                    'Build effective marketing strategies to reach audiences, increase brand awareness, and drive sales results.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 84,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Learn advanced marketing tactics to drive conversion, increase visibility, and retain customers.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/human-resource-management',
                programImg: HumanResourceManagement,
                programLabel: 'Human Resource Management',
                programText:
                    'Strengthen HR skills in recruitment, training, and performance management to drive organizational success.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 85,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Develop organizational HR frameworks for effective recruitment, training, and employee performance tracking.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/supply-chain-management',
                programImg: SCM,
                programLabel: 'Supply Chain Management',
                programText:
                    'Learn logistics, procurement, and inventory control to successfully manage efficient, end-to-end supply chains.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 81,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Handle end-to-end logistics and procurement operations with efficiency, control, and transparency.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/sales-management',
                programImg: salesManagement,
                programLabel: 'Sales Management',
                programText:
                    'Learn and master modern sales strategies, pipeline management, and negotiation to drive revenue and growth in any niche.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 92,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Learn forecasting, team coordination, and CRM to lead successful, scalable sales operations.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/risk-management',
                programImg: risKManagement,
                programLabel: 'Risk Management',
                programText:
                    'Learn to identify, assess, and manage business risks to protect and grow your organization. A core skill for any entrepreneur.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 83,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Apply risk mitigation strategies to protect assets and ensure sustainable business continuity.'

            },
            {
                addToCart: false,
                projectPath: '/mini-mba/information-technology',
                programImg: IT,
                programLabel: 'Information Technology',
                programText:
                    'Understand IT systems, data security, and digital transformation for modern business operations in this digital age.',
                programPrice: '28',
                programName: 'EXECUTIVE MINI MBA',
                reviews: 96,
                duration: '2 Months',
                mode: 'Online & Self-Paced',
                certificate: 'Executive Mini MBA Certificate upon completion',
                note: 'Navigate the IT landscape with expertise in digital tools, cloud platforms, and cybersecurity essentials.'

            },
        ],
    },
    {
        path: '/professional-courses',
        programName: 'PROFESSIONAL COURSES',
        heroImg: PC,
        heroBigText: 'Get Certified in Just 14 Days with Our Professional Online Courses',
        heroSmallText: 'Upgrade your skills quickly with self-paced, expert-led courses. Fully online, flexible, and designed for busy professionals—complete with a certificate you can showcase immediately.',
        label: 'Explore Professional Online Courses',
        programDetails: [
            {
                addToCart: false,
                projectPath: '/professional-courses/full-stack-development',
                programImg: IT,
                programLabel: 'Full Stack Development',
                programText: 'Learn to build complete web applications using frontend and backend technologies like HTML, JavaScript, Node.js, and more.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '872',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Full Stack Development',
                note: 'This course provides the foundational and practical skills required to succeed in full stack development.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/frontend-development',
                programImg: frontend,
                programLabel: 'Frontend Development',
                programText: 'Master HTML, CSS, JavaScript, and frameworks to design responsive, interactive user interfaces for both web and web apps.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '631',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Frontend Development',
                note: 'This course provides the foundational and practical skills required to succeed in frontend development.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/ui-ux-design',
                programImg: UI,
                programLabel: 'UI/UX Design',
                programText: 'Design user-focused, visually engaging digital experiences using Figma, design systems, and usability principles.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '794',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in UI/UX Design',
                note: 'This course provides the foundational and practical skills required to succeed in UI/UX design.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/graphic-design',
                programImg: graphics,
                programLabel: 'Graphic Design',
                programText: 'Learn visual design principles, Adobe tools, and branding techniques for digital and print design projects.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '509',
                duration: '1 month',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Graphic Design',
                note: 'This course provides the foundational and practical skills required to succeed in graphic design.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/business-data-analysis',
                programImg: accounting,
                programLabel: 'Business-Data Analysis',
                programText: 'Learn to clean, analyze, and visualize business data to support data-driven decisions that pushes growth and development.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '681',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Business-Data Analysis',
                note: 'This course provides the foundational and practical skills required to succeed in business-data analysis.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/iot-pro-course',
                programImg: IOT,
                programLabel: 'IoT Pro Course',
                programText: 'Build Internet of Things applications, work with sensors, boards and remote control systems and connect hardware to the cloud.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '527',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in IoT',
                note: 'This course provides the foundational and practical skills required to succeed in IoT applications.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/blockchain-pro-course',
                programImg: blockchain,
                programLabel: 'Blockchain Pro Course',
                programText: 'Understand blockchain architecture, smart contracts, and decentralized application (dApp) development to excel in the world of web3.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '794',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Blockchain',
                note: 'This course provides the foundational and practical skills required to succeed in blockchain development.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/sql-pro-course',
                programImg: SQL,
                programLabel: 'SQL Pro Course',
                programText: 'Master database querying, filtering, and reporting using Structured Query Language for real-world data applications.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '686',
                duration: '1 month',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in SQL',
                note: 'This course provides the foundational and practical skills required to succeed in SQL and database management.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/devops-pro-course',
                programImg: devops,
                programLabel: 'DevOps Pro Course',
                programText: 'Automate deployments and manage infrastructure using CI/CD pipelines, Docker, and cloud tools to effectively deploy enterprise level applications.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '723',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in DevOps',
                note: 'This course provides the foundational and practical skills required to succeed in DevOps automation and delivery.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/networking-programming-course',
                programImg: network,
                programLabel: 'Networking Programming Course',
                programText: 'Learn networking basics and how to program with sockets, APIs, and protocols.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '468',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Networking Programming',
                note: 'This course provides the foundational and practical skills required to succeed in network software development.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/cyber-security-pro-course',
                programImg: cyber,
                programLabel: 'Cyber Security Pro Course',
                programText: 'Understand system vulnerabilities, ethical hacking, and protection strategies for digital infrastructure.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '811',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Cyber Security Pro Course',
                note: 'This course provides the foundational and practical skills required to succeed in cyber security.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/microsoft-excel-pro-course',
                programImg: excel,
                programLabel: 'Microsoft Excel Pro Course',
                programText: 'Master advanced formulas, pivot tables, and dashboards for professional spreadsheet tasks.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '764',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Microsoft Excel',
                note: 'This course provides essential Excel skills for data handling and business reporting.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/power-bi-pro-course',
                programImg: powerBI,
                programLabel: 'Power Bi Pro Course',
                programText: 'Build interactive dashboards and visual reports using Power BI for better business insights.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '698',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Power BI',
                note: 'This course equips learners with dashboarding and data visualization expertise using Power BI.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/dart-programming',
                programImg: dart,
                programLabel: 'Dart Programming',
                programText: 'Build fast, cross-platform applications using Dart—a modern language behind Flutter.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '587',
                duration: '1 month',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Dart Programming',
                note: 'This course helps you gain mastery of Dart for building mobile and web apps.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/html-pro-course',
                programImg: html,
                programLabel: 'HTML Pro Course',
                programText: 'Master semantic HTML and structure responsive websites from the ground up.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '623',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in HTML',
                note: 'This course provides HTML fundamentals for building modern and accessible websites.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/python-pro-course',
                programImg: python,
                programLabel: 'Python Pro Course',
                programText: 'Build projects and automate tasks using Python for web, data, and scripting purposes.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '841',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Python',
                note: 'This course teaches core Python concepts used in automation, data science, and development.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/react-native',
                programImg: reactNative,
                programLabel: 'React Native',
                programText: 'Create cross-platform mobile apps using JavaScript and the powerful React Native framework.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '773',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in React Native',
                note: 'This course equips learners with the skills to develop mobile apps using React Native.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/web-development',
                programImg: webDev,
                programLabel: 'Web Development',
                programText: 'Learn to build and deploy modern websites using HTML, CSS, JavaScript, and backend tools.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '729',
                duration: '1 month',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Web Development',
                note: 'This course covers the full stack of modern web development practices and tools.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/cloud-computing',
                programImg: cloud,
                programLabel: 'Cloud Computing',
                programText: 'Understand cloud fundamentals, deployment models, and tools like AWS and Azure.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '655',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Cloud Computing',
                note: 'This course introduces key cloud technologies and prepares you for cloud environments.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/artificial-intelligence',
                programImg: AI,
                programLabel: 'Artificial Intelligence',
                programText: 'Explore machine learning, neural networks, and intelligent systems to power real-world AI solutions.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '794',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Artificial Intelligence',
                note: 'This course teaches the foundations of AI and how to apply machine learning in practice.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/big-data',
                programImg: salesManagement,
                programLabel: 'Big Data',
                programText: 'Learn to collect, process, and analyze large data sets using Hadoop, Spark, and data pipelines.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '702',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Big Data',
                note: 'This course equips you with tools and techniques to manage and analyze large-scale data.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/data-science',
                programImg: dataScience,
                programLabel: 'Data Science',
                programText: 'Analyze data, build models, and uncover insights using Python, pandas, and visualization tools.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '878',
                duration: '1 month',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Data Science',
                note: 'This course builds strong foundations in Python data analysis and visualization.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/social-media-management',
                programImg: SMM,
                programLabel: 'Social Media Management',
                programText: 'Plan, schedule, and grow brands through social media strategy, tools, and content engagement.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '569',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Social Media Management',
                note: 'This course helps you develop effective strategies and tools to manage social media presence.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/human-resource-management',
                programImg: HumanResourceManagement,
                programLabel: 'Human Resource Management',
                programText: 'Learn recruitment, performance management, and employee relations for effective HR practice.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '684',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Human Resource Management',
                note: 'This course equips professionals to effectively manage HR processes and organizational performance.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/project-management',
                programImg: projectManagement,
                programLabel: 'Project Management',
                programText: 'Master planning, execution, and leadership skills to manage professional projects efficiently.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '741',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Project Management',
                note: 'This course trains professionals to lead and deliver successful projects in any industry.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/customer-service',
                programImg: CS,
                programLabel: 'Customer Service',
                programText: 'Deliver exceptional service, manage feedback, and improve customer satisfaction with communication skills.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '612',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Customer Service',
                note: 'This course develops communication and interpersonal skills to enhance customer satisfaction.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/accounting',
                programImg: accounting,
                programLabel: 'Accounting',
                programText: 'Understand accounting principles, financial statements, and budgeting for business operations.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '803',
                duration: '1 month',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Accounting',
                note: 'This course builds a solid foundation in financial management and business accounting practices.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/risk-management',
                programImg: risKManagement,
                programLabel: 'Risk Management',
                programText: 'Identify, assess, and respond to business risks with practical risk management strategies.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '677',
                duration: '4 weeks',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Risk Management',
                note: 'This course prepares learners to effectively identify and mitigate risks in business environments.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/marketing',
                programImg: marketing,
                programLabel: 'Marketing',
                programText: 'Develop strategies in digital, content, and traditional marketing to grow business visibility and sales.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '728',
                duration: '2 months',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Marketing',
                note: 'This course equips learners with strategic tools for building brand awareness and customer engagement.'
            },
            {
                addToCart: false,
                projectPath: '/professional-courses/sales-management',
                programImg: salesManagement,
                programLabel: 'Sales Management',
                programText: 'Learn sales techniques, customer management, and pipeline strategies to drive business growth.',
                programPrice: '3',
                programName: 'PROFESSIONAL COURSES',
                reviews: '739',
                duration: '14 days',
                mode: 'Online & Self-Paced',
                certificate: 'Professional Certificate in Sales Management',
                note: 'This course trains professionals on driving revenue and managing effective sales teams.'
            }
        ]
    },
    {
        path: '/executive-diploma',
        programName: 'EXECUTIVE DIPLOMA',
        heroImg: ED,
        heroBigText: 'Accelerate Your Career with a 1-Month Executive Diploma',
        heroSmallText: 'Advance your business skills through a 1-month, self-paced online program. Earn a recognized Executive Diploma Certificate and boost your credibility in just 30 days.',
        label: 'Explore Executive Diploma’s',
        programDetails: [
            {
                addToCart: false,
                projectPath: '/executive-diploma/full-stack-development',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: IT,
                programLabel: 'Full Stack Development',
                programText: 'Learn to build complete web applications using frontend and backend technologies like HTML, JavaScript, Node.js, and more.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/frontend-development',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: frontend,
                programLabel: 'Frontend Development',
                programText: 'Master HTML, CSS, JavaScript, and frameworks to design responsive, interactive user interfaces for both web and web apps.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/ui-ux-design',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: UI,
                programLabel: 'UI/UX Design',
                programText: 'Design user-focused, visually engaging digital experiences using Figma, design systems, and usability principles.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/graphic-design',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: graphics,
                programLabel: 'Graphic Design',
                programText: 'Learn visual design principles, Adobe tools, and branding techniques for digital and print design projects.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/business-data-analysis',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: accounting,
                programLabel: 'Business-Data Analysis',
                programText: 'Learn to clean, analyze, and visualize business data to support data-driven decisions that pushes growth and development.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/iot-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: IOT,
                programLabel: 'IoT Pro Course',
                programText: 'Build Internet of Things applications, work with sensors, boards and remote control systems and connect hardware to the cloud.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/blockchain-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: blockchain,
                programLabel: 'Blockchain Pro Course',
                programText: 'Understand blockchain architecture, smart contracts, and decentralized application (dApp) development to excel in the world of web3.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/sql-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: SQL,
                programLabel: 'SQL Pro Course',
                programText: 'Master database querying, filtering, and reporting using Structured Query Language for real-world data applications.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/devops-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: devops,
                programLabel: 'DevOps Pro Course',
                programText: 'Automate deployments and manage infrastructure using CI/CD pipelines, Docker, and cloud tools to effectively deploy enterprise level applications.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/networking-programming-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: network,
                programLabel: 'Networking Programming Course',
                programText: 'Learn networking basics and how to program with sockets, APIs, and protocols.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/cyber-security-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: cyber,
                programLabel: 'Cyber Security Pro Course',
                programText: 'Understand system vulnerabilities, ethical hacking, and protection strategies for digital infrastructure.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/microsoft-excel-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: excel,
                programLabel: 'Microsoft Excel Pro Course',
                programText: 'Master advanced formulas, pivot tables, and dashboards for professional spreadsheet tasks.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/power-bi-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: powerBI,
                programLabel: 'Power Bi Pro Course',
                programText: 'Build interactive dashboards and visual reports using Power BI for better business insights.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/dart-programming',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: dart,
                programLabel: 'Dart Programming',
                programText: 'Build fast, cross-platform applications using Dart—a modern language behind Flutter.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/html-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: html,
                programLabel: 'HTML Pro Course',
                programText: 'Master semantic HTML and structure responsive websites from the ground up.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/python-pro-course',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: python,
                programLabel: 'Python Pro Course',
                programText: 'Build projects and automate tasks using Python for web, data, and scripting purposes.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/react-native',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: reactNative,
                programLabel: 'React Native',
                programText: 'Create cross-platform mobile apps using JavaScript and the powerful React Native framework.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/web-development',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: webDev,
                programLabel: 'Web Development',
                programText: 'Learn to build and deploy modern websites using HTML, CSS, JavaScript, and backend tools.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/cloud-computing',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: cloud,
                programLabel: 'Cloud Computing',
                programText: 'Understand cloud fundamentals, deployment models, and tools like AWS and Azure.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/artificial-intelligence',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: AI,
                programLabel: 'Artificial Intelligence',
                programText: 'Explore machine learning, neural networks, and intelligent systems to power real-world AI solutions.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/big-data',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: salesManagement,
                programLabel: 'Big Data',
                programText: 'Learn to collect, process, and analyze large data sets using Hadoop, Spark, and data pipelines.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/data-science',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: dataScience,
                programLabel: 'Data Science',
                programText: 'Analyze data, build models, and uncover insights using Python, pandas, and visualization tools.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/social-media-management',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: SMM,
                programLabel: 'Social Media Management',
                programText: 'Plan, schedule, and grow brands through social media strategy, tools, and content engagement.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/human-resource-management',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: HumanResourceManagement,
                programLabel: 'Human Resource Management',
                programText: 'Learn recruitment, performance management, and employee relations for effective HR practice.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/project-management',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: projectManagement,
                programLabel: 'Project Management',
                programText: 'Master planning, execution, and leadership skills to manage professional projects efficiently.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/customer-service',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: CS,
                programLabel: 'Customer Service',
                programText: 'Deliver exceptional service, manage feedback, and improve customer satisfaction with communication skills.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/accounting',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: accounting,
                programLabel: 'Accounting',
                programText: 'Understand accounting principles, financial statements, and budgeting for business operations.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/risk-management',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: risKManagement,
                programLabel: 'Risk Management',
                programText: 'Identify, assess, and respond to business risks with practical risk management strategies.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/marketing',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: marketing,
                programLabel: 'Marketing',
                programText: 'Develop strategies in digital, content, and traditional marketing to grow business visibility and sales.',
                programPrice: '5.6'
            },
            {
                addToCart: false,
                projectPath: '/executive-diploma/sales-management',
                programName: 'EXECUTIVE DIPLOMA',
                programImg: salesManagement,
                programLabel: 'Sales Management',
                programText: 'Learn sales techniques, customer management, and pipeline strategies to drive business growth.',
                programPrice: '5.6'
            }
        ]
    },
]

export default ProgramDetails