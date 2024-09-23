import { Fullscreen } from '@mui/icons-material'
import React from 'react'

import banner from '../../assets/banner.png'
import CSI from '../../assets/CSI.png'
import Articles from './Articles'

import logo from "../../assets/CSI.png";
import profile1 from '../../assets/profile1.jpg'

import './Blog.css'

const Editors = [
  {
    name: "Alex Benzer",
    post: "Student at DIT",
    profile: profile1,
    
  },
  {
    name: "Alex Benzer",
    post: "Student at DIT",
    profile: profile1,
    
  },
  {
    name: "Alex Benzer",
    post: "Student at DIT",
    profile: profile1,

  }
]

const Blog = () => {
  return (
    <div className='app__blog' style={{background: ''}}>

      <div className='app__blog_articles' style={{display: 'flex', outlineColor: 'white'}}>
        <div style={{width: '60%'}}>
          <div className='app__blog_view' >
              <img src={banner}/>
          </div>
          <div className='app__blog_header'>
            <h2 style={{color: 'white'}}>CSI Blogs</h2>
          </div>
          <div className='app__blog_tabs'>
            <h6>Home</h6>
            <h6>About</h6>
          </div>
          <Articles/>

        </div>

        <div style={{ padding: '5%', width: 'auto'}}>
          <div>
            <img className="logo_csi" src={logo} alt="" />
          </div>
          <p style={{width: '100px', color: 'white', overflow: 'auto', fontSize: '0.8rem'}}>The official CSI DIT blog</p>

          <h6 style={{color: 'white'}}>Editors</h6>
          {
            Editors.map((editor, index) => (
              <div className='app__editors'>
                <div>
                  <img style={{height: '3.5rem', width: '3.5rem', borderRadius: '50%'}} src={editor.profile} />
                </div>
                <div>
                  <h6 style={{color: 'white', padding :'2% 15%', width: '10rem'}}>{editor.name}</h6>
                  <p style={{color: 'white', width: '10rem'}}>{editor.post}</p>
                </div>

              </div>
            ))
          }
        </div>

      </div>
       
    </div>
 
  )
}

export default Blog