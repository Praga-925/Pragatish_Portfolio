import { Project } from "@/types";

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ai-monitoring-anomaly-detection",
    slug: "ai-monitoring-anomaly-detection",
    title: "AI-Powered User Monitoring & Anomaly Detection",
    subtitle: "Camera-free system monitoring with alerts",
    summary: "A personal computer monitoring system that learns normal activity, tracks system metrics, records threat events, and provides a Flask dashboard with email alerts.",
    description: "Built a camera-free monitoring project that observes process and resource activity, classifies suspicious behavior into risk levels, and exposes logs and metrics through a local dashboard.",
    category: "Cybersecurity",
    role: "Developer",
    status: "Completed",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-8",
    imageBg: "from-cyan-950/40 via-zinc-900 to-black",
    media: {
      cover: "/projects/ai-monitor/cover.jpg",
      thumbnail: "/projects/ai-monitor/cover.jpg",
      gallery: ["/projects/ai-monitor/cover.jpg"],
      architecture: ["/projects/ai-monitor/cover.jpg"]
    },
    technicalHighlights: [
      "Baseline behavior learning",
      "Process and resource monitoring",
      "Flask dashboard",
      "Threat log export",
      "Email notifications",
      "System metrics charts"
    ],
    techDomains: [
      { domain: "Artificial Intelligence", items: ["Behavioral anomaly detection"] },
      { domain: "Backend", items: ["Python", "Flask dashboard"] },
      { domain: "Security", items: ["Process monitoring", "Risk classification"] },
      { domain: "Tools", items: ["Email alerts", "CSV export"] }
    ],
    architectureSummary: "System activity and metrics -> baseline learning and threat classification -> dashboard logs, charts, and email notifications.",
    architectureLayers: [
      { layer: "Security Observer", name: "Activity Monitor", description: "Tracks running processes, resource usage, and suspicious behavior signals." },
      { layer: "Backend", name: "Flask Dashboard API", description: "Serves system status, metrics, threat history, and export endpoints." },
      { layer: "Deployment", name: "Local Monitoring Service", description: "Runs the monitoring process and dashboard on the user's computer." }
    ],
    engineeringDecisions: [
      {
        title: "Learning a personal baseline",
        whyChosen: "The project first observes normal activity before evaluating deviations.",
        alternativeConsidered: "Static rules alone.",
        tradeOffAccepted: "A learned baseline needs an initial observation period and careful threshold tuning.",
        futureImprovement: "Evaluate additional behavior features and reduce false positives."
      }
    ],
    tags: ["Isolation Forest", "Windows Events", "Flask API", "MongoDB", "Email Alerts", "Process Observer"],
    github: "https://github.com/Praga-925/AI-Powered-User-Monitoring-Anomaly-Detection",
    problemStatement: "Personal computers need a lightweight way to observe activity, understand normal behavior, and surface suspicious events.",
    solutionOverview: "Built a monitoring service with a baseline learning phase, threat logs, a dashboard, and configurable notifications.",
    technicalChallenges: [
      "Separating normal background activity from events worth surfacing.",
      "Presenting monitoring data clearly through a local dashboard."
    ],
    outcomes: [
      "Delivered a functional monitoring workflow with dashboard endpoints and alert handling.",
      "Added threat history, metrics charts, and CSV export paths described by the project."
    ],
    lessonsLearned: [
      "Monitoring systems need a clear learning phase and explicit thresholds.",
      "Notification controls matter when a system observes continuously."
    ]
  },
  {
    id: "edna-marine-biodiversity",
    slug: "edna-marine-biodiversity",
    title: "eDNA – Marine Biodiversity Intelligence System",
    subtitle: "AI-assisted analysis of marine environmental DNA",
    summary: "A marine biodiversity platform for processing DNA sequences from water samples, classifying marine species, and calculating biodiversity indices.",
    description: "Built an AI-assisted eDNA analysis workflow with sequence preprocessing, DNABERT-based embeddings, species classification, confidence scoring, and a web dashboard for exploring results.",
    category: "AI & ML",
    role: "AI & Data Developer",
    status: "Completed",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-4",
    imageBg: "from-blue-950/40 via-zinc-900 to-black",
    media: {
      cover: "/projects/edna/cover.jpg",
      thumbnail: "/projects/edna/cover.jpg",
      gallery: ["/projects/edna/cover.jpg"],
      architecture: ["/projects/edna/cover.jpg"]
    },
    technicalHighlights: [
      "Marine Biodiversity Analysis",
      "DNABERT sequence understanding",
      "Species confidence scoring",
      "Biodiversity indices",
      "FASTA/FASTQ processing",
      "Interactive web dashboard"
    ],
    techDomains: [
      { domain: "Artificial Intelligence", items: ["Taxonomic Sequence Classifier", "k-Mer Feature Encoding"] },
      { domain: "Machine Learning", items: ["DNABERT", "PyTorch classifier"] },
      { domain: "Frontend", items: ["Web dashboard", "Plotly charts"] },
      { domain: "Backend", items: ["Flask API", "BioPython"] },
      { domain: "Tools", items: ["Python", "Pandas", "NumPy"] }
    ],
    architectureSummary: "FASTA/FASTQ input -> k-mer tokenization and DNABERT embeddings -> species classifier -> biodiversity dashboard and report export.",
    architectureLayers: [
      { layer: "Frontend", name: "Biodiversity Dashboard", description: "Presents species abundance, taxonomy, diversity indices, and exportable reports." },
      { layer: "Backend", name: "Sequence Processing API", description: "Validates FASTA/FASTQ inputs and coordinates analysis jobs." },
      { layer: "AI Model", name: "DNABERT Species Classifier", description: "Creates sequence embeddings and predicts species labels with confidence scores." },
      { layer: "Deployment", name: "Python Web Application", description: "Provides a local workflow for running and exploring eDNA analysis." }
    ],
    engineeringDecisions: [
      {
        title: "Sequence representations for classification",
        whyChosen: "K-mer tokenization and DNABERT embeddings provide fixed-size representations for downstream classification.",
        alternativeConsidered: "Manual sequence matching alone.",
        tradeOffAccepted: "The model pipeline requires more compute and data preparation than simple matching.",
        futureImprovement: "Improve validation across more marine species and samples."
      }
    ],
    tags: ["Biodiversity Analysis", "AI Classification", "Environmental Genomics", "eDNA Data"],
    github: "https://github.com/Praga-925/eDNA---Marine-Biodiversity-Intelligence-System",
    problemStatement: "Manual biodiversity surveys are time-consuming, invasive, and difficult to scale across marine environments.",
    solutionOverview: "Built a workflow that turns environmental DNA sequences into species predictions, biodiversity indices, and downloadable analysis results.",
    technicalChallenges: [
      "Preparing noisy and incomplete biological sequence data.",
      "Making model outputs understandable through a research-oriented dashboard."
    ],
    outcomes: [
      "Implemented an end-to-end eDNA analysis workflow.",
      "Documented a dataset and pipeline covering 67 filtered taxonomic classes."
    ],
    lessonsLearned: [
      "Domain-specific preprocessing and clear confidence reporting are essential for biological ML tools."
    ]
  },
  {
    id: "2d-to-3d-image-converter",
    slug: "2d-to-3d-image-converter",
    title: "2D to 3D Image Converter & Mesh Generator",
    subtitle: "Monocular Depth Estimation & 3D Surface Reconstruction",
    summary: "Computer vision application utilizing TripoSR and deep depth estimation models to convert static 2D RGB images into 3D meshes, texture maps, and spatial point clouds.",
    description: "Developed a vision AI pipeline estimating per-pixel depth from single 2D photos and generating interactive 3D point cloud meshes. Demonstrates computer vision and 3D surface reconstruction techniques.",
    category: "Computer Vision",
    role: "Computer Vision Developer",
    status: "Completed",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-4",
    imageBg: "from-purple-950/40 via-zinc-900 to-black",
    media: {
      cover: "/projects/image-3d/cover.jpg",
      thumbnail: "/projects/image-3d/cover.jpg",
      gallery: ["/projects/image-3d/cover.jpg"],
      architecture: ["/projects/image-3d/cover.jpg"]
    },
    technicalHighlights: [
      "TripoSR Integration",
      "Computer Vision",
      "Mesh Reconstruction",
      "Texture Generation",
      "AI Inference Pipeline",
      "3D Point Cloud Export"
    ],
    techDomains: [
      { domain: "Computer Vision", items: ["TripoSR 3D Model", "Monocular Depth Estimation", "OpenCV"] },
      { domain: "Artificial Intelligence", items: ["PyTorch Vision Pipeline", "CUDA Inference"] },
      { domain: "Backend", items: ["Python 3.10", "Open3D Mesh Processor"] },
      { domain: "Tools", items: ["NumPy", "Trimesh", "OBJ/STL Exporter"] }
    ],
    architectureSummary: "2D RGB Image input -> TripoSR deep vision neural model -> Depth estimation & vertex extrude -> Open3D mesh generation -> 3D OBJ output file.",
    architectureLayers: [
      { layer: "Frontend", name: "Image Upload & 3D Viewer", description: "Interface for uploading 2D photos and viewing reconstructed 3D meshes." },
      { layer: "AI Model", name: "TripoSR Reconstruction Neural Net", description: "Fast 3D feed-forward model predicting 3D mesh geometry from a single photo." },
      { layer: "Backend", name: "Mesh & Texture Processor", description: "Cleans vertex noise, applies texture mapping, and exports standard 3D file formats." }
    ],
    engineeringDecisions: [
      {
        title: "Leveraging TripoSR Model Architecture",
        whyChosen: "TripoSR provides single-image 3D reconstruction in under 0.5 seconds on modern GPU hardware.",
        alternativeConsidered: "Classic multi-view stereo Structure-from-Motion (SfM).",
        tradeOffAccepted: "Single-image deep learning inference requires GPU acceleration but eliminates multi-camera requirements.",
        futureImprovement: "Implement background removal segmentation pre-steps to enhance mesh boundary sharpness."
      }
    ],
    tags: ["TripoSR", "Computer Vision", "3D Mesh", "Texture Generation", "AI Inference"],
    github: "https://github.com/Praga-925/2D-to-3D-Image-Convert",
    problemStatement: "Creating 3D digital models manually using 3D modeling software is labor-intensive and requires specialized design skills.",
    solutionOverview: "Integrated TripoSR neural reconstruction to generate textured 3D meshes automatically from ordinary 2D photos.",
    technicalChallenges: [
      "Handling depth distortion artifacts around thin object boundaries.",
      "Optimizing point cloud vertex density for smooth browser preview rendering."
    ],
    outcomes: [
      "Successfully rendered textured 3D OBJ meshes from standard 2D image uploads.",
      "Delivered an engaging demonstration of vision AI capabilities."
    ],
    lessonsLearned: [
      "Modern feed-forward 3D vision models make spatial computing accessible without requiring specialized hardware arrays."
    ]
  },
  {
    id: "phishing-email-detection",
    slug: "phishing-email-detection",
    title: "Phishing Email Detection using Machine Learning",
    subtitle: "NLP Content Classifier & Email Feature Extraction",
    summary: "Machine learning email security detector analyzing text NLP features (TF-IDF) and domain metadata to classify phishing attempts.",
    description: "Designed a cybersecurity classifier extracting TF-IDF n-gram text features and structural indicators from email headers and body text to flag phishing threats.",
    category: "Cybersecurity",
    role: "ML Developer",
    status: "Completed",
    featured: false,
    bentoSpan: "col-span-12 lg:col-span-8",
    imageBg: "from-emerald-950/40 via-zinc-900 to-black",
    media: {
      cover: "/projects/phishing/cover.jpg",
      thumbnail: "/projects/phishing/cover.jpg",
      gallery: ["/projects/phishing/cover.jpg"],
      architecture: ["/projects/phishing/cover.jpg"]
    },
    technicalHighlights: [
      "TF-IDF Feature Extraction",
      "XGBoost Classifier",
      "Streamlit UI",
      "Classification Pipeline",
      "Email Feature Extraction",
      "NLP Text Processing"
    ],
    techDomains: [
      { domain: "Machine Learning", items: ["XGBoost Classifier", "Scikit-Learn"] },
      { domain: "Cybersecurity", items: ["Email Header Analysis", "Phishing Indicators"] },
      { domain: "Frontend", items: ["Streamlit Interactive App"] },
      { domain: "Tools", items: ["Python", "NLTK", "TF-IDF Vectorizer"] }
    ],
    architectureSummary: "Email text input -> NLTK sanitization -> TF-IDF Vectorization -> XGBoost Classification Model -> Streamlit Verdict Dashboard.",
    architectureLayers: [
      { layer: "Frontend", name: "Streamlit Threat Analyzer", description: "Simple UI for pasting email text and receiving instant classification verdicts." },
      { layer: "Backend", name: "NLP Preprocessing & Vectorizer", description: "Cleans text, removes stop words, and extracts TF-IDF n-gram word features." },
      { layer: "AI Model", name: "XGBoost Machine Learning Model", description: "Gradient boosting classifier trained on phishing and legitimate email datasets." }
    ],
    engineeringDecisions: [
      {
        title: "XGBoost Classifier over Logistic Regression",
        whyChosen: "XGBoost captures complex non-linear feature interactions between specific urgency keywords and structural links.",
        alternativeConsidered: "Naive Bayes Classifier.",
        tradeOffAccepted: "Slightly higher training overhead compensated by significantly higher classification accuracy.",
        futureImprovement: "Integrate fine-tuned DistilBERT transformer models to better analyze context and semantics."
      }
    ],
    tags: ["TF-IDF", "XGBoost", "Streamlit", "Classification Pipeline", "Email Security"],
    github: "https://github.com/Praga-925/Phishing-Email-Detection-using-Machine-Learning",
    problemStatement: "Social engineering and phishing emails deceive users by mimicking trusted sender organizations.",
    solutionOverview: "Built an NLP machine learning classifier pipeline identifying deceptive text patterns and suspicious payload attributes.",
    technicalChallenges: [
      "Pre-processing HTML formatting noise and obfuscated characters within email bodies."
    ],
    outcomes: [
      "Achieved strong classification accuracy on benchmark email datasets.",
      "Deployed a Streamlit demo for instant threat evaluation."
    ],
    lessonsLearned: [
      "TF-IDF vectorization remains a fast and effective baseline for text security classification tasks."
    ]
  },
  {
    id: "employee-salary-prediction",
    slug: "employee-salary-prediction",
    title: "Employee Salary Prediction using LightGBM",
    subtitle: "Predictive Analytics & Feature Engineering Dashboard",
    summary: "Predictive machine learning application utilizing LightGBM gradient boosting regression to forecast salary packages based on candidate skills, experience, and education.",
    description: "Developed a predictive analytics pipeline performing data cleaning, categorical feature encoding, hyperparameter optimization, and interactive visualization for compensation forecasting.",
    category: "Data Science",
    role: "Data Science Developer",
    status: "Completed",
    featured: false,
    bentoSpan: "col-span-12",
    imageBg: "from-amber-950/30 via-zinc-900 to-black",
    media: {
      cover: "/projects/salary/cover.jpg",
      thumbnail: "/projects/salary/cover.jpg",
      gallery: ["/projects/salary/cover.jpg"],
      architecture: ["/projects/salary/cover.jpg"]
    },
    technicalHighlights: [
      "LightGBM Gradient Boosting",
      "Regression Model",
      "Feature Engineering",
      "Data Visualization",
      "Streamlit Dashboard",
      "Exploratory Data Analysis"
    ],
    techDomains: [
      { domain: "Machine Learning", items: ["LightGBM Regressor", "Scikit-Learn"] },
      { domain: "Frontend", items: ["Streamlit UI", "Seaborn & Matplotlib Charts"] },
      { domain: "Tools", items: ["Python", "Pandas", "NumPy"] }
    ],
    architectureSummary: "User input features (Experience, Tech Stack, Education) -> Target encoding -> LightGBM Regressor -> Streamlit Prediction Dashboard.",
    architectureLayers: [
      { layer: "Frontend", name: "Streamlit Salary Calculator", description: "Interactive form for selecting developer profile attributes and viewing predicted salary ranges." },
      { layer: "Backend", name: "Feature Encoding Pipeline", description: "Applies target encoding to categorical variables and scales numerical features." },
      { layer: "AI Model", name: "LightGBM Regressor", description: "Gradient boosting model tuned for tabular regression prediction." }
    ],
    engineeringDecisions: [
      {
        title: "Why LightGBM over standard Gradient Boosting?",
        whyChosen: "LightGBM uses leaf-wise tree growth, offering 10x faster training speed and high accuracy on tabular data.",
        alternativeConsidered: "Linear Regression & Random Forest.",
        tradeOffAccepted: "Requires careful leaf parameter tuning to prevent overfitting on smaller tabular datasets.",
        futureImprovement: "Implement SHAP value explainability plots to display exact feature contribution weights."
      }
    ],
    tags: ["LightGBM", "Regression Model", "Feature Engineering", "Data Visualization", "Streamlit"],
    github: "https://github.com/Praga-925/Employee-Salary-Prediction-Using-LightGBM-Machine-Learning",
    problemStatement: "Predicting compensation across tech industry roles requires handling complex non-linear interactions between skill combinations and location.",
    solutionOverview: "Trained a LightGBM regression model wrapped in a Streamlit interface for quick compensation estimation.",
    technicalChallenges: [
      "Handling salary skewness and encoding high-cardinality categorical variables."
    ],
    outcomes: [
      "Built a reliable predictive model with strong regression performance metrics.",
      "Delivered an intuitive interactive calculator interface."
    ],
    lessonsLearned: [
      "Gradient boosting models like LightGBM excel at capturing non-linear tabular data patterns with minimal preprocessing."
    ]
  },
  {
    id: "flood-mapping-satellite-deep-learning",
    slug: "flood-mapping-satellite-deep-learning",
    title: "Flood Mapping from Satellite Imagery Using Deep Learning",
    subtitle: "Geospatial AI & UNet++ Semantic Segmentation",
    summary: "Geospatial deep learning application utilizing UNet++ semantic segmentation and ResNet-34 encoders to automatically identify and map flood-affected regions from satellite imagery for disaster management.",
    description: "Engineered an end-to-end computer vision and remote sensing pipeline that extracts flood boundaries from high-resolution satellite rasters. Leverages UNet++ with nested skip pathways to achieve precise per-pixel inundation mapping.",
    category: "AI & ML",
    role: "Team Leader & Machine Learning Developer",
    status: "Completed",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-8",
    imageBg: "from-blue-950/40 via-zinc-900 to-black",
    media: {
      cover: "/projects/flood-mapping/cover.jpg",
      thumbnail: "/projects/flood-mapping/cover.jpg",
      gallery: ["/projects/flood-mapping/cover.jpg"],
      architecture: ["/projects/flood-mapping/cover.jpg"]
    },
    technicalHighlights: [
      "UNet++ Architecture",
      "ResNet-34 Encoder",
      "PyTorch & Torchvision",
      "Semantic Segmentation",
      "Satellite Imagery",
      "Rasterio Geospatial",
      "Albumentations Augmentation",
      "Deep Learning Pipeline"
    ],
    techDomains: [
      { domain: "Artificial Intelligence", items: ["UNet++ Neural Net", "ResNet-34 Backbone", "PyTorch"] },
      { domain: "Computer Vision", items: ["Semantic Segmentation", "Albumentations", "OpenCV"] },
      { domain: "Machine Learning", items: ["Image Augmentation", "Loss Functions", "Scikit-Learn"] },
      { domain: "Backend", items: ["Python 3.10", "Torchvision Pipeline"] },
      { domain: "Tools", items: ["Rasterio", "GeoTIFF Processing", "NumPy", "Pandas"] }
    ],
    architectureSummary: "Satellite Image Input -> Rasterio Preprocessing -> Albumentations Augmenter -> ResNet-34 Encoder -> UNet++ Decoder -> Flood Mask Prediction.",
    architectureLayers: [
      { layer: "Security Observer", name: "Satellite Imagery Ingest", description: "Loads multi-spectral GeoTIFF and Sentinel satellite rasters via Rasterio." },
      { layer: "Backend", name: "Augmentation & Preprocessing Engine", description: "Normalizes spectral channels and applies Albumentations spatial transforms." },
      { layer: "AI Model", name: "ResNet-34 Feature Encoder", description: "Extracts multi-scale contextual feature representations from imagery." },
      { layer: "Database", name: "UNet++ Segmentation Decoder", description: "Nested dense skip pathways reconstruct per-pixel flood inundation masks." },
      { layer: "Deployment", name: "Geospatial Mask Renderer", description: "Outputs georeferenced flood boundary masks for emergency response teams." }
    ],
    engineeringDecisions: [
      {
        title: "Why UNet++ over Standard UNet?",
        whyChosen: "Nested, dense skip pathways in UNet++ capture fine-grained water boundary details and variable-scale flood water bodies better than standard skip connections.",
        alternativeConsidered: "Standard UNet & DeepLabV3+.",
        tradeOffAccepted: "UNet++ incurs slightly higher memory footprint during training but yields significantly sharper segmentation boundaries.",
        futureImprovement: "Integrate temporal multi-pass Sentinel SAR radar imagery to map flooding through cloud cover."
      },
      {
        title: "Why ResNet-34 Encoder Backbone?",
        whyChosen: "Pre-trained ResNet-34 weights offer high feature extraction capability while keeping memory consumption low enough for satellite tile batching.",
        alternativeConsidered: "ResNet-50 & EfficientNet-B4.",
        tradeOffAccepted: "Slight trade-off in deep capacity offset by faster training iterations on large satellite raster grids.",
        futureImprovement: "Experiment with Swin Transformer encoders for multi-scale attention."
      },
      {
        title: "Why Semantic Segmentation over Image Classification?",
        whyChosen: "Disaster management teams require precise per-pixel flood boundary maps rather than a simple binary image-level label.",
        alternativeConsidered: "Tile-level Binary Classification.",
        tradeOffAccepted: "Requires detailed pixel-level ground truth masks during dataset annotation.",
        futureImprovement: "Implement weakly-supervised segmentation routines using bounding box annotations."
      }
    ],
    tags: ["UNet++", "ResNet-34", "Satellite Imagery", "Semantic Segmentation", "Rasterio", "Geospatial AI"],
    github: "https://github.com/Praga-925/Flood-Mapping-from-Satellite-Imagery-Using-Deep-Learning",
    problemStatement: "Rapid disaster response during flood events requires immediate, large-scale inundation mapping, whereas manual field mapping takes days.",
    solutionOverview: "Engineered a deep UNet++ semantic segmentation model that ingests satellite imagery and automatically outputs per-pixel flood extent maps.",
    technicalChallenges: [
      "Handling spectral channel imbalances and cloud cover artifacts in remote sensing datasets.",
      "Optimizing memory allocation when sliding-window tiling large GeoTIFF satellite files."
    ],
    outcomes: [
      "Successfully segment flood boundaries from satellite rasters with high accuracy.",
      "Delivered an automated geospatial deep learning pipeline for environmental hazard monitoring."
    ],
    lessonsLearned: [
      "Geospatial deep learning pipelines depend heavily on specialized raster preprocessing (Rasterio) and multi-spectral channel scaling."
    ]
  }
];
