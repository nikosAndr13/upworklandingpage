"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import { useState } from "react";
const navigation: string[] = ["Company", "Blog", "Pricing", "Log in"];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full flex justify-center bg-(--dark-blue-background) px-2 lg:px-10">
        <div className="flex max-w-[1250px] w-full items-center justify-between mx-auto py-2">
          <div>
            <Image src={logo} alt="logo" className="w-[108px] h-[48px]" />
          </div>
          <div className="flex gap-[48px] items-center">
            {navigation.map((nav: string) => {
              return (
                <Fragment key={nav}>
                  <Link
                    href="#"
                    className="hidden lg:block text-white font-semibold hover:underline underline-offset-8 decoration-(--yellow-button-background) decoration-[2px]"
                  >
                    {nav}
                  </Link>
                </Fragment>
              );
            })}
            <button className="hidden lg:block bg-(--yellow-button-background) font-semibold py-[12px] px-[8px] rounded-sm w-[117px] flex items-center justify-center cursor-pointer">
              Get Started
            </button>
            <Image
              src={Menu}
              alt="menu"
              width={30}
              height={30}
              className="block lg:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-[50px] right-0 h-full w-[60%] bg-(--dark-blue-background) text-white p-6 z-50 transition-transform duration-300 ease-in-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <ul className="space-y-6 text-lg font-semibold">
          {navigation.map((nav) => (
            <li key={nav}>
              <Link href="#" onClick={() => setOpenMenu(false)}>
                {nav}
              </Link>
            </li>
          ))}
          <li>
            <button className="bg-(--yellow-button-background) mt-4 w-full py-2 rounded-sm text-(--base-text) font-semibold">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
