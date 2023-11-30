import { View, Text, ScrollView } from "react-native";
import styles from "./Estilos";

export default function ListaAssistidos({ navigation }) {
	// navigation.navigate('Para assistir')

    return (
        <View>

            <View style={styles.containerLogo}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<Text style={styles.title}> Filmes para Assistir </Text>

			<ScrollView
				style={styles.scrollContainer}
				contentContainerStyle={styles.itemsContainer}
			>
				<Text> Filme </Text>
			</ScrollView>
		</View>
    );
}