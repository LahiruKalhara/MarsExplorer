import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/HeaderComponent/Header'
import mainImg from '../src/images/Background@1x.png'
import roboImg from '../src/images/Spacesuit 2@1x.png'
import logo1 from '../src/images/Sapaces logo@1x.png'
import logo2 from '../src/images/Rocket-egg logo@1x.png'
import logo3 from '../src/images/Flutturwave logo@1x.png'
import logo4 from '../src/images/Starlint logo@1x.png'
import spaceImg from '../src/images/Background picture@1x.png'
import marsImg from '../src/images/Mars exploration composition@1x.png'
import marsImg2 from '../src/images/Background@1x (1).png'
import grayLogo1 from '../src/images/Icon astromony@1x.png'
import grayLogo2 from '../src/images/Icon botanical@1x.png'
import grayLogo3 from '../src/images/Icon spacewalks@1x.png'
import cardImg1 from '../src/images/Rectangle 16@1x.png'
import cardImg2 from '../src/images/Rectangle 16@1x (1).png'
import cardImg3 from '../src/images/Rectangle 16@1x (2).png'
import cardIcon from '../src/images/Testimonial face@1x (1).png'
import cardIcon2 from '../src/images/Testimonial face@1x.png'
import Footer from './Components/FooterComponent/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <Header />
      <div className='heroSection'>
        <div className='backgroundImg'>
          <img src={mainImg} alt="MainImage" />
          <div className='mainText'>
            <h1>Revealing the<br /> Treasures of the <br /> Universe</h1>
          </div>
          <div className='roboImg'>
            <img src={roboImg} alt="" />
          </div>
        </div>
        <div className='heroLeft'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique eius ullam vel explicabo architecto officiis obcaecati enim eum pariatur perferendis esse ut laborum voluptas, dicta sapiente corporis error nihil? similique eius ullam vel explicabo architecto officiis obcaecati enim eum pariatur perferendis esse ut laborum voluptas</p>
          <a href="">Get Started</a>
          <a className='btnWatch'>Watch the Video</a>
        </div>
      </div>
      <div className='bodyContainer1'>
        <div className='logos'>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
        <div className='spaceImg'>
          <img src={spaceImg} alt="" />
          <h1>We are commited to<br />making space science<br />accessible to all</h1>
          <div className='cardContainer'>
            <div className='card'>
              <h2>01.</h2>
              <h5>Spacewalks on Mars</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, debitis aperiam nesciunt corrupti inventore distinctio modi quia ipsam eum aut fugit eaque aliquid maiores eos exercitationem non pariatur repudiandae quos?</p>
            </div>
            <div className='card'>
              <h2>02.</h2>
              <h5>Spacewalks on Mars</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, debitis aperiam nesciunt corrupti inventore distinctio modi quia ipsam eum aut fugit eaque aliquid maiores eos exercitationem non pariatur repudiandae quos?</p>
            </div>
            <div className='card'>
              <h2>03.</h2>
              <h5>Spacewalks on Mars</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, debitis aperiam nesciunt corrupti inventore distinctio modi quia ipsam eum aut fugit eaque aliquid maiores eos exercitationem non pariatur repudiandae quos?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bodyContainer2'>
        <div className='textSide'>
          <div className='top'>
            <h2>Mission Data</h2>
            <ul>
              <li>Why Mars?</li>
              <li>Space Station</li>
              <li>Moon</li>
              <li>Mars</li>
            </ul>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quia, debitis, assumenda, eveniet quaerat ducimus officia natus nisi nostrum sit reprehenderit! Doloremque dolore explicabo et saepe commodi dicta ab beatae!</p>
          </div>
          <div className='bottom'>
            <table>
              <tr>
                <td>DIAMETER</td>
                <td className='right'>6791 km / 4222 mi</td>
              </tr>
              <tr>
                <td>DIAMETER</td>
                <td className='right'>6791 km / 4222 mi</td>
              </tr>
              <tr>
                <td>DIAMETER</td>
                <td className='right'>6791 km / 4222 mi</td>
              </tr>
              <tr>
                <td>DIAMETER</td>
                <td className='right'>6791 km / 4222 mi</td>
              </tr>
              <tr>
                <td>DIAMETER</td>
                <td className='right'>6791 km / 4222 mi</td>
              </tr>
            </table>
          </div>
        </div>
        <div className='imageSide'>
          <img src={marsImg} alt="" />
        </div>
      </div>
      <div className='bodyContainer3'>
        <div className='backgroundImage'>
          <img src={marsImg2} alt="" />
          <div className='text'>
            <h2>To Mars and back</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit et quo ducimus quae reprehenderit, eveniet tempora, velit in consequatur fuga neque. Sequi, voluptatum corporis itaque excepturi laudantium repellat consectetur!</p>
            <div className='cardContainer'>
              <div className='card'>
                <h1>6</h1>
                <h5>MONTHS TO MARS</h5>
              </div>
              <div className='card'>
                <h1>2</h1>
                <h5>MOONS</h5>
              </div>
              <div className='card'>
                <h1>14</h1>
                <h5>SATELLITES</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bodyContainer4'>
        <h2>Technical Roles in Mars Exploration</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores consequatur maiores molestiae incidunt tempora pariatur libero repellat quas harum ratione nihil itaque, nemo soluta alias laboriosam, at minus ipsum!</p>
        <div className='cardContainer'>
          <div className='card'>
            <img src={grayLogo1} alt="" />
            <h4>Aerospace Engineer</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim ea eius vitae obcaecati sint, explicabo facere at repellat ad autem quam mollitia fugiat nemo suscipit placeat magnam neque ab.</p>
          </div>
          <div className='card'>
            <img src={grayLogo2} alt="" />
            <h4>Botanical Engineer</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim ea eius vitae obcaecati sint, explicabo facere at repellat ad autem quam mollitia fugiat nemo suscipit placeat magnam neque ab.</p>
          </div>
          <div className='card'>
            <img src={grayLogo3} alt="" />
            <h4>Material Engineer</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim ea eius vitae obcaecati sint, explicabo facere at repellat ad autem quam mollitia fugiat nemo suscipit placeat magnam neque ab.</p>
          </div>
        </div>
      </div>
      <div className='bodyContainer5'>
        <img src={cardImg1} alt="" />
        <img src={cardImg2} alt="" />
        <img src={cardImg3} alt="" />
      </div>
      <div className='bodyContainer6'>
        <h1>Testimonials</h1>
        <div className='cardContainer'>
          <div className='card'>
            <div className='cardText'>
              <h3>Mars Explorer is increadible</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut, quos dignissimos alias nemo veniam laudantium commodi expedita soluta error mollitia temporibus hic! Natus minus placeat dolorem sapiente porro aspernatur?</p>
            </div>
            <div className='cardIcon'>
              <img src={cardIcon} alt="" />
              <p>Martha Smith<br/>California</p>
            </div>
          </div>
          <div className='card'>
            <div className='cardText'>
              <h3>Mars Explorer is increadible</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut, quos dignissimos alias nemo veniam laudantium commodi expedita soluta error mollitia temporibus hic! Natus minus placeat dolorem sapiente porro aspernatur?</p>
            </div>
            <div className='cardIcon'>
              <img src={cardIcon2} alt="" />
              <p>Martha Smith<br/>California</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
