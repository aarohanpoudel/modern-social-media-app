import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: { 
        backgroundColor: '#1a1a1a',
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarActiveTintColor: '#ff4757',
      tabBarInactiveTintColor: '#666',
      headerStyle: { backgroundColor: '#1a1a1a' },
      headerTintColor: '#fff'
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Feed',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }} />
      <Tabs.Screen name="explore" options={{
        title: 'Explore',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="compass" size={size} color={color} />
        ),
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }} />
    </Tabs>
  );
}