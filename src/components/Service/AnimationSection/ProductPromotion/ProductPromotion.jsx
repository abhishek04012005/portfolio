import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import ProductSVG from '../../../SVG/ProductSVG/ProductSVG'
import { productPromotion } from '../../CustomService/ServiceCard/ServiceConstant'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'

const ProductPromotion = () => {
  return (
    <>
      <Helmet>
        <title>Promote Your Product - Professional Video Promotion Service</title>
        <meta name="description" content="Promote your product effortlessly with our professional video promotion service. Ideal for marketing campaigns, social media, and more." />
        <meta name="keywords" content="video promotion, product video, marketing videos, professional video service, create promotional video" />
        <meta name="author" content="Your Video Promotion Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Promote Your Product - Professional Video Promotion Service" />
        <meta property="og:description" content="Promote your product effortlessly with our professional video promotion service. Ideal for marketing campaigns, social media, and more." />
        <meta property="og:image" content="https://abhishekchoudhary.co.in/static/media/productPromotion03.d7afc841a535dac76ebf.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/product-promotion" />
      </Helmet>

      <div className="product-promotion">
        <ServiceDetailBox
          heading='Product Promotion'
          serviceImg={<ProductSVG />}
          para1="In my role as a 3D animator, I excel in creating dynamic and captivating product promotion videos using Blender. My goal is to bring products to life through realistic and visually striking animations that showcase their features and benefits."
          para2="Leveraging advanced 3D modeling and animation capabilities of Blender, I develop immersive visual experiences that engage audiences and effectively communicate the product's value. Each project is meticulously planned and executed to ensure the animations are both visually impressive and aligned with marketing objectives."
          para3="By incorporating motion graphics, detailed textures, and lifelike movements, I produce promotional content that stands out in a competitive market. Keeping up-to-date with the latest trends and technologies in 3D animation allows me to deliver innovative and impactful solutions."
        />

     
      <ServiceCard serviceCardData={productPromotion} />
      </div>

    </>
  )
}

export default ProductPromotion