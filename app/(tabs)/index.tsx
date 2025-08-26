import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-screen absolute" />
      <ScrollView
        className="px-5 flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="min-h-screen pb-5"
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#A8B5DB"
            className="self-center mt-10"
          />
        ) : moviesError ? (
          <Text className="text-red-500 px-5 my-3">
            Error : {moviesError.message}
          </Text>
        ) : (
          <View>
            <SearchBar
              placeholder="Search a movie"
              onPress={() => router.push("/search")}
            />
            <Text className="text-white text-xl font-bold my-5">
              Latest Movies
            </Text>
            {/* destructure each time  to get immedaite return*/}
            <FlatList
              data={moviesData}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                marginBottom: 10,
              }}
              className="mt-2 mb-32"
              scrollEnabled={false}
            />
          </View>
        )}
        <View className="flex-1 mt-5">
          {/* <SearchBar
          placeholder="Search a movie"
          onPress={() => router.push("/search")}
        /> */}
        </View>
      </ScrollView>
    </View>
  );
}
