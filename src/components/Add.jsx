import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data,changData]=useState(
        {
            "pid":"",
            "ptitle":"",
            "price":"",
            "desc":"",
            "categorie":"",
            "image":"",
            "rating":"",
        }
    )
    const inputHandler=(event)=>{
        changData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <row className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product id</label>
                                <input type="text" className="form-control" name="pid" value={data.pid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">product Title</label>
                                <input type="text" className="form-control" name="ptitle" value={data.ptitle} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Price</label>
                                <input type="text" className="form-control" name="price" value={data.price} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="" id="" className="form-control" textname="desc" value={data.desc} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Category</label>
                                <input type="text" className="form-control" name="categorie" value={data.categorie} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Image</label>
                                <input type="file" className="form-control" name='image' value={data.image} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Rating</label>
                                <input type="text" className="form-control" name="rating"value={data.rating} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Add</button>
                            </div>
                        </row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
