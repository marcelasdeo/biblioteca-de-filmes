import { Alert } from "react-native";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./Estilos";
import { deletarItemAssistir } from "./dados"

export default function ItemListaAssistir({ item, navigation }) {

	function alertConfirma(item) {

		Alert.alert(
			'Excluir',
			'Tem certeza que deseja fazer a exclusão?',
			[
				{
					text: 'Sim',
					onPress: () => deletarItemAssistir(item),
					style: 'default',
				},
				{
					text: 'Não',
					style: 'cancel',
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
					<Text style={styles.textoLista}>{item.nome}</Text>
					<Text style={styles.textoLista}>{item.genero}</Text>
					<TouchableOpacity onPress={() => alertConfirma(item)}>
						<Text>Deletar</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => editarItem(item)}>
						<Text>Editar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}