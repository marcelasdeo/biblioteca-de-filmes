import { Text, TouchableOpacity, View, TextInput } from "react-native";
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import styles from "./Estilos";

import { useEffect, useState } from "react";
import { salvarItemAssistidos, editarItemAssistido } from "./dados";

export default function Formulario({ navigation, route }) {

	const editMode = Boolean(route.params);
	const editItem = route.params;

	const [checked, setChecked] = React.useState('Assistido');
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

	if (checked === 'Assistido') {
		return (
			<View>

				<View style={styles.containerLogo}>
					<Text style={styles.logo}> MOVIES.LOG </Text>
				</View>

				<View>

					<RadioButton.Item
						value='Assistido'
						label='Assistido'
						status={checked === 'Assistido' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Assistido')}
					/>
					<RadioButton.Item
						value='Para assistir'
						label='Para assistir'
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
	} else if (checked === 'Para assistir') {
		return (
			<View>

				<View style={styles.containerLogo}>
					<Text style={styles.logo}> MOVIES.LOG </Text>
				</View>

				<View>

					<RadioButton.Item
						value='Assistido'
						label='Assistido'
						status={checked === 'Assistido' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Assistido')}
					/>
					<RadioButton.Item
						value='Para assistir'
						label='Para assistir'
						status={checked === 'Para assistir' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Para assistir')}
					/>

					<TextInput
						placeholder="Nome do filme"
						value={nome}
						onChangeText={(valor) => { setNome(valor) }}
					/>

					<TouchableOpacity onPress={handleButtonPress}>
						{!editMode ? <Text>Salvar</Text> : <Text>Alterar</Text>}
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}