import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import "../assets/CSS/components/Header.css"
import { FaArrowRightLong } from "react-icons/fa6";


export default function Header({showCart}){
    const navEl = useRef(null);
    const [titleText, setTitleText] = useState("FRESH GLOW");
    const [isSearching, setSearching] = useState(false);
    const [user, setUserName] = useState(null);
    const [logout, setLogout] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isSticky, setIsSticky] = useState(false);
    const [shouldShowResults, setShouldShowResults] = useState(false);


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchResultClick = () => {
        setSearching(false);
        setShouldShowResults(false);
      };
    let handleLogoutSubmit = async (event) => {

        const options = {
            method: 'POST',
            credentials: 'include'
        };
        try {
            let response = await fetch('https://freshglow.onrender.com/api/user/logout',options);
            console.log(response)

            const data = await response.json();
            console.log(data)

            if(response.status === 204) {
                console.log(data);
                 // If login or sign up is successful, redirect to home page
                localStorage.removeItem('username');
                window.location = '/'
            } else {
                console.error("Server Response ", response);
            }

        } catch (error) {
            console.error("Error ", error);
        }
    };
    // take to refactor in a section called api to make all api calls from
        //call to the products first
        let fetchProducts = async () => {
            const response = await fetch('https://freshglow.onrender.com/api/products');
            const data = response.json()
            return data
        }
        
        // then filter the produts and then set filted products to the filtered information 
        const filterProducts = (products) => {
            if(products && products.filter){
            const filtered = products.filter((product) =>
              product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
            
            }
          };

          // to allow the search to happen on the search button
    const search = async () => {
        const data = await fetchProducts();
        filterProducts(data);
        setShouldShowResults(true);
        setSearchQuery('');
        
    }


    useEffect(()=> {
    let username = localStorage.getItem("username")
    
    // call to get data then filter that data had to wrap to account for the async of the functions
    const fetchDataAndFilter = async () => {
        const data = await fetchProducts();
        filterProducts(data);
    };


    if(username != null || username != undefined) {
        setUserName(username)
        setLogout(true)
    } else {
        setUserName("Babe")
        setLogout(false)
    }
    fetchDataAndFilter();
    let stickyNavbar = () => {
        if (navEl.current) {
            if (window.scrollY > navEl.current.offsetTop) {
                setIsSticky(true); // Add class when it's sticky
            } else {
                setIsSticky(false); // Remove class when it's not sticky
            }
        }
    };

    window.addEventListener('scroll', stickyNavbar);

    // Cleanup
    return () => {
        window.removeEventListener('scroll', stickyNavbar);
    };
    }, [])


    let openSearch = () =>{
        setSearching(!isSearching);
    } 

    const hoverTitle = () => {
        // Update the title text on hover
        setTitleText('FRESH ME');
    };

    const resetTitle = () => {
        // Reset the title text on mouse leave
        setTitleText('FRESH GLOW');
    };
    

    return (
        <header id='navbar' ref={navEl} className={isSticky ? 'sticky' : ''}>
            <section className='bannerContainer'>
            <div className='banner'>
                <h6>NEW ITEMS COMMING SOON</h6>
                <h6>FRESH ME</h6>
                <h6>CHECK OUT OUR NEW UNER EYE MASK</h6>
                <h6>Hey Babe</h6>
            </div>
            </section>
            <nav>
                <div className='leftSide'>
                    <h1>Hey {user},</h1>
                    <Link to="/products">ALL</Link>
                    <Link to="/products/1">BODY</Link>
                    <Link to="/products/3">EYES</Link>
                    <Link to="/products/2">FACE</Link>
                    <Link to="/products/4">HAIR</Link>
                    <Link to="/products/5">LIPS</Link>
                </div>
                <Link to="/" id='titlePage' onMouseEnter={hoverTitle}
                    onMouseLeave={resetTitle}>{titleText}</Link>
                {/* the ability to hide and show search using useState T/F */}
                <div className='rightSide'>
                        <a onClick={openSearch}>SEARCH</a>
                    {/* {logout ? (
                        <a onClick={handleLogoutSubmit}>LOGOUT</a>
                        
                    ) : (
                        <Link to="/login">LOGIN</Link>
                    )
                    } */}
                    
                    <a onClick={showCart}>CART</a>
                </div>
            </nav>
            {isSearching && (
                <div className='searchContainer'>
                <a onClick={openSearch}>&times;</a>
                <input text="search" placeholder="search for items" value={searchQuery} onChange={handleSearchChange} className={isSticky ? 'textBarDark' : ''}></input>
                <a onClick={search}>
                    <FaArrowRightLong />
                </a>
            </div>
            )}
            {/* Display search results */}
            {isSearching && shouldShowResults && (
                <ul>
                  {filteredProducts.map(product => (
                    <li>
                        <Link to={{pathname:`/products/product/${product.id}`,
                   state: { product: product 
                }}} key={product.id} onClick={handleSearchResultClick}>{product.product_name}</Link>
                </li>
                  ))}
                </ul>
            )}
            
        </header>
    )
}