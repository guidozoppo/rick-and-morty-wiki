import { useEffect, useState } from "react";
import InputGroup from "../../components/Filter/category/InputGroup";
import Encabezado from "../../components/Header/Header";
import Results from "../../components/Results/Results";
import Search from "../../components/Search/Search";
import { useFetchEpisodesQuery } from "../../redux/api/episodes";
import Error from "../responses/Error";
import Loading from "../responses/Loading";
import Footer from "../../components/Footer/Footer";

const Episode = () => {
  const [id, setID] = useState(1);
  const [personajes, setPersonajes] = useState();
  const { data, isLoading, isSuccess, isFetching, isError, error } = useFetchEpisodesQuery({ id });
  console.log(data)
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
  
  const renderContent = () => {
    if(isError) {
        return <Error message={error?.data?.error}/>
    } else if(isLoading || isFetching) {
        return <Loading message={"Cargando..."}/>
    } else if (isSuccess) {
        return <Results personajes={personajes} view="episode" />
    }
  }

  return (
    <div>
      <Encabezado />
      <Search title={`Episode ${data?.id}: ${data?.name}`} subTitle={data?.air_date} searchCharacter={false}/>
      <div className="filter-results-div">
        <InputGroup name={"Episode"} changeID={setID} total={51} />
        <>
          {renderContent()}
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Episode;
