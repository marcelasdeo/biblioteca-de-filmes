import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	logo: {
		color: "black",
		fontFamily: 'Futura-CondensedExtraBold',
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 18,
		marginBottom: 18,
		letterSpacing: 10,
		
	},
	titulo: {
		color: "black",
		fontFamily:"Futura-CondensedExtraBold",
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 30,
		marginBottom: 20,
	},
	containerLogo: {
		backgroundColor: '#F1B187',
		marginTop: 0,
		textAlign: 'center',
	},
	title:{
		fontWeight: "bold",
		letterSpacing: 5,
  		lineHeight: 44,
	},
	scrollContainer: {
		textAlign:"center",
	},
	itemsContainer: {
		margin: 10,
		padding: 20,
		borderRadius: 12,
		alignItems: "stretch",
		textAlign:"center",
		backgroundColor:'#FFEDE2',
		borderWidth: 2, 
		borderColor:'F1B187',
	},
});

export default styles;
