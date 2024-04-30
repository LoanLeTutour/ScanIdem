import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./PhotoCard.styles";
import Colors from "@/constants/Colors";

const PhotoCard = () => {
    const date = new Date('20/10/2024');
    return (
        <View style={styles.container}>
            <View style={styles.overview}>
            <View style={styles.imageContainer}>
                <Image 
                resizeMode="cover"
                style={styles.image}
                source={require('../assets/images/icon.png')}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>18 Janvier 2024  </Text>
                <Text style={styles.text}>Idem</Text>
                <Text style={styles.text}>SwissKrono K-101-PE</Text>
                <Text style={styles.text}>Fiabilité : 67%</Text>
            </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Résultats</Text>
                    <Ionicons name="arrow-forward-circle" color={Colors.primary} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Supprimer</Text>
                    <Ionicons name="trash" color={Colors.primary} size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default PhotoCard;