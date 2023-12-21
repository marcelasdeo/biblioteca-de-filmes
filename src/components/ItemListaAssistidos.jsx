import { Alert } from "react-native";
import { Text, TouchableOpacity, View, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./Estilos";
import { deletarItemAssistido } from "./dados"

export default function ItemListaAssistidos({ item, dados, navigation }) {

	function alertConfirma(item) {

		Alert.alert('Deletar filme', `Deseja deletar ${dados.nome}?`, [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Deletar',
				onPress: () => deletarItemAssistido(item),
				style: 'default',
			},
		],
			{
				cancelable: true,
			},
		);

	}

	function editarItem(item) {
		navigation.navigate('Formulário', item);
	}

	return (
		<View style={styles.containerItens}>
			<View style={styles.containerDados}>
				<View>
					<Image
						style={styles.poster}
						source={{
							uri: `https://image.tmdb.org/t/p/w500${dados.poster}`,
						}}
					/>
				</View>
				<View>
					<Text style={styles.textoFilmeAssistido}>{dados.nome}</Text>
					<Text style={styles.textoLista}>{dados.genero}</Text>
					<Text style={styles.textoLista}>{item.notaAssistido}</Text>
					{/* <Text>{item.dataAssistido}</Text> */}
					<View style={styles.containerBotoesAssistido}>
						<TouchableOpacity onPress={() => alertConfirma(item)}>
							<MaterialCommunityIcons
								name={"delete"}
								size={30}
								color={"#D3B8F5"}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => editarItem(item)}>
							<MaterialCommunityIcons
								name={"pencil"}
								size={30}
								color={"#D3B8F5"}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}