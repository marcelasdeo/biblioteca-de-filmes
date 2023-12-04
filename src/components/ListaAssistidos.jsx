import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Estilos";
import ItemListaAssistidos from "./ItemListaAssistidos";
import { getLista } from "./dados";

export default function ListaAssistidos({ navigation }, props) {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		getLista().then((lista) => setItens(lista))
	}, [itens, props])

	return (
		<View>

			<View style={styles.containerLogo}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<Text style={styles.title}> Filmes Assistidos </Text>

			<ScrollView
				style={styles.scrollContainer}
				contentContainerStyle={styles.itemsContainer}
			>
				{itens.map((item) => (
					<ItemListaAssistidos key={item.id} item={item} navigation={props.navigation} />
				))}
				{itens.length == 0 && <Text style={styles.text}>Lista Vazia</Text>}
			</ScrollView>
		</View>
	);
}