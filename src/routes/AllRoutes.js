import { Route, Routes } from "react-router-dom";
import { AboutUs, Blog, BlogDetails, Cart, Checkout, ContactUs, Home, Login, ProductDetail, Register, Shop, Wishlist } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="watches" element={ <Shop /> } />

        <Route path="watches/:id" element={ <ProductDetail /> } />

        <Route path="wishlist" element={ <Wishlist /> } />

        <Route path="cart" element={ <Cart /> } />

        <Route path="checkout" element={ <Checkout /> } />

        <Route path="contact-us" element={ <ContactUs /> } />               

        <Route path="about-us" element={ <AboutUs /> } />

        <Route path="blog" element={ <Blog /> } />

        <Route path="/blog/:blog_title" element={ <BlogDetails /> } />

        <Route path="register" element={ <Register /> } />

        <Route path="login" element={ <Login /> } />
      </Routes>
    </div>
  )
}