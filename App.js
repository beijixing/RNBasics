/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet} from 'react-native';


class Blink extends Component {
	state = {isShowingText: true};
	componentDidMount() {
		setInterval(()=>{
			this.setState({
				isShowingText: !this.state.isShowingText
			});
		}, 1000);
	}

	render() {
		if (!this.state.isShowingText) {
			return null;
		};
		return (
			<Text> {this.props.text}</Text>
		);
		
	}
}

class Greeting extends Component {
	render() {
		return (
			<View style={{alignItes:'center', marginTop:50}}>
				<Text> Hello {this.props.name} !</Text>
			</View>
		
		);
	}
}

class LotsofStyles extends Component {
	render() {
		return (
			<View>
				<Text style={styles.red}> just red </Text>
				<Text style={styles.bigBlue}> just bigBlue </Text>
				<Text style={styles.bigBlue, styles.red}> Bigblue,then red </Text>
				<Text style={styles.red, styles.bigBlue}> red, then bigBlue </Text>
			</View>
		);
	}
}

class FixedDimensions extends Component {
	render() {
		return (
			<View>
				<View style={{width:50, height:50, backgroundColor:'powderblue'}} />
				<View style={{width:100, height:100, backgroundColor:'skyblue'}} />
				<View style={{width:120, height:120, backgroundColor:'steelblue'}} />
				
			</View>
		);
	}
}

class FlexDimensions extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<View style={{flex:1, backgroundColor:'red'}} />
				<View style={{flex:2, backgroundColor:'yellow'}} />
				<View style={{flex:3, backgroundColor:'blue'}} />
			</View>
		);
	}
}

export default class HelloWorldApp extends Component {
  render() {
	  let pic = {
		  uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
	  };
    return (

	   <View style={{alignItems: 'center'}}>
		   <Greeting name='Java' />
		   <Greeting name='Python' />
		   <Greeting name='iOS'/>
		   <Image source={pic} style={{width:193,height:110}} />

		   <Blink text='I love iOS'	/>
		   <Blink text='Yes blinking is so great '	/>
		   <LotsofStyles />
		   <FixedDimensions/>
		   <FlexDimensions/>
	   </View>
    );
  }
}


const styles = StyleSheet.create({
	bigBlue:{
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color:'red',
	},
});