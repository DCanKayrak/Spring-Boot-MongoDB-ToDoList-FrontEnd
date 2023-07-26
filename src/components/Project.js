import React from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
    const {projectId} = useParams();

  return (
    <div>
        PROJE {projectId}
    </div>
  )
}
