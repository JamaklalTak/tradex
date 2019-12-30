import React, { useState } from 'react';

import TabStyleContainer from './Tab.style';

const Tab = (props) => {
    const { tabDataArray, viewType, selectedTab, _handleTabSelection } = props;
    const viewClass = viewType.toUpperCase() === 'H' ? 'horizontalView' : 'verticalView';
    const activeClass = viewType.toUpperCase() === 'H' ? 'activeH' : 'activeV';
    const fontSize = viewType.toUpperCase() === 'H' ? 'text16' : 'textNormal16';
    return(
        <TabStyleContainer viewType={viewType}>
        <div className={`tabContainer ${viewType.toUpperCase() === 'H' ? 'H' : 'V'}`}>
        {tabDataArray && tabDataArray.length > 0 &&
            tabDataArray.map(option => {
                return <div
                    key={option.id}
                    id={option.id}
                    className={`tabOption ${fontSize} ${(selectedTab === option.id) ? activeClass : viewClass}`}
                    onClick={() => _handleTabSelection(option.id, option.path)}
                >
                    {option.name}
                </div>
            })
        }
        </div>
        </TabStyleContainer>
    );
}

export default Tab;