import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Estilos";
import ItemListaAssistir from "./ItemListaAssistir";
import { getListaAssistir } from "./dados";
import { getDadosFilme } from "./Api";

export default function ListaAssistir(props) {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		getListaAssistir().then(async (lista) => {
			const aux = []
			for (let i of lista) {
				const data = await getDadosFilme(i.id)
				aux.push({
					dados: data,
					item: i
				})
			}
			setItens(aux)
		})
	}, [itens, props])

	return (
		<View>
			<View style={styles.containerLogo}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<ScrollView contentContainerStyle={styles.containerItens} >

				<Text style={styles.tituloLista}> Filmes Para Assistir </Text>

				{itens.map((item) => (
					<ItemListaAssistir key={item.dados.id} dados={item.dados} item={item.item} navigation={props.navigation} />
				))}
				{itens.length == 0 && <Text style={styles.texto}>Lista Vazia</Text>}

			</ScrollView>
		</View>
	);
}