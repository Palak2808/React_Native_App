import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({
  placeholder,
  onPress,
  value,
  onChangeText,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full w-full px-5 py-4 border border-gray-700 rounded-full">
      <Image
        source={icons.search}
        className="size-5 mr-3"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="text-white w-full"
      />
    </View>
  );
};

export default SearchBar;
