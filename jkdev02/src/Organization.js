import React from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import './Organization.css';
import './SubCommon.css';

function Organization(){
  const Title = "Organization.";
  const OrgImg = "./images/organiization__DsImg1.png";
  return(
    <div className="Organization">
      <Header />
			<OrganizationContent Title = {Title} OrgImg = {OrgImg}/>
			<Footer />
    </div>
  )
}

function OrganizationContent(props){
  return(
    <div className="OrganizationContent">
      <SubHead img="./images/company__DsImg1.png" title="회사소개"/>
      <div className="Con">
        <div className="ConTitle">{props.Title}</div>
        <div className="OrganizationCon">
          <img src={props.OrgImg} alt="Organization" className="OrganizationImg" />
        </div>
      </div>
    </div>
  )
}

export default Organization;