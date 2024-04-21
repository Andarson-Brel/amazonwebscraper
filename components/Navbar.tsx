import Image from "next/image";
import Link from "next/link";
import React from "react";
const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search icon" },
  { src: "/assets/icons/black-heart.svg", alt: "black-heart icon" },
  { src: "/assets/icons/user.svg", alt: "user icon" },
];
const Navbar = () => {
  return (
    <header className=" w-full">
      <nav className="nav">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Price<span className=" text-red-500">Wise</span>
          </p>
        </Link>
        <div className="flex gap-5 items-center">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
