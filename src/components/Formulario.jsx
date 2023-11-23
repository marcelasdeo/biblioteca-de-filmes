import { StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";

export default function Formulario() {
    return (
        <View>
          <Text>Item para comprar</Text>
          <View>
            
            <TextInput
            
              placeholder=""
              
            />
            <TextInput
              
              placeholder=""
              keyboardType=""
              
            />
            <TouchableOpacity >
              <Text>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}