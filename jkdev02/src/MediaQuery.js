import React,{Fragment} from 'react';
import {useMediaQuery} from 'react-responsive';

const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : '(min-width:0px) and (max-width:768px)',
  });

  return (
    <Fragment>
      {isMobile && children}    
    </Fragment>
  );
}

const PCTablet = ({children}) => {
  const isPCTablet = useMediaQuery({
    query : '(min-width:1199px)',
  });

  return (
    <Fragment>
      {isPCTablet && children}    
    </Fragment>
  );
}


const PC = ({children}) => {
  const isPC = useMediaQuery({
    query : '(min-width:769px)',
  });

  return (
    <Fragment>
      {isPC && children}    
    </Fragment>
  );
}

export {Mobile, PCTablet , PC}