import properties from "../properties.json";
import PropCard from "./PropCard";

const ListedProp = () => {
  return (
    <section className="py-20 p-0 md:px-10">
      <div className="flex justify-between items-start text-left md:items-end flex-col md:flex-row gap-5 md:gap-20">
        <div className="md:w-8/12 w-full">
          <h1 className="font-bold text-2xl">Listed Properties</h1>
          <p className="text-[14px] text-gray-500 mt-2 md:w-full">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &ldquo;View Details&ldquo; for more
            information.
          </p>
        </div>

        <button className=" inline-flex border-2 border-blue-500 text-blue-500 rounded-lg px-5 py-1 hover:text-blue-300 hover:border-blue-300 transition">
          View All Property
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
        {properties.map(prop => <PropCard key={prop.id} prop={prop}/>)}
      </div>
    </section>
  );
};

export default ListedProp;
