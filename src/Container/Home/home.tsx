import VideoPlayer from 'Components/Video/videoPlayer';
import { TextField } from '@material-ui/core';
import './home.css';

const HomePage = () => {
  return (
    <div className="container">
      <form className="form" noValidate autoComplete="off">
        <div className="margin-top">
          <TextField
            className="input"
            id="outlined-basic"
            label="Account"
            variant="outlined"
          />
        </div>
        <div className="margin-top">
          <TextField
            className="input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
      </form>
      <VideoPlayer src="https://v190.iiiijjjjij.com/xbase/us40/xcfiles/videos/2022/7/14/vietsub_pinyin_co_gai_ay_noi_voi_toi_uu_uu_cover_tik_tok_6931702753407677545.mp4" />
    </div>
  );
};

export default HomePage;
