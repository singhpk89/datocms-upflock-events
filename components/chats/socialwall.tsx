import React  from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ChangeEvent, useState, useEffect} from 'react'
import firebase from "@lib/firebase";
import PostItem from './postitem';
import { ChatMsg } from '@lib/types';
import Page from '@components/page';
import JobsGrid from '@components/jobs-grid';
import Layout from '@components/layout';
import Header from '@components/header';
import { Sponsor } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import SponsorsGrid from '@components/sponsors-grid';
import SocialGrid from '@components/social-grid';



type Props = {
  sponsors: Sponsor[];
  };

function SocialWall({ sponsors }: Props) {

    const meta = {
        title: 'Upflock - Event Platform',
        description: META_DESCRIPTION
      };

    

return (


    <div>

      <SocialGrid sponsors={sponsors} />
      


      <button 
        style={{ position: 'fixed', right: '25px', bottom: '70px', width: '50px', height: '50px', 
        borderRadius: '35px', backgroundColor:'#845EF7', backgroundImage: 'url(http://localhost:1111/add.svg)' , 
        border: 'none', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}
        >
            
        </button>

    </div>


   
)
}



export default SocialWall
