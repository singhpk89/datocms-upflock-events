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

import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { signIn, signOut, useSession } from 'next-auth/client'


import Page from '@components/page';
import ConfContent from '@components/index';
import { META_CONTENT, META_DESCRIPTION } from '@lib/constants';

export default function Conf() {
  const [ session, loading ] = useSession()
  const { query } = useRouter();
  const meta = {
    title: META_CONTENT,
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <>
      {!session &&
       <>
        <button onClick={() => signIn()}>Sign in</button>
       </>
      }

      {session && 
        <> 
          <Page meta={meta} fullViewport>
            <SkipNavContent />
            <ConfContent
              defaultUserData={defaultUserData}
              defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
            />
          </Page>
       </> 
      }
      
    </>
    
  );
}


