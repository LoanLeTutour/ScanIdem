import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        padding: 30,
        alignItems: 'center',

    },
    logo:{
        width: 300,
        height:300,
        marginVertical: 50,
    },
    inputField: {
        height: 44,
        width: '80%',
        borderWidth: 3,
        borderColor: Colors.primary,
        borderRadius: 8,
        padding: 10,
        backgroundColor: Colors.white,
        marginBottom: 20,

    },
    btn: {
        backgroundColor: Colors.primary,
        height: 50,
        width: '40%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'mon-b',
    },

})

export default styles;