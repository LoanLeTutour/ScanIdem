import Colors from "@/constants/Colors";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const SignOutTouchable = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }

      


    return (
        <TouchableOpacity
          onPress={() => signOut()}
        >
            <Ionicons name='log-out' color={Colors.secondary} size={30} style={{marginHorizontal: 10}}/>
        </TouchableOpacity>
    );
  };

export default SignOutTouchable;