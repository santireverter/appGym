import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories from '../data/categorios.json'
import CardCategories from '../components/CardCategories'
import { colors } from '../global/colors'
import ReturnHomeButton from '../components/ReturnHomeButton'


const Categories = ({goHome}) => {
    return (
        <View style={styles.container}>
            <Header title='Categories'/>
            <ReturnHomeButton goHome={goHome}/>
            <FlatList
                data={categories}
                keyExtractor={item => item}
                renderItem={({item}) => <CardCategories item={item}/>}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        height: "100%",
        width: "100%",
    }
})