import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding:5,
        gap: 10,
        marginBottom: 10,
    },
    overview:{
        flexDirection:'row',
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },
    imageContainer:{
        width: '40%',
        height: '100%',
        borderRadius: 10,
    },
    image:{
        width: 145,
        height:200,
        borderRadius: 10,
    },
    infoContainer:{
        width: '55%',
        height: '100%',
        padding: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Colors.secondary,
        flex: 1,
        alignItems: 'flex-start',
        gap: 5,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between'
    },
    button:{
        width:'49%',
        alignItems: 'center',
        padding:5,
        gap: 3,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
    },
    buttonText:{
        color: Colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },
    text:{
        color: Colors.white,
        fontWeight: 'bold',
    }

})

export default styles;