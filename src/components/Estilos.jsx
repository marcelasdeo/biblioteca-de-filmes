import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	logo: {
		textAlign: "center",
		color: "black",
		fontSize: 28,
		fontWeight: "800",
		marginTop: 18,
		marginBottom: 18,
		letterSpacing: 10,
		textAlign: "center",
	},
	containerLogo: {
		backgroundColor: '#D3B8F5',
		marginTop: 0,
	},

	//tela inicial
	telaInicial: {
		backgroundColor: "#D3E9F5",
		height: "100%",
		width: "100%",
	},
	tituloInicial: {
		textAlign: "center",
		color: "black",
		fontSize: 25,
		fontWeight: "600",
		marginTop: 30,
		marginBottom: 20,
	},
	textoTelaInicial: {
		textAlign: "center",
		color: "black",
		fontSize: 20,
	},
	containerTelaInicial: {
		marginTop: 150,
	},

	//listas
	tituloLista: {
		textAlign: "center",
		fontSize: 25,
		marginBottom: 5,
		marginTop: 5,
	},
	containerItens: {
		margin: 15,
		padding: 10,
		borderRadius: 12,
		backgroundColor: '#FFEDE2',
		borderWidth: 2,
		borderColor: 'F1B187',
	},
	containerDados: {
		flexDirection: "row",
	},
	poster: {
		width: 100,
		height: 140,
		margin: 5,
	},
	textoLista: {
		textAlign: "justify",
	},
});

export default styles;
