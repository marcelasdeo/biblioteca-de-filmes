import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Estilos";
import ItemListaAssistir from "./ItemListaAssistir";
import { getListaAssistir } from "./dados";
import { getDadosFilme } from "./Api";

export default function ListaAssistir(props) {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		getListaAssistir().then( async (lista) => {
			const aux = []
			for (let i of lista) {
				console.log(i)
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

			<Text style={styles.title}> Filmes Para Assistir </Text>

			<ScrollView
				contentContainerStyle={styles.itemsContainer}
			>{console.log(itens)}
				{itens.map((item) => (
					<ItemListaAssistir key={item.id} item={item} navigation={props.navigation} />
				))}
				{itens.length == 0 && <Text style={styles.text}>Lista Vazia</Text>}
			</ScrollView>
		</View>
	);
}