import React from 'react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import { IconButton } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { VStack, Flex, Heading, Spacer} from '@chakra-ui/layout';
import Header from './components/Header';
import Profile from "./components/Profile";
import Social from "./components/Social";


function App() { 

  const { colorMode , toggleColorMode} = useColorMode();
  const isDark = colorMode ==="dark";
  return (
    <VStack p={5} >
       <Flex w="100">
          <Heading ml="15" size="md" fontWeight="semibond" color="cyan.400"  >Meeran Mohideen
           </Heading>
           <Spacer />
           <IconButton icon={<FaLinkedin />} isRound="true"  onClick={() => window.open("https://www.linkedin.com/in/meeran-mohideen-455505234/") }></IconButton>
           <IconButton ml={2}  icon={<FaInstagram />} isRound="true" onClick= {() => window.open("https://www.instagram.com/_meeran_mohideen/")}> </IconButton>
            <IconButton ml={2}  icon={<FaGithub />} isRound="true" onClick={()=> window.open("https://github.com/meeranmk/")}> </IconButton>
           <IconButton ml={5}icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>  
           
           </Flex>
           <Header></Header>
           <Social></Social>
           <Profile></Profile>
        
        
        
    </VStack>
  )
}

export default App;