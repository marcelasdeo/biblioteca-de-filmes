import { View, Text } from "react-native";
import styles from "./Estilos";

export default function TelaInicial() {

    return (
        <View style={styles.telaInicial}>
            <View style={styles.containerLogo}>
                <Text style={styles.logo}> MOVIES.LOG </Text>
            </View>
            <View style={styles.containerTelaInicial}>
                <Text style={styles.tituloInicial}> O que tem visto? </Text>
                <Text style={styles.textoTelaInicial}> Aqui você pode organizar todos seus filmes, assistidos ou para assistir. </Text>
            </View>
        </View>
    )
}