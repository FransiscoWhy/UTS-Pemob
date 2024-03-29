import React, { PureComponent } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

class News extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getNews() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json");
      const json = await response.json();
  
      // Console log untuk melihat struktur data
      console.log("API Response:", json);
  
      // Pastikan 'articles' ada dalam respons sebelum diakses
      if (json && json.articles) {
        this.setState({ data: json.articles });
      } else {
        console.error("Data structure is not as expected:", json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  
  

  componentDidMount() {
    this.getNews();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("NewsDetail", { data: item })}
        >
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemBorder}></View>
      </>
    );
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#AA0002" />
        ) : (
        <FlatList
          data={data}
          keyExtractor={({ link }, index) => `${link}_${index}`}
          renderItem={this.renderItem}
        />
        )}
      </View>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    padding: 20,
    backgroundColor: "white",
  },
  itemBorder: {
    borderWidth: 0.5,
    borderColor: "#cccccc",
  },
  itemImage: {
    width: 100,
    height: 80,
  },
  itemText: {
    fontSize: 20,
    width: windowWidth - 150,
    marginLeft: 15,
  },
});
