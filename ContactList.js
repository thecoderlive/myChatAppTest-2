import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, View, Text } from 'react-native'



function ContactList({ item, navigation }){



function contactListItem({ item }){
return (
<View style={styles.contact_list_item}>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.contact_name} numberOfLines={1}>{item.contact_name}</Text>
<Text style={styles.contact_status} numberOfLines={1}>{item.contact_status}</Text>
{<View
    style={[styles.chat,{ backgroundColor: item.chat ? 'red' : 'black' }]}
   />}
</View>
</View>
)}

return (
<FlatList
    style={styles.contact_list}
    data={item}
    renderItem={contactListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default ContactList;

const styles = StyleSheet.create({
    \"profile_image\": {
        \"width\": \"100vw\",
        \"height\": \"100vw\",
        \"marginTop\": 5
    },
    \"contact_name\": {
        \"flex\": 1,
        \"color\": \"hsl(274,100%,60%)\",
        \"fontSize\": 15,
        \"fontWeight\": \"400\",
        \"paddingHorizontal\": 2,
        \"marginHorizontal\": 10,
        \"marginTop\": 5
    },
    \"contact_status\": {
        \"flex\": 1,
        \"color\": \"hsl(274,100%,60%)\",
        \"fontSize\": 15,
        \"fontWeight\": \"400\",
        \"paddingHorizontal\": 2,
        \"marginHorizontal\": 10,
        \"marginTop\": 5
    },
    \"chat\": {
        \"width\": 30,
        \"height\": 30,
        \"borderRadius\": 20,
        \"marginTop\": 5
    }
});