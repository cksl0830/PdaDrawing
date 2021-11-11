import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
// import { FiUpload } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../component/Nav';
import './Home.css';
import Button from '../component/Button';
import Button2 from '../component/Button2';

function Page_Home() {
  const linestyle={
    weight:"1000px",
    height:"2px",
    boder:"1px solid black",
    background:"#CEE5D0",
    }
    
  return (
    <div className="Home">
      <Container fluid>
      <div>
      <Navigation/>
      </div>
      <div style={linestyle}></div>
      <Row>
        <Col md={7}>
          <div className="head">
            <h1>Line Drawing</h1>
            <p>라인드로잉 기능을 사용해 이미지의 라인을 추출(배경을 제거) 해보세요 !</p>
          </div>          
          <img className="homeimg" alt="이미지를 불러오지 못했습니다." src="/img/homeimg.gif" />           
          
        </Col>
        <Col md={5}>
        <Button/>
        <Button2/>
        </Col>

        {/* <Col md={4}>
        <div className="transferbtn">
            <Link
              to="/transfer"
              className="transferlink"
            >
              <img className="uploadimg" alt="이미지를 불러오지 못했습니다." src="/img/upload.png" /> 
            </Link>
            <p>이미지 업로드</p>
            <p>(또는 파일 드래그)</p>
          </div>

          <div className="transferbtn">
            <Link
              to="/transfer"
              className="transferlink"
            >
              <img className="albumimage" alt="이미지를 불러오지 못했습니다." src="/img/album.png" /> 
            </Link>
            <p>결과물 구경하기</p>
          </div>
          
        </Col> */}
        {/* <Col sm={8}>
          <div className="blackBox">
            <p>My hand-blooming<br /> masterpiece</p>
          </div>
        </Col> */}
      </Row>
    </Container>
    </div>
  );
}





export default Page_Home;