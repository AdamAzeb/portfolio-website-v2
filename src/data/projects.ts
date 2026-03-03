import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "car-project",
    title: "Car Build",
    subtitle: "Full vehicle restoration and modification",
    description:
      "A ground-up vehicle build covering mechanical restoration, electrical system rewiring, and performance modifications. Every system was disassembled, inspected, and rebuilt with an emphasis on understanding how each subsystem integrates into the whole.",
    highlights: [
      "Complete engine teardown and rebuild",
      "Custom wiring harness fabrication",
      "Suspension geometry optimisation",
      "Brake system overhaul with upgraded components",
    ],
    tech: ["Mechanical Design", "Electrical Systems", "Welding", "Fabrication"],
    images: ["/images/projects/car-1.jpg"],
    featured: true,
  },
  {
    id: "3d-printer",
    title: "3D Printer Build",
    subtitle: "Custom CoreXY 3D printer from scratch",
    description:
      "Designed and assembled a CoreXY motion system 3D printer. Sourced individual components, configured the firmware, and iteratively tuned print quality through systematic calibration of motion, extrusion, and thermal systems.",
    highlights: [
      "CoreXY kinematics for speed and precision",
      "Klipper firmware configuration and tuning",
      "Custom enclosure for temperature-controlled printing",
      "Iterative calibration of flow rate, pressure advance, and resonance",
    ],
    tech: ["CAD", "3D Printing", "Klipper", "Electronics", "Python"],
    images: ["/images/projects/printer-1.jpg"],
    featured: true,
  },
  {
    id: "missile-trajectory-tracker",
    title: "Missile Trajectory Tracker",
    subtitle: "Real-time ballistic trajectory simulation",
    description:
      "A Python application that models ballistic missile trajectories using physics-based simulation. Accounts for gravity, drag, Earth's curvature, and atmospheric density to produce realistic flight paths with real-time visualisation.",
    tech: ["Python", "NumPy", "Matplotlib", "Physics Simulation"],
    images: ["/images/projects/missile-tracker-1.jpg"],
    featured: true,
    github: "https://github.com/Max11122006/missile-trajectory-tracker",
  },
  {
    id: "storm-prediction",
    title: "Storm Prediction Model",
    subtitle: "Weather pattern analysis and prediction",
    description:
      "A data-driven approach to predicting severe weather events using historical meteorological data. Built feature engineering pipelines and trained classification models to identify conditions likely to produce storms.",
    tech: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    images: ["/images/projects/storm-1.jpg"],
    featured: false,
  },
  {
    id: "arduino-builds",
    title: "Arduino Projects",
    subtitle: "Embedded systems and sensor integration",
    description:
      "A collection of Arduino-based projects exploring embedded systems, sensor integration, and real-time control. Projects include environmental monitoring stations, motor controllers, and automated systems.",
    tech: ["Arduino", "C++", "Electronics", "Sensors", "PCB Design"],
    images: ["/images/projects/arduino-1.jpg"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
