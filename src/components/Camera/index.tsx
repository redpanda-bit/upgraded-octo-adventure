import React from 'react';
import {View, Touchable, Image} from 'src/components/common';
import {Camera as CameraView} from 'react-native-vision-camera';
import testIds from 'src/test-ids';

type Props = {
  device: any;
  photo: string | null;
  shutterSize: number;
  onTakePhoto: () => void;
  removePhoto: () => void;
};

export const Camera = React.forwardRef<CameraView, Props>(
  (props: Props, ref: React.Ref<CameraView>): JSX.Element => {
    const [isCameraReady, setIsCameraReady] = React.useState<boolean>(false);
    const {device, photo, shutterSize, onTakePhoto, removePhoto} = props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          paddingBottom: shutterSize,
        }}>
        <View
          style={{
            flex: 0.88,
            width: '95%',
            borderRadius: 12,
            overflow: 'hidden',
            alignSelf: 'center',
          }}>
          {photo && (
            <Image
              testID={testIds.page.camera.picture}
              source={{uri: photo}}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          )}
          {!photo && (
            <CameraView
              ref={ref}
              photo
              testID={testIds.page.camera.cameraView}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              device={device}
              isActive
              onInitialized={() => {
                setIsCameraReady(true);
              }}
            />
          )}
        </View>
        <Touchable
          disabled={!isCameraReady}
          testID={
            photo
              ? testIds.page.camera.deletePicture
              : testIds.page.camera.shutter
          }
          onPress={photo ? removePhoto : onTakePhoto}
          style={{
            backgroundColor: photo ? 'gray' : 'red',
            height: shutterSize,
            width: shutterSize,
            alignSelf: 'center',
            borderRadius: shutterSize / 2,
          }}></Touchable>
      </View>
    );
  },
);
