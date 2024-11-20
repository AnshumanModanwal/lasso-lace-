import React from 'react'
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, GitHub, Globe } from "react-feather"
import brand from "../assets/Brand.png"
export default function Footer() {
	return (
		<footer className="grid grid-cols-1 md:(grid-cols-3) border-t border-gray-300 bg-gray-200 px-4">
			<div className="m-4 sm:m-6 flex-1">
				<img src={brand} width="100px"/>
				<p className="text-justify text-gray-700">About Us – Lasso & Lace

At Lasso & Lace, we believe that comfort and style should go hand in hand. Our brand is dedicated to creating casual wear that makes you feel at ease while looking effortlessly chic. Whether you're stepping out for a casual day with friends or unwinding at home, our collection ensures you never have to compromise on comfort or elegance.  

Our name, Lasso & Lace, reflects our philosophy. A LASSO symbolizes versatility, capturing the essence of adventure and the ability to adapt to any situation. Meanwhile, LACE represents timeless beauty and delicate craftsmanship. Together, they embody the balance of boldness and grace that defines our brand.  

From soft, breathable fabrics to versatile designs, every piece we craft is made to fit seamlessly into your lifestyle. At Lasso & Lace, we’re not just a clothing brand—we’re a celebration of modern casual wear that empowers you to express yourself, effortlessly.  

Discover comfort. Embrace style. Welcome to Lasso & Lace.</p>
				<ul className="flex mt-6 justify-center md:justify-start space-x-4">
					<li>
						<Link to="#"><Facebook /></Link>
					</li>				
					<li>
						<Link to="#"><Instagram /></Link>
					</li>				
					<li>
						<Link to="#"><Twitter /></Link>
					</li>
					<li>
						<a href="https://github.com/nimone/Fashion-Store"><GitHub /></a>
					</li>
					<li>
						<a href="https://nimo.pages.dev"><Globe /></a>
					</li>
				</ul>
			</div>			
			<div className="m-4 sm:m-6">
				<h2 className="text-xl text-center md:text-left font-medium mb-4">Useful Links</h2>
				<ul className="flex flex-col flex-wrap h-36 space-y-1 text-gray-600">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/products?category=men">Men Fashion</Link>
					</li>
					<li>
						<Link to="/products?category=women">Women Fashion</Link>
					</li>
					<li>
						<Link to="/orders">Track Order</Link>
					</li>
					<li>
						<Link to="/account">My Account</Link>
					</li>							
					<li>
						<Link to="/wishlist">Wishlist</Link>
					</li>					
					<li>
						<Link to="/terms">Terms</Link>
					</li>
				</ul>
			</div>			
			<div className="m-4 sm:m-6">
				<h2 className="text-xl text-center md:text-left font-medium mb-4">Contact</h2>
				<ul className="space-y-3 text-gray-700">
					<li className="flex items-center">
						<MapPin className="w-5 h-5 mr-2" />
						<span>123, Lawrence Road, NSP
</span>
					</li>					
					<li className="flex items-center">
						<Phone className="w-5 h-5 mr-2" />
						<span>+91 9325689007
</span>
					</li>					
					<li className="flex items-center">
						<Mail className="w-5 h-5 mr-2" />
						<a href="mailto:nimogha@gmail.com" target="_blank">
						Lassoandlacesupport@gmail.com

						</a>
					</li>
					<li className="flex items-center">
						<GitHub className="w-5 h-5 mr-2" />
						<a href="https://github.com/nimone/Fashion-Store" target="_blank">
						Your everyday online fashion store
						</a>
						<span className='mx-1'>built with ❤️ by</span>
						<a href="#" target="_blank" className='border-b-2 border-green-500'>
							Lasso & Lace
						</a>
					</li>
				</ul>
				<div className="mt-6">
					<img className="mx-auto md:mx-0" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment providers" />
				</div>
			</div>
		</footer>
	)
}