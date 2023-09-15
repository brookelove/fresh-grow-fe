import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import "../assets/CSS/components/Header.css"
import { hover } from '@testing-library/user-event/dist/hover';


export default function Header({showCart}){
    const navEl = useRef(null);
    const [titleText, setTitleText] = useState("FRESH GLOW");
    const [isSearching, setSearching] = useState(false);
    const [user, setUserName] = useState(null);
    const [logout, setLogout] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [shouldShowResults, setShouldShowResults] = useState(false);


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

    let handleLogoutSubmit = async (event) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };
    
        try {
            let response = await fetch('http://localhost:3001/api/user/logout',options);
            console.log(response)

            const data = await response.json();

            if(response.status === 200) {
                console.log(data);
                 // If login or sign up is successful, redirect to home page
                localStorage.setItem('username', data.username);
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
            const response = await fetch('http://localhost:3001/api/products');
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
        setUserName("Beauty")
        setLogout(false)
    }
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
    fetchDataAndFilter();
    return ()=> {
        window.removeEventListener('scroll', stickyNavbar)
    }
    }, [])


    let openSearch = () =>{
        setSearching(!isSearching);
    } 

    const hoverTitle = () => {
        // Update the title text on hover
        setTitleText('GLOW BRIGHT');
    };

    const resetTitle = () => {
        // Reset the title text on mouse leave
        console.log("over");
        setTitleText('FRESH GLOW');
    };
    

    return (
        <header id='navbar' ref={navEl} >
            <div className='banner'><h6>NEW ITEMS COMMING SOON</h6></div>
            <nav>
                <div className='leftSide'>
            <h1>Hey {user},</h1>
                    
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
                    {logout ? (
                        <a onClick={handleLogoutSubmit}>LOGOUT</a>
                        
                    ) : (
                        <Link to="/login">LOGIN</Link>
                    )

                    }
                    
                    <a onClick={showCart}>CART</a>
                </div>
            </nav>
             {/* change from hide to show in the code */}
            {isSearching && (
                <div className='searchContainer'>
                <input text="search" placeholder="search for items" value={searchQuery} onChange={handleSearchChange}></input>
                <a onClick={search}>SEARCH</a>
            </div>
            )}
            {/* Display search results */}
            {isSearching && shouldShowResults && (
                <div>
                  {filteredProducts.map(product => (
                    <li key={product.id}>{product.product_name}</li>
                  ))}
                </div>
            )}
            
        </header>
    )
}