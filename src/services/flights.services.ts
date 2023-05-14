import { Flights } from 'types/airport.types';
import { apiGet } from 'utils/network/fetch';

export class FlightService {
  private static beginTime: number = 1527832800;

  private static endTime: number = 1527834600;

  static getFlightsByTimeInterval() {
    return apiGet<Flights[]>(`https://opensky-network.org/api/flights/all?begin=${this.beginTime}&end=${this.endTime}`);
  }

  static getArrivalsByAirport(airport: string) {
    return apiGet(
      `https://opensky-network.org/api/flights/arrival?airport=${airport}&begin=${this.beginTime}&end=${this.endTime}`
    );
  }

  static getDeparturesByAirport(airport: string) {
    return apiGet(
      `https://opensky-network.org/api/flights/departure?airport=${airport}&begin=${this.beginTime}&end=${this.endTime}`
    );
  }
}
