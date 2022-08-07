import React, { Component } from "react";
import './Avatar.css';
import Avatarlist from "./Avatarlist";
import 'tachyons';

    class Avatar extends Component{
        constructor(){
            super();
            this.state = {
                name: "Welocme to Avatar World"
            }
        }
        namechange(){
            this.setState({
                name: "Please subscribe"
            })
        }
        render(){
            const avatarlistarray = [
                {
                    id:1,
                    name:'vinod',
                    work:'wed dev'
                },
                {
                    id: 2,
                    name: 'bahadur',
                    work: 'FronEnd Developer'
                },
                {
                    id: 3,
                    name: 'Thapa',
                    work: 'Database'
                },
                {
                    id:4,
                    name:'ThapaTechnical',
                    work:'BackEnd'
                }
            ]
            const arrayavatarcard = avatarlistarray.map( (avatarcard, i)=> {
                return <Avatarlist key={i} id = {avatarlistarray[i].name} name = {avatarlistarray[i].name} work = {avatarlistarray[i].work}/>
            })
            return (
                <div className="mainpage">
                    <h1>{this.state.name}</h1>
                     {arrayavatarcard}  
                    <button onClick={() => this.namechange()}>Subscribe</button>
                </div>
                )
        }
    }
    
export default Avatar;