import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	logo: {
		color: "black",
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 30,
		marginBottom: 20,
	},
	titulo: {
		color: "black",
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 30,
		marginBottom: 20,
	},
	containerLogo: {
		backgroundColor: "red",
		marginTop: 0,
		width: "100vh",
	},
	scrollContainer: {
		width: "85%",
	},
	itemsContainer: {
		marginTop: 5,
		padding: 20,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		alignItems: "stretch",
		backgroundColor: "red",
	},
});

export default styles;