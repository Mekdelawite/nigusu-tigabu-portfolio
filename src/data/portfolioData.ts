import {
  SkillItem,
  Project,
  DiseaseClass,
  JourneyMilestone,
  CapabilityItem,
  EducationInfo,
} from '../types/portfolio';

/**
 * =========================================================================
 * NIGUSU TIGABU - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * All personal details, project descriptions, skills, and links are centralized
 * here. Update placeholders with your actual profiles and files as they become available.
 */

export const PERSONAL_INFO = {
  name: 'Nigusu Tigabu',
  role: 'Software Engineering Student & Aspiring Software Developer',
  positioning: 'AI • Backend • Full-Stack • Big Data',
  location: 'Ethiopia',
  status: '5th Year Student (1 Semester Remaining Before Graduation)',
  availability: 'Available for Internships, Junior Developer & Freelance Roles',
  
  // Real or Placeholder Links - Replace with your exact links:
  email: 'nigusutigabu21016@gmail.com',
  githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME_HERE',
  linkedinUrl: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME_HERE',
  cvDownloadUrl: '#download-cv-placeholder', // Replace with '/assets/Nigusu_Tigabu_CV.pdf'

  taglines: [
    'Turning academic computer science knowledge into practical software.',
    'Building reliable backend systems and accessible AI applications.',
    'Focused on engineering solutions that address real-world community challenges.',
  ],

  heroBio:
    'I build practical software systems and AI-powered applications that turn real-world problems into useful technology.',
};

