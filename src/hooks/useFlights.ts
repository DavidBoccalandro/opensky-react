import { cloneDeep } from 'lodash';
import { useState, useCallback } from 'react';
import { FlightService } from 'services/flights.services';
import { apiSuccess } from 'utils/api.guards';

export const useFlights = () => {
  const [flights, setFlights] = useState<Map<string, unknown>>(new Map());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getFlightsByAirport = useCallback(
    (airport: string) => {
      flights.get(airport);
    },
    [flights]
  );

  const loadFlightsByAirport = useCallback(
    async (airport: string) => {
      if (flights.has(airport)) {
        return;
      }

      setLoading(true);
      const departures = await FlightService.getDeparturesByAirport(airport);
      const arrivals = await FlightService.getArrivalsByAirport(airport);
      setLoading(false);

      let errors = '';
      if (!apiSuccess(departures)) {
        errors += departures.error;
      }
      if (!apiSuccess(arrivals)) {
        errors += arrivals.error;
      }
      if (errors) {
        setError(errors);
      }

      if (apiSuccess(departures) && apiSuccess(arrivals)) {
        const arrivalsAndDepartures = { arrivals: arrivals.data, departures: departures.data };
        const clone = cloneDeep(flights);
        clone.set(airport, arrivalsAndDepartures);
        setFlights(clone);
      }
    },
    [flights]
  );
  return { flights, loading, error, loadFlightsByAirport, getFlightsByAirport };
};
