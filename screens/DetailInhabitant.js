import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DetailInhabitant = ({ route }) => {
  const gnomeDetails = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inhabitant Details</Text>
      {gnomeDetails ? (
        <View style={styles.detailsContainer}> 
          <Image source={{ uri: gnomeDetails.thumbnail }} style={styles.image} resizeMode="cover" />
          <View style={styles.detailRow}>
            <MaterialIcons name="person" size={24} color="black" />
            <Text style={styles.detailTitle}>Name:</Text>
            <Text style={styles.detail}>{gnomeDetails.name}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="accessibility" size={24} color="black" />
            <Text style={styles.detailTitle}>Age:</Text>
            <Text style={styles.detail}>{gnomeDetails.age}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="fitness-center" size={24} color="black" />
            <Text style={styles.detailTitle}>Weight:</Text>
            <Text style={styles.detail}>{gnomeDetails.weight}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="height" size={24} color="black" />
            <Text style={styles.detailTitle}>Height:</Text>
            <Text style={styles.detail}>{gnomeDetails.height}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="palette" size={24} color="black" />
            <Text style={styles.detailTitle}>Hair color:</Text>
            <Text style={styles.detail}>{gnomeDetails.hair_color}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="work" size={24} color="black" />
            <Text style={styles.detailTitle}>Professions:</Text>
            <Text style={styles.detail}>{gnomeDetails.professions.join(', ')}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="group" size={24} color="black" />
            <Text style={styles.detailTitle}>Friends:</Text>
            <Text style={styles.detail}>{gnomeDetails.friends.length > 0 ? gnomeDetails.friends.join(', ') : 'none'}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  detail: {
    fontSize: 18,
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  loading: {
    fontSize: 16,
  },
});

export default DetailInhabitant;
