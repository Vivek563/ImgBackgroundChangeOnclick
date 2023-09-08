import { useState } from "react";

function App() {
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/18048295/pexels-photo-18048295/free-photo-of-facade-of-a-tall-block-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  console.log(img);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/18048295/pexels-photo-18048295/free-photo-of-facade-of-a-tall-block-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            button 1
          </button>
          <button
            onClick={() =>  setImg(
              "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            )}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            button 2
          </button>
          <button
            onClick={() =>  setImg(
              "https://images.pexels.com/photos/18075209/pexels-photo-18075209/free-photo-of-flower-tattoos-on-woman-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            )}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            button 3
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
