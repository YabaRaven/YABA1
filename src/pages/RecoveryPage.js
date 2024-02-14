// // RecoveryPage.js

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const RecoveryPage = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* <Image
//           source={require('./path/to/facebook-logo.png')} // Add your Facebook logo path
//           style={styles.logo}
//         /> */}
//         <Text style={styles.title}>Trouble Logging In?</Text>
//         <Text style={styles.subtitle}>
//           Enter your email or mobile number and we'll send you a link to get back into your account.
//         </Text>
//         <TouchableOpacity
//           style={styles.backToLoginButton}
//           onPress={() => navigation.navigate('LoginPage')}
//         >
//           <Text style={styles.backToLoginButtonText}>Back to Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#ffffff', // Background color of safe area
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#1877f2', // Facebook blue color
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#333333',
//     textAlign: 'center',
//   },
//   backToLoginButton: {
//     backgroundColor: '#1877f2', // Facebook blue color
//     borderRadius: 8,
//     padding: 15,
//     width: '100%',
//     alignItems: 'center',
//   },
//   backToLoginButtonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default RecoveryPage;


// screens/AccountRecovery.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Here, you would implement the logic to send a recovery link to the provided email.
    // For simplicity, let's just log the email for now.
    console.log('Recovery link sent to:', email);

    // Navigate back to the login page
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>

        <Image
          style={{width: 300, height: 200}}
          source={require('../melogo.png')}
        />
      <Text style={styles.header}>Recover Account</Text>
      <Text style={styles.title}>Enter email to receive a link</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TouchableOpacity 
        style={styles.recButton}
        onPress={handleRecovery}> 
        <Text 
          style={styles.recButtonText}>Submit</Text> 
      </TouchableOpacity> 

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPage')}
        >
        <Text style={styles.recBacklog}>Back to Login</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color of safe area
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10, 
    color: '#004AAD' 
  },
  title: {
    fontSize: 18,
    marginBottom: 60,
    // alignItems: 'center',
    justifyContent: 'center',
    color: '#004AAD' 

  },
  input: {
    height: 60,
    borderColor: '#004AAD',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 12,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  recButton: {
    backgroundColor: '#004AAD',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  recButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  recBacklog: {
    marginTop: 40,
    color: '#004AAD',
    fontSize: 16,
  }

});

export default RecoveryPage;
