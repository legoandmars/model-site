import {Button, ButtonGroup, Card} from "react-bootstrap";
import Link from 'next/link'
import Head from 'next/head'
import Header from '../layouts/header'

export default function getCard(imageName, downloadName, endpoint){
    return (
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
            <img class="card-img-top" src={`./${imageName}`} alt="Card image cap"></img>
                <ButtonGroup className="d-flex">
                    <Button className="w-100" type="button" variant="dark" href={`./${downloadName}`} download>Download</Button>
                    <Button className="w-100" type="button" variant="dark" href={`./${endpoint}`}>Details</Button>
                </ButtonGroup>
        </div>
    </div>
    )
}

export function modelPage(allModels, modelType){
    let modelElementList = [];
    // send it off to be rendered by model-list;
    for (let i = 0; i < allModels.length; i++) {
        const model = allModels[i];
        if(model.type == modelType || modelType == "all Model"){
            modelElementList.push(getCard(model["image_name"], model["file_name"], model.endpoint))
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
    
                .album {
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
                    background-color: #303030;
                }
                .btn{
                    background-color: #000000;
                    border-color: #4d4d4d;
                }
            `}
            
            </style>
            <Head>
                <title>{modelType.charAt(0).toUpperCase() + modelType.slice(1)+"s"}</title>
            </Head>
            <div class="album py-5">
                <div class="container">
                    <div class="row">
                        {modelElementList}
                    </div>
                </div>
          </div>
    
        </>
      )
}  
/*[{
    "image_name": "testimage.png",
    "file_name": "Diamond Ore.pixie",
    "type": "wall",
    "endpoint": "DiamondOre"
}]*/