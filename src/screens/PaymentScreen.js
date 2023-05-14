import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../Theme/Theme';
import ScreenHeader from '../components/Header/ScreenHeader';
import {StripeProvider, useConfirmPayment} from '@stripe/stripe-react-native';

export default function PaymentSceen({navigation}) {
  const [isPayment, setIsPayment] = useState(false);
  const [sucessfullPayment, setSucessfullPayment] = useState(false);
  const [publishableKey, setPublishableKey] = useState('');
  return (
    <>
      <ScreenHeader navigation={navigation} title="Buy Hearts" />
      <Background>
        {!isPayment && !sucessfullPayment ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>
              Buy 1000 hearts ❤️ for $9.99 only?
            </Text>
            <Button mode="contained" onPress={() => setIsPayment(true)}>
              BUY NOW
            </Button>
          </View>
        ) : isPayment && !sucessfullPayment ? (
          <StripeProvider publishableKey="pk_test_51MB2yjHR3ue7I09L9gqQLboCeqSMyaWdrAPUU3WeLdYyrA8cIqJM7j65as3A80vQlPaXbWASDSVlQMwDqTmCVjb8005EpecL85">
            <PaymentScreen
              setIsPayment={setIsPayment}
              setSucessfullPayment={setSucessfullPayment}
            />
          </StripeProvider>
        ) : (
          <>
            <PaymentSucess navigation={navigation} />
          </>
        )}
      </Background>
    </>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

import {CardField, useStripe} from '@stripe/stripe-react-native';
import {API_URL} from '../../API_URL';
import axios from 'axios';
import {useUserDataHandler} from '../../context/UserInfoContext';
import {setHearts} from '../../client/requests';
import Toast from 'react-native-toast-message';

function PaymentScreen(props) {
  //** Defualt context */
  const {userData, fetchUserData} = useUserDataHandler();
  const {confirmPayment, loading} = useConfirmPayment();
  const fetchPaymentIntentClientSecret = async () => {
    var config = {
      method: 'get',
      url: `${API_URL}/api/v1/create-payment-intent`,
    };
    const response = await axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    });
    console.log(response);
    return response.clientSecret;
  };

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: userData.email,
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      if (paymentIntent.status == 'Succeeded') {
        props.setIsPayment(true);
        props.setSucessfullPayment(true);
        setHearts(userData.user_id).then(res => {
          if (res.data) {
            Toast.show({
              type: 'success',
              text1: 'Hearts',
              text2: `1000 hearts have been added to your account!`,
            });
            fetchUserData(userData.user_id);
          } else {
            Toast.show({
              type: 'error',
              text1: 'Hearts',
              text2: `Failed while adding hearts to the account!`,
            });
          }
        });
      }
      console.log('Success from promise', paymentIntent);
    }
  };

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 10,
          textAlign: 'center',
        }}>
        Buying 1000 hearts ❤️
      </Text>
      <Text style={{fontSize: 18, textAlign: 'center'}}>
        Please fill out the following details
      </Text>
      <CardField
        placeholders={{
          number: 'Card Number',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: 'black',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
          borderColor: theme.colors.primary,
          borderWidth: 2,
          color: 'black',
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <Button mode="contained" onPress={handlePayPress}>
        Pay $9.99
      </Button>
    </>
  );
}

//** Payment Sucess */

function PaymentSucess({navigation}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
        You have bought 1000 hearts ❤️ successlly!
      </Text>
      <Button mode="contained" onPress={navigation.goBack}>
        Go Back
      </Button>
    </View>
  );
}
