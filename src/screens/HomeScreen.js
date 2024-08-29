import { View, } from 'react-native'
import React from 'react'
import { Badge, Box, Center, Container, HStack, HamburgerIcon, Heading, Image, Menu, Pressable, Stack, Text, VStack } from 'native-base'
const localImage = require('../assests/icons/images4.png');
const boxImage = require('../assests/icons/images6.png');
const boxImage1 = require('../assests/icons/images7.png');
const boxImage2 = require('../assests/icons/images8.png');
const boxImage3 = require('../assests/icons/images9.png');
const images10 = require('../assests/icons/images10.png');
const images11 = require('../assests/icons/images11.png');
const images12 = require('../assests/icons/images12.png');
const HomeScreen = ({ navigation }) => {
  return (
    <Box>
      <Center padding={5}>
        <Image size="xl" style={{ width: '100%', borderRadius: 20 }} source={localImage} />
      </Center>
      <Heading p={5} paddingLeft={6} size="md">
        What do you want to do today?
      </Heading>
      <VStack space="5" mt="5" px="4" >
        <Stack direction="row" flexWrap={'wrap'} mt="1.5" space={10} >
          <Box px="5">
            <Pressable onPress={() => navigation.navigate("Lesson")}>
              <Image size="xl" source={boxImage} />
              <Center>
                <Text fontWeight="bold" fontSize={15}>Lessons</Text>
              </Center>
            </Pressable>
          </Box>
          <Box>
            <Pressable onPress={() => navigation.navigate("Practice")}>
              <Image size="xl" source={boxImage1} />
              <Center>
                <Text fontWeight="bold" fontSize={15}>Practice</Text>
              </Center>
            </Pressable>
          </Box>
          <Box mt="1.5">
            <Badge
              colorScheme="success" rounded="full" mb={-4} mr={-2} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                fontSize: 15
              }}>
              4
            </Badge>
            <Pressable onPress={() => navigation.navigate("Daily")}>
              <Image size="xl" source={boxImage2} />
              <Center>
                <Text fontWeight="bold" fontSize={15}>Daily Dose</Text>
              </Center>
            </Pressable>
          </Box>
          <Box mt="5">
            <Pressable onPress={() => navigation.navigate("Account")}>
              <Image size="xl" source={boxImage3} />
              <Center>
                <Text fontWeight="bold" fontSize={15}>My Account</Text>
              </Center>
            </Pressable>
          </Box>
        </Stack>
      </VStack>
      <Box w="90%" mt="10" alignItems='flex-end'>
        <Menu w="190" trigger={triggerProps => {
          return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Image source={images10} borderRadius={50} size={50} />
          </Pressable>
        }}>
          <Box flexDirection={'row'}>
            <Menu.Item>Help</Menu.Item>
            <Image source={images11} borderRadius={50} size={30} alt="Description of the image" />
          </Box>
          <Box flexDirection={'row'}>
            <Menu.Item>Word Definition</Menu.Item>
            <Image source={images12} borderRadius={50} size={30} alt="Description of the image" />
          </Box>
        </Menu>
      </Box>
    </Box>
  )
}

export default HomeScreen