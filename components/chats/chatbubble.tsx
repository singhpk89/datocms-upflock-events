
import { ChatMsg } from '@lib/types';
import React from 'react'
import {  ChangeEvent, useState, useEffect, useRef} from 'react'
import firebase from "@lib/firebase";
import styles from './chat-bubble.module.css';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Chat } from '@lib/chat';
import { parseISO, format, isBefore, isAfter } from 'date-fns';

import { API_URL } from '@lib/constants';



function Chatbubble({type}) {
    
    const [ chatMessage, setChatMessage] = useState<string>("");
    const [ lastId, setLastId] = useState(0);
    const [ chatList, setChatList] = useState<Chat[]>([]);

    const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  function dateConvert(date:string){
    const current_datetime =  new Date(date); 
      return format(current_datetime, "d-MMM h:mmaaaaa'm'");
 
   }

    useEffect(() => {
        if(lastId == 0){
            updateChat();
            console.log(type);
        }
        
    },[setLastId]);




    function updateChat(){
        const formData = new FormData();
        formData.append("username", localStorage.getItem("password"));
        formData.append("lastId", lastId);
        formData.append("type", type);
        fetch( API_URL + 'getChat', {
        // content-type header should not be specified!
        method: 'POST',
        body: formData

      })
      .then(response => response.json())
      .then(success => {
        console.log(success);
        success.data.forEach(element => {
            debugger;
            const chat = new Chat( element.id,  element.username, element.name, element.message,element.created_at);
            chatList.push(chat);
            setChatList(chatList);
            setLastId(chat.id);
            scrollToBottom();
        });
        
      })
      .catch(error => {
        debugger;
        console.log(error);
      });

    }

    function sendChat(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", localStorage.getItem("password"));
        formData.append("name", localStorage.getItem("username"));
        formData.append("lastId", lastId);
        formData.append("type", type);
        formData.append("message", e.target.elements[0].value);

        fetch(API_URL + 'postChat', {
        // content-type header should not be specified!
        method: 'POST',
        body: formData

      })
      .then(response => response.json())
      .then(success => {
        console.log(success);
        e.target.elements[0].value = "";
        updateChat();
      })
      .catch(error => {
        console.log(error);
      });

    }

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.main} m-3`}>
                <div className={`p-2 ${styles.scroll}`}>

                { 
                chatList.map(chat => 
                <>  <div  key={chat.id}  className="media" style={{display:"flex", margin: "5px"}}>
                        <img src="https://img.icons8.com/color/40/000000/guest-female.png" className="mr-3" width="30" height="30" />
                        <div  style={{ height:"auto", width: "200px"}}>
                            <div className="d-flex justify-content-between">
                                <div><strong>{chat.name}</strong></div>
                                <div style={{ width: "144px", color:"white"}}>{chat.message}</div>
                                <div><small>{dateConvert(chat.time)}</small></div>
                            </div>
                        </div>
                    </div>
                   
                </>) 
                
                } 
                 <div ref={messagesEndRef} />    

                </div>
                    <nav className={`bg-white navbar-expand-sm d-flex justify-content-between ${styles.navbar}`}>

                        <form onSubmit={sendChat}>
                            <div className="row" style={{display:"flex", height: "40px", backgroundColor:"black"}}>
                                <input type="text" name="msg" placeholder="Enter Message" className="form-control"
                                    style={{border: "2px solid red", margin: "2px", padding: "2px"}} />
                                <button type="submit"
                                    style={{border: "1px solid red", margin: "2px", padding: "8px", backgroundColor: "red", color: "white"}}
                                    className="btn btn-outline-secondary">Send</button>


                            </div>
                        </form>
                    </nav>
            </div>
        </div>
    )



}

export default Chatbubble;