import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          source={{ uri: 'https://foto.kontan.co.id/lyZsBJJhaXJ4g9T6Ur0I687kpoE=/smart/filters:format(webp)/2022/09/19/1060505828p.jpg' }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.menuItemContent}>
          <Text>Makanan</Text>
        </View>
        <View style={styles.menuItemContent}>
          <Text>Minuman</Text>
        </View>
        {/* Tambahkan konten menu lainnya di sini */}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: '#C51313',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  menuItemContent: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
})