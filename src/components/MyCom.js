import React from "react";
import './MyCom.css';


function MyCom () {
    let arr = [
        {href: 'example.org', text: 'link 1', className: 'link-class'},
        {href: 'example.org', text: 'link 2', className: 'link-class'},
        {href: 'example.org', text: 'link 3', className: 'link-class'}
    ];
    return (
        
        <div className="container">

            <aside>
                {arr.map((item, index) => (
                    <a key = {index} href={item.href} className = {item.className}>
                        {item.text}
                    </a>
                ))}

            </aside>

        </div>
    );
}

export default MyCom;