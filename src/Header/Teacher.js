const Teacher=(props)=>{
    console.log(props);
    const result= props.Character.map((element, index) => {
        return (
        <div>
        <h1>{element.name}</h1>
        <h2>{element.age}</h2>
        </div>
        )
    });
    console.log(result);
    return result;
    // console.log(app);
    
    // return 1;
}

export default Teacher