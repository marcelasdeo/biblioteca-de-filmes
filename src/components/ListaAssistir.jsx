import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Estilos";
import ItemListaAssistir from "./ItemListaAssistir";
import { getListaAssistir } from "./dados";

export default function ListaAssistir(props) {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		getListaAssistir().then((lista) => setItens(lista))
	}, [itens, props])

	return (
		<View>

			<View style={styles.containerLogo}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<Text style={styles.title}> Filmes Para Assistir </Text>

			<ScrollView
				contentContainerStyle={styles.itemsContainer}
			>
				{itens.map((item) => (
					<ItemListaAssistir key={item.id} item={item} navigation={props.navigation} />
				))}
				{itens.length == 0 && <Text style={styles.text}>Lista Vazia</Text>}
			</ScrollView>
		</View>
	);
}