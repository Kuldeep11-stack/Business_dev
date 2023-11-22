import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVedio from '../src/components/BrandingVedio/BrandingVedio';
import WhatWeDo from '@/src/components/What we do/WhatWeDo';
export default function Home() {

  return (
    <div className='app'>
     <Navbar/>
     <Hero/>
     <BrandingVedio/>
     <WhatWeDo/>
    </div>
  );
}
