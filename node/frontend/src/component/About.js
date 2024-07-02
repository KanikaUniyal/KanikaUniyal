// import Navbar from "./Navbar"

// function About(){

//     return(
//         <div>
//             <Navbar/>
//         <div> Welcome to About page</div>
//         </div>
//     )
//  }
//  export default About



// HOME-------:


// import Navbar from "./Navbar";
// import img from './image/PHOTO (2).jpg';

//  function Home(){

//     var num=10;
//     var str=" my react string"
//     var ar=[1,2,3,4]
//     var obj=[{Name:'Abc', Number:123}]
//     var obj2=[{Activity1:  'Swimming' , TaskOne:  'Task1'},
//     {Activity2 : 'Dancing' , TaskTwo : 'Task2'},
//     {Activity3: 'Cooking' , TaskThree: 'Task3'}]
//     // {TaskOne:  'Task1' , TaskTwo : 'Task2' , TaskThree: 'Task3'}]
//     // var obj3=[{TaskOne:  'Task1' , TaskTwo : 'Task2' , TaskThree: 'Task3'}]
//     return(
//         <div>
//             {/* parent div  */}
//             <Navbar/>
//         <h1 className='heading' style={{marginTop:'160px'}}> Welcome to home page</h1>
//         <h1 className='variable' style={{marginLeft:100}}>{num}</h1>
//         <h2>{str}</h2>
//         <h2>{ar}</h2>
//         <h2>{obj.Name}</h2>
//         {/* if  : */}
//         <h2>{num<40 && ('yes')}</h2> 
//         {/* if else   : */}
//         <h2>{num>40? ('yes') : ('no')}</h2>
//         <img src={img}/>


//         {/* array itration: */}
//       { ar.map((val)=>(
//         <div>
//             <h1>{val}</h1>
//         </div>
//        ))}
//        {/* Object itration: */}
//        {obj.map((item)=>(
//        <>
//         <p>{item.Name}</p>
//         <p>{item.Number}</p>
//         </>
//        ))}

// {obj2.map((item)=>(
//        <>
//         <h1>{item.Activity1}{item.TaskOne}</h1>
//          <h1>{item.Activity2}{item.TaskTwo}</h1>
//         <h1>{item.Activity3}{item.TaskThree}</h1>
       
//         </>
//        ))}



//         </div>
//     )
//  }
//  export default Home


