import Colors from "@/constants/Colors";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const SignOutTouchable = () => {
    const { isLoaded,signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }

    const onPressSignOut = () => {
      router.replace('/(auth)/');
    }
      


    return (
        <TouchableOpacity
          onPress={() => onPressSignOut}
        >
            <Ionicons name='log-out' color={Colors.white} size={30} style={{marginHorizontal: 10}}/>
        </TouchableOpacity>
    );
  };

export default SignOutTouchable;