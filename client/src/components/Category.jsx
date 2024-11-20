import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart, Search } from "react-feather"
import clsx from "clsx"

import Card from "./Card"

export default function Category({ title, imgSrc, link }) {

	const data = [
		{
			id: 1,
			title: "SHIRT STYLE!",
			images: [
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082966/Shirt%20Style/pexels-korede-adenola-2888552-17661980_ydw4fz.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082953/Shirt%20Style/pexels-shalenderkumar-5222708_wj0ni3.jpg",

				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082950/Shirt%20Style/pexels-mihmanduganli-27893233_hllq9t.jpg",

				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082949/Shirt%20Style/pexels-philboakye-2519104_xztx52.jpg",

				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082943/Shirt%20Style/pexels-vikkirillova-14979219_xlwmjk.jpg",

				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082939/Shirt%20Style/pexels-sumant-arora-253754770-13162608_quetnp.jpg",

"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082911/Shirt%20Style/pexels-hugo-martinez-3935355-27310016_a2bija.jpg",

"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082910/Shirt%20Style/pexels-ali-drabo-10956272-20715516_wcomev.jpg",

"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082904/Shirt%20Style/pexels-smgrafias-2076754_l6iigx.jpg",

"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082898/Shirt%20Style/pexels-chloekalaartist-1043474_kwhlzg.jpg",

		"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082891/Shirt%20Style/pexels-brunocortes1969-29443503_iukhfx.jpg",
		
		"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082898/Shirt%20Style/pexels-tarikulraana-9961661_uokkm8.jpg",

		"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082890/Shirt%20Style/pexels-enesaakdogann-21207686_kpepob.jpg",

		"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732082886/Shirt%20Style/pexels-teguhsugi-6062235_ktdqkl.jpg",


			],
		},
		{
			id: 2,
			title: "DENIMS",
			images: [
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732084031/denims/pexels-mert-coskun-386432351-29464016_jpsbwb.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732084020/denims/pexels-ahcapture-29477180_t0wd2i.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732084017/denims/pexels-anh-nguyen-517648218-27385951_ufhf2l.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732084006/denims/pexels-caio-mantovani-97605853-29466467_u51kax.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083998/denims/pexels-mahdibafande-9637439_zjr9ev.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083995/denims/pexels-ahcapture-29477187_eshte2.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083982/denims/pexels-pjreedy-5737021_izehzy.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083981/denims/pexels-ramazannatass-19367152_yygtzu.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083978/denims/pexels-aggelos-ivros-441805283-20877883_mgerf8.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083975/denims/pexels-eduardo199o9-178988127-11587680_nl0cjd.jpg",

			],
		},
		{
			id: 3,
			title: "LEATHER JACKETS",
			images: [
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083549/Leather%20Jackets/pexels-kelvin-diri-326816017-20276501_jtdyvq.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083543/Leather%20Jackets/pexels-lokmansevim-14456891_y4tasw.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083517/Leather%20Jackets/pexels-ayoub-moukhliss-1262835-26731365_hvsvky.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083512/Leather%20Jackets/pexels-james-superschoolnews-349383308-29422462_f5j6ew.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083511/Leather%20Jackets/pexels-kubrakuzu-21908425_i4zgrf.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083503/Leather%20Jackets/pexels-jennyg1rl-12089758_nzmlbn.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083500/Leather%20Jackets/pexels-cottonbro-9821752_p7qrpm.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083496/Leather%20Jackets/pexels-frendsmans-19272175_pxe9ms.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083495/Leather%20Jackets/pexels-helin-gezer-903013644-19985221_wsykvi.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083491/Leather%20Jackets/pexels-yi-ren-57040649-29407236_jroe58.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083488/Leather%20Jackets/pexels-noemiji-21297736_q1enb8.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083485/Leather%20Jackets/pexels-vikas-raghav-162801-9439089_kujr0i.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083481/Leather%20Jackets/pexels-maide-arslan-128712163-20636655_w3vh06.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083478/Leather%20Jackets/pexels-olga-volkovitskaia-131638009-10805456_iuigfl.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083253/Leather%20Jackets/pexels-manuel-kapunkt-801512269-20606053_trmtxq.jpg",
			],
		},
		{
			id: 4,
			title: "HOODIES",
			images: [
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083709/hoodies/pexels-rdne-7915402_wn4t1u.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083676/hoodies/pexels-shvets-production-9775877_sya3ay.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083675/hoodies/pexels-shvetsa-5257640_ojsc9p.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083673/hoodies/pexels-mary-taylor-5896463_wguenc.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083663/hoodies/pexels-cottonbro-5236998_jc2gf8.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083656/hoodies/pexels-cottonbro-10117932_fspf6z.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083654/hoodies/pexels-angela-roma-7479840_z2wutr.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083650/hoodies/pexels-klaus-nielsen-6303763_kah3w8.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083650/hoodies/pexels-barbara-olsen-7880675_aa6jl3.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083638/hoodies/pexels-marleneleppanen-1183266_kzhraf.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083635/hoodies/pexels-tome-louro-273270-1666779_f9xxwx.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083631/hoodies/pexels-otutotu-2046790_eeobrt.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083627/hoodies/pexels-garrettmorrow-702350_ygbtse.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083627/hoodies/pexels-lucas-toyes-706110023-18131871_p83jgs.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083623/hoodies/pexels-waseem-kahlool-96870-655806_cowpho.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083621/hoodies/pexels-cottonbro-5840469_uuigft.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083619/hoodies/pexels-angela-roma-7479825_z6thrw.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083612/hoodies/pexels-tima-miroshnichenko-5560323_suwkgl.jpg",
				"https://res.cloudinary.com/dwjzihwuq/image/upload/v1732083610/hoodies/pexels-maksgelatin-5971182_d5xxdr.jpg",
			],
		},
	];
	const [selectedImages, setSelectedImages] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fullImage, setFullImage] = useState(null); // Track full view image

  // Handle click on category
  const handleCategoryClick = (title) => {
    const matchedCategory = data.find((item) => item.title === title);
    if (matchedCategory) {
      setSelectedImages(matchedCategory.images);
      setIsPopupOpen(true);
    }
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImages([]);
  };

  // Handle full image view
  const handleImageClick = (image) => {
    setFullImage(image);
  };

  // Close full image view
  const closeFullImage = () => {
    setFullImage(null);
  };

  return (
    <Link to={link}>
      <Card
        imgSrc={imgSrc}
        className={clsx('!max-w-48 !max-h-sm sm:(!max-w-64)')}
      >
        <div
          onClick={() => handleCategoryClick(title)}
          className={clsx(
            'absolute inset-0 text-white text-center',
            'flex justify-center items-center',
            'transition duration-500 ease-out',
            'group-hover:(bg-black/40)'
          )}
        >
          <h3 className="text-2xl font-bold tracking-widest uppercase p-4 bg-black/30">
            {title}
          </h3>
        </div>
      </Card>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Image Gallery</h2>
              <button
                onClick={closePopup}
                className="text-red-500 font-bold text-lg"
              >
                X
              </button>
            </div>
            <div className="overflow-x-auto flex space-x-4">
              {selectedImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-40 h-40 object-cover rounded shadow-md cursor-pointer"
                  onClick={() => handleImageClick(image)} // Open full view on click
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {fullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeFullImage} // Close on background click
        >
          <img
            src={fullImage}
            alt="Full View"
            className="max-w-full max-h-full rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          />
          <button
            onClick={closeFullImage}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            X
          </button>
        </div>
      )}
    </Link>
  );
}