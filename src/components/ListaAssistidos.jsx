import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Estilos";
import ItemListaAssistidos from "./ItemListaAssistidos";
import { getListaAssistido } from "./dados";
import { getDadosFilme } from "./Api";

export default function ListaAssistidos(props) {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		getListaAssistido().then( async (lista) => {
			const aux = []
			for (let i of lista) {
				aux.push(await getDadosFilme(i.id))
			}
			setItens(aux)
		})
	}, [itens, props])

	return (
		<View>

			<View style={styles.containerLogo}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<Text style={styles.title}> Filmes Assistidos </Text>

			<ScrollView
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