import { Text, TouchableOpacity, View, TextInput } from "react-native";
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./Estilos";
import { useEffect, useState } from "react";

export default function Formulario({ navigation }) {
	const [checked, setChecked] = React.useState('');
	const [nome, setNome] = useState('')
	const [data, setData] = useState('')
	const [nota, setNota] = useState('')

	const handleButtonPress = async () => {
		const itemLista = {
			id: new Date().getTime(),
			nome: nome,
			data: data,
			nota: parseInt(nota),
		}

		await salvarItem(itemLista)

		setNome('')
		setData('')
		setNota('')
		// navigation.navigate('Lista', itemLista)
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
					onChangeText={(valor) => { setDescricao(valor) }}
				/>

				{/* 'Data em que assistiu':
					aparecer somente se o usuário selecionar 'Assistido' 
					input para data
				*/}
				<TextInput
					placeholder="Data em que assistiu"
					value={data}
				/>

				{/* <DateTimePicker mode="time" /> */}

				{/* 'Nota':
					aparecer somente se o usuário selecionar 'Assistido' 
					adicionar img de 5 estrelas
					cada estrela terá um id, para identificar a nota passada pelo usuário
				*/}
				<TextInput
					placeholder="Nota"
					keyboardType="numeric"
					value={nota}
				/>

				<TouchableOpacity>
					<Text> Adicionar </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}