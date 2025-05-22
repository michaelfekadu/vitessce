export const network_vis = {
    name: 'network_vis',
    description: 'Spatial organization of the somatosensory cortex revealed by osmFISH',
    version: '1.0.15',
    initStrategy: 'auto',
    datasets: [
      
    ],
    coordinationSpace: {
      
    },
    layout: [
      {
        component: 'obsSets',
        props: {
          description: 'Example Glomeruli Network Visualization',
        },
        x: 0,
        y: 0,
        w: 3,
        h: 6,
      },
      {
        component: 'network-vis',
        x: 3,
        y: 0,
        w: 9,
        h: 6,
      },
      // {
      //   component: 'graph-network',
      //   x: 3,
      //   y: 3,
      //   w: 9,
      //   h: 2,
      // },
      
    ],
    
  };
  