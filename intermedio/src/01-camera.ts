import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction : CameraDirection.Front
  });

};
