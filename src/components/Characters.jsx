import { useState, useEffect } from "react";

// Nav Buttons
export function Prev(props) {
  return (
    <button
      className="text-gray-50 bg-green-500 hover:bg-purple-800 w-24 text-center h-8 rounded-md ml-8"
      onClick={() =>
        props.page > 1
          ? props.setPage(props.page - 1)
          : console.log("Estas en la primera pagina")
      }
    >
      Prev
    </button>
  );
}

export function Next(props) {
  return (
    <button
      className="text-gray-50 bg-green-500 hover:bg-purple-800 w-24 text-center h-8 rounded-md mr-8"
      onClick={() => props.setPage(props.page + 1)}
    >
      Next
    </button>
  );
}

// Characters

function Characters() {
  const [character, setCharacter] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function solicitar() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacter(data.results);
    }

    solicitar();
  }, [page]);

  return (
    <div>
      {<div className="flex min-w-auto items-center justify-between my-6 text-gray-50 font-bold">
        <Prev page={page} setPage={setPage} />
        <span>Page: {page}</span>
        <Next page={page} setPage={setPage} />
      </div>}
      <div className="flex flex-wrap justify-center text-gray-50 text-center">
        {character.map((character) => {
          return (
            <div
              key={character.id}
              className="cards flex flex-wrap flex-col m-4 bg-slate-900 rounded-lg justify-center break-all items-center shadow-sm shadow-black h-auto"
            >
              <h2 className="mt-3 text-2xl font-bold">{character.name}</h2>
              <img
                className="imagee bg-cover bg-center rounded-full m-6 w-72 h-72"
                src={character.image}
                alt={character.name}
              />
              <div className="text p-2 text-lg">
                <p>Last Known location: {character.location.name}</p>
                <div className="flex justify-center items-center">
                  <span
                    className={
                      character.status == "Alive"
                        ? "alive"
                        : character.status == "Dead"
                        ? "dead"
                        : "unknown"
                    }
                  ></span>
                  <p className="ml-1">
                    {character.status} - {character.species}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex min-w-auto items-center justify-between my-16 text-gray-50 font-bold">
          <Prev page={page} setPage={setPage} />
          <span>Page: {page}</span>
          <Next page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export { Characters }
