import { Text, TouchableOpacity, View, TextInput } from "react-native";
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./Estilos";

export default function Formulario({ navigation }) {
	const [checked, setChecked] = React.useState('');
	// navigation.navigate('Formulário')

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
				/>

				{/* 'Data em que assistiu':
					aparecer somente se o usuário selecionar 'Assistido' 
					input para data
				*/}
				<TextInput
					placeholder="Data em que assistiu"
				/>

				<DateTimePicker mode="time" />

				{/* 'Nota':
					aparecer somente se o usuário selecionar 'Assistido' 
					adicionar img de 5 estrelas
					cada estrela terá um id, para identificar a nota passada pelo usuário
				*/}
				<TextInput
					placeholder="Nota"
					keyboardType="numeric"
				/>

				<TouchableOpacity>
					<Text> Adicionar </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}