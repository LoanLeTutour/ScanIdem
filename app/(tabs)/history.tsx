import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import SignOutTouchable from "@/components/SignOutTouchable";
import styles from "../(tabs)styles/history.styles";
import PhotoCard from "@/components/PhotoCard";

const Page = () => {
  return (
    <View style={styles.background}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
        </ScrollView>
    </View>
  );
};

export default Page;
