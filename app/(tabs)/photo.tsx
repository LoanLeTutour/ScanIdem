import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { View, Text, Button, TouchableOpacity, useWindowDimensions , Image} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

import styles from "../(tabs)styles/photo.styles";


const Page = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [image, setImage] = useState(null);

  const [type, setType] = useState(CameraType.back);
  const [flashMode, setflashMode] = useState(FlashMode.off);
  const cameraRef = useRef(null);

  const {width} = useWindowDimensions();
  const height = Math.round((width * 16) / 9);


  if (!permission || !permission.granted) {
    return (
      <View style={styles.containerPermission}>
        <Text style={styles.textPermission}>
          Une permission est nécessaire pour utiliser la caméra
        </Text>
        <TouchableOpacity
          style={styles.buttonPermission}
          onPress={requestPermission}
        >
          <Text style={styles.textButtonPermission}>
            Demander la permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleFlashMode = () => {
    if (flashMode === FlashMode.off) {
      setflashMode(FlashMode.on);
    } else {
      setflashMode(FlashMode.off);
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const FlashIcon = () => {
    if (flashMode === FlashMode.on) {
      return (
        <Ionicons
          name="flash-off"
          color="white"
          size={30}
          style={styles.icons}
        />
      );
    } else {
      return (
        <Ionicons name="flash" color="white" size={30} style={styles.icons} />
      );
    }
  };

  const uploadImage = async () => {
    if (MediaLibrary.getPermissionsAsync())
  };

  const takeAPicture = async () => {
    if (cameraRef) {
    try {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      setImage(photo.uri);
    } catch (err) {
      console.log(err, "capturing image");
    }
  }};

  const removeImage = () => {
    setImage(null);
  };

  const displayTakenImage = (image: string) => {
    return(
      <View style={styles.resultContainer}>
      <Image source={{uri: image}} style={styles.image}/>
      <View style={styles.buttonsResultContainer}>
      <TouchableOpacity style={styles.buttonTakenImage} onPress={searchIdems}>
              <Text style={styles.textResult}>Tester</Text>
              <Ionicons name="search" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTakenImage} onPress={removeImage}>
              <Text style={styles.textResult}>Supprimer</Text>
              <Ionicons name="trash" color="white" size={30}/>
          </TouchableOpacity>

      </View>
      </View>
    )
  };

  const searchIdems = () => {}

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={[styles.camera, {height: height, width: width}]}
         type={type}
          flashMode={flashMode}
          ref={cameraRef}
          autoFocus={true}
          ratio="16:9"
        >
      <View style={styles.buttonsContainer}>
        <View style={styles.topButtonsContainer}>
            <TouchableOpacity onPress={toggleFlashMode}>
              <FlashIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType}>
              <Ionicons name="camera-reverse" color="white" size={30} />
            </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <View style={styles.capturingButtonContainer}>
            <TouchableOpacity
              style={styles.capturingButton}
              onPress={takeAPicture}
            />
          </View>
          <View>
            <TouchableOpacity 
              style={styles.uploadingButton} 
              onPress={uploadImage}
            >
              <Ionicons name="download" color="white" size={70} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Camera>
    ) : (
      displayTakenImage(image)
    )}

    </View>
  );
};

export default Page;
