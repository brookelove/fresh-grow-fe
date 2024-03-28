import Images from '../Images';

// other code

useEffect(()=> {
       // if need to correct backend change to https://localhost
    fetch(`https://freshglow.onrender.com/api/products/${id}`)
    .then((response)=>response.json())
    .then((data)=> {
        setProduct(data)
        setImageSrc(Images[data.image_url])  // This will set the correct image source based on the name
    })
}, [id]);