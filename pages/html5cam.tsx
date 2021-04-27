

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import { META_DESCRIPTION } from '@lib/constants';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


export default function PhotoBooth() {


    function handleTakePhoto (dataUri: any) {
        // Do stuff with the photo...
        console.log('takePhoto');
        const href = dataUri;
        const link = document.createElement('a');
        link.href = href;
        link.download = 'your file name' + '.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    
      function handleTakePhotoAnimationDone (dataUri: any) {
        // Do stuff with the photo...
        console.log('takePhoto');
      }
    
      function handleCameraError (error: any) {
        console.log('handleCameraError', error);
      }
    
      function handleCameraStart (stream: any) {
        console.log('handleCameraStart');
      }
    
      function handleCameraStop () {
        console.log('handleCameraStop');
      }



    
   
    const meta = {
      title: 'PhotoBooth',
      description: META_DESCRIPTION
    };


   

    return (
      <Page meta={meta}>
        <Layout>
            <div style={{ margin: "auto"}}>
                <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
                onCameraError = { (error) => { handleCameraError(error); } }
                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                imageType = {IMAGE_TYPES.JPG}
                imageCompression = {0.97}
                isMaxResolution = {true}
                isImageMirror = {false}
                isSilentMode = {false}
                isDisplayStartCameraError = {true}
                isFullscreen = {true}
                sizeFactor = {1}
                onCameraStop = { () => { handleCameraStop(); } }
            />
            </div>
        </Layout>
      </Page>
    );
  }