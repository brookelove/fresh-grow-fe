import Images from '../Images';

// other code

useEffect(()=> {
    fetch(`http://localhost:3001/api/products/${id}`)
    .then((response)=>response.json())
    .then((data)=> {
        setProduct(data)
        setImageSrc(Images[data.image_url])  // This will set the correct image source based on the name
    })
}, [id]);