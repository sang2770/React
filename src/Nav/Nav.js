import './Nav.css';
import Inf from "../Header/Sinhvien"
import Member from './Member'
function Nav() {
  const inf={
      name:"Nguyen Van Hải",
      age:"23"
  }
  const member={
    text:"Nguyễn van Sang rất Đẹp zai ok!",
    info:{
      name:"Nguyễn Văn Sang",
      GirlFriend:"Phạm Thị Thanh Xuân"
    }
  }
  return (
    <div className="Nav">
      <h1 className="Nav_heading">
        Hello You 
      </h1>
      <h2 style={{color:'gray'}}>Sang Ok</h2>
      <Inf name="Nguyen Van Nam" age="18"/>
      {/* Tái sử dụng Component */}
      <Inf name={inf.name} age={inf.age}/>
      
      <h1 className="member">
        <Member Member={member}/>
      </h1>

    </div>
   
  );
}

export default Nav;