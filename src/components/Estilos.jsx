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
	containerTelaInicial: {
		marginTop: 150,
	},

	//listas
	tituloLista: {
		textAlign: "center",
		fontSize: 25,
		fontWeight: "700",
		marginBottom: 5,
		marginTop: 5,
	},
	containerItens: {
		margin: 15,
		padding: 5,
		borderRadius: 10,
		backgroundColor: "#D3E9F5",
		borderWidth: 2,
		borderColor: 'F1B187',
	},
	containerDados: {
		flexDirection: "row",
		width: 300,
	},
	poster: {
		width: 120,
		height: 180,
		margin: 5,
		borderRadius: 10,
	},
	textoFilmeAssistir: {
		textAlign: "center",
		fontSize: 18,
		marginTop: 35,
		fontWeight: "600",
		width: 180,
	},
	textoFilmeAssistido: {
		textAlign: "center",
		fontSize: 18,
		marginTop: 20,
		fontWeight: "600",
		width: 180,
	},
	textoLista: {
		textAlign: "center",
		fontSize: 16,
		width: 180,
	},
	containerBotoesAssistir: {
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 30,
	},
	containerBotoesAssistido: {
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 15,
	},

	//geral

	texto: {
		textAlign: "center",
		color: "black",
		fontSize: 20,
	},
});

export default styles;
