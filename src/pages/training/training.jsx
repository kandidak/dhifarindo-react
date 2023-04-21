import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
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

export function Training() {
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
                        src="/img/training-sertifikasi.jpg"
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
                  Trainings & Certification
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                  <ol className="list-[upper-roman]">
                    {judul.map(x=>{
                      return(
                        <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className="font-bold text-blue-gray-500 text-lg">{x.judul}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            {x.materi1}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      )
                    })}
                    </ol>
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

export default Training;
