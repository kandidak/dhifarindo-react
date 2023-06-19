import React from "react";
import { 
  Avatar,
  Typography,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Hrms() {
  let judul = [
    {
      id: 1,
      judul: 'MATERI PELATIHAN_ISO 9001:2015',
      materi1: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
    },
    {
      id: 2,
      judul: 'MATERI PELATIHAN_ISO 14001:2015',
      materi1: 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'
    },
    {
      id: 1,
      judul: 'MATERI PELATIHAN_HSMS-OHSAS 18001:2007',
      materi1: 'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    },
  ]

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-4/12">
                  <div className="relative">
                    <div className="-mt-20 w-[400px]">
                      <Avatar
                        src="/img/software-service.png"
                        alt="Profile picture"
                        variant="square"
                        className="h-full w-full shadow-xl"
                      />
                      {/* <img src="/img/logo.png"></img> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Dhifarindo HRMS System
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6">
                <div className="flex flex-wrap justify-center">
                  <div className="grid grid-cols-3 gap-6 flex w-full flex-col px-4 t pt-[40px]">
                    <Card className="shadow-lg shadow-gray-500/10">
                      <CardHeader className="relative h-56">
                        <img
                          alt="Card Image"
                          src="/img/employee.png"
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3 font-bold"
                        >
                          Employee
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Menangani informasi lengkap karyawan mulai dari data lahir sampai pendidikan.
                        </Typography>
                      </CardBody>
                    </Card>
                    <Card className="shadow-lg shadow-gray-500/10">
                      <CardHeader className="relative h-56">
                        <img
                          alt="Card Image"
                          src="/img/day-off.jpeg"
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3 font-bold"
                        >
                          Cuti
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Menangani jatah cuti karyawan dan mengalokasikan total cuti karyawan sesuai jabatan atau lama bekerja.
                        </Typography>
                      </CardBody>
                    </Card>
                    <Card className="shadow-lg shadow-gray-500/10">
                      <CardHeader className="relative h-56">
                        <img
                          alt="Card Image"
                          src="/img/claim.png"
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3 font-bold"
                        >
                          Claim
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Menangani klaim apa saja yang menjadi hak karyawan dan persentase yang ditanggung oleh perusahaan.
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="grid grid-cols-4 flex w-full px-4 t pt-[80px] object-center">
                    <div className="flex col-span-2 justify-center">
                  <Card className="shadow-lg shadow-gray-500/10 w-1/2">
                      <CardHeader className="relative h-56">
                        <img
                          alt="Card Image"
                          src="/img/payroll.jpg"
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3 font-bold"
                        >
                          Payroll
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Modul penggajian, Secara otomasi akan menghitung gaji pokok, dan tunjangan apa saja yang akan diterima oleh karyawan.
                        </Typography>
                      </CardBody>
                    </Card>
                    </div>
                    <div className="flex col-span-2 justify-center">
                    <Card className="shadow-lg shadow-gray-500/10 w-1/2">
                      <CardHeader className="relative h-56">
                        <img
                          alt="Card Image"
                          src="/img/customize.jpg"
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3 font-bold"
                        >
                          Customize
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Mengintegrasi kebutuhan data dengan stakeholder terkait (Pajak, BPJS Ketenagakerjaan).
                        </Typography>
                      </CardBody>
                    </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Hrms;
