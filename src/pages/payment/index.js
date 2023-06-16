import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCardIcon } from '../../assets';

const Payment = () => {
  return (
    <View style={styles.container}>
      <PurpleBox />
      <RedBox />
      <View style={styles.paymentOptions}>
        <OptionBox title="Top Up" />
        <OptionBox title="Scan to Pay" />
      </View>
      <RecentHistory />
    </View>
  )
}

const PurpleBox = () => {
  return (
    <View style={styles.purpleBox}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>OVO CASH</Text>
        <Text style={styles.amount}>Rp.10.500</Text>
        <Text style={styles.points}>700 Points</Text>
      </View>
    </View>
  );
};

const RedBox = () => {
  return (
    <View style={styles.redBox}>
      <Text style={styles.redBoxText}>Add a card</Text>
      <Text style={styles.redBoxText}>Pay with debit card or credit card</Text>
    </View>
  );
};

const OptionBox = ({ title }) => {
  return (
    <View style={styles.optionBox}>
      <Text style={styles.optionText}>{title}</Text>
    </View>
  );
};


const RecentHistory = () => {
  return (
    <View style={styles.recentHistory}>
      <Text style={styles.recentHistoryTitle}>Recent History</Text>
      
    </View>
  );
};

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: '100%',
    height: 150,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    color: 'white',
    fontSize: 16,
  },
  points: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  redBox: {
    backgroundColor: 'red',
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  redBoxText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  optionBox: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  recentHistory: {
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  recentHistoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 14,
  },
});