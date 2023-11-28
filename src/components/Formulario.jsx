import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "./Estilos";

export default function Formulario() {
	return (
		<View>
			
			<View style={styles.container}>
				<Text style={styles.logo}> MOVIES.LOG </Text>
			</View>

			<View>

				{/* 'Assistido ou Para assistir':
					input radio
				*/}
				<TextInput
					placeholder="Data em que assistiu"
					keyboardType=""
				/>

				<TextInput
					placeholder="Nome do filme"
					keyboardType=""
				/>

				{/* 'Data em que assistiu':
					aparecer somente se o usuário selecionar 'Assistido' 
					input para data
				*/}
				<TextInput
					placeholder="Data em que assistiu"
					keyboardType=""
				/>

				{/* 'Nota':
					aparecer somente se o usuário selecionar 'Assistido' 
					adicionar img de 5 estrelas
					cada estrela terá um id, para identificar a nota passada pelo usuário
				*/}
				<TextInput
					placeholder="Nota"
					keyboardType=""
				/>

				<TouchableOpacity>
					<Text> Adicionar </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}