
// クライアントサイドの実行指示
"use client";

// 'next/link'からLinkコンポーネントをインポート
import Link from 'next/link';

import RiceBowlIcon from '@mui/icons-material/RiceBowl';

import { FaNewspaper, FaShoppingCart } from 'react-icons/fa'; // React Iconsからアイコンをインポート

import RiceDAOcards from '../components/RiceDAOcards';

// React とその他必要なモジュールのインポート
import * as React from "react";
import { Box } from '@mui/material';

// カスタムコンポーネントのインポート
import Footer from '../components/Footer';
import ActionAreaCard from '../components/Article';


import { Card, CardContent } from '@mui/material';
import { client } from "../lib/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';


//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'ricedao' });

  console.log(data);
  return {
    props: {
      ricedao: data.contents,
    },
  };
};

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6" style={{ aspectRatio: '1 / 1.5' }}>
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}


export function CarouselSize() {
  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="flex ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2 flex justify-center">
              <div className="p-1 ">
                <Card className="h-30 w-30 md:h-60 md:w-60 lg:h-80 lg:w-80 justify-center">
                  <CardContent className="flex aspect-square items-center justify-center p-6 ">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}


export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

interface RiceDAO {
  image: string;
  id: string;
  title: string;
  body: string;
  // 他のプロパティを追加
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import CampaignRounded from '@mui/icons-material/CampaignRounded';
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
  )
})
ListItem.displayName = "ListItem"








// index.tsx のデフォルトエクスポート関数
export default function Home({ ricedao }: { ricedao: RiceDAO[] }) {
  return (
    <>
    

  
    <main className="pickupnews">
    
 

    <div className="leftcon">
    <span className="font-semibold"> {ricedao.length > 0 && <RiceDAOcards ricedao={ricedao[0]} />}</span>
    </div>

    <div className="rightcon"> 

    <span className="font-semibold ">{ricedao.length > 1 && <RiceDAOcards ricedao={ricedao[1]} />}</span>
                 
    <span className="font-semibold ">{ricedao.length > 2 && <RiceDAOcards ricedao={ricedao[2]} />}</span>
    </div>               
            
    <div className='adv'>
    <img src='A2B3D051-1961-49E3-8014-82F55408CE86.jpeg' />
    </div>
   
    
  <div className='lotnews flex flex-wrap justify-between'>
  {ricedao.length > 3 && (
    <span className="font-semibold w-1/2 p-2">
      <RiceDAOcards ricedao={ricedao[3]} />
    </span>
  )}
  {ricedao.length > 4 && (
    <span className="font-semibold w-1/2 p-2">
      <RiceDAOcards ricedao={ricedao[4]} />
    </span>
  )}
  {ricedao.length > 5 && (
    <span className="font-semibold w-1/2 p-2">
      <RiceDAOcards ricedao={ricedao[5]} />
    </span>
  )}
  {ricedao.length > 6 && (
    <span className="font-semibold w-1/2 p-2">
      <RiceDAOcards ricedao={ricedao[6]} />
    </span>
  )}
  {ricedao.length > 7 && (
    <span className="font-semibold w-1/2 p-2">
      <RiceDAOcards ricedao={ricedao[7]} />
    </span>
  )}
  {ricedao.length > 8 && (
    <span className="font-semibold w-1/2 p-2">
      <RiceDAOcards ricedao={ricedao[8]} />
    </span>
  )}
</div>


   </main>


      
    </>
  );
}
