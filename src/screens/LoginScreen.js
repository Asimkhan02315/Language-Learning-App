import React from "react";
import { NativeBaseProvider, Box, Image, Center, Input, Button, Checkbox, Text } from "native-base";
const localImage = require('../assests/icons/images2.png');

const LoginScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <Center bg={'#eaeaea'} flex={1}>
                <Text fontWeight="bold" fontSize={18} mt={4}>Sign In</Text>
                <Image
                    mt={4}
                    source={localImage}
                    alt="Alternate Text"
                    size="xl"
                    style={{
                        width: "70%",
                        height: "40%",
                        padding: 10,
                    }}
                />

                <Box marginVertical={20} alignItems="center">
                    <Input mt={4} borderWidth={0} mx="3" placeholder="Phone Number" w="70%" />
                </Box>
                <Button onPress={() => navigation.navigate("DrawerStack")} style={{ backgroundColor: "#F9CB1E" }} w="70%" mt={4}>Login</Button>
            </Center>
        </NativeBaseProvider>
    )
}

export default LoginScreen