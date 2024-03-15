import React from 'react'

export default function Sidebar() {
    return (
        <section id='sidebarSection' className='sidebar'>
            <div className='home'>
                <ul>
                    <li><a href='#home'></a></li>
                    <li><a href="#home">_Home</a></li>
                    <li><a href="#work">_Recent Werk</a></li>
                    <li><a href="#review">_Reviews</a></li>
                    <li><a href="#artiest">_Artiesten</a></li>
                </ul>
            </div>
        </section>
    )
}