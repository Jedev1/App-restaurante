import { Text, View, ScrollView } from "react-native";
import { Header } from "../Components/Header/Header";
import Constants from "expo-constants"
import { Banner } from "../Components/Banner/Banner";
import { Search } from "../Components/Search/Search";
import { Section } from "../Components/Section/Section";
import { TrendingFoods } from "../Components/Trending/Trending";
import { Restaurants } from "../Components/Restaurants/Restaurants";
import { ListItem } from "../Components/List";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight - 4}}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section name="Comidas em Alta" label="Veja mais" action={() => console.log("clicou")} size="text-2xl"/>
      <TrendingFoods />

      <Section name="Famosos no DevFood" label="Veja todas" action={() => console.log("clicou")} size="text-xl"/>
      <Restaurants />

      <Section name="Restaurantes" label="Veja todos" action={() => console.log("clicou")} size="text-xl"/>
        <ListItem/>
    </ScrollView>
  );
}
