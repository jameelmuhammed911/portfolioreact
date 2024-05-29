import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='white' color='black'>
      <VStack display='flex' alignItems='baseline' padding='1px'>
        <Image src={imageSrc} alt= {title} />
        <Heading as='h3' size='md'>{title}</Heading>
        <Text fontSize='sm' color='GrayText'>{description}</Text>
        <Text fontSize='sm'><b>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></b></Text>
      </VStack>
    </Box>
    
  );
};

export default Card;
