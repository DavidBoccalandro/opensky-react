import React, { ChangeEvent, useEffect } from 'react'
import { FlightService } from 'services/flights.services';
import { apiSuccess } from 'utils/api.guards';
import { flatAirportNames } from 'utils/flights.utils';
import { useFlights } from 'hooks/useFlights';
import { Spin } from 'antd';

export const Dashboard = () => {
  const [airports, setAirports] = React.useState<string[]>([]);
  const [activeAirport, setActiveAirport] = React.useState<string>('');
  const flights = useFlights();
  useEffect(
    () => {
      FlightService.getFlightsByTimeInterval().then((response) => {
        if (apiSuccess(response)) {
          setAirports(flatAirportNames(response.data))
          return;
        };
        console.log(response.error);
      })
    }, [])

  const handleAirportChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const airport = event.target.value;
    setActiveAirport(airport);
    flights.loadFlightsByAirport(airport);
  }

  const data = flights.getFlightsByAirport(activeAirport);

  return (
    <Spin spinning={flights.loading}>
      <select name="airport" id="airport" onChange={handleAirportChange}>
        {
          airports.map((airport) => <option value={airport} key={airport}>{airport.toUpperCase()}</option>)
        }
      </select>
      <li key={data?.arrivals}>{data?.arrivals?.length}</li>
      <li key={data?.arrivals}>{data?.arrivals?.length}</li>
    </Spin>
  )
}
