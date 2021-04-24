import React, { memo } from 'react';

interface TestProps {}

const Test: React.FC<TestProps> = () => {
  return <div>Hello world</div>;
};

export default memo(Test);
