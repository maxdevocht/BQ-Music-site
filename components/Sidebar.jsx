import React from 'react'

export default function Sidebar() {
    return (
        <section id='sidebarSection' className='sidebar'>
            <div className='home'>
                <ul>
                    <li>
                        <a href='#home'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#f2f2f2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M18 6l-12 12"></path>
                            <path d="M6 6l12 12"></path>
                            </svg>
                        </a>
                    </li>
                    <li><a href="#home">_Home</a></li>
                    <li><a href="#work">_Recent Werk</a></li>
                    <li><a href="#review">_Reviews</a></li>
                    <li><a href="#artiest">_Artiesten</a></li>
                </ul>
            </div>
        </section>
    )
}