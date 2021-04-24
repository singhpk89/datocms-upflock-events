import { useState ,useEffect} from 'react';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import { META_DESCRIPTION } from '@lib/constants';
import Login from  './first';




export default function Conf() {
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
  
    if(localStorage.getItem("username") && localStorage.getItem("username") != ""){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
    
  })

  const { query } = useRouter();
  const meta = {
    title: 'Upflock - Digital Platform',
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
    {isLogin == false ?(      
    <Login />
     ) 
    :
  (  <Page meta={meta} fullViewport>
      <SkipNavContent />
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />      
    </Page>)
    }
    </>
  );
}
