import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	logo: {
		color: "black",
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 18,
		marginBottom: 18,
		letterSpacing: 10,
		textAlign: "center",
	},
	containerLogo: {
		backgroundColor: '#F1B187',
		marginTop: 0,
	},

	// tela inicial:
	tituloInicial: {
		color: "black",
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
	},
	textoInicial: {
		color: "black",
		fontSize: 18,
		marginTop: 10,
		textAlign: "center",
	},
	containerInicial: {
		marginTop: 160,
	},

	//listas
	tituloLista: {
		textAlign: "center",
		fontSize: 24,
		marginTop: 10,
		fontWeight: "bold",
	},
	itemsContainer: {
		margin: 20,
		padding: 5,
		borderRadius: 12,
		textAlign: "center",
		backgroundColor: '#FFEDE2',
		borderWidth: 2,
		borderColor: 'F1B187',
	},
	containerDados: {
		flexDirection: "row",
	},

	container: {
		backgroundColor: "#fdfdfd",
		marginTop: 10,
		borderRadius: 10,
		width: "100%",
		padding: 5
	},
	poster: {
		width: 80,
		height: 120,
	},
});

export default styles;
