import Button from "@component/atom/button";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  const SectionInfo = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Buy Rice",
      href: "/buy-rice",
    },
    {
      title: "News/Topics",
      href: "/news",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  return (
    <nav className="text-white text-xl">
      <ul className="flex justify-between items-center gap-6">
        {SectionInfo.map((section) => {
          return (
            <li key={section.title}>
              <Link href={section.href}>
                <p>{section.title}</p>
              </Link>
            </li>
          );
        })}
        <Button label="Join" href="/contact" />
      </ul>
    </nav>
  );
};

export default Navigation;
