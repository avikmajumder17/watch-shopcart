import { Route, Routes } from "react-router-dom";
import { AboutUs, Blog, CheckOut, ContactUs, Home, Login, ProductDetail, Register, Shop } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="watches" element={ <Shop /> } />

        <Route path="watches/:id" element={ <ProductDetail /> } />

        <Route path="checkout" element={ <CheckOut /> } />

        <Route path="contact-us" element={ <ContactUs /> } />               

        <Route path="about-us" element={ <AboutUs /> } />

        <Route path="blog" element={ <Blog /> } />

        <Route path="register" element={ <Register /> } />

        <Route path="login" element={ <Login /> } />
      </Routes>
    </div>
  )
}