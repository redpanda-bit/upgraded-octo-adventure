import React from 'react';
import {View, Touchable, Image} from 'src/components/common';
import {Camera as CameraView} from 'react-native-vision-camera';
import testIds from 'src/test-ids';

import Styles from './styles';

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
    const shutterStyle = React.useRef({
      backgroundColor: photo ? 'gray' : 'red',
      height: shutterSize,
      width: shutterSize,
      borderRadius: shutterSize / 2,
    });
    return (
      <View style={[Styles.container, {paddingBottom: shutterSize}]}>
        <View style={Styles.innerContainer}>
          {photo && (
            <Image
              testID={testIds.page.camera.picture}
              source={{uri: photo}}
              style={Styles.absolute}
            />
          )}
          {!photo && (
            <CameraView
              ref={ref}
              photo
              testID={testIds.page.camera.cameraView}
              style={Styles.absolute}
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
          style={[Styles.shutter, shutterStyle.current]}></Touchable>
      </View>
    );
  },
);
