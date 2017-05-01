import React, { Component } from 'react';
import Loading from 'react-loading';

export const LoadingComponent = (props) => {
  const showStyle = (props.isLoading) ? { display: 'inline-block', marginLeft: '10px', height: '10px' } : { display: 'none' }
  // const Loading = styled.div`
  //   height: 18px;
  //   width: 18px;
  // `;
  return (
    <div className='loading' style={showStyle}>
      <Loading type='bars' color='#88d0b1' />
    </div>
  )
}
