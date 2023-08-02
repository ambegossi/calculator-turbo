import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

function App(): JSX.Element {
  const [result, setResult] = useState<number | null>(null);

  const isDarkMode = useColorScheme() === 'dark';

  const add = async () => {
    const value = await RTNCalculator?.add(3, 7);

    if (value) {
      setResult(value);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={add}>
            <Text>Calcular</Text>
          </TouchableOpacity>
          {result && <Text>{result}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContentContainer: {
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
  },
});

export default App;
