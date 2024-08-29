import React from "react";
import { NativeBaseProvider, Box, Image, Center, Input, Button, Checkbox, Text } from "native-base";
const localImage = require('../assests/icons/images1.png');

const SignUpScreen = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Center bg={'#eaeaea'} flex={1}>
                <Text fontWeight="bold" fontSize={18} mt={4}>Create an Account</Text>
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

                <Box  alignItems="center">
                    <Input mt={4} borderWidth={0.5} mx="3"  placeholder="Name" w="70%" />
                    <Input mt={4} borderWidth={0.5} mx="3" placeholder="Phone Number" w="70%" />
                </Box>

                <Checkbox w="70%" mt={4} value="test" accessibilityLabel="This is a dummy checkbox" >
                    By typing sign up accept all terms and conditions
                </Checkbox>
                <Button onPress={() => navigation.navigate("Login")} style={{ backgroundColor: "#F9CB1E" }} w="70%" mt={4}>Create an Account</Button>
            </Center>
        </NativeBaseProvider>
    )
}

export default SignUpScreen