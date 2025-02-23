import { View, Text, Pressable } from 'react-native'

interface props{
    name: String;
    size : "text-lg" | "text-xl" | "text-2xl";
    label: String;
    action: () => void;
}

export function Section({name, size, label, action}: props) {
  return (
    <View className='w-full flex flex-row items-center justify-between px-4'>
      <Text className={`${size} font-semibold my-4 self-start`} >{name}</Text>
      <Pressable>
        <Text onPress={action}>{label}</Text>
      </Pressable>
    </View>
  )
}