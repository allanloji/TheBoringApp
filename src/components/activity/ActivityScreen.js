import React, { Component } from 'react';
import {Dimensions, View, FlatList} from 'react-native';

// The screen's width
const {width, height} = Dimensions.get('window');

class ActivityScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {viewStyle, containerStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={containerStyle}>
                    <FlatList
                        data={testCoupons}
                        renderItem={({item, index}) => (
                            <View>
                                <BuyCard coupon={item} onDetail={this.props.onDetail}/>
                            </View>
                        )
                        }
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={<View style={{ height: 0, marginBottom: 100 }}></View>}
                    />

                </View>

            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#E7E7E7',
        height,
        marginTop: 20,
        width
    },
    containerStyle: {
        backgroundColor: '#E7E7E7',
        height,
        marginLeft: 10,
        width: width -20,
    },

};

export default ActivityScreen;
