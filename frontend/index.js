import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-gray-800 flex-1`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-white text-3xl`}>
          SWEetcode
        </Text>
      </View>

      <View style={tw`bg-gray-700 flex-row w-full h-24 px-4 justify-between`}>
        <Text style={tw`text-white`}>
          Home
        </Text>
        <Text style={tw`text-white`}>
          Profile
        </Text>
      </View>
    </SafeAreaView>
  );
}

