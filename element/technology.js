import TechnologySlider from "../component/technologySlider";

function Technology() {
  return (
    <>
      <div className="content-inner-2">
        <div className="container">
          <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
            <TechnologySlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
