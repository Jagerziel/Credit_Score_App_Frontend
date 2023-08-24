// Import React
import React, { useEffect, useState , useContext } from 'react';
// Import Data
import { userInfo } from '../../App.js';
// Import Animation
import PageTransitionFade from '../../hooks/PageTransition/PageTransitionFade.jsx';
// Import CSS
import './Home.scss';
import { Link } from 'react-router-dom';
import image from '../../images/arrow.png'
import image2 from '../../images/piechart.png'
import check from '../../images/check.png'

export default function Home() {
  const user = useContext(userInfo);
  // console.log(user.reloadUserInfo.displayName)
  let userName = user ? user.reloadUserInfo.displayName : '';

  return (
    <>  
      <PageTransitionFade>
        <div style={{ textAlign:'center',minHeight:'calc(100vh - 60px)', backgroundColor:'var(--background-color)'}} ><p className='text' style={{margin:'15px'}}>Financial decisions aren't static, and your credit score shouldn't be either!</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={image2}></img>
          </div>
          <p className='text' style={{margin:'15px'}}>Reshaping the landscape of credit assessment by leveraging the power of:</p>
          <div style={{ display: 'grid', placeItems: 'center' , marginBottom:'15px'}}>
            <p className='text'style={{ display: 'flex', alignItems: 'center' }}><img src={check} style={{width: '24px', height: '24px'}}></img>Comprehensive Data Analysis</p>
            <p className='text'style={{ display: 'flex', alignItems: 'center' }}><img src={check} style={{width: '24px', height: '24px', marginLeft:'-80px'}}></img>Real Time Updates</p>
            <p  className='text'style={{ display: 'flex', alignItems: 'center' }}> <img src={check} style={{width: '24px', height: '24px'}}></img> A Forward Looking Perspective</p>
          </div>
          <Link to='/Dashboard'><button className="home-link" >See How Your Score is Calculated <img className="home-img" src={image} style={{width:'10px', height:'10px' }}></img></button></Link>
          <p style={{marginTop: '10px' }}>No credit card required</p>
          <br></br>
          <div style={{ backgroundColor:  '#D9D9D9', marginBottom:'30px'}}>
            <p style={{margin: '10px' ,marginBottom:'15px'}}>*Credit score calculated based on ScoreEase model. Your lender or insurer may use a different score or another type of score altogether. </p>
            <p style={{margin:'10px',marginBottom:'20px'}}>*Results will vary. All information provided on this web site is provided “as is” with all faults without warranty of any kind, either expressed or implied. ScoreEase shall not be liable for any indirect, special, consequential, or incidental damages arising out of the use or inability to use this site or from the use of or reliance on the information present.</p>
          </div>
        </div>
      </PageTransitionFade>
    </>
  );
}
