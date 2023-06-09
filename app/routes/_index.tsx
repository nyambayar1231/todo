import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import {
  DoLogo,
  LogoWithIcon,
  Repeat,
  TaskLogo,
  WriteLogo,
} from "~/components";
import heroImg from "../../public/images/hero.png";
import bannerImg from "../../public/images/banner.png";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();

  return (
    // <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
    //   <div className="relative sm:pb-16 sm:pt-8">
    //     <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    //       <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
    //         <div className="absolute inset-0">
    //           <img
    //             className="h-full w-full object-cover"
    //             src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
    //             alt="Sonic Youth On Stage"
    //           />
    //           <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
    //         </div>
    //         <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
    //           <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
    //             <span className="block uppercase text-yellow-500 drop-shadow-md">
    //               Indie Stack
    //             </span>
    //           </h1>
    //           <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
    //             Check the README.md file for instructions on how to get this
    //             project deployed.
    //           </p>
    //           <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
    //             {user ? (
    //               <Link
    //                 to="/notes"
    //                 className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
    //               >
    //                 View Notes for {user.email}
    //               </Link>
    //             ) : (
    //               <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
    //                 <Link
    //                   to="/join"
    //                   className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
    //                 >
    //                   Sign up
    //                 </Link>
    //                 <Link
    //                   to="/login"
    //                   className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
    //                 >
    //                   Log In
    //                 </Link>
    //               </div>
    //             )}
    //           </div>
    //           <a href="https://remix.run">
    //             <img
    //               src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
    //               alt="Remix"
    //               className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
    //       <div className="mt-6 flex flex-wrap justify-center gap-8">
    //         {[
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
    //             alt: "Fly.io",
    //             href: "https://fly.io",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
    //             alt: "SQLite",
    //             href: "https://sqlite.org",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
    //             alt: "Prisma",
    //             href: "https://prisma.io",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
    //             alt: "Tailwind",
    //             href: "https://tailwindcss.com",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
    //             alt: "Cypress",
    //             href: "https://www.cypress.io",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
    //             alt: "MSW",
    //             href: "https://mswjs.io",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
    //             alt: "Vitest",
    //             href: "https://vitest.dev",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
    //             alt: "Testing Library",
    //             href: "https://testing-library.com",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
    //             alt: "Prettier",
    //             href: "https://prettier.io",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
    //             alt: "ESLint",
    //             href: "https://eslint.org",
    //           },
    //           {
    //             src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
    //             alt: "TypeScript",
    //             href: "https://typescriptlang.org",
    //           },
    //         ].map((img) => (
    //           <a
    //             key={img.href}
    //             href={img.href}
    //             className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
    //           >
    //             <img alt={img.alt} src={img.src} className="object-contain" />
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <main className="relative min-h-screen bg-white">
      <div className="container mx-auto w-full max-w-[1200px] px-[20px] pb-[200px] pt-[40px]">
        <div className="navigation flex items-center justify-between">
          <nav>
            <ul>
              <li>
                <LogoWithIcon />
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/login"
                  className="text-2xl font-bold text-primaryRed"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-2xl font-bold text-primaryBlack"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-20" />
        <div className="flex flex-col items-center text-center font-rowdy text-5xl">
          <h2>Organizing your day activity</h2>
          <h2>with Todo Daily</h2>
        </div>

        <div className="mt-12" />
        <div className="banner">
          <div className="flex translate-y-4 justify-center">
            <button className=" rounded-lg  bg-primaryRed px-7 py-2 text-4xl font-bold text-white">
              Get Started
            </button>
          </div>
          <img
            className="h-full w-full object-cover"
            src={heroImg}
            alt="todo hero"
          />
        </div>
        <div className="h-[160px]" />
        <p className="text-center font-rowdy text-5xl font-bold">
          Don’t let your day doing nothing
        </p>
        <div className="h-[120px]" />
        <div className="flex items-center justify-around">
          <div className="flex flex-col">
            <TaskLogo />
            <div className="mt-[70px]" />
            <span className="text-3xl">Small task</span>
          </div>

          <div className="flex flex-col">
            <WriteLogo />
            <div className="mt-[70px]" />
            <span className="text-3xl">Write it</span>
          </div>

          <div className="flex flex-col">
            <DoLogo />
            <div className="mt-[70px]" />
            <span className="text-center text-3xl">Do it</span>
          </div>

          <div className="flex flex-col  ">
            <Repeat />
            <div className="mt-[70px]" />
            <span className="text-center text-3xl">Repeat</span>
          </div>
        </div>
        <div className="h-[300px]" />
        <div className="flex gap-14">
          <div>
            <img
              className="h-full w-full object-cover"
              src={bannerImg}
              alt="todo banner"
            />
          </div>

          <div className="mt-10 flex w-full flex-col items-start font-rowdy text-5xl font-bold ">
            <h2>Achieve your target</h2>
            <h2>and won your life</h2>
            <div className="mt-12" />
            <button className=" rounded-lg  bg-primaryRed px-7 py-2 text-4xl font-bold text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="h-[170px]" />
        <div className="h-[0.5px] w-full bg-primaryRed" />
        <div className="h-10" />
        <div className="flex justify-between">
          <div className="flex-col">
            <div className="flex gap-4">
              <TaskLogo />
              <div className="flex flex-col">
                <span>Lets change your habit</span>
                <span>join with million people</span>
              </div>
            </div>
            <div className="h-16" />
            <p>DK Tech Company</p>
            <p>Uma Street, Lost City, Aincard</p>
          </div>
          <div className="mx-10 flex gap-40">
            <div className="flex-col leading-7 text-secondaryGray">
              <h2 className="text-2xl text-primaryRed">Features</h2>
              <div className="h-9" />
              <p>Lorem</p>
              <p>Ipsum</p>
              <p>Sit</p>
              <p>Dolor</p>
            </div>
            <div className="flex-col leading-7 text-secondaryGray">
              <h2 className="text-2xl text-primaryRed">Pricing</h2>
              <div className="h-9" />
              <p>Lorem</p>
              <p>Ipsum</p>
              <p>Sit</p>
              <p>Dolor</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
