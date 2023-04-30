import React, { useState } from "react";
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
import {trainings} from "./trainings";

export function Training() {
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
                        // variant="square"
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
                    {trainings.map(x=>{
                      return(
                        <Accordion className="mt-5 w-full">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography variant="h2" className="text-blue-gray-500 text-lg">{x.judul}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography color="blue-gray" className="mb-2">
                              {x.materi !== null ? (
                              <ol className="list-decimal px-5">
                                {x.materi?.map((y,i)=>{
                                  return(
                                    <li key={i}>
                                      {y.listMateri}
                                    </li>
                                  )}
                                )}
                              </ol>
                              ) : 'Sedang Dalam Pengembangan'}

                              <hr className="my-5" />

                              <Typography variant="h2" className="text-blue-gray-500 text-lg">Tujuan {x.judul}</Typography>
                              {x.tujuan !== null ? (
                              <ol className="list-decimal px-5 pt-5">
                              {x.tujuan?.map((z,i)=>{
                                return(
                                  <li key={i}>
                                    {z.listTujuan}
                                  </li>
                                )
                              })}
                              </ol>
                              ) : 'Sedang Dalam Pengembangan'}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      )
                    })}
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
