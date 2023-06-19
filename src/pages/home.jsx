import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData } from "@/data";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

export function Home() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const navigateTo = useNavigate();

  const navigate = (path) => {
    navigateTo(`${path}`);
  };
  
  const onSubmit = () => {
    axios.get(`main-content`).then((resp) => {
      console.log(resp.data);
    });
  };

  const judul = [
  {
    id: 1,
    judul: "MATERI PELATIHAN_ISO 9001:2015",
  },
  {
    id: 2,
    judul: 'MATERI PELATIHAN_ISO 14001:2015'
  },
]

const materi = [
  {
    idJudul: 1,
    id: 1,
    materi: 'abcd'
  },
  {
    idJudul: 1,
    id: 2,
    materi: 'efgh'
  },
  {
    idJudul: 2,
    id: 3,
    materi: 'ijkl'
  },
  {
    idJudul: 2,
    id: 4,
    materi: 'mnop'
  },
]

const tujuan = [
  {
    idJudul: 1,
    id: 1,
    tujuan: 'abcd'
  },
  {
    idJudul: 1,
    id: 2,
    tujuan: 'efgh'
  }
]

useEffect(()=>{
  // console.log('materiFind', judul.map((x=>{
  //   const materiss = materi.filter(y=>x.id === y.idJudul)
  //   return{
  //     ...materiss
  //   }
  // })))
  const result = judul.map((x=>{
    const materiss = materi.filter(y => x.id === y.idJudul)
    const tujuanss = tujuan.filter(z=>x.id === z.idJudul)
    console.log('materiss',materiss)
    if(materiss || tujuanss){
      return{
        ...x,
        materi: materiss,
        tujuan: tujuanss
      }
    }
  }))
  console.log(result)
},[])
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/dhifarindo-global-banner.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              <a className="font-bold">Dhifarindo Global</a> adalah perusahaan yang bergerak di bidang konsultan manajemen dan training yang berkualitas dan selalu memberikan pelayanan yang terbaik.
              </Typography>
              {/* <form onSubmit={handleSubmit(onSubmit)}>
                        
                <input type="text" />
                        
                <button
                  type="submit"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Save
                </button>
                      
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map(({ color, title, icon, description, path }) => (
              <div
                key={title}
                onClick={() => {
                  navigate(path);
                }}
              >
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  path={path}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              </div>
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Direksi Dhifarindo Global">
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-lg fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
