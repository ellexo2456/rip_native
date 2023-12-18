import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { api } from '../api/config';

interface User {
    id: number,
    Email: string,
}

interface Expedition {
    id: number,
    name: string,
    status: string,
    user: User,
    year: number,
}

export const MissionPage = () => {
    const [expeditions, setExpeditions] = useState<Expedition[] | undefined>(undefined);

    useEffect(() => {
        api.get(`/api/expedition/filter`)
            .then(response => {
                if (response.status === 200) {
                    const draftMission = response.data.expedition.filter((expedition: Expedition) => {
                        return expedition.status === 'черновик'
                    })
                    setExpeditions(draftMission);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    if (expeditions && expeditions.length === 0) {
        return (
            <Container>
                Миссии отсутствуют
            </Container>
        )
    }

    const handleSubmitMissions = () => {
        expeditions?.map(expedition => {
            api.put(`/api/expedition/status/form/${expedition.id}`, {
                status: 'сформировано'
            })
                .then(response => {
                    console.log(response);
                    setExpeditions([]);
                })
                .catch(error => {
                    console.error(error)
                })
        })
    }

    const handleDeleteMission = (id: number) => {
        api.delete(`/api/expedition/${id}`)
        .then(() => {
            const newExpeditions = expeditions?.filter(expedition => {
                expedition.id !== id;
            })
            setExpeditions(newExpeditions);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <Container>
            {expeditions !== undefined && expeditions.map(expedition => (
                <div key={expedition.id} style={{ display: "flex", flexDirection: "row", width: "100%", "justifyContent": "space-between", backgroundColor: "#D2DBDD", padding: "10px", borderRadius: "10px", marginTop: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                        <h3>Название: {expedition.name}</h3>
                        <p>Год: {expedition.year}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                        <p>Почта: {expedition.user.Email}</p>
                        <Button
                            variant='danger'
                            onClick={() => {handleDeleteMission(expedition.id)}}
                        >
                            Удалить
                        </Button>
                    </div>
                </div>
            ))}
            <Button style={{ marginTop: "10px" }} onClick={handleSubmitMissions}>Оформить миссии</Button>
        </Container>
    );

}
