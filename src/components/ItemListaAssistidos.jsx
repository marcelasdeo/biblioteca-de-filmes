import { Alert } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Estilos";
import { deletarItemAssistido } from "./dados"

export default function ItemListaAssistidos({ item, navigation }) {

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
			<Text>{item.nome}</Text>
			<Text>{item.nota}</Text>
			<Text>{item.data}</Text>
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