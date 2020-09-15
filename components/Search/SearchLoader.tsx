import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export function Loader() {
  return (
    <div style={{ maxWidth: '1300px', display: 'flex', margin: '20px' }}>
      <Skeleton variant="rect" width={180} height={130} />
      <div style={{ marginLeft: '10px' }}>
        <Skeleton
          variant="text"
          width={180}
          height={40}
          style={{ marginTop: '-8px' }}
        />
        <Skeleton variant="text" width={180} height={20} />
        <Skeleton variant="text" width={180} height={20} />
        <Skeleton
          style={{ marginTop: '40px' }}
          variant="text"
          width={200}
          height={20}
        />
      </div>
    </div>
  );
}

export function PaginationLoader() {
  return (
    <div style={{ margin: '20px' }}>
      <Skeleton variant="text" width={200} height={60} />
    </div>
  );
}
