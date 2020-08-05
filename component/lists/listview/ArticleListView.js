import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ArticleRow from '../row/ArticleRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ArticleListView = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ArticleRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
                keyExtractor={item => item.title}
            />

    </View>
);

export default ArticleListView;