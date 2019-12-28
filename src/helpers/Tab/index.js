import React from 'react';

import TabStyleContainer from './Tab.style';

const Tab = (props) => {
    const { tabDataArray, viewType, selectedTab, _handleTabSelection } = props;

    return(
        <TabStyleContainer viewType={viewType}>
        {tabDataArray && tabDataArray.length > 0 &&
            tabDataArray.map(option => {
                return <div
                    key={option.id}
                    id={option.id}
                    className={(selectedTab === option.id) ? 'tabOption active' : 'tabOption'}
                    onClick={() => _handleTabSelection(option.id, option.path)}
                >
                    {option.name}
                </div>
            })
        }
        </TabStyleContainer>
    );
}

export default Tab;