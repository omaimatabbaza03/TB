import React from "react";
import './App.css';

function Home() {
  return <>
  <head>
    <title>taxi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"/>

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

  </head>
  <body>
  <nav className="navbar navbar-light">
   <input type="checkbox" id="check"/>
   <label for="check">
<i class="fa fa-bars" id="btn"></i>
<i class="fa fa-times" id="cancel"></i>

   </label>
   
 
      <a className="navbar-brand">
	  <img src="./logo without sentence 1.svg" alt=""/>
	  </a>
    
    
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
          <li>
		        <a href="" className="btn" >Sign In</a>
		        <a href="" className="btn" >Sign Up</a>
		      </li>
        </ul>
  
  </nav>

  <section className="home" id="home">
  <div className="content">
        <h1>E - TAXI</h1>
        <h4>RELIABLE RIDES , ANYTIME</h4>
        <p>
        Looking for an innovative solution to your transportation needs? Our<br/>
         ride-sharing app is here to revolutionize the way you commute. With just<br/>
          a few taps on your phone or clicks on your computer, you can easily<br/>
           connect with local drivers who are heading in the same direction as you.<br/><br/>
      No more waiting for taxis, paying exorbitant fees, or dealing with the<br/>
       hassle of public transportation. With our app, you can negotiate the price <br/>
       and terms of your ride directly with the driver, ensuring that you get the <br/>
       most affordable and convenient transportation possible.<br/><br/>

      So why wait? Download our app today and start enjoying the ultimate in 
      <br/>hassle-free transportation!

        </p>
        <div  className="row-items">
      <div className="container-box">
          <a href=""><img src="google play 1.png" /></a>
          <p className='txt'>Available on</p>
          <b>Google Play</b>
      </div>

      <div className="container-box">
      <a href=""><img src="apple.png" /></a>
         <p className='txt'>Available on</p>
          <b>AppStore</b>
      </div>
      <div className="container-box">
      <a href=""><img src="Huawei_AppGallery 1.png" /></a>
      <p className='txt'>Available on</p>
          <b>AppGallery</b>
      </div>
       </div>
       <div className="app">
       <a href=""><img src="globe.png" className="img" /></a>
       <p className='txt'>Available on</p>
          <b>AppGallery</b> 
      </div>
    </div>
    <div className="image" >
        <img src="home photo 1.png" alt=""/>
    </div>
   
</section>
<section className="counter top">
      <div className="container grid">
        <div className="box">
          <h1>100+</h1>
          <hr/>
          <span>CITY</span>
        </div>
        <div className="box">
          <h1>500K</h1>
          <hr/>
          <span>COURSES</span>
        </div>
        <div className="box">
          <h1>100K+0</h1>
          <hr/>
          <span>installations d’applis</span>
        </div>
   
      </div>
    </section>
    <section className="blogs" id="blogs">
      <div className="box-container">
        <div className="box">
        <h2>Always the ride you want</h2>
            <p>The best to get wherever<br/> you’re going</p>
                
           
        </div>
        <div className="back">
        <div className="box">
          <h4>Start riding with<br/> E-taxi</h4>
          <a href="">Sign Up<i className='fas fa-arrow-right'></i></a>
            </div> 
                
           
            </div>
    </div>
    <div className="box-container1">
 
 <div className="box1">
     <hr/>
     <h2>Tap a button,<br/> get picked up</h2>
     <p>Choose your ride and set your<br/>
      location. You’ll see your<br/> 
      driver’s picture and vehicle<br/>
       details, and can track their <br/>
       arrival on the map</p>

 </div>
 <div className="box1">
     <hr/>
     <h2>No cash, no tip,<br/>no hassle </h2>
     <p>When you arrive at your<br/>
      destination. just hop out-<br/>
      we’ll automatically 
      charge the <br/>card on file. And there’s no<br/> need to tip. </p>

 </div>
 <div className="box1">
     <hr/>
     <h2>You rate, <br/>we listen</h2>
     <p>Rate your driver and provide  <br/>
     anonymous feedback about  <br/>your trip.
       Your input us <br/> make every ride a 5 star <br/>
        experience.</p>

 </div>
 </div>
 <div className="box-container2">
      <hr/>
         <div className="box2">
            <img src="image 2.png" alt=""/> 
   
         </div>
       <div className="box2">
     <h2>
     See how the E-Taxi<br/> app works
     </h2>

    </div>

    <div className="box2">
        <div className="sig">
          <a href="">Learn more<i className='fas fa-arrow-right'></i></a>
        </div>

    </div>
  </div>
    </section>
  <section class="map">
  <div className="box-container3">
      <hr/>
         <div className="box3">
          <div class="input">
            <h1>Book your ride now</h1>
            <div class="input-group mb-3">
            <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio"  value="" aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" placeholder="Pick Up Location" aria-label="Text input with radio button"/>
</div>

<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio"  value="" aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" placeholder="Destination" aria-label="Text input with radio button"/>
  <a href=""><li class="fas fa-arrow-right" id="fas"></li></a>
</div>

            <div class="signMap">
            <a href="">Sign up to ride<li class="fas fa-arrow-right" id="i"></li></a>
           </div>
            </div>
         </div>
      
    <div className="box3">
      <div class="mapp">
       <img src="map.jpg" alt=""/>
      </div>
    </div>
  </div>
  </section> 
  </body>
                      

  </>
  
}

export default Home;