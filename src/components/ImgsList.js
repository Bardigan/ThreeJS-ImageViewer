import ImgInput from "./ImgInput";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
width: 100%;
padding: 20px;
background: white;
border: none;
text-align: left;
cursor: pointer;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
border-bottom: 1px solid #c7c7c7;
border-radius: ${props => props.index === 0 ? "10px 10px 0px 0px" : "none"};

&:hover {
  background: #004bfc;
  color: white;
}
`;

function ImgList(props) {

    const printImgList = () => {
        return (
          <div>
            {props.imgs.map((img, i) => {
              return (
                <Button
                  index = {i}
                  key={i}
                  onClick={() => {
                    props.setSelectedImage(img.data);
                  }}
                >
                  {img.name}
                </Button>
              );
            })}
          </div>
        );
      };

  return (
    <React.Fragment>
        {props.imgs && printImgList()}
        <ImgInput onImageChange={props.onImageChange} mode={props.mode} />
    </React.Fragment>
  );
}

export default ImgList;
