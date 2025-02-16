import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const userPosts = [
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    'https://images.unsplash.com/photo-1682687221080-5cb261c645cb',
    'https://images.unsplash.com/photo-1682687982360-c6b5b940247f',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
          style={styles.avatar}
        />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>342</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.name}>Sarah Wilson</Text>
      <Text style={styles.bio}>Adventure seeker | Photography lover</Text>
      <Pressable style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </Pressable>
      <View style={styles.grid}>
        {userPosts.map((post, index) => (
          <View key={index} style={styles.post}>
            <Image source={{ uri: post }} style={styles.postImage} />
          </View>
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
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#999',
    fontSize: 12,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  bio: {
    color: '#fff',
    marginLeft: 20,
    marginTop: 4,
  },
  editButton: {
    margin: 20,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  post: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  postImage: {
    flex: 1,
  },
});