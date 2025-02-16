import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function Explore() {
  const images = [
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    'https://images.unsplash.com/photo-1682687221080-5cb261c645cb',
    'https://images.unsplash.com/photo-1682687982360-c6b5b940247f',
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    'https://images.unsplash.com/photo-1682687218147-9806132dc697',
    'https://images.unsplash.com/photo-1682687220063-4742bd7fd538'
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {images.map((image, index) => (
          <Pressable key={index} style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  image: {
    flex: 1,
  },
});