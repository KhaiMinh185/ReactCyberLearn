import logo from './logo.svg';
import './App.css';
import Header from './component/Demo/Header';
import HeaderRFC from './component/Demo/HeaderRFC';
import BaiTapChiaLayout from './component/BaiTapChiaLayout/BaiTapChiaLayout';
import Home from './component/BaiTapChiaLayout/Home';
import BaiTapThucHanhLayout from './component/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import StateDemo from './State/StateDemo';
import Styling from './styling/Styling';
import Child from './styling/Child';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithLoop from './RenderWithLoop/RenderWithLoop';
import BaiTapRenderFilms from './BaiTapRenderFilms/BaiTapRenderFilms';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';
import BaiTapChonXeNangCao from './BaiTapChonXeNangCao/BaiTapChonXeNangCao';
import BaiTapMayTinhBoTui from './BaiTapMayTinhBoTui/BaiTapMayTinhBoTui';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout/> */}
      {/* <StateDemo/> */}
      {/* <Styling/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithLoop/> */}
      {/* <BaiTapRenderFilms/> */}
      {/* <BaiTapThuKinh/> */}
      {/* <BaiTapChonXeNangCao/> */}
      <BaiTapMayTinhBoTui/>
    </div>
  );
}

export default App;
