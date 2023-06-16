import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { iconaccount, iconaccountred, activity, activityred, home, homered, money, moneyred } from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if(label == "Home") return isFocused ? <homered/> : <home/>
        if(label == "Activity") return isFocused ? <activityred/> : <activity/>
        if(label == "Payment") return isFocused ? <moneyred/> : <money/>
        if(label == "Account") return isFocused ? <iconaccountred/> : <iconaccount/>
        return <iconhome/>
    }
    return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}>
        <Icon/>
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
            {label}
        </Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({})