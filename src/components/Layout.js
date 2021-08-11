import React, {useState} from "react"
import Theme from "../styles/Theme"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const logo = 'FooBar'

  return (
    
      <Theme style={{ maxHeight: 300 }}>
        <GlobalStyle/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} logo={logo}/>
          <main>{children}</main>
        <Footer/>  
      </Theme>
    
    
  )
}


export default Layout
