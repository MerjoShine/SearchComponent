import React, { Component } from'react';
import{ Link, Redirect } from'react-router-dom';


class Search extends Component {
    constructor(props){
        super(props)
    }
    

    handleClick = ( name ) => {
        alert(name+' added to cart successfully !')
    }


    render () {
        let data=[]
        if(this.props.name=='all'){
            data=this.props.products
        }else{
            data=this.props.products.filter((obj,i)=>{
                if(obj.Name==this.props.name){
                    return true
                }
            })
            if(data.length==0){
                let arr=this.props.name.split(" ")
                let product=''
                arr.forEach((value,i)=>{
                    let val=value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()
                    if(i==arr.length-1){
                        product+=val
                    }else{
                        product+=val+" "
                    }
                    
                })
                data=this.props.products.filter((obj,i)=>{
                    if(obj.Name.search(product)!==-1){
                        return true
                    }
                })
            }
            
        }
        return(
            <div className='mt-3'>
                <div className='row'>
                    {data.map((obj,i)=>{
                        return (
                            <div key={i} className='col-md-4 offset-md-1 col-sm-12'>
                                <div className='card mt-3'>
                                    <div className='row'>
                                    <div className='col-md-6 col-sm-6'>
                                        <img className="card-img-top img-fluid padding" src={obj.img} alt={obj.Name} width="400"></img>
                                    </div>
                                    <div className='col-md-6 col-sm-6'>
                                        <div className='card-body'>
                                        <h5 className='card-title text-center'>{obj.Name}</h5>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td className='padding'><b>Price:</b></td>
                                                <td className='padding'>&#x20B9;{obj.Price}</td>
                                            </tr>
                                            <tr>
                                                <td className='padding'><b>Brand:</b></td>
                                                <td className='padding'>{obj.Brand}</td>
                                            </tr>
                                            <tr>
                                                <td className='padding'><b>RAM:</b></td>
                                                <td className='padding'>{obj.RAM}</td>
                                            </tr>
                                            <tr>
                                                <td className='padding'><b>Storage:</b></td>
                                                <td className='padding'>{obj.storage}</td>
                                            </tr>
                                            <tr>
                                                <td className='padding'><b>OS:</b></td>
                                                <td className='padding'>{obj.OS}</td>
                                            </tr>
                                            </tbody>
                                            

                                        </table>
                                        <button onClick={()=>this.handleClick(obj.Name)} className='btn btn-outline-primary btn-block'>Add to Cart</button>
                                        </div>
                                    </div>
                                    </div>
                                 </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div >
        )
    }
}
export default Search;