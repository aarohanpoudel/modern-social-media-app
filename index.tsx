import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Feed() {
  const posts = [
    {
      id: 1,
      user: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
      likes: 342,
      caption: 'Exploring new horizons'
    },
    {
      id: 2,
      user: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      image: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb',
      likes: 567,
      caption: 'Living my best life'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <View key={post.id} style={styles.post}>
          <View style={styles.header}>
            <Image source={{ uri: post.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{post.user}</Text>
          </View>
          <Image source={{ uri: post.image }} style={styles.image} />
          <View style={styles.actions}>
            <Pressable style={styles.actionButton}>
              <Ionicons name="heart-outline" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Ionicons name="paper-plane-outline" size={24} color="#fff" />
            </Pressable>
          </View>
          <Text style={styles.likes}>{post.likes} likes</Text>
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  post: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 400,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  actionButton: {
    marginRight: 15,
  },
  likes: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  caption: {
    color: '#fff',
    padding: 10,
  },
});