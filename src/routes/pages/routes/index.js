import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../Welcome";
import Signing from "../Signing";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={"Signing"}
        component={Signing}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
