import React, { useState } from "react";
import PreviewBox from "../components/PreviewBox";
import ImgsList from "../components/ImgsList";
import styled from "styled-components";

const AppBoxWrpr = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ListWrpr = styled.div`
  width: 15%;
  margin: 0;
  position: absolute;
  z-index: 10;
  top: 36%;
  left: 12%;
  border-radius: 10px;
  box-shadow: 8px 8px 5px #091228;
  background: #004bfc;
`;

function MainPage() {
  const [imgs, setImgs] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const onImageChange = (e) => {
    const [file] = e.target.files;
    const fileConverted = URL.createObjectURL(file);

    setImgs((prevState) => {
      if (prevState.length === 5) {
        prevState.pop();
      }
      setSelectedImage(fileConverted);
      return [{ data: fileConverted, name: file.name }, ...prevState];
    });
  };

  return (
    <React.Fragment>
      <ListWrpr>
        <ImgsList
          setSelectedImage={setSelectedImage}
          imgs={imgs}
          onImageChange={onImageChange}
          mode={imgs && "round"}
        />
      </ListWrpr>
      <AppBoxWrpr>
        <PreviewBox selectedImage={selectedImage && selectedImage} />
      </AppBoxWrpr>
    </React.Fragment>
  );
}

export default MainPage;
