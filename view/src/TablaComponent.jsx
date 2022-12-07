import React from 'react'
import {useState,useEffect} from 'react';

export const TablaComponent = () => {
    //get all data

    const [data, setData] = useState([]);
    const urlAllData = 'http://localhost:8080/api/users';
    useEffect(() => {
        fetch(urlAllData)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


    return (
        <>
            <table className="table  ">
                <thead>
                    <tr>
                        <th scope="col">Notas</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(data =>
                        <>
                            <tr>
                                <td>{data.tarea}</td>

                            </tr>
                        </>
                    )}

                </tbody>
            </table>

        </>
    )
}
