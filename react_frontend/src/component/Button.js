import React, {Component} from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

class Button extends Component{
    render(){
        return(
                <div className="button">
                    <Link
                        to="/transfer"
                         className="transferlink">
                    <div className="button_img">
                    <img src="./img/Upload1.png" width="110"/>
                    </div>
                    </Link>
                    <div className="button_text">
                        <p className="button_font">이미지 업로드</p>
                        <p className="button_font">(또는 파일 드래그)</p>
                    </div>
                    
                </div>                

        )
    }
}

export default Button;