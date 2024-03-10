## Cloth ECommerce Store Frontend

E-Commerce React frontend project. Products are listed from the "https://mockapi.io/". A user can add a product to the cart or liked products. A user can login and logout.(There is no real login operations, it is simulated by using localStorage API)

- Vite: npm create vite@latest, React-Javascript

## Packeges Used:

- @tanstack/react-query: Used for data fetching, caching, synchronization and updates.
- react-router-dom: Used for routing operations (displaying different components based on the route).
- styled-components: Used for styling.

## Learned & Worked On:

- dont use images with quotations `<img src="path">` import the images into the file and use it `<img src={img1}>`
- note the react router pattern
- note that the amazon website uses black-white carousel image change buttons. If the backgorund is black the white parts becomes visible.
- Get browser parameter by using useParams hook:
  ```
  import { useParams } from "react-router-dom";
  const { id } = useParams();
  ```
- localStorage can not keeps an object type we must convert to json type to store objects.

  ```
    localStorage.setItem("likedproducts", JSON.stringify([]));
  ```

- when using context don't foregt to export the created context then import that in the necessary components.

  ```
  //Layout.jsx
  import React, { createContext} from "react";
  export const AuthContext = createContext();

  //Navigation.jsx
    import { AuthContext } from "../Layout";
    export default function Navigation() {
        const { user, setUser } = useContext(AuthContext);
        ...
    }
  ```

- When I redirect to another page it was always preserving the scroll position hence there was a problem because on the new page i want use to be on the top. So in the App.jsx file I added a ScrollToTop component. For every path change it scrolls to top!

  ```
  function ScrollToTop() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
  }

  return (
  <>
    {" "}
      <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Layout />}>
          ...
          </Routes>
      </QueryClientProvider>
  </>
  )
  ```

- When I was trying to use "reduce()" to calculate overall Sum, there was an error occures since i got my data from the local storage the data was string. It was needed to convert them to Number to use it as a number:
  ```
    const datas = JSON.parse(localStorage.getItem("cartproducts"));
  const [overallSum, setOverallSum] = useState();
  useEffect(() => {
  const sum = datas.reduce((acc, curr) => Number(curr.price) + acc, 0);
  setOverallSum(sum);
  }, [datas]);
  ```
- styled-components doesn't have direct access to the JavaScript variables in its scope we need to pass it as a prop to the styled component.

  ```
  import searchImg from "../../assets/searchengine.svg";

  const SearchBar = styled.input`
  ...
    background-image: url(${props => props.searchImg});
  ...
  `

  <SearchBar searchImg={searchImg} />
  ```

## ToDo

- Filter by Search
- Filter by Selection
- Pagination simulation
