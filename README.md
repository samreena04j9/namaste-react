#Namaste React 

#parcel
-Its hepls with Dev Build
-It Host our App to the Local Server
-It automatically refreshes the page also which means HMR= Hot Module Replacement
-It Uses File Watching Algorithm which is written in C++
-Caching--Faster Builds
-Parcel also do the Image Optimization
-Minification
-Bundling
-Compress
-Consistant Hashing
-Code Splitting
-Differential Bundling - supports odler browsers
-Diagnostic
-Error Handaling
-HTTPs
-Tree Shaking - remove unused code
-Different dev and prod bundles

#For the Food App the structure
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -ResturantContainer
 *   -ResturantCard
 *    -Img
 *    -Name of Res,star rating,cuisine,delivery time
 * Footer
 *  -Copyrights
 *  -Links
 *  -Address
 *  -Contact
 */
 
 ##Two types of Export/Import

 1.Default Export/Import
  export default Component; import Component from "path";

 2.Named Export/Import
  export const Component; import {Component} from "path";


#useState
  const[current value,updated value]=useState("initialValue");
   this hook takes intial value as argument
   i.e const[value,setValue]=useState();

-->Whenever the state variable updates react triggers the reconciliation cycle.(re-renders the component)


 #useEffect
  useEffect(()=>{},[])
  -useEffect takes two arguments 1 is the callback function and the 2 is depedency.
  useEffect is called when the render of the  componenet is done.

  ---Dependency arry changes the behaviour of the component
    1.If there is no dependency array then it is called on every component render
    
    2.useEffect(()=>{},[])
       If the dependency array is empty[] then useEffect is called on Only initial render and (just once).

    3.useEffect(()=>{},[dependency])
      If the dependency array is not empty [dependency] then useEffect is called everytime the dependency is updated

#Routing
 -createRoterBrowser
 -RouterProvider
 -outlet 
 all these are imported from react-router-dom

 -we have the hook useRouteError given by react-router-dom to showcase the errors 

 useParams()-->
    The useParams() hook is a react router hook that allows us to access the parameters of the current URL.
  
 