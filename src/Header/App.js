import './App.css';
import Inf from "./Sinhvien"
import Teacher from "./Teacher"
function Header() {
  const character=[
    {
      name:"Nguyen Van Nam",
      age:"10"
    },
    {
      name:"Nguyen Xuan Ninh",
      age:"50"
    },
    {
      name:"Vuong Thái An",
      age:"20"
    },
  ]
  return (
    <div className="App">
      <h1 className="App_heading">
        Hello You 
      </h1>
      <h2 style={{color:'gray'}}>Sang Ok</h2>
      <Inf name="Nguyen Van Nam" age="18"/>
      {/* Tái sử dụng Component */}
      <Inf name="Phạm Thị Thanh Xuan" age="20"/>
      <Inf name="Phạm Thanh mai" age="20"/>

      <h1 className="Teacher">
        <Teacher Character={character}/>
      </h1>
    </div>
   
  );
}

export default Header;
