import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    children: ReactNode,
}

const PrivateRoute: React.FC<IPrivateRoute> = ({children}: IPrivateRoute) => {

    const floorAccess = useSelector((state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => state.floorAccess.floorAccess);
    const {index} = useParams();

    const nev = useNavigate();

    useEffect(() => {
        
        if(!floorAccess[+index!]){
            console.log(`access: ${floorAccess[+index!]} floorArr: ${floorAccess}`);
            nev("/forbidden");
        }
    }, [index])

    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute