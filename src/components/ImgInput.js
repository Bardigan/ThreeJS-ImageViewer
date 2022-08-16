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
  border-radius: ${props => props.mode === "round" ? "0px 0px 10px 10px" : "10px"};

  &:hover {
    background: #004bfc;
    color: white;
  }
`;

const HiddenInputStyled = styled.input`
  display: none;
  background: none;
`;

function ImgInput(props) {
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <React.Fragment>
      <Button
        mode={props.mode}
        onClick={handleClick}
      >
        + Upload New Image
      </Button>
      <HiddenInputStyled
        type="file"
        ref={hiddenFileInput}
        onChange={props.onImageChange}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
    </React.Fragment>
  );
}

export default ImgInput;
