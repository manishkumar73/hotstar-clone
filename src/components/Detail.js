import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {useParams} from "react-router-dom";
import db from '../firebase';



function Detail() {

    const {id} = useParams();

    const [movie, setMovie] = useState({});

    useEffect(()=>{
        //grab the movie info from DB=
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                //save the movie data
                setMovie(doc.data());
            } else {
                //redirect to home page
                console.log("no such document in firebase 🔥");
            }
        })


    }, []);
     
   

    return (
       <Container>
        { movie && (
            
            <>
            <Background>
                 <img src={movie.backgroundImg} />
            </Background>

            <ImageTitle>
                <img src={movie.titleImg}  />
            </ImageTitle>

            <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </Player>

                <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </Trailer>

                <AddList>
                    <span >+
                    </span >
                </AddList>
                
                <GroupWatch>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>

            </Controls>

            <SubTitle>
                 {movie.subTitle}
            </SubTitle>

            <Description>
                {movie.description}
            </Description>
            
            </>)
        }
       </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc( 3.5vw + 5px);

    position : relative;


`

const Background = styled.div`

    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height :100%;
        object-fit: cover;

    }

`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;
  
  min-width: 200px;
  width: 32vw;
  margin-top: 60px;

  img{
      height: 100%;
      width: 100%;
      object-fit: contain;
  }
`

const Controls = styled.div`
display:flex;
align-items:center;
`

const Player = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display:flex;
  align-items:center;
  height: 56px;
  cursor: pointer;
  background: rgb (249, 249, 249);
  border:none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  
  &: hover{
      background: rgb(198, 198, 198);
      
  }
`
const Trailer = styled(Player)` 
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
text-transform: uppercase;

 
`

const AddList = styled.button`

margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;

span {
 font-size: 30px;
 color:white;
}

 &: hover{
    background: rgb(198, 198, 198);
     
}


`


const GroupWatch = styled(AddList)`

background-color: rgba(0, 0, 0, 0.6);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`

line-height: 1.4;
font-size: 20px;
padding: 16px 0px;
color: rgb(249, 249, 249);
margin-top: 16px;
max-width: 750px;
`