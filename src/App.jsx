import { useState } from "react";

function App() {
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/17900125/pexels-photo-17900125/free-photo-of-scenic-view-of-a-seacoast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  console.log(img);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundImage: `url("${img}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/18048295/pexels-photo-18048295/free-photo-of-facade-of-a-tall-block-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            
          >
            <img
              src="https://images.pexels.com/photos/18048295/pexels-photo-18048295/free-photo-of-facade-of-a-tall-block-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/18173610/pexels-photo-18173610/free-photo-of-woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/18075209/pexels-photo-18075209/free-photo-of-flower-tattoos-on-woman-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/18075209/pexels-photo-18075209/free-photo-of-flower-tattoos-on-woman-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/17066626/pexels-photo-17066626/free-photo-of-woman-braiding-her-daughters-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/17066626/pexels-photo-17066626/free-photo-of-woman-braiding-her-daughters-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/17917609/pexels-photo-17917609/free-photo-of-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/16042440/pexels-photo-16042440/free-photo-of-forest-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/16042440/pexels-photo-16042440/free-photo-of-forest-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/5189865/pexels-photo-5189865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/5189865/pexels-photo-5189865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/18270598/pexels-photo-18270598/free-photo-of-indian-traditional-bride-in-nauvari-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/18270598/pexels-photo-18270598/free-photo-of-indian-traditional-bride-in-nauvari-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/12015355/pexels-photo-12015355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/12015355/pexels-photo-12015355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
          <button
            onClick={() =>
              setImg(
                "https://images.pexels.com/photos/18246253/pexels-photo-18246253/free-photo-of-people-relaxation-girl-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/18246253/pexels-photo-18246253/free-photo-of-people-relaxation-girl-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
