import React, { Component } from 'react'
import { Text, View, StyleSheet, Switch, TextInput, TouchableOpacity} from 'react-native'

export default class Row extends Component {
  render() {
      const {complete} = this.props;
      const textComponent = (
        <TouchableOpacity style={styles.textWrap} onLongPress = {() => this.props.onToggleEdit(true)}>
         <Text style={[styles.text,complete && styles.complete]}>{this.props.text} </Text>
        </TouchableOpacity>
      )
      const removeButton = (
        <TouchableOpacity onPress={this.props.onRemove}>
            <Text style={styles.destory}>X</Text>
        </TouchableOpacity>
      )
      const edittingComponent = (
          <View style= {styles.textWrap}>
              <TextInput 
                  onChangeText = {this.props.onUpdate}
                  autoFocus
                  value = {this.props.text}
                  style={styles.input}
                  multiline
              />

          </View>
      )
        const doneButton = (
            <TouchableOpacity style={styles.done} onPress = {() => this.props.onToggleEdit(false)}>
                <Text style={styles.doneText} >Save</Text>
            </TouchableOpacity>
        )
    return (
      <View style={styles.container}>
        <Switch
            value={complete}
            onValueChange={this.props.onComplete}
        /> 
      {this.props.editing ? edittingComponent : textComponent}
      {this.props.editing ? doneButton : removeButton }
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        padding: 10,
        flexDirection : "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    textWrap:{
        flex : 1,
        marginHorizontal:10,
    },
    complete:{
        textDecorationLine: "line-through"
    },
    destory: {
      fontSize: 30,
      color: "#cc9a9a"  
    },
    text:{
      fontSize: 24,
      color:"#4d4d4d"   
    },
    input: {
       height: 100,
       flex: 1,
       fontSize: 24,
       padding: 0,
       color: "#4d4d4d"
 
    },
    done: {
        borderRadius : 5,
        borderWidth: 2,
        borderColor: "#7be290",
        padding : 7
    },
    doneText:{
        color: "#4d4d4d",
        fontSize: 20
    }
})