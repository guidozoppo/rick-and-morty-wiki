import { useEffect } from "react";
import { useState } from "react";
import InputGroup from "../../components/Filter/category/InputGroup";
import Encabezado from "../../components/Header/Header";
import Results from "../../components/Results/Results";
import Search from "../../components/Search/Search";
import { useFetchLocationQuery } from "../../redux/api/location";
import Error from "../responses/Error";
import Loading from "../responses/Loading";
import Footer from "../../components/Footer/Footer";

const Location = () => {
    
    const [id, setID] = useState(1);
    const [personajes, setPersonajes] = useState();
    const { data, isLoading, isSuccess, isFetching, isError, error} = useFetchLocationQuery({id});

    useEffect(() => {
        (async function () {
          if (data !== undefined) {
            let a = await Promise.all(
              data?.residents?.map((x) => {
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
            return <Loading message={"Loading..."}/>
          } else if (data?.residents.length === 0) {
            return <Error message="Without results. Try another location"/>
        } else if (isSuccess) {
            return <Results personajes={personajes} view="episode" />
        }
      }

    return (
        <div>
            <Encabezado/>
            <Search title={`Location: ${data?.name}`} subTitle={`Type: ${data?.type}`} searchCharacter={false}/>
            <div className="filter-results-div">
                <InputGroup name={"Location"} locationName={data?.name} changeID={setID} total={126} />
                <>
                    {renderContent()}
                </>
            </div>
            <Footer />
        </div>
    );
}

export default Location;