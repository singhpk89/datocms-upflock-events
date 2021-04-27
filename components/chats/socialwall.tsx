import React  from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ChangeEvent, useState, useEffect} from 'react'
import firebase from "@lib/firebase";
import PostItem from './postitem';
import { ChatMsg } from '@lib/types';


function SocialWall() {

    const [wallMessage, setWallMessage] = useState('');
    const [posts, setPosts] = useState<ChatMsg[]>([]);


    useEffect(() =>{
         setPosts([]);
        fetchPosts();
    }, []);


    const fetchPosts = async()=>{
        const response  = firebase.firestore().collection('socialwall');
        const data = await response.get();
        data.docs.forEach(item=>{
        setPosts([ ...posts , item.data()])
        })
    }

    function postOnWall(){
        
        firebase.firestore().collection('socialwall').add({
            name: localStorage.getItem('username'),
            message: wallMessage,
            keyName: new Date().getTime()
        });
        setWallMessage('');
        setPosts([]);
        fetchPosts();
    }

    function updateMessage(e: React.ChangeEvent<HTMLTextAreaElement>){
        setWallMessage(e.target.value);
    }

    useEffect(
        () => {
            setWallMessage(wallMessage);
        }, [setWallMessage, wallMessage]
    );


return (
<>


    <div className="container mt-5">

        <div className="col-md-8  m-auto">

            <div className="row text-center">

                {/* Left Image */}
                <div className="col-md-3 mt-3 text-center">

                    <div className="shadow-sm p-1 mb-1">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0x00ffffff-no-rj"
                            alt="..." className="rounded-circle w-50 h-50" />
                    </div>
                <p className="font-weight-bold">{'@'}  </p>

                </div>

                {/* Textbox & List */}

                <div className="col-md-9 mt-3">

                    <div className="row">

                        {/* Form */}

                        
                        <div className="form-group col-md-12">
                        {/* <form onSubmit={() => postOnWall()}> */}
                            <textarea className="form-control" value={wallMessage} onChange={updateMessage} id="exampleFormControlTextarea1" rows={4}></textarea>
                            <div className="row">
                                <div className="col-6 text-left"><small id="emailHelp"
                                        className="form-text text-muted"></small></div>
                                <div className="col-6 text-right pt-1"><button type="button"
                                        className="btn btn-primary btn-md" style={{ backgroundColor: '#845ef7', border: 'none'}}  onClick={postOnWall} >Submit</button>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                        



                        {/* List */}
                        <div className="col-md-12" style={{overflowY: 'scroll', border:'1px solid black', height: '40%'}}>

                            {
                                 posts && posts.map((post, index)=>{
                                    //  <PostItem  props={post} />
                                    console.log( index);
                                   
                                   return(

                                    <PostItem  post={post}  />

                                   )
                                   
                                 })
                            }

                        </div>

                    </div>

                </div>




            </div>

        </div>


        <button 
        style={{ position: 'fixed', right: '25px', bottom: '70px', width: '50px', height: '50px', 
        borderRadius: '35px', backgroundColor:'#845EF7', backgroundImage: 'url(http://localhost:3000/add.svg)' , 
        border: 'none', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}
        >
            
        </button>


    </div>







</>
)
}


export default SocialWall
