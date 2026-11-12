export interface ExperienceItem {
  id: string;
  organization: string;
  partner: string;
  role: string;
  duration: string;
  period: string;
  mode: string;
  overview: string;
  highlightProject: {
    title: string;
    description: string;
  };
  technologiesUsed: string[];
  responsibilities: string[];
  learningOutcomes: string[];
}

export const INDUSTRY_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "edunet-ibm-internship",
    organization: "Edunet Foundation",
    partner: "IBM SkillsBuild",
    role: "AI & Machine Learning Intern",
    duration: "6 Weeks",
    period: "June – July",
    mode: "Online Internship",
    overview: "Completed an intensive six-week Artificial Intelligence & Machine Learning internship through Edunet Foundation in collaboration with IBM SkillsBuild, gaining hands-on practical experience in end-to-end machine learning workflows.",
    highlightProject: {
      title: "Employee Salary Prediction System",
      description: "Trained a high-performance LightGBM regression model performing exploratory data analysis, target encoding, and hyperparameter optimization to predict compensation distributions across technical skill profiles."
    },
    technologiesUsed: ["Python", "LightGBM", "Pandas", "Scikit-learn"],
    responsibilities: [
      "Performed comprehensive data preprocessing, missing value imputation, and noise cleaning.",
      "Applied target encoding and feature engineering techniques to categorical variables.",
      "Built and tuned gradient boosting machine learning models.",
      "Evaluated model performance using RMSE and MAE regression metrics.",
      "Optimized hyperparameter configurations to maximize prediction accuracy."
    ],
    learningOutcomes: [
      "Machine Learning Workflow",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Predictive Analytics"
    ]
  }
];
