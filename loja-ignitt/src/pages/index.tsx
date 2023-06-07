
import Image from "next/image"
import { styled } from "../../styles"
import { HomeContainer,Product } from "../../styles/home"

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'


export default function Home() {
  return (
    <HomeContainer>
     <Product>
    <Image src= {camiseta1} width={440} height={400} alt=""/>

    <footer>
      <strong> Camiseta X</strong>
      <span> R$ 79,90 </span>
    </footer>

     </Product>

     <Product>
    <Image src= {camiseta2} width={440} height={400} alt=""/>

    <footer>
      <strong> Camiseta X</strong>
      <span> R$ 79,90 </span>
    </footer>

     </Product>
    </HomeContainer>
 
   
  )
}
