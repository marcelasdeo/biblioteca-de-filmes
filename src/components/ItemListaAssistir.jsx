import { Alert } from "react-native";
import { Text, TouchableOpacity, View, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./Estilos";
import { deletarItemAssistir } from "./dados"

export default function ItemListaAssistir({ item, navigation }) {

	function alertConfirma(item) {

		Alert.alert('Deletar filme', `Deseja deletar ${item.nome}?`, [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Deletar',
				onPress: () => deletarItemAssistir(item),
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
							uri: `https://image.tmdb.org/t/p/w500${item.poster}`,
						}}
					/>
				</View>
				<View>
					<Text style={styles.textoFilmeAssistir}>{item.nome}</Text>
					<Text style={styles.textoLista}>{item.genero}</Text>
					<View style={styles.containerBotoesAssistir}>
						<TouchableOpacity onPress={() => alertConfirma(item)}>
							<MaterialCommunityIcons
								name={"delete"}
								size={30}
								color={"red"}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => editarItem(item)}>
							<MaterialCommunityIcons
								name={"pencil"}
								size={30}
								color={"green"}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}