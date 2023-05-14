import React, { ChangeEvent, useEffect } from 'react'
import { FlightService } from 'services/flights.services';
import { apiSuccess } from 'utils/api.guards';
import { flatAirportNames } from 'utils/flights.utils';
import { useFlights } from 'hooks/useFlights';

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

  console.log('flights', flights.flights);
  console.log(activeAirport)

  return (
    <div>
      <select name="airport" id="airport" onChange={handleAirportChange}>
        {
          airports.map((airport) => <option value={airport} key={airport}>{airport.toUpperCase()}</option>)
        }
      </select>
    </div>
  )
}
