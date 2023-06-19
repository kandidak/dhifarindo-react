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
      "Pelatihan dan sertifikasi untuk produk perusahaan anda.",
  },
  {
    color: "red",
    path: "/hrms",
    title: "Human Resource & Employee Tools",
    icon: UserGroupIcon,
    description:
      "Solusi bagi perusahaan dalam memanajemen pegawai atau karyawan.",
  },
  {
    color: "teal",
    path: "",
    title: "Dhifarindo Trading & Wisata",
    icon: BuildingOfficeIcon,
    description:
      "Fitur ini sedang dalam tahap pengembangan.",
  },
  {
    color: "green",
    path: "",
    title: "Research Gate Dhifarindo Institute",
    icon: AcademicCapIcon,
    description:
      "Fitur ini sedang dalam tahap pengembangan.",
  },
];

export default featuresData;
