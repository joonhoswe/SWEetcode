import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (

      <View style = {tw`bg-gray-800 flex-1 items-center justify-center`}>
        <Text style = {tw`text-white text-3xl`}>
            SWEetcode
        </Text>
      </View>
  );
}

