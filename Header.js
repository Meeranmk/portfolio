import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex ,Box ,Text  } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";


function Header() {

    const {ColorMode} = useColorMode;
    const isDark = ColorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>  
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                 spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                 alignSelf="flex-start">
                 <Box ml={isNotSmallerScreen ? 0 : 16} align="flex-start">
                      <Text fontSize="5xl" fontWeight="semibond">Hi, I am</Text>
                      <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" >Meeran Mohideen</Text>
                      <Text color={isDark ? "gray.200" : "gray.500"}>student,learner,dreamer,frontend developer</Text>
                
                 <Button mt={8} colorScheme="blue" onclick={()=>
                      window.open("https://meeran.live")
                 }>Hire Me</Button>
                </Box>

                <Image alignSelf="center" mt ={isNotSmallerScreen ? "0" : "12"}  
                     mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                     backgroundColor="transparent" boxShadow="lg"
                     boxSize="300px" src="https://avatars.githubusercontent.com/u/118757533?s=400&u=cb70b34efc33a0d1f0c4da24fda815862923ff9e&v=4" />
                 
                 </Flex>
        </Stack>
    )
}

export default Header