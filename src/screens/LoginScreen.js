import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {theme} from '../Theme/Theme';
import {emailValidator} from '../Validators/emailValidator';
import {passwordValidator} from '../Validators/passwordValidator';
import Toast from 'react-native-toast-message';
import {getLocalStorageSession, login} from '../../client/requests';
import {useUserDataHandler} from '../../context/UserInfoContext';

export default function LoginScreen({navigation}) {
  const {userData, setUserData, fetchUserData} = useUserDataHandler();
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  // Shows notification for login
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Authentication',
      text2: 'Logged in sucessfully 👋',
    });
  };
  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Authentication',
      text2: 'Email or password invalid ❌',
    });
  };

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    } else {
      console.log('hello');
      login({email, password}).then(response => {
        console.log('Response: ', response);
        if (!response.error) {
          if (response.data.token && getLocalStorageSession()) {
            setUserData(response.data);
            fetchUserData(response.data.user_id);
            showSuccessToast();
            navigation.reset({
              index: 0,
              routes: [{name: 'Tabs'}],
            });
          }
        } else {
          showErrorToast();
        }
      });
    }
  };

  return (
    <Background>
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('PaymentScreen')}>Payment</Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  row: {
    flexDirection: 'row',
    marginTop: 0,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
