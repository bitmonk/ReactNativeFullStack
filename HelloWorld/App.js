import { Text, View, Image, ScrollView} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");



export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "grey", padding: 60 }}>
      <ScrollView>
    <Image source={logoImg} style={{width:300, height: 300}}></Image>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium autem debitis! Culpa, quos! Quia sint ipsa impedit eum atque blanditiis sapiente modi, unde quasi velit 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium autem debitis! Culpa, quos! Quia sint ipsa impedit eum atque blanditiis sapiente modi, unde quasi velit 
    </Text>
    <Image source={logoImg} style={{width:300, height: 300}}></Image>
    </ScrollView>
    </View>
  );               
}