import React from 'react'

export default function Sidebar() {
    return (
        <section id='sidebarSection' className='sidebar'>
            <div className='home'>
                <ul>
                    <li className='sidebar--items'><a href="#home">_Home</a></li>
                    <li className='sidebar--items'><a href="#work">_Recent Werk</a></li>
                    <li className='sidebar--items'><a href="#review">_Reviews</a></li>
                    <li className='sidebar--items'><a href="#artiest">_Artiesten</a></li>
                </ul>
            </div>

            <div className="socials">
                <ul>
                    <li className='socials--items'><a href="https://www.facebook.com/BQpassivetone">_Facebook</a></li>
                    <li className='socials--items'><a href="https://twitter.com/Bqmusic">_X</a></li>
                    <li className='socials--items'><a href="https://www.instagram.com/bqmusic">_Instagram</a></li>
                    <li className='socials--items'><a href="https://www.etsy.com/shop/BQmusic?fbclid=IwAR0o1SB_9czAXPARyTmJ-40rpDwGwZa9VjSMvunckedbf9Ozdse7eRuLdJE">_Etsy</a></li>
                </ul>
            </div>
        </section>
    )
}