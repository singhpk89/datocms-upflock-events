import { GetStaticProps } from 'next';

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';

import Webcam from "react-webcam";

import { META_DESCRIPTION } from '@lib/constants';


export default function PhotoBooth({ speakers }: Props) {

    const height = window.screen.height;
    const camFrame = height * .20;

    
   
    const meta = {
      title: 'PhotoBooth',
      description: META_DESCRIPTION
    };
    return (
      <Page meta={meta}>
        <Layout>
         
        
         <Webcam
         

         height={camFrame * 2}
         width={camFrame * 3}
         mirrored={true}
         />


        </Layout>
      </Page>
    );
  }