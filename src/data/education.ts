export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  honors?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024-present",
    institution: "IMT Mines Albi",
    degree: "Ph.D. in Machine Learning",
    advisor: "Prof. Frederick Benaben",
  },
  {
    year: "2019-2023",
    institution: "ENSEEIHT",
    degree: "M.S. in Computer Science and Mathematics",
    thesis: "Computing Robust Motion Maps to enhance Object Detector Performance",
    // Optional links to thesis
    thesisUrl: "https://github.com/SebastienGrand98/MasterThesis/blob/main/master_thesis.pdf",
    honors: "Thesis highest grade"
  },
  {
    year: "2016-2019",
    institution: "Paul Sabatier Uni.",
    degree: "B.S. in Electrical Engineering",
    honors: "Top of the class"
  },
];
