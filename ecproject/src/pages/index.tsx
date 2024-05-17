
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
  image: any;
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
    
    <header className='headercontainer'>           
    <img src="7D1866E4-F18D-4B76-B4DC-641A01A3E5DB.jpeg" className='logo'/>  
     <div className='total-navigation'>
     
    <NavigationMenu >
      
      <NavigationMenuList>
     
      
        <NavigationMenuItem>

        <NavigationMenuTrigger className="text-2xl"><FaNewspaper  /> ニュース</NavigationMenuTrigger>
          

          

          <NavigationMenuContent  className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green'  }}>
         
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem >
          <NavigationMenuTrigger className="text-2xl items-center relative top-15 left-15" > <RiceBowlIcon></RiceBowlIcon><span>お米を買う</span> </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green'  }}>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
        <NavigationMenuItem>

        <NavigationMenuTrigger className="text-2xl"><FaNewspaper  /> ニュース</NavigationMenuTrigger>
          

          

          <NavigationMenuContent  className="bg-white" style={{ borderStyle: 'solid', borderWidth: '8px', borderColor: 'green'  }}>
         
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </header>

  
  <main className="container">
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full border-gray-300 rounded-lg "
    >
      <ResizablePanel defaultSize={100}>
        <div className="flex h-full items-center justify-center p-6 ">
          <span className="font-semibold"> {ricedao.length > 1 && <RiceDAOcards ricedao={ricedao[0]} />}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      
     
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6  ">
              <span className="font-semibold">{ricedao.length > 1 && <RiceDAOcards ricedao={ricedao[1]} />}</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{ricedao.length > 2 && <RiceDAOcards ricedao={ricedao[2]} />}</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
      
    <img src="A2B3D051-1961-49E3-8014-82F55408CE86.jpeg" className='adv'/>    
       
            
      

     

     



          
    </main>
        {/* ... */}
      
    </>
  );
}

