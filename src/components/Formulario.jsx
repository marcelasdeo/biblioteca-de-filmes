import { Text, TouchableOpacity, View, TextInput } from "react-native";
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import styles from "./Estilos";
import { useEffect, useState } from "react";
import { salvarItemAssistido, editarItemAssistido } from "./dados";
import { salvarItemAssistir, editarItemAssistir } from "./dados";
import { getFilmeId } from "./Api";

export default function Formulario({ navigation, route }) {

	const editMode = Boolean(route.params);
	const editItem = route.params;

	// const currentChecked = route.params.checked //?? 'Assistido';
	const [checked, setChecked] = useState('Assistido');

	const [nomeAssistido, setNomeAssistido] = useState(editMode ? editItem.nomeAssistido : '')
	// const [dataAssistido, setDataAssistido] = useState(editMode ? Date(editItem.dataAssistido) : '')
	const [notaAssistido, setNotaAssistido] = useState(editMode ? String(editItem.notaAssistido) : '')

	const [nomeAssistir, setNomeAssistir] = useState(editMode ? editItem.nomeAssistir : '')

	useEffect(() => {
		setNomeAssistido(editMode ? editItem.nomeAssistido : '');
		// setDataAssistido(editMode ? Date(editItem.dataAssistido) : '');
		setNotaAssistido(editMode ? String(editItem.notaAssistido) : '')

		setNomeAssistir(editMode ? editItem.nomeAssistir : '');
	},
		[editItem]);

	const handleButtonPressAssistido = async () => {
		const id = await getFilmeId(nomeAssistido)

		if (checked === 'Assistido') {
			const itemListaAssistido = {
				id: id,
				nomeAssistido: nomeAssistido,
				// dataAssistido: Date(dataAssistido),
				notaAssistido: parseInt(notaAssistido),
			}

			if (!editMode) await salvarItemAssistido(itemListaAssistido);
			else {
				itemListaAssistido.id = editItem.id;
				await editarItemAssistido(itemListaAssistido);
			}

			setNomeAssistido('')
			// setDataAssistido('')
			setNotaAssistido('')
			route.params = null;
			navigation.navigate('Assistidos', itemListaAssistido);
		}
	}

	const handleButtonPressAssistir = async () => {
		const id = await getFilmeId(nomeAssistir)

		if (checked === 'Assistir') {
			const itemListaAssistir = {
				id: id,
				nomeAssistir: nomeAssistir,
			}

			if (!editMode) await salvarItemAssistir(itemListaAssistir);
			else {
				itemListaAssistir.id = editItem.id;
				await editarItemAssistir(itemListaAssistir);
			}

			setNomeAssistir('')
			route.params = null;
			navigation.navigate('Assistir', itemListaAssistir);
		}
	}

	if (checked === 'Assistido') {
		return (
			<View style={styles.telaForm}>

				<View style={styles.containerLogo}>
					<Text style={styles.logo}> MOVIES.LOG </Text>
				</View>

				<View style={styles.containerForm}>
					<RadioButton.Item
						value='Assistido'
						label='Assistido'
						status={checked === 'Assistido' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Assistido')}
						style={styles.radioInput}
					/>
					<RadioButton.Item
						value='Assistir'
						label='Assistir'
						status={checked === 'Assistir' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Assistir')}
						style={styles.radioInput}
					/>

					<TextInput
						placeholder="Nome do filme"
						value={nomeAssistido}
						onChangeText={(valor) => { setNomeAssistido(valor) }}
						style={styles.textInput}
					/>

					{/* 'Data em que assistiu':
						input para data
						<Text> Data em que assistiu: </Text> */}

					{/* 'Nota':
						adicionar img de 5 estrelas
						cada estrela terá um id, para identificar a nota passada pelo usuário
						*/}
					<TextInput
						placeholder="Nota"
						keyboardType="numeric"
						inputMode="numeric"
						value={notaAssistido}
						onChangeText={setNotaAssistido}
						style={styles.textInput}
					/>

					<TouchableOpacity onPress={handleButtonPressAssistido}>
						{!editMode ? <Text style={styles.formBtn}>Salvar</Text> : <Text style={styles.formBtn} >Alterar</Text>}
					</TouchableOpacity>
				</View>
			</View>
		);
	} else if (checked === 'Assistir') {
		return (
			<View  style={styles.telaForm}>

				<View style={styles.containerLogo}>
					<Text style={styles.logo}> MOVIES.LOG </Text>
				</View>

				<View style={styles.containerForm}>

					<RadioButton.Item
						value='Assistido'
						label='Assistido'
						status={checked === 'Assistido' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Assistido')}
						style={styles.radioInput}
					/>
					<RadioButton.Item
						value='Assistir'
						label='Assistir'
						status={checked === 'Assistir' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('Assistir')}
						style={styles.radioInput}
					/>

					<TextInput
						placeholder="Nome do filme"
						value={nomeAssistir}
						onChangeText={(valor) => { setNomeAssistir(valor) }}
						style={styles.textInput}
					/>

					<TouchableOpacity onPress={handleButtonPressAssistir}>
						{!editMode ? <Text style={styles.formBtn}>Salvar</Text> : <Text style={styles.formBtn}>Alterar</Text>}
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}