"use client"

import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import styles from './styles/Map.module.css';

const Map: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({
      lat: 38.433857385536584, lng: -122.7162342207697
    }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={styles.homeWrapper}
    >
      <div
        className={styles.sidebar}
      >
        <p>This is Sidebar...</p>
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
    </div>
  );
};

export default Map;