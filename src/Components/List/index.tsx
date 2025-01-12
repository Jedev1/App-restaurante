import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import RestaurantItem from './Item/Item';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function ListItem() {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
    
    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://192.168.3.24:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }
    
        getRestaurants();
    }, [])

  return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
      {restaurants.map(item => (
        <RestaurantItem restaurant={item} key={item.id}/>
      ))}
    </View>
  )
}