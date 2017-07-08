import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import ScrollableTabBar  from './ScrollableTabBar';
class SubTab extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {

        return (
            <ScrollableTabView
                tabBarPosition={'top'}
                renderTabBar={() => <ScrollableTabBar
                   activeTextColor={'rgba(255,255,255,0.99)'}
                   inactiveTextColor={'rgba(255,255,255,0.99)'}
                   tabsContainerStyle={{backgroundColor: '#1c667e', borderRadius: 49,}}
                   underlineStyle={{bottom: 5, left: 5, borderRadius: 49, height: 39, backgroundColor: 'rgba(5,195,249,0.9)'}}
                />}
            >
                <View tabLabel='Tab 1'>
                    <Text>Tab1.js</Text>
                </View>
                <View tabLabel='Tab 2'>
                    <Text>Tab2.js</Text>

                </View>
                <View tabLabel='Tab 3'>
                    <Text>Tab3.js</Text>

                </View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center'
    }
});

export default SubTab;
