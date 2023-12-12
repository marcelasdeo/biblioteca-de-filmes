import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	logo: {
		textAlign: "center",
		color: "black",
		fontFamily: 'Futura-CondensedExtraBold',
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 18,
		marginBottom: 18,
		letterSpacing: 10,
		textAlign: "center",
	},
	containerLogo: {
		backgroundColor: '#D3B8F5',
		marginTop: 0,
		textAlign: 'center',
	},

	titulo: {
		textAlign: "center",
		color: "black",
		fontFamily: "Futura-CondensedExtraBold",
		fontSize: 25,
		marginTop: 30,
		marginBottom: 20,
	},

	telaInicial: {
		backgroundColor: "#D3E9F5",
		height: "100vh",
		width: "100vw",
	},
	textoTelaInicial: {
		textAlign: "center",
		color: "black",
		fontSize: 20,
	},
	containerTelaInicial: {
		marginTop: "30%",
	},

	title: {
		fontWeight: "bold",
		letterSpacing: 5,
		lineHeight: 44,
	},
	scrollContainer: {
		textAlign: "center",
	},
	itemsContainer: {
		margin: 10,
		padding: 20,
		borderRadius: 12,
		alignItems: "stretch",
		textAlign: "center",
		backgroundColor: '#FFEDE2',
		borderWidth: 2,
		borderColor: 'F1B187',
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
