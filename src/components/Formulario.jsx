import { Text, TouchableOpacity, View, TextInput } from "react-native";
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./Estilos";

import { useEffect, useState } from "react";
import { salvarItemAssistidos, editarItemAssistido } from "./dados";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function Formulario({ navigation, route }) {

	const editMode = Boolean(route.params);
	const editItem = route.params;

	const [checked, setChecked] = React.useState('');
	const [nome, setNome] = useState(editMode ? editItem.nome : '')
	const [data, setData] = useState(editMode ? Date(editItem.data) : '')
	const [nota, setNota] = useState(editMode ? String(editItem.nota) : '')

	useEffect(() => {
		setNome(editMode ? editItem.nome : '');
		setData(editMode ? Date(editItem.data) : '');
		setNota(editMode ? String(editItem.nota) : '');
	},
		[editItem]);

	const handleButtonPress = async () => {
		const itemLista = {
			id: new Date().getTime(),
			nome: nome,
			data: Date(data),
			nota: parseInt(nota),
		}

		if (!editMode) await salvarItemAssistidos(itemLista);
		else {
			itemLista.id = editItem.id;
			await editarItemAssistido(itemLista);
		}

		setNome('')
		setData('')
		setNota('')
		route.params = null;
		navigation.navigate('Lista de Assistidos', itemLista);
	}

	return (
		<View>

			<View style={styles.containerLogo}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<View>

				{/* 'Assistido ou Para assistir':
					value não aparece
				*/}

				<RadioButton
					value="Assistido"
					status={checked === 'Assistido' ? 'checked' : 'unchecked'}
					onPress={() => setChecked('Assistido')}
				/>
				<RadioButton
					value="Para assistir"
					status={checked === 'Para assistir' ? 'checked' : 'unchecked'}
					onPress={() => setChecked('Para assistir')}
				/>

				<TextInput
					placeholder="Nome do filme"
					value={nome}
					onChangeText={(valor) => { setNome(valor) }}
				/>

				{/* 'Data em que assistiu':
					aparecer somente se o usuário selecionar 'Assistido' 
					input para data apresenta alguns problemas:
						formatação errada
						valor não é o inserido pelo usuário
				*/}

				<Text> Data em que assistiu: </Text>
				<RNDateTimePicker
					mode="date"
					value={new Date()}
					maximumDate={new Date()}
					dateFormat="day month year"
				/>

				{/* 'Nota':
					aparecer somente se o usuário selecionar 'Assistido' 
					adicionar img de 5 estrelas
					cada estrela terá um id, para identificar a nota passada pelo usuário
				*/}
				<TextInput
					placeholder="Nota"
					keyboardType="numeric"
					value={nota}
					onChangeText={setNota}
				/>

				<TouchableOpacity onPress={handleButtonPress}>
					{!editMode ? <Text>Salvar</Text> : <Text>Alterar</Text>}
				</TouchableOpacity>
			</View>
		</View>
	);
}