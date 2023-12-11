import { Alert } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
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

	function editarItemAssistir(item) {
		navigation.navigate('Formulário', item);
	}

	return (
		<View style={styles.itemsContainer}>
			<Text>{item.nomeAssistir}</Text>
			<View>
				<TouchableOpacity onPress={() => alertConfirma(item)}>
					<Text>Deletar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => editarItemAssistir(item)}>
					<Text>Editar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}