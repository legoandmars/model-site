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
    function getGithubLink(){
        if(postData.github_link){
            return(
                <>
                    <Button type="button" variant="dark" href={`${postData.github_link}`}>Github Link</Button>
                </>
            );
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
                    font-size:3rem;
                    font-size: 2vw;
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
                    margin: auto;
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
                }
                .imagesubcontainer{
                    margin-top:3rem;
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
                }
                .arrow-button{
                    position:absolute;
                    background-color: #000000;
                    border-radius: 10px;
                    border: 0.15rem solid #4d4d4d;
                    width:3.35rem;
                    height:3.35rem;
                    top: calc(90% + 0.5rem);
                    left: calc(55% - 3.35rem);
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
            `}
            
            </style>
            <Head>
                <title>walls</title>
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
                            {getGithubLink()}
                        </ButtonGroup>
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
  