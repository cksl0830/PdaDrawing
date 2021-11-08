import React, {Component} from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

class Button2 extends Component{
    render(){
        return(
                <div className="button2">
                      <Link
                        to="/album"
                         className="transferlink">
                    <div className="button_img2">
                    <img src="./img/album1.png" width="100"/>
                    </div>
                    </Link>
                    <div className="button_text2">
                        <p className="button_font2">결과물 구경하기</p>
                    </div>
                </div>
                

        )
    }
}

export default Button2;