import { View, Text } from "react-native";
import styles from "./Estilos";

export default function TelaInicial() {

    return (
        <View>
            <View style={styles.containerLogo}>
                <Text style={styles.logo}> MOVIES.LOG </Text>
            </View>
            <View style={styles.containerInicial}>
                <Text style={styles.tituloInicial}> O que tem visto? </Text>
                <Text style={styles.textoInicial}> Aqui você pode organizar todos seus filmes, assistidos ou para assistir. </Text>
            </View>
        </View>
    )
}