export const SKILLS_DATA: SkillItem[] = [
  // Backend
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'Building With',
    description: 'Primary language for machine learning modeling, computer vision pipelines, and Flask backend services.',
    badge: 'Core Language',
    iconName: 'Code2',
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'backend',
    level: 'Building With',
    description: 'Developing modular RESTful microservices, API routing, and serving deep learning model inference endpoints.',
    badge: 'Backend Framework',
    iconName: 'Server',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'backend',
    level: 'Building With',
    description: 'Designing clear API contracts, standard HTTP status codes, structured JSON payloads, and error handling.',
    badge: 'API Architecture',
    iconName: 'Globe',
  },
  {
    id: 'jwt-auth',
    name: 'JWT Authentication',
    category: 'backend',
    level: 'Comfortable',
    description: 'Implementing token-based authentication, password hashing, and role-based route protection.',
    badge: 'Security',
    iconName: 'Lock',
  },

  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'Building With',
    description: 'Creating reusable component architectures, managing state with hooks, and building responsive client interfaces.',
    badge: 'Frontend UI',
    iconName: 'Layout',
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Building With',
    description: 'Modern asynchronous programming (Async/Await), Fetch API, DOM manipulation, and modular architecture.',
    badge: 'Core Language',
    iconName: 'FileCode',
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    level: 'Comfortable',
    description: 'Semantic markup structure, accessibility (a11y) landmarks, ARIA standards, and screen-reader friendliness.',
    badge: 'Semantics',
    iconName: 'FileText',
  },
  {
    id: 'css3',
    name: 'CSS3 & Modern Layouts',
    category: 'frontend',
    level: 'Comfortable',
    description: 'Responsive design via Flexbox and Grid, CSS variables, utility-first styling, and media query breakpoints.',
    badge: 'Styling',
    iconName: 'Palette',
  },

  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'Building With',
    description: 'Relational data modeling, foreign keys, index optimization, constraints, and integration with Python backends.',
    badge: 'RDBMS',
    iconName: 'Database',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'database',
    level: 'Comfortable',
    description: 'Writing multi-table JOINs, aggregate queries, transactions, and schema migrations.',
    badge: 'Query Language',
    iconName: 'Table',
  },

  // AI & Machine Learning
  {
    id: 'tensorflow',
    name: 'TensorFlow & Keras',
    category: 'ai-ml',
    level: 'Building With',
    description: 'Training and fine-tuning convolutional neural networks, data preprocessing, and model export for inference.',
    badge: 'Deep Learning',
    iconName: 'BrainCircuit',
  },
  {
    id: 'mobilenetv2',
    name: 'MobileNetV2',
    category: 'ai-ml',
    level: 'Building With',
    description: 'Leveraging lightweight transfer learning architectures optimized for mobile and low-bandwidth web inference.',
    badge: 'Architecture',
    iconName: 'Cpu',
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    category: 'ai-ml',
    level: 'Comfortable',
    description: 'Image augmentation, normalization, resizing pipelines, and feature map inspection for plant pathology.',
    badge: 'Image Processing',
    iconName: 'Eye',
  },
  {
    id: 'grad-cam',
    name: 'Grad-CAM (Explainable AI)',
    category: 'ai-ml',
    level: 'Comfortable',
    description: 'Generating visual saliency heatmaps on leaf disease regions so users and researchers understand model decisions.',
    badge: 'Model Interpretability',
    iconName: 'Sparkles',
  },

  // Tools & Workflow
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'Building With',
    description: 'Version control workflow, branch management, merge conflict resolution, and atomic commit practices.',
    badge: 'Version Control',
    iconName: 'GitBranch',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    level: 'Building With',
    description: 'Repository management, pull request reviews, project documentation with markdown, and issue tracking.',
    badge: 'Collaboration',
    iconName: 'GitPullRequest',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    level: 'Comfortable',
    description: 'Configuring productive development environments, debugging Python and JavaScript, linting, and extensions.',
    badge: 'Editor',
    iconName: 'Terminal',
  },
  {
    id: 'pwa-concepts',
    name: 'Progressive Web Apps (PWA)',
    category: 'tools',
    level: 'Currently Learning',
    description: 'Understanding service worker caching and offline-first storage strategies for intermittent connectivity.',
    badge: 'Web Architecture',
    iconName: 'WifiOff',
  },

  // Big Data
  {
    id: 'hadoop',
    name: 'Hadoop',
    category: 'big-data',
    level: 'Building With',
    description: 'Distributed storage concepts with HDFS, MapReduce paradigms, and cluster node architectures for batch processing.',
    badge: 'Distributed Storage',
    iconName: 'Database',
  },
  {
    id: 'apache-spark',
    name: 'Apache Spark',
    category: 'big-data',
    level: 'Building With',
    description: 'In-memory distributed data processing, Resilient Distributed Datasets (RDDs), Spark DataFrames, and transformation jobs.',
    badge: 'Fast Processing',
    iconName: 'Sparkles',
  },
  {
    id: 'data-processing',
    name: 'Data Processing',
    category: 'big-data',
    level: 'Building With',
    description: 'Extract, Transform, Load (ETL) pipelines, handling structured/unstructured datasets, and large-scale data cleansing.',
    badge: 'ETL Pipeline',
    iconName: 'Layers',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'big-data',
    level: 'Building With',
    description: 'Statistical aggregation, trend exploration, delay root-cause analysis, and operational reporting.',
    badge: 'Analytics',
    iconName: 'BarChart3',
  },
];

