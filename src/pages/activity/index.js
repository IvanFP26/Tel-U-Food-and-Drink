import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Gambarsendokgarpuh } from '../../assets';

const activities = [
  { id: 1, name: 'Tel-u Food to McDonald’s ', date: '25 May 2023, 08:47 am', price: 'Rp50.000' },
  { id: 2, name: 'Tel-u Food to Merhaba Kebab ', date: '25 May 2023, 16.30 pm', price: 'Rp37.000' },
  { id: 3, name: 'Tel-u Drink  to Mixue', date: '26 May 2023, 14.00 pm', price: 'Rp15.000' },
  { id: 4, name: 'Tel-u Drink  to Haus ', date: '26 May 2023, 19.00 pm', price: 'Rp22.000' },
  { id: 5, name: 'Tel-u Food  to McDonald’s ', date: '29 May 2023, 13.00 pm', price: 'Rp35.000' },
  { id: 6, name: 'Tel-u Drink  to Janji Jiwa ', date: '30 May 2023, 16..15 pm', price: 'Rp18.000' },
  { id: 7, name: 'Tel-u Food  to Crissbar ', date: '31 May 2023, 18.30 pm', price: 'Rp35.000' },
];

const Activity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {activities.map((item) => (
        <View style={styles.activityContainer} key={item.id}>
          <Image source={Gambarsendokgarpuh} style={styles.icon} />
          <View style={styles.activityInfo}>
            <Text style={styles.activityName}>{item.name}</Text>
            <Text style={styles.activityDate}>{item.date}</Text>
          </View>
          <Text style={styles.activityPrice}>{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Activity

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityDate: {
    fontSize: 14,
    color: '#666',
  },
  activityPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});