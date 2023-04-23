import {
  StarIcon,
  ArrowPathIcon,
  PaperClipIcon,
  FingerPrintIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    path: "/training",
    title: "Dhifarindo Trainings & Certification",
    icon: PaperClipIcon,
    description:
      "Trainings and certification for your product's company.",
  },
  {
    color: "red",
    path: "/hrms",
    title: "Human Resource & Employee Tools",
    icon: UserGroupIcon,
    description:
      "Solutions for your company to manage your employees.",
  },
  {
    color: "teal",
    path: "",
    title: "Dhifarindo Trading & Wisata",
    icon: BuildingOfficeIcon,
    description:
      "This feature is currently on development.",
  },
  {
    color: "green",
    path: "",
    title: "Research Gate Dhifarindo Institute",
    icon: AcademicCapIcon,
    description:
      "This feature is currently on development.",
  },
];

export default featuresData;