export const MAIZE_DISEASE_CLASSES: DiseaseClass[] = [
  {
    id: 'northern-leaf-blight',
    name: 'Northern Leaf Blight',
    amharicName: 'የሰሜን ቅጠል በሽታ (Northern Leaf Blight)',
    scientificName: 'Exserohilum turcicum',
    severity: 'High',
    visualFeatures: 'Long, cigar-shaped grayish-green lesions that gradually turn tan or brown.',
    sampleSymptoms: [
      'Elongated, elliptical tan lesions on lower leaves progressing upward',
      'Lesions measure 2.5 to 15 cm with darker fungal spore development in humid conditions',
      'Severe premature leaf death reducing photosynthetic capacity and kernel fill',
    ],
    advisoryEnglish:
      'Recommended immediate action: Rotate crops with non-grass species. Plant resistant hybrid varieties if available in your woreda. Avoid excessive overhead moisture and consider registered fungicide applications if lesions reach the ear leaf before tasseling.',
    advisoryAmharic:
      'የሚመከር እርምጃ፡ ሰብልን ከሌሎች የሰብል ዝርያዎች ጋር ማፈራረቅ። በወረዳዎ የሚገኙ በሽታን የሚቋቋሙ ዝርያዎችን መጠቀም። ከመጠን በላይ እርጥበትን መከላከል እና አስፈላጊ ሆኖ ሲገኝ በግብርና ባለሙያ የተፈቀደ ፀረ-ፈንገስ መድኃኒት መጠቀም።',
    confidenceScore: 0.94,
  },
  {
    id: 'common-rust',
    name: 'Common Rust',
    amharicName: 'የበቆሎ ዝገት በሽታ (Common Rust)',
    scientificName: 'Puccinia sorghi',
    severity: 'Medium',
    visualFeatures: 'Small, circular to elongate golden-brown to cinnamon pustules scattered on both leaf surfaces.',
    sampleSymptoms: [
      'Powdery reddish-brown pustules that rupture the leaf epidermis',
      'Abundant spore release appearing on both upper and lower leaf surfaces',
      'Leaf chlorosis and drying under cooler, humid environmental conditions',
    ],
    advisoryEnglish:
      'Recommended action: Early detection is key. In highland and cooler climates, monitor weekly. Practice early planting to escape peak spore dispersal. For smallholder plots, resistant seed selection provides the best sustainable control.',
    advisoryAmharic:
      'የሚመከር እርምጃ፡ ቀደም ብሎ መዝራት የበሽታውን ስርጭት ይቀንሳል። ማሳን በየሳምንቱ መከታተል እና በሽታን የሚቋቋሙ የተመረጡ የበቆሎ ዝርያዎችን መጠቀም ዘላቂ መፍትሔ ይሰጣል።',
    confidenceScore: 0.91,
  },
  {
    id: 'gray-leaf-spot',
    name: 'Gray Leaf Spot',
    amharicName: 'የግራጫ ቅጠል ነጠብጣብ በሽታ (Gray Leaf Spot)',
    scientificName: 'Cercospora zeae-maydis',
    severity: 'High',
    visualFeatures: 'Narrow, rectangular lesions strictly restricted between leaf veins with sharp parallel borders.',
    sampleSymptoms: [
      'Rectangular tan or gray lesions strictly delimited by secondary leaf veins',
      'Lesions appear on lower canopy first, spreading upward during warm, overcast days',
      'Causes rapid blighting of entire leaves under prolonged relative humidity',
    ],
    advisoryEnglish:
      'Recommended action: Incorporate crop debris into soil after harvest to accelerate residue breakdown. Maintain adequate plant spacing for canopy ventilation. Follow crop rotation schedules with legumes.',
    advisoryAmharic:
      'የሚመከር እርምጃ፡ ከአጨዳ በኋላ የተረፈውን ሰብል በአፈር ውስጥ ማቀላቀል። የአየር ዝውውር እንዲኖር ተገቢውን የችግኝ ርቀት መጠበቅ። ከጥራጥሬ ሰብሎች ጋር ማፈራረቅ።',
    confidenceScore: 0.93,
  },
  {
    id: 'healthy',
    name: 'Healthy Maize Leaf',
    amharicName: 'ጤናማ የበቆሎ ቅጠል (Healthy)',
    scientificName: 'Zea mays (Normal)',
    severity: 'None (Healthy)',
    visualFeatures: 'Uniform green pigmentation, intact leaf veins, no necrotic lesions or fungal pustules.',
    sampleSymptoms: [
      'Vibrant deep green foliage with consistent chlorophyll distribution',
      'Smooth leaf blade margins without discoloration or irregular spots',
      'Healthy photosynthetic tissue supporting normal vegetative and reproductive stages',
    ],
    advisoryEnglish:
      'Optimal status: Crop is currently demonstrating healthy vegetative vigor. Continue standard nutrient management, regular weed control, and systematic field scouting every 7-10 days.',
    advisoryAmharic:
      'ጥሩ ሁኔታ፡ ሰብሉ በጥሩ ጤንነት ላይ ይገኛል። የተለመደውን የተመጣጠነ ምግብ አቅርቦት፣ የአረም ቁጥጥር እና የየሳምንቱን የማሳ ፍተሻ ይቀጥሉ።',
    confidenceScore: 0.98,
  },
];

