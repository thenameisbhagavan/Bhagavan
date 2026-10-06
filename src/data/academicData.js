import imgSSC from "../assets/academic/10th_class_certificate.jpg";
import imgInter from "../assets/academic/intermediate_certificate.jpg";
import imgBtechCMM from "../assets/academic/b_tech_cmm.jpg";
import imgBtechPC from "../assets/academic/b_tech_provessional_certificate.jpg";

// Semester Grade Cards
import imgSem1 from "../assets/academic/b_tech_sem_1.jpg";
import imgSem1Supply from "../assets/academic/b_tech_sem_1_chemistry_supply_passed.jpg";
import imgSem2 from "../assets/academic/b_tech_sem_2.jpg";
import imgSem2Supply1 from "../assets/academic/b_tech_sem_2_supply_1_.jpg";
import imgSem2Supply2 from "../assets/academic/b_tech_sem_2_supply_2.jpg";
import imgSem3 from "../assets/academic/b_tech_3rd_sem.jpg";
import imgSem3Supply from "../assets/academic/b_tech_sem_3_suply_1.jpg";
import imgSem4 from "../assets/academic/b_tech_4th_sem.jpg";
import imgSem5 from "../assets/academic/b_tech_5th_sem.jpg";
import imgSem6 from "../assets/academic/b_tech_6_th_sem.jpg";
import imgSem7 from "../assets/academic/b_tech_7th_sem.jpg";
import imgSem8 from "../assets/academic/b_tech_8th_sem.jpg";

// Supporting docs
import imgStudy10 from "../assets/academic/10th_class_study_certificate.jpg";
import imgStudy9 from "../assets/academic/9th_class_study_certificate.jpg";
import imgStudy6 from "../assets/academic/6th_class_study_certificate.jpg";
import imgStudyInter from "../assets/academic/intemmediate_study_and_conduct_certificate.jpg";

export const ACADEMIC_JOURNEY = [
  {
    id: "secondary",
    year: "2020",
    stage: "Secondary Education",
    title: "Secondary School Certificate",
    board: "Board of Secondary Education",
    state: "Andhra Pradesh",
    primaryImage: imgSSC,
    supporting: [
      { id: "study-10", title: "10th Class Study Certificate", image: imgStudy10 },
      { id: "study-9", title: "9th Class Study Certificate", image: imgStudy9 },
      { id: "study-6", title: "6th Class Study Certificate", image: imgStudy6 },
    ]
  },
  {
    id: "intermediate",
    year: "2020 — 2022",
    stage: "Intermediate Education",
    title: "Intermediate Pass Certificate",
    stream: "MPC",
    board: "Board of Intermediate Education",
    state: "Andhra Pradesh",
    primaryImage: imgInter,
    supporting: [
      { id: "study-inter", title: "Study & Conduct Certificate", image: imgStudyInter },
    ]
  },
  {
    id: "undergraduate",
    year: "2022 — 2026",
    stage: "Bachelor of Technology",
    title: "Artificial Intelligence & Data Science",
    institution: "Ramachandra College of Engineering",
    university: "Jawaharlal Nehru Technological University Kakinada",
    result: "First Class",
    cgpa: "7.57 / 10",
    primaryImage: imgBtechCMM,
    provisionalImage: imgBtechPC,
    years: [
      {
        id: "btech-y1",
        title: "Year I",
        semesters: [
          {
            id: "btech-y1-s1",
            title: "Semester I",
            records: [
              { id: "sem1", name: "Grade Card", image: imgSem1 },
              { id: "sem1-sup", name: "Supplementary Record (Chemistry)", image: imgSem1Supply },
            ]
          },
          {
            id: "btech-y1-s2",
            title: "Semester II",
            records: [
              { id: "sem2", name: "Grade Card", image: imgSem2 },
              { id: "sem2-sup1", name: "Supplementary Record 1", image: imgSem2Supply1 },
              { id: "sem2-sup2", name: "Supplementary Record 2", image: imgSem2Supply2 },
            ]
          }
        ]
      },
      {
        id: "btech-y2",
        title: "Year II",
        semesters: [
          {
            id: "btech-y2-s1",
            title: "Semester III",
            records: [
              { id: "sem3", name: "Grade Card", image: imgSem3 },
              { id: "sem3-sup", name: "Supplementary Record 1", image: imgSem3Supply },
            ]
          },
          {
            id: "btech-y2-s2",
            title: "Semester IV",
            records: [
              { id: "sem4", name: "Grade Card", image: imgSem4 },
            ]
          }
        ]
      },
      {
        id: "btech-y3",
        title: "Year III",
        semesters: [
          {
            id: "btech-y3-s1",
            title: "Semester V",
            records: [
              { id: "sem5", name: "Grade Card", image: imgSem5 },
            ]
          },
          {
            id: "btech-y3-s2",
            title: "Semester VI",
            records: [
              { id: "sem6", name: "Grade Card", image: imgSem6 },
            ]
          }
        ]
      },
      {
        id: "btech-y4",
        title: "Year IV",
        semesters: [
          {
            id: "btech-y4-s1",
            title: "Semester VII",
            records: [
              { id: "sem7", name: "Academic Record", image: imgSem7 },
            ]
          },
          {
            id: "btech-y4-s2",
            title: "Semester VIII",
            records: [
              { id: "sem8", name: "Final Academic Record", image: imgSem8 },
            ]
          }
        ]
      }
    ]
  }
];
