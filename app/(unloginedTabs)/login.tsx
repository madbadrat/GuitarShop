import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { Colors } from "@/components/consts/tokens";
import { Styles } from "@/components/consts/styles";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { sendOtp, verifyOtp } from "@/repositories/ApiRepository";

export default function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();


  const handleButtonClick = async () => {
    try {
      if (!isOtpSent) {
        const response = await sendOtp(phone);
        if (response.status === 200) {
          Alert.alert('OTP отправлен (по умолчанию 123)');
          setIsOtpSent(true);
        }
      } else {
        const response = await verifyOtp(phone, otp);
        if (response.data.status === true) {
          router.push('/profile');
        } else {
          Alert.alert('Неверный OTP');
        }
      }
    } catch (error) {
      if (error.message.includes("Некорректный номер телефона")) {
        Alert.alert("Некорректный номер телефона");
      } else if (error.message.includes("Некорректный OTP-код")) {
        Alert.alert("Некорректный OTP-код");
      }
    }
  };

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

          <TextInput onChangeText={setPhone} />
        </View>

        {isOtpSent &&
          <TextInput onChangeText={setOtp} />
        }

        <Button label="Войти" onPress={handleButtonClick} />
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