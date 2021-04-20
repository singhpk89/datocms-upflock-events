import { GetStaticProps } from 'next';

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';

import Webcam from "react-webcam";

import { META_DESCRIPTION } from '@lib/constants';


export default function PhotoBooth() {

    const height = 400;
    const width = 320;

    
   
    const meta = {
      title: 'PhotoBooth',
      description: META_DESCRIPTION
    };
    return (
      <Page meta={meta}>
        <Layout>
         
        
        <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
        >

        <Webcam
         

         height={height }
         width={width }
         mirrored={true}
         />


        </div>
         

        </Layout>
      </Page>
    );
  }