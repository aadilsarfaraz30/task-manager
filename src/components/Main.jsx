import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import { useSelector } from 'react-redux';

const Main = () => {
  const { taskData, filtered } = useSelector(
    (state) => state.taskDetailsReducer
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    if (filtered) {
      const filteredData = taskData.filter((item) => item.status === filtered);
      setData(filteredData);
    } else {
      setData(taskData);
    }
  }, [taskData, filtered]);

  return (
    <div>
      <div className='flex'></div>
      <div className='flex flex-col gap-4'>
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
