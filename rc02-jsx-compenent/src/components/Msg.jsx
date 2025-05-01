//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import React from "react"




// external css 
import "./msg.css"

const msg = () => {

    // Js alani 
   //! internal css
   const stil = {color:"green",
    border:"4px solid red",
    fontFamily:"Tahoma"
   }
  return (

    // jsx alani 
    <div>
     {/* inline css  */}
    <h2 style={{color:"red", fontSize:"50px"}} >burasi msg alani</h2>

    <p style={stil}>
        hosgeldin react
    </p>
 

    <img className="image" src="https://cdn.pixabay.com/photo/2025/04/22/15/39/coffee-machine-9550534_1280.jpg" alt="" />

   

    </div>
  )
}

export default msg