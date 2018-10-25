import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default class Footer extends Component {
  render() {
    const {filter} = this.props;
    return (
      <View style={styles.container}>
      <Text>{this.props.count} Items </Text>
        <View style={styles.filters}>
            <TouchableOpacity style={[styles.filter, filter == "ALL" && styles.selected]} onPress={()=> this.props.onFilter("ALL")}>
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filter, filter == "ACTIVE" && styles.selected]} onPress={()=> this.props.onFilter("ACTIVE")}>
                <Text>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filter, filter == "COMPLETED" && styles.selected]} onPress={()=> this.props.onFilter("COMPLETED")}>
                <Text>Completed</Text>
            </TouchableOpacity>

        </View>
        <TouchableOpacity onPress={this.props.onClearComplete}>
            <Text>Clear</Text>
        </TouchableOpacity>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between"
    },
    filters: {
        flexDirection:"row"
    },
    filter: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "transparent"
    },
    selected: {
        borderColor: "rgba(175,47,47, .2)"
    }
})