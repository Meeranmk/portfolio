import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex , Box , Heading , Text } from '@chakra-ui/layout';
import{Icon} from "@chakra-ui/icon";
import { DiJava, DiJavascript, DiReact} from "react-icons/di"

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100"
     maxWidth={{ base:"100vh" , md: "130vh" , lg: "130vh", xl:"130vh"}}>
     <Box alignSelf="center" px="32" py="16">
        <Text fontSize="2x1" color="gray.400">CERTIFIED BY</Text>

        <Heading fontWeight="extrabold" color="cyan.500" size="4x1">
            META
        </Heading>
   
       </Box>
   
   
      <Box alignSelf="center" px="32" py="16">
          <Text fontWeight="bold" fontSize="2x1">Upcoming web apps developer</Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
             <Icon color="white" p="4" as={DiJava} w="24" h="24" />
             <Text color="white" p="4" fontSize="x1" fontWeight="semibold">
                JAVA
             </Text>
          </Flex>

          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
             <Icon color="black" p="4" as={DiJavascript} w="24" h="24" />
             <Text color="black" p="4" fontSize="x1" fontWeight="semibold">
                JAVASCRIPT
             </Text>
          </Flex>


          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}  bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.400", }}>
             <Icon color="black" p="4" as={DiReact} w="24" h="24" />
             <Text color="black" p="4" fontSize="x1" fontWeight="semibold">
                React 
             </Text>
          </Flex>
         </Flex>
          

      </Box>


     </Flex>

    
    )
}

export default Profile