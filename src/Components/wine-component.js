import { wineFacts } from "../Data/wine-data";

const imagesArr = [];
for (let wine in wineFacts) {
  imagesArr.push(
    <img
      src={wineFacts[wine].image}
      alt={wine}
      role="button"
      className="wine"
      onClick={DisplayFact}
    />
  );
}

function DisplayFact(e) {
  const selectedImage = e.target.alt;
  const wineImageInfo = wineFacts[selectedImage];
  const optionIndex = Math.floor(Math.random() * wineImageInfo.facts.length);

  const wineFact = wineImageInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = wineFact;
}

export const WineFactsComponent = () => {
  return (
    <>
      <div className="wine-div">
        <p id="fact"></p>
        <div className="wine-images">{imagesArr}</div>
      </div>
      <p>Touch the cup to see a wine fact</p>
    </>
  );
};
