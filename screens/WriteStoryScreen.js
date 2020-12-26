// import libraries
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
// make default class
export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state={
            text:''
        }
    }
    render() {
        return (
            <View >
                {/* <Text style={{textAlign:'center',marginTop:'26%',fontSize:30,color:'lightblue'}}>Hi this is write screen</Text> */}
                <Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: "Story Hub",
            style: { color: 'blue', fontSize: 20 },
          }}
        />
                <TextInput
                    placeholder="Enter title of story"
                    style={style.input}
                />
                <TextInput
                    placeholder="Enter author of story"
                    style={style.input}
                    
                />
                <TextInput
                     multiline={true}
                    placeholder="Write story"
                    style={{     marginTop: '6%',
                    width: '80%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    borderWidth: 4,
                    height: 500,}}                />

            </View>
        );
    }
}
const style = StyleSheet.create({
    input: {
        marginTop: '6%',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        borderWidth: 4,
        height: 50,
      },
})