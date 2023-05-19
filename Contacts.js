import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, StyleSheet, ScrollView, View } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './contacts_data'
import ContactList from './ContactList'

function Contacts({ navigation, route }){ 
const url = (api.contacts ?? \"contacts/\") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state



async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json, url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.contacts} showsVerticalScrollIndicator={false}>
<ContactList item={'contact_list' in item ? item.contact_list: item} navigation={navigation}/>
</ScrollView>
)}

export default Contacts;

const styles = StyleSheet.create({
    \"center\": {
        \"flex\": 1,
        \"justifyContent\": \"center\",
        \"alignItems\": \"center\"
    }
});