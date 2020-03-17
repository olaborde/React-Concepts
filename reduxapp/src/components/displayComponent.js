import React from 'react';

const Display = (props) => {

    const renderView = ({datalist}) => {
        
        if(datalist){

            return datalist.map((item) => {
                return(
                 
                    <div className="card" style={{width: '15rem'}}  key={item.id}>
                    <img src={item.img} className="card-img-top img-fluid" height={'200px'} alt="Responsive" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        
                    </div>
                </div>
              
              
                  
                )
            })
        }
    }

    return (
        <div>
            <h2>Movies List</h2>
            {renderView(props)}
        </div>
    )

}

export default Display;