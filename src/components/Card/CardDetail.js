import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPersonajesQuery } from '../../redux/api/personajes';
import Error from '../../views/responses/Error';
import Loading from '../../views/responses/Loading';
import './cardDetail.css';

const CardDetail = ( ) => {
    const [personaje, setPersonaje] = useState();
    const [id, setId] = useState();
    const params = useParams();
    
    const { data, isLoading, isSuccess, isFetching, isError, error } = useFetchPersonajesQuery( { id } );
    
    useEffect(()=>{
        setId(params?.id)
    }, [params])
    
    useEffect(()=>{
        setPersonaje(data)
    }, [data])
    
    const renderContent = () => {
        if(isError) {
            console.log(isError);
            console.log(data);
            return <Error message={error?.data?.error}/>
        } else if(isLoading || isFetching) {
            return <Loading message={"Cargando..."} />
        } else if (isSuccess || data) {
            return (
                <div>
                    <div>
                        <h1>{personaje?.name}</h1>
                        <img src={personaje?.image} alt={personaje?.name}/>
                    </div>
                    <div className="content">
                        <div className="">
                            <span className="fw-bold">Gender : </span>
                            {personaje?.gender}
                        </div>
                        <div className="">
                            <span className="fw-bold">Location: </span>
                        {personaje?.location?.name}
                        </div>
                        <div className="">
                            <span className="fw-bold">Origin: </span>
                            {personaje?.origin?.name}
                        </div>
                        <div className="">
                            <span className="fw-bold">Species: </span>
                            {personaje?.species}
                        </div>
                </div>
                </div>
        )
        }
    } 

    return (
        renderContent()
    )
};

export default CardDetail;