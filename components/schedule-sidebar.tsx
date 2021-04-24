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


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ChatItem, ChatItemProps } from 'react-chat-elements'
import { ChatList } from 'react-chat-elements'
import { Input, Button } from 'react-chat-elements'
import Chatbubble from './chats/chatbubble';
import { resetIdCounter } from "react-tabs";
import Quiz from './chats/quiz';












type Props = {
  allStages: Stage[];
 
};



export default function ScheduleSidebar({ allStages }: Props) {
  const router = useRouter();

  const [currentStageSlug, setCurrentStageSlug] = useState(router.query.slug);
  const currentStage = allStages.find((s: Stage) => s.slug === currentStageSlug);
  // const [messages, setMessages] = useState<ChatItemProps>();

  resetIdCounter();



  useEffect(() => {
    setCurrentStageSlug(router.query.slug);
  }, [router.query.slug]);



  // useEffect(() => {
  //   setMessages(messages);
  // }, [messages]);

  
  // function createMessage(title: String, subtitle: String){
  //   const message : ChatItemProps = {
  //     id:"1",
  //     avatar:'https://facebook.github.io/react/img/logo.svg',
  //     alt:'Reactjs',
  //     title:'Facebook',
  //     subtitle:'What are you doing?What are you doing?What are you doing?What are you doing?',
  //     date:new Date(),
  //   }
  //    messages.push(message);
  // }




  return (
    <div className={styles.schedule}>
      <Tabs>

        <TabList>
          <Tab><h3 className={styles.header} style={{ color: 'red' }}>Chat</h3></Tab>
          <Tab><h3 className={styles.header} style={{ color: 'red' }}>Q&A</h3></Tab>
          <Tab><h3 className={styles.header} style={{ color: 'red' }}>POLL</h3></Tab>
        </TabList>

        <TabPanel>

        {/* <ChatList
          className='chat-list'
          dataSource={messages}
        
        />

        <Input
            placeholder="Type here..."
            multiline={false}
            rightButtons={
                <Button
                    color='white'
                    backgroundColor='black'
                    text='Send'
                    onClick={() => {
                      createMessage("","");
                      alert(JSON.stringify(messages));
                     
                    }}
                    />
            }/>
 */}

<Chatbubble />
        </TabPanel>

        <TabPanel>

          <Chatbubble />
        

        </TabPanel>

        <TabPanel>
          <Quiz />
        </TabPanel>
  </Tabs>



          
    </div>
  );
}

