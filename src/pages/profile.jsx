import React, { useState } from "react";
import { Card, Typography, Button, Input, Textarea, Select, Option } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { contactData } from "@/data";
import { PageTitle, Footer } from "@/widgets/layout";

export function Profile() {
  const [ companyName, setCompanyName ] = useState();
  const [ product, setProduct ] = useState();

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
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      {/* <Avatar
                        src="/img/logo.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      /> */}
                      <img src="/img/logo.png"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Dhifarindo Global
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Cluster Sriwedari Blok P12 No. 10 Taman Harapan Baru, Pejuang, Kecamatan Medan Satria, Kota Bekasi, Jawa Barat
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <img src="/img/brosur.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl">
            <div className="grid grid-cols-2 mb-8 gap-8">
              <Input variant="standard" size="lg" label="Full Name" required />
              <Input variant="standard" size="lg" label="Email Address" required />
              <Input type="number" variant="standard" size="lg" label="Phone Number" required />
              <Input variant="standard" size="lg" label="Company Name" onChange={(e)=>setCompanyName(e.target.value)} />
              {companyName ? <Input type="number" variant="standard" size="lg" label="Number of Employee" /> : ''}
              <Select variant="static" size="lg" label="Select Product" onChange={(e)=>setProduct(e)}>
                <Option value="training">Trainings & Certification</Option>
                <Option value="hrms">Human Resource & Employee Tools</Option>
              </Select>
            </div>
            <div className="mt-4">
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            </div>
            <div className="flex gap-6">
              <Button variant="gradient" size="lg" className="mt-8">
                Send Message
              </Button>
              {product == 'hrms' ? 
              <Link to='https://dhifarindo.pengaduanthr.com/home' target="_blank">
                <Button variant="gradient" size="lg" className="mt-8">
                  Try DEMO
                </Button>
              </Link> : ''}
            </div>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
