import React from 'react';

const Newsfeed = (props)=>{
    console.log(props)
    const renderList = props.datalist.map((data)=>{
        return (
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
                <img src={data.imageUrl} />
            </div>
        )
    })
    return(
        <div>
            {renderList}
        </div>
    )

}

export default Newsfeed;