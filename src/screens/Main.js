import React from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

export default class MainScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            routes: {},
        };
    }

    //fetch the api routes on initialization. Destructure them
    componentDidMount() {
        axios.get('https://api.covid19api.com/').then((res) => {
            console.log('res', res.data);
            this.setState({ routes: res.data });
        });
    }

    // REQUIRED: Two sets of commands. One to fetch the data at a given endpoint, the other to
    async getData() {
        const res = await axios.get('https://api.covid19api.com/countries');
        console.log(res.data);
    }

    render() {
        const { routes } = this.state;
        console.log(routes, 'ROUTEs');
        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text style={styles.sectionDescription}>
                            THIS APP ALLOWS YOU TO SEARCH AN API FOR UP TO DATE DATA ON THE
                            CORONAVIRUS
            </Text>
                        <Button
                            title="Go to details"
                            onPress={() => {
                                this.getData();
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        justifyContent: 'center',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
