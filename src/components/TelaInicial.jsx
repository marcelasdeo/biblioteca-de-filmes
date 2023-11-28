import { View, Text } from "react-native";
import styles from "./Estilos";

export default function TelaInicial() {
    return (
        <View>
            <View style={styles.containerLogo}>
                <Text style={styles.logo}> MOVIES.LOG </Text>
            </View>
            <Text style={styles.titulo}> O que tem visto? </Text>
            <Text> Aqui você pode organizar todos seus filmes, assistidos ou para assistir. </Text>
        </View>
    )
}