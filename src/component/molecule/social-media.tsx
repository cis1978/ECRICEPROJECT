import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  const SNSInfo = [
    {
      title: "Instagram",
      src: "/LP/social-media/instagram.png",
      href: "https://www.instagram.com/",
    },
    {
      title: "Spotify",
      src: "/LP/social-media/spotify.png",
      href: "https://www.spotify.com/",
    },
    {
      title: "note",
      src: "/LP/social-media/note.png",
      href: "https://note.com/",
    },
    {
      title: "X",
      src: "/LP/social-media/x.png",
      href: "https://twitter.com/",
    },
    {
      title: "YouTube",
      src: "/LP/social-media/youtube.png",
      href: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {SNSInfo.map((sns) => {
        return (
          <Link
            href={sns.href}
            key={sns.title}
            target="_blank"
            rel="noreferrer">
            <Image src={sns.src} width={36} height={36} alt={sns.title} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
