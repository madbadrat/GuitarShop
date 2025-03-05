import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { Colors } from "@/components/consts/tokens";
import { Styles } from "@/components/consts/styles";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={Styles.container}>
      <View style={styles.headers}>
        <Text style={[styles.text, { fontSize: 40 }]}>Найди свой звук</Text>
        <Text style={[styles.text, { fontSize: 36 }]}>Играй по-своему</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.phoneNumber}>
          <TextInput
            value="+7"
            editable={false}
            style={{ width: 60 }}
          />

          <TextInput />
        </View>

        <TextInput />

        <Button label="Войти" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.support,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%'
  },
  headers: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    color: Colors.white,
    marginTop: 60
  },
  phoneNumber: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
})