import React, { useState } from "react";
import "./MainPage.scss";
import logo from "../Assets/LOGOcap.png";
import axios from "axios";
import {Link} from 'react-router-dom';



const MainPage = () => {


  const [urlValue, setUrlValue] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  // const [error, setError] = useState("");

  function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("shortUrl");
  
    /* Select the text field */
    copyText.select();
  }  




const submit = async (e) =>{  
  e.preventDefault()
  console.log(urlValue);
 try {
  const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${urlValue}`)
  setShortUrl(data.data.result.short_link);
 } catch (error) {
   console.log(error);
 }
}

  return (
    <div className="mainpage">
      <div className="logo">
        <img alt="" src={logo} />
      </div>
      
      <Link to='/login'>
      <a>Back to Login</a>
      </Link>
      <div className="mainbody">
        <div className="upperbody">
          <div>
            <h3>Paste your URL here:</h3>
          </div>
          <form onSubmit={submit}>
          <i class="fas fa-link"></i>
            <input type="url" value={urlValue} onChange={e=>setUrlValue(e.target.value)} />
            <button type="submit">shorten</button>
          </form>
        </div>
        <div className="result">
          <p className="info">Your Short Url</p>
          <div className="urlReturned">
            <p id="shortUrl">{shortUrl}</p>
            <button className="copy" onClick={()=>copyText}>
              {/* <i class="far fa-copy"></i> */}
              <p>Copy</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
