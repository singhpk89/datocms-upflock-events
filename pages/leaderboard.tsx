

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
 import JobsGrid from '@components/jobs-grid';
 import Layout from '@components/layout';
 import Header from '@components/header';
 
 import { getAllJobs } from '@lib/cms-api';
 import { Job } from '@lib/types';
 import { META_DESCRIPTION } from '@lib/constants';
 
 
 export default function Jobs() {
   const meta = {
     title: 'LeaderBoard',
     description: META_DESCRIPTION
   };
 
   return (
     <Page meta={meta}>
       <Layout>
         <Header hero="LeaderBoard" description={meta.description} />

         


<table className="table">
    <thead className="leaderboard-header h6">
        <tr>
            <th className="align-middle" scope="col">Rank</th>
            <th className="align-middle" scope="col">Team</th>
            <th className="align-middle" scope="col">W</th>
            <th className="align-middle" scope="col">L</th>
            <th className="align-middle" scope="col">α</th>
            <th className="align-middle" scope="col">Points</th>
        </tr>
    </thead>
    <tbody className="leaderboard-components h6">
        <tr>
            <th className="align-middle" scope="row">1</th>
            <td className="text-left align-middle">As Long As Will Loses</td>
            <td className="align-middle">1</td>
            <td className="align-middle">2</td>
            <td className="align-middle">4</td>
            <td className="align-middle">500</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">2</th>
            <td className="text-left align-middle">Will Sucks At Trading</td>
            <td className="align-middle">1</td>
            <td className="align-middle">2</td>
            <td className="align-middle">4</td>
            <td className="align-middle">400</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">3</th>
            <td className="text-left align-middle">RCL To The Moon</td>
            <td className="align-middle">1</td>
            <td className="align-middle">2</td>
            <td className="align-middle">3</td>
            <td className="align-middle">300</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">4</th>
            <td className="text-left align-middle"> D-Rated </td>
            <td className="align-middle">1</td>
            <td className="align-middle">2</td>
            <td className="align-middle">3</td>
            <td className="align-middle">100</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">5</th>
            <td className="text-left align-middle">Trust In Buffet</td>
            <td className="align-middle">1</td>
            <td className="align-middle">2</td>
            <td className="align-middle">2</td>
            <td className="align-middle">50</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">6</th>
            <td className="text-left align-middle">Janet Yellen 2020</td>
            <td className="align-middle">0</td>
            <td className="align-middle">3</td>
            <td className="align-middle">0</td>
            <td className="align-middle">400</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">7</th>
            <td className="text-left align-middle">Superior Returns Guaranteed</td>
            <td className="align-middle">0</td>
            <td className="align-middle">3</td>
            <td className="align-middle">0</td>
            <td className="align-middle">20</td>
        </tr>
        <tr>
            <th className="align-middle" scope="row">8</th>
            <td className="text-left align-middle">Only Bad Choices</td>
            <td className="align-middle">0</td>
            <td className="align-middle">3</td>
            <td className="align-middle">0</td>
            <td className="align-middle">-10</td>
        </tr>
    </tbody>
</table>
         
       </Layout>
     </Page>
   );
 }
 
 
 