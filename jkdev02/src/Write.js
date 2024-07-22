import React from 'react';
import Header from './Head';
import Footer from './Footer';
import './SubCommon.css';
import './Write.css';

function Write(){
 return(
   <div className="Write">
     <Header />
     <WriteContent />
     <Footer />
   </div>
 ) 
}

function WriteContent(){
  return(
    <div className="WriteContent">
      
      <div>
      </div>
    </div>
  )
}

export default Write;