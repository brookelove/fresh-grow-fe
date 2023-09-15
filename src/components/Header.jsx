import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import "../assets/CSS/components/Header.css"
export default function Header(){
    const navEl = useRef(null);
    const [isSearching, setSearching] = useState(false);
  
    useEffect(()=> {
    let stickyNavbar = () => {
        if(navEl.current){
            if(window.scrollY >= navEl.current.offsetTop){
                navEl.current.classList.add('sticky');
            } else {
                navEl.current.classList.remove('sticky');
            }
        }
    }
    window.addEventListener('scroll', stickyNavbar)
    return ()=> {
        window.removeEventListener('scroll', stickyNavbar)
    }
    }, [])

    let openSearch = () =>{
        setSearching(!isSearching);
    } 

    return (
        <header id='navbar' ref={navEl}>
            <div className='banner'><h6>NEW ITEMS COMMING SOON</h6></div>
            <nav>
                <div>
                    <a href='#categoryCards'>CATEGORIES</a>
                    <a>PRODUCTS</a>
                </div>
                <h1>FRESH GLOW</h1>
                {/* the ability to hide and show search using useState T/F */}
                <div className='rightSide'>
                    {isSearching ? (
                        <a onClick={openSearch}>CLOSE</a>
                        ) : (
                        <a onClick={openSearch}>SEARCH</a>
                    )}
                    <a>LOGIN</a>
                    <strong>CART (0)</strong>
                </div>
            </nav>

            {isSearching && (
                <div className='searchContainer'>
                <div>
                <span class="close">&times;</span>

                </div>
                <input text="search"></input>
                <a>SEARCH</a>
            </div>
            )}
            
        </header>
    )
}