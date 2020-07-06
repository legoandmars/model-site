import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import Header from '../layouts/header'
import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import Link from 'next/link'
import Head from 'next/head'
export default function Post({ postData }) {
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
                }
                .mainimage{
                    height:55%;
                    width:55%;
                    margin-left:0px;
                    background-color: #303030;
                    float:left;
                }
                .imagetext{
                    width:45%;
                    float:right;
                }
                .p{
                    text-align: center;
                }
                .titletext{
                    font-size:3rem;
                    text-align: center;
                    font-weight:bold;
                }
                .descriptiontext{
                    font-size:1.5rem;
                    text-align: center;
                }
                .imagesubcontainer{
                    margin-top:3rem;
                    display:inline-block;
                    width:100%;
                    position:relative;
                }
                .downloadbuttons{
                    width:35%;
                    bottom:0;                          
                    right:0;   
                    left: 60%;
                    position:absolute;                       
                }
            `}
            
            </style>
            <Head>
                <title>walls</title>
            </Head>
            <div class="main">
                <div class="container">
                    <div class="imagesubcontainer">
                        <Image class="mainimage float-left" src={postData.image_name} fluid/>
                        <div class="imagetext">
                            <p class="text-light titletext">{postData.model.name}</p>
                            <p class="text-light descriptiontext">{postData.model.description}</p>
                        </div>
                        <ButtonGroup className="d-flex downloadbuttons">
                            <Button type="button" variant="dark" href={`./${postData.file_name}`} download>Download</Button>
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
  