export const FEATURED_PROJECT: Project = {
  id: 'maize-disease-detection',
  projectNumber: '01',
  title: 'AI-Based Maize Disease Detection System',
  tagline:
    'An AI-powered web platform designed to assist Ethiopian smallholder maize farmers in identifying crop diseases and receiving actionable agronomic advisory.',
  category: 'ai-ml',
  status: 'Completed Project',
  isFeatured: true,
  description:
    'An AI-powered web application designed to help Ethiopian smallholder maize farmers identify maize leaf diseases and receive practical advisory information.',
  longDescription:
    'The project combines machine learning, computer vision, explainable AI, backend APIs, database systems, weather information, SMS alerts, and farmer-focused functionality. Developed with Ethiopian users in mind and includes English and Amharic support concepts for 4 major conditions: Northern Leaf Blight, Common Rust, Gray Leaf Spot, and Healthy foliage.',
  technologies: [
    'Python',
    'TensorFlow',
    'MobileNetV2',
    'Flask',
    'React',
    'PostgreSQL',
    'REST API',
    'JWT',
    'Grad-CAM',
    'Weather API',
    'SMS integration',
    'PWA / offline-first concepts',
  ],
  keyFeatures: [
    'Accurate classification across 4 classes: Northern Leaf Blight, Common Rust, Gray Leaf Spot, and Healthy foliage',
    'Explainable AI via Grad-CAM: generates visual attention heatmaps so users can verify where the model detected pathology',
    'Dual-Language Advisory: actionable treatment guidelines prepared in both English and Amharic for accessibility',
    'Lightweight Inference: utilizes MobileNetV2 architecture fine-tuned via transfer learning for resource-constrained setups',
    'Offline-First & SMS Architecture: designed with progressive caching and SMS alert gateway concepts for remote areas',
    'Structured Advisory: actionable guidance covering crop rotation, moisture control, and resistant seed selection',
  ],
  architectureHighlights: [
    'Client Layer: React interface with camera capture, image upload, and offline cache',
    'Inference Service: Flask REST API running TensorFlow model pipeline with preprocessing & normalization',
    'Explainability Engine: Saliency map generator calculating gradients at the final convolutional layer of MobileNetV2',
    'Data Store: PostgreSQL tracking historical scans, geographic woreda tags, and disease prevalence records',
  ],
  githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME_HERE/maize-disease-detection',
  liveDemoUrl: '#maize-interactive-demo',
  isGithubPlaceholder: true,
  isDemoPlaceholder: false,
  imageAlt: 'AI-Based Maize Disease Detection System interface mockup showing leaf scan and Grad-CAM heatmap',
  previewType: 'maize-demo',
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'water-quality-prediction',
    projectNumber: '02',
    title: 'Water Quality Prediction AI',
    tagline: 'An AI/ML analytical project focused on predicting water safety and quality parameters using data-driven techniques.',
    category: 'ai-ml',
    status: 'Completed Project',
    description:
      'A machine learning project designed to evaluate physicochemical water metrics and predict potability indices.',
    longDescription:
      'Focuses on applying data preprocessing, feature correlation, and supervised machine learning algorithms to assess water potability and quality indices. Includes interactive parameter testing, data visualization graphs, and editable placeholders for custom dataset integration.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Data Visualization', 'Pandas', 'NumPy'],
    keyFeatures: [
      'Predictive modeling pipeline for water quality and potability parameter evaluation',
      'Feature analysis across key indicators such as pH, hardness, solids, and chloramines',
      'Interactive prediction simulator with live parameter adjustment and confidence gauges',
      'Data visualization plots showing parameter correlation and distribution distributions',
    ],
    architectureHighlights: [
      'Data Cleansing & Imputation: robust median handling for missing laboratory sensor values',
      'Supervised Classification: evaluated decision tree and ensemble baselines for potability scoring',
      'Interactive UI: responsive input range sliders enabling real-time diagnostic evaluation',
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME_HERE/water-quality-prediction-ai',
    liveDemoUrl: '#project-card-water-quality-prediction',
    isGithubPlaceholder: true,
    isDemoPlaceholder: true,
    imageAlt: 'Water Quality Prediction AI analytical interface and parameter dashboard preview',
    previewType: 'water-quality',
  },
  {
    id: 'airline-delay-analysis',
    projectNumber: '03',
    title: 'Airline Delay Analysis',
    tagline: 'A Big Data analytics project processing large-scale flight performance and delay patterns using distributed computing.',
    category: 'big-data',
    status: 'Completed Project',
    description:
      'Demonstrates the analysis of airline delay data using Big Data technologies like Hadoop and Apache Spark.',
    longDescription:
      'Engineered to explore distributed data processing architectures. The project models the end-to-end pipeline: Raw Flight Data Ingestion → Hadoop HDFS storage → Apache Spark parallel distributed transformations → Delay trend analysis → Actionable operational insights.',
    technologies: ['Hadoop', 'Apache Spark', 'Big Data', 'Data Processing', 'Data Analysis', 'Python'],
    keyFeatures: [
      'Distributed data pipeline demonstrating DATA → HADOOP → SPARK → ANALYSIS → INSIGHTS flow',
      'Identification of delay causes across weather, carrier operations, and air traffic control',
      'Batch processing workflow utilizing Spark resilient distributed datasets (RDDs) and DataFrames',
      'Visual analytics dashboard mapping temporal delay patterns and route bottleneck metrics',
    ],
    architectureHighlights: [
      'HDFS Partitioning: organized datasets chronologically and geographically by airport origin codes',
      'Spark Transformations: in-memory filtering and group-by aggregations bypassing high-latency disk I/O',
      'Analytics Output: structured summary tables highlighting peak congestion hours and seasonal bottlenecks',
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME_HERE/airline-delay-analysis',
    liveDemoUrl: '#project-card-airline-delay-analysis',
    isGithubPlaceholder: true,
    isDemoPlaceholder: true,
    imageAlt: 'Airline Delay Big Data pipeline diagram showing Hadoop and Apache Spark architecture',
    previewType: 'airline-delay',
  },
  {
    id: 'electronics-repair-website',
    projectNumber: '04',
    title: 'Electronics Repair Website',
    tagline: 'A responsive, customer-friendly service website for consumer electronics diagnostics and repair management.',
    category: 'web',
    status: 'Completed Project',
    description:
      'A practical business website focused on mobile-first responsive UI, service presentation, and customer intake workflows.',
    longDescription:
      'Designed as a real-world web development solution for device repair shops. Features intuitive service catalogs (smartphones, laptops, motherboards), diagnostic inquiry forms, responsive touch-first navigation, and clear repair progress communication.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'HTML5/CSS3', 'Mobile-First'],
    keyFeatures: [
      'Responsive, mobile-first design optimized for fast touch interaction and readability',
      'Comprehensive service catalog detailing device diagnostics, screen, battery, and logic board repairs',
      'Customer-friendly repair inquiry form with validation and instant status feedback',
      'Accessible layout adhering to WCAG standards with clean dark and light presentation',
    ],
    architectureHighlights: [
      'Component Architecture: modular pricing tables, device selector tabs, and testimonial showcase',
      'Accessible Forms: labeled inputs with client-side validation and immediate error messaging',
      'Responsive Fluid Grid: optimized typography scaling across 320px to 1920px viewports',
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME_HERE/electronics-repair-website',
    liveDemoUrl: '#project-card-electronics-repair-website',
    isGithubPlaceholder: true,
    isDemoPlaceholder: true,
    imageAlt: 'Electronics Repair Website responsive layout and service catalog preview',
    previewType: 'electronics',
  },
  {
    id: 'photography-studio-website',
    projectNumber: '05',
    title: 'Photography Studio Website',
    tagline: 'An elegant, modern visual portfolio and booking showcase for creative photography studios.',
    category: 'web',
    status: 'Completed Project',
    description:
      'A modern visual design project featuring responsive layouts, a gallery-style interface, and service presentation.',
    longDescription:
      'Engineered to celebrate visual storytelling with high-contrast minimalist typography, responsive masonry photo galleries, service packages, and seamless client consultation navigation.',
    technologies: ['React', 'Tailwind CSS', 'Modern UI/UX', 'Gallery Layouts', 'Responsive Design', 'JavaScript'],
    keyFeatures: [
      'Curated gallery-style presentation with responsive masonry grid and lightbox preview concepts',
      'Service package presentation detailing portrait, commercial, and event photography sessions',
      'Smooth transitions, subtle image hover zoom (1.04x scale), and refined typography hierarchy',
      'High-contrast accessible theme compatibility supporting both light and dark visual aesthetics',
    ],
    architectureHighlights: [
      'Masonry Layout: CSS Grid and Flexbox hybrid handling diverse image aspect ratios cleanly',
      'Performance Optimization: lazy-loaded thumbnail placeholders and smooth CSS hover transitions',
      'Editorial Typography: elegant Space Grotesk display headings paired with high-legibility body type',
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME_HERE/photography-studio-website',
    liveDemoUrl: '#project-card-photography-studio-website',
    isGithubPlaceholder: true,
    isDemoPlaceholder: true,
    imageAlt: 'Photography Studio Website gallery showcase and booking interface preview',
    previewType: 'photography',
  },
];

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'rest-apis',
    title: 'REST API & Backend Services',
    description:
      'Designing clean, maintainable HTTP APIs with Python & Flask. Handling query parameters, structured JSON responses, input sanitization, and predictable HTTP status codes.',
    practicalExample:
      'Developed REST endpoints for the Maize Disease Detection backend to receive base64 leaf imagery and return structured classification JSON.',
    tools: ['Python', 'Flask', 'REST Principles', 'JSON'],
    iconName: 'Server',
  },
  {
    id: 'database-systems',
    title: 'Relational Database Design',
    description:
      'Structuring normalized relational schemas with PostgreSQL. Writing efficient SQL queries, defining foreign key constraints, managing migrations, and indexing high-traffic columns.',
    practicalExample:
      'Designed schemas for repair tracking and capstone agricultural logs with multi-table joins and data integrity constraints.',
    tools: ['PostgreSQL', 'SQL', 'Schema Modeling', 'Data Integrity'],
    iconName: 'Database',
  },
  {
    id: 'ai-inference',
    title: 'AI & Computer Vision Integration',
    description:
      'Bridging machine learning models into user-facing web applications. Preprocessing images, executing TensorFlow/MobileNetV2 inference, and rendering Grad-CAM visual heatmaps.',
    practicalExample:
      'Fine-tuned a convolutional neural network on maize leaf disease datasets and piped inference results into a live web application.',
    tools: ['TensorFlow', 'MobileNetV2', 'Grad-CAM', 'NumPy'],
    iconName: 'BrainCircuit',
  },
  {
    id: 'frontend-apps',
    title: 'Accessible Responsive Web UIs',
    description:
      'Building performant, mobile-first interfaces using React and modern CSS. Ensuring semantic HTML, keyboard accessibility (a11y), clear contrast ratios, and fluid layouts.',
    practicalExample:
      'Engineered this portfolio and student client applications adhering strictly to WCAG 2.2 AA standards and responsive breakpoints.',
    tools: ['React', 'JavaScript', 'HTML5', 'Modern CSS', 'WCAG AA'],
    iconName: 'Layout',
  },
  {
    id: 'authentication',
    title: 'Authentication & Session Security',
    description:
      'Implementing secure stateless authentication flows with JSON Web Tokens (JWT). Handling password hashing, authorization middleware, and protected API routes.',
    practicalExample:
      'Built token-based authorization filters to protect technician endpoints and user data in full-stack project prototypes.',
    tools: ['JWT', 'Password Hashing', 'Security Practices', 'Route Guards'],
    iconName: 'ShieldCheck',
  },
  {
    id: 'pwa-offline',
    title: 'PWA & Low-Bandwidth Considerations',
    description:
      'Applying offline-first concepts for resource-constrained environments. Understanding service workers, asset caching, and graceful degradation during network drops.',
    practicalExample:
      'Architecting the agricultural diagnostic tool so farmers can view previously cached advisory guides even when field cellular signals drop.',
    tools: ['PWA Concepts', 'Caching Strategies', 'Mobile-First Design'],
    iconName: 'WifiOff',
  },
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    id: 'stage-01-education',
    phase: 'Stage 01',
    period: 'Year 1 - Year 2',
    title: 'Software Engineering Education',
    focus: 'Core Computer Science Foundations & Algorithmic Problem Solving',
    summary:
      'Began 5-year Software Engineering degree in Ethiopia, mastering algorithmic complexity, object-oriented design, data structures, and computer architecture principles.',
    achievements: [
      'Mastered core algorithms (sorting, graph traversals, dynamic programming) and memory structures',
      'Applied object-oriented analysis & design (OOAD) patterns and modular software design',
      'Developed strong algorithmic thinking and debugging discipline',
    ],
    technologiesUsed: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Git'],
  },
  {
    id: 'stage-02-web-dev',
    phase: 'Stage 02',
    period: 'Year 2 - Year 3',
    title: 'Web Development',
    focus: 'Responsive Frontend Engineering & Modern UI Design',
    summary:
      'Transitioned into practical web applications. Built mobile-first client experiences, component architecture with React, modern CSS systems, and semantic HTML.',
    achievements: [
      'Engineered responsive web applications tested across mobile, tablet, and widescreen displays',
      'Built modular, component-driven user interfaces using React, JavaScript, and Tailwind CSS',
      'Implemented accessibility (a11y) standards, keyboard navigation, and responsive layouts',
    ],
    technologiesUsed: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS'],
  },
  {
    id: 'stage-03-backend',
    phase: 'Stage 03',
    period: 'Year 3 - Year 4',
    title: 'Backend & API Development',
    focus: 'RESTful Architecture, Token Security & Relational Databases',
    summary:
      'Developed server-side services with Python & Flask, engineered normalized relational databases in PostgreSQL, and secured API endpoints with JWT authentication.',
    achievements: [
      'Designed clean REST APIs with structured JSON responses, input sanitization, and error contracts',
      'Engineered normalized 3NF PostgreSQL database schemas with foreign key integrity',
      'Implemented stateless authentication with JSON Web Tokens (JWT) and route guards',
    ],
    technologiesUsed: ['Python', 'Flask', 'PostgreSQL', 'REST APIs', 'JWT', 'SQLAlchemy'],
  },
  {
    id: 'stage-04-ai-ml',
    phase: 'Stage 04',
    period: 'Year 4',
    title: 'AI / Machine Learning',
    focus: 'Supervised Learning, Deep Learning & Computer Vision',
    summary:
      'Expanded into machine learning and computer vision. Researched convolutional neural networks, transfer learning, data preprocessing, and model evaluation.',
    achievements: [
      'Trained and fine-tuned deep learning models using TensorFlow for image classification',
      'Implemented data augmentation, normalization, and tensor manipulation pipelines',
      'Developed predictive ML prototypes such as the Water Quality Prediction system',
    ],
    technologiesUsed: ['Python', 'TensorFlow', 'Computer Vision', 'NumPy', 'Pandas', 'Scikit-Learn'],
  },
  {
    id: 'stage-05-big-data',
    phase: 'Stage 05',
    period: 'Year 4 - Year 5',
    title: 'Big Data',
    focus: 'Distributed Computing, Batch Processing & Scalable Data Pipelines',
    summary:
      'Explored distributed computing architectures for large-scale datasets. Studied Hadoop HDFS storage models, MapReduce paradigms, and Apache Spark transformations.',
    achievements: [
      'Engineered distributed data processing workflow for the Airline Delay Analysis project',
      'Demonstrated complete DATA → HADOOP → SPARK → ANALYSIS → INSIGHTS pipeline architecture',
      'Analyzed delay root causes across massive flight performance logs using distributed DataFrames',
    ],
    technologiesUsed: ['Hadoop', 'Apache Spark', 'HDFS', 'Distributed Computing', 'Data Pipelines'],
  },
  {
    id: 'stage-06-maize-ai',
    phase: 'Stage 06',
    period: 'Year 5 (Final Year Capstone)',
    title: 'AI-Based Maize Disease Detection System',
    focus: 'Full-Stack Integration, Grad-CAM Explainability & Agronomic Advisory',
    summary:
      'Engineered completed flagship capstone project: a deep learning leaf disease diagnostic system utilizing MobileNetV2, Grad-CAM saliency heatmaps, and bilingual English/Amharic advisory for Ethiopian farmers.',
    achievements: [
      'Integrated 4-class foliar disease classification with visual attention heatmaps via Grad-CAM',
      'Developed end-to-end full-stack application connecting React client, Flask inference server, and PostgreSQL',
      'Curated bilingual agronomic advisory guidelines and designed offline-first PWA caching concepts',
    ],
    technologiesUsed: ['Python', 'TensorFlow', 'MobileNetV2', 'Grad-CAM', 'Flask', 'React', 'PostgreSQL'],
  },
  {
    id: 'stage-07-professional-dev',
    phase: 'Stage 07',
    period: 'Present & Approaching Graduation',
    title: 'Professional Software Development',
    focus: 'Building Practical Systems & Real-World Impact',
    summary:
      'Approaching graduation with one semester remaining. Actively seeking junior software developer roles, engineering internships, and collaborative software projects.',
    achievements: [
      'Assembled comprehensive portfolio demonstrating real engineering across AI, Backend, Web, and Big Data',
      'Refined software engineering craftsmanship, clean architecture, and thorough documentation',
      'Ready to contribute to practical, high-impact software engineering teams and products',
    ],
    technologiesUsed: ['Full-Stack Engineering', 'System Architecture', 'Clean Code', 'Git/GitHub', 'Collaboration'],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Science (B.Sc.) in Software Engineering',
  field: 'Software Engineering',
  currentYear: '5th Year Student (Final Year)',
  status: 'Completing final year — 1 semester remaining before graduation',
  location: 'Ethiopia',
  expectedGraduation: 'Approaching Graduation',
  overview:
    'Pursuing a comprehensive 5-year Software Engineering degree covering computer science foundations, software architecture, full-stack development, database engineering, and applied artificial intelligence.',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems & SQL',
    'Object-Oriented Analysis & Design',
    'Software Architecture & Design Patterns',
    'Web Programming & Technologies',
    'Operating Systems & Networking',
    'Artificial Intelligence & Machine Learning',
    'Software Quality Assurance & Testing',
    'Software Project Management',
    'Human-Computer Interaction (HCI)',
  ],
  academicFocus: [
    'Backend API design and database scalability',
    'Applied machine learning & computer vision for social impact',
    'Architectural best practices and code maintainability',
    'Usability and accessibility for diverse linguistic user groups',
  ],
};
