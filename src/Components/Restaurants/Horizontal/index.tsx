import { View, Text, Pressable, Image } from 'react-native'
import { RestaurantsProps } from '../Restaurants'
import React from 'react'

export default function RestaurantItem({restaurant}: {restaurant: RestaurantsProps}) {
  return (
    <Pressable className='flex flex-col justify-center items-center' onPress={() => console.log("clicou no " + restaurant.name)}>
        <Image source={{uri: restaurant.image }} className='w-20 h-20 rounded-full'/>
        <Text className='text-sm mt-2 w-20 text-center leading-4 text-black' numberOfLines={2}>{restaurant.name}</Text>
    </Pressable>
  )
}