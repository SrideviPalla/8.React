import React, { useState } from 'react';

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
          Tab 1
        </div>
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
          Tab 2
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
          Tab 3
        </div>
      </div>
      <div className="tab-panels">
        <div className={`tab-panel ${activeTab === 0 ? 'active' : ''}`}>Panel 1</div>
        <div className={`tab-panel ${activeTab === 1 ? 'active' : ''}`}>Panel 2</div>
        <div className={`tab-panel ${activeTab === 2 ? 'active' : ''}`}>Panel 3</div>
      </div>
    </div>
  );
}

export default TabComponent;







