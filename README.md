#Namaste React 

#PARCEL
/**
 1.Its hepls with Dev Build
 2.It Host our App to the Local Server
 3.It automatically refreshes the page also which means HMR= Hot Module Replacement
 4.It Uses File Watching Algorithm which is written in C++
 5.Caching--Faster Builds
 6.Parcel also do the Image Optimization
 7.Minification
 8.Bundling
 9.Compress
 10.Consistant Hashing
 11.Code Splitting
 12.Differential Bundling - supports odler browsers
 13.Diagnostic
 14.Error Handaling
 15.HTTPs
 16.Tree Shaking - remove unused code
 17.Different dev and prod bundles
*/

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
 
 ##TWO TYPES OF EXPORT/IMPORT

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

    4.How to unmount the component?
        we can use the hook useEffect in this we have a cleanup cycle .Because there are no dependencies in this effect, the cleanupCallback will only be executed when the component will be unmounted and not on every render.

        component will Unmount means...when we move to the next page it clears the data from the component.

        eg:-
        useEffect(()=>{
          const timer = setInterval(()=>{
            console.log("Namaste React")
          },1000);

          return () =>{
            clearInterval(timer);
            console.log("useEffect Return")
          };
        },[])

#Routing
 -createRoterBrowser
 -RouterProvider
 -outlet 
 all these are imported from react-router-dom

 -we have the hook useRouteError given by react-router-dom to showcase the errors 

 useParams()-->
    The useParams() hook is a react router hook that allows us to access the parameters of the current URL.
  
 #Lazy Loading
   which also means 
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix import

When we use Lazy Loading?
Suppose there are larger projects and the page needed to be loaded only on demand that time we use the lazy loading.
Instead of loading everything at once which is known as "eagar loading" the browser does not request certain resources until the user interacts in such a way that the resources are needed is known as lazy loading.
It forms a seperate js folder..
lazy loading is also refered with different names like chunking ,code splitting,dynamic bundaling,on demand loading,dynamic import
syntax:-
const grocery = lazy (() => import("./components/Grocery"))
  as a callback function it takes the path of the component that needs to be loded.
And it is used with Suspense the componenet should be wrapped with the Suspense
eg: <Suspense fallback={Loading...}><Grocery></Suspense>