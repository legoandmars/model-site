import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import Header from '../layouts/header'
import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import Link from 'next/link'
import Head from 'next/head'
export default function Post({ postData }) {
    const renderButtons = false;
    let imageIndex = 0;
    let initialImage;
    let initialDescription;
    if(postData.extra_images){
        initialImage = postData.extra_images[0];
        initialDescription = postData.image_metadata[0];
    }else {
        initialImage = postData.image_name;
        initialDescription = "";
    }
    const [selected, setSelected] = React.useState(initialImage)
    const [selectedDescription, setSelectedDescription] = React.useState(initialDescription)

    function previousImage(){
        if(postData.extra_images.indexOf(selected) == 0){
            setSelected(postData.extra_images[postData.extra_images.length - 1]);
            setSelectedDescription(postData.image_metadata[postData.extra_images.length - 1]);
        }else{
            setSelected(postData.extra_images[postData.extra_images.indexOf(selected) - 1]);
            setSelectedDescription(postData.image_metadata[postData.extra_images.indexOf(selected) - 1]);
        }
    }
    function nextImage(){
        if(postData.extra_images.indexOf(selected) + 1 == postData.extra_images.length){
            setSelected(postData.extra_images[0]);
            setSelectedDescription(postData.image_metadata[0]);
        }else{
            setSelected(postData.extra_images[postData.extra_images.indexOf(selected) + 1]);
            setSelectedDescription(postData.image_metadata[postData.extra_images.indexOf(selected) + 1]);
        }
    }
    function getButtons(){
        if(postData.extra_images){
            return(
            <>
                <Button variant="dark" class="left-arrow-button" size="lg" onClick={()=>previousImage()}>
                    <Image class="arrow float-right" src="arrow-left.png"></Image>
                </Button>
                <Button variant="dark" class="arrow-button" size="lg" onClick={()=>nextImage()}>
                    <Image class="arrow float-right" src="arrow.png"></Image>
                </Button>        
            </>
            );
        }
    }
    function getSecondButton(){
        if(postData.second_button){
            return(
                <>
                    <Button type="button" variant="dark" href={postData.second_button.link}>{postData.second_button.text}</Button>
                </>
            );
        }
    }

    function preloadImages(imageSources) {
        if(imageSources){
        const allImages = [];
        imageSources
          .forEach(i => {
              allImages.push(
              <>
                <a rel="preload" href={i} as="image"></a>
              </>)
          });
          return allImages;
        }
      }
    
    function getCredits(){
        if(postData.fallguyscredits){
            return(<>
                <div class="credit-holder">
                <h2 class="text-light creditheader">Credits</h2>
                <p class="text-light credittext">Fall Guys Model: <a link class="graylink" href="https://sketchfab.com/3d-models/unofficial-fall-guy-598b22b710b44c22a962fecc9dd92312">Sketchfab</a><br/></p>
                <p class="text-light credittext">Fall Guys Original Soundtrack created by Jukio Kallio and Daniel Hagström</p>
                <p class="text-light credittext">SUPPORT & FOLLOW THE ORIGINAL ARTISTS: <a link class="graylink" href="https://jukiokallio.bandcamp.com/album/fall-guys-original-soundtrack">Bandcamp</a> / <a link class="graylink" href="https://open.spotify.com/album/2XbgThX8BaW5Euimr3JAPT?si=OjPnw2qSSby1I2vGZJtOsg">Spotify</a></p>
                <p class="text-light credittext-bottom"><a link class="graylink" href="https://jukiokallio.com">More about Jukio Kallio</a> / <a link class="graylink" href="https://danielhagstrom.com">More about Daniel Hagström</a></p>
                </div>
            </>);
        }
    }
    return (
      <>
        <Header></Header>
        <style type="text/css">
            {`
                :root {
                --jumbotron-padding-y: 3rem;
                }
                .jumbotron {
                padding-top: var(--jumbotron-padding-y);
                padding-bottom: var(--jumbotron-padding-y);
                margin-bottom: 0;
                background-color: #fff;
                }
                @media (min-width: 768px) {
                .jumbotron {
                    padding-top: calc(var(--jumbotron-padding-y) * 2);
                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
                }
                }
    
                .jumbotron p:last-child {
                margin-bottom: 0;
                }
    
                .jumbotron-heading {
                font-weight: 300;
                }
    
                .jumbotron .container {
                    max-width: 40rem;
                }
                .container{
                    /* position: absolute;
                    max-width:100%;
                    max-height:100%;
                    width:60%;
                    left:20%;
                    height:50%; */
                }
                footer {
                padding-top: 3rem;
                padding-bottom: 3rem;
                }
    
                footer p {
                margin-bottom: .25rem;
                }
    
                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
    
                .main {
                    background-color: #202020;
                }
                body{
                    background-color: #202020;
                }
                .card-title{
                    font-size:2rem;
                    text-align: center;
                    margin-bottom: .2rem;
                }
                .btn{
                    font-size: 1.5rem;
                }
                .card{
                    background-color: #000000;
                }
                .btn{
                    background-color: #000000;
                    border-color: #4d4d4d;
                    border-radius: 10px;       
                    border: 0.15rem solid #4d4d4d;            
                }
                .mainimage{
                    height:55%;
                    width:55%;
                    margin-left:0px;
                    background-color: #303030;
                    float:left;
                    border-radius: 10px;
                }
                .imagetext{
                    width:45%;
                    height:100%;
                    float:right;
                }
                .p{
                    text-align: center;
                }
                .titletext{
                    font-size:2.25rem;
                    text-align: center;
                    font-weight:bold;
                    background-color: #000000;
                    border-color: #4d4d4d;
                    border-width: thin;
                    width: 85%;
                    margin: auto;
                    border-radius: 10px;
                    border: 0.15rem solid #4d4d4d;
                }
                .descriptiontext{
                    font-size:1.5rem;
                    text-align: center;
                    margin-top: 2%;
                    margin-bottom: 2%;
                    margin-left: 3%;
                    margin-right: 3%;
                }
                .description-holder{
                    margin: auto;
                    margin-top: 10px;
                    border-radius: 10px;
                    border: 0.15rem solid #4d4d4d;
                    position:relative;
                    width: 85%;
                    height:100%;
                    background-color: #000000;
                    z-index:1;
                }
                .imagesubcontainer{
                    margin-top:2rem;
                    display:inline-block;
                    width:100%;
                    position:relative;
                }
                .downloadbuttons{
                    width:37.5%;
                    bottom:0;                          
                    right:0;   
                    left: 58.75%;
                    position:absolute;
                    height:3.35rem;
                    z-index:2;
                }
                .arrow-button{
                    position:absolute;
                    background-color: #000000;
                    border-radius: 10px;
                    border: 0.15rem solid #4d4d4d;
                    width:3.35rem;
                    height:3.35rem;
                    top: calc(90% + 0.5rem);
                    left: calc(55% - 3.3rem);
                    outline: none !important;
                }
                .left-arrow-button{
                    position:absolute;
                    background-color: #000000;
                    border-radius: 10px;
                    border: 0.15rem solid #4d4d4d;
                    width:3.35rem;
                    height:3.35rem;
                    top: calc(90% + 0.5rem);
                    left: 0;
                    outline: none !important;
                }
                .arrow{
                    position:relative;
                    width:100%
                }
                .imageheader{
                    position: absolute;
                    font-size:3rem;
                    font-size: 2vw;
                    text-align: center;
                    font-weight:bold;
                    width: 55%;
                    margin: auto;
                }
                .imageheaderstroke{
                    position: absolute;
                    font-size:3rem;
                    font-size: 2vw;
                    text-align: center;
                    font-weight:bold;
                    width: 55%;
                    margin: auto;
                    -webkit-text-stroke-width: .5rem;
                    -webkit-text-stroke-color: black;                  
                }
                .credit-holder{
                    margin: auto;
                    margin-top: 57.5%;
                    border-radius: 10px;
                    border: 0.15rem solid #4d4d4d;
                    position:absolute;
                    width: 96.75%;
                    background-color: #000000;
                    z-index:0;
                    margin-bottom: 2%;
                }
                .creditheader{
                    font-size:2.75rem;
                    text-align: center;
                    margin: auto;
                }
                .credittext{
                    font-size:1.5rem;
                    text-align: center;
                    margin: auto;
                }
                .credittext-bottom{
                    font-size:1.5rem;
                    text-align: center;
                    margin: auto;
                    margin-bottom:0.7%;
                }
                .graylink{
                    color: gray;
                    text-decoration: underline;
                }
                .graylink:hover {
                    color: #474747;
                }                  

                ::-webkit-scrollbar {
                    width: 8px;
                    background-color: transparent;
                    -webkit-border-radius: 100px;
                }
                ::-webkit-scrollbar:hover {
                    background-color: rgba(0, 0, 0, 0.09);
                }
                ::-webkit-scrollbar-thumb:vertical {
                    background: rgba(0,0,0,0.5);
                    -webkit-border-radius: 100px;
                }
                ::-webkit-scrollbar-thumb:vertical:active {
                    background: rgba(0,0,0,0.61);
                    -webkit-border-radius: 100px;
                }
        `}
            
            </style>
            <Head>
                <title>{postData.model.name}</title>
                {preloadImages(postData.extra_images)}
            </Head>
            <div class="main">
                <div class="container">
                    <div class="imagesubcontainer">
                        <div>
                            <Image class="mainimage float-left" src={selected} fluid></Image>
                            <p class="text-light imageheaderstroke">{selectedDescription}</p>
                            <p class="text-light imageheader">{selectedDescription}</p>
                            {getButtons()}
                        </div>
                        <div class="imagetext">
                            <p class="text-light titletext">{postData.model.name}</p>
                            <div class="description-holder">
                                <p class="text-light descriptiontext">{postData.model.description}</p>
                            </div>
                        </div>
                        <ButtonGroup className="d-flex downloadbuttons">
                            <Button type="button" variant="dark" href={`./${postData.file_name}`} download>Download</Button>
                            {getSecondButton()}
                        </ButtonGroup>
                        {getCredits()}
                    </div>
                </div>
          </div>
      </>
    )
  }
  
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }