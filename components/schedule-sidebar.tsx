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

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stage } from '@lib/types';
import styles from './schedule-sidebar.module.css';
import Select from './select';
import TalkCard from './talk-card';
import { SHORT_DATE } from '@lib/constants';
// RCE CSS
// import 'react-chat-elements/dist/main.css';
// // MessageBox component
// import { MessageBox } from 'react-chat-elements';
// import { ChatItem } from 'react-chat-elements'
// import { SystemMessage } from 'react-chat-elements'
// import { Input, Button } from 'react-chat-elements'
// import { ChatList } from 'react-chat-elements'
// import { Dropdown } from 'react-chat-elements'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';







type Props = {
  allStages: Stage[];
};

export default function ScheduleSidebar({ allStages }: Props) {
  const router = useRouter();
  const [currentStageSlug, setCurrentStageSlug] = useState(router.query.slug);
  const currentStage = allStages.find((s: Stage) => s.slug === currentStageSlug);

  useEffect(() => {
    setCurrentStageSlug(router.query.slug);
  }, [router.query.slug]);

  return (
    <div className={styles.schedule}>
      <h3 className={styles.header}>Schedule</h3>
      <p>{SHORT_DATE}</p>

      <Tabs>
    <TabList>
      <Tab>Chat</Tab>
      <Tab>Q&A</Tab>
      <Tab>Poll</Tab>
    </TabList>

    <TabPanel>
    

    </TabPanel>
    <TabPanel>

    </TabPanel>

    <TabPanel>
      <h2>Please wait poll will be display here...</h2>
    </TabPanel>
  </Tabs>



          
    </div>
  );
}
