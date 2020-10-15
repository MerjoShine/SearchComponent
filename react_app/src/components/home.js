import React, { Component } from'react';
import{ Link, Redirect } from'react-router-dom';
import '../App.css'


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedValue:"",
            errorMessage:"",
            success:false
        }
    }
    
    handleChange = ( event ) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState( { selectedValue: value,errorMessage:"",success:false } )
    }

    handleClick = ( event ) => {
        event.preventDefault();
        let count=0
        let product=''
        let arr=this.state.selectedValue.split(" ")
        arr.forEach((value,i)=>{
            let val=value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()
            if(i==arr.length-1){
                product+=val
            }else{
                product+=val+" "
            }
            
        })
        this.props.products.forEach((obj,i)=>{
            console.log(product);
            if(obj.Name.search(product)!==-1){
                count+=1
            }
        })
        if(count==0){
            this.setState({errorMessage:'Unable to find the product',success:false})
        }else{
            this.setState({errorMessage:'',success:true})
        }
    }


    render () {
        if( this.state.success === true ) return<Redirect to={'/search/' + this.state.selectedValue} />
        return(
            <div className='mar'>
                <input list="encodings" value={this.state.selectedValue} onChange={this.handleChange} placeholder='Select any Mobile' className="col-sm-6 mt-5 custom-select custom-select-sm"/>
                <datalist id="encodings">
                    <select>
                    {
                        this.props.products.map((obj,i)=>{
                            return <option key={i} value={obj.Name}>{obj.Name}</option>
                        })
                    }
                    </select>
                    
                </datalist>
                <button className="btn btn-outline-dark ml-2 mt-5" onClick={this.handleClick}>Go</button>
                <h4 className="text text-center text-danger">{this.state.errorMessage}</h4>
            </div>
        )
    }
}
export default Home;