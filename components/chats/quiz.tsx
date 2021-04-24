import React, { useState } from 'react'



function Quiz() {
    
    return (
        
        <div className="col-md-3" style={{ margin: 'auto' }}>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title" style={{ color: 'red'}}>Where do you get your news?</h3>
                </div>

                <div className="panel-body">
                    <ul>
                       
                           <button style={{ backgroundColor: 'white', margin: '8px', width: '90%', border: 'none', height: '36px'}}>Zee News</button>
                           <button style={{ backgroundColor: 'white', margin: '8px', width: '90%', border: 'none', height: '36px'}}>NDTV India</button>
                           <button style={{ backgroundColor: 'white', margin: '8px', width: '90%', border: 'none', height: '36px'}}>ABP News</button>
                           <button style={{ backgroundColor: 'white', margin: '8px', width: '90%', border: 'none', height: '36px'}}>Republic Bharat</button>
                        

                        
                          
                        
                    </ul>
                </div>
                
            </div>
        </div>

    )
}

export default Quiz
