export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
   
      { name: "Java", level: 4 },
      { name: "C++", level: 3 },
      { name: "Python", level: 3.5 },
      { name: "Dart", level: 4 }
    ]
  },
  {
    title: "Android Development",
    skills: [
      { name: "Android SDK", level: 4 },
      { name: "Android Jetpack", level: 3.5 },
      { name: "Material Design", level: 4 },
      { name: "MVVM Architecture", level: 4 },
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Retrofit", level: 3.9 },
      { name: "ViewModels", level: 4 },
      { name: "Flutter", level: 4 },
      { name: "RxJava", level: 3 },
      { name: "WorkManager", level: 3 }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Android Studio", level: 5 },
      { name: "Git", level: 3.5 },
      { name: "Firebase", level: 4 },
      { name: "Google Play Console", level: 3.7 },
      { name: "Gradle", level: 3 }
    ]
  }
];