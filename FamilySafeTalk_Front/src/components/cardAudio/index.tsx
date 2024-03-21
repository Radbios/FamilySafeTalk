import { FontAwesome } from "@expo/vector-icons";
import { ButtonRec, Container } from "./styles";
import React, { useEffect, useState } from "react";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { Alert, Button } from "react-native";

export default function CardAudio() {
  const [isRecording, setIsRecording] = useState<Audio.Recording | null>(null);
  const [recordingFileURI, setRecordingFileURI] = useState<string | null>(null);

  async function handleRecordingStart() {
    const { granted } = await Audio.getPermissionsAsync();

    if (granted) {
      try {
        const { recording } = await Audio.Recording.createAsync();
        setIsRecording(recording);
      } catch (error) {
        console.log(error);
        Alert.alert(
          "Erro ao gravar",
          "Não foi possível iniciar a gravação do áudio"
        );
      }
    }
  }

  async function handleRecordingStop() {
    try {
      if (isRecording) {
        await isRecording.stopAndUnloadAsync();
        const fileUri = isRecording.getURI();
        setRecordingFileURI(fileUri);
        setIsRecording(null);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro ao pausar",
        "Não foi possível pausar a gravação do áudio"
      );
    }
  }

  async function handleAudioPlay() {
    if(recordingFileURI){
      const { sound } = await Audio.Sound.createAsync({uri: recordingFileURI}, { shouldPlay: true})

      await sound.setPositionAsync(0)
      await sound.playAsync()
    }
  }

  useEffect(() => {
    Audio.requestPermissionsAsync().then(({ granted }) => {
      if (granted) {
        Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          playThroughEarpieceAndroid: true,
        });
      }
    });
  }, []);

  return (
    <Container>
      <ButtonRec
        onPressIn={handleRecordingStart}
        onPressOut={handleRecordingStop}
        style={{ backgroundColor: isRecording ? "#a0c4ff" : "#FB77AA" }}
      >
        <FontAwesome
          name="microphone"
          size={30}
          color={isRecording ? "#004ECC" : "#F1006D"}
        />
      </ButtonRec>
      {recordingFileURI && <Button title="Ouvir" onPress={handleAudioPlay}></Button>}
    </Container>
  );
}
