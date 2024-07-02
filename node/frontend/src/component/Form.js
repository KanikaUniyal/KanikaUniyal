import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Form(){
    var uri='http://localhost:1000/';

    function addProduct(e){
        e.preventDefault();
        var data=new FormData(e.currentTarget)
        var name= data.get('name');
        var price=data.get('price');
        var description=data.get('description');
        var image=data.get('image');
        console.log(name+price+description+image)
        var obj ={
            Name:name,
            Price:price,
            Description:description

        }
        axios.post(uri+"addProduct", obj).then((succ)=>{
            console.log(succ.data)
            if(succ.data=='data'){
                alert('data added')
            }
            else{
                alert('cannot add data')
            }
        })
        
        // ;catch(err){
        //     console.log(err) 
        // }
    }
     const [data,setdata]=useState([]);
     function getdata(){
        axios.get(uri + "getdata").then((succ)=>{
            console.log(succ.data);
            setdata(succ.data);
        });
     }
     useEffect(()=>{
     getdata();
     }, []);
    return(
        <>
        
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 " style={{marginTop:"-17px"}}>
         <div class="col-lg-8 col-lg-offset-2  text-center main e ">
            
           
        <form onSubmit={addProduct}>
            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="enter  name"/>
            </div>
            
            <div class="form-group">
                <input type="text" name="price" class="form-control" placeholder="enter  Price"/>
            </div>
            <div class="form-group">
                <input type="text" name="description" class="form-control" placeholder="enter  description"/>
            </div>
            <div>
            <input type="file"  name="image"/>
            <button className="btn btn-block btn-primary">upload</button>
            </div>
            {/* <div class="form-group">
                <input type="submit" value="Submit" class="form-control" />
            </div> */}
        
        </form>
        <h1>Data</h1>
        {data.map((val)=>(
            <>
            <h3>{val.Name}</h3>
            <h3>{val.Price}</h3>
            <h3>{val.Description}</h3>
            {/* <button onClick={()=> del(val._id)}>del</button>
            <button onClick={()=> edit(val._id)}>edit</button> */}
            
            </>
        ))}
    </div>
    
    
</div>

        </>
    )
}
export default Form