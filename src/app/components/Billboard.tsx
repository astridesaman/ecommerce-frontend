import { Billboard as BillboardType } from "../../../types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="relative w-full aspect-square md:aspect-[2.4/1] rounded-xl overflow-hidden group">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
          role="img"
          aria-label={data?.label || "Billboard image"}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl">
            {/* Label */}
            {data?.label && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl animate-fade-in">
                {data.label}
              </h1>
            )}
            

          </div>
        </div>
        
        {/* Loading State Shimmer */}
        {!data?.imageUrl && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse">
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-gray-400 text-lg font-medium">Chargement...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billboard;