export interface EducationItem {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  currentStatus: string;
  expectedGraduation: string;
  academicFocus: string[];
  description: string;
}

export const EDUCATION_DATA: EducationItem = {
  id: "kongunadu-be-cs",
  degree: "Bachelor of Engineering (B.E.)",
  fieldOfStudy: "Computer Science and Engineering",
  institution: "Kongunadu College of Engineering and Technology",
  location: "Tamil Nadu, India",
  currentStatus: "Fourth Year • Seventh Semester",
  expectedGraduation: "2027",
  academicFocus: [
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Software Engineering"
  ],
  description: "Pursuing a comprehensive curriculum centered around computer science fundamentals, algorithm design, artificial intelligence neural architectures, network security, and scalable software systems."
};
