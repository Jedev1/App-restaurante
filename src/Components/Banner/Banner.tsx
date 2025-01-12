import { View, Pressable, Image } from 'react-native'
import PagerView from "react-native-pager-view"

export function Banner() {
    const image1 = "../../Assets/banner1.png"
    const image2 = "../../Assets/banner2.png"
  return (
    <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable className='w-full h-36 md:h-60 rounded-2xl' key="1" onPress={ () => console.log("Clicou no slide") }>
            <Image source={require(image1)} className='w-full h-36 md:h-60 rounded-2xl'/>
        </Pressable>

        <Pressable className='w-full h-36 md:h-60 rounded-2xl' key="2" onPress={ () => console.log("Clicou no slide") }>
            <Image source={require(image2)} className='w-full h-36 md:h-60 rounded-2xl'/>
        </Pressable>
      </PagerView>
    </View>
  )
}