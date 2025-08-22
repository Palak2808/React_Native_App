import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-screen absolute" />

      <ScrollView
        className="px-5 flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="min-h-screen pb-5"
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
            <SearchBar placeholder="Search a movie" onPress={()=> router.push("/search")}/>
        </View>
      </ScrollView>
    </View>
  );
}