import React from "react";
import {Container} from "react-bootstrap";
import azeroth from "../../assets/img/azeroth.jpg"
import styled from "styled-components";

const Styles = styled.div`
  .jumbotron {
    margin-bottom: 2rem;
    border-radius: .3rem;
  }

  .jumbo {
    background: url(${azeroth}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`

const Jumbotron = () => (
    <Styles>
        <div className="jumbotron">
            <div className="jumbo">
                <div className="overlay"></div>
                <Container className="container-fluid text-sm-left p-5">
                    <h1 className="display-4">Hey guys</h1>
                    <p className="lead">Text more...</p>
                    <hr className="my-4"/>
                </Container>
            </div>
        </div>
    </Styles>
)

export default Jumbotron