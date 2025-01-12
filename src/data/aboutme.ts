import { StaticImageData } from 'next/image';
import photo from '..\\pics\\photo.jpg';


export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string | StaticImageData;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sebastien Grand",
  title: "Ph.D. Candidate",
  institution: "IMT Mines Albi",
  description:
    "I'm a 1st year <a href='https://www.imt-mines-albi.fr/'>PhD candidate</a> working robust and adaptive Deep Multimodal Fusion",
  email: "sebastien.grand@mines-albi.fr",
  imageUrl: photo,
  githubUsername: "SebastienGrand98",
  linkedinUsername: "sebastien-grand",
  twitterUsername: "_SGrand",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
