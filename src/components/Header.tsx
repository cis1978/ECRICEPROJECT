// components/Header.tsx
"use client";

import Link from 'next/link';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import { FaNewspaper } from 'react-icons/fa';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import { Box } from '@mui/material';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from 'react';

const components: { title: string; href: string; description: string }[] = [
  // コンポーネントデータをここに追加
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  return (
    <header className='headercontainer'>           
      <Link href="/">
        <img src="7D1866E4-F18D-4B76-B4DC-641A01A3E5DB.jpeg" className='logo'/>  
      </Link>
      <div className='total-navigation'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl"><FaNewspaper /> ニュース/トピック</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green' }}>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          美しくデザインされたコンポーネントをコピーしてアプリに貼り付けることができます。アクセス可能でカスタマイズ可能、オープンソース。
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Radix UIとTailwind CSSを使用して構築された再利用可能なコンポーネント。
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    依存関係をインストールし、アプリを構築する方法。
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    見出し、段落、リストなどのスタイル。
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl items-center relative top-15 left-15"><RiceBowlIcon /><span>お米を買う</span></NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green' }}>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl"><FaNewspaper /> RICEDAOとは</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green' }}>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/aboutus">
                        <div className="mb-2 mt-4 text-lg font-medium">サービス内容</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          RICE DAO:お米プロジェクトのハブとなる。お米に関する色んなプロジェクトがRICE DAOから発する。お米に関心のある人々が集まって棚田プロジェクトやお米製品のクラウドファンディングなどが進む場所。その中で消費者と生産者の距離が自然と縮まる、お米の理解が進む。また発生した収益はトレジャリにたまり、トークンの価値もそれに応じて変動して購入できるようになる。
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/aboutus" title="チーム">
                    トップコントリビューター10人+アドバイザー3人
                  </ListItem>
                  <ListItem href="/docs/installation" title="目的">
                    持続可能性なお米社会を実現する。
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-2xl items-center relative top-15 left-15"><CampaignRoundedIcon sx={{ fontSize: 35 }} /><span>お知らせ</span></NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green' }}>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
