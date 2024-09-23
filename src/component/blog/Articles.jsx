import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Ai_image from '../../assets/AI_img.jpg'
import profile1 from '../../assets/profile1.jpg'

import './Blog.css'

const Data =[
    {
        Editor:'Harris Sockel',
        Editor_profile_pic: profile1,
        Headline: 'What do you think about AI-generated writing?',
        Date: 'Dec 21 2022',
        img: Ai_image,
        Article_P1: "If you’ve been following along, it’s been a big moment for this topic. Last week, OpenAI released ChatGPT (GPT stands for “Generative Pre-trained Transformer”), a natural.... ",
        Article_P2: "The programs using these language models are getting really, really good at quickly generating a lot of very readable text from prompts and example writing, and that’s where the issue arises for us: As an open platform, what’s the right policy or approach to this new kind of content?",
        Article_P3: ''
    },
    {
        Editor:'Harris Sockel',
        Editor_profile_pic: profile1,
        Headline: 'What do you think about AI-generated writing?',
        Date: 'Dec 21 2022',
        img: Ai_image,
        Article_P1: "If you’ve been following along, it’s been a big moment for this topic. Last week, OpenAI released ChatGPT (GPT stands for “Generative Pre-trained Transformer”), a natural.... ",
        Article_P2: "The programs using these language models are getting really, really good at quickly generating a lot of very readable text from prompts and example writing, and that’s where the issue arises for us: As an open platform, what’s the right policy or approach to this new kind of content?",
        Article_P3: ''
    },
    {
        Editor:'Harris Sockel',
        Editor_profile_pic: profile1,
        Headline: 'What do you think about AI-generated writing?',
        Date: 'Dec 21 2022',
        img: Ai_image,
        Article_P1: "If you’ve been following along, it’s been a big moment for this topic. Last week, OpenAI released ChatGPT (GPT stands for “Generative Pre-trained Transformer”), a natural.... ",
        Article_P2: "The programs using these language models are getting really, really good at quickly generating a lot of very readable text from prompts and example writing, and that’s where the issue arises for us: As an open platform, what’s the right policy or approach to this new kind of content?",
        Article_P3: ''
    }
]




const Articles = () => {

        const navigate = useNavigate();
        const handleOnClick = () => {
            navigate("/Article");
        }

  return (
    <div className='app_articles'>
        {
            Data.map((data, index) => (

          
                    <div onClick={handleOnClick}>
                    <hr style={{border: '1px solid white'}}/>
                    <div style={{display: 'flex'}} key={index}>
                        <img style={{height: '2.5rem', width: '2.5rem', borderRadius: '50%'}} src={data.Editor_profile_pic} />
                        <h6 style={{marginTop: '0.5rem', marginLeft: '0.2rem',fontWeight: 500, color: 'white'}}>{data.Editor}</h6>
                        <p style={{margin: '0% 2%', marginTop: '0.5rem', color: 'white'}}>{data.Date}</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className='articles__black1'>
                            <h3 style={{color: 'white'}}>{data.Headline}</h3>
                            <h6>{data.Article_P1}</h6>
                        </div>
                        <div>
                            <img style={{height: '11rem'}} src={data.img} />
                        </div>
                    </div>
                    
                </div>
                
                
                

            ))
        }
        <hr style={{border: '1px solid white'}}/>
    </div>
  )
}

export default Articles