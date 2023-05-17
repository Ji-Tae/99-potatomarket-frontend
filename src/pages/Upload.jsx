import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import { styled } from 'styled-components';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import InputBox from '../components/common/InputBox';
import useInput from '../hooks/useInput';
import { useMutation } from 'react-query';
import { uploadPost } from '../api/posts';

function Upload() {
  // 텍스트 관리
  const [title, titleHandler] = useInput();
  const [price, priceHandler] = useInput();
  const [content, contentHandler] = useInput();
  const [location, locationHandler] = useInput();

  // 파일 관리
  const [photo, setPhoto] = useState(null);
  const [fileList, setFileList] = useState([]);

  //이미지 파일 관리
  const [previewUrl, setPreviewUrl] = useState(null);

  const photoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const uploadMutation = useMutation(uploadPost, {
    onSuccess: () => {
      alert('업로드에 성공하셨습니다.')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('content', content);
    formData.append('location', location);

    uploadMutation.mutate(formData);
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("highlight");
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("highlight");
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("highlight");

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }

  function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    handleFiles(files);
  }

  function handleFiles(files) {
    const updatedFiles = [...fileList, ...files];
    setPhoto(updatedFiles);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
    });
  }

  return (
    <Layout>
      <PostTitle>중고 물품 올리기</PostTitle>
      
      <Container>
        <div className="contents" style={{ width: "60%", display: "flex", flexDirection: "row", marginTop: "30px", justifyContent: "center" }}>
          <div
            className="upload-box"
            style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div id="drop-file" className="drag-file" style={{ color: "white", position: "relative", width: "100%", height: "360px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px dashed #9e7979" }}>
              <img src="data:image/png;base64,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" alt="파일 아이콘" className="image" style={{ width: "40px" }} />
              <p className="message" style={{ fontSize:"15px",marginBottom: 0, color: "#9e7979" }}>
                Drag files to upload
              </p>
              <p style={{ fontSize:"15px", color: "#9e7979", fontWeight:"bold" }}>이미지 파일을 드래그해서 등록해주세요</p>
              {previewUrl && <img src={previewUrl} alt="미리보기 이미지" className="preview" style={{ display: "block", position: "absolute", left: 0, height: 0, width: "100%", height: "100%" }} />}
            </div>

            <input
              className="file"
              id="chooseFile"
              type="file"
              onChange={handleFileSelect}
              accept="image/png, image/jpeg, image/gif"
              style={{ display: "none" }} />
          </div>
        </div>

        {/* 입력 값 */}
        <form onSubmit={handleSubmit}>
          <UploadTitle>
            <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
              글 제목
            </Text>
            <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}
              value={title}
              onChange={titleHandler} />
          </UploadTitle>
          <UploadPrice>
            <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
              가격
            </Text>
            <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}
              value={price}
              onChange={priceHandler} />
          </UploadPrice>
          <UploadContent>
            <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
              물품 설명
            </Text>
            <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}
              value={content}
              onChange={contentHandler} />
          </UploadContent>
          <UploadLocation>
            <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
              거주지
            </Text>
            <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}
              value={location}
              onChange={locationHandler} />
          </UploadLocation>
          <div style={{ width: '40%', margin: 'auto' }}>
            <Button width={'100%'} height={'45px'} bc={'#9e7979'} onClick={handleSubmit}>
              <Text fontSize={'22px'} fontWeight={'bold'} color={'#ffffff'}>
                게시물 올리기
              </Text>
            </Button>
          </div>
        </form>
      </Container>
    </Layout>
  );
}

export default Upload;

const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  color: #beb47d;
  padding: 70px;
`;

const Container = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  border-radius: 12px;
  box-shadow: 1px 1px 7px 1px rgba(190, 180, 125, 0.26);
  padding: 50px;
  background-color: white;
`;

const UploadTitle = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;

const UploadPrice = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const UploadContent = styled.div`
 display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const UploadLocation = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: space-between;
`