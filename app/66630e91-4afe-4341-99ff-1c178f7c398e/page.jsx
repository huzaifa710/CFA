"use client";
import React from "react";
import { FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { CiImageOn } from "react-icons/ci";
import { PiCopySimple, PiShareFatLight } from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";
import { ImLinkedin } from "react-icons/im";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { X, Check, Loader2, Lock } from "lucide-react";
import { IoMdLock } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import toast from "react-hot-toast";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [type, setType] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setType("");
    setIsComplete(false);
    setCurrentStep(0);
    setEmail("");
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      text: "Verifying credential data",
      icon: <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />,
      duration: 2000,
    },
    {
      text: "This issuer is verified by Accredible",
      icon: <Check className="w-5 h-5 text-green-600" />,
      duration: 1500,
    },
    {
      text: "Checking blockchain records",
      icon: <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />,
      duration: 2000,
    },
  ];

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setTimeout(() => setIsComplete(true), 1000);
        }
      }, steps[currentStep]?.duration || 1000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isLoading]);

  const sendMail = () => {
    toast.success("Your recipients will receive the email soon.");
    setTimeout(() => closeModal(), 2000);
  };

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      <div className="bg-[#E5E5E5] ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center">
            <img src={"../../badge lvl1.png"} className="md:w-96 w-60 " />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-6 md:pt-12 md:pb-16 pb-10 md:px-4 gap-8 w-[90%] bg-white text-gray-800 max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center ">
            <div
              className="relative w-10 h-10 mr-5 rounded-full "
              style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <img src="cfa_circle.png" alt="CFA Institute" className="" />
              <div className="absolute -top-1.5 -right-3 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 47.613 6.011 l 8.531 -4.732 c 2.864 -1.588 6.47 -0.276 7.643 2.782 l 3.494 9.108 c 0.666 1.735 2.179 3.005 4.003 3.359 l 9.577 1.859 c 3.215 0.624 5.134 3.948 4.067 7.044 l -3.178 9.223 c -0.606 1.757 -0.263 3.702 0.907 5.147 l 6.141 7.58 c 2.061 2.544 1.395 6.324 -1.412 8.01 l -8.363 5.022 c -1.593 0.957 -2.581 2.667 -2.613 4.526 l -0.168 9.754 c -0.056 3.274 -2.996 5.741 -6.231 5.228 l -9.635 -1.528 c -1.836 -0.291 -3.692 0.384 -4.911 1.787 l -6.398 7.364 c -2.148 2.472 -5.986 2.472 -8.133 0 l -6.398 -7.364 c -1.219 -1.403 -3.075 -2.079 -4.911 -1.787 l -9.635 1.528 c -3.234 0.513 -6.174 -1.954 -6.231 -5.228 l -0.168 -9.754 c -0.032 -1.858 -1.02 -3.569 -2.613 -4.526 l -8.363 -5.022 c -2.807 -1.686 -3.474 -5.466 -1.412 -8.01 l 6.141 -7.58 c 1.17 -1.444 1.513 -3.389 0.907 -5.147 l -3.178 -9.223 c -1.067 -3.096 0.852 -6.42 4.067 -7.044 l 9.577 -1.859 c 1.825 -0.354 3.338 -1.624 4.003 -3.359 l 3.494 -9.108 c 1.173 -3.057 4.779 -4.37 7.643 -2.782 l 8.531 4.732 C 44.012 6.913 45.988 6.913 47.613 6.011 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "1",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "#336aff",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                    />
                    <path
                      d="M 41.325 61.54 c -1.134 0 -2.215 -0.481 -2.974 -1.325 l -12.35 -13.73 c -1.477 -1.642 -1.343 -4.171 0.299 -5.649 s 4.171 -1.343 5.649 0.299 l 9.318 10.359 l 18.732 -21.652 c 1.444 -1.67 3.97 -1.854 5.643 -0.408 c 1.671 1.445 1.854 3.971 0.408 5.642 l -21.7 25.081 c -0.751 0.868 -1.838 1.371 -2.986 1.383 C 41.351 61.54 41.338 61.54 41.325 61.54 z"
                      style={{
                        stroke: "white", // added visible stroke color
                        strokeWidth: 1, // increased stroke width for boldness
                        strokeDasharray: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <a
              target="_blank"
              href="https://www.cfainstitute.org/?aad=BAhJIk57InR5cGUiOiJpc3N1ZXIiLCJ1cmwiOiJodHRwczovL3d3dy5jZmFpbnN0aXR1dGUub3JnL2VuLyIsImlkIjoxMTgxNDUzMzV9BjoGRVQ%3D--022c90d827e6b0add900752a2c03ad79b6bda033"
              className="text-[#336aff] tracking-wide hover:underline cursor-pointer text-2xl mr-2"
            >
              CFA Institute
            </a>
            <svg
              width="24px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 9L21 3M21 3H15M21 3L13 11"
                stroke="#336aff"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
                stroke="#336aff"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="scale(1.1, 0.9)"
              />
            </svg>
          </div>

          <h1
            className="text-2xl mt-4 tracking-wide"
            style={{ color: "rgba(35, 31, 32, 0.87)" }}
          >
            CFA Program Level I
          </h1>

          <div className="flex items-center gap-4 mt-4 text-sm pl-4 pt-1 pb-5">
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://credentials.cfainstitute.org/8d649f15-d4d7-44a2-9a3b-4605556a832f"
              target="_blank"
            >
              <button className="text-black/85 flex items-center cursor-pointer gap-2">
                <ImLinkedin className="text-[#63647a]" /> SHARE
              </button>
            </a>

            <a
              href="https://api.accredible.com/v1/credential/generate_baked_badge?credential_id=100185349&_gl=1*1tsv9wy*_gcl_au*MTEzNDQ2MTE4NC4xNzQ4MjY3MTM1*_ga*MzgxNTg0NjYwLjE3NDgyNjcxMzU.*_ga_FSDJZHHBH0*czE3NTE0NTg5NjckbzMkZzEkdDE3NTE0NTk2MDEkajYwJGwwJGgxNjQ4MTg4OTEw"
              target="_blank"
            >
              <button className="text-black/85 flex items-center cursor-pointer gap-2">
                <CiImageOn className="text-black/90 text-[1.12rem]" /> BADGE
              </button>
            </a>

            <button
              className="text-black/85 flex items-center cursor-pointer gap-2"
              onClick={() => {
                openModal();
                setType("email");
              }}
            >
              <PiShareFatLight className="text-[#63647a] text-[1.1rem]" /> EMAIL
            </button>

            <button
              onClick={() => {
                openModal();
                setType("help");
              }}
              className="text-black/85 flex items-center cursor-pointer gap-2"
            >
              <TfiHelpAlt className="text-black/90" /> HELP
            </button>
          </div>

          <a
            className="text-[#336aff] hover:underline text-sm tracking-wide"
            href="https://v2.accounts.accredible.com/login?app=recipient-portal&origin=https:%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f&_gl=1*rymwij*_gcl_au*MzY0NDE4Mjc5LjE3NDgzMTk2NjA.*_ga*NTU4MzE3ODYuMTc0ODMxOTY2MQ..*_ga_FSDJZHHBH0*czE3NDkxMzgwNDAkbzUkZzEkdDE3NDkxMzgzMjQkajYwJGwwJGgyMDgyMDk3ODI1"
            style={{ fontFamily: "sans-serif" }}
          >
            Sign in to access more options
          </a>

          <div className="flex items-start gap-4 mt-6">
            <div
              style={{ backgroundColor: "rgb(66, 0, 255)" }}
              className=" text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium"
            >
              AD
            </div>
            <div>
              <p
                className="text-xl pb-1"
                style={{ color: "rgba(35, 31, 32, 0.87)" }}
              >
                Aryan Deep
              </p>
              <a
                href="/profile/aryandeep773193/wallet"
                className="text-[#336aff] text-sm tracking-wide"
              >
                View All Credentials
              </a>
            </div>
          </div>

          <hr
            className="my-7"
            style={{ borderColor: "rgba(35, 31, 32, 0.12)" }}
          />

          <p
            className="text-sm leading-5 tracking-wide"
            style={{ color: "rgba(35, 31, 32, 0.87)" }}
          >
            This digital badge certifies that the above-named individual has
            passed Level I of the CFA® Program. The CFA Program is a three-part
            exam that tests the fundamentals of investment tools, asset classes,
            portfolio construction, and ethical and professional standards. The
            curriculum for the Level I exam is focused on the application of
            investment tools and the valuation and analysis of asset classes and
            covers intermediate concepts in portfolio construction.
          </p>

          <h3
            className="mt-7 mb-4 tracking-wide"
            style={{ color: "rgba(35, 31, 32, 0.87)" }}
          >
            Skills / Knowledge
          </h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-[#e8e8e8] px-3 py-2 rounded text-[#231f20] font-medium tracking-wide">
              Finance
            </span>
            <span className="bg-[#e8e8e8] px-3 py-2 rounded text-[#231f20] font-medium tracking-wide">
              Investment Management
            </span>
            <span className="bg-[#e8e8e8] px-3 py-2 rounded text-[#231f20] font-medium tracking-wide">
              Portfolio Management
            </span>
          </div>

          <div
            className="mt-7 grid grid-cols-[35%_65%] gap-12"
            style={{ color: "rgba(35, 31, 32, 0.87)" }}
          >
            <div>
              <h3
                className=" text-[15px] tracking-wide font-medium"
                style={{ color: "rgba(35, 31, 32, 0.87)" }}
              >
                ISSUED ON
              </h3>
              <p className="text-sm pt-2">October 10, 2024</p>
            </div>
            <div>
              <h3
                className=" text-[15px] tracking-wide font-medium"
                style={{ color: "rgba(35, 31, 32, 0.87)" }}
              >
                EXPIRES ON
              </h3>
              <p className="text-sm pt-2">Does not expire</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[350px] space-y-8">
          <div className="border border-black/12 p-4 rounded flex flex-col gap-5">
            <div className="grid grid-cols-[80%_20%] items-center gap-2">
              <div>
                <h4 className="font-bold text-[19px] tracking-wide mb-2">
                  Share Credential
                </h4>
                <p className="text-sm text-black tracking-wide mb-4">
                  Show this credential on your social network
                </p>
              </div>

              <svg
                width="52"
                height="74"
                viewBox="0 0 52 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1016 37.7828L39.9924 37.7568L40.0145 67.2837L38.6495 69.5399C38.65 69.9044 38.2196 70.1111 37.9213 69.8895L27.3874 63.6583C26.8991 63.2946 26.2206 63.2955 25.7328 63.66L15.0165 71.428C14.7187 71.6505 14.2878 71.4447 14.2878 71.0798L13.1237 67.3105L13.1016 37.7828Z"
                  fill="#BA9542"
                />
                <path
                  d="M40.0215 73.5332C40.0215 73.8982 39.5916 74.1048 39.2929 73.885L27.3944 65.0247C26.9056 64.6598 26.2267 64.6598 25.7425 65.0247L13.8621 73.907C13.5634 74.1312 13.1334 73.9246 13.1334 73.5596L13.1289 67.3113L25.6927 58.429C26.2086 58.064 26.9237 58.064 27.4442 58.429L40.017 67.2849L40.0215 73.5332Z"
                  fill="#E8BA52"
                />
                <path
                  d="M46.9581 35.0744L46.5657 40.0968C46.2254 41.7616 44.9043 43.0733 43.1989 43.4409L36.3893 44.9086C35.8562 45.0234 35.3493 45.234 34.8953 45.5286L29.8988 49.4949C28.4465 50.438 26.5578 50.4583 25.0842 49.5463L18.5584 47.306C18.0976 47.021 17.5862 46.8214 17.0508 46.7181L10.2095 45.3967C8.49603 45.066 7.14597 43.7825 6.76761 42.1257L5.25688 35.5097C5.13875 34.9917 4.92196 34.4993 4.61873 34.0582L0.742791 28.4242C-0.228005 27.0131 -0.248825 25.1782 0.689837 23.7465L4.4368 18.0306C4.73008 17.583 4.93554 17.0861 5.0419 16.5659L6.40192 9.91919C6.74226 8.25443 8.06336 6.94275 9.7687 6.57515L16.5783 5.10738C17.1115 4.99261 17.6183 4.782 18.0723 4.48739L23.8713 0.721661C25.3236 -0.221528 27.2122 -0.241743 28.6859 0.670226L34.569 4.31062C35.0298 4.59556 35.5412 4.79519 36.0766 4.89852L42.9179 6.21987C44.6314 6.55098 45.9814 7.83406 46.3598 9.49091L47.8705 16.1069C47.9886 16.6248 48.1 17.8815 48.4032 18.3226L51.2572 23.2157C52.228 24.6268 52.2488 26.4617 51.3102 27.8934L47.5632 33.6093C47.2699 34.0573 47.0649 34.5538 46.9581 35.0744V35.0744Z"
                  fill="#E8BA52"
                />
                <path
                  d="M26.5576 32.8697C30.5719 32.8697 33.8261 29.708 33.8261 25.8079C33.8261 21.9078 30.5719 18.7461 26.5576 18.7461C22.5433 18.7461 19.2891 21.9078 19.2891 25.8079C19.2891 29.708 22.5433 32.8697 26.5576 32.8697Z"
                  fill="#BA9542"
                />
              </svg>
            </div>

            <div className="flex gap-3 mb-1">
              <a
                href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f%3Futm_source%3Dlinkedin%26utm_medium%3Dsocial"
                target="_blank"
              >
                <div className=" w-[50px] h-[50px] rounded bg-[#1b93ce] cursor-pointer flex items-center justify-center">
                  <TiSocialLinkedin className="text-white  text-2xl" />
                </div>
              </a>

              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f%3Futm_source%3Dfacebook%26utm_medium%3Dsocial"
                target="_blank"
              >
                <div className=" w-[50px] h-[50px] rounded bg-[#506bb1] cursor-pointer flex items-center justify-center">
                  <BiLogoFacebook className="text-white  text-xl" />
                </div>
              </a>
              <a
                href="https://twitter.com/share?url=https%3A%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f%3Futm_source%3Dtwitter%26utm_medium%3Dsocial"
                target="_blank"
              >
                <div className=" w-[50px] h-[50px] rounded bg-[#000] cursor-pointer flex items-center justify-center">
                  <FaXTwitter className="text-white  text-xl" />
                </div>
              </a>
              <a
                href="https://wa.me/?text=https%3A%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f%3Futm_source%3Dwhatsapp%26utm_medium%3Dsocial"
                target="_blank"
              >
                <div className=" w-[50px] h-[50px] rounded bg-[#02a601] cursor-pointer flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
              </a>
              {/* <div className="bg-black/4 text-black border-black/4 w-[50px] h-[50px] flex justify-center items-center rounded cursor-pointer">
              <TbDotsVertical className="text-xl" />
            </div> */}
            </div>
            <button
              onClick={() => {
                openModal();
                setType("share");
              }}
              className="bg-[#336aff] cursor-pointer hover:bg-[#2b5ad9] text-white py-3 gap-2 tracking-wide px-4 w-full rounded text-lg justify-center flex items-center font-medium"
            >
              <FaLinkedin className="text-2xl text-white" /> Add to My LinkedIn
              Profile
            </button>
          </div>

          <div className="border border-black/12 p-4 rounded flex flex-col gap-5">
            <h4 className="font-bold text-[19px] tracking-wide mb-2">
              Credential Verification
            </h4>
            <div className="flex items-center gap-1">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="22"
                  height="22"
                  viewBox="0 0 256 256"
                >
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 47.613 6.011 l 8.531 -4.732 c 2.864 -1.588 6.47 -0.276 7.643 2.782 l 3.494 9.108 c 0.666 1.735 2.179 3.005 4.003 3.359 l 9.577 1.859 c 3.215 0.624 5.134 3.948 4.067 7.044 l -3.178 9.223 c -0.606 1.757 -0.263 3.702 0.907 5.147 l 6.141 7.58 c 2.061 2.544 1.395 6.324 -1.412 8.01 l -8.363 5.022 c -1.593 0.957 -2.581 2.667 -2.613 4.526 l -0.168 9.754 c -0.056 3.274 -2.996 5.741 -6.231 5.228 l -9.635 -1.528 c -1.836 -0.291 -3.692 0.384 -4.911 1.787 l -6.398 7.364 c -2.148 2.472 -5.986 2.472 -8.133 0 l -6.398 -7.364 c -1.219 -1.403 -3.075 -2.079 -4.911 -1.787 l -9.635 1.528 c -3.234 0.513 -6.174 -1.954 -6.231 -5.228 l -0.168 -9.754 c -0.032 -1.858 -1.02 -3.569 -2.613 -4.526 l -8.363 -5.022 c -2.807 -1.686 -3.474 -5.466 -1.412 -8.01 l 6.141 -7.58 c 1.17 -1.444 1.513 -3.389 0.907 -5.147 l -3.178 -9.223 c -1.067 -3.096 0.852 -6.42 4.067 -7.044 l 9.577 -1.859 c 1.825 -0.354 3.338 -1.624 4.003 -3.359 l 3.494 -9.108 c 1.173 -3.057 4.779 -4.37 7.643 -2.782 l 8.531 4.732 C 44.012 6.913 45.988 6.913 47.613 6.011 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "1",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "#336aff",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                    />
                    <path
                      d="M 41.325 61.54 c -1.134 0 -2.215 -0.481 -2.974 -1.325 l -12.35 -13.73 c -1.477 -1.642 -1.343 -4.171 0.299 -5.649 s 4.171 -1.343 5.649 0.299 l 9.318 10.359 l 18.732 -21.652 c 1.444 -1.67 3.97 -1.854 5.643 -0.408 c 1.671 1.445 1.854 3.971 0.408 5.642 l -21.7 25.081 c -0.751 0.868 -1.838 1.371 -2.986 1.383 C 41.351 61.54 41.338 61.54 41.325 61.54 z"
                      style={{
                        stroke: "white", // added visible stroke color
                        strokeWidth: 1, // increased stroke width for boldness
                        strokeDasharray: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                    />
                  </g>
                </svg>
              </div>
              <p className="text-sm tracking-wide text-black">
                This credential is from a{" "}
                <strong className="">verified issuer</strong>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                    fill="#5F7EDD"
                  />
                  <path
                    d="M24.9974 31.81L16.5974 26.8475L24.9974 38.6875L33.4049 26.8475L24.9974 31.81Z"
                    fill="white"
                  />
                  <path
                    d="M33.4001 25.2549L24.9976 30.2199L16.5951 25.2549L24.9976 11.3124L33.4001 25.2549Z"
                    fill="white"
                  />
                  <path
                    d="M33.4001 25.2549L24.9976 21.4349V11.3124L33.4001 25.2549Z"
                    fill="#C1CCF7"
                  />
                  <path
                    d="M33.4051 26.8475L24.9976 38.6875V31.81L33.4051 26.8475Z"
                    fill="#C1CCF7"
                  />
                  <path
                    d="M24.9974 21.4351V30.2201L16.5974 25.2551L24.9974 21.4351Z"
                    fill="#C1CCF7"
                  />
                  <path
                    d="M33.4001 25.2551L24.9976 30.2201V21.4351L33.4001 25.2551Z"
                    fill="#8198EE"
                  />
                </svg>

                <p className="text-sm tracking-wide text-black">
                  Secured by Blockchain{" "}
                </p>
              </div>
              <span
                className={`cursor-pointer flex text-sm items-center gap-1 transition-colors duration-200 ${
                  copied ? "text-green-600" : "text-blue-600"
                }`}
                onClick={() =>
                  copyLink(
                    "0xb5a260777e5f6148f95f19eaa0ca625e5ef78459b95c093817dd0634773f25e4"
                  )
                }
              >
                {copied ? "Copied" : "Copy ID"}
                {copied ? (
                  <IoCheckmark />
                ) : (
                  <PiCopySimple className="-scale-x-100 text-base" />
                )}
              </span>
            </div>
            <button
              onClick={() => {
                openModal();
                setType("verify");
              }}
              style={{ border: "1px solid rgba(35, 31, 32, .12)" }}
              className=" text-[#336aff] py-2  cursor-pointer px-4 w-full rounded text-sm font-medium mt-2"
            >
              Verify Credential
            </button>
          </div>

          <div className="border border-black/12 p-4 rounded flex flex-col gap-5">
            <h4 className="font-bold text-[19px] tracking-wide mb-2">
              More about the Issuer
            </h4>
            <div className="flex items-center ">
              <div
                className="relative w-10 h-10 mr-5 rounded-full "
                style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
              >
                <img src="cfa_circle.png" alt="CFA Institute" className="" />
                <div className="absolute -top-1.5 -right-3 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 47.613 6.011 l 8.531 -4.732 c 2.864 -1.588 6.47 -0.276 7.643 2.782 l 3.494 9.108 c 0.666 1.735 2.179 3.005 4.003 3.359 l 9.577 1.859 c 3.215 0.624 5.134 3.948 4.067 7.044 l -3.178 9.223 c -0.606 1.757 -0.263 3.702 0.907 5.147 l 6.141 7.58 c 2.061 2.544 1.395 6.324 -1.412 8.01 l -8.363 5.022 c -1.593 0.957 -2.581 2.667 -2.613 4.526 l -0.168 9.754 c -0.056 3.274 -2.996 5.741 -6.231 5.228 l -9.635 -1.528 c -1.836 -0.291 -3.692 0.384 -4.911 1.787 l -6.398 7.364 c -2.148 2.472 -5.986 2.472 -8.133 0 l -6.398 -7.364 c -1.219 -1.403 -3.075 -2.079 -4.911 -1.787 l -9.635 1.528 c -3.234 0.513 -6.174 -1.954 -6.231 -5.228 l -0.168 -9.754 c -0.032 -1.858 -1.02 -3.569 -2.613 -4.526 l -8.363 -5.022 c -2.807 -1.686 -3.474 -5.466 -1.412 -8.01 l 6.141 -7.58 c 1.17 -1.444 1.513 -3.389 0.907 -5.147 l -3.178 -9.223 c -1.067 -3.096 0.852 -6.42 4.067 -7.044 l 9.577 -1.859 c 1.825 -0.354 3.338 -1.624 4.003 -3.359 l 3.494 -9.108 c 1.173 -3.057 4.779 -4.37 7.643 -2.782 l 8.531 4.732 C 44.012 6.913 45.988 6.913 47.613 6.011 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "1",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "#336aff",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform="matrix(1 0 0 1 0 0)"
                      />
                      <path
                        d="M 41.325 61.54 c -1.134 0 -2.215 -0.481 -2.974 -1.325 l -12.35 -13.73 c -1.477 -1.642 -1.343 -4.171 0.299 -5.649 s 4.171 -1.343 5.649 0.299 l 9.318 10.359 l 18.732 -21.652 c 1.444 -1.67 3.97 -1.854 5.643 -0.408 c 1.671 1.445 1.854 3.971 0.408 5.642 l -21.7 25.081 c -0.751 0.868 -1.838 1.371 -2.986 1.383 C 41.351 61.54 41.338 61.54 41.325 61.54 z"
                        style={{
                          stroke: "white", // added visible stroke color
                          strokeWidth: 1, // increased stroke width for boldness
                          strokeDasharray: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(255,255,255)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform="matrix(1 0 0 1 0 0)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <a
                target="_blank"
                href="https://www.cfainstitute.org/?aad=BAhJIk57InR5cGUiOiJpc3N1ZXIiLCJ1cmwiOiJodHRwczovL3d3dy5jZmFpbnN0aXR1dGUub3JnL2VuLyIsImlkIjoxMTgxNDUzMzV9BjoGRVQ%3D--022c90d827e6b0add900752a2c03ad79b6bda033"
                className="border-black/12 tracking-wide hover:underline cursor-pointer text-sm mr-2"
              >
                CFA Institute
              </a>
            </div>
            <div className="border-t-2 border-black/12 pt-2">
              <a
                href="https://www.cfainstitute.org/?aad=BAhJIk57InR5cGUiOiJpc3N1ZXIiLCJ1cmwiOiJodHRwczovL3d3dy5jZmFpbnN0aXR1dGUub3JnL2VuLyIsImlkIjoxMTgxNDUzMzV9BjoGRVQ%3D--022c90d827e6b0add900752a2c03ad79b6bda033"
                target="_blank"
                className=" cursor-pointer"
              >
                <button
                  style={{ border: "1px solid rgba(35, 31, 32, .12)" }}
                  className=" text-[
#336aff] py-2 px-4 w-full hover:bg-[#336aff]/6 cursor-pointer rounded text-sm tracking-wide text-[#336aff] font-medium mt-2 flex items-center gap-1 justify-center"
                >
                  Visit Issuer Website
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    width="22px"
                    height="17px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 9L21 3M21 3H15M21 3L13 11"
                      stroke="#63647a"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
                      stroke="#63647a"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </a>

              <a
                href="https://www.cfainstitute.org/programs/cfa-program/exam?aad=BAhJIl97InR5cGUiOiJjb3Vyc2UiLCJ1cmwiOiJodHRwczovL3d3dy5jZmFpbnN0aXR1dGUub3JnL2VuL3Byb2dyYW1zL2NmYS9leGFtIiwiaWQiOjExODE0NTMzNX0GOgZFVA%3D%3D--65d91129d14f545dd64f54f9454c3cca3dfb6319"
                target="_blank"
                className=" cursor-pointer"
              >
                <button
                  style={{ border: "1px solid rgba(35, 31, 32, .12)" }}
                  className=" text-[
#336aff] py-2 px-4 w-full hover:bg-[#336aff]/6 cursor-pointer rounded text-sm tracking-wide text-[#336aff] font-medium mt-2 flex items-center gap-1 justify-center"
                >
                  Visit Course Page
                  <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    width="22px"
                    height="17px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 9L21 3M21 3H15M21 3L13 11"
                      stroke="#63647a"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
                      stroke="#63647a"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div
              className={`bg-white rounded-lg shadow-xl ${
                type == "verify" ? "max-w-2xl" : "md:max-w-xl"
              }  w-full mx-4 relative`}
            >
              {/* Close Button */}
              {type == "verify" ? (
                <p className="absolute py-4 text-xl bg-white z-40 tracking-wide px-6 w-full">
                  Credential Verification
                </p>
              ) : type == "email" ? (
                <p className="absolute py-4 text-xl bg-white z-40 tracking-wide px-6 w-full">
                  Share Credential via Email
                </p>
              ) : type == "share" ? (
                <p className="absolute py-4 text-xl bg-white z-40 tracking-wide px-6 w-full">
                  Add to LinkedIn profile
                </p>
              ) : (
                <p className="absolute py-4 text-xl bg-white z-40 tracking-wide px-6 w-full">
                  Help
                </p>
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 cursor-pointer z-50 text-gray-800 hover:text-gray-600 text-xl"
              >
                <svg
                  className="text-xl w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              {/* Modal Content */}

              {type == "share" && (
                <div className="p-6" style={{ color: "rgba(35, 31, 32, .87)" }}>
                  {/* Header */}
                  <h2
                    className="text-lg  mb-4 tracking-wide"
                    style={{ color: "rgba(35, 31, 32, .87)" }}
                  >
                    Add to LinkedIn profile
                  </h2>

                  {/* Description */}
                  <p className="text-sm mb-6 tracking-wide">
                    Add your certification to your <strong>LinkedIn</strong>{" "}
                    profile with 1 click
                  </p>

                  {/* Add to Profile Button */}
                  <a
                    className="w-fit"
                    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fprofile%2Fadd%3FstartTask%3DCERTIFICATION_NAME%26name%3DCFA%2520Program%2520Level%2520II%26organizationId%3D162977%26issueYear%3D2024%26issueMonth%3D10%26certId%3D118145335%26certUrl%3Dhttps%3A%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f"
                    target="_blank"
                  >
                    <button className="bg-[#0a66c2] w-fit cursor-pointer text-white px-4 py-2 rounded font-medium mb-6 flex items-center gap-2 text-sm tracking-wide transition-colors">
                      <svg
                        className="text-lg w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Add to my profile
                    </button>
                  </a>

                  {/* Bullet Points */}
                  <div className="mb-6">
                    <div className="flex items-start gap-2">
                      <span className="">•</span>
                      <p className="text-sm tracking-wide">
                        No expiration date:{" "}
                        <strong>
                          Click 'this certification does not expire' on LinkedIn
                        </strong>
                        .
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="">•</span>
                      <p className="text-sm tracking-wide">
                        LinkedIn no longer shares profile updates to your
                        network. Click the share button below to share your
                        credential instead.
                      </p>
                    </div>
                  </div>

                  {/* Share Button */}
                  <a
                    className="w-fit"
                    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%2F%3Furl%3Dhttps%3A%2F%2Fcredentials.cfainstitute.org%2F8d649f15-d4d7-44a2-9a3b-4605556a832f"
                    target="_blank"
                  >
                    <button className="bg-[#0a66c2] cursor-pointer text-white px-4 py-2 rounded font-medium mb-6 flex items-center gap-2 text-sm tracking-wide transition-colors">
                      <svg
                        className="text-lg w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Share
                    </button>
                  </a>

                  {/* Share Direct Link Section */}
                  <div className="border-t border-t-black/20 pt-6">
                    <h3 className="text-base mb-2">SHARE A DIRECT LINK</h3>

                    <div className="flex items-center gap-2 border bg-gray-50 border-[#0a66c2] rounded">
                      <input
                        type="text"
                        value={
                          "https://credentials.cfainstitute.org/8d649f15-d4d7-44a2-9a3b-4605556a832f#acc.WlBsUDx1"
                        }
                        readOnly
                        className="flex-1 px-3 py-2 outline-none font-medium text-sm  "
                      />
                      <button
                        onClick={() =>
                          copyLink(
                            "https://credentials.cfainstitute.org/8d649f15-d4d7-44a2-9a3b-4605556a832f#acc.WlBsUDx1"
                          )
                        }
                        className="px-3 py-2 text-sm cursor-pointer border-l border-l-black/16 flex items-center gap-1"
                      >
                        <svg
                          className="text-xs w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                        {copied ? "Copied!" : "Copy link"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {type == "verify" && (
                <>
                  {isComplete ? (
                    <div
                      className="px-6 py-4  overflow-y-auto max-h-[calc(90vh-100px)]"
                      style={{ color: "rgba(35, 31, 32, .87)" }}
                    >
                      {/* Verification Status */}
                      <div className="flex items-start gap-3 mb-6 mt-20">
                        <div className=" flex-shrink-0 mt-1">
                          <MdVerified className="text-[#3d9026] text-4xl" />
                        </div>
                        <div>
                          <div className="text-lg tracking-wide mb-1">
                            This <strong>CFA Program Level I</strong> Credential
                            is VERIFIED
                          </div>
                          <div className="text-sm tracking-wide">
                            This digital credential was securely issued via
                            Accredible and its information is valid.
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <hr className="border-gray-200 mb-6" />

                      {/* Issuer Section */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Check className="w-5 h-5 text-[#3d9026]" />
                          <span className="text-sm tracking-wide">
                            This issuer is verified by Accredible
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
                          >
                            <img
                              src="cfa_circle.png"
                              alt="CFA Institute"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              CFA Institute
                            </div>
                            <a
                              href="https://www.cfainstitute.org/en/?aad=BAhJIk57InR5cGUiOiJpc3N1ZXIiLCJ1cmwiOiJodHRwczovL3d3dy5jZmFpbnN0aXR1dGUub3JnL2VuLyIsImlkIjoxMTgxNDUzMzV9BjoGRVQ%3D--022c90d827e6b0add900752a2c03ad79b6bda033"
                              target="_blank"
                              className="text-blue-600 hover:text-blue-800 text-sm underline"
                            >
                              Issuer's Website
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <hr className="border-gray-200 mb-6" />

                      {/* Blockchain Section */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <IoMdLock className="text-2xl" />
                          <span className="font-medium tracking-wide">
                            Credential is Blockchain Secured
                          </span>
                        </div>
                        <div className="py-3 px-1">
                          <div className="flex items-center gap-2 mb-1">
                            <img src="ethereum.svg" className="w-5 h-5" />
                            <span className="text-sm tracking-wide">
                              Blockchain ID:
                            </span>
                          </div>
                          <div className="text-sm font-mono break-all bg-white pl-7 font-bold">
                            0xb5a260777e5f6148f95f19eaa0ca625e5ef78459b95c093817dd0634773f25e4
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <hr className="border-gray-200 mb-6" />

                      {/* Recipient Section */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Check className="w-5 h-5 text-[#3d9026]" />
                          <span className="text-sm ">
                            The owner of this credential has been verified
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div
                            style={{ background: "rgb(100, 114, 185)" }}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm border"
                          >
                            AD
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Aryan Deep
                            </div>
                            <a
                              href="/profile/aryandeep773193/wallet"
                              className="text-blue-600 hover:text-blue-800 text-sm tracking-wide mt-1 hover:underline"
                            >
                              View All Credentials
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <hr className="border-gray-200 mb-6" />

                      {/* Credential Details */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 tracking-wide">
                          <div>
                            <h3 className="font-medium mb-1 uppercase">
                              Issued on
                            </h3>
                            <div className="text-sm tracking-wide">
                              October 10, 2024
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium  mb-1 uppercase">
                              Expires on
                            </h3>
                            <div className="text-sm">Does not expire</div>
                          </div>
                        </div>

                        {/* Credential History */}
                        <div className="tracking-wide">
                          <h3 className="font-medium mb-3 uppercase">
                            Full credential history
                          </h3>
                          <ul className="space-y-1">
                            <li className="flex items-center text-sm ">
                              <span>2024-10-10</span>
                              <GoDotFill className="mx-2" />
                              <span>Credential Issued</span>
                            </li>
                            <li className="flex items-center text-sm ">
                              <span>2024-10-23</span>
                              <GoDotFill className="mx-2" />
                              <span>Blockchain Record Created</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px-6 py-8">
                      <div className="space-y-6">
                        {steps.map((step, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-3 transition-opacity duration-300 ${
                              index <= currentStep
                                ? "opacity-100"
                                : "opacity-30"
                            }`}
                          >
                            {step.icon}
                            <span className="text-gray-700">{step.text}</span>
                            {index === 1 && index <= currentStep && (
                              <div className="ml-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 text-xs font-bold">
                                    CFA
                                  </span>
                                </div>
                                <div className="text-sm">
                                  <div className="font-medium">
                                    CFA Institute
                                  </div>
                                  <div className="text-blue-600 text-xs">
                                    Issuer's Website
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {currentStep === steps.length - 1 && (
                        <div className="mt-6 text-center">
                          <div className="inline-flex items-center gap-2 text-blue-600">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-sm">
                              Finalizing verification...
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              {type == "email" && (
                <div
                  className="p-6 mt-9"
                  style={{ color: "rgba(35, 31, 32, .87)" }}
                >
                  <p className="text-sm tracking-wide  mb-2">
                    We will send a link to view your credential to the email
                    addresses you enter.
                  </p>

                  <p className="text-sm  tracking-wide mb-4">
                    Enter an email or a list of emails separated by commas.
                  </p>

                  {/* Email Input */}
                  <div className="mb-4">
                    <label
                      className="block text-base font-semibold mb-1"
                      style={{ color: "rgba(35,31,32,.8)" }}
                    >
                      Send To
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="joe@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>

                  {/* reCAPTCHA Notice */}
                  <div className="mb-4 text-xs bg-[#f4f5fa] p-2">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-[#336aff] hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      className="text-[#336aff] hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </div>

                  {/* Public Share Link */}
                  {/* <div className="mb-6 text-sm text-gray-600">
                  Or share this credential via{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    public share link
                  </a>
                </div> */}

                  {/* Buttons */}
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 text-sm hover:bg-[#2b5ad9] font-medium cursor-pointer text-white bg-[#336aff]  rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 hover:bg-[#2b5ad9] text-sm font-medium cursor-pointer text-white bg-[#336aff]  rounded-md transition-colors"
                      onClick={sendMail}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}

              {type == "help" && (
                <div
                  className="p-6 mt-9"
                  style={{ color: "rgba(35, 31, 32, .87)" }}
                >
                  <div className="mb-5">
                    <p className="text-sm tracking-wide mb-2 leading-relaxed">
                      Do you have a question about information on this
                      credential or other courses?
                    </p>
                    <a href="mailto:info@cfainstitute.org" target="_blank">
                      <button className="w-1/3 mx-auto px-4 py-2 cursor-pointer bg-[#336aff] hover:bg-[#2b5ad9]  text-white text-sm font-medium rounded-md transition-colors">
                        Contact Issuer
                      </button>
                    </a>
                  </div>

                  {/* Other difficulties */}
                  <div className="border-t border-t-[#1d1d1d]/10 pt-4">
                    <p className="text-sm tracking-wide mb-2">
                      Having other difficulties?
                    </p>
                    <a href="https://help.accredible.com" target="_blank">
                      <button className="w-1/3 mx-auto px-4 py-2 cursor-pointer hover:bg-[#2b5ad9] bg-[#336aff]  text-white text-sm font-medium rounded-md transition-colors">
                        Accredible Helpdesk
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Body;

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-start mt-12 min-h-screen bg-white">
    <div className="relative">
      {/* Main loading spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500"></div>

      {/* CFA Institute logo placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
      </div>
    </div>

    <div className="mt-6 text-center">
      <p className="text-gray-500 text-sm">
        Verifying credential information...
      </p>
    </div>

    {/* Loading progress indicators */}
    <div className="mt-4 space-y-3">
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <Loader2 className="w-4 h-4 animate-spin text-[#2b5ad9]" />
        <span>Authenticating credential data</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
        <span>Verifying issuer information</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
        <span>Loading certificate details</span>
      </div>
    </div>
  </div>
);
