
// クライアントサイドの実行指示
"use client";

// 'next/link'からLinkコンポーネントをインポート
import Link from 'next/link';


import RiceDAOCards from '@/components/RiceDAOCards';

// React とその他必要なモジュールのインポート
import * as React from "react";
import { Box } from '@mui/material';

// カスタムコンポーネントのインポート
import Footer from '../components/Footer';
import ActionAreaCard from '../components/Article';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Card, CardContent } from '@mui/material';
import { client } from "../lib/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  // 他のプロパティを追加
}

// index.tsx のデフォルトエクスポート関数
export default function Home({ ricedao }: { ricedao: RiceDAO[] }) {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <div className="container">
        
      <div className='Leftupcontents'>
      <RiceDAOCards ricedao={ricedao} />
      </div>



          <div className='Leftdowncontents'>
           <div> {Array.isArray(ricedao) && ricedao.map((item) => (
           <li key={item.id}>
            <Link href={`/ricedao/${item.id}`}> {item.title}
           </Link>
            <ActionAreaCard image={item.image} title={item.title} />
           </li>
           ))}
         </div>
          </div>

        <div className='Rightupcontents'>
          <div> {Array.isArray(ricedao) && ricedao.map((item) => (
           <li key={item.id}>
           <Link href={`/ricedao/${item.id}`}>
            {item.title}
           </Link>
            <ActionAreaCard image={item.image} title={item.title} />
           </li>
            ))}
           </div>
        </div>


        <div className='Rightdowncontents'>
         <div>{Array.isArray(ricedao) && ricedao.map((item) => (
          <li key={item.id}>
              <Link href={`/ricedao/${item.id}`}>
         {item.title}
         </Link>
               <ActionAreaCard image={item.image} title={item.title} />
           </li>
            ))}
           </div>
        </div>
        
        
        
        
        
        </div>
        <div className='mainarticle' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CarouselDemo />
        </div>
        <div className="banner">
          <img src="/A2B3D051-1961-49E3-8014-82F55408CE86.jpeg" alt="" className="image-size" />
        </div>
        <div className="todaynewsranking">
          <div className="rankingcontents">
            <CarouselSpacing />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

