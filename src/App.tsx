import { useState, useEffect } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import G6 from '@antv/g6';

const data = {
  id: 'Modeling Methods',
  children: [
    {
      id: 'Classification',
      children: [
        {
          id: 'Logistic regression',
        },
        {
          id: 'Linear discriminant analysis',
        },
        {
          id: 'Rules',
        },
      ],
    },
    {
      id: 'Consensus',
      children: [
        {
          id: 'Models diversity',
          children: [
            {
              id: 'Different initializations',
            },
          ],
        },
        {
          id: 'Methods',
          children: [
            {
              id: 'Classifier selection',
            },
            {
              id: 'Classifier fusion',
            },
          ],
        },
        {
          id: 'Common',
          children: [
            {
              id: 'Bagging',
            },
            {
              id: 'Boosting',
            },
            {
              id: 'AdaBoost',
            },
          ],
        },
      ],
    },
    {
      id: 'Regression',
      children: [
        {
          id: 'Multiple linear regression',
        },
      ],
    },
  ],
};
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const graph = new G6.TreeGraph({
      container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 1920, // Number，必须，图的宽度
      height: 1080, // Number，必须，图的高度
      fitView: true,
      linkCenter: true,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.getModel();
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        type: 'rect',
        size: [40, 20],
        style: {
          cursor: 'default',
          radius: 1,
        },
        labelCfg: {
          position: 'center',
          style: {
            textAlign: 'center',
            fontStyle: 'normal',
          },
        },
        icon: {
          width: '',
        },
      },
      defaultEdge: {
        position: 'middle',
        type: 'line',
        style: {
          stroke: 'rgb(79, 79, 79)',
          cursor: 'default',
          lineWidth: 1,
        },
        labelCfg: {
          position: 'middle',
          style: {
            textAlign: 'center',
            textBaseline: 'middle',
            fontStyle: 'normal',
          },
        },
      },
      layout: {
        type: 'compactBox', // 布局类型
        nodeSep: 30,
        rankSep: 50,

        direction: 'TB',
      },
    });
    graph.data(data);
    graph.render();
    return () => {
      graph.destroy();
    };
  }, []);
  return (
    <div className="App">
      <div id="mountNode"></div>
    </div>
  );
}

export default App;
