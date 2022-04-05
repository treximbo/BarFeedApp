import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback, 
  Image, 
  SafeAreaView, 
  Button,
  Alert, 
  Platform,

  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Text>BarFeed</Text>
      </View>
      <View style={styles.heroItem}>
        <Text style={{fontSize: 36}}>Map</Text>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.dounbleItem}><Text>Start Crew</Text></View>
        <View style={styles.dounbleItem}><Text>Add a Bar</Text></View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={[styles.dounbleItem, styles.trippleItem]}><Text>Your Favorites</Text></View>
        <View style={[styles.dounbleItem, styles.trippleItem]}><Text>Games</Text></View>
        <View style={[styles.dounbleItem, styles.trippleItem]}><Text>Achievments</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10
  },
  heroItem: {
    backgroundColor: "dodgerblue",
    height: 200,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  itemWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 22,
  },
  dounbleItem: {
    backgroundColor: "dodgerblue",
    height: 100,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 175
  },
  trippleItem: {
    maxWidth: 110
  }
});

