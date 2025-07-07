export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  playstore?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Health Care",
    description: "A comprehensive moblie application that enables doctor-patient communication, appointment scheduling, and emergency services.",
    image: "https://praveenb1402.github.io/Praveen-Portfolio//applogo-playstore.png",
    technologies: ["Java", "XML", "Room Database", "Firebase"],
    github: "https://github.com/swastik-bhat-ms/My-personal-Health-Care",
    featured: true
  },
  {
    id: 2,
    title: "LB College Alumni Registration ",
    description: "A Freelance project with payment integration.",
    image: "https://images.pexels.com/photos/6893889/pexels-photo-6893889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flutter", "Firebase", "Payment gateway","Dart"],
    playstore: "https://play.google.com/store/apps/details?id=com.alumniregistration",
    featured: true
  },
  {
    id: 3,
    title: "HangOuts",
    description: "An all-in-one travel companion app that helps users plan trips, find local attractions, and navigate unfamiliar areas with offline maps.",
    image: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flutter", "Cloudinary", "Dart", "Firebase","Authentication"],
    // github: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Delhi Karnataka Sangha Membership Database",
    description: "Freelance Project: a desktop based software, which is used to manage members details like insert, update, delete and search. ",
    image: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "tkinter", "Sqlite3", "openpyxl"],
    // github: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "Quizbuzz",
    description: "A Quiz base gaming application with realtime question, helplines and many more ",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flutter", "Dart", "Firebase RealTime Database","Google Ads"],
    // playstore: "https://play.google.com",
    featured: false
  },
   {
    id: 6,
    title: "Puzzle Adventure",
    description: "A game where the next level is based on the users performance. ",
    image: "https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Replet", "Vercel"],
    github: "https://github.com/Praveenb1402/Peer2PeerGameathon-5q",
    playstore: "https://v0-2d-puzzle-game-design-git-main-praveenb1402-2127s-projects.vercel.app/",
    featured: false
  }
];