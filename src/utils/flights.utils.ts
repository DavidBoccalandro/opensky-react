import { Flights } from 'types/airport.types';

export const flatAirportNames = (flights: Flights[]): string[] => {
  const airportsSet = new Set();
  flights.forEach((flight: any) => {
    airportsSet.add(flight.estDepartureAirport);
    airportsSet.add(flight.estArrivalAirport);
    airportsSet.delete(null);
  });

  return Array.from(airportsSet) as string[];
};
