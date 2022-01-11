import React  from 'react';

function NotFound(props)
{
   const style = {color:'red'};
   const imgUrl="https://media3.giphy.com/media/WoWm8YzFQJg5i/giphy.gif?cid=ecf05e47xo6kdmyiwa0syfalw6qivezsjd3kqjzxatzaq8g0&rid=giphy.gif&ct=g"
       return (
           <>
           <h4 style={style}>Not Found</h4>
           <h4>In the mean time read a book <span>404 </span>pages long</h4>
           <img src={imgUrl}/>
           
           </>
       
        );}
export default NotFound;