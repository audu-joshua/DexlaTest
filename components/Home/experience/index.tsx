import { FaShoppingCart, FaTags, FaHeadset } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section className="py-8 px-3 md:px-6 lg:px-12">
      <h2 className="text-3xl md:text-3xl text-[#151515] font-bold text-start mb-6">
        We provide the best experiences for our customers
      </h2>

      <div className="grid gap-4 md:flex md:gap-8">
        {/* First Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <div className="bg-[#EBEBEB] p-4 w-fit rounded-full mb-4 flex items-center justify-center">
            <FaShoppingCart className="text-black text-3xl" />
          </div>
          <h3 className="text-xl text-[#151515] font-bold mb-2">Extensive Product Selection</h3>
          <p className=' text-[#151515] font-normal'>
            We curate a wide range of top-notch gadgets and home appliances. Whether you're looking for the latest smartphones, cutting-edge electronics, or efficient home appliances, we have it all. Our collection is carefully chosen to cater to your diverse needs and preferences.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <div className="bg-[#EBEBEB] p-4 w-fit rounded-full mb-4 flex items-center justify-center">
            <FaTags className="text-black text-3xl" />
          </div>
          <h3 className="text-xl text-[#151515] font-bold mb-2">Unbeatable Prices and Deals</h3>
          <p className=' text-[#151515]'>
            We believe in providing value for your money. You'll find competitive prices and exclusive deals on our platform, allowing you to shop smartly and save more. Our aim is to offer you the best products at the most affordable prices, making your shopping experience truly divine.
          </p>
        </div>

        {/* Third Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <div className="bg-[#EBEBEB] p-4 w-fit rounded-full mb-4 flex items-center justify-center">
            <FaHeadset className="text-black text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-[#151515] mb-2">Outstanding Customer Service</h3>
          <p className=' text-[#151515]'>
            Your satisfaction is our priority. Our dedicated customer support team is here to assist you at every step of your shopping journey. From product inquiries to after-sales support, we ensure you have a smooth and delightful experience with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
