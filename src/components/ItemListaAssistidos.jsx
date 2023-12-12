import { Alert } from "react-native";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./Estilos";
import { deletarItemAssistido } from "./dados"

export default function ItemListaAssistidos({ item, dados, navigation }) {

	function alertConfirma(item) {

		Alert.alert(
			'Excluir',
			'Tem certeza que deseja fazer a exclusão?',
			[
				{
					text: 'Sim',
					onPress: () => deletarItemAssistido(item),
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
		<View style={styles.itemsContainer}>
			<Image
				style={styles.poster}
				source={{
					uri: `https://image.tmdb.org/t/p/w500${dados.poster}`,
				}}
			/>
			<Text>{dados.nome}</Text>
			<Text>{dados.genero}</Text>
			<Text>{item.notaAssistido}</Text>
			<Text>{item.dataAssistido}</Text>
			<View>
				<TouchableOpacity onPress={() => alertConfirma(item)}>
					<Text>Deletar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => editarItem(item)}>
					<Text>Editar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}