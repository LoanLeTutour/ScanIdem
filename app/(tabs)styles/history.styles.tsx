import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Colors.primary,
    },
    container:{
        flex:1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Colors.secondary,
        padding: 10,
        paddingBottom: 20,
    }
});

export default styles;