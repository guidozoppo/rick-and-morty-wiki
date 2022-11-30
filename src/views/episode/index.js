import { useEffect, useState } from "react";
import InputGroup from "../../components/Filter/category/InputGroup";
import Encabezado from "../../components/Header/Header";
import Results from "../../components/Results/Results";
import { useFetchEpisodesQuery } from "../../redux/api/episodes";
import './episode.css';

const Episode = () => {
  const [id, setID] = useState(1);
  const [personajes, setPersonajes] = useState();
  const { data, isLoading, isSuccess, isFetching, isError } =
    useFetchEpisodesQuery({ id });

  useEffect(() => {
    (async function () {
      if (data !== undefined) {
        let a = await Promise.all(
          data?.characters?.map((x) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setPersonajes(a);
      }
    })();
  }, [id, data]);

  return (
    <div>
      <Encabezado />
      <div>
        <h1>titulo</h1>
      </div>
      <div className="container-gral">
        <InputGroup name={"Episode"} changeID={setID} total={51} />
        <div className="results-div">
          <Results personajes={personajes} view="episode" />
        </div>
      </div>
    </div>
  );
};

export default Episode;
