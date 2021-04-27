
import { ChatMsg } from '@lib/types';
import  React from 'react'
import {  ChangeEvent, useState, useEffect} from 'react'
import firebase from "@lib/firebase";



function Chatbubble() {
    
    const [ chatMessage, setChatMessage] = useState<string>("");
    const [ chatList, setChatList] = useState<ChatMsg[]>([]);

    // const list = [];


    function getOlderChats(){

        // firebase.firestore().collection('chats').onSnapshot(snapshot => {
            
            
        //     snapshot.docs.map(doc => {
        //         console.log(JSON.stringify(doc.data().msg))
        //             const msg: ChatMsg = {
        //               message: doc.data().message,
        //               name: doc.data().name,
        //               username: doc.data().username
        //             }
        //             //  setChatList([...chatList, msg])
        //             return msg;
        //           })
            
        // })
    }

    // useEffect(() => {
    //     // getOlderChats();
    // });
    


    useEffect(() => {
        setChatList(chatList);
      }, [setChatList, chatList]);


    function onSend(message: string){

        const msg : ChatMsg = 
            {
                name: localStorage.getItem("username")!,
                username: localStorage.getItem("password")!,
                message: message,
                keyName: new Date().getTime().toString()
            }
        
        
            if(chatMessage != ""){
                firebase.firestore().collection('chats').add({
                    msg: msg,
               });
               setChatList([...chatList, msg]);
            }

        

        

    }
        
    // getOlderChats();
// function addMessage(msg : ChatMsg){
    
//     db.settings({
//         timestampsInSnapshots: true
//     });
//     const userRef = db.collection("chats").add(msg); 

// }

    
    useEffect(() => {
        // firebase.firestore().collection('chats').onSnapshot(snapshot => {
            
        //     setChatList(
        //         snapshot.docs.map(doc => {
        //             console.log(JSON.stringify(doc))
        //             return {
        //               message: doc.data().message,
        //               name: doc.data().name,
        //               username: doc.data().username
        //             }
        //           })
        //     )
        // })
         setChatList(chatList)
    },[setChatList,  chatList]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
       
        setChatMessage(e.currentTarget.value)
    }
    return (
       
        <div className="chats">
            <div className="chat-list">
            {/* <div className={`bubble-container bubble-direction-reverse`} key={1}>
                <img className={`img-circle`} src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" />
                <div className={`bubble you`}>Your message</div>
            </div>

            <div className={`bubble-container bubble-direction-reverse`} key={1}>
                <img className={`img-circle`} src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" />
                <div className={`bubble me`}>My message fjsdfgsdjfgjds gfsjdgfjds fsdgfjhsdf fjhdgsfjhsd fsdjhgfjdhsf fdsdjhf </div>
            </div> */}

            {/* { this.chats.map(chat => <p> {chat.message} </p>) }  */}
           <main style={{height:"80vh"}}> 
           {/* <h3 style={{ color: 'white', margin: '5px'  }}>Hello</h3>  */}
           {/* { list }  */}
           { chatList.map(chat => <> <div className={`bubble-container bubble-direction-reverse`}  key={chat.keyName}> <div className={`bubble you`}>{chat.message}</div>  </div>  </>) } 
           </main>
          
         </div>

            <form
                className="new-message bottom"
                onSubmit={ (e) => { 
                    e.preventDefault();
                }}
                
                >
            <input

                value={chatMessage}
                style={{height:'100%', width:'100%' , border: '1px red'}}
                placeholder="Enter message"
                onChange={handleChange}
                onKeyPress = {
                    (e) => {
                        
                    }
                }
            />
            <button  style={{height:'40px', backgroundColor:'red', color: 'white', border: '2px red'}}  onClick={ 
                (e) => {
                    onSend(chatMessage)
                    setChatMessage("");
                } 
                } >Send</button>
            </form>
        </div>
    )
}

export default Chatbubble;