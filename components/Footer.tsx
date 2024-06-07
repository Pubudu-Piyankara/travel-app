import Link from "next/link";
import	Image from "next/image";
import logo from "../public/image/logo.jpg";
import React from "react";
import { footerLinks } from "@/constants";
import LogOut from "@/app/logout/page";
import Profile from "@/app/profile/page";

const Footer = () => {
  return (
    <footer className="flexCenter">
      <div className="padding-container max-container flex w-full flex-col">
        <div className="flex flex-col items-start justify-center md:flex-row">
          <Link href='/' className="mb-10">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {footerLinks.map((columns) => (
              // eslint-disable-next-line react/jsx-key
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            </div>
            <Profile/>
        </div>
        <LogOut/>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}
export default Footer;
