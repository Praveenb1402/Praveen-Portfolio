export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Chittoo Pvt. Limited.",
    role: "Junior Developer",
    period: "Jan 2024 - Dec 2024",
    description: "Developed and maintained the Android application and managed to convert Java code to Dart. Implemented modern Android architecture patterns and best practices to create scalable and maintainable applications. Collaborated with a team of UI/UX designers to seamlessly integrate user-friendly interfaces. Gained extensive experience in UI implementation, API integration, and application testing.",
    technologies: ["Java", "Dart", "Firebase", "Flutter", "Android SDK", "Git", "XML layouts", "ViewModel", "Authentication", "Retrofit"]
  },
  // {
  //   company: "Mobile Solutions Ltd.",
  //   role: "Android Developer",
  //   period: "2019 - 2022",
  //   description: "Developed and maintained multiple Android applications for clients across various industries. Implemented modern Android architecture patterns and best practices to create scalable and maintainable applications.",
  //   technologies: ["Kotlin", "Java", "Android Jetpack", "Room", "Firebase"]
  // },
  // {
  //   company: "AppStart Studio",
  //   role: "Junior Android Developer",
  //   period: "2017 - 2019",
  //   description: "Collaborated with the development team to build consumer-facing Android applications. Gained extensive experience in UI implementation, API integration, and application testing.",
  //   technologies: ["Java", "XML layouts", "RESTful APIs", "SQLite", "JUnit"]
  // },
  // {
  //   company: "CodeCraft Solutions",
  //   role: "Android Development Intern",
  //   period: "2016 - 2017",
  //   description: "Assisted in the development of Android applications under senior developer supervision. Worked on UI components and basic functionality implementation.",
  //   technologies: ["Java", "Android SDK", "Git", "Material Design"]
  // }
];