import React from "react";

const Avatarlist = (props) =>{
    return (
        <div className="avatardstyle ma4 bg-light-purple dib pa3 grow shadow-4 tc">
                <img src = {`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
                <h1 className="tc">
                    {props.name}
                </h1>
                <p>
                    {props.work}
                </p>
            </div>
    )
}
export default Avatarlist;