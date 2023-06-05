import { styled } from "../../styles"

const Button = styled ('button',{
background: "$green500",
borderRadius: 4,
padding: '4px 8px'

}
  
  )
export default function Home() {
  return (
    <div>
       <h1>Hello Word</h1>
       <Button> entrarr</Button>
       
    </div>
   
  )
}
