import React from 'react'

import { category } from './Data'

import './style.css'

function Product({ product,filterProduct }) {



    return (
        <div className='mt-5'>
             <button onClick={ () => filterProduct("all") } className='btn btn-secondary'>All</button>
            {
                category.map((cat) => {
                    return (
                        <button onClick={() => filterProduct(cat.name)} key={cat.id} className='btn btn-secondary mx-2'>{cat.name}</button>
                    )
                })
            }

           

            <div className="container">
                <div className="row mt-5">
                    {
                        product.map((p) => {
                            return (
                                <div key={p.id} className="col-lg-3 mb-4">
                                    <div className="card">
                                        <img src={p.img} style={{height:"200px",objectFit:"contain"}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p  className="card-text fs-5 fw-bold">RS :- {p.price}</p>
                                            <a href="#" className="btn btn-success">Know More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Product