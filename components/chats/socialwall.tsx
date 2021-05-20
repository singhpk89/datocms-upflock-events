import React from 'react'
import {
  Button,
  Modal,
  Form
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  ChangeEvent,
  useState,
  useEffect
} from 'react'
import firebase from "@lib/firebase";
import PostItem from './postitem';
import {
  ChatMsg
} from '@lib/types';
import Page from '@components/page';
import JobsGrid from '@components/jobs-grid';
import Layout from '@components/layout';
import Header from '@components/header';
import {
  Sponsor
} from '@lib/types';
import { WallData } from '@lib/wall'
import {
  META_DESCRIPTION
} from '@lib/constants';
import SponsorsGrid from '@components/sponsors-grid';
import SocialGrid from '@components/social-grid';
import axios from 'axios';
import { API_URL,IMG_URL } from '@lib/constants';


type Props = {
  sponsors: WallData[];
 

};

function SocialWall({
  sponsors
}: Props) {

  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ walls, setWalls] = useState([]);


  const meta = {
    title: 'Upflock - Event Platform',
    description: META_DESCRIPTION
  };

  function handleClick() {
    setOpen(!isOpen);
    debugger;
    if(!isOpen) {
      getPots();
    }
  }

  function postForm() {
    handleClick();
  }



  function handleImageChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // alert(e.currentTarget.elements[3].value);
    // setSelectedFile(e.target.elements[3].files[0]);
    console.log(selectedFile);
    
    const formData = new FormData();
    formData.append(
      "file",
      e.target.elements[2].files[0] 
    );
    formData.append("username", localStorage.getItem("password"));
    formData.append("title", localStorage.getItem("username"));
    formData.append("message", e.currentTarget.elements[1].value);


    // Post Image

    fetch(API_URL+ 'submitPost', {
        // content-type header should not be specified!
        method: 'POST',
        // contentType: 'multipart/form-data',
        body: formData,
      })
      .then(response => response.json())
      .then(success => {
        
        setOpen(!isOpen);
        console.log(success);
        setIsLoading(false);
        success.data.forEach(element => {
          console.log(element);
          let wall = new WallData( element.id,  element.username, element.title, element.message, element.path,element.created_at);
          // walls.push(wall);
          // 
          localWall.push(wall);
          const found = sponsors.find(sp => sp.id == element.id);

          if(!found){
            sponsors.push(wall);
          }
         
        });
        setIsLoading(true);
        setOpen(!isOpen);
        // update grid
      })
      .catch(error => {
        setOpen(!isOpen);
        console.log(error);
      });
  }


  // Get Image

  useEffect(() => {
    if(!isLoaded){
      setInterval(getPots,5000);
    }
  },[isLoaded])


  function getPots() {
    console.log(new Date());
    setIsLoading(true);
    fetch( API_URL + 'getPost', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(success => {
        setIsLoading(false);
        const localWall = [];
        console.log(success);
        // update grid
        // sponsors.splice(0, sponsors.length);
        success.data.forEach(element => {
          console.log(element);
          let wall = new WallData( element.id,  element.username, element.title, element.message, element.path,element.created_at);
          // walls.push(wall);
          // 
          localWall.push(wall);
          const found = sponsors.find(sp => sp.id == element.id);

          if(!found){
            sponsors.push(wall);
          }
         
        });
        console.log(sponsors);
         
        // setWalls(sponsors);
        setIsLoaded(true);
       
        
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }





return (

 

    <div>

      <SocialGrid sponsors={sponsors} />
      <button style={ { position: 'fixed' , right: '25px' , bottom: '70px' , width: '50px' , height: '50px' ,
        borderRadius: '35px' , backgroundColor: '#845EF7' ,
        backgroundImage: 'url(https://virtual.upflockdigitalconference.com/add.svg)' , border: 'none' ,
        backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' , } } onClick={ handleClick }>
      </button>

      <Modal show={ isOpen } onHide={ setOpen }>
        <Modal.Header closeButton>
            <Modal.Title> Post Yout Thoughts </Modal.Title>
        </ Modal.Header>

        <Modal.Body>
            <Form onSubmit={ handleImageChange }>
              <Form.Group controlId="formBasicTitle">
                    <Form.Control hidden type="text" name="title" placeholder="Enter Title" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                      <Form.Label> Message </Form.Label>
                      <Form.Control type="text" name="message" placeholder="Enter message" required maxLength="160"/>
              </Form.Group>
               <Form.Group controlId="formBasicImage">
                      <Form.Label> Select Image </Form.Label>
                      <input type="file" name="file" accept="image/*"
                              placeholder="Select Image" />
                </Form.Group>
                
                <Button variant="secondary" type="submit">Post</Button>
              </ Form>

        </Modal.Body>

      </Modal>


    </div>
)

}

export async function getServerSideProps(context) {

  
    fetch(API_URL + 'getPost', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(success => {
       
        ;
        console.log(success);
        // update grid
        success.data.forEach(element => {
          console.log(element);
          let wall = new WallData( element.id,  element.username, element.title, element.message, element.message,element.created_at);
          walls.push(wall);
          sponsors.push(wall);
        });
        console.log(sponsors);
      })
      .catch(error => {
        ;
        console.log(error);
      });
 
}


export default SocialWall
