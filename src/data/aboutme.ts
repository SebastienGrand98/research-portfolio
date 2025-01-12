import { StaticImageData } from 'next/image';
import photo from '..\\pics\\photo.jpg';


export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string[];
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
  description: [
    "<p style='font-size: larger;'>Hi there, I am Sébastien Grand!<br> "+
    "<a href='https://www.imt-mines-albi.fr/'>I'm a 1st year PhD candidate</a> "+
    "working on robust and adaptive Deep Multimodal Fusion.<br> "+
    "Previously, I received a M.S in Computer Science and Mathematics from <a href='https://www.enseeiht.fr/fr/formation/formation-ingenieur/departement-sn/programme-sn/parcours-modia.html'>INP ENSEEIHT</a>. "+
    "Then, I worked for a year at EPSI Radar at developing Computer Vision classification models for radar data.</p>"
  ],
  email: "sebastien.grand@mines-albi.fr",
  imageUrl: photo,
  githubUsername: "SebastienGrand98",
  linkedinUsername: "sebastien-grand",
  twitterUsername: "_SGrand",
};