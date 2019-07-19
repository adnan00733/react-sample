import React from 'react';
const token_generate = () => {
    const rand=()=>Math.random(0).toString(36).substr(2);
    const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    return token(40);
}
const Cargo = ({cargo}) => {
    const cargoList = cargo.length ? (
        cargo.map(single_cargo => {
            return (
                <div key={token_generate()}>
                    <ul>
                        <li>Type: {single_cargo.type}</li>
                        <li>Description: {single_cargo.description}</li>
                        <li>Volume: {single_cargo.volume}</li>
                    </ul>
                </div>
            )
        })
    ) : null;
    return (
        <div className="cargo-list">{ cargoList }</div>
    );
}
export default Cargo;
