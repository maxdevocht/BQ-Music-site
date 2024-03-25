import React from "react"

export default function Navbar() {
    return (
        <nav>
            <div className="home">
                <ul>
                    <li className="hideOnMobile"><a href="#home">_Home</a></li>
                    <li className="hideOnMobile"><a href="#work">_Recent Werk</a></li>
                    <li className="hideOnMobile"><a href="#review">_Reviews</a></li>
                    <li className="hideOnMobile"><a href="#artiest">_Artiesten</a></li>
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <li className="hideOnMobile"><a href="https://www.facebook.com/BQpassivetone">_Facebook</a></li>
                    <li className="hideOnMobile"><a href="https://twitter.com/Bqmusic">_X</a></li>
                    <li className="hideOnMobile"><a href="https://www.instagram.com/bqmusic">_Instagram</a></li>
                    <li className="hideOnMobile"><a href="https://www.etsy.com/shop/BQmusic?fbclid=IwAR0o1SB_9czAXPARyTmJ-40rpDwGwZa9VjSMvunckedbf9Ozdse7eRuLdJE">_Etsy</a></li>
                    <li className="menu-btn" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#f2f2f2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 6l16 0"></path>
                        <path d="M4 12l16 0"></path>
                        <path d="M4 18l16 0"></path>
                    </svg></a></li>
                </ul>
            </div>
        </nav>
    )
}