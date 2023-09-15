import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import "../assets/CSS/components/Header.css"
import { hover } from '@testing-library/user-event/dist/hover';


export default function Header(){
    const navEl = useRef(null);
    const [titleText, setTitleText] = useState("FRESH GLOW");
    const [isSearching, setSearching] = useState(false);
    const categoryCardRef = useRef()

    useEffect(()=> {
    let stickyNavbar = () => {
        if(navEl.current){
            if(window.scrollY >= navEl.current.offsetTop){
                navEl.current.style.position = 'sticky';
                navEl.current.style.top = '0';
                navEl.current.style.zIndex = '100';
            }  else {
                console.log("removeClass")
                navEl.current.style.position = 'initial';
            }
        }
    }

    window.addEventListener('scroll', stickyNavbar)
    
    // Call initially to set the position 
    stickyNavbar();

    return ()=> {
        window.removeEventListener('scroll', stickyNavbar)
    }
    }, [])
    let openSearch = () =>{
        setSearching(!isSearching);
    } 

    const hoverTitle = () => {
        // Update the title text on hover
        console.log("hover")
        setTitleText('GLOW BRIGHT');
    };

    const resetTitle = () => {
        // Reset the title text on mouse leave
        console.log("over");
        setTitleText('FRESH GLOW');
    };
    // const scrollToCategoryCards = ()=> {
    //     console.log("setscroll")
    //     if(categoryCardRef.current) {
    //         categoryCardRef.current.scrollIntoView({
    //             block:"start",
    //             behavior: "smooth"
    //         })
    //     }
    // }

    return (
        <header id='navbar' ref={navEl} >
            <div className='banner'><h6>NEW ITEMS COMMING SOON</h6></div>
            <nav>
                <div>
                    <Link to="/products">PRODUCTS</Link>
                </div>
                <Link to="/" id='titlePage' onMouseEnter={hoverTitle}
                    onMouseLeave={resetTitle}>{titleText}</Link>
                {/* the ability to hide and show search using useState T/F */}
                <div className='rightSide'>
                    {isSearching ? (
                        <a onClick={openSearch}>CLOSE</a>
                        ) : (
                        <a onClick={openSearch}>SEARCH</a>
                    )}
                    <Link to="/login">LOGIN</Link>
                    <strong>CART (0)</strong>
                </div>
            </nav>
             {/* change from hide to show in the code */}
            {isSearching && (
                <div className='searchContainer'>
                <input text="search"></input>
                <a>SEARCH</a>
            </div>
            )}
            
        </header>
    )
}