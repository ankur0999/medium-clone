import { ChangeEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@r.ankur/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type} : {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        
        
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`, postInputs);
            if(response.data.jwt){
                localStorage.setItem("token",response.data.jwt);
                navigate("/blogs");
            }else{
                alert(`wrong input`)
            }
            

        }catch(e){
           alert(`unable to signin`);
        }
    }

    return <div className=" h-screen flex justify-center flex-col ">
        
        <div className="flex justify-center">
            <div className=" ">
                <div className="text-center px-8 py-4">
                    <div className="text-3xl font-bold" >
                       {type === "signup" ? "Create an account": "Login to  account"} 
                    </div>
                    <div className="text-slate-400">
                        {type === "signup" ? "Already have an account?" : "Don't have a account?"}
                    <Link className="pl-2 underline" to={type === "signup" ? "/signin":"/signup"}> {type === "signup"?"Login":"Signup"}</Link>
                    </div>
                </div>
                
                
                {type === "signup"?<div className="p-2">
                <LabelledInput id="name" label="Username" placeholder="Ankur Raj" onChange={(e)=>{
                   setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
                }}/></div>:<div></div>}
                <div className="p-2">
                <LabelledInput  id = "email" label="Email" placeholder="ankur@gmail.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }}/>
                </div>
                <div className="p-2">
                <LabelledInput id="password" label="Password" type="password" placeholder="" onChange={(e)=>{
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
                }}/></div>
                <div className="px-2">
                    <Button label={type} onClick={sendRequest}/>
                </div>

            </div>
            
        </div>
        
    </div>
}
interface LabelledInputType {
    id: string
    label: string;
    placeholder: string;
    onChange:(e: ChangeEvent<HTMLInputElement>) => void;
    type? : string
}
function LabelledInput({ id, label, placeholder, onChange, type }: LabelledInputType){
    return <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type={type ||"text"} placeholder={placeholder} required></input>
    </div>
}

interface ButtonType{
    label: string;
    onClick: any;
   }

function Button ({onClick,label}:ButtonType){
    return <div>
        <button onClick={onClick} type="button" className="w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{label === "signup" ? "Sign up": "Sign in"}</button>
    </div>
}