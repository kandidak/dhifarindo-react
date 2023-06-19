import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import { Avatar, Typography, Button, Input } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "../../axios";
import { XMarkIcon } from "@heroicons/react/24/solid";

// import {trainings} from "./trainings";

export function Training() {
  const [trainings, setTrainings] = useState();
  const [trainingsById, setTrainingsById] = useState();
  const [expanded, setExpanded] = useState(null);
  const [isOpenMateri, setIsOpenMateri] = useState(false);
  const [isOpenTujuan, setIsOpenTujuan] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [password, setPassword] = useState('');

  const getMateriAll = () => {
    axios.get(`main-title`).then((res) => {
      setTrainings(res.data);
    });
  };

  const getMateriByIdJudul = (id) => {
    axios.get(`main-title/${id}`).then((res) => {
      setTrainingsById(res.data);
    });
  };

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  useEffect(() => {
    getMateriAll();
    // getMateriByIdJudul();
    console.log("trainings", trainingsById);
  }, []);

  return (
    <>
      {modalPassword ? (
        <>
          <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> */}
            <div className="fixed inset-0 z-10 flex h-screen overflow-y-auto">
              <div
                className="relative m-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
                style={{ width: "50%", margin: "auto" }}
              >
                <div className="bg-white px-4 pb-4 pt-5">
                  <div className="mt-5 items-start">
                    <div className="flex">
                      <Input label="Enter Password" defaultValue={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => console.log('download',password)}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => {setModalPassword(false); setPassword('');}}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {isOpenMateri ? (
        <>
          <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 flex h-screen overflow-y-auto">
              <div
                className="relative m-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
                style={{ width: "50%", margin: "auto" }}
              >
                <div className="bg-white px-4 pb-4 pt-5">
                  <div className="items-start">
                    <div className="">
                      <div className="flex flex-shrink-0 justify-between">
                        <a className="mx-5 text-lg font-bold">
                          {trainingsById?.title}
                        </a>
                        <div className="text-right">
                          <button
                            type="button"
                            className="btn-close box-content h-6 w-6 rounded-none text-right text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            onClick={() => setIsOpenMateri(false)}
                          >
                            <XMarkIcon />
                          </button>
                        </div>
                      </div>
                      <hr className="mx-5" />
                      <Typography color="black" className="mt-2">
                        {trainingsById?.maincontents.length !== 0 ? (
                          <ol className="list-decimal px-7">
                            {trainingsById?.maincontents?.map((y) => {
                              return <li>{y.listMateri}</li>;
                            })}
                          </ol>
                        ) : (
                          <>
                            <Typography variant="h4" color="red">
                              <p className="px-7">Sedang Dalam Pengembangan</p>
                            </Typography>
                            <Typography variant="h6" color="red">
                              <p className="px-7">(On Development)</p>
                            </Typography>
                          </>
                        )}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpenMateri(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {isOpenTujuan ? (
        <>
          <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 flex h-screen overflow-y-auto">
              <div
                className="relative m-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
                style={{ width: "50%", margin: "auto" }}
              >
                <div className="bg-white px-4 pb-4 pt-5">
                  <div className="items-start">
                    <div className="">
                      <div className="flex flex-shrink-0 justify-between">
                        <a className="mx-5 text-lg font-bold">
                          Tujuan {trainingsById?.title}
                        </a>
                        <div className="text-right">
                          <button
                            type="button"
                            className="btn-close box-content h-6 w-6 rounded-none text-right text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            onClick={() => setIsOpenTujuan(false)}
                          >
                            <XMarkIcon />
                          </button>
                        </div>
                      </div>
                      <hr className="mx-5" />
                      <Typography color="black" className="mt-2">
                        {trainingsById?.maintujuans.length !== 0 ? (
                          <ol className="list-decimal px-7">
                            {trainingsById?.maintujuans?.map((y) => {
                              return <li>{y.listTujuan}</li>;
                            })}
                          </ol>
                        ) : (
                          <>
                            <Typography variant="h4" color="red">
                              <p className="px-7">Sedang Dalam Pengembangan</p>
                            </Typography>
                            <Typography variant="h6" color="red">
                              <p className="px-7">(On Development)</p>
                            </Typography>
                          </>
                        )}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpenTujuan(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/dhifarindo-global-banner-bendera.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-4/12">
                  <div className="relative">
                    <div className="-mt-20 w-[400px] rounded-xl border border-4 border-white">
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
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  <p>Dhifarindo Global</p>
                </Typography>
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  <p>Trainings & Certification</p>
                </Typography>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6">
                <div>
                  <Carousel cols={3} rows={1} loop>
                    <Carousel.Item>
                      <img width="100%" src="/img/activity1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src="/img/activity2.jpeg" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src="/img/activity3.jpeg" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src="/img/activity4.jpeg" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src="/img/activity5.jpeg" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src="/img/activity6.jpeg" />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="mt-5 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    {trainings?.map((x) => {
                      return (
                        <>
                          <Accordion
                            className="mt-5 w-full border border-black"
                            key={x.id}
                            id={x.id}
                            expanded={expanded === x.id}
                            onChange={handleExpand(x.id)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography
                                variant="h2"
                                className="text-lg text-blue-gray-500"
                              >
                                {x.title}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              {/* <Typography color="blue-gray" className="mb-2">
                              {x.maincontents !== null ? (
                                <ol className="list-decimal px-7">
                                  {x.maincontents?.map((y) => {
                                    return <li>{y.listMateri}</li>;
                                  })}
                                </ol>
                              ) : (
                                "Sedang Dalam Pengembangan"
                              )}

                              <hr className="my-5" />

                              <Typography
                                variant="h2"
                                className="text-lg text-blue-gray-500"
                              >
                                Tujuan {x.title}
                              </Typography>
                              {x.maintujuans !== null ? (
                                <ol className="list-decimal px-7 pt-5">
                                  {x.maintujuans?.map((z) => {
                                    return <li>{z.listTujuan}</li>;
                                  })}
                                </ol>
                              ) : (
                                "Sedang Dalam Pengembangan"
                              )}
                            </Typography> */}
                              <div className="mb-5 flex justify-end">
                                <button
                                  className="flex items-center justify-center gap-2 rounded-md bg-red-500 px-5 py-2 text-center text-base text-white"
                                  onClick={() => setModalPassword(true)}
                                >
                                  Download PDF
                                </button>
                              </div>
                              <div className="grid grid-cols-2 justify-between gap-6">
                                <div className="text-medium text-center">
                                  <div className="flex items-center justify-center text-center">
                                    <img
                                      src="/img/training-sertifikasi-materi.png"
                                      className="w-1/4 cursor-pointer justify-center hover:scale-110"
                                      onClick={() => {
                                        getMateriByIdJudul(x.id);
                                        setIsOpenMateri(true);
                                      }}
                                    ></img>
                                  </div>
                                  <p className="mt-3">{x.title}</p>
                                </div>
                                <div className="text-medium text-center">
                                  <div className="flex items-center justify-center text-center">
                                    <img
                                      src="/img/training-sertifikasi-tujuan.png"
                                      className="w-1/4 cursor-pointer justify-center hover:scale-110"
                                      onClick={() => {
                                        setIsOpenTujuan(true);
                                        getMateriByIdJudul(x.id);
                                      }}
                                    ></img>
                                  </div>
                                  <p className="mt-3">TUJUAN {x.title}</p>
                                </div>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </>
                      );
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
