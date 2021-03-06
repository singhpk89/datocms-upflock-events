/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 import { GetStaticProps } from 'next';

 import Page from '@components/page';
 import Layout from '@components/layout';
 import Header from '@components/header';
 import JobsGrid from '@components/jobs-grid';
 import { META_DESCRIPTION } from '@lib/constants';
import SponsorsGrid from '@components/sponsors-grid';

import { getAllSponsors } from '@lib/cms-api';
import { Sponsor } from '@lib/types';
import SocialWall from '@components/chats/socialwall';
import { WallData } from '@lib/wall'
import { API_URL, IMG_URL } from '@lib/constants';



type Props = {
  sponsors: WallData[];
};

 
 
 export default function Wall({ sponsors }: Props) {
   const meta = {
     title: 'Social Wall',
     description: META_DESCRIPTION
   };


   
 
   return (
     <Page meta={meta}>
       <Layout>
         <Header hero="Social Wall" description={meta.description} />
         <SocialWall sponsors={sponsors} />
       </Layout>
     </Page>
   );
 }

 async function parsePost(response){
  if (!response.ok) {
    const posts = await response.json();
    const data = [];
    posts.data.forEach(element => {
      console.log(element);
      let wall = new WallData( element.id,  element.username, element.title, element.message, element.message,element.created_at);
      data.push(wall);
    });
    return sponsors;
  }
  return [];
 }
 
export const getStaticProps: GetStaticProps<Props> = async () => {
    const response = await fetch(API_URL + 'getPost');
    const sponsors = await parsePost(response);
    //  const sponsors = await getAllSponsors();


  return {
    props: {
      sponsors
    },
    revalidate: 60
  };
};
 
 