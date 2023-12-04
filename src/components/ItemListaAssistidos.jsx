import { Alert } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Estilos";
// import { excluirItem } from "./dados";

export default function ItemListaAssistidos({ item, navigation }) {

  function alertConfirma(item) {

    Alert.alert(
      'Excluir',
      'Tem certeza que deseja fazer a exclusão?',
      [
        {
          text: 'Sim',
        //   onPress: () => excluirItem(item),
          style: 'default',
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );

  }

  function alterarItem(item) {
    navigation.navigate('Formulario', item);
  }

  return (
    <View style={styles.itemsContainer}>
      <Text>{item.nome}</Text>
      <Text>{item.nota}</Text>
      <Text>{item.data}</Text>
      <View>
        <TouchableOpacity onPress={() => alertConfirma(item)}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alterarItem(item)}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}