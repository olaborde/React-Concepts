import React from 'react';
import LazyLoad from 'react-lazyload'

const Newsfeed = (props)=>{
    console.log(props)
    const renderList = props.datalist.map((data)=>{
        return (
            <LazyLoad height={200} throttle={500} key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
                <img src={data.imageUrl} />
            </LazyLoad>
        )
    })
    return(
        <div>
            {renderList}
        </div>
    )

}

export default Newsfeed;