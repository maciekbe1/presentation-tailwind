export const FluidTypography: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-8 text-center text-7xl font-bold ">
        {/* 👈 arbitrary value syntax text-[10vw] text-[min(8vw,80px)] never gets bigget then 80px*/}
        Big Long Title Text Header
      </h1>
      <div className="mt-6 columns-2 space-y-4">
        <div className="">
          <p className="text-sm sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugit ipsa quis ullam
            architecto? Atque enim molestias labore repudiandae, dicta quo
            consequatur quaerat, eos soluta quasi pariatur saepe laborum
            voluptatem qui. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Harum ratione mollitia quas rerum, a alias doloribus molestias
            sit sunt dicta dolor corporis accusantium exercitationem sed qui.
            Explicabo illum in numquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum ratione mollitia quas rerum, a alias
            doloribus molestias sit sunt dicta dolor corporis accusantium
            exercitationem sed qui. Explicabo illum in numquam!
          </p>
        </div>
        <div className="">
          <p className="text-sm sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugit ipsa quis ullam
            architecto? Atque enim molestias labore repudiandae, dicta quo
            consequatur quaerat, eos soluta quasi pariatur saepe laborum
            voluptatem qui. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Harum ratione mollitia quas rerum, a alias doloribus molestias
            sit sunt dicta dolor corporis accusantium exercitationem sed qui.
            Explicabo illum in numquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum ratione mollitia quas rerum, a alias
            doloribus molestias sit sunt dicta dolor corporis accusantium
            exercitationem sed qui. Explicabo illum in numquam!
          </p>
        </div>
      </div>
    </div>
  );
};
